"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertTriangle, Receipt } from "lucide-react";
import WAButtonConSelector from "@/components/WAButtonConSelector";

function FAQItem({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-800">{q}</span>
        <span className="text-teal-700 text-xl shrink-0">{open ? "−" : "+"}</span>
      </button>
      <div hidden={!open} className="px-5 pb-5 text-slate-700 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-bold text-slate-900 mb-4">{children}</h2>;
}

const Bullet = () => (
  <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
);

export default function BiopsiaProstataContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico-claro mb-4">
            Diagnóstico de próstata · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Biopsia de próstata: cómo es, preparación y costo
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            La biopsia es la única forma de confirmar si hay cáncer de próstata. Aquí te
            explicamos cuándo se indica, cómo se hace, qué cuidados necesitas y cuánto cuesta.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 space-y-14">
        {/* CUÁNDO */}
        <section>
          <H2>¿Cuándo se indica una biopsia de próstata?</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Un antígeno prostático alto <strong>no lleva directo a la biopsia</strong>. Primero se
            confirma el resultado y, en la mayoría de los casos, se hace una{" "}
            <Link href="/resonancia-magnetica-prostata" className="text-acero font-medium hover:underline">
              resonancia magnética de próstata
            </Link>
            . La biopsia se recomienda cuando:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {[
              "El antígeno prostático sigue elevado y la resonancia muestra una zona sospechosa.",
              "El tacto rectal detecta un nódulo o una zona dura.",
              "Persiste la sospecha a pesar de una biopsia previa negativa.",
              "Estás en vigilancia activa de un cáncer de bajo riesgo y toca revisarlo.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <Bullet />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            ¿Te salió alto el antígeno?{" "}
            <Link href="/valores-antigeno-prostatico-edad" className="text-acero font-medium hover:underline">
              Consulta los valores según tu edad →
            </Link>
          </p>
        </section>

        {/* CÓMO SE HACE */}
        <section>
          <H2>¿Cómo se realiza?</H2>
          <ol className="space-y-4">
            {[
              ["En hospital y con sedación", "El procedimiento se hace en sala, con sedación a cargo de un anestesiólogo, para que estés cómodo. Es breve y te vas a casa el mismo día."],
              ["Guiada por ultrasonido", "Con un ultrasonido se visualiza la próstata y se toman pequeñas muestras de tejido con una aguja fina, de forma ordenada por toda la glándula."],
              ["Con fusión cognitiva", "Si tienes una resonancia, el Dr. Quiroz estudia antes sus imágenes y, durante la biopsia, dirige muestras adicionales a las zonas sospechosas. Así se aprovecha la información de la resonancia y no se depende solo del muestreo."],
              ["Análisis de patología", "Las muestras se envían al patólogo, que confirma si hay cáncer y qué tan agresivo es (escala de Gleason o grupo ISUP)."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-acero text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{t}</h3>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* PREPARACIÓN */}
        <section>
          <H2>Preparación</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Recibirás indicaciones por escrito según tu caso. En general incluyen:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {[
              "Avisar si tomas anticoagulantes o antiagregantes (como aspirina o clopidogrel): no los suspendas por tu cuenta; se indica si conviene pausarlos y cuándo.",
              "Tomar el antibiótico preventivo que se te indique.",
              "Hacer la preparación intestinal que se te explique.",
              "Acudir en ayuno, por la sedación, y con un acompañante que pueda llevarte a casa.",
              "Avisar si tienes fiebre, ardor al orinar o una infección reciente: la biopsia se pospone.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <Bullet />
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* DESPUÉS */}
        <section>
          <H2>Después de la biopsia</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            La mayoría de los pacientes retoma sus actividades habituales en uno o dos días. Es
            normal y no debe preocuparte:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {[
              "Un poco de sangre en la orina durante algunos días.",
              "Sangre en el semen, que puede durar algunas semanas.",
              "Algo de sangre en las evacuaciones los primeros días.",
              "Molestia leve en la zona, que cede con el analgésico indicado.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <Bullet />
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl border-l-4 border-rose-500 bg-rose-50 p-5 flex gap-3">
            <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={22} aria-hidden="true" />
            <div>
              <h3 className="font-bold text-slate-900">Busca atención de inmediato si tienes:</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>• Fiebre o escalofríos: la infección es poco frecuente, pero requiere atención urgente.</li>
                <li>• Imposibilidad para orinar.</li>
                <li>• Sangrado abundante o con coágulos que no disminuye.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RESULTADOS */}
        <section>
          <H2>El resultado</H2>
          <p className="text-slate-700 leading-relaxed">
            El reporte de patología se revisa contigo en consulta. Si no hay cáncer, se define el
            seguimiento según tu antígeno y tu resonancia. Si hay cáncer, el grupo ISUP y la
            extensión determinan las opciones: desde vigilancia activa en los casos de bajo riesgo
            hasta tratamiento con intención curativa.{" "}
            <Link href="/cancer-prostata" className="text-acero font-medium hover:underline">
              Conoce el diagnóstico y tratamiento del cáncer de próstata →
            </Link>
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Si ya tienes un resultado y quieres revisarlo con un urólogo oncólogo,{" "}
            <Link href="/segunda-opinion-oncologica" className="text-acero font-medium hover:underline">
              solicita una segunda opinión
            </Link>
            .
          </p>
        </section>

        {/* COSTO */}
        <section>
          <H2>¿Cuánto cuesta una biopsia de próstata en León?</H2>
          <div className="rounded-2xl border-l-4 border-acero bg-editorial p-5 flex gap-3">
            <Receipt className="text-acero shrink-0 mt-0.5" size={22} aria-hidden="true" />
            <div className="text-gris-profundo leading-relaxed">
              <p>
                La biopsia de próstata con el Dr. Quiroz tiene un costo{" "}
                <strong>desde $18,000 MXN</strong>, que incluye:
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Sala de procedimientos</li>
                <li>• Servicio de anestesiología</li>
                <li>• Equipo rentado</li>
                <li>• Estudio de patología</li>
              </ul>
              <p className="mt-2 text-sm">
                El costo final se confirma en la consulta, según tu caso.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿Qué es una biopsia de próstata?">
              Es un procedimiento en el que se toman pequeñas muestras de tejido de la próstata con
              una aguja fina, guiada por ultrasonido, para que el patólogo confirme o descarte el
              cáncer y, si lo hay, determine qué tan agresivo es.
            </FAQItem>
            <FAQItem q="¿La biopsia de próstata duele?">
              Se realiza con sedación a cargo de un anestesiólogo, así que durante el procedimiento
              estás cómodo. Después puede haber una molestia leve que cede con analgésicos, y algo de
              sangre en la orina, el semen o las evacuaciones por unos días.
            </FAQItem>
            <FAQItem q="¿Cuánto cuesta una biopsia de próstata en León?">
              La biopsia de próstata con el Dr. Alejandro Quiroz tiene un costo desde $18,000 MXN,
              que incluye la sala de procedimientos, el servicio de anestesiología, el equipo
              rentado y el estudio de patología. El costo final se confirma en la consulta, según tu
              caso.
            </FAQItem>
            <FAQItem q="¿Qué es la biopsia de próstata por fusión cognitiva?">
              Es una biopsia que aprovecha la resonancia magnética: el urólogo estudia antes las
              imágenes y, durante el procedimiento, dirige muestras adicionales a las zonas
              sospechosas usando el ultrasonido, además de las muestras ordenadas de toda la
              glándula.
            </FAQItem>
            <FAQItem q="¿Cuánto tarda el resultado de la biopsia de próstata?">
              Depende del laboratorio de patología; en general son algunos días. El resultado se
              revisa contigo en consulta para explicarte qué significa y cuáles son los siguientes
              pasos.
            </FAQItem>
            <FAQItem q="¿Es normal tener sangre en la orina o el semen después de la biopsia?">
              Sí. Es normal ver un poco de sangre en la orina por algunos días y en el semen hasta
              por algunas semanas. Debes buscar atención si tienes fiebre, escalofríos, no puedes
              orinar o el sangrado es abundante o con coágulos.
            </FAQItem>
            <FAQItem q="¿La biopsia puede hacer que el cáncer se extienda?">
              No hay evidencia de que la biopsia de próstata haga que el cáncer se disemine. Es un
              mito frecuente que puede retrasar un diagnóstico importante.
            </FAQItem>
            <FAQItem q="¿Qué pasa si la biopsia sale negativa pero el antígeno sigue alto?">
              Una biopsia negativa no descarta el cáncer por completo. Según el caso, se continúa con
              vigilancia del antígeno prostático, una resonancia si no se hizo antes y, si la
              sospecha persiste, una nueva biopsia dirigida.
            </FAQItem>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">Agenda una valoración</h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            Revisamos tu antígeno prostático y tus estudios para decidir si la biopsia es
            necesaria. Hospital Ángeles León y Hospital Christus Muguerza Altagracia.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, quisiera una valoración porque me indicaron una biopsia de próstata."
            motivo="biopsia-prostata-cta-final"
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
