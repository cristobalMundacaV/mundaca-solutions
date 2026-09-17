import type { Metadata } from "next";
import Link from "next/link";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://mundacasolutions.com").replace(/\/$/, "");

export function Breadcrumbs({ current, section = "Productos", sectionHref = "/productos" }: { current: string; section?: string; sectionHref?: string }) {
  return <nav className="seo-breadcrumbs" aria-label="Migas de pan"><Link href="/">Inicio</Link><span>/</span><Link href={sectionHref}>{section}</Link><span>/</span><span>{current}</span></nav>;
}

export function ProductSchema({ name, url, description }: { name: string; url: string; description: string }) {
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", "@id": `${url}/#software`, name, applicationCategory: "BusinessApplication", operatingSystem: "Web", url, description, provider: { "@id": `${siteUrl}/#organization` } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="seo-hero"><div className="seo-eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></header>;
}

export const metadataFor = (title: string, description: string, path: string): Metadata => ({ title, description, alternates: { canonical: `${siteUrl}${path}` }, openGraph: { title, description, url: `${siteUrl}${path}`, type: "website" } });