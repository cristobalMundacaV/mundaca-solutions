import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://mundacasolutions.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/productos`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/productos/foodies`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/productos/carbono-zero`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/soluciones/software-a-medida`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/soluciones/automatizacion-procesos`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/soluciones/inteligencia-operacional`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/conocimiento`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/contacto`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/privacidad`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terminos`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
