"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const points = [
  "Intervenciones con respaldo científico y resultados medibles",
  "Objetivos claros y acordados desde la primera sesión",
  "Herramientas prácticas para aplicar en el día a día",
  "Proceso adaptado a tu ritmo y contexto de vida",
  "Terapia breve y focalizada cuando es adecuado",
  "Espacio seguro, confidencial y libre de juicio",
];

export function Approach() {
  return (
    <section
      id="enfoque"
      className="py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-labelledby="approach-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-sm font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--color-sage-600)" }}
            >
              Enfoque terapéutico
            </p>
            <h2
              id="approach-heading"
              className="text-4xl lg:text-5xl font-light mb-6"
              style={{
                color: "var(--color-night)",
                fontFamily: "var(--font-cormorant), Georgia, serif",
              }}
            >
              Terapia cognitivo-conductual con base científica
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              La terapia cognitivo-conductual (TCC) es uno de los enfoques psicológicos
              con mayor evidencia científica. Su objetivo es identificar y modificar patrones
              de pensamiento y comportamiento que generan malestar, para desarrollar nuevas
              formas de responder ante los desafíos de la vida.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Trabajo con cada persona desde un enfoque humano y flexible, integrando otras
              perspectivas cuando el proceso lo requiere. El objetivo siempre es claro: que
              puedas construir una vida más plena con herramientas que puedas usar más allá
              de la terapia.
            </p>

            <ul className="space-y-3" aria-label="Características del enfoque">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--color-sage-500)" }}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Quote card with background image */}
            <div className="relative rounded-3xl overflow-hidden mb-6">
              {/* Background image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/approach-quote-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden="true"
              />
              {/* Dark overlay for readability */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(26,38,56,0.90) 0%, rgba(45,63,85,0.85) 100%)",
                }}
                aria-hidden="true"
              />
              <div className="relative p-10 text-white">
                <p
                  className="text-2xl lg:text-3xl font-light leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  La terapia no es un espacio donde te dicen lo que tienes que hacer.
                  Es un lugar donde encontramos juntos el camino que ya está en ti.
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-white"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    MA
                  </div>
                  <div>
                    <p className="text-sm font-medium">{DOCTOR.name}</p>
                    <p className="text-xs" style={{ opacity: 0.6 }}>
                      {DOCTOR.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "TCC", label: "Enfoque principal" },
                { value: "8+", label: "Años de práctica" },
                { value: "100%", label: "Confidencial" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl"
                  style={{ backgroundColor: "var(--color-cream)" }}
                >
                  <div
                    className="text-2xl font-light mb-1"
                    style={{
                      color: "var(--color-teal-700)",
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
