"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
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

const modificables = [
  {
    title: "Puedes influir",
    color: "border-teal-200 bg-teal-50",
    items: [
      "Mantener un peso saludable",
      "Actividad física regular",
      "No fumar",
      "Alimentación con más verduras y frutas, menos carne roja y procesada",
    ],
  },
  {
    title: "No puedes cambiar",
    color: "border-slate-200 bg-slate-50",
    items: [
      "La edad (el riesgo sube después de los 50)",
      "Antecedentes familiares de cáncer de próstata",
      "Mutaciones genéticas (BRCA1/BRCA2)",
      "La ascendencia (mayor riesgo en afrodescendientes)",
    ],
  },
];

export default function PrevencionContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Salud de la próstata · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Prevención del cáncer de próstata: lo que de verdad funciona
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            No todo lo que se dice "previene" el cáncer de próstata tiene respaldo. Aquí te
            explicamos qué hábitos sí ayudan, qué es mito, y por qué la detección temprana
            es la herramienta más poderosa que tienes.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 space-y-14">
        {/* SE PUEDE PREVENIR */}
        <section>
          <H2>¿Se puede prevenir el cáncer de próstata?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Con honestidad: <strong>no existe una forma garantizada de prevenirlo</strong>,
              porque los factores de mayor peso —la edad y los antecedentes familiares— no
              se pueden cambiar.
            </p>
            <p>
              Pero eso no significa que no puedas hacer nada. Puedes{" "}
              <strong>reducir el riesgo</strong> con hábitos saludables y, sobre todo,{" "}
              <strong>detectarlo a tiempo</strong> con el PSA, cuando es más fácil de curar.
              De hecho, en etapa localizada la supervivencia a 5 años{" "}
              <strong>supera el 98%</strong>. La detección temprana no "previene", pero
              cambia por completo el pronóstico.
            </p>
          </div>
        </section>

        {/* DETECCIÓN TEMPRANA — la clave */}
        <section>
          <div className="rounded-2xl border-l-4 border-acero bg-editorial p-6 md:p-7 flex gap-4">
            <ShieldCheck className="text-acero shrink-0 mt-1" size={26} />
            <div>
              <h2 className="text-xl font-bold text-petroleo mb-2">
                La detección temprana es tu mejor herramienta
              </h2>
              <p className="text-gris-profundo leading-relaxed">
                La prueba del <strong>antígeno prostático específico (PSA)</strong> permite
                encontrar el cáncer cuando aún no da síntomas y es curable. Si solo vas a
                hacer una cosa por tu próstata, que sea revisarte a la edad adecuada.{" "}
                <Link href="/cancer-prostata" className="text-acero font-medium hover:underline">
                  Conoce más sobre el cáncer de próstata →
                </Link>{" "}
                <Link
                  href="/valores-antigeno-prostatico-edad"
                  className="text-acero font-medium hover:underline"
                >
                  Valores de antígeno prostático según la edad →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* FACTORES DE RIESGO */}
        <section>
          <H2>Factores de riesgo: lo que puedes y no puedes cambiar</H2>
          <div className="grid sm:grid-cols-2 gap-5">
            {modificables.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl border p-6 ${c.color}`}
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{c.title}</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HÁBITOS CON RESPALDO */}
        <section>
          <H2>Hábitos que sí tienen respaldo</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Ninguno es garantía, pero estos hábitos se asocian con menor riesgo (sobre todo
            de las formas agresivas) y, de paso, cuidan tu corazón y tu salud general:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {[
              "Mantener un peso saludable: la obesidad se asocia con cáncer de próstata más agresivo.",
              "Hacer actividad física de forma regular.",
              "No fumar.",
              "Comer más verduras y frutas, y menos carne roja y procesada y grasas saturadas.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* EVIDENCIA VS MITOS */}
        <section>
          <H2>Suplementos y "remedios": evidencia vs. mitos</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Aquí conviene ser claro, porque se vende mucho humo:
            </p>
            <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5">
              <ul className="space-y-2 text-sm text-amber-900">
                <li>
                  <strong>Vitamina E y selenio:</strong> un estudio grande (SELECT){" "}
                  <strong>no mostró</strong> que prevengan el cáncer de próstata; la vitamina
                  E incluso se asoció con un ligero <strong>aumento</strong> del riesgo.
                </li>
                <li>
                  <strong>Licopeno (tomate):</strong> evidencia débil e inconsistente.
                </li>
                <li>
                  <strong>Ajo y otros "remedios naturales":</strong> sin evidencia de que
                  prevengan o traten el cáncer de próstata.
                </li>
              </ul>
            </div>
            <p className="text-sm text-slate-600">
              Los suplementos "para la próstata" pueden dar una <strong>falsa sensación de
              protección</strong> y hacer que pospongas lo único que sí sirve: hábitos
              saludables y la detección temprana con PSA.
            </p>
          </div>
        </section>

        {/* CUÁNDO REVISARSE */}
        <section>
          <H2>¿Cuándo empezar a revisarte?</H2>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {[
              "Desde los 50 años en hombres de riesgo promedio.",
              "Desde los 40-45 años si hay antecedentes familiares de cáncer de próstata o mutaciones BRCA.",
              "Antes, y con seguimiento más cercano, si tu urólogo lo indica según tu caso.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed mt-4">
            ¿Quieres entender mejor cómo funciona tu próstata?{" "}
            <Link href="/que-es-la-prostata" className="text-acero font-medium hover:underline">
              Empieza por lo básico: ¿qué es la próstata? →
            </Link>
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿Se puede prevenir el cáncer de próstata?">
              No de forma garantizada —la edad y los antecedentes familiares no se pueden
              cambiar—, pero sí puedes <strong>reducir el riesgo</strong> con hábitos
              saludables y, sobre todo, <strong>detectarlo a tiempo</strong> con el PSA,
              cuando es más fácil de curar.
            </FAQItem>
            <FAQItem q="¿Qué alimentos ayudan a cuidar la próstata?">
              La evidencia es modesta: más verduras y frutas, menos carne roja y procesada y
              menos grasas saturadas. No hay un "alimento milagro"; lo que ayuda es el patrón
              general de alimentación junto con el peso adecuado y el ejercicio.
            </FAQItem>
            <FAQItem q="¿Los suplementos (vitamina E, selenio, licopeno) previenen el cáncer de próstata?">
              No. El estudio SELECT mostró que la vitamina E y el selenio no lo previenen, y
              la vitamina E se asoció con un ligero aumento del riesgo. El licopeno tiene
              evidencia débil. No se recomiendan suplementos para prevenir el cáncer de
              próstata.
            </FAQItem>
            <FAQItem q="¿A qué edad debo empezar a revisarme la próstata?">
              A los 50 años en riesgo promedio, y desde los 40-45 si hay antecedentes
              familiares o factores de riesgo. La revisión con PSA es sencilla e indolora.
            </FAQItem>
            <FAQItem q="¿El ejercicio reduce el riesgo de cáncer de próstata?">
              La actividad física regular y un peso saludable se asocian con menor riesgo de
              cáncer de próstata agresivo y con mejor salud general. No es garantía, pero es
              uno de los hábitos con mejor respaldo.
            </FAQItem>
            <FAQItem q="¿Puedo hacer algo si tengo antecedentes familiares?">
              Sí: adelantar la detección. Con antecedentes de primer grado o mutaciones BRCA,
              la revisión con PSA suele empezar antes (40-45 años) y con seguimiento más
              cercano. No cambias tu genética, pero sí encuentras el cáncer a tiempo.
            </FAQItem>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">
            Lo más importante: revisarte a tiempo
          </h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            Agenda tu valoración con el Dr. Quiroz y define, según tu edad y tus factores de
            riesgo, cuándo y cómo hacer tu detección.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, quiero información sobre la detección temprana del cáncer de próstata y agendar una valoración."
            motivo="prevencion-prostata-cta-final"
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
