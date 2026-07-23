import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";
import "./landing-saas.css";
import "./landing-saas-2.css";
import "./landing-saas-3.css";
import "./landing-saas-4.css";
import "./landing-saas-5.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mundacasolutions.com";
const siteUrl = configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071425",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mundaca's Solutions | Sistemas y software para operar mejor",
    template: "%s | Mundaca's Solutions",
  },
  description:
    "Diseñamos sistemas digitales que conectan procesos, equipos y datos para que las empresas reduzcan trabajo manual, tomen mejores decisiones y crezcan con control.",
  applicationName: "Mundaca's Solutions",
  authors: [{ name: "Mundaca's Solutions SpA" }],
  creator: "Mundaca's Solutions SpA",
  publisher: "Mundaca's Solutions SpA",
  category: "technology",
  keywords: [
    "desarrollo de software Chile",
    "software a medida",
    "automatización de procesos",
    "sistemas de gestión empresarial",
    "plataformas digitales",
    "business intelligence",
    "Mundaca's Solutions",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mundaca's Solutions | Claridad, control y crecimiento para tu operación",
    description:
      "Software y automatización diseñados alrededor de la operación real de tu empresa.",
    url: siteUrl,
    siteName: "Mundaca's Solutions",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mundaca's Solutions — Sistemas para operar con claridad, control y velocidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mundaca's Solutions",
    description: "Sistemas y software para operar con más claridad, control y velocidad.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body><PageTransition>{children}</PageTransition></body>
    </html>
  );
}
