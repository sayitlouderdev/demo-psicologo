# Centro Psicológico Horizonte — Landing Page Portfolio

Landing page profesional para un psicólogo ficticio, creada como proyecto de portfolio para agencia web.
Stack: **Next.js 16 · TypeScript · Tailwind CSS 4 · Framer Motion · React Hook Form + Zod · Nodemailer**

> **Todos los datos del sitio son ficticios.** El único dato real es el email de prueba: `hola@liberastudio.com`

---

## Instalación y arranque

```bash
# 1. Entra a la carpeta del proyecto
cd D:\CHATGPT\PSICOLOGO

# 2. Instala dependencias
npm install

# 3. Crea el archivo de variables de entorno
copy .env.example .env.local

# 4. Arranca el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Variables de entorno

Copia `.env.example` a `.env.local` y edita según necesites:

| Variable           | Descripción                                          | Obligatoria |
|--------------------|------------------------------------------------------|-------------|
| `CONTACT_TO_EMAIL` | Email que recibirá los mensajes del formulario       | No (default: `hola@liberastudio.com`) |
| `SMTP_HOST`        | Host SMTP para envío de emails                       | No          |
| `SMTP_PORT`        | Puerto SMTP (587 por defecto)                        | No          |
| `SMTP_USER`        | Usuario / dirección SMTP                             | No          |
| `SMTP_PASS`        | Contraseña SMTP (usa App Password con Gmail)         | No          |
| `SMTP_FROM`        | Dirección remitente visible                          | No          |

**Nota:** Si SMTP no está configurado, el formulario sigue funcionando: las consultas se guardan automáticamente en `data/contact-submissions.json`.

---

## Formulario de contacto

### Comportamiento
- Validación **cliente**: React Hook Form + Zod (mensajes en español)
- Validación **servidor**: Zod en la API route `/api/contact`
- **Anti-spam**: campo honeypot oculto; si se rellena, retorna éxito falso
- **Con SMTP configurado**: envía email HTML a `CONTACT_TO_EMAIL`
- **Sin SMTP**: guarda el lead en `data/contact-submissions.json`

### Probar el formulario sin SMTP

1. Arranca con `npm run dev`
2. Rellena y envía el formulario en `http://localhost:3000/#contacto`
3. Revisa el archivo `data/contact-submissions.json` — aparecerá el lead guardado

### Ejemplo de `contact-submissions.json`
```json
[
  {
    "name": "Ana García",
    "email": "ana@ejemplo.com",
    "phone": "+52 999 000 0000",
    "reason": "ansiedad",
    "modality": "online",
    "message": "Me gustaría agendar una primera sesión.",
    "createdAt": "2026-05-20T10:30:00.000Z"
  }
]
```

---

## Estructura del proyecto

```
D:\CHATGPT\PSICOLOGO\
├── app/
│   ├── layout.tsx          # Layout raíz con fuentes, metadata y JSON-LD
│   ├── page.tsx            # Página principal (ensambla todas las secciones)
│   ├── globals.css         # Tailwind 4 + paleta de colores personalizada
│   └── api/contact/
│       └── route.ts        # POST /api/contact (email + fallback JSON)
├── components/
│   ├── Header.tsx          # Header sticky con nav y menú móvil
│   ├── Hero.tsx            # Sección hero con animaciones Framer Motion
│   ├── Services.tsx        # Rejilla de áreas de atención
│   ├── ProcessSteps.tsx    # Proceso en 3 pasos
│   ├── TherapyQuiz.tsx     # Wizard interactivo de orientación
│   ├── Approach.tsx        # Enfoque terapéutico (TCC)
│   ├── OnlineTherapy.tsx   # Sección terapia online
│   ├── Testimonials.tsx    # Testimonios anónimos
│   ├── FAQ.tsx             # Acordeón de preguntas frecuentes
│   ├── Location.tsx        # Ubicación, horarios, mapa estilizado
│   ├── ContactForm.tsx     # Formulario completo con validación
│   ├── StickyMobileBar.tsx # Barra inferior fija en móvil
│   ├── Footer.tsx          # Footer completo con disclaimer
│   └── JsonLd.tsx          # Datos estructurados (Schema.org)
├── lib/
│   ├── constants.ts        # Datos ficticios del psicólogo
│   └── contact-schema.ts   # Esquema Zod del formulario
├── data/
│   └── contact-submissions.json  # Creado automáticamente al enviar formulario
├── .env.example
├── .env.local
└── README.md
```

---

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo (http://localhost:3000)
npm run build    # Build de producción
npm run start    # Servidor de producción (requiere build previo)
npm run lint     # ESLint
```

---

## Datos ficticios utilizados

| Campo              | Valor ficticio                            |
|--------------------|-------------------------------------------|
| Nombre             | Dr. Mateo Aranda Solís                    |
| Studio             | Centro Psicológico Horizonte              |
| Dirección          | Calle Brisa 214, Col. Monteverde, Mérida  |
| Teléfono           | +52 999 123 4567                          |
| WhatsApp           | +52 999 123 4567                          |
| Email (real/test)  | hola@liberastudio.com                     |
| Cédula             | 9876543                                   |
| Experiencia        | 8 años                                    |
| Valoraciones       | 31 positivas                              |
| Precio             | Primera sesión desde $700 MXN             |

**Nota legal:** Este es un proyecto demostrativo con fines de portfolio. No representa a ningún profesional real.

---

## Despliegue en Vercel

```bash
npx vercel
```

Configura las variables de entorno en el dashboard de Vercel antes de hacer deploy.
