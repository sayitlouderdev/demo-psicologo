import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Formato de datos inválido." }, { status: 400 });
    }

    // Validate with Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const firstIssue = result.error.issues[0]?.message ?? "Datos inválidos.";
      return NextResponse.json({ error: firstIssue }, { status: 422 });
    }

    const data = result.data;

    // Honeypot anti-spam check — return fake success silently
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ success: true });
    }

    const smtpConfigured = !!(
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    );

    if (smtpConfigured) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT ?? "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const toEmail = process.env.CONTACT_TO_EMAIL ?? "sayitlouder.dev@gmail.com";
      const fromEmail = process.env.SMTP_FROM ?? process.env.SMTP_USER ?? toEmail;

      await transporter.sendMail({
        from: `"${data.name}" <${fromEmail}>`,
        to: toEmail,
        replyTo: data.email,
        subject: `Nueva consulta desde el sitio web – ${data.name}`,
        text: buildTextBody(data),
        html: buildHtmlBody(data),
      });
    } else {
      // Fallback: save to local JSON file
      const submission = {
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        reason: data.reason,
        modality: data.modality,
        message: data.message,
        createdAt: new Date().toISOString(),
      };

      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "contact-submissions.json");

      await fs.mkdir(dataDir, { recursive: true });

      let submissions: unknown[] = [];
      try {
        const raw = await fs.readFile(filePath, "utf-8");
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) submissions = parsed;
      } catch {
        // File does not exist yet — start fresh
      }

      submissions.push(submission);
      await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf-8");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Error:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "Error interno del servidor. Por favor, intenta de nuevo más tarde." },
      { status: 500 }
    );
  }
}

function buildTextBody(data: {
  name: string;
  email: string;
  phone?: string;
  reason: string;
  modality: string;
  message: string;
}) {
  return `Nueva consulta desde el sitio web – Centro Psicológico Horizonte
--------------------------------------------------
Nombre:    ${data.name}
Email:     ${data.email}
Teléfono:  ${data.phone ?? "No indicado"}
Motivo:    ${data.reason}
Modalidad: ${data.modality}

Mensaje:
${data.message}
--------------------------------------------------
  `.trim();
}

function buildHtmlBody(data: {
  name: string;
  email: string;
  phone?: string;
  reason: string;
  modality: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /></head>
<body style="font-family:Arial,sans-serif;color:#1a2638;max-width:560px;margin:0 auto;padding:24px">
  <h2 style="color:#1e6464;border-bottom:2px solid #e5e7eb;padding-bottom:12px">
    Nueva consulta — Centro Psicológico Horizonte
  </h2>
  <table style="width:100%;border-collapse:collapse;font-size:14px">
    <tr style="border-bottom:1px solid #f3f4f6">
      <td style="padding:10px 8px;font-weight:600;width:110px;color:#374151">Nombre</td>
      <td style="padding:10px 8px">${escapeHtml(data.name)}</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6">
      <td style="padding:10px 8px;font-weight:600;color:#374151">Email</td>
      <td style="padding:10px 8px"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6">
      <td style="padding:10px 8px;font-weight:600;color:#374151">Teléfono</td>
      <td style="padding:10px 8px">${escapeHtml(data.phone ?? "No indicado")}</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6">
      <td style="padding:10px 8px;font-weight:600;color:#374151">Motivo</td>
      <td style="padding:10px 8px">${escapeHtml(data.reason)}</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6">
      <td style="padding:10px 8px;font-weight:600;color:#374151">Modalidad</td>
      <td style="padding:10px 8px">${escapeHtml(data.modality)}</td>
    </tr>
  </table>
  <div style="margin-top:20px;background:#f9fafb;border-left:4px solid #4a8a4d;padding:16px;border-radius:4px">
    <p style="margin:0 0 6px 0;font-weight:600;color:#374151;font-size:14px">Mensaje:</p>
    <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-line">${escapeHtml(data.message)}</p>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
