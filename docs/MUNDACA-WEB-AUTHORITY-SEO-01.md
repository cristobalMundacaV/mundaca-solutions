# MUNDACA-WEB-AUTHORITY-SEO-01

## Alcance
Auditoría y arquitectura SEO de las superficies públicas de Mundaca's Solutions, Foodies y Carbono Zero. No incluye migración de apps operativas, login de Google, push ni deploy.

## Mapa actual auditado
| URL | Indexable | Rol | Estado |
|---|---:|---|---|
| https://mundacasolutions.com/ | Sí | Authority hub corporativo | Landing Next.js |
| https://foodies.mundacasolutions.com/ | Sí | Producto y adquisición comercial | Landing Next.js |
| https://carbonozero.mundacasolutions.com/ | Sí | Landing pública de producto | SPA Vite |
| https://app.carbonozero.mundacasolutions.com/ | No recomendado | Aplicación operativa | Debe usar noindex y no sitemap |

## Arquitectura objetivo
- Corporativo: `/productos`, `/productos/foodies`, `/productos/carbono-zero`.
- Soluciones: `/soluciones/software-a-medida`, `/soluciones/automatizacion-procesos`, `/soluciones/inteligencia-operacional`.
- Foodies: seis páginas comerciales y tres recursos en la landing Next.
- Carbono: landing pública separada conceptualmente de la app Vite; la app recibe noindex dinámico en rutas distintas de `/`.

## Entidad
La entidad estable es `https://mundacasolutions.com/#organization`, con nombre legal `Mundaca's Solutions SpA`. Foodies y Carbono Zero declaran a esa entidad como `provider` en su schema `SoftwareApplication`.

## Política
Cada URL indexable tiene canonical propia. Los sitemaps contienen sólo superficies públicas. Los sitelinks son una decisión automática de Google y no se garantizan.

## Validación
- Carbono: `npm run build` pasa.
- Mundaca y Foodies: ejecutar `npm install`, `npm run lint`, `npm run typecheck` si existe y `npm run build` en sus worktrees SEO.
- Inspeccionar HTML inicial de rutas críticas y validar JSON-LD en Rich Results Test y Schema Markup Validator.
