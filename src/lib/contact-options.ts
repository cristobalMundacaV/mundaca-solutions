export const contactServices = [
  "Centralizar la operación de mi empresa",
  "Automatizar procesos y tareas",
  "Crear una plataforma o producto digital",
  "Mejorar reportes y toma de decisiones",
  "Modernizar un sistema existente",
  "Necesito orientación",
] as const;

export const contactTimelines = [
  "Lo antes posible",
  "Durante los próximos 30 días",
  "En 1 a 3 meses",
  "Estoy explorando alternativas",
] as const;

export type ContactService = (typeof contactServices)[number];
export type ContactTimeline = (typeof contactTimelines)[number];
