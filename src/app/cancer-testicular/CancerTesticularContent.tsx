"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  Microscope,
  Stethoscope,
  Heart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import WAButton from "@/components/WAButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

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
        highlight ? "bg-teal-50 border-teal-300" : "bg-white border-slate-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-sans font-medium text-gris-profundo flex items-center justify-between"
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="text-slate-400 ml-4 flex-shrink-0">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-3 font-serif text-sm text-gris-profundo leading-relaxed"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

const treatments = [
  {
    id: "orquiectomia",
    name: "Orquiectomía Radical Inguinal",
    tag: "Primer paso: diagnóstico y tratamiento",
    tagColor: "bg-teal-100 text-teal-700",
    badge: "Cirugía principal",
    indication: "Masa testicular sospechosa, cualquier estadio",
    hospitalization: "Ambulatorio o 24 h",
    description:
      "La orquiectomía radical inguinal es el procedimiento estándar de referencia ante la sospecha de cáncer testicular. Se realiza una incisión en la ingle (no en el escroto) para extraer el testículo completo con su cordón espermático. El acceso inguinal evita alterar las vías de drenaje linfático escrotal — crucial para no comprometer la estadificación ni el tratamiento posterior. El testículo se envía a patología para confirmar el diagnóstico y el tipo histológico exacto. En manos expertas es una cirugía de baja complejidad con excelentes resultados.",
    pros: [
      "Es a la vez diagnóstica y terapéutica",
      "Procedimiento ambulatorio o 24 h de hospitalización",
      "Recuperación rápida: actividades ligeras en 5-7 días",
      "Incisión inguinal pequeña con mínimo dolor postoperatorio",
      "Permite estadificación definitiva por patología",
    ],
    cons: [
      "Pérdida del testículo afectado (prótesis testicular disponible por razones estéticas)",
      "Requiere banco de esperma previo si el paciente desea fertilidad futura y recibirá tratamiento adyuvante",
      "No es suficiente como tratamiento único en estadios II y III",
    ],
  },
  {
    id: "vigilancia",
    name: "Vigilancia Activa",
    tag: "Estadio I de bajo riesgo",
    tagColor: "bg-blue-100 text-blue-700",
    badge: null,
    indication:
      "Estadio I (seminoma o no seminoma de bajo riesgo) en pacientes seleccionados y comprometidos",
    hospitalization: "Sin hospitalización",
    description:
      "Para pacientes con cáncer testicular en estadio I (enfermedad limitada al testículo) con factores de bajo riesgo, la vigilancia activa es una opción válida después de la orquiectomía. Consiste en seguimiento estrecho con marcadores tumorales, TAC de tórax-abdomen-pelvis y exploración física a intervalos definidos durante 5 años. Evita la toxicidad de la quimioterapia o radioterapia en pacientes que estadísticamente tienen altas probabilidades de estar curados solo con la orquiectomía. Requiere disciplina estricta del paciente para acudir a todos los controles.",
    pros: [
      "Evita toxicidad de tratamientos adyuvantes innecesarios en ~70-80% de casos",
      "Sin hospitalización adicional tras la orquiectomía",
      "La mayoría de las recaídas durante la vigilancia son rescatables con quimioterapia",
      "Mantiene la fertilidad al evitar quimioterapia o radioterapia",
    ],
    cons: [
      "Requiere compromiso estricto con el protocolo de seguimiento durante 5 años",
      "Ansiedad asociada al seguimiento periódico",
      "~20-30% de pacientes en estadio I recaerán y requerirán tratamiento ulterior",
      "No aplica en pacientes de alto riesgo o con seguimiento incierto",
    ],
  },
  {
    id: "quimioterapia",
    name: "Quimioterapia BEP",
    tag: "Estadios II y III / Enfermedad diseminada",
    tagColor: "bg-indigo-100 text-indigo-700",
    badge: "Alta efectividad",
    indication:
      "Estadio II con marcadores elevados, estadio III (metástasis), no seminoma de alto riesgo",
    hospitalization: "Ambulatorio con ciclos periódicos",
    description:
      "El esquema BEP (bleomicina, etopósido, cisplatino) es uno de los tratamientos oncológicos más exitosos en medicina. Ha transformado el cáncer testicular diseminado de una enfermedad casi uniformemente fatal a una altamente curable. Se administra en ciclos de 21 días (generalmente 3 o 4 ciclos según el estadio y el grupo pronóstico de la clasificación IGCCCG). El Dr. Quiroz coordina el tratamiento con oncología médica para garantizar el mejor plan terapéutico integrado.",
    pros: [
      "Tasa de curación >90% en estadio II y >70% incluso en estadio III de buen pronóstico",
      "Estándar de oro internacional con décadas de evidencia",
      "Permite curar enfermedad metastásica (algo excepcional en oncología)",
      "Coordinación con oncología médica para optimizar el plan",
    ],
    cons: [
      "Efectos secundarios: náuseas, fatiga, toxicidad renal (cisplatino), toxicidad pulmonar (bleomicina)",
      "Riesgo de azoospermia temporal o permanente — banco de esperma esencial previo",
      "Requiere múltiples ciclos de tratamiento (3-4 meses aproximadamente)",
      "Riesgo de toxicidad a largo plazo en pacientes curados",
    ],
  },
  {
    id: "radioterapia",
    name: "Radioterapia",
    tag: "Seminoma estadio I y IIA",
    tagColor: "bg-amber-100 text-amber-700",
    badge: null,
    indication:
      "Seminoma en estadio I (adyuvante) o IIA (ganglio retroperitoneal ≤2 cm)",
    hospitalization: "Ambulatorio (sesiones diarias por 3 semanas)",
    description:
      "El seminoma es muy radiosensible. La radioterapia dirigida a los ganglios retroperitoneales ha sido el tratamiento estándar adyuvante para el seminoma en estadio I durante décadas, aunque hoy en día la vigilancia activa es la primera opción en centros especializados. Para el estadio IIA (ganglio retroperitoneal ≤2 cm), la radioterapia es una opción válida con excelentes resultados oncológicos. No se usa en no seminomas (que no responden igual a la radioterapia).",
    pros: [
      "Muy efectiva en seminoma — >95% de control local",
      "Tratamiento ambulatorio, sin hospitalización",
      "Alternativa a quimioterapia en estadios tempranos de seminoma",
      "Bien tolerada en pacientes jóvenes con esquemas modernos de menor dosis",
    ],
    cons: [
      "No aplica en no seminomas",
      "Riesgo a largo plazo de tumores secundarios en el campo irradiado",
      "Puede afectar la fertilidad (protección testicular contralateral recomendada)",
      "Riesgo gastrointestinal: náuseas, diarrea durante el tratamiento",
    ],
  },
  {
    id: "rplnd",
    name: "RPLND — Disección Retroperitoneal de Ganglios",
    tag: "No seminoma estadio I-II seleccionado",
    tagColor: "bg-slate-100 text-slate-700",
    badge: null,
    indication:
      "No seminoma estadio I de alto riesgo o estadio II con masa ganglionar residual post-quimioterapia",
    hospitalization: "2-4 días (laparoscópica o robótica)",
    description:
      "La RPLND es la extirpación quirúrgica de los ganglios linfáticos retroperitoneales, el primer sitio de diseminación del cáncer testicular no seminoma. Está indicada en no seminomas de estadio I de alto riesgo (invasión linfovascular en el testículo) como alternativa a la vigilancia o a un ciclo de quimioterapia, y en estadio II con masa retroperitoneal residual tras quimioterapia. En centros de experiencia puede realizarse por vía laparoscópica o robótica, con menor morbilidad que el abordaje abierto y preservando la eyaculación en la mayoría de los pacientes.",
    pros: [
      "Estadificación y tratamiento en un solo procedimiento",
      "Evita la toxicidad de múltiples ciclos de quimioterapia en estadios tempranos",
      "Abordaje mínimamente invasivo disponible (laparoscópico o robótico)",
      "Preservación de nervios eyaculatorios en centros con experiencia",
    ],
    cons: [
      "Cirugía mayor con riesgo de complicaciones (sangrado, íleo, lesión vascular)",
      "Riesgo de eyaculación retrógrada (reducido con técnica de preservación nerviosa)",
      "Hospitalización de 2-4 días con recuperación de 2-4 semanas",
      "Requiere cirujano con experiencia específica en RPLND",
    ],
  },
];

