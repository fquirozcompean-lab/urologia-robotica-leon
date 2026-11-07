"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertTriangle, ClipboardList } from "lucide-react";
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

const AREAS = [
  {
    titulo: "Próstata",
    texto: "Crecimiento de la próstata, prostatitis y cáncer de próstata.",
    links: [
      ["/hiperplasia-prostatica-benigna", "Crecimiento de próstata"],
      ["/cancer-prostata", "Cáncer de próstata"],
    ],
  },
  {
    titulo: "Riñón y vías urinarias",
    texto: "Cálculos (piedras), tumores del riñón, sangre en la orina e infecciones urinarias.",
    links: [
      ["/calculos-renales", "Cálculos renales"],
      ["/hematuria", "Sangre en la orina"],
    ],
  },
  {
    titulo: "Vejiga",
    texto: "Infecciones que se repiten, tumores de vejiga y problemas para vaciarla.",
    links: [
      ["/infeccion-urinaria", "Infección urinaria"],
      ["/cancer-vejiga", "Cáncer de vejiga"],
    ],
  },
  {
    titulo: "Salud sexual y reproductiva",
    texto: "Disfunción eréctil, VPH y verrugas, lesiones en el pene, testículos y vasectomía.",
    links: [
      ["/disfuncion-erectil", "Disfunción eréctil"],
      ["/vasectomia", "Vasectomía"],
    ],
  },
];

