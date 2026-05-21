import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { DOCTOR } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
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
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <JsonLd />
        {children}
        <StickyMobileBar />
      </body>
    </html>
  );
}
