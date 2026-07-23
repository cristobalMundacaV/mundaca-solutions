"use client";

import { RotateCcw } from "lucide-react";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="status-page">
      <span>500</span>
      <h1>Algo no salió como esperábamos.</h1>
      <p>La experiencia está protegida para fallar de forma segura. Puedes reintentar ahora.</p>
      <button className="button button-primary" type="button" onClick={reset}>
        <RotateCcw size={18} /> Reintentar
      </button>
    </main>
  );
}
