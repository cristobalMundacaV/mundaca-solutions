import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="status-page">
      <span>404</span>
      <h1>Esta ruta no existe.</h1>
      <p>La página pudo cambiar de dirección o nunca estuvo disponible.</p>
      <Link className="button button-primary" href="/"><ArrowLeft size={18} /> Volver al inicio</Link>
    </main>
  );
}
