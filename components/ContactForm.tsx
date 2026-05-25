"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, MessageSquare, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { contactSchema, ContactFormData, REASON_LABELS, MODALITY_LABELS } from "@/lib/contact-schema";
import { DOCTOR, whatsappUrl, MAPS_URL } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        const json: { error?: string } = await res.json().catch(() => ({}));
        setServerError(json.error ?? "Ha ocurrido un error. Por favor, intenta de nuevo.");
        setStatus("error");
      }
    } catch {
      setServerError("Error de red. Revisa tu conexión e intenta de nuevo.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 bg-white";
  const inputBorder = (hasError: boolean) =>
    hasError ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-[var(--color-sage-200)] focus:border-[var(--color-sage-400)]";

  return (
    <section
      id="contacto"
      className="py-32"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <h2
            id="contact-heading"
            className="text-4xl lg:text-5xl font-light mb-4"
            style={{
              color: "var(--color-night)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            Da el primer paso
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Escríbeme o visítame en consulta. Te respondo a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: info + map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {/* Quick contacts */}
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: MessageSquare, label: "WhatsApp", value: DOCTOR.phone, href: whatsappUrl(), external: true },
                { icon: Phone, label: "Teléfono", value: DOCTOR.phone, href: `tel:${DOCTOR.phoneRaw}`, external: false },
                { icon: Mail, label: "Email", value: DOCTOR.email, href: `mailto:${DOCTOR.email}`, external: false },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all text-center"
                    aria-label={`${c.label}: ${c.value}`}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-cream)" }}
                      aria-hidden="true"
                    >
                      <Icon className="w-4 h-4" style={{ color: "var(--color-teal-700)" }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                      <p className="text-xs font-medium leading-tight" style={{ color: "var(--color-night)" }}>{c.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Address + hours */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--color-sage-50)" }}>
                    <MapPin className="w-4 h-4" style={{ color: "var(--color-sage-600)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Dirección</p>
                    <address className="not-italic text-sm text-gray-500 leading-relaxed">
                      {DOCTOR.address.street}<br />
                      {DOCTOR.address.colony}<br />
                      {DOCTOR.address.city}
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--color-teal-50)" }}>
                    <Clock className="w-4 h-4" style={{ color: "var(--color-teal-700)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Horarios</p>
                    <div className="space-y-0.5">
                      {DOCTOR.hours.map((h) => (
                        <p key={h.days} className="text-xs text-gray-500">
                          <span className="font-medium text-gray-700">{h.days}:</span> {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-89.75%2C20.85%2C-89.45%2C21.08&layer=mapnik"
                title="Mérida, Yucatán"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-medium text-white transition-all hover:-translate-y-0.5 shadow-md"
                  style={{ backgroundColor: "var(--color-teal-700)" }}
                  aria-label="Abrir en Google Maps"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  Cómo llegar → Google Maps
                </a>
              </div>
            </div>

            {/* Price note */}
            <div className="p-4 rounded-2xl border" style={{ backgroundColor: "var(--color-sage-50)", borderColor: "var(--color-sage-100)" }}>
              <p className="text-sm font-medium mb-0.5" style={{ color: "var(--color-sage-800)" }}>{DOCTOR.price}</p>
              <p className="text-xs" style={{ color: "var(--color-sage-600)" }}>
                Sin compromiso. La primera sesión es también una oportunidad para conocernos.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <CheckCircle2
                      className="w-14 h-14 mb-4"
                      style={{ color: "var(--color-sage-500)" }}
                      aria-hidden="true"
                    />
                    <h3
                      className="text-2xl font-medium mb-3"
                      style={{
                        color: "var(--color-night)",
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                      }}
                    >
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                      Gracias por tu mensaje. Te responderemos a la brevedad para coordinar
                      disponibilidad.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-sm font-medium px-5 py-2.5 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                      style={{ color: "var(--color-teal-700)" }}
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    aria-label="Formulario de contacto"
                  >
                    {/* Honeypot - hidden from real users */}
                    <input
                      {...register("honeypot")}
                      type="text"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="sr-only"
                      autoComplete="off"
                    />

                    <div className="space-y-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nombre completo <span className="text-red-400" aria-label="obligatorio">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Tu nombre"
                          autoComplete="name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={`${inputClass} ${inputBorder(!!errors.name)}`}
                          {...register("name")}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email + Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Correo electrónico <span className="text-red-400" aria-label="obligatorio">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="tu@correo.com"
                            autoComplete="email"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`${inputClass} ${inputBorder(!!errors.email)}`}
                            {...register("email")}
                          />
                          {errors.email && (
                            <p id="email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Teléfono (opcional)
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            placeholder="+52 999 000 0000"
                            autoComplete="tel"
                            className={`${inputClass} ${inputBorder(!!errors.phone)}`}
                            {...register("phone")}
                          />
                        </div>
                      </div>

                      {/* Reason */}
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Motivo de consulta <span className="text-red-400" aria-label="obligatorio">*</span>
                        </label>
                        <select
                          id="reason"
                          aria-invalid={!!errors.reason}
                          aria-describedby={errors.reason ? "reason-error" : undefined}
                          className={`${inputClass} ${inputBorder(!!errors.reason)}`}
                          {...register("reason")}
                        >
                          <option value="">Selecciona una opción</option>
                          {Object.entries(REASON_LABELS).map(([val, label]) => (
                            <option key={val} value={val}>{label}</option>
                          ))}
                        </select>
                        {errors.reason && (
                          <p id="reason-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                            {errors.reason.message}
                          </p>
                        )}
                      </div>

                      {/* Modality */}
                      <div>
                        <fieldset>
                          <legend className="block text-sm font-medium text-gray-700 mb-2">
                            Modalidad preferida <span className="text-red-400" aria-label="obligatorio">*</span>
                          </legend>
                          <div className="flex flex-wrap gap-3">
                            {Object.entries(MODALITY_LABELS).map(([val, label]) => (
                              <label
                                key={val}
                                className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
                              >
                                <input
                                  type="radio"
                                  value={val}
                                  className="accent-[var(--color-sage-500)]"
                                  aria-label={label}
                                  {...register("modality")}
                                />
                                {label}
                              </label>
                            ))}
                          </div>
                          {errors.modality && (
                            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                              {errors.modality.message}
                            </p>
                          )}
                        </fieldset>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Mensaje <span className="text-red-400" aria-label="obligatorio">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="Cuéntame brevemente qué te trae por aquí..."
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          className={`${inputClass} ${inputBorder(!!errors.message)} resize-none`}
                          {...register("message")}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      {/* Privacy */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            aria-invalid={!!errors.privacy}
                            aria-describedby={errors.privacy ? "privacy-error" : undefined}
                            className="mt-0.5 accent-[var(--color-sage-500)] flex-shrink-0"
                            {...register("privacy")}
                          />
                          <span className="text-xs text-gray-500 leading-relaxed">
                            He leído y acepto que mis datos sean utilizados para gestionar
                            esta solicitud de contacto, conforme a la{" "}
                            <Link
                              href="/aviso-de-privacidad"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-gray-700 transition-colors"
                            >
                              política de privacidad
                            </Link>.{" "}
                            <span className="text-red-400" aria-label="obligatorio">*</span>
                          </span>
                        </label>
                        {errors.privacy && (
                          <p id="privacy-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                            {errors.privacy.message}
                          </p>
                        )}
                      </div>

                      {/* Server error */}
                      {status === "error" && serverError && (
                        <div
                          className="flex items-start gap-2 p-3 rounded-xl text-sm text-red-700 bg-red-50 border border-red-100"
                          role="alert"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          {serverError}
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-medium text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-px hover:shadow-md"
                        style={{ backgroundColor: "var(--color-teal-700)" }}
                        aria-label="Enviar formulario de contacto"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" aria-hidden="true" />
                            Enviar mensaje
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-gray-400">
                        Respondo en un plazo de 24 h en días hábiles
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
