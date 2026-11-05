"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { AlertTriangle, Lock } from "lucide-react";
import WAButton from "@/components/WAButton";
import { WA_DR } from "@/lib/contactos";

const FRECUENCIA = [
  "Ninguna",
  "Menos de 1 vez de cada 5",
  "Menos de la mitad de las veces",
  "Aproximadamente la mitad de las veces",
  "Más de la mitad de las veces",
  "Casi siempre",
];

const NOCHE = ["Ninguna", "1 vez", "2 veces", "3 veces", "4 veces", "5 veces o más"];

const CALIDAD = [
  "Encantado",
  "Muy satisfecho",
  "Más bien satisfecho",
  "Tan satisfecho como insatisfecho",
  "Más bien insatisfecho",
  "Muy insatisfecho",
  "Muy mal",
];

// Las 7 preguntas de síntomas suman el puntaje (0-35). La de calidad de vida se reporta aparte.
const PREGUNTAS = [
  { id: "vaciado", texto: "¿Cuántas veces ha tenido la sensación de no vaciar por completo la vejiga al terminar de orinar?", opciones: FRECUENCIA },
  { id: "frecuencia", texto: "¿Cuántas veces ha tenido que volver a orinar en las dos horas siguientes a haber orinado?", opciones: FRECUENCIA },
  { id: "intermitencia", texto: "¿Cuántas veces ha notado que, al orinar, el chorro se detiene y vuelve a empezar varias veces?", opciones: FRECUENCIA },
  { id: "urgencia", texto: "¿Cuántas veces le ha costado aguantarse las ganas de orinar?", opciones: FRECUENCIA },
  { id: "chorro", texto: "¿Cuántas veces ha notado que el chorro de orina es débil?", opciones: FRECUENCIA },
  { id: "esfuerzo", texto: "¿Cuántas veces ha tenido que apretar o hacer fuerza para empezar a orinar?", opciones: FRECUENCIA },
  { id: "noche", texto: "¿Cuántas veces suele levantarse a orinar desde que se acuesta por la noche hasta que se levanta por la mañana?", opciones: NOCHE },
];

const NIVELES = {
  leves: {
    nombre: "síntomas leves",
    rango: "0 a 7 puntos",
    color: "border-quirurgico",
    texto:
      "Con este puntaje, muchos hombres no necesitan tratamiento de inmediato: suele bastar con vigilancia y ajustes de hábitos. Conviene una valoración si los síntomas te molestan o aumentan, y mantener tu revisión de próstata según tu edad.",
  },
  moderados: {
    nombre: "síntomas moderados",
    rango: "8 a 19 puntos",
    color: "border-dorado",
    texto:
      "Este puntaje amerita una valoración urológica para encontrar la causa. Suele incluir exploración, antígeno prostático y una uroflujometría. Según el resultado, las opciones van desde hábitos y medicamentos hasta procedimientos mínimamente invasivos.",
  },
  severos: {
    nombre: "síntomas severos",
    rango: "20 a 35 puntos",
    color: "border-acero",
    texto:
      "Este puntaje amerita una valoración urológica pronto. Síntomas de esta intensidad pueden afectar tu calidad de vida y, en algunos casos, el vaciado de la vejiga. El tratamiento depende de la causa y del tamaño de la próstata, por lo que se define después de evaluarte.",
  },
};

function nivelDe(puntaje: number) {
  if (puntaje <= 7) return NIVELES.leves;
  if (puntaje <= 19) return NIVELES.moderados;
  return NIVELES.severos;
}

