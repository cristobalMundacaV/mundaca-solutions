"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CloudCog,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  Lightbulb,
  Menu,
  MessageCircle,
  Network,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ContactForm } from "@/components/ContactForm";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#contacto";
const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/56966635509?text=Hola%20Crist%C3%B3bal%2C%20quiero%20conversar%20sobre%20un%20proyecto%20para%20mi%20empresa.";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "cristobal.mundacav@gmail.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mundacasolutions.com";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Software a medida",
    text: "Aplicaciones web y sistemas internos construidos alrededor de tu operación, no de una plantilla genérica.",
    bullets: ["Arquitectura escalable", "Experiencia de usuario", "Integraciones y APIs"],
  },
  {
    icon: Layers3,
    number: "02",
    title: "Productos SaaS",
    text: "Diseñamos plataformas listas para comercializar, crecer por módulos y operar con múltiples clientes.",
    bullets: ["Multi-tenant", "Suscripciones y roles", "Portales de cliente"],
  },
  {
    icon: Workflow,
    number: "03",
    title: "Automatización",
    text: "Conectamos procesos, datos y servicios para eliminar tareas repetitivas y reducir errores operacionales.",
    bullets: ["Flujos automáticos", "Notificaciones", "Integración de plataformas"],
  },
  {
    icon: CloudCog,
    number: "04",
    title: "Cloud y DevOps",
    text: "Infraestructura preparada para desplegar con confianza, observar el sistema y escalar sin improvisación.",
    bullets: ["AWS y Vercel", "CI/CD", "Seguridad y respaldos"],
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Datos e inteligencia",
    text: "Transformamos información dispersa en indicadores claros para decidir con evidencia y anticipación.",
    bullets: ["Dashboards ejecutivos", "KPIs accionables", "Trazabilidad"],
  },
  {
    icon: Lightbulb,
    number: "06",
    title: "Consultoría tecnológica",
    text: "Ordenamos la visión, priorizamos el roadmap y convertimos una necesidad ambigua en una solución ejecutable.",
    bullets: ["Discovery", "Arquitectura", "Roadmap técnico"],
  },
];

const projects = [
  {
    eyebrow: "SaaS · Operación comercial",
    title: "Foodies",
    summary:
      "Plataforma integral para restaurantes y negocios que centraliza ventas, caja, inventario, cocina, reportes y gestión multi-sucursal.",
    impact: "De procesos fragmentados a una operación conectada en tiempo real.",
    tags: ["Next.js", "React", "Django", "PostgreSQL", "BI"],
    icon: Gauge,
    className: "project-foodies",
  },
  {
    eyebrow: "Climate tech · Construcción",
    title: "Carbono Zero",
    summary:
      "Sistema para convertir datos ambientales dispersos en medición de CO₂e, trazabilidad, alertas y decisiones claras para proyectos de construcción.",
    impact: "Gestión ambiental continua, visible y accionable.",
    tags: ["Data", "CO₂e", "Automatización", "IoT", "Analytics"],
    icon: Globe2,
    className: "project-carbon",
  },
  {
    eyebrow: "Experiencia digital · Motocicletas",
    title: "Delanoe Motos",
    summary:
      "Ecosistema digital para exhibición de motocicletas, administración de catálogo y evolución hacia servicios de mantención y postventa.",
    impact: "Una vitrina comercial preparada para crecer con el negocio.",
    tags: ["React", "Django", "AWS", "PostgreSQL", "UX"],
    icon: Rocket,
    className: "project-motos",
  },
];

