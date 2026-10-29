"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Droplet, HeartPulse, Clock, CheckCircle } from "lucide-react";
import WAButtonConSelector from "@/components/WAButtonConSelector";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Esquema original del mecanismo (SVG propio — sin assets de terceros).
// Corte esquemático simplificado: vejiga arriba, próstata rodeando la uretra.
function PasoRezum({
  n,
  titulo,
  texto,
  children,
}: {
  n: number;
  titulo: string;
  texto: string;
  children: React.ReactNode;
}) {
  return (
    <motion.figure
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex justify-center">
        <svg
          viewBox="0 0 240 270"
          className="w-full max-w-[200px] h-auto"
          role="img"
          aria-label={`Paso ${n}: ${titulo}. ${texto}`}
        >
          {children}
        </svg>
      </div>
      <figcaption className="mt-3">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-quirurgico text-white text-xs font-bold mr-2 align-middle">
          {n}
        </span>
        <span className="font-semibold text-slate-800">{titulo}</span>
        <p className="text-sm text-slate-700 leading-relaxed mt-1">{texto}</p>
      </figcaption>
    </motion.figure>
  );
}

// Anatomía base compartida por los 3 pasos (vejiga + próstata + uretra).
function AnatomiaBase({
  prostataRx,
  prostataRy,
  uretraW,
}: {
  prostataRx: number;
  prostataRy: number;
  uretraW: number;
}) {
  return (
    <>
      {/* Vejiga */}
      <ellipse cx="120" cy="42" rx="46" ry="27" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
      <text x="120" y="46" textAnchor="middle" fontSize="11" fill="#64748B">vejiga</text>
      {/* Próstata */}
      <ellipse
        cx="120"
        cy="155"
        rx={prostataRx}
        ry={prostataRy}
        fill="#E2ECF0"
        stroke="#4A90A4"
        strokeWidth="2.5"
      />
      {/* Uretra (canal) */}
      <rect
        x={120 - uretraW / 2}
        y="66"
        width={uretraW}
        height="190"
        rx={uretraW / 2}
        fill="#FFFFFF"
        stroke="#CBD5E1"
        strokeWidth="1.5"
      />
    </>
  );
}

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

const ventajas = [
  { icon: HeartPulse, t: "Preserva la eyaculación", d: "En la mayoría de los casos, a diferencia de la RTUP o el HoLEP." },
  { icon: Droplet, t: "Mínimamente invasivo", d: "Vapor de agua por la uretra, sin incisiones ni cortes." },
  { icon: Clock, t: "Ambulatorio", d: "Anestesia local con sedación ligera; dura pocos minutos." },
  { icon: CheckCircle, t: "Resultados sostenidos", d: "Mejoría mantenida a varios años en la mayoría de los pacientes." },
];

