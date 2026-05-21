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
      className="py-24"
      style={{ backgroundColor: "var(--color-cream-dark)" }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--color-sage-600)" }}
          >
            Proceso terapéutico
          </p>
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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 relative">
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
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
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
