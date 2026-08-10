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

export default function UroflujometriaContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Estudio urológico · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Uroflujometría: qué es, para qué sirve y cómo se realiza
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            La uroflujometría es uno de los estudios más sencillos y utilizados en
            urología para entender cómo está funcionando tu vaciamiento urinario. No
            requiere sondas, no duele y se realiza en pocos minutos, pero la información
            que ofrece es clave para identificar problemas de próstata, vejiga o del tracto
            urinario en etapas tempranas.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 space-y-14">
        {/* QUÉ ES */}
        <section>
          <H2>¿Qué es la uroflujometría?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              La uroflujometría es un <strong>estudio no invasivo</strong> que mide la
              velocidad y el volumen con que orinas. El paciente orina de forma normal
              dentro de un dispositivo especial (uroflujómetro), que registra en una
              gráfica el flujo máximo, el flujo promedio, el volumen total evacuado y el
              tiempo que toma vaciar la vejiga.
            </p>
            <p>
              Esta información permite detectar si existe una <strong>obstrucción</strong>{" "}
              en la salida de la orina —por ejemplo, por crecimiento prostático— o si la
              vejiga no se contrae con la fuerza necesaria para vaciarse por completo.
            </p>
          </div>
        </section>

        {/* SÍNTOMAS */}
        <section>
          <H2>¿Para qué síntomas se indica este estudio?</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Tu urólogo puede indicarte una uroflujometría si presentas:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed mb-4">
            {[
              "Chorro urinario débil o entrecortado",
              "Dificultad para iniciar la micción",
              "Sensación de vaciamiento incompleto de la vejiga",
              "Necesidad de pujar para orinar",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">
            Además, las guías internacionales recomiendan realizar el estudio antes de
            iniciar medicamentos para mejorar el flujo urinario.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Estos síntomas —conocidos en conjunto como{" "}
            <strong>síntomas del tracto urinario inferior (STUI o LUTS)</strong>— son
            comunes en el{" "}
            <Link
              href="/hiperplasia-prostatica-benigna"
              className="text-acero font-medium hover:underline"
            >
              crecimiento prostático benigno
            </Link>
            , pero también pueden estar relacionados con otras condiciones de vejiga o
            uretra, por lo que la evaluación debe ser individualizada.
          </p>
        </section>

        {/* CÓMO SE REALIZA */}
        <section>
          <H2>¿Cómo se realiza la uroflujometría?</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            El procedimiento es simple y no genera molestia:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed mb-4">
            {[
              "El paciente acude al estudio con la vejiga cómodamente llena, con deseo de orinar.",
              "Orina de manera normal y en privacidad dentro del uroflujómetro.",
              "El equipo registra automáticamente el flujo urinario en una gráfica.",
              "El estudio completo dura entre 3 y 5 minutos.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed">
            No se utilizan sondas, agujas ni sedación. Es un estudio ambulatorio que se
            integra fácilmente a una consulta de urología.
          </p>
        </section>

        {/* PREPARACIÓN */}
        <section>
          <H2>Preparación antes del estudio</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            La uroflujometría no requiere ayuno ni preparación especial, pero sí es
            importante seguir estas indicaciones para obtener un resultado confiable:
          </p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <ul className="space-y-3 text-slate-700 leading-relaxed">
              {[
                "Orinar aproximadamente 3 horas antes de la cita.",
                "A partir de ese momento, beber un vaso de agua cada 30 minutos hasta sentir deseo natural de orinar.",
                "Evitar orinar justo antes de llegar al hospital.",
                "Llegar con deseo de orinar, pero sin urgencia extrema ni molestia.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* VALORES NORMALES */}
        <section>
          <H2>Valores normales y qué significan tus resultados</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Los resultados de la uroflujometría se interpretan considerando el volumen
            orinado, la edad y el sexo del paciente. Como referencia general:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed mb-4">
            {[
              "Un flujo máximo por arriba de 15 mL/segundo suele considerarse normal.",
              "Un flujo máximo por debajo de ese valor puede sugerir obstrucción en la salida de la vejiga o debilidad en la contracción vesical.",
              "El volumen total, el tiempo de vaciamiento y la forma de la gráfica también aportan información relevante para el diagnóstico.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="text-slate-700 leading-relaxed">
            La interpretación siempre debe hacerla un urólogo, ya que un valor aislado no
            define un diagnóstico: se analiza junto con tus síntomas y, si es necesario,
            otros estudios complementarios.
          </p>
        </section>

        {/* CUÁNDO CONSULTAR */}
        <section>
          <H2>¿Cuándo consultar a un urólogo?</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Si notas cambios en la fuerza de tu chorro urinario, dificultad para vaciar la
            vejiga por completo o cualquiera de los síntomas descritos arriba, vale la pena
            una evaluación urológica. Identificar a tiempo la causa —benigna en la mayoría
            de los casos— permite un tratamiento más simple y evita complicaciones a largo
            plazo.
          </p>
          <div className="rounded-2xl border-l-4 border-acero bg-editorial p-5">
            <p className="font-sans font-semibold text-petroleo text-sm mb-2">
              Temas relacionados
            </p>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/hiperplasia-prostatica-benigna" className="text-acero font-medium hover:underline">
                  Crecimiento de próstata (HPB) →
                </Link>
              </li>
              <li>
                <Link href="/holep-cirugia-laser" className="text-acero font-medium hover:underline">
                  HoLEP: cirugía láser de próstata →
                </Link>
              </li>
              <li>
                <Link href="/cancer-prostata" className="text-acero font-medium hover:underline">
                  Cáncer de próstata: diagnóstico y tratamiento →
                </Link>
              </li>
              <li>
                <Link href="/calculos-renales" className="text-acero font-medium hover:underline">
                  Cálculos renales (litiasis urinaria) →
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿La uroflujometría es dolorosa?">
              No. Consiste en orinar de manera normal dentro de un dispositivo especial; no
              involucra sondas ni instrumentos dentro del cuerpo.
            </FAQItem>
            <FAQItem q="¿Necesito estar en ayuno?">
              No. Solo se recomienda llegar con la vejiga llena, sin haber orinado en las
              horas previas.
            </FAQItem>
            <FAQItem q="¿Cuánto tarda el estudio?">
              Entre 3 y 5 minutos en total.
            </FAQItem>
            <FAQItem q="¿La uroflujometría diagnostica cáncer de próstata?">
              No directamente. Evalúa la función del vaciamiento urinario, no detecta
              cáncer. Sin embargo, es parte de la evaluación integral de síntomas
              urinarios, que puede llevar a estudios adicionales si el urólogo lo considera
              necesario.
            </FAQItem>
            <FAQItem q="¿Puedo hacerme el estudio si tengo una infección urinaria activa?">
              Generalmente se recomienda posponerlo hasta resolver la infección, ya que
              puede alterar los resultados. Coméntalo con tu urólogo antes de la cita.
            </FAQItem>
          </div>
        </section>

        {/* CTA DISCRETO — único, al final */}
        <section className="rounded-2xl bg-editorial border border-gris-premium/15 p-8 text-center">
          <p className="font-serif text-gris-profundo mb-5">
            ¿Tienes dudas sobre tus síntomas urinarios? Una valoración con el Dr. Quiroz
            define si la uroflujometría u otro estudio es lo que necesitas.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, tengo dudas sobre mis síntomas urinarios y quisiera una valoración."
            motivo="uroflujometria-cta-final"
            variant="primary"
          >
            Agendar una valoración
          </WAButtonConSelector>
        </section>
      </article>
    </main>
  );
}
