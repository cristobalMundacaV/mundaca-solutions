# MUNDACA-WEB-AUTHORITY-SEO-01 — Cierre

## Estado
Implementación local completada en los tres worktrees SEO. No se hizo push ni deploy.

## Entregables
- Mundaca: hubs `/productos`, páginas de Foodies y Carbono Zero, soluciones, contacto, conocimiento, entidad `Organization`/`WebSite`, breadcrumbs, sitemap, robots y enlaces crawlables.
- Foodies: seis páginas comerciales, `/recursos` y tres guías, schema de aplicación, provider corporativo, sitemap, robots y enlace bidireccional a Mundaca.
- Carbono: política de noindex para app/rutas operativas, sitemap y robots públicos, provider estable en schema y documentación de separación marketing/app.

## Limitaciones
- Sitelinks, rankings y rich results no se pueden garantizar.
- No hay métricas de Search Console disponibles en este entorno.
- Carbono sigue sirviendo la landing pública con Vite; la marketing app SSR/SSG separada queda como fase posterior.
- Los builds Next requieren instalar dependencias en sus worktrees; el intento local quedó bloqueado por el entorno de instalación.

## Checklist manual antes de publicar
1. Ejecutar lint/build de Mundaca y Foodies con Node 22.x.
2. Servir cada build y verificar HTTP 200, title, description, canonical, H1, JSON-LD, sitemap y robots.
3. Validar JSON-LD en Schema Markup Validator y Rich Results Test.
4. Confirmar que no existan credenciales, datos de clientes o rutas privadas en contenido indexable.
5. Configurar Domain Property en Search Console y enviar los tres sitemaps.
