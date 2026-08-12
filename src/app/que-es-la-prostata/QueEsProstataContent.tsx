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
    title: "Crecimiento (HPB)",
    subtitle: "Próstata agrandada",
    body: "El agrandamiento benigno más común con la edad. Estrecha la salida de la orina y causa síntomas urinarios. No es cáncer.",
    href: "/hiperplasia-prostatica-benigna",
    cta: "Ver próstata agrandada",
  },
  {
    title: "Prostatitis",
    subtitle: "Próstata inflamada",
    body: "Inflamación de la próstata, a veces por infección. Puede causar dolor pélvico, ardor al orinar y molestias al eyacular.",
    href: "/prostatitis",
    cta: "Ver prostatitis",
  },
  {
    title: "Cáncer de próstata",
    subtitle: "Tumor maligno",
    body: "El cáncer más frecuente en hombres mexicanos. En etapas tempranas no da síntomas; por eso importa la detección con PSA.",
    href: "/cancer-prostata",
    cta: "Ver cáncer de próstata",
  },
];

export default function QueEsProstataContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Guía para pacientes · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            ¿Qué es la próstata y para qué sirve?
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            Entender qué es la próstata y cómo funciona es el primer paso para cuidar tu
            salud urológica. Aquí lo explicamos de forma clara y sin tecnicismos — y te
            orientamos sobre cuándo conviene revisarte.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 space-y-14">
        {/* QUÉ ES */}
        <section>
          <H2>¿Qué es la próstata?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              La próstata es una <strong>glándula que solo tienen los hombres</strong>. Se
              ubica <strong>debajo de la vejiga</strong> y rodea la uretra, el conducto por
              el que sale la orina. En un adulto joven tiene el tamaño aproximado de una{" "}
              <strong>nuez</strong>.
            </p>
            <p>
              Su posición explica por qué los problemas de próstata suelen afectar la forma
              de orinar: al rodear la uretra, cualquier cambio en su tamaño o inflamación
              puede estrechar el paso de la orina.
            </p>
          </div>
        </section>

        {/* PARA QUÉ SIRVE */}
        <section>
          <H2>¿Para qué sirve la próstata?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>La próstata cumple varias funciones relacionadas con la reproducción:</p>
            <ul className="space-y-2">
              {[
                "Produce parte del líquido que forma el semen, que nutre y transporta a los espermatozoides.",
                "Participa en la eyaculación, impulsando ese líquido durante el orgasmo.",
                "Produce el PSA (antígeno prostático específico), una proteína que se mide en sangre para evaluar la salud de la próstata.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CÓMO CAMBIA CON LA EDAD */}
        <section>
          <H2>¿Cómo cambia la próstata con la edad?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Es normal que la próstata <strong>crezca lentamente con los años</strong>,
              por influencia hormonal. Ese crecimiento, cuando es benigno, se llama{" "}
              <strong>hiperplasia prostática benigna (HPB)</strong> y es muy frecuente a
              partir de los 45-50 años.
            </p>
            <p>
              Que la próstata crezca <strong>no significa que haya cáncer</strong>: son
              cosas distintas. Pero como los síntomas pueden parecerse, cualquier cambio en
              la forma de orinar merece una evaluación.
            </p>
          </div>
        </section>

        {/* PROBLEMAS FRECUENTES — interlinking core */}
        <section>
          <H2>Problemas más frecuentes de la próstata</H2>
          <p className="text-slate-700 leading-relaxed mb-6">
            La próstata puede presentar tres problemas principales. Son{" "}
            <strong>condiciones diferentes</strong>, con causas y tratamientos distintos:
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
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

        {/* SÍNTOMAS / DÓNDE DUELE */}
        <section>
          <H2>Síntomas que debes vigilar</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Muchos problemas de próstata <strong>no duelen</strong> y se manifiestan por la
            forma de orinar. Vale la pena una valoración si notas:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed mb-4">
            {[
              "Chorro urinario débil o entrecortado",
              "Necesidad frecuente de orinar, sobre todo de noche",
              "Dificultad para iniciar o sensación de vaciado incompleto",
              "Urgencia o pérdidas de orina",
              "Sangre en la orina o el semen",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed">
            <strong>¿Dónde duele?</strong> Cuando hay dolor, suele sentirse en la zona baja
            del abdomen, entre los testículos y el ano (el perineo), la espalda baja, o al
            orinar y eyacular. El dolor es más típico de la{" "}
            <Link href="/prostatitis" className="text-acero font-medium hover:underline">
              prostatitis
            </Link>{" "}
            que del crecimiento benigno o del cáncer en etapas tempranas.
          </p>
        </section>

        {/* EVIDENCIA VS MITOS */}
        <section>
          <H2>¿Qué es bueno para la próstata? Evidencia y mitos</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              En internet abundan remedios y suplementos "para la próstata". Conviene ser
              honesto: <strong>no existe evidencia científica sólida</strong> de que el
              ajo, ni la mayoría de esos suplementos, traten o prevengan las enfermedades
              prostáticas. Algunos, como el saw palmetto, se han estudiado en ensayos
              grandes y <strong>no superaron al placebo</strong>.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-sans font-semibold text-petroleo mb-3">
                Lo que sí tiene respaldo:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Detección temprana con PSA a la edad recomendada.",
                  "Hábitos saludables: actividad física, peso adecuado y no fumar.",
                  "Atender a tiempo los síntomas urinarios en lugar de automedicarse.",
                  "Cuando hace falta tratamiento, usar medicamentos o procedimientos con evidencia, indicados por un urólogo.",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-slate-500">
              Ningún suplemento sustituye el diagnóstico médico. Si tienes síntomas, lo más
              útil no es un remedio, sino saber qué está pasando.
            </p>
          </div>
        </section>

        {/* CUÁNDO REVISARSE */}
        <section>
          <H2>¿Cuándo revisarte la próstata?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              La revisión de la próstata es <strong>sencilla e indolora</strong> y permite
              detectar problemas en etapas tempranas, cuando son más fáciles de tratar. Se
              recomienda:
            </p>
            <ul className="space-y-2">
              {[
                "Desde los 50 años en hombres de riesgo promedio.",
                "Desde los 40-45 años si hay antecedentes familiares de cáncer de próstata.",
                "En cualquier momento si aparecen síntomas urinarios o dolor pélvico.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿Dónde está la próstata y qué tamaño tiene?">
              Está debajo de la vejiga y rodea la uretra (el conducto por el que sale la
              orina). En un adulto joven tiene el tamaño aproximado de una nuez y tiende a
              crecer con la edad.
            </FAQItem>
            <FAQItem q="¿Para qué sirve la próstata?">
              Produce parte del líquido que forma el semen, participa en la eyaculación y
              genera el PSA, una proteína que se mide en sangre para evaluar la salud
              prostática.
            </FAQItem>
            <FAQItem q="¿Dónde duele cuando hay un problema de próstata?">
              Muchos problemas no duelen y se notan al orinar. Cuando hay dolor, suele
              sentirse en la parte baja del abdomen, el perineo (entre testículos y ano),
              la espalda baja o al orinar y eyacular. El dolor es más típico de la
              prostatitis.
            </FAQItem>
            <FAQItem q="¿El ajo o los suplementos sirven para la próstata?">
              No hay evidencia científica sólida de que el ajo ni la mayoría de los
              suplementos "para la próstata" traten o prevengan las enfermedades
              prostáticas. Lo que sí ayuda es la detección temprana con PSA, los hábitos
              saludables y la evaluación urológica oportuna.
            </FAQItem>
            <FAQItem q="¿A qué edad debo revisarme la próstata?">
              En hombres de riesgo promedio, la revisión con PSA suele iniciar a los 50
              años; desde los 40-45 si hay antecedentes familiares. La revisión es sencilla
              e indolora.
            </FAQItem>
            <FAQItem q="¿Qué problemas puede tener la próstata?">
              Los tres más frecuentes son el crecimiento benigno (HPB), la inflamación
              (prostatitis) y el cáncer de próstata. Son condiciones distintas, con causas
              y tratamientos diferentes.
            </FAQItem>
          </div>
        </section>

        {/* CTA DISCRETO — único, al final */}
        <section className="rounded-2xl bg-editorial border border-gris-premium/15 p-8 text-center">
          <p className="font-serif text-gris-profundo mb-5">
            ¿Tienes dudas o síntomas relacionados con la próstata? Una valoración con el Dr.
            Quiroz te da respuestas claras y un plan a tu medida.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, tengo dudas sobre mi próstata y quisiera una valoración."
            motivo="que-es-prostata-cta-final"
            variant="primary"
          >
            Agendar una valoración
          </WAButtonConSelector>
          <p className="mt-4">
            <Link href="/agendar" className="text-acero underline hover:text-petroleo text-sm font-medium">
              o agenda tu cita en línea →
            </Link>
          </p>
        </section>
      </article>
    </main>
  );
}
