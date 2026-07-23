import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description: "Condiciones generales de uso del sitio web de Mundaca's Solutions.",
  alternates: { canonical: "/terminos" },
};

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "cristobal.mundacav@gmail.com";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-background" />
      <div className="legal-container">
        <div className="legal-nav">
          <Link className="brand legal-brand" href="/" aria-label="Volver a Mundaca's Solutions">
            <Image src="/logo-mundacas-solutions.svg" alt="Mundaca's Solutions" width={390} height={82} loading="eager" />
          </Link>
          <Link className="legal-back" href="/"><ArrowLeft size={17} /> Volver al inicio</Link>
        </div>

        <article className="legal-card">
          <span className="legal-eyebrow">CONDICIONES DEL SITIO</span>
          <h1>Términos de Uso</h1>
          <p className="legal-updated">Última actualización: 22 de julio de 2026</p>

          <section>
            <h2>1. Alcance</h2>
            <p>
              Este sitio presenta los servicios, capacidades y proyectos de Mundaca&apos;s Solutions SpA. Su contenido es informativo y no constituye por sí solo una propuesta contractual definitiva.
            </p>
          </section>

          <section>
            <h2>2. Solicitudes comerciales</h2>
            <p>
              Enviar el formulario inicia una conversación y no obliga a ninguna de las partes a contratar. El alcance, precio, plazos, entregables, propiedad intelectual y soporte se definirán en una propuesta o contrato separado.
            </p>
          </section>

          <section>
            <h2>3. Contenido y propiedad intelectual</h2>
            <p>
              La identidad visual, textos, diseños, demostraciones y componentes propios del sitio pertenecen a Mundaca&apos;s Solutions o se utilizan con autorización. No se permite su reproducción comercial sin consentimiento previo.
            </p>
          </section>

          <section>
            <h2>4. Disponibilidad</h2>
            <p>
              Procuramos mantener el sitio disponible y actualizado, pero pueden existir interrupciones por mantenimiento, proveedores externos o situaciones fuera de nuestro control.
            </p>
          </section>

          <section>
            <h2>5. Enlaces externos</h2>
            <p>
              Algunos enlaces pueden dirigir a servicios externos. Mundaca&apos;s Solutions no controla sus contenidos, disponibilidad ni políticas, por lo que cada usuario debe revisarlas antes de utilizarlos.
            </p>
          </section>

          <section>
            <h2>6. Contacto</h2>
            <p>
              Las consultas relacionadas con estos términos pueden enviarse a{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
