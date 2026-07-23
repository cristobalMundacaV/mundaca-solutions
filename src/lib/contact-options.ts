export const contactServices = [
  "Software a medida",
  "Plataforma SaaS",
  "Automatización e integraciones",
  "Cloud, DevOps e infraestructura",
  "Datos, BI e inteligencia operacional",
  "Consultoría tecnológica",
] as const;

export const contactTimelines = [
  "Lo antes posible",
  "Durante los próximos 30 días",
  "En 1 a 3 meses",
  "Estoy explorando alternativas",
] as const;

export type ContactService = (typeof contactServices)[number];
export type ContactTimeline = (typeof contactTimelines)[number];
