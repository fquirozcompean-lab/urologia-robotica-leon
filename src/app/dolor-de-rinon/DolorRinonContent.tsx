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
    title: "Cálculos renales (piedras)",
    body: "La causa más típica de cólico renal: dolor intenso en oleadas que puede irradiarse del flanco a la ingle, a veces con sangre en la orina y náuseas.",
    href: "/calculos-renales",
    cta: "Ver cálculos renales",
  },
  {
    title: "Infección del riñón (pielonefritis)",
    body: "Una infección urinaria que asciende al riñón. Da dolor de flanco con fiebre, escalofríos y ardor al orinar. Requiere atención pronta.",
    href: "/infeccion-urinaria",
    cta: "Ver infección urinaria",
  },
  {
    title: "Sangre en la orina",
    body: "El dolor puede acompañarse de hematuria. La sangre en la orina nunca debe ignorarse, incluso sin dolor.",
    href: "/hematuria",
    cta: "Ver hematuria",
  },
  {
    title: "Tumores renales",
    body: "Suelen ser indoloros y detectarse por imagen. Un dolor no confirma ni descarta un tumor; orienta el conjunto de síntomas.",
    href: "/cancer-renal",
    cta: "Ver cáncer renal",
  },
];

export default function DolorRinonContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Urología · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Dolor de riñón: dónde se ubica y cómo identificarlo
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            "Me duele el riñón" es una de las molestias que más se confunden. La mayoría de
            las veces no es el riñón, sino la espalda — pero cuando sí lo es, conviene saber
            reconocerlo y actuar a tiempo.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 space-y-14">
        {/* DÓNDE DUELE */}
        <section>
          <H2>¿Dónde duele realmente el riñón?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              El dolor de riñón se siente en el <strong>costado o flanco</strong>, por
              debajo de las últimas costillas y hacia la espalda, casi siempre de{" "}
              <strong>un solo lado</strong>. Cuando lo causa un cálculo, puede irradiarse
              hacia el abdomen, la ingle o los genitales.
            </p>
            <p>
              Es más arriba y más hacia el costado de lo que la gente cree. El dolor en el{" "}
              <strong>centro de la espalda baja</strong> (la zona lumbar) casi siempre es{" "}
              <strong>muscular</strong>, no renal.
            </p>
          </div>
        </section>

        {/* RIÑÓN O ESPALDA — myth correction */}
        <section>
          <H2>¿Es dolor de riñón o de espalda?</H2>
          <p className="text-slate-700 leading-relaxed mb-5">
            Es la duda más común — y la más importante de aclarar. Esta comparación ayuda a
            orientarte (no sustituye una valoración):
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-800 mb-3">Más bien muscular / espalda</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "Cambia con los movimientos y la postura",
                  "Mejora al reposar, con calor o al estirarte",
                  "Se localiza en la zona lumbar baja o central",
                  "Sin fiebre ni síntomas al orinar",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold mt-0.5 flex-shrink-0">–</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
              <h3 className="font-semibold text-slate-800 mb-3">Más bien renal</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "No suele cambiar al moverte o cambiar de postura",
                  "En el costado, bajo las costillas, de un lado",
                  "Se acompaña de fiebre, escalofríos o náuseas",
                  "Ardor al orinar o sangre en la orina",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold mt-0.5 flex-shrink-0">+</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CAUSAS — interlinking */}
        <section>
          <H2>Causas del dolor de riñón</H2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Cuando el dolor sí es renal, estas son las causas más frecuentes:
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
        </section>

        {/* EN MUJERES — +900% */}
        <section>
          <H2>Dolor de riñón en mujeres</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              La ubicación del dolor es la misma en hombres y mujeres, pero en las mujeres
              hay una causa especialmente frecuente: la{" "}
              <Link href="/infeccion-urinaria" className="text-acero font-medium hover:underline">
                infección urinaria
              </Link>{" "}
              que <strong>asciende al riñón</strong> (pielonefritis). Como las infecciones
              urinarias son más comunes en la mujer, también lo es este tipo de dolor de
              flanco.
            </p>
            <p>
              El <strong>embarazo</strong> aumenta el riesgo, tanto de infecciones como de
              dilatación de la vía urinaria. Por eso, ante un dolor de costado con{" "}
              <strong>fiebre o ardor al orinar</strong>, la valoración es especialmente
              importante en mujeres — no conviene esperar.
            </p>
          </div>
        </section>

        {/* RED FLAG */}
        <section>
          <div className="rounded-2xl border-l-4 border-rose-500 bg-rose-50 p-6 md:p-7 flex gap-4">
            <AlertTriangle className="text-rose-600 shrink-0 mt-1" size={26} />
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                ¿Qué tomar y cuándo es urgente?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                <strong>No te automediques</strong>, sobre todo con antibióticos: usarlos
                mal puede enmascarar una infección y complicarla. Mientras acudes a
                valoración, mantente hidratado y evita esfuerzos.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Acude a <strong>urgencias sin esperar</strong> si tienes fiebre con
                escalofríos, sangre en la orina, dolor intenso que no cede, vómito que
                impide tomar líquidos, o imposibilidad para orinar. Pueden indicar una
                infección renal o una obstrucción que requieren atención inmediata.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿Dónde duele el riñón exactamente?">
              En el costado o flanco, por debajo de las últimas costillas y hacia la
              espalda, casi siempre de un lado. Puede irradiarse al abdomen o la ingle,
              sobre todo con un cálculo. El centro de la espalda baja corresponde más a
              dolor muscular.
            </FAQItem>
            <FAQItem q="¿Cómo sé si es dolor de riñón o de espalda?">
              El dolor muscular cambia con los movimientos y mejora al reposar. El renal no
              suele modificarse al moverte y con frecuencia se acompaña de fiebre, ardor al
              orinar o sangre en la orina. Si hay fiebre o sangre, es más probable que sea
              renal.
            </FAQItem>
            <FAQItem q="¿Cómo es el dolor de riñón?">
              Depende de la causa. El cólico por un cálculo es intenso, en oleadas, y no
              encuentra posición que lo alivie. La infección da un dolor más constante con
              fiebre. Muchos problemas renales, como los tumores tempranos, no duelen.
            </FAQItem>
            <FAQItem q="¿Por qué me duele el riñón?">
              Las causas más frecuentes son los cálculos y las infecciones que ascienden al
              riñón (pielonefritis); con menor frecuencia, obstrucciones. Los tumores
              renales suelen ser indoloros.
            </FAQItem>
            <FAQItem q="¿Qué puedo tomar para el dolor de riñón?">
              No te automediques, sobre todo con antibióticos. Hidrátate y acude a
              valoración. Si hay <strong>fiebre, sangre en la orina, dolor intenso o
              imposibilidad para orinar</strong>, acude a urgencias. El tratamiento correcto
              depende de la causa.
            </FAQItem>
            <FAQItem q="¿El dolor de riñón en mujeres es diferente?">
              La localización es la misma, pero en mujeres una causa muy frecuente es la
              infección urinaria que asciende al riñón (pielonefritis), porque las
              infecciones urinarias son más comunes en ellas. El embarazo también aumenta el
              riesgo.
            </FAQItem>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">
            ¿Dolor en el costado que no sabes de dónde viene?
          </h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            Una valoración con el Dr. Quiroz identifica si el origen es renal y qué
            tratamiento necesitas.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, tengo dolor en el costado / espalda y quisiera una valoración por posible problema de riñón."
            motivo="dolor-rinon-cta-final"
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
