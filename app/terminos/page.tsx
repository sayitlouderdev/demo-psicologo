import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: `Términos y condiciones de uso del sitio web del ${DOCTOR.studio}.`,
  robots: { index: false, follow: false },
};

const LAST_UPDATE = "25 de mayo de 2026";

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm mb-10 transition-colors"
            style={{ color: "var(--color-teal-700)" }}
          >
            ← Volver al inicio
          </Link>

          {/* Header */}
          <div className="mb-12">
            <p
              className="text-sm font-medium uppercase tracking-widest mb-3"
              style={{ color: "var(--color-sage-600)" }}
            >
              Marco legal
            </p>
            <h1
              className="text-4xl lg:text-5xl font-light mb-4"
              style={{
                color: "var(--color-night)",
                fontFamily: "var(--font-cormorant), Georgia, serif",
              }}
            >
              Términos y Condiciones
            </h1>
            <p className="text-sm text-gray-400">Última actualización: {LAST_UPDATE}</p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-gray-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                1. Aceptación de los términos
              </h2>
              <p>
                Al acceder y utilizar el sitio web del <strong>{DOCTOR.studio}</strong> (en adelante "el Sitio"), usted acepta quedar vinculado por los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, le solicitamos que se abstenga de usar el Sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                2. Información y carácter orientativo
              </h2>
              <p>
                La información contenida en este Sitio tiene carácter <strong>exclusivamente informativo y orientativo</strong>. No constituye diagnóstico, prescripción ni recomendación clínica de ningún tipo. El contenido del Sitio no sustituye una evaluación psicológica profesional individualizada.
              </p>
              <p className="mt-3">
                En caso de emergencia o riesgo para la vida, contacte inmediatamente a los servicios de emergencia de su localidad (<strong>911 en México</strong>) o acuda a la sala de urgencias más cercana.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                3. Propiedad intelectual
              </h2>
              <p>
                Todos los contenidos del Sitio — incluyendo textos, imágenes, diseño, logotipos y código fuente — son propiedad del {DOCTOR.name} o de sus proveedores de contenido, y están protegidos por las leyes mexicanas e internacionales de derechos de autor y propiedad intelectual.
              </p>
              <p className="mt-3">
                Queda prohibida la reproducción, distribución, modificación o uso comercial de cualquier contenido del Sitio sin autorización previa y por escrito del titular.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                4. Uso aceptable
              </h2>
              <p>El usuario se compromete a utilizar el Sitio de forma lícita y a no:</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>Utilizar el Sitio para fines ilegales o no autorizados</li>
                <li>Transmitir contenido difamatorio, abusivo, amenazante u obsceno</li>
                <li>Intentar acceder sin autorización a sistemas o datos del Sitio</li>
                <li>Interferir con el funcionamiento normal del Sitio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                5. Confidencialidad de la relación terapéutica
              </h2>
              <p>
                La información compartida en el contexto de un proceso psicoterapéutico está protegida por el <strong>secreto profesional del psicólogo</strong>, conforme al Código Ético del Psicólogo en México y la legislación aplicable. El {DOCTOR.name} se compromete a mantener la más estricta confidencialidad sobre los datos y contenidos compartidos por sus pacientes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                6. Limitación de responsabilidad
              </h2>
              <p>
                El {DOCTOR.studio} no se hace responsable de los daños o perjuicios que pudieran derivarse del uso del Sitio, incluyendo — sin limitarse a — errores u omisiones en el contenido, interrupciones del servicio o decisiones tomadas con base en la información publicada.
              </p>
              <p className="mt-3">
                Los enlaces a sitios externos se proporcionan únicamente como referencia. No controlamos su contenido ni asumimos responsabilidad alguna sobre ellos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                7. Modificaciones
              </h2>
              <p>
                Nos reservamos el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán efectivas desde su publicación en el Sitio. El uso continuado del Sitio tras la publicación de cambios implica la aceptación de los nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                8. Ley aplicable y jurisdicción
              </h2>
              <p>
                Los presentes Términos se rigen por las leyes vigentes de los <strong>Estados Unidos Mexicanos</strong>. Para cualquier controversia derivada del uso del Sitio, las partes se someten a la jurisdicción de los tribunales competentes de <strong>Mérida, Yucatán, México</strong>, renunciando a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                9. Contacto
              </h2>
              <p>
                Para cualquier consulta relativa a estos Términos, puede contactarnos en:{" "}
                <a href={`mailto:${DOCTOR.email}`} style={{ color: "var(--color-teal-700)" }}>
                  {DOCTOR.email}
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
