"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { contactServices, contactTimelines } from "@/lib/contact-options";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: contactServices[0],
  timeline: contactTimelines[1],
  message: "",
  consent: false,
  website: "",
};

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const update = <K extends keyof typeof initialForm>(field: K, value: (typeof initialForm)[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle" && status !== "sending") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setFeedback("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
        credentials: "same-origin",
      });

      const data = (await response.json().catch(() => ({}))) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message || "No fue posible enviar la solicitud.");
      }

      setStatus("success");
      setFeedback("Solicitud recibida. Te contactaremos para coordinar una conversación estratégica.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof DOMException && error.name === "AbortError"
          ? "La solicitud tardó demasiado. Revisa tu conexión e inténtalo nuevamente."
          : error instanceof Error
            ? error.message
            : "No fue posible enviar la solicitud.",
      );
    } finally {
      window.clearTimeout(timeout);
    }
  };

  return (
    <form className="contact-form" onSubmit={submit} aria-busy={status === "sending"}>
      <div className="form-grid">
        <label className="field">
          <span>Nombre</span>
          <input
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Tu nombre"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
          />
        </label>

        <label className="field">
          <span>Empresa</span>
          <input
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
            placeholder="Nombre de tu empresa"
            autoComplete="organization"
            minLength={2}
            maxLength={120}
            required
          />
        </label>

        <label className="field">
          <span>Correo</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="nombre@empresa.cl"
            autoComplete="email"
            inputMode="email"
            maxLength={160}
            required
          />
        </label>

        <label className="field">
          <span>Teléfono / WhatsApp</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="+56 9..."
            autoComplete="tel"
            inputMode="tel"
            maxLength={40}
          />
        </label>

        <label className="field">
          <span>Servicio de interés</span>
          <select value={form.service} onChange={(event) => update("service", event.target.value as typeof form.service)}>
            {contactServices.map((service) => <option key={service}>{service}</option>)}
          </select>
        </label>

        <label className="field">
          <span>¿Cuándo quieres comenzar?</span>
          <select value={form.timeline} onChange={(event) => update("timeline", event.target.value as typeof form.timeline)}>
            {contactTimelines.map((timeline) => <option key={timeline}>{timeline}</option>)}
          </select>
        </label>
      </div>

      <label className="field field-full">
        <span>Cuéntanos el desafío</span>
        <textarea
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="¿Qué proceso quieres mejorar, automatizar o transformar?"
          rows={6}
          minLength={12}
          maxLength={3000}
          required
        />
      </label>

      <div className="consent-field">
        <input
          id="privacy-consent"
          type="checkbox"
          checked={form.consent}
          onChange={(event) => update("consent", event.target.checked)}
          required
        />
        <div>
          <label htmlFor="privacy-consent">Autorizo el uso de estos datos para responder mi solicitud</label>
          {", según la "}
          <Link href="/privacidad">Política de Privacidad</Link>.
        </div>
      </div>

      <label className="honeypot" aria-hidden="true">
        Sitio web
        <input
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </label>

      {feedback ? (
        <div
          className={`form-feedback ${status === "success" ? "is-success" : "is-error"}`}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status === "success" ? <CheckCircle2 size={20} /> : null}
          <span>{feedback}</span>
        </div>
      ) : null}

      <div className="form-submit-row">
        <p>Respondemos personalmente. Sin bots, sin respuestas genéricas.</p>
        <button className="button button-primary button-large" type="submit" disabled={status === "sending"}>
          {status === "sending" ? <LoaderCircle className="spin" size={19} /> : <ArrowRight size={19} />}
          {status === "sending" ? "Enviando solicitud" : "Solicitar reunión"}
        </button>
      </div>
    </form>
  );
}
