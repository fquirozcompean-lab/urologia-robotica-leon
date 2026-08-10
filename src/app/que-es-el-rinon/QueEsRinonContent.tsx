"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import WAButtonConSelector from "@/components/WAButtonConSelector";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function FAQItem({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800">{q}</span>
        <span className="text-teal-600 text-xl shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-700 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </motion.div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-3xl font-bold text-slate-900 mb-4"
    >
      {children}
    </motion.h2>
  );
}

const problemas = [
  {
    title: "Cálculos renales",
    subtitle: "Piedras en el riñón",
    body: "Cristales que se forman en el riñón y pueden causar un cólico intenso al desplazarse por la vía urinaria.",
    href: "/calculos-renales",
    cta: "Ver cálculos renales",
  },
  {
    title: "Dolor de riñón",
    subtitle: "Dónde y por qué duele",
    body: "No todo dolor de espalda es de riñón. Aquí explicamos dónde duele realmente y cuándo preocuparse.",
    href: "/dolor-de-rinon",
    cta: "Ver dolor de riñón",
  },
  {
    title: "Cáncer renal",
    subtitle: "Tumor del riñón",
    body: "Muchos tumores renales no dan síntomas y se detectan por imagen. La cirugía busca preservar el riñón cuando es posible.",
    href: "/cancer-renal",
    cta: "Ver cáncer renal",
  },
  {
    title: "Sangre en la orina",
    subtitle: "Hematuria",
    body: "Puede venir del riñón o de la vía urinaria. Nunca debe ignorarse, aunque aparezca una sola vez.",
    href: "/hematuria",
    cta: "Ver hematuria",
  },
];

