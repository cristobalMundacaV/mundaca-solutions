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
  "https://wa.me/56966635509?text=Hola%2C%20quiero%20conversar%20con%20Mundaca%27s%20Solutions%20sobre%20una%20necesidad%20de%20mi%20empresa.";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@mundacasolutions.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mundacasolutions.com";
const brandLogo = "/logos/mundaca-solutions/logo-mundacas-solutions.png";

const products = [
  {
    name: "Carbono Zero",
    category: "Inteligencia para construcción",
    text: "Conecta diseño, planificación, materiales, ejecución y desempeño ambiental para entender el proyecto como un sistema y anticipar mejor sus consecuencias.",
    impact: "Del dato fragmentado a una visión conectada del proyecto.",
    tags: ["Diseño", "Planificación", "CO₂e", "Trazabilidad"],
    logo: "/logos/carbono-zero/logo-carbono-zero.png",
    href: "https://carbonozero.mundacasolutions.com",
    hubHref: "/productos/carbono-zero",
    cta: "Conocer Carbono Zero",
    tone: "carbon",
  },
  {
    name: "Foodies",
    category: "Operación e inteligencia para negocios",
    text: "Conecta ventas, caja, inventario y operación para dar al negocio una fuente de verdad clara, detectar lo que requiere atención y decidir con más contexto.",
    impact: "De procesos separados a una operación conectada y visible.",
    tags: ["Ventas", "Caja", "Inventario", "Reportes"],
    logo: "/logos/foodies/logo-foodies.png",
    href: "https://foodies.mundacasolutions.com",
    hubHref: "/productos/foodies",
    cta: "Conocer Foodies",
    tone: "foodies",
  },
] as const;

const cafetalStages = [
  {
    index: "01",
    title: "Solicitud",
    items: ["Cliente", "Pedido", "Menú"],
  },
  {
    index: "02",
    title: "Ejecución",
    items: ["Preparación", "Despacho"],
  },
  {
    index: "03",
    title: "Cierre y control",
    items: ["Pago / Cuenta", "Caja", "Reportes"],
  },
] as const;
const thesisFlow = ["Problema", "Operación", "Datos", "Contexto", "Inteligencia", "Decisión", "Acción", "Resultado"] as const;

const problems = [
  [Layers3, "Información fragmentada", "Conectamos información que hoy vive entre planillas, mensajes y herramientas aisladas."],
  [Workflow, "Operación demasiado manual", "Automatizamos tareas repetitivas y puntos de traspaso que consumen tiempo y amplifican errores."],
  [BarChart3, "Datos sin contexto", "Convertimos registros dispersos en información útil para detectar desviaciones y decidir dónde actuar."],
  [Boxes, "Herramientas que no encajan", "Diseñamos alrededor de tu operación cuando una solución genérica obliga a tu empresa a trabajar de una forma que no le corresponde."],
] as const;

const solutions = [
  {
    icon: Layers3,
    title: "Centraliza la operación",
    text: "Conecta procesos, equipos e información en un sistema diseñado alrededor de cómo funciona realmente tu empresa.",
    bullets: ["Procesos conectados", "Información centralizada", "Control operacional"],
  },
  {
    icon: Zap,
    title: "Automatiza lo repetitivo",
    text: "Reduce tareas manuales, traspasos innecesarios y puntos donde hoy se pierde tiempo o se multiplican errores.",
    bullets: ["Flujos automatizados", "Alertas relevantes", "Integraciones"],
  },
  {
    icon: Rocket,
    title: "Convierte una necesidad en producto",
    text: "Transformamos una idea, proceso o servicio en una plataforma sólida, usable y preparada para evolucionar.",
    bullets: ["Experiencia clara", "Roles y procesos", "Evolución por etapas"],
  },
  {
    icon: BarChart3,
    title: "Convierte datos en decisiones",
    text: "Estructura la información de la operación para detectar desviaciones, entender qué está ocurriendo y actuar con más contexto.",
    bullets: ["KPIs accionables", "Visibilidad ejecutiva", "Trazabilidad"],
  },
];

