"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DOCTOR, NAV_LINKS, whatsappUrl } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-[var(--color-night)]" : "text-white";
  const mutedColor = scrolled ? "text-[var(--color-sage-600)]" : "text-white/70";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex flex-col leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sage-500)] rounded-md px-1"
            aria-label={`${DOCTOR.studio} — inicio`}
          >
            <span
              className={`text-lg font-semibold tracking-tight transition-colors ${textColor}`}
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {DOCTOR.studio}
            </span>
            <span className={`text-xs transition-colors ${mutedColor}`}>
              {DOCTOR.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-sage-500)] ${textColor}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-px"
              style={{ backgroundColor: "var(--color-sage-500)" }}
              aria-label="Agendar cita por WhatsApp"
            >
              Agendar cita
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? `${textColor} hover:bg-gray-100` : "text-white hover:bg-white/10"
              }`}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            role="navigation"
            aria-label="Menú móvil"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-[var(--color-night)] hover:bg-[var(--color-sage-50)] hover:text-[var(--color-sage-600)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: "var(--color-sage-500)" }}
              >
                Agendar cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
