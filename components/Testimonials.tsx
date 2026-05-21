"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Me sentí escuchada desde la primera sesión. El Dr. Aranda tiene una forma de trabajar muy cálida y, al mismo tiempo, muy clara. Aprendí herramientas concretas que uso cada día.",
    author: "Paciente, 34 años",
    tag: "Ansiedad",
  },
  {
    text: "Llegué en un momento muy difícil. El proceso fue claro, humano y profesional. Nunca me sentí juzgada, y eso marcó la diferencia para seguir adelante con la terapia.",
    author: "Paciente anónima",
    tag: "Depresión",
  },
  {
    text: "La terapia de pareja nos ayudó a comunicarnos de una manera que no sabíamos que era posible. Recomendamos ampliamente al Dr. Aranda.",
    author: "Pareja en proceso terapéutico",
    tag: "Terapia de pareja",
  },
  {
    text: "Tenía muchas dudas sobre si la terapia online podía funcionar. Me equivoqué: las sesiones fueron igual de efectivas y la comodidad de hacerlo desde casa fue un plus enorme.",
    author: "Paciente, 28 años",
    tag: "Terapia online",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-24"
      style={{ backgroundColor: "var(--color-teal-50)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--color-teal-700)" }}
          >
            Testimonios
          </p>
          <h2
            id="testimonials-heading"
            className="text-4xl lg:text-5xl font-light"
            style={{
              color: "var(--color-night)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            Lo que dicen quienes han pasado por aquí
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-white flex flex-col"
              cite="#"
            >
              {/* Quote mark */}
              <div
                className="text-4xl font-light leading-none mb-4 select-none"
                style={{
                  color: "var(--color-sage-300)",
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                {t.text}
              </p>

              <footer className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-700">{t.author}</span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "var(--color-sage-50)",
                    color: "var(--color-sage-700)",
                  }}
                >
                  {t.tag}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Testimonios anónimos compartidos con consentimiento. Los nombres han sido omitidos
          para proteger la confidencialidad.
        </p>
      </div>
    </section>
  );
}
