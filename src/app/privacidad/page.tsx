import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo Mundaca's Solutions trata los datos enviados mediante su sitio web.",
  alternates: { canonical: "/privacidad" },
};

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "cristobal.mundacav@gmail.com";

export default function PrivacyPage() {
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
          <span className="legal-eyebrow">INFORMACIÓN Y TRANSPARENCIA</span>
          <h1>Política de Privacidad</h1>
          <p className="legal-updated">Última actualización: 22 de julio de 2026</p>

          <section>
            <h2>1. Responsable</h2>
            <p>
              Mundaca&apos;s Solutions SpA, con domicilio en Los Ángeles, Chile, es responsable del tratamiento de los datos que se envían mediante este sitio web.
            </p>
          </section>

          <section>
            <h2>2. Datos que recopilamos</h2>
            <p>
              El formulario puede solicitar nombre, empresa, correo electrónico, teléfono, servicio de interés, plazo estimado y una descripción del desafío. También podemos registrar información técnica mínima necesaria para proteger el formulario contra abuso.
            </p>
          </section>

          <section>
            <h2>3. Para qué usamos la información</h2>
            <p>
              Utilizamos los datos exclusivamente para responder solicitudes, coordinar reuniones, preparar una evaluación inicial y mantener trazabilidad comercial. No vendemos información personal ni la utilizamos para campañas ajenas a la solicitud sin autorización adicional.
            </p>
          </section>

          <section>
            <h2>4. Proveedores tecnológicos</h2>
            <p>
              Para operar el sitio podemos utilizar servicios de hosting, correo transaccional y almacenamiento seguro, como Vercel, Resend y Supabase. Solo se comparte la información necesaria para prestar esas funciones.
            </p>
          </section>

          <section>
            <h2>5. Conservación y seguridad</h2>
            <p>
              Conservamos los datos durante el tiempo razonablemente necesario para atender la solicitud y administrar la relación comercial. Aplicamos controles técnicos y organizativos orientados a prevenir acceso, modificación o divulgación no autorizada.
            </p>
          </section>

          <section>
            <h2>6. Tus solicitudes</h2>
            <p>
              Puedes pedir acceso, corrección o eliminación de la información enviada escribiendo a{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Atenderemos la solicitud después de validar razonablemente la identidad del solicitante.
            </p>
          </section>

          <section>
            <h2>7. Cambios</h2>
            <p>
              Esta política puede actualizarse cuando cambien el sitio, sus servicios o los proveedores utilizados. La fecha de la versión vigente siempre aparecerá al comienzo del documento.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
