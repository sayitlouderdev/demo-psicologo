export const DOCTOR = {
  name: "Dr. Mateo Aranda Solís",
  shortName: "Dr. Aranda",
  title: "Psicólogo clínico y psicoterapeuta",
  license: "9876543",
  experience: "8 años de experiencia",
  reviews: "31 valoraciones positivas",
  studio: "Centro Psicológico Horizonte",
  address: {
    street: "Calle Brisa 214",
    colony: "Colonia Monteverde",
    city: "Mérida, Yucatán, México",
    full: "Calle Brisa 214, Col. Monteverde, Mérida, Yucatán, México",
  },
  phone: "+52 999 123 4567",
  phoneRaw: "529991234567",
  whatsapp: "529991234567",
  email: "sayitlouder.dev@gmail.com",
  hours: [
    { days: "Lunes a Viernes", time: "09:00 – 19:00" },
    { days: "Sábado", time: "10:00 – 14:00" },
    { days: "Domingo", time: "Cerrado" },
  ],
  price: "Primera sesión desde $700 MXN",
  specialties: [
    "Terapia cognitivo-conductual",
    "Ansiedad",
    "Depresión",
    "Ataques de pánico",
    "Terapia individual",
    "Terapia de pareja",
    "Acompañamiento emocional",
  ],
};

export const WHATSAPP_BASE_MESSAGE =
  "Hola, me gustaría agendar una primera sesión con el Dr. Mateo Aranda. ¿Podrían compartirme disponibilidad?";

export const whatsappUrl = (message: string = WHATSAPP_BASE_MESSAGE) =>
  `https://wa.me/${DOCTOR.whatsapp}?text=${encodeURIComponent(message)}`;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  DOCTOR.address.full
)}`;

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#online", label: "Online" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];
