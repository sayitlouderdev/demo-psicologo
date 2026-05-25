"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Wind, Flame, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Ansiedad",
    description:
      "Gestión de pensamientos intrusivos, preocupación excesiva y síntomas físicos de ansiedad generalizada.",
  },
  {
    icon: Heart,
    title: "Depresión",
    description:
      "Acompañamiento en procesos de tristeza persistente, pérdida de motivación y vacío emocional.",
  },
  {
    icon: Wind,
    title: "Ataques de pánico",
    description:
      "Intervención cognitivo-conductual para reducir y superar los episodios de pánico e hiperventilación.",
  },
  {
    icon: Flame,
    title: "Estrés y burnout",
    description:
      "Estrategias concretas para recuperar el equilibrio cuando el agotamiento interfiere con tu vida.",
  },
  {
    icon: Users,
    title: "Terapia de pareja",
    description:
      "Trabajo en comunicación, resolución de conflictos y vínculos para fortalecer la relación.",
  },
  {
    icon: Sparkles,
    title: "Autoestima y cambio personal",
    description:
      "Procesos de transformación personal, identidad y desarrollo del bienestar emocional a largo plazo.",
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
      className="relative py-28"
      aria-labelledby="services-heading"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/services-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      {/* Subtle dark scrim for heading readability */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.35)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4 text-white"
          >
            Áreas de atención
          </p>
          <h2
            id="services-heading"
            className="text-4xl lg:text-5xl font-light mb-5 text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Áreas en las que puedo acompañarte
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
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
                className="group rounded-2xl p-7 border border-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
                style={{ backgroundColor: "rgba(22,61,61,0.70)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                    aria-hidden="true"
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "var(--color-sage-300)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className="text-xl font-medium text-white"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p className="text-white text-base leading-relaxed">{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
