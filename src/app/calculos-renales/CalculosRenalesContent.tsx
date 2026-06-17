"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackWhatsApp } from "@/lib/analytics";

const WHATSAPP_NUMBER = "5214776330492";
const WA_MSG = "Hola Dr. Quiroz, quiero agendar una valoración por cálculos renales (piedras en el riñón).";

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
        highlight ? "bg-amber-50 border-amber-300" : "bg-white border-slate-200"
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

const treatments = [
  {
    id: "conservador",
    name: "Manejo Conservador",
    tag: "Cálculos pequeños",
    tagColor: "bg-green-100 text-green-700",
    badge: null,
    size: "Cálculos ≤5 mm",
    location: "Cualquier localización",
    recovery: "Sin hospitalización",
    invasiveness: "No invasivo",
    description:
      "La mayoría de los cálculos menores de 5 mm pasan espontáneamente en días a semanas con hidratación abundante y manejo del dolor. Los alfabloqueadores (tamsulosina) relajan el uréter y aumentan la tasa de expulsión espontánea. Requiere seguimiento radiológico para confirmar la expulsión.",
    pros: [
      "Sin procedimientos ni anestesia",
      "Alta tasa de éxito en cálculos pequeños (70–80%)",
      "Recuperación inmediata",
      "Permite analizar el cálculo expulsado para guiar prevención",
    ],
    cons: [
      "Solo aplica para cálculos ≤5 mm",
      "Puede tomar semanas",
      "Dolor durante la expulsión",
      "Requiere seguimiento estrecho",
    ],
  },
  {
    id: "leoc",
    name: "Litotripsia Extracorpórea por Ondas de Choque (LEOC)",
    tag: "No invasiva",
    tagColor: "bg-blue-100 text-blue-700",
    badge: null,
    size: "Cálculos 5–20 mm en riñón",
    location: "Riñón y uréter proximal",
    recovery: "Ambulatorio",
    invasiveness: "No invasivo",
    description:
      "Ondas de choque generadas externamente fragmentan el cálculo sin incisiones. Los fragmentos se eliminan solos por la orina en días a semanas. Es el tratamiento de primera línea para cálculos renales de tamaño moderado en pacientes seleccionados. Puede requerir varias sesiones y es menos efectiva en cálculos muy duros (oxalato de calcio monohidrato) o en pacientes obesos.",
    pros: [
      "Sin cirugía ni anestesia general",
      "Procedimiento ambulatorio (1–2 horas)",
      "Sin cicatrices",
      "Bien tolerado",
    ],
    cons: [
      "Puede requerir múltiples sesiones",
      "Menos efectiva en cálculos muy duros",
      "Fragmentos pueden quedar retenidos (steinstrasse)",
      "No apta para todos los pacientes",
    ],
  },
  {
    id: "urs-laser",
    name: "Ureteroscopía Flexible con Láser de Holmio (URS + Láser)",
    tag: "Tratamiento más frecuente",
    tagColor: "bg-amber-100 text-amber-700",
    badge: "Tecnología láser",
    size: "Cualquier tamaño",
    location: "Uréter y riñón",
    recovery: "Ambulatorio o 1 día",
    invasiveness: "Mínimamente invasivo",
    description:
      "Un ureteroscopio flexible ultra-delgado se introduce por la uretra hasta el cálculo, sin incisiones en la piel. El láser de Holmio pulveriza el cálculo en polvo (dusting) o en fragmentos pequeños que se extraen con una canastilla. Es el tratamiento más versátil: puede alcanzar cualquier localización en el uréter y el sistema colector renal con altísima tasa de éxito.",
    pros: [
      "Sin incisiones en la piel",
      "Tasa de éxito >95% para cálculos ureterales",
      "Aplica para cualquier localización en el tracto urinario",
      "Ambulatorio o 1 día de hospitalización",
      "El cálculo puede analizarse para guiar prevención",
    ],
    cons: [
      "Requiere anestesia (general o raquídea)",
      "Puede necesitar catéter ureteral (stent) temporal",
      "El stent puede causar molestias por 1–2 semanas",
    ],
  },
  {
    id: "nlpc",
    name: "Nefrolitotomía Percutánea (NLPC / PCNL)",
    tag: "Para cálculos grandes",
    tagColor: "bg-orange-100 text-orange-700",
    badge: "Gold standard >2 cm",
    size: "Cálculos >2 cm o coraliformes",
    location: "Riñón",
    recovery: "2–4 días hospitalización",
    invasiveness: "Mínimamente invasivo",
    description:
      "Se realiza una pequeña incisión en la espalda (1–1.5 cm) para insertar un nefroscopio directamente al riñón. Los cálculos se fragmentan con ultrasonido, láser o balístico y se extraen. Es el tratamiento estándar para cálculos grandes, coraliformes (que llenan toda la pelvis renal) o cuando otras técnicas han fallado. Alta tasa de expurgación completa en una sola sesión.",
    pros: [
      "Alta eficacia en cálculos muy grandes o coraliformes",
      "Extirpación completa en una sola sesión en la mayoría de casos",
      "Menor invasión que cirugía abierta",
      "Incisión de apenas 1 cm",
    ],
    cons: [
      "Requiere hospitalización 2–4 días",
      "Mayor riesgo de sangrado que ureteroscopía",
      "Anestesia general requerida",
      "Requiere cirujano con experiencia específica",
    ],
  },
  {
    id: "robotica",
    name: "Cirugía Laparoscópica o Robótica",
    tag: "Casos seleccionados",
    tagColor: "bg-slate-100 text-slate-700",
    badge: null,
    size: "Cálculos grandes en anatomía compleja",
    location: "Unión pieloureteral y pelvis renal",
    recovery: "3–5 días hospitalización",
    invasiveness: "Mínimamente invasivo",
    description:
      "Indicada en casos con anomalías anatómicas que impiden los abordajes endoscópicos, como estenosis de la unión pieloureteral asociada a cálculos, o cuando se requiere reconstrucción simultánea. La pielolitotomía laparoscópica o robótica permite resolver el cálculo y corregir la anomalía en un solo tiempo quirúrgico.",
    pros: [
      "Permite corrección anatómica simultánea",
      "Menos invasiva que cirugía abierta",
      "Visión magnificada y mayor precisión",
      "Recuperación más rápida que cirugía abierta",
    ],
    cons: [
      "Indicación muy específica (no es de primera línea)",
      "Requiere cirujano con entrenamiento en cirugía robótica",
      "Mayor tiempo quirúrgico",
      "Hospitalización de varios días",
    ],
  },
];