export default function RezumContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Crecimiento de próstata · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Rezum: tratar la próstata crecida sin cirugía mayor
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed mb-10">
            El Rezum usa vapor de agua para reducir el tejido que obstruye la salida de la
            orina. Es mínimamente invasivo, ambulatorio y —su gran ventaja—{" "}
            <strong className="text-editorial">preserva la eyaculación</strong> en la
            mayoría de los pacientes.
          </p>
          <div className="flex justify-center">
            <WAButtonConSelector
              mensaje="Hola Dr. Quiroz, me interesa el Rezum para la próstata y quisiera una valoración."
              motivo="rezum-hero"
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
          <H2>¿Qué es el Rezum?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              El Rezum es un tratamiento <strong>mínimamente invasivo</strong> para el
              crecimiento benigno de la próstata (hiperplasia prostática benigna). Utiliza{" "}
              <strong>vapor de agua estéril</strong> para eliminar, de forma controlada, el
              tejido prostático que estrecha el paso de la orina.
            </p>
            <p>
              No es un medicamento de por vida ni una cirugía mayor: se ubica{" "}
              <strong>en el punto medio</strong> entre ambos. Es una buena opción para
              hombres que ya no quieren depender del medicamento, pero que buscan evitar una
              cirugía más grande y, sobre todo, conservar su función sexual.
            </p>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section>
          <H2>¿Cómo funciona?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              A través de la uretra —sin incisiones— se aplican pequeñas inyecciones de
              vapor de agua en el tejido prostático sobrante. El vapor transfiere su energía
              a esas células, que <strong>mueren y el cuerpo reabsorbe poco a poco</strong>.
              Al reducirse el tejido, la próstata deja de obstruir y el flujo urinario
              mejora.
            </p>
            <p>
              El procedimiento dura <strong>pocos minutos</strong>, es ambulatorio y se
              realiza con anestesia local y sedación ligera — sin necesidad de anestesia
              general.
            </p>
          </div>

          {/* Esquema del mecanismo — ilustración original */}
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            <PasoRezum
              n={1}
              titulo="Se aplica el vapor"
              texto="A través de la uretra, sin incisiones, se inyecta vapor de agua en el tejido prostático que obstruye."
            >
              <AnatomiaBase prostataRx={55} prostataRy={58} uretraW={8} />
              {/* Aguja aplicando vapor hacia el tejido */}
              <line x1="124" y1="150" x2="152" y2="132" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="156" cy="129" r="4" fill="#4A90A4" />
              <circle cx="150" cy="120" r="3" fill="#4A90A4" opacity="0.8" />
              <circle cx="162" cy="136" r="2.6" fill="#4A90A4" opacity="0.7" />
              <circle cx="158" cy="118" r="2.2" fill="#4A90A4" opacity="0.6" />
            </PasoRezum>

            <PasoRezum
              n={2}
              titulo="Trata el tejido sobrante"
              texto="El vapor libera su energía térmica en una zona delimitada; esas células dejan de funcionar."
            >
              <AnatomiaBase prostataRx={55} prostataRy={58} uretraW={8} />
              {/* Zona tratada delimitada */}
              <ellipse cx="150" cy="130" rx="20" ry="16" fill="#B8A36A" opacity="0.18" stroke="#B8A36A" strokeWidth="1.8" strokeDasharray="5 3" />
              <ellipse cx="90" cy="130" rx="20" ry="16" fill="#B8A36A" opacity="0.18" stroke="#B8A36A" strokeWidth="1.8" strokeDasharray="5 3" />
              <circle cx="150" cy="130" r="2" fill="#B8A36A" />
              <circle cx="90" cy="130" r="2" fill="#B8A36A" />
            </PasoRezum>

            <PasoRezum
              n={3}
              titulo="Se reabsorbe y el flujo mejora"
              texto="Con las semanas el cuerpo reabsorbe el tejido tratado; la próstata reduce su volumen y la uretra se abre."
            >
              {/* Contorno previo (tamaño mayor) como referencia */}
              <ellipse cx="120" cy="155" rx="55" ry="58" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
              <AnatomiaBase prostataRx={40} prostataRy={50} uretraW={20} />
              {/* Flujo urinario libre */}
              <path d="M120 150 l-6 -9 h12 z" fill="#4A90A4" />
              <path d="M120 170 l-6 -9 h12 z" fill="#4A90A4" opacity="0.8" />
              <path d="M120 190 l-6 -9 h12 z" fill="#4A90A4" opacity="0.6" />
            </PasoRezum>
          </div>
          <p className="mt-3 text-xs text-slate-500 italic text-center">
            Ilustración esquemática con fines educativos. Cada caso se valora de forma individual.
          </p>
        </section>

        {/* VENTAJAS */}
        <section>
          <H2>Ventajas</H2>
          <div className="grid sm:grid-cols-2 gap-5">
            {ventajas.map((v) => (
              <motion.div
                key={v.t}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex gap-4"
              >
                <v.icon className="text-quirurgico shrink-0 mt-0.5" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-800">{v.t}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed mt-0.5">{v.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section>
          <H2>¿Para quién es el Rezum?</H2>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <ul className="space-y-3 text-slate-700 leading-relaxed">
              {[
                "Hombres con próstata de tamaño chico a mediano que quieren resolver sus síntomas urinarios.",
                "Quienes desean preservar la eyaculación y la función sexual.",
                "Pacientes que buscan dejar o reducir el medicamento sin pasar por una cirugía mayor.",
                "Como alternativa a seguir dependiendo de pastillas de por vida.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Para <strong>próstatas grandes</strong>, el tratamiento más adecuado suele ser
              el{" "}
              <Link href="/holep-cirugia-laser" className="text-acero font-medium hover:underline">
                HoLEP (cirugía láser)
              </Link>
              , que ofrece un resultado más definitivo e inmediato. La medición del volumen
              prostático define cuál conviene.
            </p>
          </div>
        </section>

        {/* QUÉ ESPERAR */}
        <section>
          <H2>Qué esperar: recuperación y resultados</H2>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {[
              "Se coloca una sonda urinaria temporal unos días (en promedio 3 a 7), mientras cede la inflamación inicial.",
              "Los resultados son graduales: la mejoría se nota en las primeras semanas y se consolida hacia los 2-3 meses.",
              "Puede haber molestias urinarias leves y pasajeras al inicio.",
              "La mejoría se mantiene a varios años en la mayoría de los pacientes; una parte puede requerir tratamiento adicional con el tiempo, algo más probable en próstatas grandes.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0">•</span>
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* COMPARACIÓN — interlinking */}
        <section>
          <H2>Rezum, HoLEP o medicamento: ¿cuál es para ti?</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            No hay una opción "mejor" para todos — hay una adecuada para tu caso, según el
            tamaño de tu próstata, tus síntomas y tus prioridades:
          </p>
          <div className="rounded-2xl border-l-4 border-acero bg-editorial p-5">
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/medicamentos-prostata" className="text-acero font-medium hover:underline">
                  Medicamentos para próstata →
                </Link>{" "}
                <span className="text-gris-profundo">— primer paso en síntomas leves.</span>
              </li>
              <li>
                <span className="text-gris-profundo font-medium">Rezum</span>{" "}
                <span className="text-gris-profundo">— próstatas chicas-medianas, preserva eyaculación.</span>
              </li>
              <li>
                <Link href="/holep-cirugia-laser" className="text-acero font-medium hover:underline">
                  HoLEP: cirugía láser →
                </Link>{" "}
                <span className="text-gris-profundo">— próstatas grandes, resultado definitivo.</span>
              </li>
              <li>
                <Link href="/hiperplasia-prostatica-benigna" className="text-acero font-medium hover:underline">
                  Guía completa del crecimiento de próstata (HPB) →
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿El Rezum duele o requiere anestesia general?">
              No requiere anestesia general. Es ambulatorio, con anestesia local y, en muchos
              casos, sedación ligera. Dura pocos minutos y la molestia suele ser leve.
            </FAQItem>
            <FAQItem q="¿El Rezum preserva la eyaculación?">
              Sí, es su principal ventaja: en la <strong>mayoría de los pacientes</strong>{" "}
              preserva la eyaculación y la función eréctil, a diferencia de la RTUP o el
              HoLEP, donde la eyaculación retrógrada es común.
            </FAQItem>
            <FAQItem q="¿En cuánto tiempo se ven los resultados del Rezum?">
              Son graduales: el tejido se reabsorbe poco a poco, así que la mejoría se nota en
              las primeras semanas y se consolida hacia los 2-3 meses. No es inmediato como
              una resección, pero es duradero.
            </FAQItem>
            <FAQItem q="¿Necesito catéter después del Rezum?">
              Sí, una sonda urinaria temporal unos días (en promedio 3 a 7) mientras cede la
              inflamación inicial. Es una molestia pasajera y parte normal de la recuperación.
            </FAQItem>
            <FAQItem q="¿Rezum o HoLEP: cuál me conviene?">
              Depende del tamaño de la próstata y tus prioridades. El Rezum es ideal para
              próstatas chicas-medianas y para preservar la eyaculación; el{" "}
              <Link href="/holep-cirugia-laser" className="text-acero font-medium hover:underline">
                HoLEP
              </Link>{" "}
              es más adecuado para próstatas grandes y ofrece un resultado más definitivo. Una{" "}
              <Link href="/uroflujometria-leon" className="text-acero font-medium hover:underline">
                uroflujometría
              </Link>{" "}
              y la medición del volumen ayudan a decidir.
            </FAQItem>
            <FAQItem q="¿El Rezum es permanente? ¿Podré dejar el medicamento?">
              Los estudios muestran mejoría sostenida a varios años. Como toda técnica que
              conserva tejido prostático, una proporción de pacientes puede requerir
              tratamiento adicional con el tiempo —algo más probable en próstatas grandes,
              por lo que el Rezum se reserva para próstatas chicas a medianas. Muchos
              pacientes logran dejar o reducir el medicamento. El resultado se valora de
              forma individual.
            </FAQItem>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">
            ¿El Rezum es para ti? Averígualo en una valoración
          </h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            El Dr. Quiroz mide tu próstata y tu flujo urinario y te dice, con honestidad, si
            el Rezum es la opción adecuada para tu caso o si te conviene otra.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, quiero una valoración para saber si el Rezum es adecuado para mi próstata."
            motivo="rezum-cta-final"
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
