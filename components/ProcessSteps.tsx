"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Evaluación inicial",
    description:
      "En la primera sesión exploramos juntos tu situación, objetivos y necesidades. Es un espacio de escucha sin juicio donde puedes hablar con total libertad.",
  },
  {
    icon: FileText,
    title: "Plan terapéutico personalizado",
    description:
      "Definimos metas claras y un plan de trabajo adaptado a tu ritmo, tu contexto y lo que quieres lograr. Nada genérico: todo diseñado para ti.",
  },
  {
    icon: TrendingUp,
    title: "Herramientas prácticas y seguimiento",
    description:
      "Trabajamos con técnicas basadas en evidencia y hacemos seguimiento continuo de tu avance, ajustando el proceso cuando es necesario.",
  },
];

export function ProcessSteps() {
  return (
    <section
      id="proceso"
      className="py-16"
      style={{ backgroundColor: "var(--color-cream-dark)" }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="process-heading"
            className="text-4xl lg:text-5xl font-light"
            style={{
              color: "var(--color-night)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            Un proceso claro desde la primera sesión
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Dashed connector line between the 3 step circles — desktop only */}
          <div
            className="hidden md:block absolute pointer-events-none"
            style={{
              top: "2rem",
              left: "calc(16.67% + 2rem)",
              right: "calc(16.67% + 2rem)",
              height: "1px",
              backgroundImage:
                "repeating-linear-gradient(to right, var(--color-sage-200) 0, var(--color-sage-200) 6px, transparent 6px, transparent 14px)",
            }}
            aria-hidden="true"
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.14 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-teal-800), var(--color-teal-600))",
                    }}
                    aria-hidden="true"
                  >
                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white"
                    style={{ backgroundColor: "var(--color-gold)" }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                </div>

                <h3
                  className="text-xl font-medium mb-3"
                  style={{
                    color: "var(--color-night)",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Price note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border text-sm"
            style={{
              backgroundColor: "white",
              borderColor: "var(--color-sage-200)",
              color: "var(--color-sage-700)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--color-sage-500)" }}
              aria-hidden="true"
            />
            Primera sesión desde $700 MXN · Sin compromiso
          </div>
        </motion.div>
      </div>
    </section>
  );
}