const stoneTypes = [
  {
    name: "Oxalato de calcio",
    pct: "70–80%",
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-800",
    causes: "Deshidratación, dieta alta en oxalatos (espinaca, chocolate, nueces) o proteína animal, hiperparatiroidismo",
    prevention: "Hidratación abundante, moderar oxalatos, calcio dietético adecuado (no suplementos en exceso)",
  },
  {
    name: "Ácido úrico",
    pct: "10–15%",
    color: "bg-orange-50 border-orange-200",
    textColor: "text-orange-800",
    causes: "Gota, orina muy ácida, dieta alta en purinas (carnes rojas, mariscos), diabetes tipo 2, obesidad",
    prevention: "Hidratación, alcalinizar la orina (bicarbonato), alopurinol si hay hiperuricemia, dieta baja en purinas",
  },
  {
    name: "Estruvita",
    pct: "5–10%",
    color: "bg-rose-50 border-rose-200",
    textColor: "text-rose-800",
    causes: "Infecciones urinarias por bacterias productoras de ureasa (Proteus, Klebsiella). Más frecuente en mujeres.",
    prevention: "Tratamiento de infecciones, acidificación de orina, eliminación completa del cálculo",
  },
  {
    name: "Cistina",
    pct: "<1–2%",
    color: "bg-purple-50 border-purple-200",
    textColor: "text-purple-800",
    causes: "Cistinuria hereditaria (defecto en el transporte renal de aminoácidos). Suele presentarse desde la infancia o juventud.",
    prevention: "Hidratación extrema (3–4 L/día), alcalinización urinaria, D-penicilamina o tiopronina",
  },
];

