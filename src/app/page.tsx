"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Gauge,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
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
const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ||
  "https://wa.me/56966635509?text=Hola%20Crist%C3%B3bal%2C%20quiero%20conversar%20sobre%20un%20proyecto%20para%20mi%20empresa.";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "cristobal.mundacav@gmail.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mundacasolutions.com";

const problems = [
  [Layers3, "Información repartida", "Unificamos lo que hoy vive en planillas, mensajes y sistemas separados."],
  [Workflow, "Trabajo manual repetitivo", "Automatizamos tareas que consumen tiempo y generan errores evitables."],
  [BarChart3, "Decisiones sin contexto", "Convertimos datos dispersos en indicadores que muestran dónde actuar."],
  [Boxes, "Software que no encaja", "Diseñamos alrededor de tu operación, no de una plantilla genérica."],
] as const;

const solutions = [
  {
    icon: Layers3,
    title: "Centraliza tu operación",
    text: "Reúne procesos, equipos e información en un sistema disiñado alrededor de cómo funciona tu empresa.",
    bullets: ["Menos herramientas aisladas", "Información en un solo lugar", "Control operacional"],
  },
  {
    icon: Zap,
    title: "Automatiza el trabajo repetitivo",
    text: "Conecta tareas y servicios para reducir carga manual, tiempos de espera y errores que cuestan dinero.",
    bullets: ["Flujos automáticos", "Alertas relevantes", "Integraciones"],
  },
  {
    icon: Rocket,
    title: "Construye un producto digital",
    text: "Transforma una idea o servicio en una plataforma sólida, fácil de usar y preparada para crecer.",
    bullets: ["Experiencia clara", "Roles y procesos", "Evolución por etapas"],
  },
  {
    icon: BarChart3,
    title: "Decide con información clara",
    text: "Convierte datos dispersos en indicadores útiles para detectar problemas, anticiparte y actuar mejor.",
    bullets: ["Dashboards ejecutivos", "KPIs accionables", "Trazabilidad"],
  },
];

const projects = [
  {
    name: "Foodies",
    category: "Gestión de negocios",
    text: "Ventas, caja, inventario, cocina y reportes conectados en una sola operación.",
    impact: "De procesos separados a una gestión visible y coordinada.",
    tags: ["Ventas", "Caja", "Inventario", "Reportes"],
    icon: Gauge,
    tone: "foodies",
  },
  {
    name: "Carbono Zero",
    category: "Gestión ambiental",
    text: "Medición de CO₂e, trazabilidad, alertas y recomendaciones para proyectos de construcción.",
    impact: "De reportes aislados a una gestión ambiental continua.",
    tags: ["CO₂e", "Trazabilidad", "Alertas", "Sensores"],
    icon: Globe2,
    tone: "carbon",
  },
  {
    name: "Delanoe Motos",
    category: "Experiencia comercial",
    text: "Catálogo digital, administración y una base preparada para mantención y postventa.",
    impact: "De vitrina digital a plataforma comercial preparada para crecer.",
    tags: ["Catálogo", "Gestión", "Clientes", "Postventa"],
    icon: Rocket,
    tone: "motos",
  },
];

