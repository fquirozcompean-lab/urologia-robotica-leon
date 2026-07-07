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

function FAQItem({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
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

const causas = [
  {
    title: "Infección urinaria",
    body: "Una de las causas más frecuentes. Suele acompañarse de ardor al orinar, urgencia y orinar frecuentemente.",
    href: "/infeccion-urinaria",
    cta: "Ver infección urinaria",
  },
  {
    title: "Cálculos renales o ureterales",
    body: "Las 'piedras' pueden lesionar la vía urinaria a su paso y provocar sangre, a menudo con cólico renal intenso.",
    href: "/calculos-renales",
    cta: "Ver cálculos renales",
  },
  {
    title: "Crecimiento de próstata (HPB)",
    body: "El agrandamiento benigno de la próstata puede sangrar, sobre todo cuando hay síntomas urinarios en hombres mayores.",
    href: "/hiperplasia-prostatica-benigna",
    cta: "Ver crecimiento de próstata",
  },
  {
    title: "Cáncer de vejiga",
    body: "La sangre en la orina sin dolor es el signo más característico. Es la causa que más importa descartar a tiempo.",
    href: "/cancer-vejiga",
    cta: "Ver cáncer de vejiga",
  },
  {
    title: "Cáncer renal",
    body: "Un tumor en el riñón puede manifestarse con sangre en la orina, muchas veces sin ningún otro síntoma.",
    href: "/cancer-renal",
    cta: "Ver cáncer renal",
  },
  {
    title: "Cáncer de próstata",
    body: "Con menos frecuencia, la sangre en la orina o el semen puede asociarse a enfermedad prostática que amerita evaluación.",
    href: "/cancer-prostata",
    cta: "Ver cáncer de próstata",
  },
];

export default function HematuriaContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Urología · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
            Sangre en la orina (hematuria): cuándo preocuparse
          </h1>
          <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-10">
            Ver sangre en la orina asusta — y con razón amerita atención. La mayoría de las
            causas son tratables, pero también puede ser la primera señal de un problema
            serio. Nunca conviene ignorarla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WAButtonConSelector
              mensaje="Hola Dr. Quiroz, he notado sangre en la orina y quisiera una valoración."
              motivo="hematuria-hero"
              variant="green"
            >
              Agendar una valoración
            </WAButtonConSelector>
          </div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-3"
          >
            ¿Qué es la hematuria?
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="mt-4 text-slate-700 leading-relaxed">
              <strong>Hematuria</strong> es el término médico para la presencia de sangre
              en la orina. Puede ser de dos tipos:
            </p>
            <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
              <li>
                <strong>Macroscópica (visible):</strong> la orina se ve rosada, rojiza o
                color café, y a veces con coágulos. Se nota a simple vista.
              </li>
              <li>
                <strong>Microscópica:</strong> la orina se ve normal y la sangre solo se
                detecta en un análisis de laboratorio, generalmente como un hallazgo en un
                chequeo.
              </li>
            </ul>
            <p className="mt-4 text-slate-700 leading-relaxed">
              En ambos casos el objetivo es el mismo: encontrar de dónde proviene el
              sangrado. La cantidad de sangre <strong>no</strong> indica la gravedad —
              incluso una pequeña cantidad, o un episodio único, merece evaluación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RED FLAG */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border-l-4 border-rose-500 bg-rose-50 p-6 md:p-8 flex gap-4"
          >
            <AlertTriangle className="text-rose-600 shrink-0 mt-1" size={28} />
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Sangre sin dolor: la señal que no debe ignorarse
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Mucha gente se tranquiliza porque <em>“no le duele”</em>. Sin embargo, la
                sangre en la orina <strong>sin dolor</strong> es justamente la forma en que
                suelen manifestarse los tumores de <strong>vejiga</strong> y{" "}
                <strong>riñón</strong>. La ausencia de dolor no es señal de que sea
                inofensiva — es un motivo para acudir pronto, no para esperar.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Tampoco esperes a que “vuelva a pasar”: estos tumores pueden sangrar de
                forma intermitente, y un solo episodio ya justifica revisarse.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAUSAS — crosslinks */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-3"
          >
            ¿Qué puede causar sangre en la orina?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-slate-600 mb-8 max-w-3xl"
          >
            Las causas van de lo muy tratable a lo que requiere atención inmediata. Estas
            son las más frecuentes en la consulta urológica:
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {causas.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{c.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed flex-grow">{c.body}</p>
                <Link
                  href={c.href}
                  className="mt-4 text-acero font-sans font-medium text-sm hover:underline"
                >
                  {c.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO SE EVALÚA */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900">
                Cómo se busca la causa
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                La evaluación es ordenada y se ajusta a tu edad, tus factores de riesgo y
                el tipo de sangrado. El objetivo es <strong>descartar lo grave</strong> y
                tratar la causa concreta.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <WAButtonConSelector
                  mensaje="Hola Dr. Quiroz, he notado sangre en la orina y quiero agendar una evaluación."
                  motivo="hematuria-valoracion"
                  variant="primary"
                >
                  Agendar evaluación
                </WAButtonConSelector>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
            >
              <ul className="space-y-4 text-slate-700 text-sm leading-relaxed">
                <li>
                  <strong>Análisis de orina y urocultivo:</strong> confirma el sangrado y
                  descarta infección.
                </li>
                <li>
                  <strong>Estudios de imagen:</strong> ultrasonido o tomografía del aparato
                  urinario (uro-TC) para revisar riñones y vías urinarias.
                </li>
                <li>
                  <strong>Cistoscopia:</strong> revisión del interior de la vejiga con una
                  cámara delgada; es clave para descartar tumores vesicales.
                </li>
                <li>
                  <strong>Citología urinaria:</strong> en casos seleccionados, busca
                  células anormales en la orina.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Preguntas frecuentes sobre la sangre en la orina
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            <FAQItem q="¿Es grave ver sangre en la orina?">
              Cualquier episodio de sangre visible debe evaluarse, incluso si ocurre{" "}
              <strong>una sola vez</strong> y desaparece. Muchas causas son benignas —una
              infección o un cálculo— pero la sangre también puede ser el primer y único
              signo de un tumor de vejiga o riñón. La única forma de saberlo es con una
              evaluación urológica.
            </FAQItem>
            <FAQItem q="Orino con sangre pero no me duele, ¿debo preocuparme?">
              Sí. La hematuria <strong>sin dolor</strong> es precisamente la forma en que
              suelen manifestarse los tumores de vejiga y riñón, por lo que no debe
              ignorarse. La ausencia de dolor no significa que sea inofensiva.
            </FAQItem>
            <FAQItem q="¿Qué enfermedades causan sangre en la orina?">
              Las más frecuentes son las <strong>infecciones urinarias</strong>, los{" "}
              <strong>cálculos</strong> y el <strong>crecimiento benigno de la
              próstata</strong>. Otras incluyen el cáncer de vejiga, de riñón y de
              próstata, enfermedades del riñón, el ejercicio intenso y algunos
              anticoagulantes.
            </FAQItem>
            <FAQItem q="¿Qué estudios se hacen para encontrar la causa?">
              Habitualmente un <strong>análisis de orina y urocultivo</strong>, estudios
              de <strong>imagen</strong> (ultrasonido o tomografía uro-TC) y, en muchos
              casos, una <strong>cistoscopia</strong> para revisar el interior de la
              vejiga. A veces se añade citología urinaria. El plan se ajusta a cada
              paciente.
            </FAQItem>
            <FAQItem q="Vi sangre una sola vez y ya no volvió, ¿debo revisarme?">
              Sí. Un solo episodio de sangre visible es suficiente para justificar una
              evaluación, aunque la orina vuelva a verse normal. Los tumores pueden sangrar
              de forma intermitente, y esperar puede retrasar un diagnóstico importante.
            </FAQItem>
            <FAQItem q="¿La sangre en la orina siempre es cáncer?">
              No. La mayoría de los casos se deben a causas <strong>benignas</strong>. Pero
              como la hematuria puede ser el único signo temprano de un tumor, el objetivo
              de la evaluación es descartar lo grave y tratar lo que corresponda. Detectar
              un problema a tiempo mejora mucho el pronóstico.
            </FAQItem>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="bg-gradient-to-br from-teal-700 to-indigo-800 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            No esperes a que “vuelva a pasar”
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/85 text-lg leading-relaxed"
          >
            Si notaste sangre en la orina, una evaluación oportuna con el Dr. Quiroz define
            la causa y el tratamiento — y, cuando hace falta, permite actuar a tiempo.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <WAButtonConSelector
              mensaje="Hola Dr. Quiroz, he notado sangre en la orina y quisiera agendar una consulta."
              motivo="hematuria-cta-final"
              variant="green"
            >
              Agendar por WhatsApp
            </WAButtonConSelector>
            <Link
              href="/cancer-vejiga"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-sans font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Conocer sobre cáncer de vejiga
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
