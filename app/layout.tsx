import type { Metadata } from "next";
import type React from "react";
import { Forum, Elms_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { DOCTOR } from "@/lib/constants";

const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cormorant",
  display: "swap",
});

const elmsSans = Elms_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${DOCTOR.name} – Psicólogo en Mérida | ${DOCTOR.studio}`,
    template: `%s | ${DOCTOR.studio}`,
  },
  description:
    "Psicoterapia basada en evidencia en Mérida y online. Especialista en ansiedad, depresión, ataques de pánico y terapia de pareja. Primera sesión desde $700 MXN.",
  keywords: [
    "psicólogo Mérida",
    "terapia cognitivo-conductual Yucatán",
    "psicoterapeuta online México",
    "ansiedad depresión Mérida",
    "terapia de pareja Mérida",
    "psicólogo clínico Yucatán",
  ],
  authors: [{ name: DOCTOR.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: `${DOCTOR.name} – Psicólogo clínico en Mérida`,
    description:
      "Psicoterapia basada en evidencia. Ansiedad, depresión, terapia de pareja y más. Atención presencial en Mérida y online.",
    siteName: DOCTOR.studio,
  },
  twitter: {
    card: "summary_large_image",
    title: `${DOCTOR.name} – Psicólogo en Mérida`,
    description:
      "Psicoterapia basada en evidencia. Atención presencial y online.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${forum.variable} ${elmsSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium focus:text-white"
          style={{ backgroundColor: "var(--color-teal-700)" } as React.CSSProperties}
        >
          Saltar al contenido
        </a>
        <JsonLd />
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
        <StickyMobileBar />
      </body>
    </html>
  );
}