const method = [
  [SearchCheck, "Entendemos la operación", "Revisamos el problema, los usuarios y el resultado esperado.", "Diagnóstico y prioridades"],
  [Target, "Diseñamos una ruta clara", "Definimos alcance y etapas para invertir primero donde existe mayor impacto.", "Propuesta y roadmap"],
  [Boxes, "Construimos y validamos", "Avanzamos por entregas visibles y ajustamos antes de aumentar la complejidad.", "Avances demostrables"],
  [Rocket, "Lanzamos y acompañamos", "Ponemos la solución en producción y la evolucionamos junto al negocio.", "Mejora continua"],
] as const;

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={reveal}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`ms-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="ms-header-shell">
        <a className="ms-brand" href="#inicio" aria-label="Mundaca's Solutions, inicio" onClick={() => setOpen(false)}>
          <Image src="/logo-mundacas-solutions.svg" alt="Mundaca's Solutions" width={390} height={82} priority />
        </a>
        <nav className={`ms-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
          <a href="#soluciones" onClick={() => setOpen(false)}>Soluciones</a>
          <a href="#proyectos" onClick={() => setOpen(false)}>Proyectos</a>
          <a href="#metodo" onClick={() => setOpen(false)}>Cómo trabajamos</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </nav>
        <div className="ms-header-actions">
          <a className="ms-button ms-button-header" href={bookingUrl}>Evaluar mi proyecto <ArrowRight size={16} /></a>
          <button className="ms-menu-button" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroDashboard() {
  return (
    <div className="ms-dashboard" aria-hidden="true">
      <div className="ms-dashboard-top"><span>operación.digital</span><small><i /> En línea</small></div>
      <div className="ms-dashboard-main">
        <aside><b>MS</b><span className="active"><Gauge size={15} /> Resumen</span><span><Workflow size={15} /> Procesos</span><span><BarChart3 size={15} /> Reportes</span></aside>
        <div className="ms-dashboard-content">
          <div className="ms-dashboard-title"><small>VISIÓN OPERACIONAL</small><strong>Todo conectado. Todo visible.</strong></div>
          <div className="ms-kpis">
            <article><span>Procesos</span><strong>Conectados</strong><small>Operación centralizada</small></article>
            <article><span>Información</span><strong>Al día</strong><small>Sin planillas dispersas</small></article>
            <article><span>Decisiones</span><strong>Más rápidas</strong><small>Indicadores claros</small></article>
          </div>
          <div className="ms-chart"><div><strong>Visibilidad operacional</strong><small>Información disponible para actuar</small></div><div className="ms-chart-bars"><i /><i /><i /><i /><i /><i /></div></div>
        </div>
      </div>
      <div className="ms-float ms-float-one"><Zap size={18} /><span><strong>Menos trabajo manual</strong><small>Procesos automatizados</small></span><Check size={15} /></div>
      <div className="ms-float ms-float-two"><BarChart3 size={18} /><span><strong>Más visibilidad</strong><small>Decisiones con contexto</small></span></div>
    </div>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mundaca's Solutions",
    legalName: "Mundaca's Solutions SpA",
    url: siteUrl,
    email: contactEmail,
    telephone: "+56 9 6663 5509",
    areaServed: "Chile",
    description: "Sistemas y software para conectar procesos, automatizar operaciones y convertir datos en decisiones.",
  };

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main id="contenido" className="ms-page">
        <section className="ms-hero" id="inicio">
          <div className="ms-grid-bg" /><div className="ms-glow ms-glow-a" /><div className="ms-glow ms-glow-b" />
          <div className="ms-container ms-hero-layout">
            <motion.div className="ms-hero-copy" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
              <motion.div className="ms-eyebrow light" variants={reveal}><Sparkles size={15} /> SOFTWARE PARA EMPRESAS QUE QUIEREN OPERAR MEJOR</motion.div>
              <motion.h1 variants={reveal}>Haz que tu empresa opere con <span>claridad, control y velocidad.</span></motion.h1>
              <motion.p variants={reveal}>Diseñamos sistemas que conectan procesos, equipos y datos para reducir trabajo manual, tomar mejores decisiones y crecer sin perder el control.</motion.p>
              <motion.div className="ms-hero-actions" variants={reveal}>
                <a className="ms-button ms-button-primary" href={bookingUrl}>Evaluar mi proyecto <ArrowRight size={19} /></a>
                <a className="ms-button ms-button-ghost" href="#metodo">Ver cómo trabajamos <ChevronRight size={19} /></a>
              </motion.div>
              <motion.div className="ms-trust" variants={reveal}><span><SearchCheck size={16} /> Diagnóstico antes de cotizar</span><span><Boxes size={16} /> Desarrollo por etapas</span><span><MessageCircle size={16} /> Acompañamiento directo</span></motion.div>
            </motion.div>
            <HeroDashboard />
          </div>
        </section>

        <section className="ms-evidence"><div className="ms-container ms-evidence-inner"><div><strong>Soluciones construidas sobre problemas reales</strong><span>Productos y sistemas desarrollados por Mundaca&apos;s Solutions</span></div><nav><a href="#proyectos"><b>Foodies</b><span>Gestión de negocios</span></a><a href="#proyectos"><b>Carbono Zero</b><span>Gestión ambiental</span></a><a href="#proyectos"><b>Delanoe Motos</b><span>Experiencia comercial</span></a></nav></div></section>

        <section className="ms-section ms-problems">
          <div className="ms-container">
            <Reveal className="ms-heading centered"><div className="ms-eyebrow">CUANDO LA OPERACIÓN CRECE</div><h2>La complejidad no debería frenar a tu empresa.</h2><p>Cuando la información se reparte entre planillas, mensajes y sistemas que no conversan, el equipo pierde tiempo y la dirección pierde visibilidad.</p></Reveal>
            <div className="ms-problem-grid">{problems.map(([Icon, title, text], index) => <Reveal key={title} delay={index * 0.05}><article className="ms-problem-card"><div><span><Icon size={21} /></span><small>0{index + 1}</small></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
            <Reveal className="ms-inline-cta"><div><small>¿Te suena familiar?</small><strong>Cuéntanos qué está frenando tu operación.</strong></div><a href="#contacto">Revisar mi caso <ArrowRight size={18} /></a></Reveal>
          </div>
        </section>

        <section className="ms-section ms-solutions" id="soluciones">
          <div className="ms-container">
            <Reveal className="ms-heading split light"><div><div className="ms-eyebrow light">LO QUE PODEMOS RESOLVER</div><h2>Tecnología aplicada donde más impacto genera.</h2></div><p>No partimos desde una herramienta. Partimos desde el resultado que tu empresa necesita y construimos la solución adecuada.</p></Reveal>
            <div className="ms-solution-grid">{solutions.map(({ icon: Icon, title, text, bullets }, index) => <Reveal key={title} delay={(index % 2) * 0.06}><article className="ms-solution-card"><div className="ms-card-head"><span><Icon size={22} /></span><small>0{index + 1}</small></div><h3>{title}</h3><p>{text}</p><ul>{bullets.map((bullet) => <li key={bullet}><Check size={14} /> {bullet}</li>)}</ul></article></Reveal>)}</div>
            <Reveal className="ms-solution-cta"><div><span>¿No sabes todavía qué solución necesitas?</span><strong>Conversemos sobre el problema. La tecnología viene después.</strong></div><a className="ms-button ms-button-light" href="#contacto">Revisar mi caso <ArrowRight size={18} /></a></Reveal>
          </div>
        </section>

        <section className="ms-section ms-projects" id="proyectos">
          <div className="ms-container">
            <Reveal className="ms-heading"><div className="ms-eyebrow">PROYECTOS</div><h2>Soluciones que convierten complejidad en claridad.</h2><p>Distintas industrias, una misma forma de trabajar: comprender la operación y construir una experiencia útil para quienes la usan todos los días.</p></Reveal>
            <div className="ms-project-list">{projects.map(({ name, category, text, impact, tags, icon: Icon, tone }, index) => <Reveal key={name}><article className={`ms-project ${tone}`}><span className="ms-project-index">0{index + 1}</span><div className="ms-project-copy"><small>{category}</small><h3>{name}</h3><p>{text}</p><strong><Sparkles size={16} /> {impact}</strong><div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="ms-project-visual"><span className="ms-project-icon"><Icon size={30} /></span><div><small>VISIÓN EJECUTIVA</small><strong>{name === "Foodies" ? "Operación conectada" : name === "Carbono Zero" ? "Impacto medible" : "Experiencia comercial"}</strong><div className="ms-mini-bars"><i /><i /><i /><i /><i /></div></div></div></article></Reveal>)}</div>
          </div>
        </section>

        <section className="ms-section ms-method" id="metodo">
          <div className="ms-container ms-method-layout">
            <Reveal className="ms-method-intro"><div className="ms-eyebrow">CÓMO TRABAJAMOS</div><h2>Menos incertidumbre. Más visibilidad en cada etapa.</h2><p>Sabes qué se está resolviendo, por qué se tomó cada decisión y cuál es el siguiente avance.</p><div className="ms-promise"><ShieldCheck size={23} /><span><strong>Un proceso pensado para darte seguridad</strong><small>Alcance claro, avances visibles y comunicación directa.</small></span></div></Reveal>
            <div className="ms-method-steps">{method.map(([Icon, title, text, deliverable], index) => <Reveal key={title} delay={index * 0.05}><article><span className="ms-step">0{index + 1}</span><div className="ms-step-icon"><Icon size={21} /></div><div><h3>{title}</h3><p>{text}</p><small><Check size={13} /> {deliverable}</small></div></article></Reveal>)}</div>
          </div>
        </section>

        <section className="ms-section ms-partner">
          <div className="ms-container ms-partner-layout">
            <Reveal><div className="ms-eyebrow light">UN SOCIO TECNOLÓGICO</div><h2>Nos hacemos cargo de convertir el problema en una solución que funcione.</h2><p>No necesitas llegar con una especificación técnica. Nosotros ordenamos el camino, cuidamos las decisiones y construimos con responsabilidad.</p><div className="ms-values"><span><BriefcaseBusiness size={17} /><b>Visión de negocio</b><small>La tecnología responde a un objetivo real.</small></span><span><MessageCircle size={17} /><b>Comunicación directa</b><small>Conversaciones claras durante todo el proyecto.</small></span><span><ShieldCheck size={17} /><b>Responsabilidad técnica</b><small>Calidad y continuidad desde el diseño.</small></span><span><Rocket size={17} /><b>Evolución continua</b><small>La solución crece junto a tu empresa.</small></span></div></Reveal>
            <Reveal className="ms-partner-card" delay={0.1}><div className="ms-partner-head"><span><small>DE PROBLEMA A RESULTADO</small><strong>Un camino claro para avanzar</strong></span><small><i /> En progreso</small></div><div className="ms-flow"><span><SearchCheck size={21} />Entender</span><ChevronRight /><span><Target size={21} />Priorizar</span><ChevronRight /><span><Boxes size={21} />Construir</span><ChevronRight /><span><Rocket size={21} />Resultado</span></div><div className="ms-result"><small>RESULTADO</small><strong>Una operación más clara y preparada para crecer.</strong><div><span><Check size={13} /> Menos fricción</span><span><Check size={13} /> Más control</span><span><Check size={13} /> Mejor información</span></div></div></Reveal>
          </div>
        </section>

        <section className="ms-section ms-contact" id="contacto">
          <div className="ms-container ms-contact-layout">
            <Reveal className="ms-contact-copy"><div className="ms-eyebrow light">HABLEMOS DE TU OPERACIÓN</div><h2>Cuéntanos qué está frenando hoy a tu empresa.</h2><p>Revisaremos el contexto, el impacto y la mejor forma de avanzar. La primera conversación es para entender el problema, no para venderte una solución genérica.</p><div className="ms-contact-points"><span><Check size={16} /> Diagnóstico enfocado en tu realidad</span><span><Check size={16} /> Evaluación honesta de viabilidad</span><span><Check size={16} /> Próximos pasos claros</span></div><a className="ms-direct" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={22} /><span><small>¿Prefieres conversar directamente?</small><strong>Estamos a un mensaje de distancia.</strong></span><ArrowRight size={17} /></a></Reveal>
            <Reveal className="ms-form-shell" delay={0.1}><div className="ms-form-head"><span><b>01</b><strong>Evaluemos tu proyecto</strong></span><small>Respuesta personal</small></div><ContactForm /></Reveal>
          </div>
        </section>
      </main>

      <footer className="ms-footer"><div className="ms-container ms-footer-top"><div><a className="ms-brand" href="#inicio"><Image src="/logo-mundacas-solutions.svg" alt="Mundaca's Solutions" width={390} height={82} /></a><p>Sistemas digitales para empresas que necesitan operar con más claridad, control y capacidad de crecer.</p></div><nav><strong>Explorar</strong><a href="#soluciones">Soluciones</a><a href="#proyectos">Proyectos</a><a href="#metodo">Cómo trabajamos</a></nav><nav><strong>Contacto</strong><a href="#contacto">Evaluar mi proyecto</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href={`mailto:${contactEmail}`}>{contactEmail}</a></nav><nav><strong>Legal</strong><a href="/privacidad">Privacidad</a><a href="/terminos">Términos</a></nav></div><div className="ms-container ms-footer-bottom"><span>© {new Date().getFullYear()} Mundaca&apos;s Solutions SpA.</span><span>Los Ángeles, Chile</span></div></footer>
      <a className="ms-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle size={21} /><span>Conversemos</span></a>
    </>
  );
}