const method = [
  {
    step: "01",
    title: "Entendemos el problema",
    text: "Levantamos procesos, usuarios, restricciones y resultados esperados antes de hablar de pantallas.",
    icon: SearchCheck,
  },
  {
    step: "02",
    title: "Diseñamos la solución",
    text: "Definimos experiencia, arquitectura, alcance y un roadmap que prioriza valor sobre complejidad.",
    icon: Target,
  },
  {
    step: "03",
    title: "Construimos con criterio",
    text: "Desarrollamos por etapas, validamos temprano y cuidamos rendimiento, seguridad y mantenibilidad.",
    icon: Boxes,
  },
  {
    step: "04",
    title: "Lanzamos y evolucionamos",
    text: "Desplegamos, medimos y acompañamos la evolución para que la tecnología siga respondiendo al negocio.",
    icon: Rocket,
  },
];

const stack = [
  "Next.js",
  "React",
  "Django",
  "PostgreSQL",
  "Supabase",
  "AWS",
  "Vercel",
  "Docker",
  "REST APIs",
  "GitHub Actions",
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={reveal}
      transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-shell">
        <a className="brand" href="#inicio" aria-label="Mundaca's Solutions, inicio" onClick={close}>
          <Image
            src="/logo-mundacas-solutions.svg"
            alt="Mundaca's Solutions"
            width={390}
            height={82}
            loading="eager"
          />
        </a>

        <nav id="primary-navigation" className={`desktop-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
          <a href="#inicio" onClick={close}>Inicio</a>
          <a href="#servicios" onClick={close}>Servicios</a>
          <a href="#proyectos" onClick={close}>Proyectos</a>
          <a href="#metodo" onClick={close}>Método</a>
          <a href="#contacto" onClick={close}>Contacto</a>
        </nav>

        <div className="header-actions">
          <a className="button button-header" href={bookingUrl} onClick={close}>
            Agendar reunión
            <ArrowRight size={17} />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div className="visual-orbit visual-orbit-one" />
      <div className="visual-orbit visual-orbit-two" />
      <div className="system-window">
        <div className="system-topbar">
          <div className="window-dots"><i /><i /><i /></div>
          <span>solution.architecture</span>
          <ShieldCheck size={16} />
        </div>
        <div className="system-body">
          <aside className="system-sidebar">
            <div className="mini-brand">MS</div>
            <span className="active"><Gauge size={16} /> Overview</span>
            <span><Workflow size={16} /> Flujos</span>
            <span><Database size={16} /> Datos</span>
            <span><Network size={16} /> Integraciones</span>
            <span><CloudCog size={16} /> Cloud</span>
          </aside>
          <div className="system-content">
            <div className="system-heading">
              <div>
                <small>OPERACIÓN DIGITAL</small>
                <strong>Todo conectado. Todo visible.</strong>
              </div>
              <div className="live-pill"><span /> En línea</div>
            </div>
            <div className="system-kpis">
              <article>
                <span>Automatización</span>
                <strong>87%</strong>
                <small>+24% este trimestre</small>
              </article>
              <article>
                <span>Disponibilidad</span>
                <strong>99.9%</strong>
                <small>Infraestructura estable</small>
              </article>
              <article>
                <span>Decisiones</span>
                <strong>Real time</strong>
                <small>Datos accionables</small>
              </article>
            </div>
            <div className="system-chart">
              <div className="chart-head">
                <span>Rendimiento operacional</span>
                <small>Últimos 6 meses</small>
              </div>
              <svg viewBox="0 0 520 170" role="img" aria-label="Gráfico ascendente">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#38d6ff" stopOpacity="0.34" />
                    <stop offset="1" stopColor="#38d6ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="grid-line" d="M0 35H520M0 85H520M0 135H520" />
                <path className="chart-area" d="M0 145C50 128 63 132 104 105C150 75 170 100 215 80C268 56 286 66 330 42C376 17 410 38 449 17C473 5 497 10 520 3V170H0Z" />
                <path className="chart-line" d="M0 145C50 128 63 132 104 105C150 75 170 100 215 80C268 56 286 66 330 42C376 17 410 38 449 17C473 5 497 10 520 3" />
                <circle cx="449" cy="17" r="6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="floating-card floating-card-code"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code2 size={20} />
        <div><strong>Build exitoso</strong><span>Producción desplegada</span></div>
        <Check size={17} />
      </motion.div>
      <motion.div
        className="floating-card floating-card-ai"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <Bot size={20} />
        <div><strong>Flujo automatizado</strong><span>12 horas ahorradas</span></div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mundaca's Solutions",
    legalName: "Mundaca's Solutions SpA",
    url: siteUrl,
    email: contactEmail,
    telephone: "+56 9 6663 5509",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Ángeles",
      addressRegion: "Biobío",
      addressCountry: "CL",
    },
    description:
      "Desarrollo de software, automatización, plataformas SaaS, datos e infraestructura cloud.",
    areaServed: "Chile",
    serviceType: [
      "Software a medida",
      "Automatización de procesos",
      "Desarrollo SaaS",
      "Cloud y DevOps",
      "Business Intelligence",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />

      <main id="contenido">
        <section className="hero" id="inicio">
          <Image
            className="hero-photo"
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=86"
            alt=""
            fill
            preload
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="hero-overlay" />
          <div className="hero-grid-pattern" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-layout">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.div className="eyebrow eyebrow-light" variants={reveal}>
                <Sparkles size={15} />
                SOFTWARE · CLOUD · AUTOMATIZACIÓN
              </motion.div>
              <motion.h1 variants={reveal}>
                Tecnología construida para <span>hacer avanzar</span> tu empresa.
              </motion.h1>
              <motion.p className="hero-lead" variants={reveal}>
                Diseñamos software, plataformas e infraestructura digital que convierten procesos complejos en operaciones claras, conectadas y preparadas para crecer.
              </motion.p>
              <motion.div className="hero-actions" variants={reveal}>
                <a className="button button-primary button-large" href={bookingUrl}>
                  Agendar una reunión
                  <ArrowRight size={19} />
                </a>
                <a className="button button-ghost button-large" href="#proyectos">
                  Explorar proyectos
                  <ChevronRight size={19} />
                </a>
              </motion.div>
              <motion.div className="hero-trust" variants={reveal}>
                <span><ShieldCheck size={17} /> Arquitectura confiable</span>
                <span><Zap size={17} /> Ejecución ágil</span>
                <span><BriefcaseBusiness size={17} /> Enfoque de negocio</span>
              </motion.div>
            </motion.div>

            <HeroVisual />
          </div>

          <a className="scroll-indicator" href="#propuesta" aria-label="Continuar a la siguiente sección">
            <span>Descubrir</span>
            <i />
          </a>
        </section>

        <section className="statement section" id="propuesta">
          <div className="container statement-grid">
            <Reveal className="statement-copy">
              <div className="eyebrow">UNA EMPRESA TECNOLÓGICA, NO UNA FÁBRICA DE PÁGINAS</div>
              <h2>No vendemos código. Construimos capacidad para competir mejor.</h2>
            </Reveal>
            <Reveal className="statement-text" delay={0.1}>
              <p>
                Cada solución parte entendiendo cómo funciona tu empresa, dónde se pierde tiempo y qué decisiones necesitan mejor información. Desde ahí diseñamos tecnología que encaja con la realidad del negocio.
              </p>
              <a href="#servicios" className="text-link">
                Ver cómo podemos ayudarte <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>
          <div className="container credibility-row">
            <Reveal className="credibility-item">
              <strong>01</strong><span>Estrategia antes de desarrollar</span>
            </Reveal>
            <Reveal className="credibility-item" delay={0.08}>
              <strong>02</strong><span>Diseño pensado para personas</span>
            </Reveal>
            <Reveal className="credibility-item" delay={0.16}>
              <strong>03</strong><span>Arquitectura preparada para crecer</span>
            </Reveal>
            <Reveal className="credibility-item" delay={0.24}>
              <strong>04</strong><span>Acompañamiento directo y cercano</span>
            </Reveal>
          </div>
        </section>

        <section className="services section section-dark" id="servicios">
          <div className="section-noise" />
          <div className="container">
            <Reveal className="section-heading heading-split">
              <div>
                <div className="eyebrow eyebrow-light">SERVICIOS</div>
                <h2>Soluciones digitales con criterio técnico y visión empresarial.</h2>
              </div>
              <p>
                Desde una primera idea hasta una plataforma en producción, cubrimos las capas necesarias para construir una solución seria, usable y sostenible.
              </p>
            </Reveal>

            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={(index % 3) * 0.07}>
                    <article className="service-card">
                      <div className="service-card-top">
                        <span className="service-icon"><Icon size={24} /></span>
                        <small>{service.number}</small>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <ul>
                        {service.bullets.map((bullet) => (
                          <li key={bullet}><Check size={15} /> {bullet}</li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="projects section" id="proyectos">
          <div className="container">
            <Reveal className="section-heading projects-heading">
              <div className="eyebrow">PROYECTOS</div>
              <h2>Productos que nacen de problemas reales.</h2>
              <p>
                Distintas industrias, una misma forma de trabajar: comprender la operación, ordenar la complejidad y convertirla en una experiencia clara.
              </p>
            </Reveal>

            <div className="projects-list">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Reveal key={project.title}>
                    <article className={`project-card ${project.className}`}>
                      <div className="project-index">0{index + 1}</div>
                      <div className="project-copy">
                        <span className="project-eyebrow">{project.eyebrow}</span>
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                        <div className="project-impact"><Sparkles size={17} /> {project.impact}</div>
                        <div className="project-tags">
                          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                        </div>
                      </div>
                      <div className="project-visual">
                        <div className="project-visual-grid" />
                        <div className="project-icon"><Icon size={42} /></div>
                        <div className="project-panel panel-main">
                          <small>VISIÓN EJECUTIVA</small>
                          <strong>{index === 0 ? "Operación conectada" : index === 1 ? "Impacto medible" : "Experiencia comercial"}</strong>
                          <div className="panel-bars"><i /><i /><i /><i /><i /></div>
                        </div>
                        <div className="project-panel panel-mini">
                          <span><i /> Sistema activo</span>
                          <strong>{index === 0 ? "+32%" : index === 1 ? "CO₂e" : "24/7"}</strong>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="method section" id="metodo">
          <div className="container method-layout">
            <Reveal className="method-sticky">
              <div className="eyebrow">NUESTRO MÉTODO</div>
              <h2>Claridad antes, durante y después del desarrollo.</h2>
              <p>
                La calidad no aparece al final. Se construye tomando buenas decisiones desde el primer día y manteniendo visible el avance.
              </p>
              <div className="method-promise">
                <ShieldCheck size={23} />
                <div><strong>Sin cajas negras</strong><span>Sabes qué se está construyendo, por qué y qué sigue.</span></div>
              </div>
            </Reveal>

            <div className="method-steps">
              {method.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.step} delay={index * 0.06}>
                    <article className="method-step">
                      <span className="method-number">{item.step}</span>
                      <div className="method-icon"><Icon size={24} /></div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="technology section section-dark">
          <div className="technology-glow" />
          <div className="container technology-layout">
            <Reveal className="technology-copy">
              <div className="eyebrow eyebrow-light">TECNOLOGÍA CON FUNDAMENTO</div>
              <h2>Elegimos herramientas por su capacidad de sostener el negocio.</h2>
              <p>
                Rendimiento, seguridad, mantenibilidad y velocidad de evolución. El stack se adapta a la solución, no al revés.
              </p>
              <div className="stack-list">
                {stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </Reveal>

            <Reveal className="architecture-card" delay={0.12}>
              <div className="architecture-head">
                <div><small>ARQUITECTURA</small><strong>Diseñada para producción</strong></div>
                <div className="architecture-status"><i /> Healthy</div>
              </div>
              <div className="architecture-flow">
                <div><Globe2 size={22} /><span>Experiencia</span></div>
                <ChevronRight />
                <div><Code2 size={22} /><span>Aplicación</span></div>
                <ChevronRight />
                <div><Database size={22} /><span>Datos</span></div>
                <ChevronRight />
                <div><CloudCog size={22} /><span>Cloud</span></div>
              </div>
              <div className="architecture-metrics">
                <span><strong>Escalable</strong> por diseño</span>
                <span><strong>Segura</strong> por defecto</span>
                <span><strong>Observable</strong> en producción</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="about section">
          <div className="container about-layout">
            <Reveal className="about-visual">
              <div className="about-shape shape-one" />
              <div className="about-shape shape-two" />
              <div className="about-monogram">MS</div>
              <div className="about-caption">
                <span>Ingeniería</span>
                <span>Diseño</span>
                <span>Negocio</span>
              </div>
            </Reveal>
            <Reveal className="about-copy" delay={0.1}>
              <div className="eyebrow">MUNDACA&apos;S SOLUTIONS</div>
              <h2>Una compañía joven con ambición de construir soluciones extraordinarias.</h2>
              <p>
                Combinamos desarrollo de software, diseño de producto, datos e infraestructura para acompañar a empresas que necesitan algo más que un proveedor: un socio técnico comprometido con el resultado.
              </p>
              <p>
                Cada proyecto recibe dirección cercana, decisiones transparentes y una obsesión sencilla: que la solución se sienta profesional desde el primer contacto hasta el último detalle.
              </p>
              <div className="about-values">
                <span><Check size={16} /> Responsabilidad técnica</span>
                <span><Check size={16} /> Comunicación directa</span>
                <span><Check size={16} /> Calidad visual y funcional</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="contact section" id="contacto">
          <div className="contact-backdrop" />
          <div className="container contact-layout">
            <Reveal className="contact-copy">
              <div className="eyebrow eyebrow-light">HABLEMOS</div>
              <h2>Tu próximo sistema puede comenzar con una buena conversación.</h2>
              <p>
                Cuéntanos qué quieres resolver. Revisaremos el desafío, el contexto y el siguiente paso más sensato para tu empresa.
              </p>
              <div className="contact-points">
                <span><Check size={17} /> Reunión inicial enfocada en tu problema</span>
                <span><Check size={17} /> Evaluación honesta de alcance y viabilidad</span>
                <span><Check size={17} /> Próximos pasos claros, sin presión comercial</span>
              </div>
              <div className="contact-direct">
                <MessageCircle size={22} />
                <div><small>¿Prefieres conversar directamente?</small><strong>Estamos a un mensaje de distancia.</strong></div>
              </div>
            </Reveal>

            <Reveal className="contact-form-shell" delay={0.12}>
              <div className="form-shell-head">
                <div><span>01</span><strong>Solicita una reunión</strong></div>
                <small>Respuesta personal</small>
              </div>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="#inicio">
            <Image src="/logo-mundacas-solutions.svg" alt="Mundaca's Solutions" width={390} height={82} />
          </a>
          <p>Software, automatización e infraestructura digital para empresas que quieren avanzar.</p>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#metodo">Método</a>
            <a href="#contacto">Contacto</a>
            <a href="/privacidad">Privacidad</a>
            <a href="/terminos">Términos</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Mundaca&apos;s Solutions SpA.</span>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <span>Diseñado y construido con intención en Chile.</span>
          <a href="https://github.com/cristobalMundacaV" target="_blank" rel="noreferrer" aria-label="GitHub de Mundaca's Solutions">
            <Code2  size={18} /> Code2 
          </a>
        </div>
      </footer>

      {whatsappUrl ? (
        <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">
          <MessageCircle size={23} />
          <span>Conversemos</span>
        </a>
      ) : null}
    </>
  );
}
