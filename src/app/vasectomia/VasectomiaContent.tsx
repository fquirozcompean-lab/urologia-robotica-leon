"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Clock, Activity } from "lucide-react";
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

const pasos = [
  {
    n: "1",
    title: "Anestesia local",
    body: "Se adormece la zona con anestesia local. Estás despierto y cómodo durante todo el procedimiento.",
  },
  {
    n: "2",
    title: "Punción sin bisturí",
    body: "A través de una pequeña punción —sin corte ni puntos— se localizan los conductos deferentes.",
  },
  {
    n: "3",
    title: "Interrupción del conducto",
    body: "Se interrumpen los conductos para que los espermatozoides ya no lleguen al semen. Dura unos 15-20 minutos.",
  },
];

const beneficios = [
  { icon: ShieldCheck, t: "Muy eficaz", d: "Es uno de los métodos anticonceptivos más eficaces una vez confirmada." },
  { icon: Clock, t: "Rápida y ambulatoria", d: "Unos 15-20 minutos, con anestesia local y sin hospitalización." },
  { icon: Activity, t: "Recuperación pronta", d: "La mayoría retoma actividades ligeras en 1-2 días." },
  { icon: CheckCircle, t: "Sin afectar tu sexualidad", d: "No cambia la erección, el deseo, el orgasmo ni la testosterona." },
];

