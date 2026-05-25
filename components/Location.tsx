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
              aria-label="Mapa de Mérida, Yucatán"
            >
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-89.75%2C20.85%2C-89.45%2C21.08&layer=mapnik"
                title="Mérida, Yucatán"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
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
