import type { Metadata } from "next";
import { Star } from "lucide-react";

// Página de apoyo para pedir reseñas en consulta (QR impreso). No se indexa ni va en el sitemap.
export const metadata: Metadata = {
  title: "Comparte tu opinión | Dr. Alejandro Quiroz Compeán",
  description: "Deja tu opinión en Google sobre tu consulta con el Dr. Alejandro Quiroz Compeán.",
  robots: { index: false, follow: false },
};

const SEDES = [
  { href: "/resena/angeles", nombre: "Hospital Ángeles León", dias: "Lunes, martes y jueves" },
  { href: "/resena/muguerza", nombre: "Hospital Christus Muguerza Altagracia", dias: "Miércoles y viernes" },
];

export default function ResenaPage() {
  return (
    <main className="min-h-[80vh] bg-editorial px-4 py-16">
      <div className="mx-auto max-w-lg text-center">
        <div className="flex justify-center gap-1 text-dorado" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={28} fill="currentColor" />
          ))}
        </div>
        <h1 className="mt-5 font-sans text-3xl font-bold text-petroleo">
          Gracias por confiar en nosotros
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-gris-profundo">
          Tu opinión ayuda a otros pacientes en León a encontrar atención urológica
          especializada. Te toma menos de un minuto.
        </p>
        <h2 className="mt-10 font-sans text-sm font-bold uppercase tracking-widest text-acero">
          ¿Dónde fue tu consulta?
        </h2>
        <div className="mt-4 space-y-4">
          {SEDES.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="block rounded-xl border-2 border-acero bg-white px-6 py-5 text-left transition-colors hover:bg-acero hover:text-editorial group"
            >
              <span className="block font-sans text-lg font-bold text-petroleo group-hover:text-editorial">
                {s.nombre}
              </span>
              <span className="block font-serif text-sm text-gris-profundo group-hover:text-editorial/90">
                {s.dias} · Opinar en Google →
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 font-serif text-sm text-gris-profundo">
          Se abrirá Google para que escribas tu opinión. Puede pedirte iniciar sesión con tu
          cuenta de Google.
        </p>
      </div>
    </main>
  );
}
