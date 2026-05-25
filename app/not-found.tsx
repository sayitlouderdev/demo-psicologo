import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        className="flex flex-col items-center justify-center text-center px-4 py-32 min-h-[100dvh]"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <p
          className="text-[9rem] font-light leading-none mb-6 select-none"
          style={{
            color: "var(--color-teal-800)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            opacity: 0.15,
          }}
          aria-hidden="true"
        >
          404
        </p>

        <h1
          className="text-3xl lg:text-4xl font-light mb-4 -mt-16"
          style={{
            color: "var(--color-night)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
          }}
        >
          Página no encontrada
        </h1>

        <p className="text-gray-500 text-base max-w-sm leading-relaxed mb-10">
          El enlace puede haber cambiado o ya no está disponible. Vuelve al
          inicio para continuar navegando.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-medium text-sm transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          style={{ backgroundColor: "var(--color-teal-700)" }}
        >
          ← Volver al inicio
        </Link>
      </main>
      <Footer />
    </>
  );
}
