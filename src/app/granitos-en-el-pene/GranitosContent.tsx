"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle } from "lucide-react";
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

const benignos = [
  {
    title: "Pápulas perladas del pene",
    body: "Pequeños granitos del mismo color de la piel, en una o varias filas muy regulares alrededor del borde del glande. Son una variante normal, no son una ITS y no requieren tratamiento.",
  },
  {
    title: "Puntos de Fordyce",
    body: "Glándulas sebáceas visibles como puntos blancos o amarillentos. Son completamente normales, no se contagian y no necesitan tratamiento.",
  },
  {
    title: "Quistes pequeños y foliculitis",
    body: "Bolitas por glándulas obstruidas o folículos irritados. Suelen ser benignas y pasajeras; solo se tratan si molestan o se inflaman.",
  },
];

const evaluar = [
  {
    title: "Verrugas genitales (VPH)",
    body: "Lesiones irregulares que pueden crecer o multiplicarse, relacionadas con contacto sexual. Tienen tratamiento.",
    href: "/verrugas-genitales",
    cta: "Ver verrugas genitales",
  },
  {
    title: "Molusco contagioso",
    body: "Granitos con un pequeño hoyito central, de origen viral. Pueden transmitirse y tienen tratamiento.",
    href: "/vph-en-hombres",
    cta: "Ver VPH en hombres",
  },
  {
    title: "Balanitis con granitos",
    body: "A veces los granitos acompañan enrojecimiento o comezón del glande, propios de una balanitis.",
    href: "/balanitis",
    cta: "Ver balanitis",
  },
];

export default function GranitosContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Salud del pene · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Granitos, bolitas o manchas en el pene: ¿qué son?
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            Descubrir granitos en el pene asusta, pero aquí va lo primero y más importante:{" "}
            <strong className="text-editorial">la mayoría son benignos</strong>. Aun así,
            conviene distinguirlos de las verrugas u otras causas.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 space-y-14">
        {/* TRANQUILIDAD */}
        <section>
          <div className="rounded-2xl border-l-4 border-teal-500 bg-teal-50 p-6 flex gap-4">
            <CheckCircle className="text-teal-600 shrink-0 mt-0.5" size={26} />
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Lo primero: casi siempre son benignos
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Muchos de los granitos y bolitas en el pene son <strong>variantes
                normales de la piel</strong> —no son una infección ni una enfermedad—. El
                objetivo de una revisión no es alarmarte, sino distinguir lo normal de lo
                que sí necesita atención, y darte tranquilidad.
              </p>
            </div>
          </div>
        </section>

        {/* BENIGNOS */}
        <section>
          <H2>Causas benignas más frecuentes</H2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Estas son normales y no requieren tratamiento (incluyen la mayoría de los{" "}
            <strong>granitos blancos</strong>):
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {benignos.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-base font-semibold text-slate-800 mb-2">{b.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CUÁNDO SÍ EVALUAR — interlinking */}
        <section>
          <H2>Cuándo sí conviene evaluar</H2>
          <p className="text-slate-700 leading-relaxed mb-6">
            No todos los granitos son benignos. Estas causas sí requieren valoración y
            tratamiento:
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {evaluar.map((e) => (
              <motion.div
                key={e.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col"
              >
                <h3 className="text-base font-semibold text-slate-800 mb-2">{e.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed flex-grow">{e.body}</p>
                <Link
                  href={e.href}
                  className="mt-4 text-acero font-sans font-medium text-sm hover:underline"
                >
                  {e.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CUÁNDO CONSULTAR */}
        <section>
          <div className="rounded-2xl border-l-4 border-rose-500 bg-rose-50 p-6 md:p-7 flex gap-4">
            <AlertTriangle className="text-rose-600 shrink-0 mt-1" size={26} />
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Cuándo consultar
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Revísate si las lesiones <strong>aparecieron hace poco, crecen o se
                multiplican, cambian de color, sangran, dan comezón o dolor</strong>, o si
                hubo contacto sexual de riesgo. Y nunca intentes quitarlas por tu cuenta:
                una revisión rápida distingue lo benigno de lo que sí necesita tratamiento.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿Los granitos en el pene son normales?">
              Muchos sí. Las <strong>pápulas perladas</strong> (granitos en fila alrededor
              del glande) y los <strong>puntos de Fordyce</strong> (glándulas sebáceas) son
              variantes normales, no se transmiten y no requieren tratamiento. Pero no todos
              son de este tipo, así que ante la duda conviene revisarse.
            </FAQItem>
            <FAQItem q="¿Qué son los granitos blancos en el pene?">
              Suelen ser puntos de Fordyce, pápulas perladas o pequeños quistes, todos
              benignos. En algunos casos, unos granitos blancos con un hoyito central pueden
              ser <strong>molusco contagioso</strong>, de origen viral. Una valoración lo
              distingue con seguridad.
            </FAQItem>
            <FAQItem q="¿Cómo sé si son verrugas (VPH) o algo benigno?">
              No siempre es fácil a simple vista. Las pápulas perladas son muy regulares
              alrededor del glande; las{" "}
              <Link href="/verrugas-genitales" className="text-acero font-medium hover:underline">
                verrugas genitales (VPH)
              </Link>{" "}
              suelen ser irregulares, pueden crecer y se relacionan con contacto sexual.
              Ante la duda, o si algo cambia, revísate.
            </FAQItem>
            <FAQItem q="¿Los granitos en el pene son contagiosos?">
              Depende de qué sean. Las pápulas perladas y los puntos de Fordyce no se
              contagian. Las verrugas (VPH), el molusco y algunas infecciones sí pueden
              transmitirse. Por eso importa distinguir el tipo de lesión.
            </FAQItem>
            <FAQItem q="¿Se deben quitar los granitos del pene?">
              Las lesiones benignas no necesitan tratamiento; solo se retiran por estética
              si el paciente lo desea. Las verrugas o el molusco sí tienen tratamiento
              indicado. Nunca intentes quitarlas por cuenta propia.
            </FAQItem>
            <FAQItem q="¿Cuándo consultar por granitos en el pene?">
              Si aparecieron hace poco, crecen o se multiplican, cambian de color, sangran,
              dan comezón o dolor, o si hubo contacto sexual de riesgo. Una revisión rápida
              distingue lo benigno y te da tranquilidad.
            </FAQItem>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">
            Sal de dudas con una revisión
          </h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            En una consulta breve el Dr. Quiroz distingue si tus granitos son benignos o
            requieren tratamiento — sin que tengas que adivinar.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, noté unos granitos / bolitas en el pene y quisiera una revisión."
            motivo="granitos-pene-cta-final"
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
