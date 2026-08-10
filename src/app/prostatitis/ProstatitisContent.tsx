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

const tipos = [
  {
    title: "Prostatitis bacteriana aguda",
    body: "Infección súbita, con fiebre, escalofríos, ardor intenso al orinar y a veces dificultad para orinar. Requiere atención pronta y antibiótico.",
    tag: "Puede ser urgente",
    tagColor: "bg-rose-100 text-rose-700",
  },
  {
    title: "Prostatitis bacteriana crónica",
    body: "Infecciones urinarias que reaparecen, con molestias que van y vienen durante semanas o meses. Necesita tratamiento antibiótico más prolongado.",
    tag: "Recurrente",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    title: "Síndrome de dolor pélvico crónico",
    body: "La forma más frecuente. Dolor pélvico y molestias urinarias sin una bacteria identificable. Su manejo es multimodal e individualizado.",
    tag: "La más común",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Prostatitis inflamatoria asintomática",
    body: "Inflamación detectada de forma incidental (por ejemplo, en estudios por otra causa) sin síntomas. Suele no requerir tratamiento.",
    tag: "Sin síntomas",
    tagColor: "bg-slate-100 text-slate-700",
  },
];

export default function ProstatitisContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Urología · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Prostatitis (próstata inflamada): síntomas, causas y tratamiento
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-10">
            La prostatitis es una de las causas más frecuentes de dolor pélvico y molestias
            urinarias en el hombre. La buena noticia: en la mayoría de los casos es tratable
            una vez que se identifica bien el tipo.
          </p>
          <div className="flex justify-center">
            <WAButtonConSelector
              mensaje="Hola Dr. Quiroz, tengo molestias que podrían ser prostatitis y quisiera una valoración."
              motivo="prostatitis-hero"
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
          <H2>¿Qué es la prostatitis?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              La prostatitis es la <strong>inflamación de la próstata</strong>. A
              diferencia del crecimiento prostático benigno (que es un aumento de tamaño
              por la edad) o del cáncer (un tumor maligno), la prostatitis es un{" "}
              <strong>proceso inflamatorio</strong>, muchas veces relacionado con una
              infección, y suele acompañarse de dolor.
            </p>
            <p>
              Puede aparecer a cualquier edad —incluso en hombres jóvenes— y es una de las
              consultas urológicas más comunes. Identificar de qué tipo se trata es la clave
              para tratarla bien.
            </p>
          </div>
        </section>

        {/* RED FLAG */}
        <section>
          <div className="rounded-2xl border-l-4 border-rose-500 bg-rose-50 p-6 md:p-7 flex gap-4">
            <AlertTriangle className="text-rose-600 shrink-0 mt-1" size={26} />
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Cuándo acudir de urgencia
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Si presentas <strong>fiebre alta con escalofríos</strong>, dolor intenso e{" "}
                <strong>incapacidad para orinar</strong>, podría tratarse de una prostatitis
                bacteriana aguda, que requiere atención médica inmediata. Acude al área de
                urgencias del Hospital Ángeles León o del Hospital Christus Muguerza sin
                esperar.
              </p>
            </div>
          </div>
        </section>

        {/* TIPOS */}
        <section>
          <H2>Tipos de prostatitis</H2>
          <p className="text-slate-700 leading-relaxed mb-6">
            No todas las prostatitis son iguales. Se agrupan en cuatro tipos, y el
            tratamiento depende de cuál sea:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {tipos.map((t) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span
                  className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-3 ${t.tagColor}`}
                >
                  {t.tag}
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SÍNTOMAS / DÓNDE DUELE */}
        <section>
          <H2>Síntomas y dónde duele</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Los síntomas varían según el tipo, pero los más frecuentes son:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed mb-4">
            {[
              "Dolor o presión en el perineo (entre los testículos y el ano), la ingle o la parte baja del abdomen",
              "Ardor o dolor al orinar",
              "Necesidad frecuente y urgente de orinar",
              "Dolor o molestia al eyacular",
              "Dolor en testículos, punta del pene o espalda baja",
              "En la forma aguda: fiebre y malestar general",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed">
            La localización del dolor varía de un paciente a otro, y no siempre se siente
            "en la próstata": es común que se perciba en la zona genital, la ingle o la
            espalda baja.
          </p>
        </section>

        {/* CAUSAS */}
        <section>
          <H2>¿Por qué se inflama la próstata?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              La causa más clara son las <strong>infecciones bacterianas</strong>, que
              suelen llegar desde las vías urinarias. Por eso la prostatitis a veces aparece
              después de una{" "}
              <Link
                href="/infeccion-urinaria"
                className="text-acero font-medium hover:underline"
              >
                infección urinaria
              </Link>
              .
            </p>
            <p>
              Sin embargo, en la forma más frecuente —el síndrome de dolor pélvico
              crónico— <strong>no siempre se identifica una bacteria</strong>. Participan
              factores como la tensión muscular del piso pélvico, el estrés y procesos
              inflamatorios. Esto explica por qué el tratamiento no es igual para todos.
            </p>
          </div>
        </section>

        {/* DIAGNÓSTICO Y TRATAMIENTO */}
        <section>
          <H2>Diagnóstico y tratamiento</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              La evaluación suele incluir la historia clínica, exploración, análisis de
              orina y urocultivo, y en algunos casos estudios adicionales para descartar
              otras causas. El tratamiento depende del tipo:
            </p>
            <ul className="space-y-2">
              {[
                "Prostatitis bacteriana: antibióticos dirigidos, con duración según sea aguda o crónica.",
                "Síndrome de dolor pélvico crónico: manejo combinado que puede incluir antiinflamatorios, alfa-bloqueadores, terapia del piso pélvico y medidas para el dolor.",
                "Medidas de apoyo: hidratación, evitar irritantes y seguimiento para ajustar el tratamiento.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                  {s}
                </li>
              ))}
            </ul>
            <p>
              En la mayoría de los pacientes los síntomas mejoran de forma importante con el
              tratamiento adecuado. El síndrome de dolor pélvico crónico puede requerir
              paciencia y ajustes, pero el objetivo siempre es recuperar tu calidad de vida.
            </p>
          </div>
        </section>

        {/* DIFERENCIACIÓN — interlinking */}
        <section>
          <H2>Prostatitis, próstata agrandada o cáncer: no son lo mismo</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Comparten algunos síntomas urinarios, pero son condiciones diferentes. Si no
            estás seguro de qué te ocurre, empezar por lo básico ayuda:
          </p>
          <div className="rounded-2xl border-l-4 border-acero bg-editorial p-5">
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/que-es-la-prostata" className="text-acero font-medium hover:underline">
                  ¿Qué es la próstata y para qué sirve? →
                </Link>
              </li>
              <li>
                <Link href="/hiperplasia-prostatica-benigna" className="text-acero font-medium hover:underline">
                  Próstata agrandada (crecimiento benigno / HPB) →
                </Link>
              </li>
              <li>
                <Link href="/cancer-prostata" className="text-acero font-medium hover:underline">
                  Cáncer de próstata: diagnóstico y tratamiento →
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿Qué diferencia hay entre prostatitis, próstata agrandada y cáncer?">
              La prostatitis es una <strong>inflamación</strong>, muchas veces por
              infección, y suele doler. La próstata agrandada (HPB) es un{" "}
              <strong>crecimiento benigno</strong> por la edad. El cáncer es un{" "}
              <strong>tumor maligno</strong> que en etapas tempranas no da síntomas. La
              evaluación urológica es la que las distingue.
            </FAQItem>
            <FAQItem q="¿Por qué se inflama la próstata?">
              La causa más clara son las infecciones bacterianas desde las vías urinarias.
              Pero la forma más frecuente es el síndrome de dolor pélvico crónico, donde no
              siempre hay bacteria y participan tensión del piso pélvico, estrés e
              inflamación.
            </FAQItem>
            <FAQItem q="¿La prostatitis se cura?">
              La bacteriana aguda suele resolverse con el antibiótico adecuado. La crónica y
              el síndrome de dolor pélvico pueden requerir manejo más prolongado; en la
              mayoría de los pacientes los síntomas mejoran de forma importante, aunque
              pueden reaparecer.
            </FAQItem>
            <FAQItem q="¿Dónde duele con la prostatitis?">
              En el perineo (entre testículos y ano), la parte baja del abdomen, la ingle,
              los testículos, la punta del pene o la espalda baja. También puede haber ardor
              al orinar y dolor al eyacular.
            </FAQItem>
            <FAQItem q="¿La prostatitis es contagiosa o se transmite sexualmente?">
              En general no es contagiosa. En algunos casos se relaciona con infecciones de
              transmisión sexual, que sí requieren tratamiento específico y valorar a la
              pareja. Tu urólogo determinará si es tu caso.
            </FAQItem>
            <FAQItem q="¿La prostatitis aumenta el riesgo de cáncer de próstata?">
              No se ha demostrado que cause cáncer. Sin embargo, la inflamación puede{" "}
              <strong>elevar temporalmente el PSA</strong>, lo que a veces genera confusión;
              por eso, ante un PSA elevado, el urólogo valora el contexto completo.
            </FAQItem>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">
            No tienes que vivir con el dolor
          </h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            La prostatitis tiene tratamiento. Una valoración con el Dr. Quiroz define el
            tipo y el plan adecuado para tu caso.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, tengo síntomas que podrían ser prostatitis y quiero agendar una consulta."
            motivo="prostatitis-cta-final"
            variant="green"
          >
            Agendar por WhatsApp
          </WAButtonConSelector>
        </section>
      </article>
    </main>
  );
}
