import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://mundacasolutions.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/privacidad`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terminos`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
