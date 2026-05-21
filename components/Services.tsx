"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Wind, Flame, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Ansiedad",
    description:
      "Gestión de pensamientos intrusivos, preocupación excesiva y síntomas físicos de ansiedad generalizada.",
    accentColor: "var(--color-teal-700)",
    bgColor: "var(--color-teal-50)",
  },
  {
    icon: Heart,
    title: "Depresión",
    description:
      "Acompañamiento en procesos de tristeza persistente, pérdida de motivación y vacío emocional.",
    accentColor: "var(--color-sage-600)",
    bgColor: "var(--color-sage-50)",
  },
  {
    icon: Wind,
    title: "Ataques de pánico",
    description:
      "Intervención cognitivo-conductual para reducir y superar los episodios de pánico e hiperventilación.",
    accentColor: "var(--color-teal-700)",
    bgColor: "var(--color-teal-50)",
  },
  {
    icon: Flame,
    title: "Estrés y burnout",
    description:
      "Estrategias concretas para recuperar el equilibrio cuando el agotamiento interfiere con tu vida.",
    accentColor: "var(--color-sage-600)",
    bgColor: "var(--color-sage-50)",
  },
  {
    icon: Users,
    title: "Terapia de pareja",
    description:
      "Trabajo en comunicación, resolución de conflictos y vínculos para fortalecer la relación.",
    accentColor: "var(--color-teal-700)",
    bgColor: "var(--color-teal-50)",
  },
  {
    icon: Sparkles,
    title: "Autoestima y cambio personal",
    description:
      "Procesos de transformación personal, identidad y desarrollo del bienestar emocional a largo plazo.",
    accentColor: "var(--color-sage-600)",
    bgColor: "var(--color-sage-50)",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const card = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Services() {
  return (
    <section
      id="servicios"
      className="py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-labelledby="services-heading"
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
            Áreas de atención
          </p>
          <h2
            id="services-heading"
            className="text-4xl lg:text-5xl font-light mb-5"
            style={{
              color: "var(--color-night)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            Áreas en las que puedo acompañarte
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada proceso terapéutico es único. Trabajo con un enfoque personalizado
            adaptado a las necesidades específicas de cada persona.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={card}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: service.bgColor }}
                  aria-hidden="true"
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: service.accentColor }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-xl font-medium mb-2"
                  style={{
                    color: "var(--color-night)",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
