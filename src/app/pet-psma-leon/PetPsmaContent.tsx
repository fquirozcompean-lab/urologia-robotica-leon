"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import WAButton from "@/components/WAButton";

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

export default function PetPsmaContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Estadificación de precisión · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
            PET-PSMA en León: el estudio más preciso para el cáncer de próstata
          </h1>
          <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-10">
            Saber exactamente dónde está el cáncer cambia las decisiones de tratamiento.
            Esta tecnología, disponible en pocos centros del país, está en León.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WAButton
              mensaje="Hola Dr. Quiroz, quisiera información sobre el estudio PET-PSMA."
              motivo="pet-psma-hero"
              variant="green"
            >
              Consultar si está indicado en mi caso
            </WAButton>
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
            ¿Qué es el PET-PSMA?
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
              El PET-PSMA es un estudio de <strong>imagen molecular</strong>: utiliza un
              radiotrazador que se une al{" "}
              <strong>antígeno prostático específico de membrana (PSMA)</strong>, una
              proteína presente en la superficie de las células del cáncer de próstata.
              El resultado es un mapa de todo el cuerpo que muestra, con precisión
              milimétrica, dónde hay actividad tumoral.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              A diferencia de la tomografía o el gammagrama óseo — que detectan cambios
              en la <em>forma</em> de los tejidos — el PET-PSMA detecta la{" "}
              <strong>biología del tumor</strong>. Por eso identifica metástasis en
              ganglios y hueso que los estudios convencionales pueden pasar por alto,
              incluso con valores bajos de PSA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CUÁNDO ESTÁ INDICADO */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            ¿Cuándo está indicado?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Estadificación inicial de riesgo alto",
                body: "Antes de decidir entre cirugía, radioterapia u otro tratamiento, el PET-PSMA confirma si el cáncer está confinado a la próstata o ya se extendió. Esto evita cirugías que no beneficiarían al paciente — y confirma cuándo un tratamiento curativo sí es viable.",
              },
              {
                title: "Recurrencia bioquímica (PSA en ascenso)",
                body: "Si el PSA sube después de una cirugía o radioterapia, la pregunta clave es: ¿dónde está la enfermedad? El PET-PSMA la localiza con mayor sensibilidad que cualquier otro estudio, permitiendo dirigir el tratamiento de rescate al sitio exacto.",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{c.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 text-sm text-slate-600 max-w-3xl"
          >
            Ambas indicaciones están respaldadas por las guías internacionales{" "}
            <strong>NCCN</strong> (National Comprehensive Cancer Network) y{" "}
            <strong>EAU</strong> (Asociación Europea de Urología). No todos los pacientes
            lo requieren: la indicación se valora de forma individual.
          </motion.p>
        </div>
      </section>

      {/* POR QUÉ EN LEÓN */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900">
                Disponible en León, sin trasladarse a CDMX o Guadalajara
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                El PET-PSMA existe en pocos centros del país, concentrados en las grandes
                capitales. <strong>León cuenta con acceso a esta tecnología</strong>, y el
                Dr. Quiroz Compeán — urólogo oncólogo formado en el{" "}
                <strong>Instituto Nacional de Cancerología (INCan)</strong> — la integra
                de forma rutinaria en la evaluación de sus pacientes cuando está indicada.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Esto significa decisiones de tratamiento basadas en la información más
                precisa disponible, coordinadas por un especialista que interpreta el
                estudio dentro del contexto clínico completo de cada paciente.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <WAButton
                  mensaje="Hola Dr. Quiroz, quisiera una valoración para saber si el PET-PSMA está indicado en mi caso."
                  motivo="pet-psma-valoracion"
                  variant="primary"
                >
                  Agendar valoración
                </WAButton>
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
              className="rounded-2xl bg-slate-50 border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                En resumen
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
                <li>
                  <strong>Qué detecta:</strong> actividad tumoral de cáncer de próstata en
                  todo el cuerpo (próstata, ganglios, hueso, tejidos blandos)
                </li>
                <li>
                  <strong>Cuándo se usa:</strong> riesgo alto antes de tratar, o PSA en
                  ascenso después de tratamiento
                </li>
                <li>
                  <strong>Ventaja:</strong> mayor precisión que tomografía + gammagrama
                  óseo combinados
                </li>
                <li>
                  <strong>Cómo es:</strong> estudio ambulatorio, aplicación intravenosa
                  del trazador e imágenes en la misma sesión
                </li>
                <li>
                  <strong>Dónde:</strong> disponible en León, Guanajuato
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Preguntas frecuentes sobre el PET-PSMA
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            <FAQItem q="¿El estudio duele o tiene efectos secundarios?">
              No. Es un estudio <strong>ambulatorio y bien tolerado</strong>: se aplica el
              radiotrazador por vía intravenosa, se espera aproximadamente una hora y se
              adquieren las imágenes. La dosis de radiación es comparable a la de otros
              estudios de medicina nuclear.
            </FAQItem>
            <FAQItem q="¿Sustituye a la biopsia de próstata?">
              No. El diagnóstico de cáncer de próstata se confirma con{" "}
              <strong>biopsia</strong>. El PET-PSMA responde otra pregunta:{" "}
              <em>hasta dónde llega la enfermedad</em>. Son estudios complementarios
              dentro de una evaluación integral.
            </FAQItem>
            <FAQItem q="¿Todos los pacientes con cáncer de próstata lo necesitan?">
              No. En cáncer de <strong>bajo riesgo</strong> generalmente no está indicado.
              Su mayor utilidad es en <strong>riesgo alto</strong> y en{" "}
              <strong>recurrencia bioquímica</strong>. El Dr. Quiroz valora cada caso
              conforme a las guías NCCN y EAU.
            </FAQItem>
            <FAQItem q="¿Qué necesito para realizarlo?">
              Una <strong>valoración previa</strong> con su expediente (PSA, biopsia,
              estudios previos). Si está indicado, el Dr. Quiroz coordina el estudio y —
              lo más importante — <strong>interpreta el resultado</strong> dentro de su
              plan de tratamiento completo.
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
            La decisión correcta empieza con la información correcta
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/85 text-lg leading-relaxed"
          >
            Si tiene un diagnóstico de cáncer de próstata de riesgo alto, o su PSA está
            subiendo después de un tratamiento, una valoración especializada puede cambiar
            el rumbo de su tratamiento.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <WAButton
              mensaje="Hola Dr. Quiroz, quisiera agendar una valoración. Tengo interés en el estudio PET-PSMA."
              motivo="pet-psma-cta-final"
              variant="green"
            >
              Agendar por WhatsApp
            </WAButton>
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