const method = [
  [SearchCheck, "Entendemos la operación", "Levantamos el problema, los usuarios, los procesos y el resultado que la empresa necesita alcanzar.", "Diagnóstico y prioridades"],
  [Target, "Diseñamos la solución", "Definimos alcance, arquitectura y una ruta de implementación enfocada primero en lo que genera más valor.", "Propuesta y plan de implementación"],
  [Boxes, "Implementamos y validamos", "Construimos por etapas funcionales, validamos con la operación real y corregimos antes de aumentar complejidad.", "Avances funcionales y verificables"],
  [Rocket, "Ponemos en marcha y acompañamos", "Configuramos la solución, preparamos a los usuarios y acompañamos el arranque hasta estabilizar la operación.", "Go-live y acompañamiento"],
] as const;

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`ms-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="ms-header-shell">
        <a
          className="ms-brand"
          href="#inicio"
          aria-label="Mundaca's Solutions, inicio"
          onClick={() => setOpen(false)}
        >
          <Image src={brandLogo} alt="Mundaca's Solutions" width={390} height={82} priority />
        </a>

        <nav className={`ms-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
          <a href="/productos" onClick={() => setOpen(false)}>Productos</a>
          <a href="#cafetal" onClick={() => setOpen(false)}>Caso Cafetal</a>
          <a href="#metodo" onClick={() => setOpen(false)}>Cómo trabajamos</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </nav>

        <div className="ms-header-actions">
          <a className="ms-button ms-button-header" href={bookingUrl}>
            Conversemos <ArrowRight size={16} />
          </a>
          <button
            className="ms-menu-button"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroProof() {
  return (
    <div className="ms-proof" aria-hidden="true">
      <div className="ms-proof-top">
        <span>Productos propios</span>
      </div>
      <div className="ms-proof-intro">Una misma forma de construir software</div>
      <div className="ms-proof-products">
        <div className="ms-proof-item">
          <div className="ms-proof-logo-well">
            <Image src="/logos/carbono-zero/logo-carbono-zero.png" alt="" width={270} height={110} />
          </div>
          <div className="ms-proof-meta">
            <strong>Carbono Zero</strong>
            <span>Inteligencia para construcción</span>
            <small>Proyecto · Datos · Desempeño</small>
          </div>
        </div>
        <div className="ms-proof-item">
          <div className="ms-proof-logo-well">
            <Image src="/logos/foodies/logo-foodies.png" alt="" width={220} height={92} />
          </div>
          <div className="ms-proof-meta">
            <strong>Foodies</strong>
            <span>Operación e inteligencia para negocios</span>
            <small>Ventas · Inventario · Gestión</small>
          </div>
        </div>
      </div>
      <div className="ms-proof-flow">
        <span><Workflow size={13} /> Operación</span>
        <ChevronRight size={13} />
        <span><BarChart3 size={13} /> Datos</span>
        <ChevronRight size={13} />
        <span><Sparkles size={13} /> Inteligencia</span>
        <ChevronRight size={13} />
        <span><Target size={13} /> Decisión</span>
      </div>
    </div>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Mundaca's Solutions",
        legalName: "Mundaca's Solutions SpA",
        url: siteUrl,
        logo: `${siteUrl}${brandLogo}`,
        email: contactEmail,
        description:
          "Compañía de software, datos e inteligencia operacional que construye productos propios y sistemas a medida para conectar procesos, datos e inteligencia.",
      },
      {
        "@type": "ProfessionalService",
        name: "Mundaca's Solutions",
        legalName: "Mundaca's Solutions SpA",
        url: siteUrl,
        email: contactEmail,
        telephone: "+56 9 6663 5509",
        areaServed: "Chile",
        description:
          "Diseño y desarrollo de productos y software a medida que conectan operación, datos e inteligencia para automatizar procesos, aumentar el control y mejorar decisiones.",
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <main id="contenido" className="ms-page">
        <section className="ms-hero" id="inicio">
          <div className="ms-grid-bg" />
          <div className="ms-glow ms-glow-a" />
          <div className="ms-glow ms-glow-b" />

          <div className="ms-container ms-hero-layout">
            <motion.div
              className="ms-hero-copy"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div className="ms-eyebrow light" variants={reveal}>
                <Sparkles size={15} /> SOFTWARE · DATOS · INTELIGENCIA OPERACIONAL
              </motion.div>
              <motion.h1 variants={reveal}>
                Convertimos operaciones complejas en <span className="ms-hero-highlight">sistemas para operar y decidir mejor.</span>
              </motion.h1>
              <motion.p variants={reveal}>
                Diseñamos productos y software a medida que conectan procesos, datos e inteligencia. Menos fricción operativa, más control y mejores decisiones.
              </motion.p>
              <motion.div className="ms-hero-actions" variants={reveal}>
                <a className="ms-button ms-button-primary" href={bookingUrl}>
                  Conversemos sobre tu operación <ArrowRight size={19} />
                </a>
                <a className="ms-button ms-button-ghost" href="#productos">
                  Explorar nuestros productos <ChevronRight size={19} />
                </a>
              </motion.div>
              <motion.div className="ms-trust" variants={reveal}>
                <span><SearchCheck size={16} /> Diagnóstico antes de cotizar</span>
                <span><Boxes size={16} /> Desarrollo por etapas</span>
                <span><MessageCircle size={16} /> Acompañamiento directo</span>
              </motion.div>
            </motion.div>

            <HeroProof />
          </div>
        </section>

        <section className="ms-evidence">
          <div className="ms-container ms-evidence-inner">
            <div>
              <strong>Productos propios, construidos sobre problemas reales</strong>
              <span>Carbono Zero y Foodies aplican el mismo principio en operaciones diferentes.</span>
            </div>
            <nav>
                <a href="/productos/carbono-zero"><b>Carbono Zero</b><span>Inteligencia para construcción</span></a>
                  <a href="/productos/foodies"><b>Foodies</b><span>Operación e inteligencia para negocios</span></a>
            </nav>
          </div>
        </section>

        <section className="ms-section ms-projects" id="productos">
          <div className="ms-container">
            <Reveal className="ms-heading">
              <div className="ms-eyebrow">PRODUCTOS PROPIOS</div>
              <h2>Dos productos. Un mismo estándar.</h2>
              <p>
                Carbono Zero y Foodies nacen de la misma forma de entender el software: conectar la operación,
                ordenar los datos y convertirlos en contexto útil para decidir. Aplicamos ese principio a problemas
                distintos, sin perder profundidad en cada industria.
              </p>
            </Reveal>

            <div className="ms-project-list">
              {products.map(({ name, category, text, impact, tags, logo, href, hubHref, cta, tone }, index) => (
                <Reveal key={name}>
                  <article className={`ms-project ${tone}`}>
                    <span className="ms-project-index">0{index + 1}</span>
                    <div className="ms-project-copy">
                      <small>{category}</small>
                      <h3>{name}</h3>
                      <p>{text}</p>
                      <strong><Sparkles size={16} /> {impact}</strong>
                      <div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    </div>

                    <div className="ms-project-visual">
                      <a className="ms-project-logo-link" href={hubHref} aria-label={`Conocer el producto ${name}`}>
                        <Image
                          className={`ms-project-logo ${tone}`}
                          src={logo}
                          alt={`Logo de ${name}`}
                          width={760}
                          height={320}
                          sizes="(max-width: 900px) 90vw, 520px"
                        />
                        <span>Ver la página de {name} <ArrowRight size={17} /></span>
                      </a>
                      <a className="ms-project-external-link" href={href} target="_blank" rel="noreferrer">{cta} <ArrowRight size={15} /></a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="ms-section ms-case" id="cafetal">
          <div className="ms-container">
            <Reveal className="ms-heading centered">
              <div className="ms-eyebrow">CASO REAL · CAFETAL</div>
              <h2>Una operación completa, conectada de principio a fin.</h2>
              <p>
                Foodies se configuró alrededor del flujo real de Cafetal para reunir clientes, pedidos,
                preparación, despacho, cuentas, pagos, caja e información de gestión en una sola operación trazable.
              </p>
            </Reveal>

            <Reveal className="ms-case-card">
              <div className="ms-case-meta">
                <span className="ms-case-tag">IMPLEMENTACIÓN ESPECIALIZADA</span>
                <span className="ms-case-product"><Sparkles size={14} /> Construido sobre Foodies</span>
              </div>

              <div className="ms-case-stages">
                {cafetalStages.map(({ index, title, items }) => (
                  <div className="ms-case-stage" key={title}>
                    <span className="ms-case-stage-index">{index}</span>
                    <h3>{title}</h3>
                    <ul>
                      {items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="ms-case-impact">
                <Check size={16} />
                <span>Una sola operación trazable desde la solicitud hasta el cierre.</span>
              </div>

              <a className="ms-button ms-button-primary" href="https://foodies.mundacasolutions.com" target="_blank" rel="noreferrer">
                Conocer Foodies <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="ms-section ms-thesis" id="tesis">
          <div className="ms-container">
            <Reveal className="ms-heading centered light">
              <div className="ms-eyebrow light">NUESTRO PRINCIPIO</div>
              <h2>No empezamos por la tecnología. Empezamos por el problema.</h2>
            </Reveal>

            <Reveal className="ms-thesis-flow">
              {thesisFlow.map((step, index) => (
                <div className="ms-thesis-step" key={step}>
                  <span>{step}</span>
                  {index < thesisFlow.length - 1 ? <ChevronRight size={15} /> : null}
                </div>
              ))}
            </Reveal>

            <Reveal className="ms-thesis-note" delay={0.1}>
              <p>
                Es el principio detrás de cada producto y cada solución que construimos: comprender primero,
                estructurar después y usar tecnología sólo donde realmente mejora la operación.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="ms-section ms-ai" id="ia">
          <div className="ms-container ms-ai-layout">
            <Reveal className="ms-ai-icon">
              <Sparkles size={26} />
            </Reveal>
            <Reveal className="ms-ai-copy" delay={0.06}>
              <div className="ms-eyebrow">INTELIGENCIA ARTIFICIAL</div>
              <h2>La inteligencia aporta cuando entiende el contexto.</h2>
              <p>
                Primero estructuramos procesos, datos y reglas. Después usamos inteligencia artificial para
                explicar, relacionar y asistir decisiones sobre una realidad que el sistema ya comprende.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="ms-section ms-problems">
          <div className="ms-container">
            <Reveal className="ms-heading centered">
              <div className="ms-eyebrow">CUANDO LA OPERACIÓN CRECE</div>
              <h2>La complejidad no debería convertirse en descontrol.</h2>
              <p>
                Cuando la información queda repartida entre personas, planillas, mensajes y herramientas que
                no conversan, aumenta la fricción operativa y disminuye la capacidad de ver qué está ocurriendo.
              </p>
            </Reveal>
            <div className="ms-problem-grid">
              {problems.map(([Icon, title, text], index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <article className="ms-problem-card">
                    <div><span><Icon size={21} /></span><small>0{index + 1}</small></div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="ms-inline-cta">
              <div><small>¿Te suena familiar?</small><strong>Cuéntanos dónde se está generando la fricción.</strong></div>
              <a href="#contacto">Revisar mi caso <ArrowRight size={18} /></a>
            </Reveal>
          </div>
        </section>

        <section className="ms-section ms-solutions" id="soluciones">
          <div className="ms-container">
            <Reveal className="ms-heading split light">
              <div>
                <div className="ms-eyebrow light">DESARROLLO A MEDIDA</div>
                <h2>Cuando lo genérico no alcanza, diseñamos a medida.</h2>
              </div>
              <p>
                Construimos sistemas operacionales, automatizaciones, plataformas de datos e integraciones
                alrededor de la forma real de trabajar de tu empresa. El software se adapta a la operación,
                no al revés.
              </p>
            </Reveal>
            <div className="ms-solution-grid">
              {solutions.map(({ icon: Icon, title, text, bullets }, index) => (
                <Reveal key={title} delay={(index % 2) * 0.06}>
                  <article className="ms-solution-card">
                    <div className="ms-card-head"><span><Icon size={22} /></span><small>0{index + 1}</small></div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <ul>{bullets.map((bullet) => <li key={bullet}><Check size={14} /> {bullet}</li>)}</ul>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="ms-solution-cta">
              <div>
                <span>¿Tu problema no cabe en una solución estándar?</span>
                <strong>Partimos por entenderlo. Después definimos qué conviene construir, integrar o automatizar.</strong>
              </div>
              <a className="ms-button ms-button-light" href="#contacto">
                Evaluar mi caso <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="ms-section ms-method" id="metodo">
          <div className="ms-container ms-method-layout">
            <Reveal className="ms-method-intro">
              <div className="ms-eyebrow">CÓMO TRABAJAMOS</div>
              <h2>Menos incertidumbre. Más visibilidad en cada etapa.</h2>
              <p>Desde la primera conversación hasta la puesta en marcha, sabes qué estamos resolviendo, qué decisión se tomó y cuál es el siguiente paso.</p>
              <div className="ms-promise">
                <ShieldCheck size={23} />
                <span>
                  <strong>Un proceso pensado para darte seguridad</strong>
                  <small>Alcance claro, avances visibles y comunicación directa.</small>
                </span>
              </div>
            </Reveal>
            <div className="ms-method-steps">
              {method.map(([Icon, title, text, deliverable], index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <article>
                    <span className="ms-step">0{index + 1}</span>
                    <div className="ms-step-icon"><Icon size={21} /></div>
                    <div><h3>{title}</h3><p>{text}</p><small><Check size={13} /> {deliverable}</small></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="ms-section ms-partner">
          <div className="ms-container ms-partner-layout">
            <Reveal>
              <div className="ms-eyebrow light">UN SOCIO TECNOLÓGICO</div>
              <h2>Nos hacemos cargo del camino completo: del problema a la puesta en marcha.</h2>
              <p>
                No necesitas llegar con una especificación técnica. Entendemos la operación, diseñamos la
                solución, tomamos las decisiones técnicas necesarias y acompañamos su implementación.
              </p>
              <div className="ms-values">
                <span><BriefcaseBusiness size={17} /><b>Visión de negocio</b><small>La tecnología responde a un problema y un resultado concreto.</small></span>
                <span><MessageCircle size={17} /><b>Comunicación directa</b><small>Sabes qué estamos haciendo, por qué y qué sigue.</small></span>
                <span><ShieldCheck size={17} /><b>Responsabilidad técnica</b><small>Diseñamos pensando en seguridad, continuidad y evolución.</small></span>
                <span><Rocket size={17} /><b>Acompañamiento</b><small>La implementación no termina cuando entregamos el software.</small></span>
              </div>
            </Reveal>
            <Reveal className="ms-partner-card" delay={0.1}>
              <div className="ms-partner-head">
                <span><small>DE PROBLEMA A RESULTADO</small><strong>Un camino claro para avanzar</strong></span>
                <small><i /> En progreso</small>
              </div>
              <div className="ms-flow">
                <span><SearchCheck size={21} />Entender</span><ChevronRight />
                <span><Target size={21} />Priorizar</span><ChevronRight />
                <span><Boxes size={21} />Construir</span><ChevronRight />
                <span><Rocket size={21} />Resultado</span>
              </div>
              <div className="ms-result">
                <small>RESULTADO</small>
                <strong>Una operación más clara y preparada para crecer.</strong>
                <div>
                  <span><Check size={13} /> Menos fricción</span>
                  <span><Check size={13} /> Más control</span>
                  <span><Check size={13} /> Mejor información</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="ms-section ms-contact" id="contacto">
          <div className="ms-container ms-contact-layout">
            <Reveal className="ms-contact-copy">
              <div className="ms-eyebrow light">PRIMER PASO · ENTENDER EL PROBLEMA</div>
              <h2>Cuéntanos qué está frenando tu operación.</h2>
              <p>
                Antes de hablar de tecnología o precio, revisamos el contexto, la prioridad y la viabilidad.
                Así la primera conversación empieza donde realmente importa.
              </p>
              <div className="ms-contact-points">
                <span><Check size={16} /> Diagnóstico enfocado en tu operación</span>
                <span><Check size={16} /> Viabilidad y alcance honestos</span>
                <span><Check size={16} /> Un próximo paso concreto</span>
              </div>
              <div className="ms-contact-actions">
                <a className="ms-button ms-button-light ms-cta-booking" href={bookingUrl}>
                  Agendar conversación <ArrowRight size={18} />
                </a>
                <a className="ms-direct" href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle size={22} />
                  <span><small>¿Prefieres escribirnos?</small><strong>Conversemos directamente por WhatsApp.</strong></span>
                  <ArrowRight size={17} />
                </a>
              </div>
            </Reveal>
            <Reveal className="ms-form-shell" delay={0.1}>
              <div className="ms-form-head">
                <span><b>01</b><strong>Cuéntanos qué necesitas resolver</strong></span>
                <small>Respuesta personal</small>
              </div>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="ms-footer">
        <div className="ms-container ms-footer-top">
          <div>
            <a className="ms-brand" href="#inicio">
              <Image src={brandLogo} alt="Mundaca's Solutions" width={390} height={82} />
            </a>
            <p>Productos y software a medida para empresas que necesitan operar con más control, conectar mejor su información y tomar decisiones con contexto.</p>
          </div>
          <nav>
            <strong>Explorar</strong>
            <a href="/productos">Productos</a>
            <a href="/productos/foodies">Foodies</a>
            <a href="/productos/carbono-zero">Carbono Zero</a>
            <a href="/soluciones/software-a-medida">Software a medida</a>
            <a href="#cafetal">Caso Cafetal</a>
            <a href="#metodo">Cómo trabajamos</a>
          </nav>
          <nav>
            <strong>Contacto</strong>
            <a href={bookingUrl}>Agendar conversación</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </nav>
          <nav>
            <strong>Legal</strong>
            <a href="/privacidad">Privacidad</a>
            <a href="/terminos">Términos</a>
          </nav>
          <nav>
            <strong>Empresa</strong>
            <a href="/contacto">Contacto</a>
            <a href="/conocimiento">Conocimiento</a>
          </nav>
        </div>
        <div className="ms-container ms-footer-bottom">
          <span>© {new Date().getFullYear()} Mundaca&apos;s Solutions SpA.</span>
          <span>Los Ángeles, Chile</span>
        </div>
      </footer>

      <a
        className="ms-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={21} /><span>Conversemos</span>
      </a>
    </>
  );
}
