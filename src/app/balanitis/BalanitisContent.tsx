"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
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

const causas = [
  {
    title: "Hongos (Candida)",
    body: "La causa infecciosa más frecuente. Da enrojecimiento, comezón y a veces un aspecto blanquecino. Más común en personas con diabetes.",
  },
  {
    title: "Bacterias",
    body: "Pueden causar enrojecimiento, secreción y mal olor, sobre todo si hay higiene inadecuada o lesiones en la piel.",
  },
  {
    title: "Irritación o higiene",
    body: "Jabones fuertes, exceso de lavado, humedad o restos bajo el prepucio irritan la piel. A veces el problema es lavar de más, no de menos.",
  },
  {
    title: "Enfermedades de la piel",
    body: "Dermatitis, psoriasis o el liquen escleroso pueden manifestarse en el glande. No son infecciones y requieren otro tratamiento.",
  },
  {
    title: "Infecciones de transmisión sexual",
    body: "Algunas ITS pueden causar balanitis. Por eso, ante ciertos casos, se valora este origen.",
  },
  {
    title: "Diabetes (factor de riesgo)",
    body: "El azúcar mal controlado favorece la balanitis por hongos y las recaídas. A veces es la primera señal de una diabetes no diagnosticada.",
  },
];

export default function BalanitisContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Salud del pene · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Balanitis: causas, síntomas y tratamiento
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            La balanitis —inflamación de la punta del pene— es una consulta urológica muy
            común y, en la mayoría de los casos, fácil de tratar. La clave está en
            identificar bien la causa antes de automedicarse.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 space-y-14">
        {/* QUÉ ES */}
        <section>
          <H2>¿Qué es la balanitis?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              La balanitis es la <strong>inflamación del glande</strong> (la punta del
              pene). Cuando también se inflama el prepucio, se llama{" "}
              <strong>balanopostitis</strong>. Es una condición frecuente y no significa,
              por sí sola, que se trate de algo grave.
            </p>
            <p>
              Es más común en hombres <strong>no circuncidados</strong> y en personas con{" "}
              <strong>diabetes</strong>, porque la humedad, los restos bajo el prepucio y el
              azúcar elevado favorecen la irritación y las infecciones.
            </p>
          </div>
        </section>

        {/* SÍNTOMAS */}
        <section>
          <H2>Síntomas</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Los más frecuentes son:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {[
              "Enrojecimiento del glande",
              "Comezón, ardor o irritación",
              "Hinchazón o sensibilidad",
              "Secreción o mal olor",
              "Aspecto blanquecino o placas (frecuente en la balanitis por hongos)",
              "Dificultad o molestia para retraer el prepucio",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* CAUSAS */}
        <section>
          <H2>Causas</H2>
          <p className="text-slate-700 leading-relaxed mb-6">
            No toda balanitis es igual: puede ser infecciosa o no infecciosa, y el
            tratamiento depende de cuál sea. Las causas más frecuentes:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {causas.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{c.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TRATAMIENTO */}
        <section>
          <H2>Tratamiento</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              El tratamiento <strong>depende de la causa</strong>, por eso lo primero es
              identificarla. De forma general puede incluir:
            </p>
            <ul className="space-y-2">
              {[
                "Higiene suave del área (con agua, evitando jabones irritantes) y secado adecuado.",
                "Cremas antimicóticas cuando la causa es por hongos (por ejemplo, del grupo de los antifúngicos tópicos).",
                "Cremas antiinflamatorias suaves cuando hay dermatitis o irritación.",
                "Antibióticos si se confirma una causa bacteriana.",
                "Controlar la diabetes cuando existe, para evitar recaídas.",
                "En casos muy recurrentes o con fimosis, valorar la circuncisión.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Ojo con automedicarte:</strong> las cremas antihongos ayudan cuando
                la balanitis es por hongos —una causa frecuente—, pero{" "}
                <strong>no toda balanitis lo es</strong>. Si usas una crema a ciegas y la
                causa es otra (dermatitis, psoriasis, liquen escleroso, una ITS), el
                problema no mejora y puede retrasarse un diagnóstico importante. Si no cede
                en pocos días o reaparece, conviene una valoración.
              </p>
            </div>
          </div>
        </section>

        {/* CUÁNDO PREOCUPARSE */}
        <section>
          <div className="rounded-2xl border-l-4 border-rose-500 bg-rose-50 p-6 md:p-7 flex gap-4">
            <AlertTriangle className="text-rose-600 shrink-0 mt-1" size={26} />
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                ¿Cuándo preocuparse?
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Acude con el urólogo si la balanitis <strong>no mejora</strong> con el
                tratamiento, si <strong>reaparece con frecuencia</strong>, o si aparecen{" "}
                <strong>placas blancas, endurecimiento, una lesión que no cura, sangrado o
                cambios en la piel</strong> del glande. Estos signos ayudan a descartar
                causas como el liquen escleroso u otras condiciones que necesitan un manejo
                específico.
              </p>
            </div>
          </div>
        </section>

        {/* GRANITOS — cross-link */}
        <section>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              ¿Lo tuyo son más bien granitos o bolitas?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Si no es enrojecimiento sino pequeños granitos, puntos o bolitas en el pene,
              muchas veces son benignos —pero conviene distinguirlos de las verrugas u otras
              causas.{" "}
              <Link
                href="/granitos-en-el-pene"
                className="text-acero font-medium hover:underline"
              >
                Ver: granitos, bolitas o manchas en el pene →
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿La balanitis es una infección de transmisión sexual?">
              No necesariamente. Puede deberse a hongos, bacterias, irritación, higiene,
              dermatitis o enfermedades de la piel. Algunas ITS pueden causarla, pero la
              mayoría de los casos no son por una ITS. La evaluación define la causa real.
            </FAQItem>
            <FAQItem q="¿Sirve una crema antimicótica (antihongos) para la balanitis?">
              Los antimicóticos tópicos (por ejemplo, clotrimazol) ayudan cuando es por
              hongos —causa frecuente, sobre todo en diabéticos—. Pero{" "}
              <strong>no toda balanitis es por hongos</strong>: automedicarte a ciegas puede
              no mejorar el problema y retrasar el diagnóstico si la causa es otra. Si no
              cede en pocos días o reaparece, valórate.
            </FAQItem>
            <FAQItem q="¿La balanitis se quita sola?">
              Algunos casos leves por irritación mejoran con higiene suave. Pero cuando hay
              infección o una causa de piel de fondo, suele necesitar tratamiento dirigido.
              La que no mejora, reaparece o deja lesiones que no curan debe evaluarse.
            </FAQItem>
            <FAQItem q="¿La diabetes causa balanitis?">
              La diabetes, sobre todo mal controlada, favorece la balanitis por hongos y las
              recaídas. Una balanitis candidiásica de repetición puede ser la primera señal
              de una diabetes no diagnosticada, por lo que a veces se revisa la glucosa.
            </FAQItem>
            <FAQItem q="¿La circuncisión previene la balanitis?">
              Es más frecuente en hombres no circuncidados. En casos muy recurrentes o con
              fimosis, la circuncisión puede ser una opción de tratamiento, que se valora de
              forma individual.
            </FAQItem>
            <FAQItem q="¿Cuándo debo preocuparme por una balanitis?">
              Si no mejora con tratamiento, si reaparece, o si hay placas blancas,
              endurecimiento, una lesión que no cura, sangrado o cambios en la piel del
              glande. Esos signos ayudan a descartar liquen escleroso u otras causas.
            </FAQItem>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">
            Identifica la causa y trátala bien
          </h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            Una valoración con el Dr. Quiroz define por qué apareció tu balanitis y cuál es
            el tratamiento correcto para tu caso — sin adivinar.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, tengo molestias en el glande (posible balanitis) y quisiera una valoración."
            motivo="balanitis-cta-final"
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