export default function QueEsRinonContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Guía para pacientes · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            ¿Qué es el riñón y cómo funciona?
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            Los riñones hacen mucho más que producir orina: filtran la sangre, equilibran
            el cuerpo y ayudan a regular la presión. Entender cómo funcionan te ayuda a
            reconocer cuándo algo no anda bien.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 space-y-14">
        {/* QUÉ ES */}
        <section>
          <H2>¿Qué es el riñón?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Tienes <strong>dos riñones</strong>, con forma de frijol y del tamaño
              aproximado de un <strong>puño</strong>. Están en la parte alta de la espalda,
              uno a cada lado de la columna y <strong>por debajo de las últimas
              costillas</strong> — no en la zona lumbar baja, como mucha gente cree.
            </p>
            <p>
              Cada riñón contiene alrededor de un millón de filtros diminutos (nefronas)
              que depuran la sangre. Lo que sobra —desechos y exceso de líquido— se
              convierte en orina, que baja por los uréteres hasta la vejiga.
            </p>
          </div>
        </section>

        {/* PARA QUÉ SIRVE */}
        <section>
          <H2>¿Para qué sirven los riñones?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Sus funciones van mucho más allá de "hacer pipí":</p>
            <ul className="space-y-2">
              {[
                "Filtran la sangre y eliminan los desechos (como la urea y la creatinina) a través de la orina.",
                "Equilibran el agua y las sales del cuerpo (sodio, potasio, calcio).",
                "Ayudan a regular la presión arterial.",
                "Estimulan la producción de glóbulos rojos.",
                "Activan la vitamina D, importante para los huesos.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* UN SOLO RIÑÓN */}
        <section>
          <H2>¿Se puede vivir con un solo riñón?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Sí. La mayoría de las personas con un solo riñón lleva una vida{" "}
              <strong>completamente normal</strong>, porque el riñón restante compensa la
              función. Por eso, cuando hay que operar un riñón —por ejemplo, por un{" "}
              <Link href="/cancer-renal" className="text-acero font-medium hover:underline">
                tumor renal
              </Link>
              — se busca, siempre que es posible, <strong>preservar la mayor cantidad de
              tejido sano</strong>.
            </p>
          </div>
        </section>

        {/* PROBLEMAS FRECUENTES — interlinking core */}
        <section>
          <H2>Problemas más frecuentes del riñón</H2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Estos son los que más se ven en la consulta urológica. Cada uno tiene causas y
            tratamientos distintos:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {problemas.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-slate-800">{p.title}</h3>
                <p className="text-xs text-slate-500 font-medium mb-2">{p.subtitle}</p>
                <p className="text-slate-700 text-sm leading-relaxed flex-grow">{p.body}</p>
                <Link
                  href={p.href}
                  className="mt-4 text-acero font-sans font-medium text-sm hover:underline"
                >
                  {p.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SEÑALES DE ALARMA */}
        <section>
          <H2>Señales de que algo anda mal</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Vale la pena una valoración urológica si notas:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {[
              "Dolor en el costado o flanco, por debajo de las costillas",
              "Sangre en la orina (aunque sea una sola vez)",
              "Ardor, urgencia o cambios en la forma de orinar",
              "Fiebre con dolor de espalda alta (posible infección renal)",
              "Hinchazón de piernas o cara, o presión arterial difícil de controlar",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* EVIDENCIA / HÁBITOS */}
        <section>
          <H2>¿Qué es bueno para los riñones? Evidencia y mitos</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Circulan muchas "limpiezas", tés y suplementos para "desintoxicar" el riñón.
              Conviene ser claro: <strong>no hay evidencia científica sólida</strong> de que
              esos productos depuren o curen los riñones. Un riñón sano{" "}
              <strong>ya se depura solo</strong> — esa es justamente su función.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-sans font-semibold text-petroleo mb-3">
                Lo que sí cuida tus riñones:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Mantenerte bien hidratado (el agua ayuda a prevenir cálculos).",
                  "Controlar la presión arterial y la diabetes, las dos causas principales de daño renal.",
                  "No abusar de la sal ni de los antiinflamatorios sin indicación médica.",
                  "No fumar y mantener un peso saludable.",
                  "Atender a tiempo las infecciones urinarias y los síntomas de alarma.",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿Dónde están los riñones y qué tamaño tienen?">
              Son dos órganos con forma de frijol, del tamaño de un puño, en la parte alta
              de la espalda, uno a cada lado de la columna y <strong>por debajo de las
              últimas costillas</strong>. No están en la zona lumbar baja, sino más arriba y
              hacia los costados.
            </FAQItem>
            <FAQItem q="¿Para qué sirven los riñones?">
              Filtran la sangre y eliminan desechos y líquido en forma de orina. Además
              equilibran las sales y el agua, ayudan a regular la presión arterial,
              estimulan la producción de glóbulos rojos y activan la vitamina D.
            </FAQItem>
            <FAQItem q="¿Se puede vivir con un solo riñón?">
              Sí. La mayoría de las personas con un solo riñón lleva una vida normal, porque
              el riñón restante compensa la función. Por eso la cirugía renal busca
              preservar tejido sano siempre que es posible.
            </FAQItem>
            <FAQItem q="¿Dónde duele el riñón?">
              En el costado o flanco, por debajo de las costillas y hacia la espalda,
              generalmente de un lado. Ojo: buena parte del "dolor de riñón" que la gente
              siente es en realidad{" "}
              <Link href="/dolor-de-rinon" className="text-acero font-medium hover:underline">
                dolor muscular de espalda
              </Link>
              .
            </FAQItem>
            <FAQItem q="¿Qué es bueno para los riñones?">
              Hidratarte bien, controlar la presión y la diabetes, no abusar de la sal ni de
              los antiinflamatorios y no fumar. No hay evidencia de que "limpiezas" o
              suplementos desintoxiquen los riñones.
            </FAQItem>
            <FAQItem q="¿Qué enfermedades afectan al riñón?">
              Las más frecuentes son los cálculos (piedras), las infecciones que ascienden
              al riñón (pielonefritis) y los tumores renales, además de la enfermedad renal
              crónica ligada a la diabetes y la hipertensión.
            </FAQItem>
          </div>
        </section>

        {/* CTA DISCRETO */}
        <section className="rounded-2xl bg-editorial border border-gris-premium/15 p-8 text-center">
          <p className="font-serif text-gris-profundo mb-5">
            ¿Tienes dolor en el costado, sangre en la orina u otra molestia relacionada con
            el riñón? Una valoración con el Dr. Quiroz te da respuestas claras.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, tengo dudas o molestias relacionadas con el riñón y quisiera una valoración."
            motivo="que-es-rinon-cta-final"
            variant="primary"
          >
            Agendar una valoración
          </WAButtonConSelector>
        </section>
      </article>
    </main>
  );
}
