# Mundaca's Solutions — Landing corporativa

Landing corporativa de producción construida con Next.js App Router, TypeScript, Framer Motion, Lucide React, Resend y almacenamiento opcional de leads en Supabase.

## Incluye

- Hero de alto impacto y navegación responsive.
- Servicios, proyectos, método, stack y presentación corporativa.
- Animaciones con soporte para `prefers-reduced-motion`.
- SEO completo: metadata, Open Graph, Twitter Card, sitemap y robots.
- PWA manifest, favicon y Apple Touch Icon.
- Formulario con validación compartida, honeypot, consentimiento, control de origen, límite de payload y rate limit básico.
- Correos interno y de confirmación mediante Resend.
- Persistencia opcional de leads en Supabase usando la service role solo desde servidor.
- Páginas de Privacidad, Términos, 404 y error seguro.
- Endpoint de salud: `/api/health`.
- Headers de seguridad y respuestas API sin caché.

## Requisitos

- Node.js 22.x.
- Una cuenta de Vercel.
- Una API key de Resend.
- Dominio verificado en Resend para enviar desde `@mundacasolutions.com`.
- Supabase es opcional.

## Desarrollo local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abrir `http://localhost:3000`.

## Validación antes de desplegar

```bash
npm run check
```

Para comprobar que las variables de producción están completas:

```bash
npm run preflight
```

El comando ejecuta lint, typecheck y build de producción.

## Variables de entorno

```env
NEXT_PUBLIC_SITE_URL=https://mundacasolutions.com
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/56966635509?text=Hola%20Crist%C3%B3bal%2C%20quiero%20conversar%20sobre%20un%20proyecto%20para%20mi%20empresa.
NEXT_PUBLIC_CONTACT_EMAIL=cristobal.mundacav@gmail.com

RESEND_API_KEY=
CONTACT_TO_EMAIL=cristobal.mundacav@gmail.com
CONTACT_FROM_EMAIL=Mundaca's Solutions <contacto@mundacasolutions.com>

SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_LEADS_TABLE=landing_leads
```

`NEXT_PUBLIC_BOOKING_URL` puede apuntar a Calendly, Cal.com o Google Calendar Appointment Schedule. Al dejarlo vacío, los CTA abren la sección de contacto.

## Configuración de Resend

1. Agregar y verificar `mundacasolutions.com` en Resend.
2. Crear una API key de envío.
3. En Vercel, definir `RESEND_API_KEY` para Production, Preview y Development según corresponda.
4. Definir `CONTACT_TO_EMAIL` con el correo que recibirá las solicitudes.
5. Definir `CONTACT_FROM_EMAIL` con una dirección del dominio verificado.
6. Volver a desplegar después de modificar variables.

Durante pruebas puede usarse:

```env
CONTACT_FROM_EMAIL=Mundaca's Solutions <onboarding@resend.dev>
```

## Persistencia opcional en Supabase

```sql
create table if not exists public.landing_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  phone text,
  service text not null,
  timeline text not null,
  message text not null,
  consent boolean not null default true,
  privacy_version text not null,
  consent_at timestamptz not null,
  source text not null default 'mundaca-solutions-landing',
  status text not null default 'nuevo',
  created_at timestamptz not null default now()
);

alter table public.landing_leads enable row level security;
```

No crear una política pública de inserción. La escritura se realiza desde `/api/contact` usando la service role key, que nunca debe exponerse con el prefijo `NEXT_PUBLIC_`.

## Despliegue en Vercel

1. Subir este proyecto a GitHub.
2. En Vercel, seleccionar **Add New → Project** e importar el repositorio.
3. Framework Preset: **Next.js**.
4. Root Directory: raíz del repositorio.
5. Build Command: `npm run build`.
6. Agregar todas las variables necesarias en **Project Settings → Environment Variables**.
7. Desplegar y comprobar:
   - `/`
   - `/privacidad`
   - `/terminos`
   - `/robots.txt`
   - `/sitemap.xml`
   - `/api/health`
   - envío real del formulario
8. Conectar `mundacasolutions.com` y `www.mundacasolutions.com`.
9. Elegir un único dominio canónico y redirigir el otro desde Vercel.
10. Confirmar los registros DNS de Resend antes de cambiar el remitente definitivo.

## Checklist de lanzamiento

- [ ] Logo oficial revisado.
- [ ] Dominio conectado a Vercel.
- [ ] Dominio verificado en Resend.
- [ ] Formulario probado desde el dominio final.
- [ ] Correo interno recibido correctamente.
- [ ] Correo de confirmación recibido por el prospecto.
- [ ] Tabla Supabase creada, si se utilizará.
- [ ] Enlaces de WhatsApp y agenda revisados.
- [ ] Política de Privacidad revisada con asesoría legal si la campaña lo exige.
- [ ] `npm run check` aprobado.

## Estructura principal

```text
src/
├─ app/
│  ├─ api/contact/route.ts
│  ├─ api/health/route.ts
│  ├─ privacidad/page.tsx
│  ├─ terminos/page.tsx
│  ├─ robots.ts
│  ├─ sitemap.ts
│  ├─ error.tsx
│  ├─ not-found.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ ContactForm.tsx
│  └─ PageTransition.tsx
└─ lib/contact-options.ts
```