export default function QueHaceUrologoContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico-claro mb-4">
            Urología · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            ¿Qué hace un urólogo y cuándo debes ir?
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            El urólogo atiende mucho más que la próstata. Aquí te explicamos qué problemas trata,
            qué síntomas son motivo de consulta, cuándo es urgente y qué pasa en la primera visita.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 space-y-14">
        {/* QUÉ ES */}
        <section>
          <H2>¿Qué es un urólogo?</H2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              El urólogo es el <strong>médico y cirujano especialista</strong> en el aparato
              urinario de hombres y mujeres —riñones, uréteres, vejiga y uretra— y en el aparato
              reproductor masculino: próstata, testículos y pene.
            </p>
            <p>
              Diagnostica y trata estas enfermedades con medicamentos y, cuando hace falta, con
              cirugía, desde procedimientos por endoscopia hasta cirugía laparoscópica o robótica.
              Algunos urólogos, como el <Link href="/sobre-mi" className="text-acero font-medium hover:underline">Dr. Alejandro Quiroz</Link>,
              tienen además alta especialidad en <strong>urología oncológica</strong>: el
              tratamiento del cáncer de próstata, riñón, vejiga y testículo.
            </p>
          </div>
        </section>

        {/* QUÉ ATIENDE */}
        <section>
          <H2>¿Qué atiende un urólogo?</H2>
          <div className="grid sm:grid-cols-2 gap-5">
            {AREAS.map((a) => (
              <div key={a.titulo} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">{a.titulo}</h3>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">{a.texto}</p>
                <ul className="mt-3 space-y-1 text-sm">
                  {a.links.map(([href, label]) => (
                    <li key={href}>
                      <Link href={href} className="text-acero font-medium hover:underline">
                        {label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CUÁNDO IR */}
        <section>
          <H2>¿Cuándo ir al urólogo?</H2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Conviene agendar una consulta si tienes alguno de estos síntomas:
          </p>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {[
              "Sangre en la orina, aunque haya sido una sola vez.",
              "Ardor al orinar o infecciones urinarias que se repiten.",
              "Chorro débil, sensación de no vaciar la vejiga o levantarte varias veces por la noche a orinar.",
              "Dolor en el costado o la espalda baja que no se explica, o cálculos (piedras) previos.",
              "Antígeno prostático elevado o un tacto rectal anormal.",
              "Un bulto, cambio de tamaño o dolor en un testículo.",
              "Problemas de erección.",
              "Granitos, verrugas, llagas o manchas en el pene.",
              "Si deseas un método anticonceptivo definitivo (vasectomía).",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Si tienes síntomas urinarios, puedes medir qué tan intensos son antes de la consulta con
            el{" "}
            <Link href="/cuestionario-ipss-prostata" className="text-acero font-medium hover:underline">
              cuestionario IPSS
            </Link>
            .
          </p>
        </section>

        {/* URGENCIAS */}
        <section className="rounded-2xl border-l-4 border-rose-500 bg-rose-50 p-6 flex gap-4">
          <AlertTriangle className="text-rose-600 shrink-0 mt-1" size={26} aria-hidden="true" />
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Cuándo es urgente: acude a urgencias</h2>
            <ul className="space-y-1.5 text-slate-700 leading-relaxed">
              <li>• No puedes orinar aunque tengas ganas.</li>
              <li>
                • Dolor intenso y repentino en un testículo: puede ser una torsión, y las primeras
                horas son decisivas para salvarlo.
              </li>
              <li>• Fiebre con dolor en el costado o con ardor al orinar.</li>
              <li>• Sangre abundante en la orina o con coágulos.</li>
              <li>• Una erección dolorosa que dura más de 4 horas.</li>
            </ul>
          </div>
        </section>

        {/* REVISIÓN POR EDAD */}
        <section>
          <H2>¿A qué edad conviene una revisión aunque no tengas síntomas?</H2>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
              <span>
                <strong>Desde los 50 años:</strong> revisión de próstata con{" "}
                <Link href="/valores-antigeno-prostatico-edad" className="text-acero font-medium hover:underline">
                  antígeno prostático
                </Link>
                , o <strong>desde los 40-45</strong> si tu padre o un hermano tuvo cáncer de
                próstata.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-quirurgico font-bold mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
              <span>
                <strong>Entre los 15 y 35 años:</strong> es la edad más frecuente del{" "}
                <Link href="/cancer-testicular" className="text-acero font-medium hover:underline">
                  cáncer testicular
                </Link>
                ; la autoexploración mensual ayuda a detectarlo a tiempo.
              </span>
            </li>
          </ul>
        </section>

        {/* MUJERES */}
        <section>
          <H2>¿El urólogo también atiende mujeres?</H2>
          <p className="text-slate-700 leading-relaxed">
            Sí. El urólogo atiende el aparato urinario de las mujeres: cálculos renales,
            infecciones urinarias que se repiten, sangre en la orina y tumores del riñón o la
            vejiga, entre otros. Lo que no atiende son los órganos reproductores femeninos, que
            corresponden al ginecólogo.
          </p>
        </section>

        {/* PRIMERA CONSULTA */}
        <section>
          <H2>Qué pasa en la primera consulta</H2>
          <ol className="space-y-4">
            {[
              ["Conversación", "Te preguntamos tus síntomas, antecedentes y medicamentos, y revisamos los estudios que lleves."],
              ["Exploración", "Una revisión física respetuosa del abdomen y, según el motivo, de los genitales. El tacto rectal solo se hace cuando está indicado: se te explica antes y dura unos segundos."],
              ["Plan", "Te explicamos qué puede estar pasando y, si hace falta, qué estudios conviene hacer: examen de orina, antígeno prostático, ultrasonido o uroflujometría, entre otros."],
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
          <div className="mt-6 rounded-2xl border-l-4 border-acero bg-editorial p-5 flex gap-3">
            <ClipboardList className="text-acero shrink-0 mt-0.5" size={22} aria-hidden="true" />
            <div className="text-sm text-gris-profundo leading-relaxed">
              <p className="font-semibold text-petroleo">Qué llevar</p>
              <p className="mt-1">
                La lista de medicamentos que tomas, tus estudios previos (resultados de antígeno
                prostático, ultrasonidos, tomografías, análisis de orina) y las preguntas que
                quieras hacer.
              </p>
            </div>
          </div>
        </section>

        {/* COSTO */}
        <section>
          <H2>¿Cuánto cuesta la consulta con el urólogo en León?</H2>
          <p className="text-slate-700 leading-relaxed">
            La consulta con el Dr. Alejandro Quiroz tiene un costo <strong>desde $1,000 MXN</strong>.
            Si necesitas estudios o algún procedimiento, se te explica para qué sirven y su costo
            antes de realizarlos. Atiende en Hospital Ángeles León (lunes, martes y jueves) y en
            Hospital Christus Muguerza Altagracia (miércoles y viernes).
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <H2>Preguntas frecuentes</H2>
          <div className="space-y-4">
            <FAQItem q="¿Qué hace un urólogo?">
              El urólogo es el médico y cirujano especialista en el aparato urinario de hombres y
              mujeres (riñones, uréteres, vejiga y uretra) y en el aparato reproductor masculino
              (próstata, testículos y pene). Diagnostica y trata problemas como crecimiento de
              próstata, cálculos renales, infecciones urinarias, disfunción eréctil y cánceres
              urológicos, con medicamentos o cirugía.
            </FAQItem>
            <FAQItem q="¿Cuándo debo ir al urólogo?">
              Cuando tengas sangre en la orina, ardor o infecciones urinarias que se repiten,
              chorro débil o te levantes varias veces a orinar por la noche, dolor en el costado,
              antígeno prostático elevado, un bulto en un testículo, problemas de erección o
              lesiones en el pene. Si no puedes orinar o tienes dolor intenso y repentino en un
              testículo, acude a urgencias.
            </FAQItem>
            <FAQItem q="¿A qué edad debe un hombre ir al urólogo?">
              Sin síntomas, se recomienda una revisión de próstata desde los 50 años, o desde los
              40-45 si hay antecedentes familiares de cáncer de próstata. Con síntomas, a cualquier
              edad. Entre los 15 y 35 años conviene la autoexploración testicular mensual.
            </FAQItem>
            <FAQItem q="¿El urólogo también atiende mujeres?">
              Sí. Atiende el aparato urinario de las mujeres: cálculos renales, infecciones
              urinarias que se repiten, sangre en la orina y tumores del riñón o la vejiga, entre
              otros. Los órganos reproductores femeninos los atiende el ginecólogo.
            </FAQItem>
            <FAQItem q="¿Cuánto cuesta una consulta con el urólogo en León?">
              La consulta con el Dr. Alejandro Quiroz tiene un costo desde $1,000 MXN. Si necesitas
              estudios o algún procedimiento, se te explica para qué sirven y su costo antes de
              realizarlos.
            </FAQItem>
            <FAQItem q="¿En la consulta con el urólogo siempre se hace tacto rectal?">
              No. El tacto rectal solo se hace cuando está indicado, por ejemplo en la revisión de
              la próstata. Se te explica antes, dura unos segundos y aporta información que el
              antígeno prostático por sí solo no da.
            </FAQItem>
            <FAQItem q="¿Qué debo llevar a mi primera consulta con el urólogo?">
              La lista de medicamentos que tomas, tus estudios previos (resultados de antígeno
              prostático, ultrasonidos, tomografías o análisis de orina) y las preguntas que
              quieras hacer.
            </FAQItem>
            <FAQItem q="¿Qué diferencia hay entre un urólogo y un nefrólogo?">
              El urólogo es cirujano y atiende problemas del aparato urinario como cálculos,
              obstrucciones, sangre en la orina, próstata y tumores. El nefrólogo atiende la
              función del riñón, como la enfermedad renal crónica y la diálisis. Con frecuencia
              trabajan en equipo.
            </FAQItem>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-petroleo text-editorial p-8 text-center">
          <h2 className="text-2xl font-bold font-sans mb-3">Agenda tu consulta</h2>
          <p className="font-serif text-editorial/85 mb-6 max-w-xl mx-auto">
            Dr. Alejandro Quiroz Compeán, urólogo oncólogo certificado por CONAMEU. Hospital
            Ángeles León y Hospital Christus Muguerza Altagracia.
          </p>
          <WAButtonConSelector
            mensaje="Hola Dr. Quiroz, quiero agendar una consulta de urología."
            motivo="que-hace-urologo-cta-final"
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
