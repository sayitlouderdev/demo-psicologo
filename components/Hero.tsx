"use client";

import { motion } from "framer-motion";
import { Award, Star, Monitor, CheckCircle2, MessageSquare } from "lucide-react";
import { DOCTOR, whatsappUrl } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const WaIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const trustBadges = [
  { icon: Award, text: DOCTOR.experience },
  { icon: Star, text: DOCTOR.reviews },
  { icon: Monitor, text: "Online y presencial" },
  { icon: CheckCircle2, text: `Cédula: ${DOCTOR.license}` },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #163d3d 0%, #1e6464 55%, #1a3838 100%)",
      }}
      aria-label="Sección principal"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            background: "radial-gradient(circle, rgba(74,138,77,0.18), transparent 70%)",
            top: "-8%",
            right: "3%",
          }}
          animate={{ x: [0, 28, -12, 0], y: [0, -18, 14, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 380,
            height: 380,
            background: "radial-gradient(circle, rgba(201,168,76,0.12), transparent 70%)",
            bottom: "8%",
            left: "3%",
          }}
          animate={{ x: [0, -18, 10, 0], y: [0, 14, -8, 0], scale: [1, 0.96, 1.07, 1] }}
          transition={{ duration: 23, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)",
            top: "35%",
            left: "42%",
          }}
          animate={{ x: [0, 14, -7, 0], y: [0, -10, 7, 0] }}
          transition={{ duration: 27, repeat: Infinity, ease: "easeInOut", delay: 9 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Eyebrow */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm mb-8 border border-white/15"
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--color-sage-400)" }}
              />
              Terapia cognitivo-conductual · Mérida
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-light text-white leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Psicoterapia basada en evidencia para recuperar{" "}
              <em
                className="not-italic"
                style={{ color: "var(--color-gold-light, #d4b86a)" }}
              >
                claridad, calma
              </em>{" "}
              y dirección.
            </motion.h1>

            {/* Sub */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Acompañamiento psicológico individual y de pareja en Mérida y online,
              con un enfoque cálido, profesional y orientado a objetivos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-white font-medium text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: "var(--color-sage-500)" }}
                aria-label="Agendar cita por WhatsApp"
              >
                <WaIcon />
                Agendar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-base transition-all border border-white/20"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                Enviar mensaje
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.text} className="flex items-center gap-2 text-white/80 text-xs">
                    <Icon
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--color-gold-light, #d4b86a)" }}
                      aria-hidden="true"
                    />
                    {badge.text}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: doctor card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, var(--color-sage-500), transparent)",
                  transform: "translate(35%, -35%)",
                }}
                aria-hidden="true"
              />

              {/* Avatar */}
              <div className="flex flex-col items-center text-center mb-6">
                <div
                  className="w-24 h-24 rounded-full mb-4 flex items-center justify-center text-3xl font-light text-white shadow-inner"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-teal-700), var(--color-sage-500))",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                  role="img"
                  aria-label="Foto del Dr. Mateo Aranda Solís"
                >
                  MA
                </div>
                <h2
                  className="text-xl font-semibold mb-1"
                  style={{
                    color: "var(--color-night)",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  {DOCTOR.name}
                </h2>
                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: "var(--color-teal-700)" }}
                >
                  {DOCTOR.title}
                </p>
                <span
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-medium border"
                  style={{
                    backgroundColor: "var(--color-sage-50)",
                    color: "var(--color-sage-700)",
                    borderColor: "var(--color-sage-200)",
                  }}
                >
                  Terapia cognitivo-conductual
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { value: "8+", label: "años de experiencia" },
                  { value: "31", label: "valoraciones positivas" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-3 text-center"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <div
                      className="text-2xl font-semibold mb-0.5"
                      style={{
                        color: "var(--color-teal-700)",
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Availability pill */}
              <div
                className="flex items-center gap-2 p-3 rounded-xl border"
                style={{
                  backgroundColor: "var(--color-sage-50)",
                  borderColor: "var(--color-sage-100)",
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0"
                  style={{ backgroundColor: "var(--color-sage-500)" }}
                />
                <span className="text-sm" style={{ color: "var(--color-sage-700)" }}>
                  Aceptando nuevos pacientes
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
