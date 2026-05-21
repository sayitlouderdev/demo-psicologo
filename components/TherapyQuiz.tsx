"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, AlertCircle, RotateCcw } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";

const steps = [
  {
    id: "issue",
    question: "¿Qué estás viviendo ahora?",
    options: [
      { value: "ansiedad", label: "Ansiedad o preocupación constante" },
      { value: "depresion", label: "Tristeza o pérdida de motivación" },
      { value: "panico", label: "Ataques de pánico o miedo intenso" },
      { value: "estres", label: "Estrés o agotamiento (burnout)" },
      { value: "pareja", label: "Dificultades en mi relación de pareja" },
      { value: "otro", label: "Algo que me cuesta expresar con palabras" },
    ],
  },
  {
    id: "modality",
    question: "¿Prefieres terapia online o presencial?",
    options: [
      { value: "online", label: "Prefiero online, desde casa" },
      { value: "presencial", label: "Prefiero presencial en Mérida" },
      { value: "indistinto", label: "Lo que esté disponible" },
    ],
  },
  {
    id: "type",
    question: "¿Buscas terapia individual o de pareja?",
    options: [
      { value: "individual", label: "Individual, para mí" },
      { value: "pareja", label: "Para mi pareja y para mí" },
      { value: "noSe", label: "Aún no lo tengo claro" },
    ],
  },
  {
    id: "timing",
    question: "¿Cuándo te gustaría comenzar?",
    options: [
      { value: "pronto", label: "Lo antes posible" },
      { value: "2semanas", label: "En las próximas 2 semanas" },
      { value: "explorando", label: "Solo estoy explorando opciones" },
    ],
  },
];

const issueLabels: Record<string, string> = {
  ansiedad: "ansiedad",
  depresion: "tristeza o pérdida de motivación",
  panico: "ataques de pánico",
  estres: "estrés o burnout",
  pareja: "dificultades en pareja",
  otro: "algo que me está afectando emocionalmente",
};
const typeLabels: Record<string, string> = {
  individual: "individual",
  pareja: "de pareja",
  noSe: "sin tipo definido aún",
};
const timingLabels: Record<string, string> = {
  pronto: "lo antes posible",
  "2semanas": "en las próximas 2 semanas",
  explorando: "por ahora solo estoy explorando",
};

function buildMessage(answers: Record<string, string>) {
  const issue = issueLabels[answers.issue] ?? "mi situación";
  const modality =
    answers.modality === "online"
      ? "online"
      : answers.modality === "presencial"
      ? "presencial"
      : "en cualquier modalidad";
  const type = typeLabels[answers.type] ?? "";
  const timing = timingLabels[answers.timing] ?? "";
  return `Hola, completé el cuestionario de su sitio web. Estoy atravesando ${issue} y me interesa una terapia ${type} de forma ${modality}. Me gustaría comenzar ${timing}. ¿Podrían compartirme disponibilidad?`;
}

function buildResult(answers: Record<string, string>) {
  const issue = issueLabels[answers.issue] ?? "lo que estás viviendo";
  const modality =
    answers.modality === "online"
      ? "en formato online"
      : answers.modality === "presencial"
      ? "de forma presencial en Mérida"
      : "en cualquier modalidad";
  const type = answers.type === "pareja" ? "de pareja" : "individual";
  return `En base a tus respuestas, una terapia ${type} ${modality} podría ser un buen punto de partida para abordar ${issue}. El Dr. Aranda trabaja con un enfoque cognitivo-conductual que proporciona herramientas concretas desde las primeras sesiones, sin rodeos.`;
}

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function TherapyQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const [dir, setDir] = useState(1);

  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;

  function next() {
    if (!selected) return;
    const newAnswers = { ...answers, [step.id]: selected };
    setAnswers(newAnswers);
    if (isLast) {
      setCompleted(true);
    } else {
      setDir(1);
      setCurrentStep((c) => c + 1);
      setSelected(null);
    }
  }

  function back() {
    if (currentStep === 0) return;
    setDir(-1);
    setCurrentStep((c) => c - 1);
    setSelected(answers[steps[currentStep - 1].id] ?? null);
  }

  function reset() {
    setCurrentStep(0);
    setAnswers({});
    setSelected(null);
    setCompleted(false);
    setDir(1);
  }

  const slide = {
    enter: (d: number) => ({ x: d > 0 ? 36 : -36, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -36 : 36, opacity: 0 }),
  };

  return (
    <section
      id="quiz"
      className="py-24"
      style={{ backgroundColor: "var(--color-teal-900)" }}
      aria-labelledby="quiz-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--color-sage-300)" }}
          >
            Orientación personalizada
          </p>
          <h2
            id="quiz-heading"
            className="text-4xl lg:text-5xl font-light text-white mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Encuentra el tipo de apoyo que puede encajar contigo
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <p>Este cuestionario no sustituye una evaluación profesional.</p>
          </div>
        </motion.div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          {!completed ? (
            <div className="p-8 sm:p-10">
              {/* Progress */}
              <div
                className="mb-8"
                role="progressbar"
                aria-valuenow={currentStep + 1}
                aria-valuemin={1}
                aria-valuemax={steps.length}
                aria-label="Progreso del cuestionario"
              >
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Pregunta {currentStep + 1} de {steps.length}</span>
                  <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: "var(--color-sage-500)" }}
                    initial={false}
                    animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={currentStep}
                  custom={dir}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <h3
                    className="text-2xl font-medium mb-6"
                    style={{
                      color: "var(--color-night)",
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    {step.question}
                  </h3>
                  <div className="space-y-3" role="group" aria-label={step.question}>
                    {step.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelected(option.value)}
                        className="w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium focus-visible:outline-none focus-visible:ring-2"
                        style={{
                          borderColor:
                            selected === option.value
                              ? "var(--color-sage-500)"
                              : "#e5e7eb",
                          backgroundColor:
                            selected === option.value
                              ? "var(--color-sage-50)"
                              : "white",
                          color:
                            selected === option.value
                              ? "var(--color-sage-700)"
                              : "#374151",
                        }}
                        aria-pressed={selected === option.value}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={back}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Pregunta anterior"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                  Atrás
                </button>
                <button
                  onClick={next}
                  disabled={!selected}
                  className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "var(--color-sage-500)" }}
                  aria-label={isLast ? "Ver resultado" : "Siguiente pregunta"}
                >
                  {isLast ? "Ver resultado" : "Continuar"}
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="p-8 sm:p-10"
            >
              <div className="text-center mb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--color-sage-50)" }}
                  aria-hidden="true"
                >
                  <MessageCircle
                    className="w-7 h-7"
                    style={{ color: "var(--color-sage-500)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-2xl font-medium"
                  style={{
                    color: "var(--color-night)",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  Una orientación para ti
                </h3>
              </div>

              <p
                className="text-base leading-relaxed mb-8 text-center rounded-2xl p-5 text-gray-600"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                {buildResult(answers)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl(buildMessage(answers))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-medium text-white transition-colors shadow-md"
                  style={{ backgroundColor: "var(--color-sage-500)" }}
                  aria-label="Escribir al Dr. Aranda por WhatsApp"
                >
                  <WaIcon />
                  Escribir al Dr. Aranda
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700 transition-colors"
                  aria-label="Reiniciar cuestionario"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  Reiniciar
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-6">
                Este cuestionario no sustituye una evaluación psicológica profesional.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
