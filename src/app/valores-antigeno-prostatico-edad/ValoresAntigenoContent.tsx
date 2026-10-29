"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
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

// Rangos de referencia por edad (Oesterling et al., JAMA 1993) — orientativos.
const rangosPorEdad = [
  { edad: "40 a 49 años", valor: "hasta 2.5 ng/mL" },
  { edad: "50 a 59 años", valor: "hasta 3.5 ng/mL" },
  { edad: "60 a 69 años", valor: "hasta 4.5 ng/mL" },
  { edad: "70 a 79 años", valor: "hasta 6.5 ng/mL" },
];

const antigenoLibre = [
  { libre: "Menor de 10%", lectura: "Mayor probabilidad de cáncer; suele ameritar estudio adicional." },
  { libre: "10% a 25%", lectura: "Zona intermedia; se decide con el resto de la evaluación." },
  { libre: "Mayor de 25%", lectura: "Menor probabilidad de cáncer; más a favor de crecimiento benigno." },
];

export default function ValoresAntigenoContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Salud de la próstata · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Valores de antígeno prostático (PSA) según la edad
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            Qué valor se considera normal para tu edad, qué significan el antígeno total y
            el libre, y qué hacer si tu resultado salió alto.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 space-y-14">
        {/* QUÉ ES */}
        <section>
          <H2>¿Qué es el antígeno prostático específico?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              El <strong>antígeno prostático específico</strong> —en el resultado del
              laboratorio aparece como <strong>PSA</strong>— es una proteína que produce la{" "}
              <Link href="/que-es-la-prostata" className="text-acero font-medium hover:underline">
                próstata
              </Link>
              . Una pequeña cantidad pasa a la sangre y se mide con un análisis sencillo, en
              nanogramos por mililitro (ng/mL).
            </p>
            <p>
              Su valor sube con la edad y con el tamaño de la próstata, y también puede
              elevarse por inflamación, infección o cáncer. Por eso{" "}
              <strong>no existe un único número que separe lo normal de lo anormal</strong>:
              el resultado se interpreta en contexto.
            </p>
          </div>
        </section>

        {/* TABLA POR EDAD */}
        <section>
          <H2>Tabla de valores de referencia por edad</H2>
          <p className="text-slate-700 leading-relaxed mb-5">
            Estos rangos se usan como referencia orientativa para hombres sin otros
            factores de riesgo:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left">
              <caption className="sr-only">
                Valores de referencia del antígeno prostático según la edad
              </caption>
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-5 py-3 text-sm font-semibold text-slate-800">
                    Edad
                  </th>
                  <th scope="col" className="px-5 py-3 text-sm font-semibold text-slate-800">
                    Antígeno prostático (PSA) de referencia
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rangosPorEdad.map((r) => (
                  <tr key={r.edad}>
                    <td className="px-5 py-3 text-slate-700">{r.edad}</td>
                    <td className="px-5 py-3 font-semibold text-petroleo">{r.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-2xl border-l-4 border-acero bg-editorial p-5 flex gap-3">
            <Info className="text-acero shrink-0 mt-0.5" size={22} />
            <p className="text-sm text-gris-profundo leading-relaxed">
              <strong>Nota:</strong> estos rangos provienen de estudios clásicos y sirven solo
              como referencia. Como urólogos, <strong>valoramos cada caso de forma
              individual</strong>. Muchos laboratorios marcan <strong>4.0 ng/mL</strong> como límite general sin
              importar la edad. Ningún valor de la tabla es un corte absoluto: un resultado
              dentro del rango no descarta por completo el cáncer, y uno por encima no lo
              confirma. Lo que más orienta es la{" "}
              <strong>evolución del antígeno en el tiempo</strong>, el tamaño de la próstata
              y tus antecedentes.
            </p>
          </div>
        </section>

        {/* TOTAL Y LIBRE */}
        <section>
          <H2>Antígeno prostático total y libre</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              El antígeno circula en la sangre de dos formas: unido a proteínas y{" "}
              <strong>libre</strong>. El <strong>antígeno total</strong> suma ambas y es el
              que se pide de rutina.
            </p>
            <p>
              Cuando el total cae en la llamada <strong>zona gris (4 a 10 ng/mL)</strong>, el
              porcentaje de antígeno libre ayuda a afinar el riesgo:
            </p>
          </div>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left">
              <caption className="sr-only">
                Interpretación del porcentaje de antígeno prostático libre
              </caption>
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-5 py-3 text-sm font-semibold text-slate-800">
                    Antígeno libre
                  </th>
                  <th scope="col" className="px-5 py-3 text-sm font-semibold text-slate-800">
                    Qué sugiere
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {antigenoLibre.map((r) => (
                  <tr key={r.libre}>
                    <td className="px-5 py-3 font-semibold text-petroleo whitespace-nowrap">
                      {r.libre}
                    </td>
                    <td className="px-5 py-3 text-slate-700 text-sm">{r.lectura}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Otra herramienta es la <strong>densidad del antígeno prostático</strong>: el
            valor del antígeno dividido entre el volumen de la próstata (medido por
            ultrasonido o resonancia). Una próstata grande produce más antígeno sin que haya
            cáncer; una densidad mayor de 0.15 ng/mL por centímetro cúbico se considera de
            mayor riesgo.
          </p>
        </section>

        {/* CAUSAS NO CANCEROSAS */}
        <section>
          <H2>Qué puede elevarlo sin que sea cáncer</H2>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {[
              "Crecimiento benigno de la próstata (hiperplasia prostática).",
              "Prostatitis o infección urinaria.",
              "Eyaculación en las 48 horas previas al análisis.",
              "Ejercicio intenso, sobre todo andar en bicicleta.",
              "Una sonda, cistoscopia u otro estudio urológico reciente.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            En sentido contrario, la <strong>finasterida y la dutasterida</strong> —usadas
            para el crecimiento de la próstata— bajan el antígeno aproximadamente a la mitad.
            Si las tomas, avísale a tu urólogo para interpretar bien el resultado.{" "}
            <Link
              href="/hiperplasia-prostatica-benigna"
              className="text-acero font-medium hover:underline"
            >
              Conoce el crecimiento de la próstata →
            </Link>
          </p>
        </section>

        {/* SI SALIÓ ELEVADO */}
        <section>
          <H2>Si tu antígeno prostático salió elevado</H2>
          <p className="text-slate-700 leading-relaxed mb-5">
            Un solo resultado alto <strong>no es motivo para hacer una biopsia de
            inmediato</strong>. El orden recomendado es:
          </p>
          <ol className="space-y-4">
            {[
              {
                t: "Confirmar la elevación",
                d: "Repetir el análisis unas semanas después, en buenas condiciones y descartando antes una infección.",
              },
              {
                t: "Si persiste: resonancia magnética",
                d: "La resonancia multiparamétrica muestra si hay zonas sospechosas y ayuda a decidir si la biopsia es necesaria.",
              },
              {
                t: "Biopsia solo si está indicada",
                d: "Dirigida a las zonas sospechosas que muestre la resonancia.",
              },
            ].map((p, i) => (
              <li key={p.t} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-acero text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{p.t}</h3>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-slate-700 leading-relaxed">
            <Link
              href="/resonancia-magnetica-prostata"
              className="text-acero font-medium hover:underline"
            >
              Resonancia magnética de próstata y escala PI-RADS →
            </Link>
            <br />
            <Link href="/cancer-prostata" className="text-acero font-medium hover:underline">
              Diagnóstico y tratamiento del cáncer de próstata →
            </Link>
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿Cuál es el valor normal del antígeno prostático según la edad?">
              Como referencia orientativa: hasta 2.5 ng/mL entre los 40 y 49 años, hasta 3.5
              ng/mL entre los 50 y 59, hasta 4.5 ng/mL entre los 60 y 69, y hasta 6.5 ng/mL
              entre los 70 y 79. Muchos laboratorios usan 4.0 ng/mL como límite general.
              Estos valores no son un corte absoluto: el urólogo los interpreta junto con tu
              historia, el tamaño de la próstata y la evolución del resultado en el tiempo.
            </FAQItem>
            <FAQItem q="¿Qué hago si mi antígeno prostático salió elevado?">
              Un solo resultado alto no es motivo para hacer una biopsia de inmediato. El
              primer paso es repetir el análisis unas semanas después para confirmar la
              elevación. Si persiste elevado, se complementa con tacto rectal y resonancia
              magnética multiparamétrica de próstata, que ayudan a decidir si la biopsia es
              necesaria.
            </FAQItem>
            <FAQItem q="¿Qué es el antígeno prostático total y libre?">
              El antígeno prostático circula en la sangre de dos formas: unido a proteínas y
              libre. El antígeno total suma ambas. Cuando el total está entre 4 y 10 ng/mL,
              el porcentaje de antígeno libre ayuda a afinar el riesgo: un porcentaje bajo
              (menor de 10%) se asocia con mayor probabilidad de cáncer, y uno alto (mayor de
              25%) con menor probabilidad.
            </FAQItem>
            <FAQItem q="¿Un antígeno prostático normal descarta el cáncer de próstata?">
              No por completo. La mayoría de los hombres con antígeno normal no tienen
              cáncer, pero una parte de los cánceres se presenta con valores dentro del rango
              de referencia. Por eso la revisión periódica, el tacto rectal y la evolución del
              antígeno en el tiempo son importantes, sobre todo si tienes antecedentes
              familiares.
            </FAQItem>
            <FAQItem q="¿Qué puede elevar el antígeno prostático sin que sea cáncer?">
              El crecimiento benigno de la próstata (hiperplasia), la prostatitis, una
              infección urinaria, una eyaculación reciente, el ejercicio intenso como andar
              en bicicleta, y una sonda o un estudio urológico reciente. Por eso un resultado
              alto se confirma antes de tomar decisiones.
            </FAQItem>
            <FAQItem q="¿Cómo me preparo para el análisis de antígeno prostático?">
              No requiere ayuno especial. Se recomienda evitar la eyaculación y andar en
              bicicleta durante las 48 horas previas, y no hacerlo mientras tengas una
              infección urinaria o en las semanas siguientes a una sonda o estudio
              urológico. Lo ideal es hacerlo siempre en condiciones parecidas para poder
              comparar resultados.
            </FAQItem>
            <FAQItem q="¿Los medicamentos para la próstata cambian el resultado del antígeno?">
              Sí. La finasterida y la dutasterida, que se usan para el crecimiento de la
              próstata, reducen el antígeno prostático aproximadamente a la mitad después de
              varios meses de tratamiento. Si los tomas, avísale a tu urólogo: el resultado
              se interpreta ajustando ese efecto.
            </FAQItem>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">
            ¿Tienes tu resultado y no sabes cómo leerlo?
          </h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            Agenda una valoración con el Dr. Quiroz para interpretarlo en el contexto de tu
            edad, tu próstata y tus antecedentes.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, tengo mi resultado de antígeno prostático y quisiera agendar una valoración para interpretarlo."
            motivo="valores-antigeno-cta-final"
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