export default function CancerTesticularContent() {
  const [openTreatment, setOpenTreatment] = useState<string | null>(null);

  return (
    <div className="bg-white text-gris-profundo">
      <main>
        {/* BREADCRUMB */}
        <div className="bg-petroleo px-4 pt-4 pb-2">
          <div className="max-w-6xl mx-auto">
            <nav className="text-xs text-editorial/60 font-sans" aria-label="breadcrumb">
              <Link href="/" className="hover:text-editorial transition">
                Inicio
              </Link>
              <span className="mx-2">›</span>
              <span className="text-editorial/90">Cáncer Testicular</span>
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
              Cáncer Testicular en León: Diagnóstico Temprano y Alta Tasa de Curación
            </h1>
            <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-4">
              El cáncer más frecuente en hombres jóvenes — y uno de los más curables en toda la
              oncología cuando se detecta y trata a tiempo.
            </p>
            <p className="text-quirurgico font-sans font-medium italic mb-10">
              &quot;Ante cualquier bulto o masa en el testículo, no esperes. La evaluación oportuna
              puede ser determinante.&quot;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WAButton
                mensaje="Hola Dr. Quiroz, quiero agendar una valoración oncológica por una masa testicular."
                motivo="cancer-testicular-hero-cta"
                variant="primary"
              >
                Agenda tu valoración oncológica
              </WAButton>
              <a
                href="https://www.doctoralia.com.mx/z/oFar6h"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-editorial/75 font-sans text-sm hover:text-editorial transition underline underline-offset-4"
              >
                Ver perfil en Doctoralia →
              </a>
            </div>
          </motion.div>
        </section>

        {/* ESTADÍSTICAS CLAVE */}
        <section className="bg-acero text-editorial py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  stat: "99%",
                  label: "supervivencia a 5 años en estadio I seminoma",
                  color: "text-dorado",
                },
                {
                  stat: "15–35",
                  label: "años: edad de mayor incidencia",
                  color: "text-editorial",
                },
                {
                  stat: ">95%",
                  label: "curación en estadio I no seminoma",
                  color: "text-dorado",
                },
                {
                  stat: "1–2%",
                  label: "de todos los cánceres masculinos",
                  color: "text-editorial",
                },
              ].map((item) => (
                <motion.div
                  key={item.stat}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className={`text-3xl font-bold font-sans ${item.color}`}>{item.stat}</p>
                  <p className="text-xs text-editorial/75 mt-1 leading-snug font-serif">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
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
                <h2 className="text-3xl font-bold font-sans text-gris-profundo">
                  ¿Qué es el Cáncer Testicular?
                </h2>
                <p className="mt-4 font-serif text-gris-profundo leading-relaxed">
                  El cáncer testicular es un tumor maligno que se origina en las células del
                  testículo. Aunque representa apenas el{" "}
                  <strong>1–2% de todos los cánceres masculinos</strong>, es el cáncer más
                  frecuente en hombres entre 15 y 35 años.
                </p>
                <p className="mt-3 font-serif text-gris-profundo leading-relaxed">
                  Su importancia radica no solo en su frecuencia en este grupo de edad, sino en
                  su extraordinario pronóstico: cuando se detecta temprano y se trata
                  correctamente, <strong>más del 95% de los pacientes se curan</strong>, incluso
                  en estadios avanzados con metástasis.
                </p>
                <div className="mt-5 rounded-2xl bg-teal-50 border border-teal-200 p-5">
                  <h3 className="font-bold font-sans text-teal-900 mb-2">
                    El cáncer más curable en oncología
                  </h3>
                  <p className="text-sm font-serif text-teal-800 leading-relaxed">
                    El seminoma testicular en estadio I tiene una supervivencia a 5 años de{" "}
                    <strong>99%</strong>. Incluso el cáncer diseminado con metástasis a distancia
                    puede curarse en la mayoría de los casos con quimioterapia BEP. La detección
                    temprana y el tratamiento especializado son determinantes.
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  <h3 className="font-semibold font-sans text-gris-profundo">
                    Tipos principales
                  </h3>
                  <p className="text-sm font-serif text-gris-profundo">
                    El <strong>95%</strong> son tumores de células germinales, que se dividen en:
                  </p>
                  <div className="space-y-2">
                    {[
                      {
                        name: "Seminoma",
                        pct: "~50%",
                        note: "Más común en 25-35 años. Crece lentamente. Muy sensible a radioterapia y quimioterapia.",
                      },
                      {
                        name: "No seminoma",
                        pct: "~45%",
                        note: "Incluye carcinoma embrionario, teratoma, coriocarcinoma y tumor del saco vitelino. Puede ser mixto.",
                      },
                      {
                        name: "Mixto (seminoma + no seminoma)",
                        pct: "~30–40%",
                        note: "Se trata como no seminoma. AFP elevada confirma componente no seminomatoso.",
                      },
                      {
                        name: "Tumores del estroma gonadal",
                        pct: "<5%",
                        note: "Tumores de células de Leydig o de Sertoli. Generalmente benignos. Tratamiento diferente.",
                      },
                    ].map((t) => (
                      <div
                        key={t.name}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                      >
                        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                          <p className="text-sm font-semibold font-sans text-gris-profundo">
                            {t.name}
                          </p>
                          <span className="text-xs font-bold px-1.5 py-0.5 rounded-full bg-teal-100 text-teal-700">
                            {t.pct}
                          </span>
                        </div>
                        <p className="text-xs font-serif text-slate-500">{t.note}</p>
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
                <h3 className="text-xl font-semibold font-sans text-gris-profundo mb-4">
                  Factores de riesgo
                </h3>
                <div className="space-y-2 mb-7">
                  {[
                    {
                      factor: "Criptorquidia",
                      detail:
                        "Testículo no descendido. Aumenta el riesgo 3–8 veces. El factor de riesgo más importante.",
                      highlight: true,
                    },
                    {
                      factor: "Antecedente familiar",
                      detail:
                        "Padre o hermano con cáncer testicular: riesgo 4–6 veces mayor.",
                      highlight: false,
                    },
                    {
                      factor: "Cáncer testicular previo",
                      detail:
                        "Haber tenido cáncer en un testículo eleva el riesgo en el contralateral.",
                      highlight: false,
                    },
                    {
                      factor: "Atrofia testicular marcada",
                      detail: "Testículo de tamaño significativamente reducido.",
                      highlight: false,
                    },
                    {
                      factor: "Infección por VIH",
                      detail: "Aumenta discretamente el riesgo de seminoma.",
                      highlight: false,
                    },
                  ].map((f) => (
                    <div
                      key={f.factor}
                      className={`rounded-xl border p-3 ${
                        f.highlight
                          ? "bg-amber-50 border-amber-200"
                          : "bg-white border-slate-200"
                      }`}
                    >
                      <p className="text-sm font-semibold font-sans text-gris-profundo">
                        {f.highlight && "⚠ "}
                        {f.factor}
                      </p>
                      <p className="text-xs font-serif text-slate-500 mt-0.5">{f.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-petroleo text-editorial p-5">
                  <h3 className="font-bold font-sans text-dorado mb-2">
                    Autoexploración testicular
                  </h3>
                  <p className="text-sm font-serif text-editorial/85 leading-relaxed">
                    La mayoría de los tumores testiculares son detectados por el propio paciente.
                    Se recomienda la autoexploración mensual: palpar suavemente cada testículo
                    buscando <strong>bultos, endurecimiento o cambio de tamaño</strong>. Ante
                    cualquier hallazgo, consulta sin demora — el diagnóstico oportuno es la clave
                    del pronóstico excelente.
                  </p>
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
              className="text-3xl font-bold font-sans text-gris-profundo mb-3"
            >
              Síntomas del Cáncer Testicular
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-serif text-slate-600 mb-8 max-w-2xl"
            >
              Muchos hombres retrasan la consulta por no tener dolor. Es importante saber que
              el síntoma más común del cáncer testicular es una masa indolora.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              <Card className="border-teal-200 bg-teal-50">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle size={20} className="text-teal-600" aria-hidden="true" />
                  <span className="text-xs font-bold font-sans px-2 py-0.5 rounded-full bg-teal-200 text-teal-800">
                    Síntoma clásico
                  </span>
                </div>
                <h3 className="font-bold font-sans text-teal-900 mb-3">Masa o bulto testicular</h3>
                <ul className="space-y-2 text-sm font-serif text-teal-800">
                  {[
                    { bold: "Nódulo o bulto firme", rest: " en el testículo, generalmente indoloro" },
                    { bold: "Pesadez escrotal", rest: " persistente" },
                    { bold: "Endurecimiento", rest: " o cambio en la consistencia del testículo" },
                    { bold: "Aumento de tamaño", rest: " del testículo" },
                  ].map((s) => (
                    <li key={s.bold} className="flex items-start gap-2">
                      <span className="font-bold mt-0.5 flex-shrink-0">→</span>
                      <span>
                        <strong>{s.bold}</strong>
                        {s.rest}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-serif text-teal-700 mt-3 italic">
                  ~70% de los casos: masa indolora. No esperar dolor para consultar.
                </p>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <div className="flex items-center gap-2 mb-3">
                  <Stethoscope size={20} className="text-amber-600" aria-hidden="true" />
                  <span className="text-xs font-bold font-sans px-2 py-0.5 rounded-full bg-amber-200 text-amber-800">
                    Menos frecuentes
                  </span>
                </div>
                <h3 className="font-bold font-sans text-amber-900 mb-3">Otros síntomas locales</h3>
                <ul className="space-y-2 text-sm font-serif text-amber-800">
                  {[
                    "Dolor o molestia en el testículo (~30% de casos)",
                    "Dolor en el escroto o en la ingle",
                    "Dolor de espalda baja (posible afectación ganglionar retroperitoneal)",
                    "Acumulación de líquido escrotal (hidrocele secundario)",
                    "Ginecomastia (crecimiento de tejido mamario) por producción hormonal del tumor",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="font-bold mt-0.5 flex-shrink-0">→</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="border-slate-300 bg-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={20} className="text-slate-600" aria-hidden="true" />
                  <span className="text-xs font-bold font-sans px-2 py-0.5 rounded-full bg-slate-300 text-slate-700">
                    Enfermedad avanzada
                  </span>
                </div>
                <h3 className="font-bold font-sans text-slate-800 mb-3">Síntomas de metástasis</h3>
                <ul className="space-y-2 text-sm font-serif text-slate-700">
                  {[
                    "Tos persistente o dificultad para respirar (metástasis pulmonares)",
                    "Dolor de espalda severo (ganglios retroperitoneales voluminosos)",
                    "Pérdida de peso inexplicable",
                    "Fatiga marcada",
                    "Masa abdominal palpable",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="font-bold mt-0.5 flex-shrink-0">→</span>
                      <span>{s}</span>
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
              className="rounded-2xl bg-petroleo text-editorial p-7"
            >
              <h3 className="text-xl font-bold font-sans mb-3 text-dorado">
                No esperes dolor para consultar
              </h3>
              <p className="font-serif text-editorial/85 leading-relaxed max-w-3xl">
                El cáncer testicular frecuentemente se presenta como una{" "}
                <strong>masa indolora</strong>. Muchos hombres retrasan la consulta porque
                &quot;no les duele&quot;, perdiendo semanas o meses cruciales. Ante cualquier
                bulto, dureza o cambio en el testículo — con o sin dolor — agenda una valoración
                urológica. Un ultrasonido escrotal es el primer paso y puede realizarse el mismo
                día.
              </p>
              <div className="mt-5">
                <WAButton
                  mensaje="Hola Dr. Quiroz, noto algo diferente en mi testículo y quisiera una valoración urgente."
                  motivo="cancer-testicular-sintomas-cta"
                  variant="green"
                >
                  Solicitar valoración urgente
                </WAButton>
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
              className="text-3xl font-bold font-sans text-gris-profundo mb-3"
            >
              Diagnóstico y Estadificación
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-serif text-slate-600 mb-8 max-w-2xl"
            >
              El diagnóstico del cáncer testicular sigue un camino definido: ultrasonido +
              marcadores tumorales + orquiectomía para confirmación histológica + estadificación
              con TAC.
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {[
                {
                  step: "01",
                  icon: <Stethoscope size={24} className="text-teal-500" aria-hidden="true" />,
                  title: "Autoexploración y exploración física",
                  desc: "El primer paso. Detección de masa, dureza, asimetría o cambio en el testículo. El urólogo realiza exploración física del escroto y los ganglios inguinales y abdominales.",
                },
                {
                  step: "02",
                  icon: <Microscope size={24} className="text-teal-500" aria-hidden="true" />,
                  title: "Ultrasonido escrotal",
                  desc: "Estudio de elección para evaluar cualquier masa testicular. Diferencia lesiones sólidas (sospechosas) de quísticas (benignas), evalúa la vascularización y el testículo contralateral. Disponible el mismo día.",
                },
                {
                  step: "03",
                  icon: <FlaskConical size={24} className="text-teal-500" aria-hidden="true" />,
                  title: "Marcadores tumorales en sangre",
                  desc: "AFP (alfafetoproteína), β-HCG (gonadotropina coriónica) y LDH. Se solicitan antes de la orquiectomía. AFP elevada descarta seminoma puro. Son clave para el diagnóstico, estadificación y seguimiento posterior.",
                },
                {
                  step: "04",
                  icon: <CheckCircle size={24} className="text-teal-500" aria-hidden="true" />,
                  title: "Orquiectomía radical inguinal",
                  desc: "Es el paso diagnóstico y terapéutico definitivo. El estudio histológico del testículo extirpado confirma el tipo y grado del tumor, lo que determina el plan de tratamiento adyuvante.",
                },
                {
                  step: "05",
                  icon: <ShieldCheck size={24} className="text-teal-500" aria-hidden="true" />,
                  title: "TAC de tórax, abdomen y pelvis",
                  desc: "Evalúa la extensión de la enfermedad: ganglios retroperitoneales, metástasis pulmonares y hepáticas. Fundamental para la estadificación y la planificación del tratamiento adyuvante.",
                },
                {
                  step: "06",
                  icon: <Heart size={24} className="text-teal-500" aria-hidden="true" />,
                  title: "Banco de esperma (criopreservación)",
                  desc: "Recomendado a todos los pacientes en edad reproductiva antes de cualquier tratamiento adyuvante (quimioterapia, radioterapia). La orquiectomía aislada raramente compromete la fertilidad si el testículo contralateral funciona.",
                },
              ].map((d) => (
                <Card key={d.step}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold font-sans text-teal-200">{d.step}</span>
                    {d.icon}
                  </div>
                  <h3 className="font-semibold font-sans text-gris-profundo">{d.title}</h3>
                  <p className="text-sm font-serif text-slate-600 mt-2 leading-relaxed">
                    {d.desc}
                  </p>
                </Card>
              ))}
            </div>

            {/* ESTADIFICACIÓN */}
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-bold font-sans text-gris-profundo mb-5"
            >
              Estadios del Cáncer Testicular y Pronóstico
            </motion.h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  stage: "Estadio I",
                  detail:
                    "Tumor limitado al testículo. Sin afectación ganglionar ni metástasis.",
                  surv: "99%",
                  badge: "Excelente pronóstico",
                  color: "bg-teal-50 border-teal-200 text-teal-800",
                },
                {
                  stage: "Estadio II",
                  detail:
                    "Afectación de ganglios retroperitoneales. Sin metástasis a distancia.",
                  surv: "90–95%",
                  badge: "Muy buen pronóstico",
                  color: "bg-blue-50 border-blue-200 text-blue-800",
                },
                {
                  stage: "Estadio III",
                  detail:
                    "Metástasis a distancia: pulmón, hígado, hueso, cerebro, o marcadores muy elevados.",
                  surv: "70–80%",
                  badge: "Buen pronóstico con quimioterapia",
                  color: "bg-amber-50 border-amber-200 text-amber-800",
                },
              ].map((s) => (
                <Card key={s.stage} className={`${s.color} border`}>
                  <h4 className="font-bold font-sans text-lg">{s.stage}</h4>
                  <p className="text-xs font-serif mt-1">{s.detail}</p>
                  <p className="text-3xl font-bold font-sans mt-3">{s.surv}</p>
                  <p className="text-xs font-serif mt-0.5">supervivencia a 5 años</p>
                  <p className="text-xs font-semibold font-sans mt-2 italic">{s.badge}</p>
                </Card>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5"
            >
              <p className="text-sm font-serif text-gris-profundo leading-relaxed">
                <strong className="font-sans">Nota importante sobre AFP:</strong> La AFP elevada
                descarta el diagnóstico de seminoma puro. Si el resultado histológico es
                seminoma pero la AFP está elevada, el tumor debe tratarse como no seminoma.
                La β-HCG puede estar elevada tanto en seminoma como en no seminoma.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TRATAMIENTO */}
        <section id="tratamiento" className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold font-sans text-gris-profundo mb-3"
            >
              Opciones de Tratamiento
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-serif text-slate-600 mb-3 max-w-2xl"
            >
              El tratamiento siempre comienza con la orquiectomía radical inguinal. El
              tratamiento adyuvante depende del tipo histológico y el estadio. Haz clic en cada
              opción para más detalles.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-teal-50 border border-teal-200 p-4 mb-8 max-w-2xl"
            >
              <p className="text-teal-900 font-sans text-sm font-medium">
                El banco de esperma (criopreservación de semen) debe ofrecerse a todos los
                pacientes en edad reproductiva{" "}
                <strong>antes</strong> de cualquier tratamiento adyuvante.
              </p>
            </motion.div>

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
                      isOpen ? "border-teal-400 shadow-md" : "border-slate-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenTreatment(isOpen ? null : t.id)}
                      className="w-full text-left p-5 bg-white hover:bg-slate-50 transition"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <span
                              className={`text-xs font-semibold font-sans px-2 py-0.5 rounded-full ${t.tagColor}`}
                            >
                              {t.tag}
                            </span>
                            {t.badge && (
                              <span className="text-xs font-semibold font-sans px-2 py-0.5 rounded-full bg-teal-700 text-white">
                                {t.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold font-sans text-gris-profundo text-base">
                            {t.name}
                          </h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                            <span className="text-xs font-serif text-slate-500">
                              Indicación: {t.indication}
                            </span>
                            <span className="text-xs font-serif text-slate-500">
                              Hospitalización: {t.hospitalization}
                            </span>
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
                        <p className="font-serif text-sm text-gris-profundo leading-relaxed mt-4 max-w-3xl">
                          {t.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-5 mt-5">
                          <div>
                            <h4 className="text-sm font-semibold font-sans text-green-700 mb-2">
                              Ventajas
                            </h4>
                            <ul className="space-y-1">
                              {t.pros.map((p) => (
                                <li
                                  key={p}
                                  className="flex items-start gap-2 text-xs font-serif text-gris-profundo"
                                >
                                  <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">
                                    ✓
                                  </span>
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold font-sans text-amber-700 mb-2">
                              Consideraciones
                            </h4>
                            <ul className="space-y-1">
                              {t.cons.map((c) => (
                                <li
                                  key={c}
                                  className="flex items-start gap-2 text-xs font-serif text-gris-profundo"
                                >
                                  <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">
                                    →
                                  </span>
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-5">
                          <WAButton
                            mensaje={`Hola Dr. Quiroz, quisiera información sobre ${t.name} para cáncer testicular.`}
                            motivo={`cancer-testicular-tratamiento-${t.id}`}
                            variant="ghost"
                          >
                            Consultar sobre este tratamiento →
                          </WAButton>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRONÓSTICO */}
        <section id="pronostico" className="bg-petroleo text-editorial py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold font-sans mb-3"
            >
              Pronóstico: Un Cáncer Altamente Curable
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-serif text-editorial/80 mb-10 max-w-2xl text-lg"
            >
              El cáncer testicular es un modelo de éxito en oncología: alta incidencia en
              hombres jóvenes, pero aún mayor tasa de curación gracias a la quimioterapia BEP
              y la cirugía precisa.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-sans text-dorado">
                  Supervivencia por estadio
                </h3>
                {[
                  {
                    stage: "Estadio I — Seminoma",
                    surv: "99%",
                    note: "El más favorable. La orquiectomía sola puede ser curativa.",
                  },
                  {
                    stage: "Estadio I — No seminoma",
                    surv: ">95%",
                    note: "Excelente pronóstico con vigilancia activa o quimioterapia adyuvante.",
                  },
                  {
                    stage: "Estadio II",
                    surv: "90–95%",
                    note: "Quimioterapia BEP o radioterapia (seminoma). Alta tasa de curación.",
                  },
                  {
                    stage: "Estadio III — Buen pronóstico (IGCCCG)",
                    surv: ">90%",
                    note: "3 ciclos de BEP. Logra curación en la mayoría de los pacientes.",
                  },
                  {
                    stage: "Estadio III — Pronóstico intermedio",
                    surv: "~80%",
                    note: "4 ciclos de BEP. Seguimiento estricto y posible cirugía de masas residuales.",
                  },
                  {
                    stage: "Estadio III — Mal pronóstico",
                    surv: "~45–50%",
                    note: "Enfermedad muy extensa. Tratamiento en centro especializado, posibles ensayos clínicos.",
                  },
                ].map((item) => (
                  <div
                    key={item.stage}
                    className="rounded-2xl bg-white/10 border border-white/20 p-4 flex items-center gap-4"
                  >
                    <div className="text-2xl font-bold font-sans text-dorado flex-shrink-0 w-20 text-center">
                      {item.surv}
                    </div>
                    <div>
                      <p className="text-sm font-semibold font-sans text-editorial">
                        {item.stage}
                      </p>
                      <p className="text-xs font-serif text-editorial/70 mt-0.5">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-sans text-dorado">
                  Seguimiento oncológico post-tratamiento
                </h3>
                <p className="font-serif text-editorial/80 text-sm leading-relaxed">
                  El seguimiento es parte integral del tratamiento. La mayoría de las recaídas
                  ocurren en los primeros 2 años y son detectables y tratables:
                </p>
                {[
                  {
                    title: "Marcadores tumorales periódicos",
                    desc: "AFP, β-HCG y LDH en cada visita. Su elevación puede indicar recaída antes de que aparezca en imagen.",
                  },
                  {
                    title: "TAC de control",
                    desc: "Tórax-abdomen-pelvis a los 3, 6, 12 meses y luego anualmente por 5 años (según estadio y tipo).",
                  },
                  {
                    title: "Exploración física",
                    desc: "Evaluación del testículo contralateral, ganglios y evaluación general en cada visita.",
                  },
                  {
                    title: "Evaluación de la fertilidad",
                    desc: "Control hormonal y espermatograma si el paciente desea paternidad posterior al tratamiento.",
                  },
                  {
                    title: "Seguimiento de efectos tardíos",
                    desc: "En pacientes que recibieron quimioterapia o radioterapia: función renal, audición, salud cardiovascular y riesgo de tumores secundarios.",
                  },
                ].map((e) => (
                  <div
                    key={e.title}
                    className="rounded-2xl bg-white/10 border border-white/20 p-4"
                  >
                    <h4 className="font-semibold font-sans text-white text-sm">✓ {e.title}</h4>
                    <p className="text-xs font-serif text-editorial/70 mt-1 leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEGUNDA OPINIÓN CROSS-LINK */}
        <section className="bg-editorial border-l-4 border-dorado py-10 px-6 md:px-12 my-12 rounded-r-xl mx-4 md:mx-auto md:max-w-5xl">
          <div className="max-w-3xl">
            <span className="text-dorado font-sans font-bold text-sm uppercase tracking-wide">
              ¿Ya tienes este diagnóstico?
            </span>
            <h3 className="font-sans font-bold text-2xl text-petroleo mt-2 mb-3">
              Solicita una segunda opinión especializada
            </h3>
            <p className="font-serif text-gris-profundo mb-6">
              Si ya tienes un diagnóstico de cáncer testicular y quieres confirmar el estadio,
              las opciones de tratamiento o preservar tu fertilidad, una segunda opinión
              especializada puede ser determinante antes de decidir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WAButton
                mensaje="Hola Dr. Quiroz, tengo un diagnóstico de cáncer testicular y quisiera solicitar una segunda opinión."
                motivo="cross-link-testicular-segunda-opinion"
                variant="primary"
              >
                Solicitar segunda opinión
              </WAButton>
              <Link
                href="/segunda-opinion-oncologica"
                className="inline-flex items-center gap-2 text-acero font-sans font-medium hover:underline"
              >
                Conoce el proceso completo →
              </Link>
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
                <h2 className="text-3xl font-bold font-sans text-gris-profundo">
                  Por Qué Elegir al Dr. Quiroz para Cáncer Testicular
                </h2>
                <p className="mt-4 font-serif text-gris-profundo leading-relaxed">
                  El <strong>Dr. Alejandro Quiroz Compeán</strong> es urólogo oncólogo con alta
                  especialidad en el{" "}
                  <strong>Instituto Nacional de Cancerología (INCan)</strong>, donde el manejo
                  del cáncer testicular — incluyendo orquiectomía, estadificación y coordinación
                  con oncología para quimioterapia BEP — forma parte de la práctica clínica de
                  alto volumen.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Orquiectomía radical inguinal con técnica precisa para preservar la estadificación correcta",
                    "Alta especialidad en urología oncológica — Instituto Nacional de Cancerología (INCan)",
                    "Coordinación con oncología médica para quimioterapia BEP en estadios avanzados",
                    "Experiencia en RPLND (disección retroperitoneal) por vía mínimamente invasiva",
                    "Seguimiento oncológico estructurado a 5 años post-tratamiento",
                    "Consejería sobre banco de esperma y fertilidad antes del tratamiento",
                    "Certificado CONAMEU — estándares internacionales de práctica urológica",
                    "Atención en León, Guanajuato — sin necesidad de desplazarse a otra ciudad",
                  ].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm font-serif text-gris-profundo"
                    >
                      <span className="text-teal-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <WAButton
                    mensaje="Hola Dr. Quiroz, quiero agendar una valoración oncológica por cáncer testicular."
                    motivo="cancer-testicular-dr-quiroz-cta"
                    variant="primary"
                  >
                    Agendar valoración oncológica
                  </WAButton>
                  <Link
                    href="/cancer-prostata"
                    className="inline-flex items-center gap-2 bg-slate-100 text-gris-profundo font-sans font-medium px-5 py-3 rounded-lg hover:bg-slate-200 transition text-sm"
                  >
                    Cáncer de Próstata →
                  </Link>
                </div>
              </motion.div>

              <Card className="bg-slate-50 shadow-lg">
                <h3 className="text-xl font-semibold font-sans text-gris-profundo mb-4">
                  Formación y certificaciones
                </h3>
                <ul className="space-y-3 font-serif text-gris-profundo text-sm leading-relaxed">
                  <li>
                    <strong>Especialidad en Urología:</strong> INCMNSZ — UNAM (Cédula 12465195)
                    — Centro de referencia nacional en urología multidisciplinaria
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
                    <strong>Consultorios:</strong> Hospital Ángeles León (Cons. 615, Torre II ·
                    Lun, Mar, Jue) · Hospital Christus Muguerza Altagracia (Cons. 724 · Mié, Vie)
                  </li>
                </ul>
                <div className="mt-5 border-t border-slate-200 pt-4 text-xs font-sans text-slate-500">
                  C.P. 8860892 · C.E. 12465195 · Certificado CONAMEU ·{" "}
                  <span className="text-slate-400">Aviso COFEPRIS: 2611072002A00152</span>
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
              className="text-3xl font-bold font-sans text-gris-profundo mb-8"
            >
              Preguntas Frecuentes sobre Cáncer Testicular
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              <FAQItem q="¿El cáncer testicular tiene cura?" highlight>
                Sí. El cáncer testicular es uno de los más curables en toda la oncología. En
                estadio I, la supervivencia a 5 años supera el{" "}
                <strong>99% en seminoma</strong> y el <strong>95% en no seminoma</strong>.
                Incluso en estadios avanzados con metástasis, la quimioterapia BEP logra altas
                tasas de curación. Detectarlo y tratarlo oportunamente es determinante.
              </FAQItem>

              <FAQItem q="¿Cómo se detecta el cáncer testicular?">
                El primer paso es la <strong>autoexploración testicular mensual</strong>. Ante
                cualquier masa, dureza o bulto, el siguiente paso es un{" "}
                <strong>ultrasonido escrotal</strong> — disponible el mismo día. Si muestra una
                lesión sólida sospechosa, se solicitan marcadores tumorales (AFP, β-HCG, LDH)
                y se procede a la orquiectomía radical inguinal para confirmación histológica
                definitiva.
              </FAQItem>

              <FAQItem q="¿Qué es la orquiectomía radical inguinal?" highlight>
                Es la cirugía de referencia para el cáncer testicular. Se extirpa el testículo
                afectado a través de una incisión en la <strong>ingle</strong> — no en el
                escroto — para no alterar las vías linfáticas. Es a la vez diagnóstica (confirma
                el tipo de tumor) y terapéutica. Se realiza de forma ambulatoria o con 24 horas
                de hospitalización, con recuperación rápida.
              </FAQItem>

              <FAQItem q="¿La orquiectomía afecta la fertilidad?">
                Extirpar un solo testículo no elimina la fertilidad si el testículo contralateral
                funciona bien. Sin embargo, la <strong>quimioterapia</strong> y la{" "}
                <strong>radioterapia</strong> sí pueden afectar la producción de
                espermatozoides. Por eso se recomienda el{" "}
                <strong>banco de esperma</strong> antes de cualquier tratamiento adyuvante, en
                todos los pacientes que deseen paternidad futura.
              </FAQItem>

              <FAQItem q="¿Cuál es la diferencia entre seminoma y no seminoma?">
                El <strong>seminoma</strong> es más frecuente en 25-35 años, crece lentamente y
                es muy sensible a radioterapia y quimioterapia. Los{" "}
                <strong>no seminomas</strong> (carcinoma embrionario, teratoma, coriocarcinoma,
                tumor del saco vitelino) tienden a crecer más rápido, pero también responden
                bien a la quimioterapia BEP. La distinción determina el tratamiento adyuvante
                posterior a la orquiectomía.
              </FAQItem>

              <FAQItem q="¿Si tengo AFP elevada, puede ser seminoma?">
                No. La <strong>AFP elevada descarta el seminoma puro</strong>. Si el resultado
                histológico dice seminoma pero la AFP está elevada, el tumor debe clasificarse
                y tratarse como no seminoma. La β-HCG puede estar elevada en ambos tipos. Los
                marcadores tumorales son fundamentales tanto para el diagnóstico como para el
                seguimiento.
              </FAQItem>

              <FAQItem q="¿Qué es la RPLND y cuándo se indica?" highlight>
                La RPLND (disección retroperitoneal de ganglios linfáticos) es la extirpación
                quirúrgica de los ganglios retroperitoneales — el primer sitio de diseminación
                del cáncer testicular. Se indica en no seminomas en estadio I de alto riesgo
                como alternativa a la vigilancia o quimioterapia, y en estadio II con masa
                ganglionar residual post-quimioterapia. Puede realizarse por vía laparoscópica
                o robótica en centros con experiencia.
              </FAQItem>

              <FAQItem q="¿Cuánto tiempo dura la recuperación tras la orquiectomía?">
                La orquiectomía es ambulatoria o con 24 horas de hospitalización. La mayoría
                de los pacientes retoma actividades ligeras en{" "}
                <strong>5-7 días</strong> y actividades completas en 2-3 semanas. El dolor es
                generalmente leve-moderado y controlable con analgésicos orales. Las relaciones
                sexuales y el ejercicio intenso se reanudan después de 3-4 semanas.
              </FAQItem>

              <FAQItem q="¿Cuáles son los factores de riesgo del cáncer testicular?">
                El principal es la <strong>criptorquidia</strong> (testículo no descendido):
                aumenta el riesgo 3-8 veces. Otros factores incluyen antecedente familiar
                directo, haber tenido cáncer testicular en el otro testículo, atrofia testicular
                marcada e infección por VIH. Sin embargo, la mayoría de los casos ocurren en
                hombres sin ningún factor de riesgo identificable.
              </FAQItem>

              <FAQItem q="¿El cáncer testicular puede volver?">
                Sí, la recaída es posible, especialmente en los primeros 2 años. Por eso el{" "}
                <strong>seguimiento oncológico estricto</strong> es fundamental: marcadores
                tumorales, TAC de control y exploración física en intervalos definidos durante
                5 años. La mayoría de las recaídas detectadas en el seguimiento son tratables
                con quimioterapia de rescate u otras intervenciones.
              </FAQItem>
            </div>
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
              className="text-3xl font-bold font-sans"
            >
              El cáncer testicular detectado a tiempo es altamente curable.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-lg font-serif text-editorial/85"
            >
              Ante cualquier masa, bulto o cambio en el testículo, no esperes. El diagnóstico
              temprano es la clave del pronóstico excelente. Agenda tu valoración con el Dr.
              Quiroz en León, Guanajuato — sin largas esperas.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-2 text-quirurgico font-sans font-medium italic"
            >
              &quot;No esperes dolor para consultar — el síntoma más común del cáncer testicular
              es una masa indolora.&quot;
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <WAButton
                mensaje="Hola Dr. Quiroz, quiero agendar una valoración oncológica por cáncer testicular o una masa testicular."
                motivo="cancer-testicular-cta-final"
                variant="primary"
              >
                Agenda tu valoración oncológica
              </WAButton>
              <a
                href="https://www.doctoralia.com.mx/z/oFar6h"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-editorial/40 text-editorial font-sans font-medium px-6 py-3 rounded-lg hover:border-editorial/70 transition text-sm"
              >
                Ver disponibilidad en Doctoralia →
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-sm font-serif text-editorial/60 space-y-1"
            >
              <p>Hospital Ángeles León — Consultorio 615, Torre II · Lun, Mar, Jue</p>
              <p>Hospital Christus Muguerza Altagracia — Cons. 724 · Mié, Vie</p>
              <p className="mt-3 text-xs text-editorial/40">
                Aviso de Publicidad COFEPRIS: 2611072002A00152
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
