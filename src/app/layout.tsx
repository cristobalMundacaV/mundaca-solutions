import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

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
    default: "Mundaca's Solutions | Software, automatización y cloud",
    template: "%s | Mundaca's Solutions",
  },
  description:
    "Diseñamos software, plataformas SaaS, automatizaciones e infraestructura digital para empresas que quieren operar mejor y crecer con tecnología.",
  applicationName: "Mundaca's Solutions",
  authors: [{ name: "Mundaca's Solutions SpA" }],
  creator: "Mundaca's Solutions SpA",
  publisher: "Mundaca's Solutions SpA",
  category: "technology",
  keywords: [
    "desarrollo de software Chile",
    "software a medida",
    "automatización de procesos",
    "plataformas SaaS",
    "cloud y DevOps",
    "business intelligence",
    "Mundaca's Solutions",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mundaca's Solutions | Tecnología construida para avanzar",
    description:
      "Software, automatización, datos e infraestructura para transformar operaciones complejas en crecimiento.",
    url: siteUrl,
    siteName: "Mundaca's Solutions",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mundaca's Solutions — Tecnología construida para hacer avanzar tu empresa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mundaca's Solutions",
    description: "Tecnología construida para hacer avanzar tu empresa.",
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