function Grupo({
  numero,
  texto,
  opciones,
  name,
  valor,
  onChange,
  sinContestar,
}: {
  numero: number;
  texto: string;
  opciones: string[];
  name: string;
  valor: number | undefined;
  onChange: (v: number) => void;
  sinContestar: boolean;
}) {
  return (
    <fieldset
      id={`pregunta-${name}`}
      className={`rounded-2xl border bg-white p-5 shadow-sm scroll-mt-24 ${
        sinContestar ? "border-red-600" : "border-slate-200"
      }`}
    >
      <legend className="sr-only">{texto}</legend>
      <p className="font-semibold text-slate-900" aria-hidden="true">
        <span className="text-acero">{numero}.</span> {texto}
      </p>
      {sinContestar && <p className="mt-1 text-sm text-red-700">Falta contestar esta pregunta.</p>}
      <div className="mt-3 grid gap-2">
        {opciones.map((op, i) => (
          <label
            key={op}
            className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm cursor-pointer transition-colors ${
              valor === i
                ? "border-acero bg-editorial font-medium text-petroleo"
                : "border-slate-200 text-slate-700 hover:border-acero"
            }`}
          >
            <input
              type="radio"
              name={name}
              checked={valor === i}
              onChange={() => onChange(i)}
              className="accent-[#1F5C73] w-4 h-4 shrink-0"
            />
            {op}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

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
        <span className="text-teal-600 text-xl shrink-0">{open ? "−" : "+"}</span>
      </button>
      <div hidden={!open} className="px-5 pb-5 text-slate-700 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function CuestionarioIpssContent() {
  const [respuestas, setRespuestas] = useState<Record<string, number>>({});
  const [calidad, setCalidad] = useState<number | undefined>(undefined);
  const [mostrarFaltantes, setMostrarFaltantes] = useState(false);
  const [resultado, setResultado] = useState<{ puntaje: number; calidad: number } | null>(null);
  const resultadoRef = useRef<HTMLElement>(null);

  const faltantes = [
    ...PREGUNTAS.filter((p) => respuestas[p.id] === undefined).map((p) => p.id),
    ...(calidad === undefined ? ["calidad"] : []),
  ];

  const editar = () => setResultado(null);

  const calcular = (e: React.FormEvent) => {
    e.preventDefault();
    if (faltantes.length > 0 || calidad === undefined) {
      setMostrarFaltantes(true);
      document.getElementById(`pregunta-${faltantes[0]}`)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const puntaje = PREGUNTAS.reduce((suma, p) => suma + respuestas[p.id], 0);
    setResultado({ puntaje, calidad });
    setMostrarFaltantes(false);
    requestAnimationFrame(() => {
      resultadoRef.current?.focus();
      resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const reiniciar = () => {
    setRespuestas({});
    setCalidad(undefined);
    setResultado(null);
    setMostrarFaltantes(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nivel = resultado ? nivelDe(resultado.puntaje) : null;

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Salud de la próstata · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            Cuestionario IPSS: ¿qué tan intensos son tus síntomas de próstata?
          </h1>
          <p className="text-lg md:text-xl font-serif text-editorial/85 leading-relaxed">
            8 preguntas, unos 2 minutos. Es el cuestionario internacional que usamos los
            urólogos para medir los síntomas urinarios. Tu resultado aparece aquí mismo.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 space-y-12">
        {/* CUESTIONARIO */}
        <section aria-labelledby="titulo-cuestionario">
          <h2 id="titulo-cuestionario" className="text-3xl font-bold text-slate-900 mb-2">
            Contesta pensando en el último mes
          </h2>
          <p className="flex items-start gap-2 text-sm text-slate-600 mb-6">
            <Lock className="text-acero shrink-0 mt-0.5" size={16} />
            Tus respuestas no se guardan ni se envían: el puntaje se calcula en tu navegador.
            Solo compartes tu resultado si tú decides agendar por WhatsApp.
          </p>

          <form onSubmit={calcular} onChange={editar} noValidate className="space-y-5">
            {PREGUNTAS.map((p, i) => (
              <Grupo
                key={p.id}
                numero={i + 1}
                texto={p.texto}
                opciones={p.opciones}
                name={p.id}
                valor={respuestas[p.id]}
                onChange={(v) => setRespuestas((r) => ({ ...r, [p.id]: v }))}
                sinContestar={mostrarFaltantes && respuestas[p.id] === undefined}
              />
            ))}
            <Grupo
              numero={8}
              texto="Si tuviera que pasar el resto de su vida con los síntomas urinarios que tiene ahora, ¿cómo se sentiría?"
              opciones={CALIDAD}
              name="calidad"
              valor={calidad}
              onChange={setCalidad}
              sinContestar={mostrarFaltantes && calidad === undefined}
            />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center bg-acero text-editorial font-sans font-bold px-8 py-4 rounded-lg hover:bg-acero/90 transition-colors"
            >
              Ver mi resultado
            </button>
            {mostrarFaltantes && faltantes.length > 0 && (
              <p role="alert" className="text-sm text-red-700 text-center">
                Faltan {faltantes.length}{" "}
                {faltantes.length === 1 ? "pregunta" : "preguntas"} por contestar.
              </p>
            )}
          </form>
        </section>

        {/* RESULTADO */}
        {resultado && nivel && (
          <section
            ref={resultadoRef}
            tabIndex={-1}
            aria-live="polite"
            aria-labelledby="titulo-resultado"
            className={`rounded-2xl border-2 ${nivel.color} bg-editorial p-6 md:p-8 scroll-mt-24 outline-none`}
          >
            <h2 id="titulo-resultado" className="text-sm font-sans font-bold uppercase tracking-widest text-acero">
              Tu resultado
            </h2>
            <p className="mt-2 text-5xl font-bold font-sans text-petroleo">
              {resultado.puntaje}
              <span className="text-2xl text-gris-profundo font-semibold"> de 35</span>
            </p>
            <p className="mt-1 text-xl font-semibold text-petroleo first-letter:uppercase">
              {nivel.nombre} <span className="text-base font-normal text-gris-profundo">({nivel.rango})</span>
            </p>
            <p className="mt-1 text-sm text-gris-profundo">
              Calidad de vida por los síntomas: {resultado.calidad} de 6 (&ldquo;
              {CALIDAD[resultado.calidad]}&rdquo;).
            </p>
            <p className="mt-4 text-gris-profundo leading-relaxed">{nivel.texto}</p>
            <p className="mt-3 text-sm text-gris-profundo leading-relaxed">
              Este resultado es orientativo: <strong>no es un diagnóstico</strong> y no indica
              por sí solo si tienes crecimiento de próstata u otra causa.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <WAButton
                telefono={WA_DR}
                sede="dr-directo"
                motivo="ipss-resultado"
                variant="green"
                mensaje={`Hola Dr. Quiroz, contesté el cuestionario IPSS en su sitio web. Mi puntaje fue ${resultado.puntaje} de 35 (${nivel.nombre}) y mi calidad de vida ${resultado.calidad} de 6. Quiero agendar una cita.`}
              >
                Agendar cita por WhatsApp
              </WAButton>
              <button
                type="button"
                onClick={reiniciar}
                className="text-acero font-sans font-medium hover:underline"
              >
                Volver a contestar
              </button>
            </div>
            <p className="mt-3 text-xs text-gris-profundo">
              Al hacer clic se abre WhatsApp con un mensaje que incluye tu puntaje. Tú decides si
              lo envías.
            </p>
          </section>
        )}

        {/* SEÑALES DE ALARMA */}
        <section className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5 flex gap-3">
          <AlertTriangle className="text-amber-700 shrink-0 mt-0.5" size={22} />
          <div>
            <h2 className="font-bold text-amber-900">
              Sin importar tu puntaje, consulta pronto si tienes:
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-amber-900">
              <li>• Sangre en la orina.</li>
              <li>• Imposibilidad para orinar (acude a urgencias).</li>
              <li>• Fiebre con dolor o ardor al orinar.</li>
              <li>• Dolor intenso en la espalda baja o el costado.</li>
            </ul>
          </div>
        </section>

        {/* CÓMO SE INTERPRETA */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Cómo se interpreta el IPSS?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            El puntaje suma las primeras 7 preguntas, cada una de 0 a 5 puntos. La pregunta 8 no se
            suma: mide cuánto te afectan los síntomas, y ayuda a decidir junto con el puntaje.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left">
              <caption className="sr-only">Interpretación del puntaje IPSS</caption>
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-5 py-3 text-sm font-semibold text-slate-800">Puntaje</th>
                  <th scope="col" className="px-5 py-3 text-sm font-semibold text-slate-800">Intensidad de los síntomas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="px-5 py-3 font-semibold text-petroleo">0 a 7</td><td className="px-5 py-3 text-slate-700">Leves</td></tr>
                <tr><td className="px-5 py-3 font-semibold text-petroleo">8 a 19</td><td className="px-5 py-3 text-slate-700">Moderados</td></tr>
                <tr><td className="px-5 py-3 font-semibold text-petroleo">20 a 35</td><td className="px-5 py-3 text-slate-700">Severos</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Si tus síntomas se deben al{" "}
            <Link href="/hiperplasia-prostatica-benigna" className="text-acero font-medium hover:underline">
              crecimiento de la próstata
            </Link>
            , las opciones incluyen{" "}
            <Link href="/medicamentos-prostata" className="text-acero font-medium hover:underline">
              medicamentos
            </Link>
            ,{" "}
            <Link href="/rezum-prostata" className="text-acero font-medium hover:underline">
              Rezum
            </Link>{" "}
            y{" "}
            <Link href="/holep-cirugia-laser" className="text-acero font-medium hover:underline">
              cirugía láser HoLEP
            </Link>
            . Para medir objetivamente cómo orinas existe la{" "}
            <Link href="/uroflujometria-leon" className="text-acero font-medium hover:underline">
              uroflujometría
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4">
            <FAQItem q="¿Qué es el cuestionario IPSS?">
              El IPSS (Puntuación Internacional de Síntomas Prostáticos) es un cuestionario de 8
              preguntas que se usa en todo el mundo para medir la intensidad de los síntomas
              urinarios y dar seguimiento a su tratamiento. Cuenta con una versión validada en español.
            </FAQItem>
            <FAQItem q="¿Un puntaje alto significa que tengo cáncer de próstata?">
              No. El IPSS mide síntomas, no su causa, y no sirve para detectar cáncer. Los síntomas
              urinarios suelen deberse al crecimiento benigno de la próstata, aunque también a
              infecciones, cálculos u otras causas. Y al revés: un puntaje bajo no descarta cáncer de
              próstata, que en etapas iniciales casi nunca da síntomas. Para eso sirve la revisión
              con antígeno prostático.
            </FAQItem>
            <FAQItem q="¿El cuestionario IPSS sustituye a la consulta con el urólogo?">
              No. Es una herramienta orientativa. El diagnóstico requiere una valoración que puede
              incluir exploración física, antígeno prostático, análisis de orina, ultrasonido y
              uroflujometría.
            </FAQItem>
            <FAQItem q="¿Qué hago si mi puntaje IPSS es moderado o severo?">
              Lo recomendable es agendar una valoración urológica para encontrar la causa de los
              síntomas. El tratamiento se decide con esa evaluación, según la causa, el tamaño de la
              próstata y cuánto te afectan los síntomas.
            </FAQItem>
            <FAQItem q="¿Cada cuánto conviene contestar el IPSS?">
              Sirve para comparar: tu urólogo puede pedirte contestarlo antes de iniciar un
              tratamiento y durante el seguimiento, para ver si los síntomas mejoran. También puedes
              repetirlo si notas que tus síntomas cambian.
            </FAQItem>
          </div>
        </section>
      </article>
    </main>
  );
}
