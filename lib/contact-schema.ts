import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "Nombre demasiado largo"),
  email: z.string().email("Correo electrónico inválido").max(200),
  phone: z.string().max(20, "Teléfono demasiado largo").optional(),
  reason: z.enum([
    "ansiedad",
    "depresion",
    "pareja",
    "estres",
    "panico",
    "autoestima",
    "otro",
  ] as const, "Selecciona un motivo de consulta"),
  modality: z.enum(
    ["online", "presencial", "indistinto"] as const,
    "Selecciona una modalidad"
  ),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "Mensaje demasiado largo"),
  privacy: z
    .boolean()
    .refine((v) => v === true, {
      message: "Debes aceptar la política de privacidad",
    }),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const REASON_LABELS: Record<string, string> = {
  ansiedad: "Ansiedad",
  depresion: "Depresión",
  pareja: "Terapia de pareja",
  estres: "Estrés / Burnout",
  panico: "Ataques de pánico",
  autoestima: "Autoestima / Cambio personal",
  otro: "Otro",
};

export const MODALITY_LABELS: Record<string, string> = {
  online: "Online (videollamada)",
  presencial: "Presencial en Mérida",
  indistinto: "Indistinto",
};
