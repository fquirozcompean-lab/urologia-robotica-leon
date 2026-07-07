"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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

const pirads = [
  {
    score: "1–2",
    label: "Probabilidad baja",
    color: "bg-green-100 text-green-800 border-green-300",
    body: "Es poco probable que exista un cáncer clínicamente significativo. En muchos casos permite evitar o posponer la biopsia, con seguimiento del PSA.",
  },
  {
    score: "3",
    label: "Probabilidad intermedia",
    color: "bg-amber-100 text-amber-800 border-amber-300",
    body: "Hallazgo dudoso. La decisión de biopsiar se individualiza combinando el PSA, la densidad de PSA y el criterio clínico.",
  },
  {
    score: "4–5",
    label: "Probabilidad alta",
    color: "bg-rose-100 text-rose-800 border-rose-300",
    body: "Existe una lesión sospechosa que habitualmente requiere biopsia dirigida (de fusión) para confirmar el diagnóstico y su agresividad.",
  },
];

const indicaciones = [
  {
    title: "Antes de la primera biopsia",
    body: "Con PSA elevado o tacto rectal sospechoso, la resonancia previa a la biopsia mejora la detección de tumores significativos y reduce el hallazgo de cánceres de muy bajo riesgo. Es la recomendación de las guías EAU y AUA en la mayoría de los casos.",
  },
  {
    title: "Biopsia previa negativa con PSA persistente",
    body: "Si una biopsia salió negativa pero el PSA sigue elevado, la resonancia puede localizar zonas que el muestreo al azar no alcanzó, dirigiendo una nueva biopsia al punto exacto.",
  },
  {
    title: "Vigilancia activa",
    body: "En cánceres de bajo riesgo en seguimiento sin tratamiento inmediato, la resonancia ayuda a detectar cambios y a decidir cuándo repetir la biopsia, reduciendo estudios innecesarios.",
  },
  {
    title: "Planeación del tratamiento",
    body: "Cuando ya hay diagnóstico, la resonancia aporta información sobre la localización y extensión local del tumor, útil para planear la cirugía o la radioterapia.",
  },
];

