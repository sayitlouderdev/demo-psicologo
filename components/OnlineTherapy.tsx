"use client";

import { motion } from "framer-motion";
import { Video, Shield, Clock, Globe, CheckCircle2 } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

const benefits = [
  {
    icon: Video,
    title: "Sesiones por videollamada",
    description: "Con la misma calidad y profundidad que la terapia presencial.",
  },
  {
    icon: Shield,
    title: "Espacio seguro y confidencial",
    description: "Privacidad garantizada en cada sesión, desde donde estés.",
  },
  {
    icon: Clock,
    title: "Horarios flexibles",
    description: "Ideal si tienes una agenda exigente o vives fuera de Mérida.",
  },
  {
    icon: Globe,
    title: "Atención a toda la República",
    description: "Sin importar en qué ciudad de México te encuentres.",
  },
];

export function OnlineTherapy() {
  return (
    <section
      id="online"
      className="py-24"
      style={{
        background: "linear-gradient(135deg, #163d3d 0%, #1e6464 55%, #1a3838 100%)",
      }}
      aria-labelledby="online-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy — text on dark background */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-sm font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--color-sage-300)" }}
            >
              Terapia online
            </p>
            <h2
              id="online-heading"
              className="text-4xl lg:text-5xl font-light mb-6 text-white"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Terapia online con la misma cercanía y confidencialidad
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              La distancia no es un obstáculo para comenzar un proceso terapéutico de
              calidad. Las sesiones online siguen el mismo rigor, estructura y calidez que
              la atención presencial. Solo necesitas un espacio tranquilo y conexión a internet.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                      aria-hidden="true"
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: "var(--color-sage-300)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-0.5 text-white">
                        {benefit.title}
                      </p>
                      <p className="text-xs text-white/75 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={whatsappUrl(
                "Hola, me gustaría información sobre la terapia online con el Dr. Aranda."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm transition-all hover:-translate-y-px shadow-md hover:shadow-lg"
              style={{
                backgroundColor: "white",
                color: "var(--color-teal-800)",
              }}
              aria-label="Consultar disponibilidad de terapia online por WhatsApp"
            >
              Consultar disponibilidad online
            </a>
          </motion.div>

          {/* Right: mockup card — light on dark */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-3xl p-8 relative overflow-hidden shadow-2xl"
              style={{ backgroundColor: "var(--color-cream)" }}
              aria-hidden="true"
            >
              <div className="relative z-10">
                {/* Video call UI mockup */}
                <div
                  className="rounded-2xl p-5 mb-6 border"
                  style={{
                    backgroundColor: "white",
                    borderColor: "var(--color-cream-dark)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="text-xs ml-1 text-gray-400">
                      Sesión en curso
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className="aspect-video rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-teal-50)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--color-sage-600), var(--color-sage-500))",
                        }}
                      >
                        MA
                      </div>
                    </div>
                    <div
                      className="aspect-video rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-cream-dark)" }}
                    >
                      <span className="text-xs text-gray-400">Tú</span>
                    </div>
                  </div>
                </div>

                {/* Feature list */}
                <div className="space-y-3">
                  {[
                    "Sesiones de 50 minutos",
                    "Plataforma segura y cifrada",
                    "Sin desplazamientos",
                    "Seguimiento estructurado",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "var(--color-sage-500)" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-night)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative blob */}
              <div
                className="absolute top-0 right-0 w-44 h-44 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(74,138,77,0.08), transparent)",
                  transform: "translate(30%, -30%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
