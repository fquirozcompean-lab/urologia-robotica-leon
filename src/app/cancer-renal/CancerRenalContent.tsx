"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackWhatsApp } from "@/lib/analytics";

const WHATSAPP_NUMBER = "5214776330492";
const WA_MSG = "Hola Dr. Quiroz, quiero agendar una valoración oncológica por un tumor renal.";

function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

const Button = ({ className = "", children, ...props }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {...(props as any)}
    className={
      "px-5 py-2 rounded-2xl font-medium shadow-sm transition-all hover:shadow-md active:scale-[0.98] " +
      className
    }
  >
    {children}
  </motion.button>
);

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className = "", children }: CardProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={
      "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg transition " +
      className
    }
  >
    {children}
  </motion.div>
);

function FAQItem({
  q,
  children,
  highlight,
}: {
  q: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl border p-5 shadow-sm ${
        highlight ? "bg-blue-50 border-blue-300" : "bg-white border-slate-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-medium flex items-center justify-between"
      >
        <span>{q}</span>
        <span className="text-slate-500 ml-4 flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-sm text-slate-700 leading-relaxed"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

type TreatmentItem = {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
  badge: string | null;
  indication: string;
  hospitalization: string;
  description: string;
  pros: string[];
  cons: string[];
};

type TreatmentGroup = {
  groupTitle: string;
  groupDesc: string;
  groupColor: string;
  items: TreatmentItem[];
};

const treatmentGroups: TreatmentGroup[] = [
  {
    groupTitle: "Vigilancia Activa",
    groupDesc: "Para tumores muy pequeños en pacientes seleccionados",
    groupColor: "text-teal-700",
    items: [
      {
        id: "vigilancia",
        name: "Vigilancia Activa con Seguimiento por Imagen",
        tag: "Tumores <2 cm seleccionados",
        tagColor: "bg-teal-100 text-teal-700",
        badge: null,
        indication: "Tumores <2 cm, alto riesgo quirúrgico, expectativa de vida limitada",
        hospitalization: "Sin hospitalización",
        description:
          "Para tumores renales muy pequeños (generalmente <2 cm) en pacientes con comorbilidades significativas, alto riesgo quirúrgico o expectativa de vida limitada, la vigilancia activa es una opción válida. Los estudios muestran que los tumores pequeños tienen una tasa de crecimiento lenta y baja probabilidad de metástasis a corto plazo. El seguimiento incluye TAC o resonancia magnética cada 6 meses el primer año y luego anualmente. Si el tumor crece o cambia de características, se reevalúa la indicación quirúrgica.",
        pros: [
          "Sin riesgos quirúrgicos",
          "Preserva función renal completamente",
          "Válida para tumores de crecimiento lento",
          "Permite monitorear la evolución antes de intervenir",
        ],
        cons: [
          "Requiere compromiso con seguimiento estricto de por vida",
          "Riesgo de progresión si el tumor crece",
          "Ansiedad asociada al seguimiento",
          "No aplica para la mayoría de los tumores renales",
        ],
      },
    ],
  },
  {
    groupTitle: "Nefrectomía Parcial — Preservando tu Riñón",
    groupDesc: "Cuando es posible, el objetivo es curar el cáncer y conservar el riñón",
    groupColor: "text-blue-700",
    items: [
      {
        id: "parcial-robotica",
        name: "Nefrectomía Parcial Robótica",
        tag: "Preservación renal máxima",
        tagColor: "bg-blue-100 text-blue-700",
        badge: "Tecnología avanzada",
        indication: "Tumores <7 cm en localización favorable o cuando la preservación es esencial",
        hospitalization: "2–3 días",
        description:
          "La nefrectomía parcial robótica es la técnica más avanzada para extirpar el tumor y conservar la mayor cantidad posible de tejido renal sano. El sistema robótico ofrece visión tridimensional magnificada e instrumentos articulados que imitan el movimiento de la mano humana con mayor precisión. Esto es especialmente valioso en tumores complejos o de localización central, donde la reconstrucción del riñón tras la resección requiere sutura precisa y rápida para minimizar el tiempo de isquemia (tiempo sin flujo sanguíneo al riñón). El Dr. Quiroz tiene experiencia específica en esta técnica adquirida en el Hospital Israelita Albert Einstein de São Paulo.",
        pros: [
          "Máxima preservación de tejido renal sano",
          "Visión 3D magnificada para resección y sutura precisas",
          "Menor tiempo de isquemia renal — menos daño al riñón",
          "Sin incisiones grandes — 4-5 pequeños cortes de 1 cm",
          "Hospitalización corta (2–3 días)",
          "Recuperación más rápida que cirugía abierta",
        ],
        cons: [
          "Mayor costo que laparoscopia o cirugía abierta",
          "No disponible en todos los centros",
          "No todos los tumores son candidatos (localización, tamaño)",
        ],
      },
      {
        id: "parcial-laparoscopica",
        name: "Nefrectomía Parcial Laparoscópica",
        tag: "Mínimamente invasiva",
        tagColor: "bg-indigo-100 text-indigo-700",
        badge: null,
        indication: "Tumores <7 cm en localización favorable (polar, exofítico)",
        hospitalization: "2–3 días",
        description:
          "La nefrectomía parcial laparoscópica es una técnica mínimamente invasiva con excelente trayectoria y resultados oncológicos probados. A través de 3-4 pequeñas incisiones se introduce una cámara y los instrumentos quirúrgicos para extirpar el tumor preservando el tejido renal sano. Es especialmente indicada para tumores de localización favorable (polo renal, exofíticos) donde la reconstrucción es más accesible. Requiere alta experiencia del cirujano para controlar el sangrado y realizar la sutura del riñón dentro del tiempo de isquemia objetivo.",
        pros: [
          "Preserva el riñón con resultados oncológicos excelentes",
          "Técnica mínimamente invasiva probada con años de seguimiento",
          "Incisiones pequeñas — menor dolor postoperatorio",
          "Hospitalización corta (2–3 días)",
          "Menor costo que abordaje robótico",
        ],
        cons: [
          "Técnicamente más demandante que la robótica en tumores complejos",
          "Mayor tiempo de isquemia en tumores centrales vs robótica",
          "Requiere cirujano con alta experiencia laparoscópica",
        ],
      },
      {
        id: "parcial-abierta",
        name: "Nefrectomía Parcial Abierta",
        tag: "Tumores complejos",
        tagColor: "bg-slate-100 text-slate-700",
        badge: null,
        indication: "Tumores centrales muy complejos, anatomía difícil para abordaje mínimo invasivo",
        hospitalization: "4–5 días",
        description:
          "La nefrectomía parcial abierta sigue siendo una opción válida para tumores de alta complejidad — completamente centrales, endofíticos o con anatomía vascular difícil — donde el abordaje mínimamente invasivo no garantiza la resección completa ni un tiempo de isquemia adecuado. A través de una incisión en el flanco se accede directamente al riñón, permitiendo enfriarlo con hielo (hipotermia) para prolongar el tiempo tolerado sin flujo sanguíneo hasta 30-35 minutos, lo que facilita resecciones más complejas.",
        pros: [
          "Permite hipotermia renal — más tiempo de isquemia tolerado",
          "Acceso directo para resecciones muy complejas",
          "Sin límite de tiempo para la reconstrucción del riñón",
          "Válida cuando abordaje mínimamente invasivo no es seguro",
        ],
        cons: [
          "Incisión mayor (10-15 cm en flanco)",
          "Mayor dolor postoperatorio",
          "Hospitalización más larga (4–5 días)",
          "Recuperación más lenta (4–6 semanas)",
        ],
      },
    ],
  },
  {
    groupTitle: "Nefrectomía Radical — Cuando Es Necesario Extirpar el Riñón",
    groupDesc: "Tumores grandes, centrales o con extensión vascular",
    groupColor: "text-slate-700",
    items: [
      {
        id: "radical-laparoscopica",
        name: "Nefrectomía Radical Laparoscópica",
        tag: "Estándar de oro actual",
        tagColor: "bg-blue-100 text-blue-700",
        badge: "Primera opción",
        indication: "Tumores >7 cm sin trombo tumoral extenso, anatomía favorable",
        hospitalization: "2–3 días",
        description:
          "La nefrectomía radical laparoscópica es la técnica estándar para la extirpación completa del riñón en la mayoría de los casos. A través de 3-4 pequeñas incisiones de 0.5-1 cm se extirpa el riñón completo con su grasa perirrenal y, cuando está indicado, la glándula suprarrenal y ganglios regionales. Los resultados oncológicos son idénticos a la cirugía abierta con menor pérdida de sangre, menos dolor y recuperación significativamente más rápida. Es la primera opción en la práctica del Dr. Quiroz para nefrectomía radical en casos estándar.",
        pros: [
          "Resultados oncológicos idénticos a cirugía abierta",
          "Incisiones mínimas — solo 3-4 cortes de 0.5-1 cm",
          "Menor sangrado y menos transfusiones",
          "Recuperación rápida: trabajo sedentario en 2 semanas",
          "Hospitalización corta (2–3 días)",
          "Menos dolor que cirugía abierta",
        ],
        cons: [
          "No ideal para tumores muy grandes (>15 cm)",
          "Trombo tumoral extenso puede requerir abordaje robótico o abierto",
          "Requiere cirujano con experiencia laparoscópica",
        ],
      },
      {
        id: "radical-robotica",
        name: "Nefrectomía Radical Robótica",
        tag: "Casos complejos",
        tagColor: "bg-indigo-100 text-indigo-700",
        badge: null,
        indication: "Trombo tumoral en vena renal o cava, obesidad severa, anatomía compleja",
        hospitalization: "2–4 días",
        description:
          "La nefrectomía radical robótica aporta mayor valor en casos de alta complejidad donde la disección precisa de estructuras vasculares es crítica: trombo tumoral en la vena renal o en la vena cava inferior (niveles I-II), obesidad severa, o anatomía vascular anómala. La visión 3D magnificada y los instrumentos articulados facilitan la disección alrededor de grandes vasos con menor riesgo de sangrado. En casos estándar, los resultados son equivalentes a la laparoscopia convencional.",
        pros: [
          "Disección vascular precisa — clave en trombo tumoral",
          "Visión magnificada 3D para estructuras difíciles",
          "Útil en obesidad severa donde la laparoscopia es más difícil",
          "Menor sangrado en casos complejos",
          "Hospitalización equivalente a laparoscopia",
        ],
        cons: [
          "Mayor costo que laparoscopia convencional",
          "No necesario en casos estándar donde la laparoscopia funciona bien",
          "Requiere entrenamiento específico en robótica",
        ],
      },
      {
        id: "radical-abierta",
        name: "Nefrectomía Radical Abierta",
        tag: "Tumores muy grandes o invasión extensa",
        tagColor: "bg-slate-100 text-slate-700",
        badge: null,
        indication: "Tumores >15 cm, trombo caval suprahepático, invasión a órganos adyacentes",
        hospitalization: "4–6 días",
        description:
          "La nefrectomía radical abierta se reserva para tumores de gran tamaño (>15 cm), trombo tumoral que se extiende por encima del hígado en la vena cava (niveles III-IV) que puede requerir cirugía cardiovascular conjunta, o cuando el tumor invade estructuras adyacentes (intestino, páncreas, hígado). A través de una incisión abdominal o en el flanco se obtiene el acceso necesario para una disección segura en estas situaciones de alta complejidad. En trombo caval extenso puede requerirse derivación cardiopulmonar con cirujano cardiovascular.",
        pros: [
          "Acceso completo para tumores gigantes",
          "Permite manejo de trombo caval extenso",
          "Control vascular directo en situaciones de alto riesgo de sangrado",
          "Indicada cuando los abordajes mínimamente invasivos no son seguros",
        ],
        cons: [
          "Incisión grande (15-25 cm)",
          "Mayor sangrado y posible transfusión",
          "Hospitalización más prolongada (4–6 días)",
          "Recuperación más lenta (4–6 semanas)",
        ],
      },
    ],
  },
  {
    groupTitle: "Terapias Ablativas",
    groupDesc: "Para pacientes no candidatos a cirugía",
    groupColor: "text-teal-700",
    items: [
      {
        id: "ablacion",
        name: "Crioablación o Radiofrecuencia",
        tag: "Tumores <3 cm, alto riesgo quirúrgico",
        tagColor: "bg-teal-100 text-teal-700",
        badge: null,
        indication: "Tumores <3 cm, comorbilidades severas, tumores múltiples o bilaterales",
        hospitalization: "1 día o ambulatorio",
        description:
          "Las terapias ablativas destruyen el tumor mediante frío extremo (crioablación) o calor (radiofrecuencia) a través de agujas introducidas por vía percutánea guiadas por imagen (TAC o ultrasonido), sin cirugía. Son alternativas para pacientes que no pueden someterse a cirugía por riesgo anestésico elevado, función renal muy comprometida, tumores múltiples o bilaterales. La crioablación tiene mejor evidencia en tumores renales. La tasa de éxito es alta para tumores <3 cm, pero las tasas de recurrencia son mayores que con cirugía y el seguimiento debe ser más estricto.",
        pros: [
          "Sin cirugía ni anestesia general (sedación moderada)",
          "Procedimiento ambulatorio o 1 día de hospitalización",
          "Preserva función renal",
          "Opción válida cuando la cirugía es de alto riesgo",
          "Puede repetirse si hay recurrencia local",
        ],
        cons: [
          "Tasas de recurrencia local más altas que cirugía",
          "No aplica para tumores >3 cm",
          "Seguimiento más estricto a largo plazo",
          "No obtiene tejido para análisis patológico completo",
        ],
      },
    ],
  },
  {
    groupTitle: "Terapias Sistémicas — Enfermedad Metastásica",
    groupDesc: "En coordinación con oncología médica",
    groupColor: "text-slate-600",
    items: [
      {
        id: "sistemico",
        name: "Inmunoterapia y Terapias Dirigidas",
        tag: "Cáncer renal metastásico",
        tagColor: "bg-slate-100 text-slate-700",
        badge: null,
        indication: "Cáncer renal con metástasis (estadio IV) o recurrencia sistémica",
        hospitalization: "Ambulatorio (infusiones periódicas)",
        description:
          "El cáncer renal metastásico se trata con terapias sistémicas en coordinación estrecha con oncología médica. La inmunoterapia ha revolucionado el pronóstico: la combinación de inhibidores de checkpoint (nivolumab + ipilimumab, pembrolizumab + axitinib) es el estándar de primera línea en la mayoría de los pacientes. Las terapias dirigidas contra VEGF (sunitinib, pazopanib, cabozantinib) e inhibidores de mTOR (everolimus) son opciones de segunda línea o en perfiles específicos. En casos seleccionados con enfermedad metastásica de bajo volumen, la nefrectomía citorreductiva (extirpar el tumor primario) antes de la terapia sistémica puede mejorar la respuesta al tratamiento — decisión que siempre se toma en equipo multidisciplinario.",
        pros: [
          "Inmunoterapia ha mejorado significativamente el pronóstico en estadio IV",
          "Opciones múltiples de primera y segunda línea",
          "Tratamiento ambulatorio (infusiones o pastillas)",
          "Manejo multidisciplinario optimizado",
        ],
        cons: [
          "No curativo en la mayoría de los casos metastásicos",
          "Efectos secundarios inmunológicos (fatiga, diarrea, toxicidad tiroidea)",
          "Requiere seguimiento oncológico estrecho",
          "Pronóstico más reservado que enfermedad localizada",
        ],
      },
    ],
  },
];

export default function CancerRenalContent() {
  const [openTreatment, setOpenTreatment] = useState<string | null>(null);

  return (
    <div className="bg-white text-gris-profundo">
      <main>
        {/* BREADCRUMB */}
        <div className="bg-petroleo px-4 pt-4 pb-2">
          <div className="max-w-6xl mx-auto">
            <nav className="text-xs text-editorial/60 font-sans" aria-label="breadcrumb">
              <Link href="/" className="hover:text-editorial transition">Inicio</Link>
              <span className="mx-2">›</span>
              <span className="text-editorial/90">Cáncer Renal</span>
            </nav>
          </div>
        </div>

        {/* HERO */}
        <section className="relative bg-petroleo text-editorial py-24 px-4">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-quirurgico to-acero" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-5xl mx-auto text-center"
          >
            <p className="text-quirurgico font-sans font-semibold text-sm uppercase tracking-widest mb-4">
              Urología Oncológica · León, Guanajuato
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
              Cáncer Renal en León, Guanajuato: Cirugía Mínimamente Invasiva y Preservación de la Función Renal
            </h1>
            <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-4">
              Nefrectomía parcial robótica y laparoscópica — curamos el cáncer preservando tu función renal cuando es posible.
            </p>
            <p className="text-quirurgico font-sans font-medium italic mb-10">
              "No todos los tumores renales requieren extirpar el riñón completo — preservar tu función renal es tan importante como curar el cáncer."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("cancer-renal")}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-acero text-editorial px-8 py-4 rounded-lg font-bold font-sans hover:bg-acero/90 transition-colors shadow-lg cursor-pointer"
                >
                  Agenda tu valoración oncológica
                </motion.div>
              </a>
            </div>
          </motion.div>
        </section>

        {/* ¿QUÉ ES? */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-slate-900">¿Qué es el Cáncer Renal?</h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  El cáncer renal (o cáncer de riñón) es un tumor maligno que se origina en las
                  células del riñón. Es el <strong>tercer cáncer urológico más frecuente</strong>,
                  más común en hombres (2:1) y con pico de incidencia entre los 60 y 70 años.
                </p>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Lo que hace particular a este cáncer es que{" "}
                  <strong>el 50–60% de los casos se detectan de forma accidental</strong> en
                  estudios de imagen (TAC o ultrasonido) realizados por otras razones — dolor
                  abdominal, revisión rutinaria, estudio de otra enfermedad. El paciente no
                  tenía ningún síntoma relacionado al riñón.
                </p>
                <div className="mt-5 rounded-2xl bg-blue-50 border border-blue-200 p-5">
                  <h3 className="font-bold text-blue-900 mb-2">Hallazgo incidental: una segunda oportunidad</h3>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Que el tumor se haya encontrado accidentalmente es, en realidad, una ventaja.
                    Los tumores detectados sin síntomas suelen ser más pequeños y en etapas más
                    tempranas, con <strong>pronóstico excelente</strong> tras el tratamiento
                    quirúrgico adecuado.
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  <h3 className="font-semibold text-slate-800">Tipos principales</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Carcinoma de células claras", pct: "70–75%", note: "Tipo más frecuente. Origen en el túbulo proximal renal." },
                      { name: "Carcinoma papilar", pct: "10–15%", note: "Tipo I y Tipo II. Pronóstico variable." },
                      { name: "Carcinoma cromófobo", pct: "5%", note: "Generalmente buen pronóstico." },
                      { name: "Carcinoma urotelial de pelvis renal", pct: "<10%", note: "Se origina en el revestimiento de la pelvis renal. Tratamiento diferente." },
                    ].map((t) => (
                      <div key={t.name} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                          <span className="text-xs font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">{t.pct}</span>
                        </div>
                        <p className="text-xs text-slate-500">{t.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Datos clave</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { stat: "50–60%", label: "se descubren accidentalmente sin síntomas", color: "bg-blue-50 border-blue-200 text-blue-800" },
                    { stat: "2:1", label: "hombres vs mujeres afectados", color: "bg-slate-100 border-slate-200 text-slate-800" },
                    { stat: "60–70", label: "años: edad de mayor incidencia", color: "bg-indigo-50 border-indigo-200 text-indigo-800" },
                    { stat: "95%", label: "supervivencia a 5 años en estadio I", color: "bg-teal-50 border-teal-200 text-teal-800" },
                  ].map((item) => (
                    <div key={item.stat} className={`rounded-2xl border p-4 text-center ${item.color}`}>
                      <p className="text-2xl font-bold">{item.stat}</p>
                      <p className="text-xs mt-1 leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold text-slate-800 mb-3">Factores de riesgo</h3>
                <div className="space-y-2">
                  {[
                    { factor: "Tabaquismo", detail: "Aumenta el riesgo 50–100%. El más importante modificable." },
                    { factor: "Obesidad", detail: "Especialmente en mujeres. Relacionado con niveles hormonales." },
                    { factor: "Hipertensión arterial", detail: "Riesgo 1.5–2× mayor. Mecanismo no completamente claro." },
                    { factor: "Enfermedad renal crónica", detail: "Especialmente en pacientes en diálisis de larga evolución." },
                    { factor: "Antecedentes familiares / genéticos", detail: "Síndrome de Von Hippel-Lindau, carcinoma renal hereditario." },
                    { factor: "Exposición ocupacional", detail: "Tricloroetileno, cadmio, asbestos en industrias específicas." },
                  ].map((f) => (
                    <div key={f.factor} className="rounded-xl border border-slate-200 bg-white p-3">
                      <p className="text-sm font-semibold text-slate-800">{f.factor}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{f.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SÍNTOMAS */}
        <section id="sintomas" className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Síntomas del Cáncer Renal
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              La realidad es que la mayoría de los tumores renales no causan síntomas hasta
              etapas avanzadas. Conocer los síntomas es importante para no ignorarlos cuando
              aparecen.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              <Card className="border-blue-200 bg-blue-50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-200 text-blue-800">Solo 10–15% de casos</span>
                </div>
                <h3 className="font-bold text-blue-900 mb-3">Tríada clásica</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">→</span>
                    <span><strong>Hematuria</strong> — sangre en la orina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">→</span>
                    <span><strong>Dolor en el flanco</strong> — costado o espalda baja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">→</span>
                    <span><strong>Masa palpable</strong> en el abdomen</span>
                  </li>
                </ul>
                <p className="text-xs text-blue-700 mt-3 italic">
                  Cuando aparecen los tres juntos el tumor suele ser avanzado. Hoy es raro verlos juntos.
                </p>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-800">Enfermedad avanzada</span>
                </div>
                <h3 className="font-bold text-amber-900 mb-3">Síntomas sistémicos</h3>
                <ul className="space-y-2 text-sm text-amber-800">
                  {[
                    "Pérdida de peso inexplicable",
                    "Fiebre persistente sin infección",
                    "Fatiga extrema",
                    "Anemia",
                    "Dolor óseo (metástasis óseas)",
                    "Varicocele derecho de aparición súbita",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="font-bold mt-0.5">→</span>{s}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-200 text-purple-800">Sin metástasis</span>
                </div>
                <h3 className="font-bold text-purple-900 mb-3">Síndromes paraneoplásicos</h3>
                <p className="text-xs text-purple-700 mb-3">Manifestaciones a distancia producidas por sustancias del tumor:</p>
                <ul className="space-y-2 text-sm text-purple-800">
                  {[
                    "Hipertensión arterial",
                    "Hipercalcemia (calcio elevado)",
                    "Eritrocitosis (hemoglobina elevada)",
                    "Disfunción hepática sin metástasis (síndrome de Stauffer)",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="font-bold mt-0.5">→</span>{s}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-slate-800 text-white p-7"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-300">
                La mayoría de los tumores renales se descubren sin síntomas
              </h3>
              <p className="text-slate-200 leading-relaxed">
                El 50–60% de los cánceres renales se detectan <strong className="text-white">accidentalmente</strong>{" "}
                en ultrasonidos, TAC o resonancias magnéticas realizadas por otras razones. Si un
                estudio de imagen reportó una masa o lesión en tu riñón — aunque no tengas ningún
                síntoma — agenda una valoración urológica. El hallazgo temprano es tu mejor aliado.
              </p>
              <div className="mt-5">
                <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("cancer-renal")}>
                  <Button className="bg-blue-600 text-white hover:bg-blue-500">
                    Valoración por masa renal
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DIAGNÓSTICO */}
        <section id="diagnostico" className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Diagnóstico y Estadificación
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              La evaluación completa caracteriza el tumor (tamaño, localización, extensión) y
              evalúa la función renal — dos pilares para elegir el mejor tratamiento.
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {[
                {
                  step: "01",
                  title: "TAC abdominopélvico con contraste",
                  desc: "El estudio de elección. Caracteriza el tumor con precisión milimétrica: tamaño, localización, relación con el sistema colector, invasión de grasa perirrenal, extensión a vena renal o cava, y ganglios regionales.",
                },
                {
                  step: "02",
                  title: "Resonancia magnética renal",
                  desc: "Alternativa si hay alergia al contraste yodado o para mejor caracterización de trombo tumoral en vena renal y cava, y evaluación de invasión a estructuras adyacentes.",
                },
                {
                  step: "03",
                  title: "TAC de tórax",
                  desc: "Para descartar metástasis pulmonares — el pulmón es el sitio de metástasis más frecuente en cáncer renal. Parte de la estadificación estándar.",
                },
                {
                  step: "04",
                  title: "Función renal (creatinina y TFG)",
                  desc: "La tasa de filtración glomerular determina la función renal global y es clave para planear la cirugía. El gammagrama renal diferencial evalúa cuánto contribuye cada riñón por separado.",
                },
                {
                  step: "05",
                  title: "Gammagrama óseo / TAC cerebral",
                  desc: "Se solicitan si hay síntomas sugestivos de metástasis óseas (dolor) o neurológicas. No son estudios de rutina en tumores pequeños y localizados.",
                },
                {
                  step: "06",
                  title: "Biopsia renal — casos seleccionados",
                  desc: "No es rutinaria. Se considera en masas pequeñas de caracterización incierta, sospecha de linfoma, o cuando el paciente no es candidato a cirugía y se planea ablación o sistémico sin confirmación quirúrgica.",
                },
              ].map((d) => (
                <Card key={d.step}>
                  <div className="text-3xl font-bold text-blue-200 mb-2">{d.step}</div>
                  <h3 className="font-semibold text-slate-900">{d.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{d.desc}</p>
                </Card>
              ))}
            </div>

            {/* ESTADIFICACIÓN */}
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-bold mb-5"
            >
              Estadios del Cáncer Renal y Pronóstico
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stage: "Estadio I", detail: "Tumor ≤7 cm, confinado al riñón", surv: "95%", color: "bg-teal-50 border-teal-200 text-teal-800", badge: "Excelente pronóstico" },
                { stage: "Estadio II", detail: "Tumor >7 cm, confinado al riñón", surv: "88%", color: "bg-blue-50 border-blue-200 text-blue-800", badge: "Muy buen pronóstico" },
                { stage: "Estadio III", detail: "Extensión local o ganglios regionales", surv: "60–70%", color: "bg-amber-50 border-amber-200 text-amber-800", badge: "Buen pronóstico" },
                { stage: "Estadio IV", detail: "Metástasis a distancia", surv: "10–15%", color: "bg-slate-100 border-slate-200 text-slate-700", badge: "Mejorando con inmunoterapia" },
              ].map((s) => (
                <Card key={s.stage} className={`${s.color} border`}>
                  <h4 className="font-bold text-lg">{s.stage}</h4>
                  <p className="text-xs mt-1">{s.detail}</p>
                  <p className="text-3xl font-bold mt-3">{s.surv}</p>
                  <p className="text-xs mt-0.5">supervivencia a 5 años</p>
                  <p className="text-xs font-semibold mt-2 italic">{s.badge}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PRESERVACIÓN RENAL */}
        <section id="preservacion" className="bg-petroleo text-editorial py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Preservación de la Función Renal — Por Qué Es Tan Importante
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-300 mb-10 max-w-2xl text-lg"
            >
              Vivir con un solo riñón es posible. Pero mantener la mayor función renal posible
              protege tu salud cardiovascular y tu calidad de vida a largo plazo.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-200">Consecuencias de perder función renal</h3>
                {[
                  { title: "Mayor riesgo cardiovascular", desc: "La enfermedad renal crónica aumenta significativamente el riesgo de infarto al miocardio, accidente cerebrovascular e insuficiencia cardíaca." },
                  { title: "Posible necesidad de diálisis", desc: "Si el riñón contralateral tiene algún grado de daño previo (hipertensión, diabetes, edad avanzada), la pérdida del riñón operado puede acelerar la progresión a diálisis." },
                  { title: "Hipertensión de difícil control", desc: "La reducción de masa renal funcional contribuye a hipertensión arterial resistente y sus consecuencias." },
                  { title: "Anemia y alteraciones metabólicas", desc: "La función renal insuficiente afecta la producción de eritropoyetina (anemia) y el metabolismo del calcio y fósforo." },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl bg-white/10 border border-white/20 p-4">
                    <h4 className="font-semibold text-white">{c.title}</h4>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-200">Estrategias de preservación renal</h3>
                {[
                  { title: "Nefrectomía parcial cuando es técnicamente posible", desc: "La indicación principal: tumor ≤7 cm con localización favorable. Misma eficacia oncológica que la nefrectomía radical en tumores pequeños." },
                  { title: "Minimizar el tiempo de isquemia", desc: "El tiempo que el riñón pasa sin flujo sanguíneo durante la cirugía es clave. La meta es <25 minutos. La técnica robótica facilita esto en tumores complejos." },
                  { title: "Técnica de zero isquemia", desc: "En tumores seleccionados exofíticos (que sobresalen del riñón) es posible resecarlo sin pinzar el flujo sanguíneo, preservando al máximo la función." },
                  { title: "Isquemia selectiva", desc: "Solo se pinza la arteria que irriga el segmento del tumor, no todo el riñón — reduciendo el daño isquémico al tejido renal sano." },
                  { title: "Seguimiento postoperatorio", desc: "Control de creatinina, TFG, presión arterial e hidratación. Derivación a nefrología si TFG <45 mL/min para optimizar el manejo médico renal." },
                ].map((e) => (
                  <div key={e.title} className="rounded-2xl bg-white/10 border border-white/20 p-4">
                    <h4 className="font-semibold text-white text-sm">✓ {e.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRATAMIENTOS */}
        <section id="tratamientos" className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Opciones de Tratamiento
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-3 max-w-2xl"
            >
              La cirugía es el único tratamiento curativo para el cáncer renal localizado.
              Haz clic en cada opción para ver los detalles.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-blue-50 border border-blue-200 p-4 mb-8 max-w-2xl"
            >
              <p className="text-blue-900 text-sm font-medium">
                Nuestro objetivo: curar el cáncer preservando la mayor función renal posible.
                La elección entre nefrectomía parcial y radical depende del tamaño, localización
                del tumor y tu función renal — no de una sola técnica para todos.
              </p>
            </motion.div>

            <div className="space-y-10">
              {treatmentGroups.map((group) => (
                <div key={group.groupTitle}>
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <h3 className={`text-xl font-bold ${group.groupColor}`}>{group.groupTitle}</h3>
                    <p className="text-sm text-slate-500 mt-0.5">{group.groupDesc}</p>
                  </motion.div>
                  <div className="space-y-3">
                    {group.items.map((t) => {
                      const isOpen = openTreatment === t.id;
                      return (
                        <motion.div
                          key={t.id}
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                          className={`rounded-2xl border shadow-sm overflow-hidden transition-all ${
                            isOpen ? "border-blue-400 shadow-md" : "border-slate-200"
                          }`}
                        >
                          <button
                            onClick={() => setOpenTreatment(isOpen ? null : t.id)}
                            className="w-full text-left p-5 bg-white hover:bg-slate-50 transition"
                          >
                            <div className="flex items-center justify-between gap-4">
                              <div>
                                <div className="flex items-center gap-2 flex-wrap mb-1">
                                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${t.tagColor}`}>
                                    {t.tag}
                                  </span>
                                  {t.badge && (
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-700 text-white">
                                      {t.badge}
                                    </span>
                                  )}
                                </div>
                                <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                                  <span className="text-xs text-slate-500">Indicación: {t.indication}</span>
                                  <span className="text-xs text-slate-500">Hospital: {t.hospitalization}</span>
                                </div>
                              </div>
                              <span className="text-slate-400 flex-shrink-0 text-lg">{isOpen ? "−" : "+"}</span>
                            </div>
                          </button>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="px-5 pb-6 bg-white border-t border-slate-100"
                            >
                              <p className="text-sm text-slate-700 leading-relaxed mt-4 max-w-3xl">{t.description}</p>
                              <div className="grid sm:grid-cols-2 gap-5 mt-5">
                                <div>
                                  <h5 className="text-sm font-semibold text-green-700 mb-2">Ventajas</h5>
                                  <ul className="space-y-1">
                                    {t.pros.map((p) => (
                                      <li key={p} className="flex items-start gap-2 text-xs text-slate-700">
                                        <span className="text-green-600 font-bold mt-0.5">✓</span>{p}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-semibold text-amber-700 mb-2">Consideraciones</h5>
                                  <ul className="space-y-1">
                                    {t.cons.map((c) => (
                                      <li key={c} className="flex items-start gap-2 text-xs text-slate-700">
                                        <span className="text-amber-500 font-bold mt-0.5">→</span>{c}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="mt-5">
                                <a href={waLink(`Hola Dr. Quiroz, quiero información sobre ${t.name} para cáncer renal.`)} target="_blank" rel="noreferrer">
                                  <Button className="bg-blue-600 text-white hover:bg-blue-700 text-sm">
                                    Consultar sobre este tratamiento
                                  </Button>
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* TABLA COMPARATIVA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"
            >
              <table className="w-full text-sm">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold"></th>
                    <th className="text-left px-4 py-3 font-semibold">Cirugía Abierta</th>
                    <th className="text-left px-4 py-3 font-semibold">Laparoscópica</th>
                    <th className="text-left px-4 py-3 font-semibold">Robótica</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Incisión", open: "15–20 cm", lap: "3–4 cortes de 0.5–1 cm", rob: "4–5 cortes de 1 cm", bg: "bg-white" },
                    { label: "Dolor postoperatorio", open: "Moderado-severo", lap: "Leve-moderado", rob: "Leve-moderado", bg: "bg-slate-50" },
                    { label: "Hospitalización", open: "4–6 días", lap: "2–3 días", rob: "2–3 días", bg: "bg-white" },
                    { label: "Recuperación completa", open: "4–6 semanas", lap: "2–3 semanas", rob: "2–3 semanas", bg: "bg-slate-50" },
                    { label: "Sangrado", open: "Mayor", lap: "Menor", rob: "Menor", bg: "bg-white" },
                    { label: "Resultados oncológicos", open: "Excelentes", lap: "Excelentes", rob: "Excelentes", bg: "bg-slate-50" },
                    { label: "Costo relativo", open: "Menor", lap: "Intermedio", rob: "Mayor", bg: "bg-white" },
                  ].map((row) => (
                    <tr key={row.label} className={row.bg}>
                      <td className="px-4 py-3 font-semibold text-slate-700">{row.label}</td>
                      <td className="px-4 py-3 text-slate-600">{row.open}</td>
                      <td className="px-4 py-3 text-slate-600">{row.lap}</td>
                      <td className="px-4 py-3 text-slate-600">{row.rob}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm text-slate-500 mt-3 italic"
            >
              Los tres abordajes son oncológicamente equivalentes. La elección depende del tamaño
              y localización del tumor, la función renal y la experiencia del cirujano.
            </motion.p>
          </div>
        </section>

        {/* RECUPERACIÓN */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8"
            >
              ¿Qué Esperar Después de la Cirugía?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200 bg-blue-50">
                <h3 className="font-bold text-blue-900 mb-4">Primeras 48 horas (hospital)</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  {[
                    "Monitoreo en área de recuperación",
                    "Dolor controlado con analgésicos",
                    "Movilización temprana — mismo día de la cirugía",
                    "Alimentación oral al día siguiente",
                    "Sonda urinaria por 1–2 días",
                    "Alta hospitalaria en 2–3 días (mínima invasión)",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>{s}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card>
                <h3 className="font-bold text-slate-900 mb-4">Recuperación en casa (1–4 semanas)</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {[
                    "Reposo relativo las primeras 1–2 semanas",
                    "Trabajo sedentario: regreso en 2–3 semanas",
                    "Ejercicio ligero (caminar): desde la primera semana",
                    "Ejercicio moderado: desde las 4–6 semanas",
                    "Evitar cargar más de 10 kg por 6 semanas",
                    "Conducir: cuando no haya dolor ni tome opioides",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold mt-0.5 flex-shrink-0">→</span>{s}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card>
                <h3 className="font-bold text-slate-900 mb-4">Seguimiento oncológico</h3>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  El protocolo de seguimiento se personaliza según el estadio, el grado histológico
                  y la agresividad del tumor. En general incluye:
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {[
                    "TAC o resonancia de control a los 3–6 meses",
                    "Seguimiento anual por 5 años en tumores de bajo riesgo",
                    "Control de función renal (creatinina, TFG) periódico",
                    "Control de presión arterial",
                    "Seguimiento más estricto en tumores de alto riesgo",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-0.5 flex-shrink-0">•</span>{s}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* POR QUÉ DR. QUIROZ */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-slate-900">
                  Por Qué Elegir al Dr. Quiroz para Cáncer Renal
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  El <strong>Dr. Alejandro Quiroz Compeán</strong> realiza varias cirugías renales
                  al mes — la gran mayoría por vía mínimamente invasiva (laparoscópica o robótica).
                  Su formación en el <strong>INCMNSZ</strong>, donde el abordaje multidisciplinario
                  de tumores renales es estándar, y su alta especialidad en el{" "}
                  <strong>INCan</strong> le dan una perspectiva integral que va más allá de la
                  técnica quirúrgica.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Alto volumen quirúrgico — varias cirugías renales al mes, la mayoría mínimamente invasivas",
                    "Formación en INCMNSZ: abordaje multidisciplinario de tumores renales complejos",
                    "Alta especialidad en urología oncológica — Instituto Nacional de Cancerología (INCan)",
                    "Posgrado en cirugía robótica — Hospital Israelita Albert Einstein, São Paulo",
                    "Nefrectomía parcial robótica y laparoscópica con enfoque en preservar la función renal",
                    "Experiencia en nefrectomía radical con manejo de trombo tumoral",
                    "Seguimiento oncológico a largo plazo estructurado",
                    "Coordinación con oncología médica para enfermedad metastásica",
                    "Tecnología disponible en León — sin necesidad de viajar",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>{b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("cancer-renal")}>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                      Agendar valoración oncológica
                    </Button>
                  </a>
                  <Link href="/cancer-vejiga">
                    <Button className="bg-slate-100 text-slate-800 hover:bg-slate-200">
                      Cáncer de Vejiga
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <Card className="bg-slate-50 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Formación y certificaciones</h3>
                <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <li><strong>Especialidad en Urología:</strong> INCMNSZ — UNAM (Cédula 12465195) — Centro de referencia nacional en urología multidisciplinaria</li>
                  <li><strong>Alta Especialidad en Urología Oncológica:</strong> Instituto Nacional de Cancerología (INCan), CDMX</li>
                  <li><strong>Posgrado en Cirugía Robótica:</strong> Hospital Israelita Albert Einstein, São Paulo, Brasil</li>
                  <li><strong>Certificado:</strong> Consejo Nacional Mexicano de Urología (CONAMEU)</li>
                  <li><strong>Fundador:</strong> Programa de residencia de Urología, Hospital General de León — Tec de Monterrey</li>
                  <li><strong>Consultorios:</strong> Hospital Ángeles León (Cons. 615, Torre II) · Hospital Christus Muguerza Altagracia</li>
                </ul>
                <div className="mt-5 border-t border-slate-200 pt-4 text-xs text-slate-500">
                  C.P. 8860892 · C.E. 12465195 · Certificado CONAMEU
                </div>
              </Card>
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
              Preguntas Frecuentes sobre Cáncer Renal
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              <FAQItem q="¿Todos los tumores renales son cáncer?" highlight>
                No. Existen masas renales benignas — la más común es el <strong>angiomiolipoma</strong>
                (contiene grasa y vasos sanguíneos, detectable en TAC), seguido del{" "}
                <strong>oncocitoma</strong>. Sin embargo, muchos tumores renales no pueden
                distinguirse de un cáncer solo por imagen — requieren resección quirúrgica para
                análisis patológico definitivo. No se puede asumir que un tumor renal es benigno
                sin una evaluación especializada.
              </FAQItem>

              <FAQItem q="¿Puedo conservar mi riñón si tengo un tumor?">
                En muchos casos, sí. La <strong>nefrectomía parcial</strong> — extirpación solo
                del tumor preservando el riñón — es el tratamiento de elección para tumores
                menores de 7 cm en localización favorable. Tiene la misma eficacia oncológica
                que la extirpación completa del riñón y protege mejor tu función renal y salud
                cardiovascular a largo plazo. La viabilidad depende del tamaño, localización y
                complejidad del tumor.
              </FAQItem>

              <FAQItem q="¿Cuándo es necesario quitar el riñón completo?">
                La nefrectomía radical está indicada cuando el tumor es muy grande (&gt;7 cm),
                tiene una localización central que compromete el sistema colector del riñón, hay
                extensión a la vena renal o cava (trombo tumoral), el tumor es multifocal, o
                cuando técnicamente no es posible una resección parcial segura con márgenes
                libres.
              </FAQItem>

              <FAQItem q="¿La cirugía robótica es mejor que la laparoscópica para riñón?">
                Depende del caso. Para la <strong>nefrectomía parcial</strong>, la robótica aporta
                ventajas claras en tumores complejos o centrales: visión 3D, instrumentos
                articulados y sutura más rápida del riñón — lo que reduce el tiempo de isquemia.
                Para la <strong>nefrectomía radical</strong> en casos estándar, la laparoscopia
                convencional ofrece resultados equivalentes. El Dr. Quiroz utiliza la técnica más
                adecuada para cada caso, no una sola para todos.
              </FAQItem>

              <FAQItem q="¿Puedo vivir con un solo riñón?" highlight>
                Sí. La mayoría de las personas con un riñón lleva una vida completamente normal.
                El riñón restante tiene capacidad de hipertrofia compensatoria — aumenta su función
                hasta en un 70% de lo perdido. Sin embargo, la función renal total será menor, lo
                que aumenta el riesgo a largo plazo de hipertensión y enfermedad cardiovascular.
                Por eso preservar el riñón cuando es posible es siempre preferible.
              </FAQItem>

              <FAQItem q="¿Voy a necesitar diálisis después de la cirugía?">
                En la gran mayoría de los casos, <strong>no</strong>. Si el riñón contralateral
                (el que queda) es sano y funciona bien, la nefrectomía no provoca necesidad de
                diálisis. El riesgo aumenta si ya tienes enfermedad renal crónica preexistente,
                diabetes, hipertensión mal controlada o si se extirpa el único riñón funcionante.
                La función renal se evalúa cuidadosamente antes de la cirugía.
              </FAQItem>

              <FAQItem q="¿El cáncer renal se puede curar?">
                Sí, especialmente cuando se detecta temprano. El cáncer renal en estadio I (tumor
                ≤7 cm, confinado al riñón) tiene una supervivencia a 5 años superior al{" "}
                <strong>95%</strong> con cirugía adecuada. El estadio II alcanza el 88%. La
                cirugía es el único tratamiento con potencial curativo para enfermedad localizada.
                El cáncer renal metastásico tiene pronóstico más reservado, aunque la inmunoterapia
                moderna ha mejorado significativamente los resultados.
              </FAQItem>

              <FAQItem q="¿Cuánto tiempo dura la cirugía?">
                La <strong>nefrectomía radical laparoscópica</strong> tiene una duración de 2–3
                horas. La <strong>nefrectomía parcial robótica o laparoscópica</strong> de 2–4
                horas dependiendo de la complejidad del tumor. La nefrectomía con trombo tumoral
                o la cirugía abierta en tumores muy grandes pueden durar 4–6 horas. El Dr. Quiroz
                discute el tiempo estimado según tu caso específico.
              </FAQItem>

              <FAQItem q="¿La función renal se recupera después de nefrectomía parcial?">
                Después de la nefrectomía parcial puede haber una reducción temporal de la función
                renal relacionada con el tiempo de isquemia (flujo cortado durante la cirugía).
                En la mayoría de los casos, la función se recupera parcialmente en las semanas
                siguientes. La pérdida permanente de función depende de cuánto tejido renal sano
                se resecó y del tiempo de isquemia. En general la nefrectomía parcial preserva
                el 70–90% de la función del riñón operado.
              </FAQItem>

              <FAQItem q="¿Cuándo puedo regresar a trabajar?">
                Con cirugía mínimamente invasiva (laparoscópica o robótica): trabajo sedentario
                en <strong>2–3 semanas</strong>. Trabajo físico moderado en 4–6 semanas. Con
                cirugía abierta: trabajo sedentario en 4–6 semanas, trabajo físico en 6–8 semanas.
                La conducción se permite cuando no hay dolor significativo y el paciente no está
                tomando opioides — generalmente 1–2 semanas tras cirugía mínimamente invasiva.
              </FAQItem>

              <FAQItem q="¿Qué pasa si el cáncer ya se diseminó (metástasis)?">
                El cáncer renal metastásico se trata con terapias sistémicas: inmunoterapia
                (inhibidores de checkpoint como nivolumab + ipilimumab) y/o terapias dirigidas
                (inhibidores de tirosina kinasa). La inmunoterapia ha transformado el pronóstico
                de la enfermedad metastásica en los últimos años. En casos seleccionados con bajo
                volumen metastásico, extirpar el tumor primario (nefrectomía citorreductiva) puede
                mejorar la respuesta al tratamiento. El manejo es siempre multidisciplinario con
                oncología médica.
              </FAQItem>

              <FAQItem q="¿El cáncer renal es hereditario?" highlight>
                En la mayoría de los casos es esporádico. Sin embargo, entre el 5–8% de los
                cánceres renales tienen base genética: el síndrome de{" "}
                <strong>Von Hippel-Lindau</strong> (asociado a carcinoma de células claras),
                carcinoma papilar hereditario tipo 1, y otros. Estos pacientes pueden desarrollar
                múltiples tumores renales bilaterales a lo largo de su vida y requieren seguimiento
                especializado y asesoría genética. Si tienes antecedentes familiares de cáncer
                renal, menciónalo en la consulta.
              </FAQItem>
            </div>
          </div>
        </section>

        {/* SEGUNDA OPINIÓN CROSS-LINK */}
        <section className="bg-editorial py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-quirurgico mb-3">
              ¿Ya tienes un diagnóstico?
            </p>
            <h3 className="font-sans font-bold text-petroleo text-2xl mb-3">
              Solicita una valoración oncológica antes de decidir
            </h3>
            <p className="font-serif text-gris-profundo/75 mb-6 max-w-xl mx-auto">
              Si ya tienes un diagnóstico de tumor renal y quieres confirmar si puedes
              conservar el riñón o evaluar las opciones disponibles, el Dr. Quiroz puede
              darte una opinión especializada.
            </p>
            <Link
              href="/segunda-opinion-oncologica"
              className="inline-flex items-center gap-2 bg-acero text-editorial font-sans font-bold px-7 py-3 rounded-lg hover:bg-acero/90 transition-colors text-sm"
            >
              Ver segunda opinión oncológica →
            </Link>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className="bg-petroleo text-editorial py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              El cáncer renal detectado temprano es altamente curable.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-lg text-slate-200"
            >
              La cirugía mínimamente invasiva ofrece curación con recuperación rápida y,
              cuando es posible, preservación de tu función renal. Agenda tu valoración con
              el Dr. Quiroz en León, Guanajuato.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-2 text-blue-300 font-medium italic"
            >
              "Preservar tu función renal es tan importante como curar el cáncer."
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("cancer-renal")}>
                <Button className="bg-blue-600 text-white hover:bg-blue-500 text-base px-8 py-3">
                  Agenda tu valoración oncológica
                </Button>
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-sm text-slate-300 space-y-1"
            >
              <p>Hospital Ángeles León — Consultorio 615, Torre II · Lun, Mar, Jue</p>
              <p>Hospital Christus Muguerza Altagracia · Mié, Vie</p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
