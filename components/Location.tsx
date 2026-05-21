"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { DOCTOR, MAPS_URL } from "@/lib/constants";

export function Location() {
  return (
    <section
      id="ubicacion"
      className="py-24"
      style={{ backgroundColor: "var(--color-cream-dark)" }}
      aria-labelledby="location-heading"
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
            style={{ color: "var(--color-sage-600)" }}
          >
            Ubicación
          </p>
          <h2
            id="location-heading"
            className="text-4xl lg:text-5xl font-light"
            style={{
              color: "var(--color-night)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            Consulta presencial en Mérida y atención online
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--color-sage-50)" }}
                  aria-hidden="true"
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "var(--color-sage-600)" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Dirección</p>
                  <address className="not-italic text-sm text-gray-500 leading-relaxed">
                    {DOCTOR.address.street}
                    <br />
                    {DOCTOR.address.colony}
                    <br />
                    {DOCTOR.address.city}
                  </address>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--color-teal-50)" }}
                  aria-hidden="true"
                >
                  <Clock
                    className="w-5 h-5"
                    style={{ color: "var(--color-teal-700)" }}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-3">Horarios de atención</p>
                  <table className="w-full text-sm">
                    <tbody>
                      {DOCTOR.hours.map((h) => (
                        <tr key={h.days} className="border-b border-gray-100 last:border-0">
                          <td className="py-1.5 text-gray-700 font-medium pr-4">{h.days}</td>
                          <td
                            className="py-1.5 text-right"
                            style={{
                              color:
                                h.time === "Cerrado"
                                  ? "var(--color-sage-400)"
                                  : "var(--color-teal-700)",
                              fontWeight: h.time === "Cerrado" ? 400 : 500,
                            }}
                          >
                            {h.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-900 mb-4">Contacto directo</p>
              <div className="space-y-3">
                <a
                  href={`tel:${DOCTOR.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-[var(--color-teal-700)] transition-colors"
                  aria-label={`Llamar a ${DOCTOR.phone}`}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-teal-600)" }} aria-hidden="true" />
                  {DOCTOR.phone}
                </a>
                <a
                  href={`mailto:${DOCTOR.email}`}
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-[var(--color-teal-700)] transition-colors"
                  aria-label={`Enviar email a ${DOCTOR.email}`}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-teal-600)" }} aria-hidden="true" />
                  {DOCTOR.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-3xl overflow-hidden shadow-md relative"
              style={{ aspectRatio: "4/3" }}
              aria-label="Mapa de ubicación del consultorio"
            >
              {/* Stylized map background */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(145deg, var(--color-teal-50) 0%, var(--color-sage-50) 60%, var(--color-cream) 100%)",
                }}
                aria-hidden="true"
              />
              {/* Grid lines simulating streets */}
              <div className="absolute inset-0 opacity-20" aria-hidden="true">
                {[20, 40, 60, 80].map((v) => (
                  <div
                    key={`h${v}`}
                    className="absolute left-0 right-0 h-px bg-gray-400"
                    style={{ top: `${v}%` }}
                  />
                ))}
                {[20, 40, 60, 80].map((v) => (
                  <div
                    key={`v${v}`}
                    className="absolute top-0 bottom-0 w-px bg-gray-400"
                    style={{ left: `${v}%` }}
                  />
                ))}
              </div>

              {/* Pin */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                aria-hidden="true"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "var(--color-teal-700)" }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div
                  className="mt-2 px-3 py-1.5 rounded-xl text-xs font-medium text-white shadow-md text-center max-w-[180px]"
                  style={{ backgroundColor: "var(--color-teal-800)" }}
                >
                  {DOCTOR.studio}
                  <br />
                  <span className="font-normal opacity-80">{DOCTOR.address.street}</span>
                </div>
              </div>

              {/* Overlay CTA */}
              <div className="absolute bottom-4 left-4 right-4">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium text-white transition-all hover:-translate-y-0.5 shadow-lg"
                  style={{ backgroundColor: "var(--color-teal-700)" }}
                  aria-label="Abrir ubicación en Google Maps"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Cómo llegar → Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
