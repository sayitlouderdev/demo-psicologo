import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: `Aviso de privacidad del ${DOCTOR.studio} — ${DOCTOR.name}. Información sobre el tratamiento de sus datos personales conforme a la LFPDPPP.`,
  robots: { index: false, follow: false },
};

const LAST_UPDATE = "25 de mayo de 2026";

export default function AvisoPrivacidadPage() {
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
              Protección de datos
            </p>
            <h1
              className="text-4xl lg:text-5xl font-light mb-4"
              style={{
                color: "var(--color-night)",
                fontFamily: "var(--font-cormorant), Georgia, serif",
              }}
            >
              Aviso de Privacidad
            </h1>
            <p className="text-sm text-gray-400">Última actualización: {LAST_UPDATE}</p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-gray-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                1. Identidad y domicilio del responsable
              </h2>
              <p>
                En cumplimiento con lo establecido en la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> y su Reglamento, el <strong>{DOCTOR.studio}</strong>, dirigido por el {DOCTOR.name} (en adelante "el Responsable"), con domicilio en {DOCTOR.address.full}, es responsable del tratamiento de sus datos personales.
              </p>
              <p className="mt-3">
                Para cualquier consulta relacionada con este aviso, puede contactarnos en:{" "}
                <a href={`mailto:${DOCTOR.email}`} style={{ color: "var(--color-teal-700)" }}>
                  {DOCTOR.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                2. Datos personales recabados
              </h2>
              <p>Para la prestación de nuestros servicios y la atención de sus solicitudes, recabamos las siguientes categorías de datos personales:</p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li><strong>Datos de identificación:</strong> nombre completo</li>
                <li><strong>Datos de contacto:</strong> correo electrónico, número de teléfono</li>
                <li><strong>Datos sobre el motivo de consulta:</strong> información que usted comparte voluntariamente en el formulario de contacto o durante las sesiones (considerados datos sensibles conforme al artículo 3, fracción VI de la LFPDPPP)</li>
              </ul>
              <p className="mt-3 text-sm p-4 rounded-xl border" style={{ backgroundColor: "var(--color-cream-dark)", borderColor: "var(--color-sage-100)" }}>
                <strong>Datos sensibles:</strong> Los datos relacionados con su estado de salud mental son considerados datos sensibles por la LFPDPPP. Su tratamiento requiere de su consentimiento expreso y se realizará con especial diligencia y confidencialidad, conforme al secreto profesional psicológico.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                3. Finalidades del tratamiento
              </h2>
              <p><strong>Finalidades primarias</strong> (necesarias para la relación):</p>
              <ul className="mt-2 space-y-1.5 list-disc list-inside">
                <li>Atender y dar seguimiento a sus solicitudes de información o cita</li>
                <li>Agendar, confirmar y gestionar sesiones terapéuticas</li>
                <li>Brindar atención psicológica y llevar el seguimiento del proceso terapéutico</li>
                <li>Dar cumplimiento a obligaciones legales aplicables</li>
              </ul>
              <p className="mt-4"><strong>Finalidades secundarias</strong> (puede oponerse a ellas):</p>
              <ul className="mt-2 space-y-1.5 list-disc list-inside">
                <li>Envío de información sobre actualizaciones del servicio o comunicaciones institucionales</li>
              </ul>
              <p className="mt-3">
                Si no desea que sus datos se utilicen para las finalidades secundarias, puede manifestarlo enviando un correo a{" "}
                <a href={`mailto:${DOCTOR.email}`} style={{ color: "var(--color-teal-700)" }}>{DOCTOR.email}</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                4. Transferencias de datos
              </h2>
              <p>
                El Responsable <strong>no comparte, vende, cede ni transfiere</strong> sus datos personales a terceros, salvo en los casos previstos en el artículo 37 de la LFPDPPP (autoridades competentes o mandato legal) o cuando cuente con su consentimiento expreso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                5. Derechos ARCO
              </h2>
              <p>
                Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> (derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, envíe una solicitud a{" "}
                <a href={`mailto:${DOCTOR.email}`} style={{ color: "var(--color-teal-700)" }}>{DOCTOR.email}</a> indicando:
              </p>
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>Su nombre completo y datos de contacto</li>
                <li>El derecho que desea ejercer y los datos a los que se refiere</li>
                <li>Copia de una identificación oficial vigente</li>
              </ul>
              <p className="mt-3">
                Responderemos a su solicitud en un plazo máximo de <strong>20 días hábiles</strong>, conforme a lo establecido en la LFPDPPP.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                6. Seguridad de los datos
              </h2>
              <p>
                Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o divulgación no autorizados, conforme al artículo 19 de la LFPDPPP.
              </p>
              <p className="mt-3">
                Las sesiones online se realizan a través de plataformas con cifrado de extremo a extremo. Toda la información clínica está sujeta al secreto profesional del psicólogo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                7. Uso de cookies y tecnologías similares
              </h2>
              <p>
                Este sitio web puede utilizar cookies técnicas necesarias para su correcto funcionamiento. No utilizamos cookies de rastreo publicitario ni compartimos datos de navegación con terceros. Puede deshabilitar las cookies desde la configuración de su navegador, aunque esto podría afectar la funcionalidad del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                8. Cambios al aviso de privacidad
              </h2>
              <p>
                Nos reservamos el derecho de modificar este aviso en cualquier momento. Cualquier cambio relevante será notificado a través de este sitio web. Le recomendamos revisarlo periódicamente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-3" style={{ color: "var(--color-night)", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                9. Autoridad competente
              </h2>
              <p>
                Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede acudir al <strong>Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong>, autoridad competente en México:{" "}
                <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-teal-700)" }}>
                  www.inai.org.mx
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