export default function VasectomiaContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Anticoncepción masculina · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Vasectomía sin bisturí en León
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed mb-10">
            Un método anticonceptivo definitivo, sencillo y seguro: ambulatorio, con
            anestesia local, sin corte ni puntos y con recuperación rápida. Aquí te
            explicamos qué es, cómo se hace y qué esperar.
          </p>
          <div className="flex justify-center">
            <WAButtonConSelector
              mensaje="Hola Dr. Quiroz, me interesa información sobre la vasectomía sin bisturí y quisiera una valoración."
              motivo="vasectomia-hero"
              variant="green"
            >
              Agendar una valoración
            </WAButtonConSelector>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 space-y-14">
        {/* QUÉ ES */}
        <section>
          <H2>¿Qué es la vasectomía?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              La vasectomía es un procedimiento de <strong>anticoncepción masculina
              definitiva</strong>. Consiste en interrumpir los <strong>conductos
              deferentes</strong>, los tubos que llevan los espermatozoides desde los
              testículos, de modo que el semen ya no los contenga.
            </p>
            <p>
              Los testículos siguen produciendo espermatozoides y hormonas con normalidad;
              simplemente, esos espermatozoides ya no salen y el cuerpo los reabsorbe. Por
              eso <strong>no cambia tu vida sexual</strong>: lo único que cambia es la
              capacidad de embarazar.
            </p>
          </div>
        </section>

        {/* CÓMO SE HACE — visual */}
        <section>
          <H2>Vasectomía sin bisturí: cómo se hace</H2>
          <p className="text-slate-700 leading-relaxed mb-6">
            La técnica <strong>sin bisturí</strong> (no-scalpel) es el estándar moderno. En
            lugar de un corte, se usa una pequeña punción: menos sangrado, menos molestia y
            recuperación más rápida, con la misma eficacia.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {pasos.map((p) => (
              <motion.div
                key={p.n}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="w-9 h-9 rounded-full bg-acero text-editorial font-sans font-bold flex items-center justify-center mb-3">
                  {p.n}
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">{p.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENEFICIOS */}
        <section>
          <H2>Beneficios</H2>
          <div className="grid sm:grid-cols-2 gap-5">
            {beneficios.map((b) => (
              <motion.div
                key={b.t}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex gap-4"
              >
                <b.icon className="text-quirurgico shrink-0 mt-0.5" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-800">{b.t}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed mt-0.5">{b.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RECUPERACIÓN */}
        <section>
          <H2>Recuperación</H2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <ul className="space-y-3 text-slate-700 leading-relaxed">
              {[
                "Reposo relativo 1-2 días; la mayoría vuelve al trabajo de oficina en pocos días.",
                "Hielo local y ropa interior de soporte para reducir la inflamación.",
                "Evitar esfuerzo físico intenso y ejercicio durante aproximadamente una semana.",
                "Puede haber molestia leve o pequeños moretones, que ceden en pocos días.",
                "Reanudar la actividad sexual según indicación, habitualmente en unos días.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EFECTIVIDAD Y MITOS */}
        <section>
          <H2>Efectividad y mitos frecuentes</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Importante:</strong> la vasectomía <strong>no es efectiva de
                inmediato</strong>. Quedan espermatozoides en la vía durante algunas
                semanas, así que debes seguir usando otro método anticonceptivo hasta
                confirmar con un <strong>análisis de semen</strong> (espermatobioscopia)
                que ya no hay espermatozoides, habitualmente alrededor de los 3 meses.
              </p>
            </div>
            <p>Sobre lo que se dice y no es cierto:</p>
            <ul className="space-y-2">
              {[
                "No baja la testosterona ni causa problemas hormonales.",
                "No afecta la erección — no causa disfunción eréctil.",
                "No cambia el orgasmo ni la cantidad de semen de forma perceptible.",
                "No engorda ni provoca cáncer de próstata (son mitos sin sustento).",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600">
              Si tu preocupación es la función sexual, vale aclararlo: la vasectomía no la
              afecta. Los problemas de erección tienen otras causas —{" "}
              <Link href="/disfuncion-erectil" className="text-acero font-medium hover:underline">
                ver disfunción eréctil
              </Link>
              . Y recuerda que la vasectomía <strong>no protege contra infecciones de
              transmisión sexual</strong>.
            </p>
          </div>
        </section>

        {/* REVERSIBILIDAD Y REVERSIÓN */}
        <section>
          <H2>¿Es reversible? Reversión de vasectomía</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              La vasectomía debe tomarse como una decisión <strong>permanente</strong>. Lo
              más sano es elegirla cuando tienes claro que no deseas más hijos.
            </p>
            <p>
              Dicho esto, existe la <strong>reversión de la vasectomía
              (vasovasostomía)</strong>, una microcirugía que <strong>el Dr. Quiroz
              realiza</strong> para reconectar los conductos. Es importante ser honesto:{" "}
              <strong>la reversión no garantiza recuperar la fertilidad</strong>, y las
              probabilidades de lograr un embarazo <strong>disminuyen conforme pasa más
              tiempo</strong> desde la vasectomía. Por eso conviene decidir la vasectomía
              pensando en que es definitiva, no en que se puede deshacer fácilmente.
            </p>
            <p>
              Si estás considerando una reversión, una valoración permite estimar tus
              probabilidades según tu caso.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿La vasectomía duele?">
              Se realiza con anestesia local, así que durante el procedimiento no hay dolor.
              En la técnica sin bisturí no hay corte ni puntos, por lo que la molestia
              posterior suele ser leve y se controla con hielo, reposo y analgésicos comunes
              durante uno o dos días.
            </FAQItem>
            <FAQItem q="¿La vasectomía afecta la erección, el deseo sexual o el orgasmo?">
              No. No afecta la testosterona, la erección, el deseo ni el orgasmo. Tampoco
              cambia de forma perceptible la cantidad ni el aspecto del semen. Lo único que
              cambia es que el semen ya no contiene espermatozoides.
            </FAQItem>
            <FAQItem q="¿Cuándo es efectiva la vasectomía?">
              No es efectiva de inmediato. Debes usar otro método anticonceptivo hasta
              confirmar la ausencia de espermatozoides con un <strong>análisis de
              semen</strong>, habitualmente alrededor de los 3 meses o tras unas 20
              eyaculaciones. Solo entonces se considera efectiva.
            </FAQItem>
            <FAQItem q="¿La vasectomía es reversible?">
              Debe considerarse permanente. Existe la reversión (vasovasostomía), que el Dr.
              Quiroz realiza, pero <strong>no garantiza recuperar la fertilidad</strong> y
              las probabilidades disminuyen con el tiempo transcurrido. Decide pensando en
              que es definitiva.
            </FAQItem>
            <FAQItem q="¿La vasectomía sin bisturí es diferente de la convencional?">
              En lugar de un corte con bisturí, se accede al conducto por una pequeña
              punción, sin puntos. Esto se asocia con menos sangrado, menos molestia y
              recuperación más rápida, con la misma eficacia anticonceptiva.
            </FAQItem>
            <FAQItem q="¿Cuánto cuesta la vasectomía en León?">
              El costo se informa en la consulta e incluye la valoración, el procedimiento y
              el análisis de semen de control. Se realiza en Hospital Ángeles León y
              Hospital Christus Muguerza Altagracia. Escríbenos por WhatsApp para conocer
              disponibilidad y detalles.
            </FAQItem>
            <FAQItem q="¿La vasectomía protege contra infecciones de transmisión sexual?">
              No. Es un método anticonceptivo, no protege contra infecciones de transmisión
              sexual. Para eso sigue siendo necesario el preservativo cuando corresponde.
            </FAQItem>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">
            Resuelve tus dudas en una valoración
          </h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            El Dr. Quiroz te explica el procedimiento, resuelve tus dudas y define si la
            vasectomía sin bisturí es lo adecuado para ti.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, quiero agendar una valoración para vasectomía sin bisturí."
            motivo="vasectomia-cta-final"
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