export default function ResonanciaProstataContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Imagen de precisión de próstata · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
            Resonancia Magnética de Próstata en León
          </h1>
          <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-10">
            La resonancia multiparamétrica (mpRM) muestra si hay zonas sospechosas
            en la próstata <strong>antes</strong> de una biopsia — y permite dirigirla
            con precisión cuando es necesaria. Sin radiación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WAButtonConSelector
              mensaje="Hola Dr. Quiroz, quisiera información sobre la resonancia magnética de próstata (mpRM)."
              motivo="resonancia-prostata-hero"
              variant="green"
            >
              Consultar si está indicada en mi caso
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
            ¿Qué es la resonancia multiparamétrica de próstata?
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
              Es un estudio de imagen que combina <strong>varias secuencias</strong> de
              resonancia magnética en un solo examen: una secuencia anatómica (T2) que
              muestra la estructura de la glándula, una de <strong>difusión</strong> que
              detecta tejido de alta densidad celular, y una de{" "}
              <strong>contraste dinámico</strong> que evalúa el flujo sanguíneo. De ahí el
              término <strong>multiparamétrica</strong> (mpRM).
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Al combinar esa información, el estudio identifica <strong>zonas
              sospechosas de cáncer clínicamente significativo</strong> con mucho más
              detalle que el ultrasonido, y lo hace <strong>sin radiación</strong>. Es la
              herramienta que hoy guía buena parte de las decisiones sobre cuándo y cómo
              biopsiar la próstata.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PI-RADS */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-3"
          >
            Qué significa el resultado: la escala PI-RADS
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-slate-600 mb-8 max-w-3xl"
          >
            El radiólogo asigna una puntuación <strong>PI-RADS</strong> del 1 al 5 que
            estima la probabilidad de cáncer significativo. No es un diagnóstico por sí
            sola: siempre se interpreta junto con el PSA, el tacto rectal y tu historia
            clínica.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-5">
            {pirads.map((p) => (
              <motion.div
                key={p.score}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span
                  className={`inline-block text-sm font-bold px-3 py-1 rounded-full border mb-3 ${p.color}`}
                >
                  PI-RADS {p.score}
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{p.label}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUÁNDO SE INDICA */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            ¿Cuándo se indica?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {indicaciones.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{c.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIOPSIA DE FUSIÓN */}
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
                De la imagen a la biopsia de fusión
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Cuando la resonancia detecta una lesión sospechosa, sus imágenes pueden{" "}
                <strong>superponerse (fusionarse) con el ultrasonido</strong> en tiempo
                real durante la biopsia. Así las muestras se toman exactamente del punto
                sospechoso, en lugar de un muestreo al azar.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                El resultado es un diagnóstico más certero: mayor detección de los tumores
                que sí importan y menos punciones innecesarias. La resonancia y la biopsia
                son <strong>complementarias</strong> — una localiza, la otra confirma.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <WAButtonConSelector
                  mensaje="Hola Dr. Quiroz, tengo el PSA elevado y quisiera una valoración; me interesa la resonancia de próstata y la biopsia de fusión."
                  motivo="resonancia-prostata-valoracion"
                  variant="primary"
                >
                  Agendar valoración
                </WAButtonConSelector>
                <Link
                  href="/cancer-prostata"
                  className="inline-flex items-center gap-2 text-acero font-sans font-medium hover:underline px-4 py-4"
                >
                  Ver guía completa de cáncer de próstata →
                </Link>
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
              <h3 className="text-xl font-semibold text-slate-800 mb-4">En resumen</h3>
              <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
                <li>
                  <strong>Qué evalúa:</strong> zonas sospechosas de cáncer significativo
                  dentro de la próstata
                </li>
                <li>
                  <strong>Cómo mide el riesgo:</strong> escala PI-RADS del 1 al 5
                </li>
                <li>
                  <strong>Cuándo se usa:</strong> antes de la primera biopsia, tras una
                  biopsia negativa con PSA persistente, y en vigilancia activa
                </li>
                <li>
                  <strong>Ventaja:</strong> sin radiación; puede evitar biopsias y dirigir
                  las necesarias por fusión
                </li>
                <li>
                  <strong>Importante:</strong> no sustituye a la biopsia — el diagnóstico
                  se confirma con el tejido
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
            Preguntas frecuentes sobre la resonancia de próstata
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            <FAQItem q="¿Qué es una resonancia magnética multiparamétrica de próstata?">
              Es un estudio de imagen que combina varias secuencias de resonancia
              (anatómica en T2, <strong>difusión</strong> y <strong>contraste
              dinámico</strong>) para evaluar la próstata con gran detalle. Permite
              identificar zonas sospechosas de cáncer clínicamente significativo antes de
              una biopsia, sin radiación. Se conoce como mpRM.
            </FAQItem>
            <FAQItem q="¿Qué significa mi resultado PI-RADS?">
              <strong>PI-RADS</strong> es una escala del 1 al 5 que estima la probabilidad
              de que una lesión sea un cáncer clínicamente significativo. PI-RADS 1 y 2
              indican probabilidad baja; el 3 es intermedio; el 4 y 5 indican probabilidad
              alta y suelen requerir biopsia dirigida. Siempre se interpreta junto con el
              PSA, el tacto rectal y el contexto clínico.
            </FAQItem>
            <FAQItem q="¿La resonancia sustituye a la biopsia de próstata?">
              No. La resonancia localiza zonas sospechosas, pero el diagnóstico de cáncer
              solo se confirma con <strong>biopsia</strong>. Su valor es doble: puede{" "}
              <strong>evitar biopsias innecesarias</strong> cuando el estudio es
              tranquilizador, y <strong>dirigir la biopsia</strong> al punto exacto cuando
              hay una lesión sospechosa.
            </FAQItem>
            <FAQItem q="¿Necesito una resonancia antes de la biopsia?">
              Las guías internacionales (<strong>EAU</strong> y <strong>AUA</strong>)
              recomiendan la resonancia antes de la primera biopsia en la mayoría de los
              hombres con sospecha de cáncer de próstata. Mejora la detección de tumores
              significativos y reduce el hallazgo de cánceres de muy bajo riesgo. La
              indicación se valora individualmente.
            </FAQItem>
            <FAQItem q="¿Qué es una biopsia de fusión?">
              Es una biopsia que <strong>fusiona</strong> las imágenes de la resonancia con
              el ultrasonido en tiempo real, de modo que las muestras se toman exactamente
              de la zona sospechosa. Es más precisa que la biopsia por muestreo al azar,
              especialmente en lesiones pequeñas.
            </FAQItem>
            <FAQItem q="¿La resonancia de próstata usa contraste o radiación?">
              La resonancia <strong>no utiliza radiación</strong>. La mpRM generalmente
              incluye una fase con contraste intravenoso (gadolinio), aunque en casos
              seleccionados puede usarse un protocolo abreviado sin contraste. Es un
              estudio ambulatorio y bien tolerado.
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
            Un PSA elevado no siempre significa cáncer
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/85 text-lg leading-relaxed"
          >
            Antes de decidir una biopsia, una valoración con el Dr. Quiroz define si la
            resonancia está indicada en tu caso y cómo interpretarla dentro de tu situación
            completa.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <WAButtonConSelector
              mensaje="Hola Dr. Quiroz, quisiera agendar una valoración. Tengo el PSA elevado y me interesa la resonancia de próstata."
              motivo="resonancia-prostata-cta-final"
              variant="green"
            >
              Agendar por WhatsApp
            </WAButtonConSelector>
            <Link
              href="/segunda-opinion-oncologica"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-sans font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Solicitar segunda opinión
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
