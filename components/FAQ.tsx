"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto dura una sesión?",
    a: "Las sesiones tienen una duración estándar de 50 minutos. En casos específicos, como sesiones de evaluación inicial o ciertas modalidades de terapia de pareja, pueden acordarse sesiones de mayor duración.",
  },
  {
    q: "¿La terapia online funciona igual que la presencial?",
    a: "Sí. La evidencia científica indica que la terapia online es igual de eficaz que la presencial para la mayoría de las problemáticas. Lo importante es contar con un espacio privado, sin interrupciones, y una conexión estable a internet.",
  },
  {
    q: "¿Qué pasa en la primera cita?",
    a: "La primera sesión es una evaluación inicial donde conversamos sobre tu situación, lo que te trajo a consulta y lo que esperas de la terapia. No hay respuestas correctas ni incorrectas: es un espacio para conocernos, explorar y ver si hay sintonía.",
  },
  {
    q: "¿Atiendes terapia de pareja?",
    a: "Sí. Trabajo con parejas en situaciones de conflicto, comunicación difícil, crisis o momentos de transición. El enfoque es colaborativo: ambas personas participan activamente en el proceso.",
  },
  {
    q: "¿Cómo puedo agendar una cita?",
    a: "Puedes contactarme por WhatsApp, por teléfono o a través del formulario de contacto de este sitio. Te responderé a la brevedad para coordinar disponibilidad y confirmar tu primera sesión.",
  },
  {
    q: "¿La información que comparto es confidencial?",
    a: "Absolutamente. Todo lo que se comparte en sesión está protegido por el secreto profesional. La confidencialidad es uno de los pilares fundamentales de la práctica psicológica ética.",
  },
  {
    q: "¿Cuándo debería buscar ayuda psicológica?",
    a: "Siempre que sientas que algo interfiere con tu bienestar o funcionamiento cotidiano. No es necesario estar en crisis para beneficiarse de la terapia. Muchas personas también la utilizan como un espacio de crecimiento personal y autoconocimiento.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-answer-${index}`;

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 focus-visible:outline-none focus-visible:ring-2 rounded-sm"
        style={{ color: "var(--color-night)" }}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="font-medium text-base">{faq.q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{
            backgroundColor: open ? "var(--color-sage-100)" : "var(--color-cream)",
          }}
          aria-hidden="true"
        >
          {open ? (
            <Minus className="w-3.5 h-3.5" style={{ color: "var(--color-sage-600)" }} />
          ) : (
            <Plus className="w-3.5 h-3.5" style={{ color: "var(--color-sage-600)" }} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            role="region"
            aria-labelledby={`faq-q-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm leading-relaxed pb-5 pr-10">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--color-sage-600)" }}
          >
            Preguntas frecuentes
          </p>
          <h2
            id="faq-heading"
            className="text-4xl lg:text-5xl font-light"
            style={{
              color: "var(--color-night)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            Respuestas a tus dudas más comunes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl border border-gray-200 px-6 sm:px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