export default function CalculosRenalesContent() {
  const [openTreatment, setOpenTreatment] = useState<string | null>(null);

  return (
    <div className="bg-slate-50 text-slate-800">
      <main>
        {/* BREADCRUMB */}
        <div className="mx-auto max-w-6xl px-4 pt-4 pb-2">
          <nav className="text-sm text-slate-500" aria-label="breadcrumb">
            <Link href="/" className="hover:text-amber-600 transition">
              Inicio
            </Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">Cálculos Renales</span>
          </nav>
        </div>

        {/* HERO */}
        <section className="relative text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900 to-amber-700" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-6xl px-4 py-20"
          >
            <div className="max-w-3xl">
              <p className="text-amber-300 font-medium text-sm uppercase tracking-widest mb-3">
                Urología · León, Guanajuato
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Piedras en el Riñón (Cálculos Renales) en León, Guanajuato: Diagnóstico y
                Tratamiento sin Cirugía Abierta
              </h1>
              <p className="mt-5 text-lg text-slate-200 leading-relaxed">
                Los cálculos renales pueden causar un dolor intensísimo, pero hoy la gran
                mayoría se tratan sin cirugía abierta. El{" "}
                <strong className="text-white">Dr. Alejandro Quiroz Compeán</strong> ofrece
                todas las opciones mínimamente invasivas — ureteroscopía con láser, LEOC y
                nefrolitotomía percutánea — para eliminar el cálculo y{" "}
                <strong className="text-white">prevenir que vuelva</strong>.
              </p>
              <p className="mt-3 text-amber-200 font-medium italic">
                "El mismo día que eliminamos el cálculo, hablamos de cómo evitar el siguiente."
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("calculos-renales")}>
                  <Button className="bg-amber-500 text-white hover:bg-amber-400">
                    Agenda tu valoración
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ¿QUÉ SON? */}
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
                <h2 className="text-3xl font-bold text-slate-900">
                  ¿Qué son los cálculos renales o piedras en el riñón?
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Los <strong>cálculos renales</strong> (también llamados <strong>piedras en el
                  riñón</strong>, litiasis renal o nefrolitiasis) son depósitos sólidos formados
                  por minerales y sales que se cristalizan dentro del riñón cuando la orina está
                  muy concentrada.
                </p>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Pueden ser tan pequeños como un grano de arena o tan grandes como una pelota de
                  golf. Mientras permanecen en el riñón suelen no dar síntomas. El dolor
                  característico — llamado <strong>cólico renal</strong> — aparece cuando el
                  cálculo se moviliza y queda atrapado en el uréter, bloqueando el flujo de orina.
                </p>
                <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-5">
                  <h3 className="font-bold text-amber-900 mb-2">
                    Un cálculo no tratado puede dañar el riñón
                  </h3>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    La obstrucción prolongada por un cálculo puede causar infección grave
                    (pionefrosis), daño permanente al riñón o sepsis. Si tienes fiebre con dolor
                    de flanco, acude a urgencias o contáctame de inmediato.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-slate-800">
                  ¿Qué tan frecuentes son?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: "1 de 10", label: "personas tendrá un cálculo renal en su vida", color: "bg-amber-50 border-amber-200 text-amber-800" },
                    { stat: "50%", label: "de probabilidad de recurrencia sin prevención", color: "bg-orange-50 border-orange-200 text-orange-800" },
                    { stat: "3×", label: "más frecuente en hombres que en mujeres", color: "bg-slate-100 border-slate-200 text-slate-800" },
                    { stat: "30–60", label: "años: la edad de mayor incidencia", color: "bg-teal-50 border-teal-200 text-teal-800" },
                  ].map((item) => (
                    <div
                      key={item.stat}
                      className={`rounded-2xl border p-4 text-center ${item.color}`}
                    >
                      <p className="text-2xl font-bold">{item.stat}</p>
                      <p className="text-xs mt-1 leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  México tiene una de las tasas más altas de litiasis renal en Latinoamérica,
                  influenciada por el clima cálido, la dieta y el consumo insuficiente de agua.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TIPOS DE CÁLCULOS */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Tipos de Cálculos Renales
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              Conocer el tipo de cálculo es fundamental para el tratamiento y, sobre todo,
              para la prevención. El análisis del cálculo expulsado o extraído orienta cambios
              en la dieta y medicamentos preventivos.
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-5">
              {stoneTypes.map((st) => (
                <Card key={st.name} className={`${st.color}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-bold text-lg ${st.textColor}`}>{st.name}</h3>
                    <span className={`text-sm font-semibold px-2 py-0.5 rounded-full bg-white border ${st.textColor}`}>
                      {st.pct}
                    </span>
                  </div>
                  <div className="space-y-2 mt-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Causas</p>
                      <p className="text-sm text-slate-700 leading-relaxed mt-0.5">{st.causes}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Prevención</p>
                      <p className="text-sm text-slate-700 leading-relaxed mt-0.5">{st.prevention}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SÍNTOMAS */}
        <section id="sintomas" className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Síntomas de Piedras en el Riñón
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              Los síntomas varían según el tamaño y la ubicación del cálculo. Un cálculo en
              el riñón puede ser completamente silencioso hasta que se mueve al uréter.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="font-semibold text-slate-900 mb-4 text-lg">
                  Síntomas típicos
                </h3>
                <ul className="space-y-3">
                  {[
                    { s: "Dolor intenso en el flanco (cólico renal) — puede ser el peor dolor experimentado", icon: "!" },
                    { s: "Dolor que irradia del flanco hacia la ingle, los genitales o el muslo interno", icon: "!" },
                    { s: "Sangre en la orina (hematuria) — orina rojiza, rosada o con sangre microscópica", icon: "!" },
                    { s: "Náuseas y vómito acompañando el dolor", icon: "✓" },
                    { s: "Urgencia o frecuencia urinaria inusual", icon: "✓" },
                    { s: "Ardor al orinar si el cálculo está cerca de la vejiga", icon: "✓" },
                  ].map(({ s, icon }) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${icon === "!" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
                        {icon}
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="space-y-5">
                <Card className="border-red-200 bg-red-50">
                  <h3 className="font-semibold text-red-900 mb-3">
                    Señales de alarma — Ve a urgencias
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Fiebre mayor a 38°C con dolor de flanco (puede ser pionefrosis — infección grave)",
                      "Incapacidad total para orinar",
                      "Dolor insoportable que no cede con analgésicos",
                      "Escalofríos, sudoración o confusión",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-red-800">
                        <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">⚠</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="bg-slate-50">
                  <h3 className="font-semibold text-slate-900 mb-3">
                    Cálculos silenciosos
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Muchos cálculos renales no causan síntomas y se descubren de forma incidental
                    en ultrasonidos o tomografías realizadas por otra razón. Aun sin síntomas,
                    conviene una valoración urológica para decidir si requieren tratamiento o
                    vigilancia activa.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* DIAGNÓSTICO */}
        <section id="diagnostico" className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Diagnóstico de Cálculos Renales
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              Una valoración completa no solo confirma el diagnóstico, sino que determina el
              tamaño, número y ubicación exacta del cálculo — información esencial para elegir
              el tratamiento más efectivo.
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  step: "01",
                  title: "Historia clínica y factores de riesgo",
                  desc: "Se evalúan antecedentes de litiasis, dieta, ingesta de agua, medicamentos (suplementos de calcio, vitamina C), enfermedades metabólicas y antecedentes familiares.",
                },
                {
                  step: "02",
                  title: "Examen general de orina",
                  desc: "Detecta hematuria (sangre en orina), signos de infección, cristales y el pH urinario. Orientador del tipo de cálculo y permite descartar infección urinaria asociada.",
                },
                {
                  step: "03",
                  title: "Ultrasonido renal y de vías urinarias",
                  desc: "Método de imagen de primera línea. Identifica la mayoría de los cálculos renales, la dilatación del sistema colector (hidronefrosis) y otros hallazgos relevantes. Sin radiación.",
                },
                {
                  step: "04",
                  title: "Tomografía computada sin contraste (TACS)",
                  desc: "Estudio gold standard para cálculos. Detecta cálculos de cualquier tipo y tamaño con precisión milimétrica, incluidos los cálculos de ácido úrico que no se ven en radiografía simple.",
                },
                {
                  step: "05",
                  title: "Análisis del cálculo",
                  desc: "Cuando el cálculo es expulsado o extraído se analiza en laboratorio para determinar su composición. Información esencial para prescribir medidas preventivas específicas.",
                },
                {
                  step: "06",
                  title: "Estudios metabólicos (en recurrentes)",
                  desc: "Para pacientes con cálculos recurrentes: calcio, ácido úrico, oxalato y citrato en orina de 24 horas, parathormona sérica. Detecta causas metabólicas tratables.",
                },
              ].map((d) => (
                <Card key={d.step}>
                  <div className="text-3xl font-bold text-amber-200 mb-2">{d.step}</div>
                  <h3 className="font-semibold text-slate-900">{d.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{d.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FACTORES QUE DETERMINAN EL TRATAMIENTO */}
        <section className="bg-gradient-to-br from-slate-900 to-amber-900 text-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              ¿Qué Define el Tratamiento Ideal para tu Cálculo?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-300 mb-10 max-w-2xl"
            >
              No todos los cálculos requieren cirugía. La decisión depende de varios
              factores que se evalúan en conjunto durante la consulta.
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "📏",
                  title: "Tamaño del cálculo",
                  desc: "Cálculos &lt;5 mm tienen alta tasa de expulsión espontánea. Entre 5–10 mm requieren tratamiento activo en la mayoría de casos. Los &gt;10 mm rara vez pasan solos.",
                },
                {
                  icon: "📍",
                  title: "Localización",
                  desc: "Los cálculos ureterales distales pasan con más facilidad que los proximales. Los renales requieren evaluación individualizada según tamaño y anatomía.",
                },
                {
                  icon: "🔬",
                  title: "Tipo de cálculo",
                  desc: "Los cálculos de ácido úrico pueden disolverse con medicamentos (quimiólisis oral). Los de oxalato de calcio son más resistentes y requieren fragmentación.",
                },
                {
                  icon: "🌡️",
                  title: "Presencia de infección",
                  desc: "Un cálculo obstructivo con infección es una urgencia urológica. Requiere drenaje de emergencia (catéter ureteral o nefrostomía) antes del tratamiento definitivo.",
                },
                {
                  icon: "🫘",
                  title: "Función renal",
                  desc: "La obstrucción prolongada daña el riñón. El tiempo de evolución y el grado de hidronefrosis determinan la urgencia del tratamiento.",
                },
                {
                  icon: "🤝",
                  title: "Síntomas y calidad de vida",
                  desc: "Un cálculo que causa cólicos recurrentes o dificulta la vida cotidiana tiene indicación de tratamiento, incluso si técnicamente podría pasar solo.",
                },
              ].map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white/10 border border-white/20 p-5 hover:bg-white/15 transition"
                >
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p
                    className="text-sm text-slate-300 mt-2 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: f.desc }}
                  />
                </motion.div>
              ))}
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
              Tratamientos Disponibles
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              Hoy el 95% de los cálculos se tratan sin cirugía abierta. Haz clic en cada
              opción para ver detalles, ventajas y consideraciones.
            </motion.p>

            <div className="space-y-4">
              {treatments.map((t) => {
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
                      isOpen ? "border-amber-400 shadow-md" : "border-slate-200"
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
                              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-600 text-white">
                                {t.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-slate-900 text-base">{t.name}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                            <span className="text-xs text-slate-500">Tamaño: {t.size}</span>
                            <span className="text-xs text-slate-500">Localización: {t.location}</span>
                            <span className="text-xs text-slate-500">Recuperación: {t.recovery}</span>
                          </div>
                        </div>
                        <span className="text-slate-400 flex-shrink-0 text-lg">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </button>

                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="px-5 pb-6 bg-white border-t border-slate-100"
                      >
                        <p className="text-sm text-slate-700 leading-relaxed mt-4 max-w-3xl">
                          {t.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5 mt-5">
                          <div>
                            <h4 className="text-sm font-semibold text-green-700 mb-2">Ventajas</h4>
                            <ul className="space-y-1">
                              {t.pros.map((p) => (
                                <li key={p} className="flex items-start gap-2 text-xs text-slate-700">
                                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-amber-700 mb-2">Consideraciones</h4>
                            <ul className="space-y-1">
                              {t.cons.map((c) => (
                                <li key={c} className="flex items-start gap-2 text-xs text-slate-700">
                                  <span className="text-amber-500 font-bold mt-0.5">→</span>
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-5">
                          <a
                            href={waLink(`Hola Dr. Quiroz, quiero información sobre ${t.name} para cálculos renales.`)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button className="bg-amber-600 text-white hover:bg-amber-700 text-sm">
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

            {/* TABLA COMPARATIVA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"
            >
              <table className="w-full text-sm">
                <thead className="bg-amber-700 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Tratamiento</th>
                    <th className="text-left px-4 py-3 font-semibold">Tamaño cálculo</th>
                    <th className="text-left px-4 py-3 font-semibold">Invasividad</th>
                    <th className="text-left px-4 py-3 font-semibold">Hospitalización</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Manejo conservador", size: "≤5 mm", inv: "Ninguna", hosp: "Ambulatorio", bg: "bg-white" },
                    { name: "LEOC (litotripsia)", size: "5–20 mm en riñón", inv: "No invasiva", hosp: "Ambulatorio", bg: "bg-slate-50" },
                    { name: "Ureteroscopía + láser Holmio", size: "Cualquier tamaño", inv: "Mínima (endoscópica)", hosp: "Ambulatorio / 1 día", bg: "bg-white" },
                    { name: "Nefrolitotomía percutánea (NLPC)", size: ">2 cm / coraliforme", inv: "Mínima (1 cm incisión)", hosp: "2–4 días", bg: "bg-slate-50" },
                    { name: "Cirugía laparoscópica/robótica", size: "Casos complejos", inv: "Mínima (laparoscópica)", hosp: "3–5 días", bg: "bg-white" },
                  ].map((row) => (
                    <tr key={row.name} className={row.bg}>
                      <td className="px-4 py-3 font-medium text-slate-900">{row.name}</td>
                      <td className="px-4 py-3 text-slate-600">{row.size}</td>
                      <td className="px-4 py-3 text-slate-600">{row.inv}</td>
                      <td className="px-4 py-3 text-slate-600">{row.hosp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* PREVENCIÓN */}
        <section id="prevencion" className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Prevención — El Paso Más Importante
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              La mitad de los pacientes con un cálculo tendrá otro en los próximos 5 años sin
              medidas preventivas. Con las indicaciones correctas, esa probabilidad se reduce
              drásticamente.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Medidas generales</h3>
                {[
                  { title: "Beber suficiente agua", desc: "El consejo más importante: orinar 2–2.5 litros al día. La orina debe ser clara, no amarilla oscura. En climas cálidos como León, la hidratación es aún más crítica." },
                  { title: "Reducir el sodio en la dieta", desc: "La sal aumenta la excreción urinaria de calcio. Evitar alimentos procesados, embutidos y comida rápida." },
                  { title: "Moderar la proteína animal", desc: "El exceso de carne roja y mariscos aumenta el ácido úrico y el oxalato urinario. Se recomienda no más de 85 g de proteína animal por comida." },
                  { title: "Calcio dietético — no suplementos", desc: "El calcio de los alimentos en realidad protege contra los cálculos al unirse al oxalato en el intestino. Los suplementos de calcio, en cambio, pueden aumentar el riesgo." },
                ].map((item) => (
                  <Card key={item.title} className="bg-white">
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Prevención específica por tipo</h3>
                <Card className="bg-amber-50 border-amber-200">
                  <h4 className="font-semibold text-amber-900">Cálculos de ácido úrico</h4>
                  <ul className="mt-2 space-y-1 text-sm text-amber-800">
                    <li>→ Alcalinizar la orina con citrato de potasio o bicarbonato</li>
                    <li>→ Alopurinol si hay hiperuricemia</li>
                    <li>→ Hidratación abundante (estos cálculos se pueden disolver)</li>
                  </ul>
                </Card>
                <Card className="bg-slate-50">
                  <h4 className="font-semibold text-slate-900">Cálculos de oxalato de calcio</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>→ Citrato de potasio (aumenta el citrato urinario inhibidor)</li>
                    <li>→ Moderar alimentos ricos en oxalato (espinaca, betabel, chocolate)</li>
                    <li>→ Tiazidas si hay hipercalciuria</li>
                  </ul>
                </Card>
                <Card className="bg-slate-50">
                  <h4 className="font-semibold text-slate-900">Cálculos de estruvita</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>→ Tratamiento y prevención de infecciones urinarias</li>
                    <li>→ Extirpación completa del cálculo es esencial</li>
                    <li>→ Seguimiento urológico estrecho</li>
                  </ul>
                </Card>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-teal-50 border border-teal-200 p-5"
                >
                  <p className="text-teal-900 font-medium text-sm">
                    Las medidas preventivas son altamente personalizadas. El análisis del
                    cálculo y los estudios metabólicos de orina de 24 horas son la base para
                    un plan de prevención efectivo.
                  </p>
                  <div className="mt-3">
                    <a href={waLink("Hola Dr. Quiroz, quiero una consulta para prevenir que me vuelvan los cálculos renales.")} target="_blank" rel="noreferrer">
                      <Button className="bg-teal-600 text-white hover:bg-teal-700 text-sm">
                        Consulta de prevención
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ EL DR. QUIROZ */}
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
                  Por Qué Elegir al Dr. Quiroz para Cálculos Renales
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  El <strong>Dr. Alejandro Quiroz Compeán</strong> es urólogo certificado con
                  formación en las instituciones más especializadas de México y Brasil. En el
                  manejo de litiasis urinaria ofrece el espectro completo de opciones — desde
                  la evaluación metabólica hasta los procedimientos endoscópicos más avanzados
                  — todo en León, sin necesidad de viajar.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Ureteroscopía flexible con láser de Holmio de última generación",
                    "Nefrolitotomía percutánea (NLPC) para cálculos grandes o coraliformes",
                    "Enfoque integral: tratamiento del cálculo actual + plan de prevención de recurrencias",
                    "Análisis del cálculo para prescribir medidas preventivas específicas",
                    "Tecnología avanzada disponible en León — Hospital Ángeles y Hospital Muguerza Altagracia",
                    "Seguimiento estructurado con estudios metabólicos en pacientes con litiasis recurrente",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="text-amber-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("calculos-renales")}>
                    <Button className="bg-amber-600 text-white hover:bg-amber-700">
                      Agendar valoración
                    </Button>
                  </a>
                  <Link href="/hiperplasia-prostatica-benigna">
                    <Button className="bg-slate-100 text-slate-800 hover:bg-slate-200">
                      Ver HPB
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <Card className="bg-slate-50 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Formación y certificaciones
                </h3>
                <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <li>
                    <strong>Especialidad en Urología:</strong> INCMNSZ — UNAM (Cédula 12465195)
                  </li>
                  <li>
                    <strong>Alta Especialidad en Urología Oncológica:</strong> Instituto Nacional
                    de Cancerología (INCan), CDMX
                  </li>
                  <li>
                    <strong>Posgrado en Cirugía Robótica:</strong> Hospital Israelita Albert
                    Einstein, São Paulo, Brasil
                  </li>
                  <li>
                    <strong>Certificado:</strong> Consejo Nacional Mexicano de Urología (CONAMEU)
                  </li>
                  <li>
                    <strong>Consultorios:</strong> Hospital Ángeles León (Cons. 615, Torre II) ·
                    Hospital Christus Muguerza Altagracia
                  </li>
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
              Preguntas Frecuentes sobre Piedras en el Riñón
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              <FAQItem q="¿Cómo sé si tengo piedras en el riñón?" highlight>
                El síntoma más característico es el <strong>cólico renal</strong>: dolor muy
                intenso en el flanco (espalda baja lateral) que puede irradiar a la ingle y
                los genitales. Puede acompañarse de sangre en la orina, náuseas y vómito.
                Sin embargo, muchos cálculos no causan síntomas y se descubren en estudios
                de imagen por otras razones. El diagnóstico se confirma con ultrasonido o
                tomografía computada.
              </FAQItem>

              <FAQItem q="¿Todos los cálculos renales requieren cirugía?">
                No. Los cálculos menores de 5 mm tienen una tasa de expulsión espontánea del
                70–80% con hidratación y medicamentos. Entre 5–10 mm la tasa baja al 50%.
                Los mayores de 10 mm rara vez pasan solos y generalmente requieren algún
                procedimiento. La <strong>ureteroscopía con láser</strong> no es cirugía
                abierta — es un procedimiento endoscópico que no requiere incisiones en la piel.
              </FAQItem>

              <FAQItem q="¿Cuánto tiempo tarda en pasar un cálculo solo?">
                Depende del tamaño y la localización. Los cálculos pequeños (&lt;5 mm) en el
                uréter distal pueden pasar en días a 4 semanas. Si no hay expulsión en 4
                semanas, o antes si hay infección, fiebre, dolor incontrolable o daño renal,
                se procede con tratamiento activo. El Dr. Quiroz define el plazo de espera
                apropiado según tu caso específico.
              </FAQItem>

              <FAQItem q="¿Qué es la ureteroscopía con láser y duele?">
                La ureteroscopía flexible es un procedimiento endoscópico: se introduce un
                tubo delgado y flexible por la uretra hasta llegar al cálculo. El láser de
                Holmio pulveriza el cálculo en polvo o fragmentos pequeños que se eliminan
                solos. Se realiza <strong>bajo anestesia</strong> (general o raquídea), por lo
                que no se siente dolor durante el procedimiento. Después puede haber molestias
                leves por 1–2 días.
              </FAQItem>

              <FAQItem q="¿El cálculo puede dañar el riñón de forma permanente?">
                Sí, si hay obstrucción prolongada sin tratamiento. Una obstrucción completa
                puede causar daño renal irreversible en semanas. Por eso es importante no
                ignorar los síntomas ni esperar demasiado. Especialmente si hay{" "}
                <strong>fiebre con dolor de flanco</strong> — eso puede indicar infección del
                riñón obstruido (pionefrosis), que es una emergencia.
              </FAQItem>

              <FAQItem q="¿Los cálculos renales se pueden prevenir?">
                En gran medida, sí. La medida más importante es{" "}
                <strong>beber suficiente agua</strong> para producir más de 2 litros de orina
                al día. El resto de las medidas (dieta, medicamentos) se personaliza según el
                tipo de cálculo identificado por análisis. Con las medidas correctas, el riesgo
                de recurrencia se reduce a la mitad o más.
              </FAQItem>

              <FAQItem q="¿Qué hago durante un cólico renal?" highlight>
                <strong>Inmediatamente:</strong> toma un analgésico disponible (ibuprofeno o
                naproxeno son los más efectivos para el cólico renal), bebe agua, y busca
                atención médica. Ve a urgencias si tienes fiebre, si el dolor es insoportable
                y no cede, o si no puedes orinar. Guarda la orina en un colador para recuperar
                el cálculo si se expulsa — el análisis del cálculo es muy valioso para
                planificar la prevención.
              </FAQItem>

              <FAQItem q="¿Puedo tener cálculos en los dos riñones al mismo tiempo?">
                Sí, la litiasis bilateral ocurre en aproximadamente el 15–20% de los pacientes.
                El tratamiento se prioriza según cuál cálculo cause más síntomas, obstrucción
                o riesgo de complicaciones. En casos seleccionados se pueden tratar ambos
                riñones en la misma sesión o en sesiones consecutivas.
              </FAQItem>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          id="contacto"
          className="bg-gradient-to-br from-slate-900 to-amber-900 text-white py-16"
        >
          <div className="mx-auto max-w-3xl px-4 text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              ¿Tienes un cálculo renal o quieres evitar que vuelva?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-lg text-slate-200"
            >
              Una valoración completa determina el mejor tratamiento para tu cálculo y un
              plan personalizado para que no vuelva a aparecer. Agenda tu consulta con el
              Dr. Quiroz en León, Guanajuato.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-2 text-amber-300 font-medium italic"
            >
              "El mismo día que eliminamos el cálculo, hablamos de cómo evitar el siguiente."
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("calculos-renales")}>
                <Button className="bg-white text-slate-900 hover:bg-slate-100 text-base px-8 py-3">
                  Agenda tu valoración urológica
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
