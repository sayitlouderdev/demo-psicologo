"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const faqs = [
  {
    q: "¿Cuánto cuesta la primera sesión?",
    a: "La primera sesión tiene un costo desde $700 MXN. En ella realizamos una evaluación inicial para conocer tu situación, definir objetivos y decidir juntos si hay sintonía para trabajar. Las sesiones siguientes se coordinan directamente con el Dr. Aranda según tu proceso.",
  },
  {
    q: "¿Cuál es el horario de atención?",
    a: "Atendemos de lunes a viernes de 09:00 a 19:00 h, y los sábados de 10:00 a 14:00 h. Los domingos no hay consulta. Puedes contactarnos por WhatsApp o teléfono al +52 999 123 4567 para verificar disponibilidad.",
  },
  {
    q: "¿Qué pasa en la primera cita?",
    a: "La primera sesión es un espacio de evaluación y escucha. Conversamos sobre lo que te trae a consulta, tu historia y lo que esperas de la terapia. No hay respuestas correctas ni incorrectas — es una oportunidad para conocernos y ver si el enfoque del Dr. Aranda encaja con lo que necesitas.",
  },
  {
    q: "¿La terapia online funciona igual que la presencial?",
    a: "Sí. La evidencia científica respalda la eficacia de la terapia online para la mayoría de las problemáticas. Solo necesitas un espacio privado, sin interrupciones, y conexión estable a internet. El Dr. Aranda atiende de forma online para toda la República Mexicana.",
  },
  {
    q: "¿Atiendes terapia de pareja?",
    a: "Sí. El Dr. Aranda trabaja con parejas en situaciones de conflicto recurrente, problemas de comunicación, crisis de convivencia o momentos de transición. El proceso es colaborativo: ambas personas participan activamente desde la primera sesión.",
  },
  {
    q: "¿Dónde está el consultorio presencial?",
    a: "El consultorio está ubicado en Calle Brisa 214, Colonia Monteverde, Mérida, Yucatán. Si prefieres atención presencial, puedes agendar directamente por WhatsApp o teléfono para confirmar disponibilidad de espacio.",
  },
  {
    q: "¿La información que comparto es confidencial?",
    a: "Absolutamente. Todo lo que se comparte en sesión está protegido por el secreto profesional y el Código Ético del psicólogo. El Dr. Aranda cuenta con cédula profesional 9876543. La confidencialidad solo tiene excepciones en casos de riesgo grave para la vida, conforme a la normativa vigente.",
  },
];

function FAQItem({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const id = `faq-answer-${index}`;

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        id={`faq-q-${index}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm"
        style={{ color: "white" }}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="font-medium text-base text-white">{faq.q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{
            backgroundColor: open ? "rgba(144,194,144,0.20)" : "rgba(255,255,255,0.08)",
          }}
          aria-hidden="true"
        >
          {open ? (
            <Minus className="w-3.5 h-3.5" style={{ color: "var(--color-sage-300)" }} />
          ) : (
            <Plus className="w-3.5 h-3.5" style={{ color: "var(--color-sage-300)" }} />
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
            <p className="text-white/80 text-sm leading-relaxed pb-5 pr-10">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? -1 : i);
  }

  return (
    <AuroraBackground
      id="faq"
      className="py-32 text-white"
      style={{
        background: "linear-gradient(135deg, #1a2638 0%, #2d3f55 55%, #1a2638 100%)",
      }}
      showRadialGradient={false}
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--color-sage-300)" }}
          >
            Preguntas frecuentes
          </p>
          <h2
            id="faq-heading"
            className="text-4xl lg:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Respuestas a tus dudas más comunes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-white/10 px-6 sm:px-8"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} open={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
