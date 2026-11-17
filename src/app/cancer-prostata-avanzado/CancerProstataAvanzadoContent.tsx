"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Info } from "lucide-react";
import WAButtonConSelector from "@/components/WAButtonConSelector";

function FAQItem({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800">{q}</span>
        <span className="text-teal-700 text-xl shrink-0">{open ? "−" : "+"}</span>
      </button>
      <div hidden={!open} className="px-5 pb-5 text-slate-700 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-bold text-slate-900 mb-4">{children}</h2>;
}

const ETAPAS = [
  {
    t: "Localmente avanzado",
    d: "El tumor salió de la cápsula de la próstata o llegó a estructuras vecinas, pero no a órganos lejanos. Muchas veces todavía se trata con intención curativa, combinando tratamientos.",
  },
  {
    t: "Metastásico sensible a hormonas",
    d: "El cáncer se extendió a ganglios lejanos, huesos u otros órganos, y todavía responde a bajar la testosterona. Es el escenario más frecuente al diagnóstico de enfermedad metastásica.",
  },
  {
    t: "Resistente a la castración",
    d: "El cáncer avanza aunque la testosterona esté baja. No significa que se acabaron las opciones: existen varias líneas de tratamiento.",
  },
];

const TRATAMIENTOS = [
  {
    t: "Hormonoterapia (bloqueo de testosterona)",
    d: "Es la base del tratamiento. Se aplica en inyecciones periódicas y frena el crecimiento del cáncer, que depende de la testosterona.",
  },
  {
    t: "Antiandrógenos de nueva generación",
    d: "Medicamentos en tabletas que, sumados a la hormonoterapia desde el inicio, han prolongado la vida en estudios internacionales.",
  },
  {
    t: "Quimioterapia",
    d: "En algunos pacientes se agrega desde el inicio o se usa más adelante. La indica y vigila oncología médica.",
  },
  {
    t: "Radioterapia",
    d: "Puede dirigirse a la próstata en casos seleccionados con poca extensión de la enfermedad, o a zonas de hueso para aliviar el dolor y prevenir fracturas.",
  },
  {
    t: "Terapias dirigidas y con PSMA",
    d: "Según el caso, medicamentos para tumores con alteraciones genéticas específicas o terapia con radiofármaco dirigido al PSMA en etapas resistentes.",
  },
  {
    t: "Cuidado de los huesos y calidad de vida",
    d: "Medicamentos que protegen el hueso, ejercicio, manejo del dolor y de los efectos de la hormonoterapia, en todo momento.",
  },
];

export default function CancerProstataAvanzadoContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico-claro mb-4">
            Urología oncológica · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Cáncer de próstata avanzado y metastásico
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            Un diagnóstico de cáncer avanzado es difícil de escuchar. Pero hoy existen más
            tratamientos que nunca, y muchos pacientes viven años con buena calidad de vida. Aquí
            te explicamos qué significa y cómo se trata.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 space-y-14">
        {/* QUÉ SIGNIFICA */}
        <section>
          <H2>¿Qué significa “avanzado”?</H2>
          <p className="text-slate-700 leading-relaxed mb-5">
            Se habla de cáncer de próstata avanzado cuando ya no está limitado a la glándula. No es
            una sola situación: el tratamiento cambia según la etapa.
          </p>
          <div className="space-y-4">
            {ETAPAS.map((e) => (
              <div key={e.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">{e.t}</h3>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">{e.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Los sitios más frecuentes de diseminación son los <strong>ganglios linfáticos</strong> y
            los <strong>huesos</strong>, sobre todo de la columna y la pelvis. Puede no dar síntomas o
            causar dolor óseo, cansancio, pérdida de peso o molestias al orinar.
          </p>
        </section>

        {/* ESTUDIOS */}
        <section>
          <H2>Cómo se define la extensión</H2>
          <p className="text-slate-700 leading-relaxed">
            Además del antígeno prostático (PSA) y la biopsia, se usan estudios de imagen como
            tomografía, gammagrama óseo y, en casos seleccionados,{" "}
            <Link href="/pet-psma-leon" className="text-acero font-medium hover:underline">
              PET-PSMA
            </Link>
            . Saber con precisión dónde está la enfermedad cambia el tratamiento.
          </p>
          <div className="mt-4 rounded-2xl border-l-4 border-acero bg-editorial p-5 flex gap-3">
            <Info className="text-acero shrink-0 mt-0.5" size={22} aria-hidden="true" />
            <p className="text-sm text-gris-profundo leading-relaxed">
              Nosotros no realizamos el PET-PSMA: lo solicitamos cuando está indicado,
              interpretamos los resultados y normamos el manejo.
            </p>
          </div>
        </section>

        {/* TRATAMIENTO */}
        <section>
          <H2>Cómo se trata hoy</H2>
          <p className="text-slate-700 leading-relaxed mb-5">
            El tratamiento del cáncer de próstata avanzado ha cambiado mucho en los últimos años.
            Lo habitual es <strong>combinar</strong> varias de estas opciones según la etapa, la
            extensión y tu estado de salud:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {TRATAMIENTOS.map((t) => (
              <div key={t.t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{t.t}</h3>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">{t.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Como urólogo oncólogo, el Dr. Quiroz dirige el diagnóstico, la hormonoterapia y el
            seguimiento, y coordina con <strong>oncología médica y radioterapia</strong> las
            decisiones que lo requieren. Un plan bien coordinado evita tratamientos tardíos o
            innecesarios.
          </p>
        </section>

        {/* GENÉTICA */}
        <section>
          <H2>¿Por qué se recomienda un estudio genético?</H2>
          <p className="text-slate-700 leading-relaxed">
            En el cáncer de próstata metastásico, las guías internacionales recomiendan estudiar
            ciertos genes, como <strong>BRCA1 y BRCA2</strong>. Una parte de los pacientes tiene
            alteraciones que permiten usar tratamientos dirigidos, y que también son importantes
            para sus familiares: hijos, hermanos e hijas.
          </p>
        </section>

        {/* SEGUNDA OPINIÓN */}
        <section className="rounded-2xl border-l-4 border-dorado bg-editorial p-6">
          <p className="text-dorado-oscuro font-sans font-bold text-sm uppercase tracking-wide">
            ¿Ya tienes un diagnóstico?
          </p>
          <h2 className="mt-2 text-2xl font-bold font-sans text-petroleo">
            Una segunda opinión puede cambiar el plan
          </h2>
          <p className="mt-2 font-serif text-gris-profundo leading-relaxed">
            En la enfermedad avanzada el orden de los tratamientos importa. Revisar tu caso con
            un urólogo oncólogo te ayuda a conocer todas las opciones disponibles.
          </p>
          <Link
            href="/segunda-opinion-oncologica"
            className="mt-4 inline-flex items-center gap-2 bg-acero text-editorial font-sans font-bold px-6 py-3 rounded-lg hover:bg-acero/90 transition-colors"
          >
            Solicitar segunda opinión →
          </Link>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿Qué es el cáncer de próstata avanzado?">
              Es el cáncer de próstata que ya no está limitado a la glándula: puede haber salido de la
              cápsula de la próstata (localmente avanzado) o haberse extendido a ganglios lejanos,
              huesos u otros órganos (metastásico). El tratamiento depende de la etapa.
            </FAQItem>
            <FAQItem q="¿El cáncer de próstata avanzado tiene tratamiento?">
              Sí. Hoy existen más opciones que nunca: hormonoterapia, antiandrógenos de nueva
              generación, quimioterapia, radioterapia y terapias dirigidas. Combinadas según cada
              caso, permiten controlar la enfermedad durante periodos prolongados en muchos
              pacientes, con buena calidad de vida.
            </FAQItem>
            <FAQItem q="¿Cuánto tiempo se vive con cáncer de próstata metastásico?">
              Depende de la extensión de la enfermedad, de cómo responde al tratamiento y del estado
              de salud de cada paciente. Los tratamientos combinados de los últimos años han
              prolongado de forma importante la vida en estudios internacionales, y muchos pacientes
              viven años. El urólogo oncólogo puede darte un pronóstico más preciso con tu caso
              completo.
            </FAQItem>
            <FAQItem q="¿Qué efectos secundarios tiene la hormonoterapia?">
              Los más comunes son bochornos, disminución del deseo sexual y de la erección,
              cansancio, aumento de peso, pérdida de masa muscular y de densidad de los huesos. Muchos
              se pueden prevenir o aliviar con ejercicio, alimentación, vigilancia de los huesos y
              tratamiento específico.
            </FAQItem>
            <FAQItem q="¿Qué significa cáncer de próstata resistente a la castración?">
              Que el cáncer sigue avanzando aunque la testosterona esté en niveles muy bajos por la
              hormonoterapia. No significa que se acabaron las opciones: existen varias líneas de
              tratamiento para esta etapa.
            </FAQItem>
            <FAQItem q="¿Se puede operar la próstata si el cáncer ya se extendió?">
              En la enfermedad metastásica, la cirugía de la próstata no es el tratamiento habitual y
              solo se considera en estudios o casos muy seleccionados. En cambio, cuando la
              enfermedad tiene poca extensión, la radioterapia dirigida a la próstata ha mostrado
              beneficio en pacientes seleccionados. Cada caso se valora de forma individual.
            </FAQItem>
            <FAQItem q="¿Por qué me recomiendan un estudio genético?">
              Porque una parte de los pacientes con cáncer de próstata metastásico tiene
              alteraciones en genes como BRCA1 o BRCA2. Identificarlas permite usar tratamientos
              dirigidos y orientar a los familiares, que podrían necesitar revisiones más tempranas.
            </FAQItem>
            <FAQItem q="¿Qué es la terapia con PSMA para el cáncer de próstata?">
              Es un tratamiento con un radiofármaco que se une al PSMA, una proteína de las células
              del cáncer de próstata, y les lleva radiación directamente. Se usa en pacientes
              seleccionados con enfermedad resistente a la castración. No está disponible en todos
              los centros y su indicación se valora en cada caso.
            </FAQItem>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">Agenda una valoración</h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            Revisamos tu diagnóstico, tus estudios y tus opciones con calma. Hospital Ángeles León
            y Hospital Christus Muguerza Altagracia.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, tengo un diagnóstico de cáncer de próstata avanzado y quisiera agendar una valoración."
            motivo="cancer-prostata-avanzado-cta-final"
            variant="green"
          >
            Agendar por WhatsApp
          </WAButtonConSelector>
          <p className="mt-4">
            <Link href="/agendar" className="text-editorial/80 underline hover:text-editorial text-sm">
              o agenda tu cita en línea →
            </Link>
          </p>
        </section>
      </article>
    </main>
  );
}
