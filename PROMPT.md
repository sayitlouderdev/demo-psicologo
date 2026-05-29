# Prompt — Landing Page Portfolio Psicólogo

## Prompt originale

```
Sei un senior full stack developer e UI/UX designer. Devi creare da zero una landing page portfolio moderna, premium e completamente funzionante per uno psicologo fittizio.

IMPORTANTE:
- Non usare dati reali di persone, indirizzi, numeri o profili esistenti.
- Tutti i dati devono essere fittizi.
- L'unica email reale da usare per test è: hola@liberastudio.com
- Il progetto deve essere creato dentro questa cartella Windows: D:\CHATGPT\PSICOLOGO
- Se la cartella non esiste, creala.
- Non limitarti a generare file isolati: crea un progetto completo installabile, avviabile e testabile subito.
- Non chiedermi chiarimenti: prendi decisioni ragionevoli e completa tutto.

OBIETTIVO:
Crea un sito web/landing page moderno per uno psicologo fittizio, pensato come progetto portfolio per un'agenzia web. Il sito deve sembrare reale, professionale, elegante, veloce, responsive e pronto per essere mostrato a un cliente.

LINGUA DEL SITO: Spagnolo neutro (México)

DATI FITTIZI:
- Nome: Dr. Mateo Aranda Solís
- Professione: Psicólogo clínico y psicoterapeuta
- Studio: Centro Psicológico Horizonte
- Indirizzo: Calle Brisa 214, Colonia Monteverde, Mérida, Yucatán, México
- Telefono: +52 999 123 4567
- Email test: hola@liberastudio.com
- Cédula: 9876543 | Esperienza: 8 años | Valoraciones: 31 | Prezzo: $700 MXN

STACK: Next.js ultima versione · TypeScript · Tailwind CSS · Framer Motion · shadcn/ui · lucide-react · React Hook Form · Zod · Nodemailer · ESLint

STRUTTURA LANDING (12 sezioni):
Header sticky · Hero · Problemi trattati · Processo 3 step · Quiz interattivo · Enfoque TCC · Terapia online · Testimonianze · FAQ · Ubicación · Form contatti · Footer

FORM CONTATTI:
- Campi: nome, email, telefono, motivo, modalità (online/presencial/indistinto), messaggio, consenso privacy
- Validazione client: React Hook Form + Zod
- Validazione server: Zod nella API route POST /api/contact
- Con SMTP configurato: invia email a hola@liberastudio.com
- Senza SMTP: salva in /data/contact-submissions.json
- Anti-spam: honeypot hidden field
- Stati: loading, success, error

QUIZ INTERATTIVO (TherapyQuiz):
- 4 step: problema attuale / modalità / tipo terapia / timing
- Messaggio WhatsApp dinamico in base alle risposte
- Disclaimer "no sustituye evaluación profesional"

SEO: metadata Next.js + JSON-LD LocalBusiness/ProfessionalService

ACCESSIBILITÀ: HTML semantico, aria-label, contrasto, focus states, keyboard nav

DESIGN:
- Mood: calma, fiducia, rigore scientifico, calore umano, eleganza minimal
- Palette: verde salvia, teal scuro, crema caldo, blu notte, accenti dorati
- Font: Cormorant Garamond (heading) + Inter (body)
- Animazioni Framer Motion: reveal scroll, blob animati, hover microinterazioni

DELIVERABLE:
- npm install → npm run dev funzionante
- Build TypeScript pulita senza errori
- README.md + .env.example
- Codice componentizzato (15+ componenti)
- Nessun dato reale tranne hola@liberastudio.com
```

---

## Risultato della build

**Stack effettivo installato:**
- Next.js 16.2.6 (Turbopack)
- React 19
- Tailwind CSS 4 (configurazione CSS-first via `@theme`)
- Framer Motion 11
- React Hook Form 7 + @hookform/resolvers 5
- Zod 4.4.3
- Nodemailer 6
- lucide-react
- TypeScript 5

**Build check:** `npm run build` → ✅ Zero errori TypeScript, compilazione pulita

**Dev server:** `npm run dev` → `✓ Ready in 387ms` → `http://localhost:3000`

---

## Componenti creati

| File | Descrizione |
|------|-------------|
| `components/Header.tsx` | Header sticky, trasparente su hero → bianco con blur dopo scroll, nav desktop + hamburger mobile animato |
| `components/Hero.tsx` | Hero full-height, blob animati Framer Motion, card Dr. Aranda, trust badges, CTA WhatsApp |
| `components/Services.tsx` | Griglia 6 card con stagger animation at scroll, icone lucide-react |
| `components/ProcessSteps.tsx` | 3 step con cerchi sfumati teal + badge numerico dorato |
| `components/TherapyQuiz.tsx` | Wizard 4 step, progress bar, messaggi WhatsApp dinamici, disclaimer |
| `components/Approach.tsx` | TCC: quote card con gradiente + checklist punti chiave |
| `components/OnlineTherapy.tsx` | Mockup videollamada + lista benefici terapia online |
| `components/Testimonials.tsx` | 4 blockquote anonimi con tag specializzazione |
| `components/FAQ.tsx` | Accordion animato (AnimatePresence), 7 domande |
| `components/Location.tsx` | Orari, indirizzo, mappa stilizzata + link Google Maps |
| `components/ContactForm.tsx` | Form completo: RHF + Zod, loading/success/error, honeypot |
| `components/StickyMobileBar.tsx` | Barra fissa mobile: WhatsApp · Llamar · Ubicación |
| `components/Footer.tsx` | Multi-colonna, disclaimer medico, nota portfolio |
| `components/JsonLd.tsx` | Schema.org: LocalBusiness + MedicalBusiness + Person |
| `app/api/contact/route.ts` | POST /api/contact: validazione Zod, honeypot, SMTP o fallback JSON |
| `lib/constants.ts` | Tutti i dati fittizi centralizzati |
| `lib/contact-schema.ts` | Schema Zod condiviso client/server |

---

## Note tecniche

**Tailwind CSS 4:** Configurazione CSS-first con `@theme { --color-sage-500: #4a8a4d; ... }` nel `globals.css`. Non usa `tailwind.config.ts` tradizionale.

**Zod v4 fix:** `z.enum()` in Zod 4 non accetta più `required_error` nel secondo parametro — rimosso e sostituito con `z.boolean().refine()` per il campo privacy.

**Form fallback:** Senza SMTP configurato, i lead vengono salvati in `data/contact-submissions.json`. Testabile immediatamente senza credenziali email.

**Dati fittizi:** Tutti i dati del sito sono inventati. L'unico dato reale è `hola@liberastudio.com` usato come email di test per il form.
