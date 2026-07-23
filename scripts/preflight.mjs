import { existsSync } from "node:fs";

if (existsSync(".env.local") && typeof process.loadEnvFile === "function") {
  process.loadEnvFile(".env.local");
}

const required = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_WHATSAPP_URL",
  "NEXT_PUBLIC_CONTACT_EMAIL",
  "RESEND_API_KEY",
  "CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL",
];

const missing = required.filter((name) => !process.env[name]?.trim());

if (missing.length) {
  console.error(`\nFaltan variables requeridas para producción:\n- ${missing.join("\n- ")}\n`);
  process.exit(1);
}

const urls = ["NEXT_PUBLIC_SITE_URL", "NEXT_PUBLIC_WHATSAPP_URL"];
if (process.env.NEXT_PUBLIC_BOOKING_URL) urls.push("NEXT_PUBLIC_BOOKING_URL");

for (const name of urls) {
  try {
    const url = new URL(process.env[name]);
    if (name === "NEXT_PUBLIC_SITE_URL" && url.protocol !== "https:") {
      throw new Error("El sitio de producción debe usar HTTPS");
    }
  } catch {
    console.error(`${name} debe contener una URL válida de producción.`);
    process.exit(1);
  }
}

if (!process.env.RESEND_API_KEY.startsWith("re_")) {
  console.error("RESEND_API_KEY no parece una API key válida de Resend.");
  process.exit(1);
}

const supabaseValues = [process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY].filter(Boolean);
if (supabaseValues.length === 1) {
  console.error("Configura SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY juntos, o deja ambos vacíos.");
  process.exit(1);
}

console.log("Preflight de producción aprobado.");
