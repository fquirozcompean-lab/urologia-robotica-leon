"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5214776330492";
const WA_MSG = "Hola Dr. Quiroz, necesito una valoración urgente por sangre en la orina (hematuria).";
const WA_MSG_GENERAL = "Hola Dr. Quiroz, quiero agendar una valoración por cáncer de vejiga.";
const DOCTORALIA = "https://www.doctoralia.com.mx/alejandro-quiroz-compean/urologo/leon";

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
        highlight ? "bg-rose-50 border-rose-300" : "bg-white border-slate-200"
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

type TreatmentGroup = {
  groupTitle: string;
  groupColor: string;
  items: {
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
  }[];
};

const treatmentGroups: TreatmentGroup[] = [
  {
    groupTitle: "Cáncer No Músculo Invasivo (Ta, T1, Tis)",
    groupColor: "text-teal-700",
    items: [
      {
        id: "rtuv",
        name: "Resección Transuretral de Vejiga (RTU-V)",
        tag: "Diagnóstico y tratamiento inicial",
        tagColor: "bg-teal-100 text-teal-700",
        badge: "Primer paso siempre",
        indication: "Todo cáncer de vejiga visible",
        hospitalization: "1–2 días",
        description:
          "Procedimiento endoscópico que combina diagnóstico y tratamiento en una sola intervención. A través de la uretra, sin incisiones en la piel, se introduce un resectoscopio que extirpa el tumor visible y toma muestras para análisis patológico. El resultado determina el grado histológico, la profundidad de invasión (estadio) y orienta todo el tratamiento posterior. En tumores de alto grado o T1 puede requerirse una segunda resección (re-RTU) para asegurar resección completa.",
        pros: [
          "Diagnóstico y tratamiento en un solo procedimiento",
          "Sin incisiones en la piel",
          "Hospitalización corta (1–2 días)",
          "Recuperación rápida",
          "Preserva la vejiga completamente",
        ],
        cons: [
          "Alta tasa de recurrencia sin tratamiento complementario",
          "Puede requerir segunda resección (re-RTU) en tumores de alto grado",
          "Seguimiento con cistoscopias periódicas de por vida",
        ],
      },
      {
        id: "bcg",
        name: "Inmunoterapia Intravesical con BCG",
        tag: "Alto riesgo NMIBC",
        tagColor: "bg-indigo-100 text-indigo-700",
        badge: "Tratamiento más efectivo NMIBC",
        indication: "NMIBC de alto grado (T1, Tis, Ta alto grado)",
        hospitalization: "Ambulatorio",
        description:
          "El bacilo de Calmette-Guérin (BCG) es la inmunoterapia intravesical más efectiva disponible. Se instila directamente dentro de la vejiga activando el sistema inmune local para destruir células cancerosas residuales y prevenir la recurrencia. El protocolo incluye una fase de inducción (6 instilaciones semanales) y un mantenimiento a largo plazo (hasta 3 años). Reduce significativamente el riesgo de recurrencia y de progresión a enfermedad músculo invasiva.",
        pros: [
          "Reducción drástica del riesgo de recurrencia",
          "Disminuye el riesgo de progresión a músculo invasivo",
          "Tratamiento ambulatorio (sin hospitalización)",
          "Preserva completamente la vejiga",
          "Protocolo de mantenimiento a largo plazo bien establecido",
        ],
        cons: [
          "Puede causar síntomas urinarios irritativos durante el tratamiento",
          "Raramente puede causar infección sistémica por BCG",
          "Requiere compromiso con protocolo de mantenimiento prolongado",
          "No disponible en escasez global de BCG",
        ],
      },
      {
        id: "quimio-intravesical",
        name: "Quimioterapia Intravesical (Mitomicina / Gemcitabina)",
        tag: "Riesgo bajo-intermedio",
        tagColor: "bg-blue-100 text-blue-700",
        badge: null,
        indication: "NMIBC de bajo e intermedio riesgo",
        hospitalization: "Ambulatorio",
        description:
          "La instilación postoperatoria inmediata de quimioterapia (Mitomicina C o Gemcitabina) en la vejiga, dentro de las primeras 6 horas tras la RTU-V, destruye células tumorales flotantes y reduce hasta 50% el riesgo de recurrencia temprana. Para tumores de riesgo intermedio, se administran ciclos adicionales de instilaciones. Es el tratamiento complementario de elección para tumores de bajo grado.",
        pros: [
          "Reduce significativamente el riesgo de recurrencia temprana",
          "Tratamiento ambulatorio",
          "Bien tolerada en la mayoría de pacientes",
          "Sin efectos sistémicos significativos",
        ],
        cons: [
          "Puede causar irritación vesical transitoria",
          "Menos efectiva que BCG en alto riesgo",
          "Requiere múltiples visitas para instilaciones en riesgo intermedio",
        ],
      },
    ],
  },
  {
    groupTitle: "Cáncer Músculo Invasivo (T2–T4)",
    groupColor: "text-rose-700",
    items: [
      {
        id: "cistectomia",
        name: "Cistectomía Radical (Abierta, Laparoscópica o Robótica)",
        tag: "Tratamiento estándar T2–T4",
        tagColor: "bg-rose-100 text-rose-700",
        badge: "Gold standard",
        indication: "Cáncer músculo invasivo (T2–T4)",
        hospitalization: "3–7 días según abordaje",
        description:
          "La extirpación completa de la vejiga (cistectomía radical) es el tratamiento estándar y con mayor potencial curativo para el cáncer músculo invasivo. En hombres se extirpa también la próstata y vesículas seminales; en mujeres, el útero, ovarios y pared vaginal anterior. Siempre se acompaña de linfadenectomía pélvica extendida para estadificar y tratar ganglios. El Dr. Quiroz realiza cistectomía abierta, laparoscópica y robótica — el abordaje se elige según las características del paciente y el tumor. La cistectomía robótica ofrece menor sangrado, menor dolor postoperatorio y recuperación más rápida, con igual efectividad oncológica.",
        pros: [
          "Mayor potencial curativo en enfermedad músculo invasiva",
          "Extirpación completa del tumor primario y ganglios",
          "Robótica: menor sangrado y recuperación más rápida",
          "Muestras completas para estadificación patológica definitiva",
        ],
        cons: [
          "Requiere derivación urinaria permanente",
          "Cirugía mayor con riesgos inherentes",
          "Impacto en función sexual y continencia",
          "Recuperación de 4–8 semanas según abordaje",
        ],
      },
      {
        id: "derivacion",
        name: "Opciones de Derivación Urinaria tras Cistectomía",
        tag: "Reconstrucción urinaria",
        tagColor: "bg-orange-100 text-orange-700",
        badge: null,
        indication: "Tras cistectomía radical",
        hospitalization: "Incluida en cistectomía",
        description:
          "Cuando se extirpa la vejiga, la orina necesita una nueva vía de salida del cuerpo. Existen tres opciones principales que se discuten con cada paciente antes de la cirugía: (1) Neovejiga ortotópica: se construye una nueva vejiga con un segmento de intestino delgado y se conecta a la uretra, permitiendo orinar de forma natural. No todos los pacientes son candidatos. (2) Conducto ileal (Bricker): la orina drena continuamente hacia una bolsa externa (urostomía) a través de un pequeño segmento intestinal. Es la derivación más realizada por su confiabilidad. (3) Derivación continente cutánea: reservorio interno que el paciente drena con catéter a través de un estoma. Cada opción tiene ventajas y limitaciones que se analizan individualmente.",
        pros: [
          "Neovejiga: calidad de vida más próxima a lo normal",
          "Conducto ileal: técnica segura y duradera",
          "Decisión compartida — el paciente elige informado",
          "Dr. Quiroz tiene experiencia en todas las opciones",
        ],
        cons: [
          "Neovejiga: no todos los pacientes son candidatos (requiere uretra sana)",
          "Conducto ileal: bolsa externa permanente",
          "Todas requieren tiempo de adaptación",
          "Posibles complicaciones a largo plazo según tipo",
        ],
      },
      {
        id: "neoadyuvante",
        name: "Quimioterapia Neoadyuvante (Antes de Cistectomía)",
        tag: "Mejora supervivencia",
        tagColor: "bg-purple-100 text-purple-700",
        badge: "Estándar en elegibles",
        indication: "Cáncer músculo invasivo en pacientes aptos para cisplatino",
        hospitalization: "Ambulatorio (quimioterapia)",
        description:
          "La quimioterapia con cisplatino administrada antes de la cistectomía (neoadyuvante) mejora la supervivencia global aproximadamente un 8% en pacientes elegibles. Los esquemas estándar son gemcitabina-cisplatino (GC) o MVAC. Reduce el tamaño del tumor antes de la cirugía, elimina micrometástasis y en algunos pacientes logra respuesta patológica completa (sin tumor en la pieza quirúrgica), lo que tiene excelente pronóstico. Es parte del estándar de manejo en pacientes con función renal adecuada.",
        pros: [
          "Mejora significativa de supervivencia global",
          "Reduce el tamaño tumoral antes de cirugía",
          "Elimina micrometástasis sistémicas",
          "Respuesta completa = mejor pronóstico",
        ],
        cons: [
          "No todos los pacientes son elegibles (función renal y estado general)",
          "Efectos secundarios de quimioterapia (náuseas, fatiga)",
          "Retrasa la cirugía 3–4 meses",
          "Requiere coordinación con oncología médica",
        ],
      },
      {
        id: "trimodalidad",
        name: "Trimodalidad — Preservación de Vejiga (Casos Seleccionados)",
        tag: "Casos muy seleccionados",
        tagColor: "bg-slate-100 text-slate-700",
        badge: null,
        indication: "MIBC: tumor único, sin hidronefrosis, RTU-V completa posible",
        hospitalization: "Variable (ciclos de tratamiento)",
        description:
          "En pacientes muy seleccionados con cáncer músculo invasivo, la trimodalidad combina resección transuretral máxima del tumor + quimioterapia concurrente + radioterapia pélvica para preservar la vejiga. Logra una supervivencia a 5 años del 50–60% en series especializadas. Requiere candidatos muy específicos: tumor único sin extensión a estructuras vecinas, sin hidronefrosis y con posibilidad de resección completa endoscópica. El seguimiento posterior es muy estricto con cistoscopias frecuentes.",
        pros: [
          "Preserva la vejiga sin extirpación",
          "Evita la derivación urinaria",
          "Supervivencia comparable a cistectomía en casos seleccionados",
        ],
        cons: [
          "Solo para pacientes muy seleccionados",
          "Seguimiento cistoscópico intensivo de por vida",
          "Cistectomía de rescate si hay recurrencia",
          "Efectos de radioterapia en vejiga y órganos adyacentes",
        ],
      },
    ],
  },
  {
    groupTitle: "Enfermedad Metastásica",
    groupColor: "text-slate-700",
    items: [
      {
        id: "sistemico",
        name: "Quimioterapia Sistémica e Inmunoterapia",
        tag: "Enfermedad diseminada",
        tagColor: "bg-slate-100 text-slate-700",
        badge: null,
        indication: "Cáncer de vejiga metastásico (M1) o recurrente sistémico",
        hospitalization: "Ambulatorio o corta estancia",
        description:
          "El cáncer de vejiga metastásico requiere tratamiento sistémico. La quimioterapia de primera línea basada en cisplatino (Gemcitabina-Cisplatino o ddMVAC) es el estándar en pacientes elegibles. Tras la quimioterapia platino, la inmunoterapia de mantenimiento con avelumab ha demostrado mejorar la supervivencia. En segunda línea, los inhibidores de checkpoint (pembrolizumab, atezolizumab) son opciones establecidas. Para tumores con alteraciones de FGFR, erdafitinib es una opción dirigida. El manejo es multidisciplinario, en coordinación con oncología médica.",
        pros: [
          "Inmunoterapia ha mejorado supervivencia en metastásico",
          "Opciones de segunda línea disponibles",
          "Terapias dirigidas para tumores con marcadores específicos",
          "Manejo multidisciplinario optimizado",
        ],
        cons: [
          "Pronóstico reservado en enfermedad metastásica",
          "Efectos secundarios de quimioterapia e inmunoterapia",
          "No es curativo en la mayoría de los casos",
          "Requiere coordinación estrecha con oncología médica",
        ],
      },
    ],
  },
];

export default function CancerVejigaContent() {
  const [openTreatment, setOpenTreatment] = useState<string | null>(null);

  return (
    <div className="bg-slate-50 text-slate-800">
      <main>
        {/* BREADCRUMB */}
        <div className="mx-auto max-w-6xl px-4 pt-4 pb-2">
          <nav className="text-sm text-slate-500" aria-label="breadcrumb">
            <Link href="/" className="hover:text-rose-600 transition">
              Inicio
            </Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">Cáncer de Vejiga</span>
          </nav>
        </div>

        {/* HERO */}
        <section className="relative text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-rose-950 to-rose-800" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-6xl px-4 py-20"
          >
            <div className="max-w-3xl">
              <p className="text-rose-300 font-medium text-sm uppercase tracking-widest mb-3">
                Urología Oncológica · León, Guanajuato
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Cáncer de Vejiga en León, Guanajuato: Detección Temprana, Diagnóstico y
                Tratamiento Especializado
              </h1>
              <p className="mt-5 text-lg text-slate-200 leading-relaxed">
                La <strong className="text-white">sangre en la orina</strong> puede ser señal
                de cáncer de vejiga — el diagnóstico temprano salva vidas. El{" "}
                <strong className="text-white">Dr. Alejandro Quiroz Compeán</strong>, urólogo
                oncólogo certificado, ofrece cistoscopia, resección transuretral y cistectomía
                robótica en León.
              </p>
              <div className="mt-5 rounded-2xl bg-white/10 border border-white/30 px-5 py-4">
                <p className="text-white font-medium">
                  Si has visto sangre en tu orina, es momento de una evaluación profesional.
                  No esperes a que el sangrado desaparezca — eso no significa que el problema
                  se haya resuelto.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer">
                  <Button className="bg-rose-600 text-white hover:bg-rose-500">
                    Valoración urgente por hematuria
                  </Button>
                </a>
                <a href={DOCTORALIA} target="_blank" rel="noreferrer">
                  <Button className="bg-white text-slate-900 hover:bg-slate-100">
                    Ver perfil en Doctoralia
                  </Button>
                </a>
              </div>
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
                <h2 className="text-3xl font-bold text-slate-900">
                  ¿Qué es el Cáncer de Vejiga?
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  El cáncer de vejiga es un tumor maligno que surge en el revestimiento interno
                  de la vejiga urinaria (urotelio). Es el{" "}
                  <strong>cuarto cáncer más común en hombres</strong> y uno de los pocos
                  cánceres con un factor de riesgo modificable muy claro: el tabaquismo.
                </p>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  La buena noticia es que{" "}
                  <strong>el 70–80% de los casos se diagnostican en etapas tempranas</strong>,
                  cuando el tumor aún no ha invadido el músculo de la vejiga y el pronóstico
                  es excelente.
                </p>

                <div className="mt-5 space-y-3">
                  <h3 className="font-semibold text-slate-800">Tipos principales</h3>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                    <p className="text-sm font-semibold text-slate-900">Carcinoma urotelial</p>
                    <p className="text-xs text-slate-600 mt-1">90% de todos los casos. Se origina en el urotelio (revestimiento de la vejiga, uréteres y pelvis renal).</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                    <p className="text-sm font-semibold text-slate-900">Carcinoma de células escamosas</p>
                    <p className="text-xs text-slate-600 mt-1">Asociado a irritación crónica, sonda vesical permanente o infecciones repetidas.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                    <p className="text-sm font-semibold text-slate-900">Adenocarcinoma</p>
                    <p className="text-xs text-slate-600 mt-1">Poco frecuente. Puede originarse del uraco (remanente embrionario) o por diferenciación glandular.</p>
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
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Clasificación por invasión — clave para el tratamiento
                </h3>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-200 text-teal-800">70–80% de casos</span>
                    </div>
                    <h4 className="font-bold text-teal-900">No músculo invasivo (NMIBC)</h4>
                    <p className="text-sm text-teal-800 mt-1 leading-relaxed">
                      El tumor está confinado al revestimiento interno (mucosa y submucosa) sin
                      invadir la capa muscular. Incluye Ta, T1 y carcinoma in situ (Tis).{" "}
                      <strong>Mejor pronóstico</strong> — altamente tratable con procedimientos
                      endoscópicos que preservan la vejiga.
                    </p>
                    <p className="text-xs text-teal-700 mt-2 font-medium">
                      Supervivencia a 5 años: &gt;90%
                    </p>
                  </div>
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-200 text-rose-800">20–30% de casos</span>
                    </div>
                    <h4 className="font-bold text-rose-900">Músculo invasivo (MIBC)</h4>
                    <p className="text-sm text-rose-800 mt-1 leading-relaxed">
                      El tumor ha penetrado la capa muscular de la vejiga (T2 o más). Requiere
                      tratamiento más agresivo — generalmente cistectomía radical (extirpación
                      de la vejiga) con o sin quimioterapia neoadyuvante.
                    </p>
                    <p className="text-xs text-rose-700 mt-2 font-medium">
                      Supervivencia a 5 años: 50–70% en enfermedad localizada
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    { stat: "4°", label: "cáncer más frecuente en hombres", color: "bg-slate-100 border-slate-200 text-slate-800" },
                    { stat: "3–4×", label: "más común en hombres que mujeres", color: "bg-rose-50 border-rose-200 text-rose-800" },
                  ].map((item) => (
                    <div key={item.stat} className={`rounded-2xl border p-4 text-center ${item.color}`}>
                      <p className="text-2xl font-bold">{item.stat}</p>
                      <p className="text-xs mt-1 leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HEMATURIA — SECCIÓN DESTACADA */}
        <section id="hematuria" className="bg-rose-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-rose-700 text-white p-8 mb-10 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Sangre en la Orina (Hematuria): Nunca la Ignores
              </h2>
              <p className="text-rose-100 text-lg leading-relaxed">
                La hematuria es el síntoma de presentación más frecuente del cáncer de vejiga.
                Aparece en el <strong className="text-white">80–90% de los pacientes</strong> en
                el momento del diagnóstico. <strong className="text-white">Nunca es normal</strong>{" "}
                y siempre requiere evaluación urológica completa.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-rose-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-rose-500 flex-shrink-0" />
                  <h3 className="font-bold text-rose-900 text-lg">Hematuria macroscópica</h3>
                </div>
                <p className="text-sm text-slate-500 font-medium mb-3">Visible a simple vista</p>
                <ul className="space-y-3">
                  {[
                    "Orina de color rosado, rojo, café oscuro o color té",
                    "Puede aparecer y desaparecer espontáneamente",
                    "Generalmente sin dolor (hematuria indolora)",
                    "Puede haber coágulos en la orina",
                    "Puede ser el único síntoma en etapas iniciales",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-rose-500 font-bold mt-0.5 flex-shrink-0">→</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="border-orange-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0" />
                  <h3 className="font-bold text-orange-900 text-lg">Hematuria microscópica</h3>
                </div>
                <p className="text-sm text-slate-500 font-medium mb-3">Solo visible en laboratorio</p>
                <ul className="space-y-3">
                  {[
                    "La orina se ve normal a simple vista",
                    "Se detecta en análisis de orina de rutina o chequeos",
                    "Igual de importante que la hematuria visible",
                    "Requiere la misma evaluación urológica completa",
                    "No debe atribuirse a infección sin descartada la causa urológica",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* MENSAJE CRÍTICO */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-slate-900 text-white p-7 mb-8"
            >
              <h3 className="text-xl font-bold mb-3 text-rose-300">
                Mensaje importante: que la sangre desaparezca no significa que el problema desapareció
              </h3>
              <p className="text-slate-200 leading-relaxed">
                El cáncer de vejiga puede causar <strong className="text-white">sangrado intermitente</strong>.
                Muchos pacientes esperan a que la orina se normalice y asumen que "ya pasó". Esto es
                un error que puede costar semanas o meses de diagnóstico temprano. Si has visto sangre
                en tu orina aunque sea una sola vez, necesitas una evaluación urológica completa —
                independientemente de que el sangrado haya cesado.
              </p>
              <div className="mt-5">
                <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer">
                  <Button className="bg-rose-600 text-white hover:bg-rose-500">
                    Agenda tu valoración ahora
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* OTRAS CAUSAS */}
            <Card className="bg-white">
              <h3 className="font-semibold text-slate-900 mb-3">
                Otras causas de sangre en la orina que también requieren evaluación
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                La hematuria no siempre es cáncer — también puede deberse a otras causas
                urológicas. En todos los casos, <strong>solo una evaluación profesional puede
                determinar la causa real</strong>.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { causa: "Infecciones urinarias", nota: "Causa más frecuente. Generalmente con ardor al orinar." },
                  { causa: "Cálculos renales o ureterales", nota: "Puede acompañarse de cólico renal." },
                  { causa: "Hiperplasia prostática benigna", nota: "En hombres mayores con síntomas urinarios." },
                  { causa: "Cáncer renal o de uréter", nota: "El urotelio recubre todo el tracto urinario superior." },
                  { causa: "Medicamentos anticoagulantes", nota: "No exime de evaluación urológica." },
                  { causa: "Ejercicio físico intenso", nota: "Causa rara — siempre descartar otras etiologías." },
                ].map((c) => (
                  <div key={c.causa} className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                    <p className="text-sm font-semibold text-slate-800">{c.causa}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{c.nota}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* FACTORES DE RIESGO */}
        <section id="riesgos" className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Factores de Riesgo para Cáncer de Vejiga
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-10 max-w-2xl"
            >
              Conocer los factores de riesgo es fundamental para la detección temprana. Si tienes
              uno o más de estos factores y has notado sangre en la orina, la evaluación es urgente.
            </motion.p>

            {/* TABAQUISMO — FACTOR #1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-7 mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">🚬</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Factor de riesgo #1: Tabaquismo</h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">50% de los casos</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    El tabaquismo es el factor de riesgo más importante para el cáncer de vejiga.
                    Los fumadores tienen <strong className="text-white">3–4 veces más riesgo</strong> que
                    los no fumadores, y el tabaco es responsable de aproximadamente la mitad de todos
                    los casos diagnosticados.
                  </p>
                  <p className="mt-3 text-slate-200 leading-relaxed">
                    Los carcinógenos del tabaco — especialmente las aminas aromáticas — son absorbidos
                    hacia el torrente sanguíneo, filtrados por los riñones y se concentran en la orina.
                    Al estar almacenados en la vejiga durante horas, dañan de forma continua el
                    revestimiento celular.
                  </p>
                  <div className="mt-4 rounded-xl bg-white/10 border border-white/20 p-4">
                    <p className="text-rose-200 font-semibold text-sm">
                      El riesgo disminuye al dejar de fumar, pero permanece elevado durante años.
                      Si fumas o has fumado y has visto sangre en tu orina, la evaluación urológica
                      es urgente — no lo postergues.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* EXPOSICIÓN OCUPACIONAL */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-amber-200 bg-amber-50 p-7 mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">🏭</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-amber-900">Factor de riesgo #2: Exposición ocupacional a químicos</h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-800">~10% de casos</span>
                  </div>
                  <p className="text-amber-900 leading-relaxed">
                    La exposición crónica a aminas aromáticas, bencenos y otros carcinógenos
                    industriales es el segundo factor de riesgo más importante. Lo relevante es
                    que la enfermedad puede aparecer <strong>20–30 años después</strong> de la
                    exposición, por lo que trabajadores ya retirados siguen en riesgo.
                  </p>
                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    {[
                      "Pintura, tintes y colorantes industriales",
                      "Manufactura de hule y plástico",
                      "Industria textil",
                      "Peluquería y estilismo (tintes capilares)",
                      "Manufactura y trabajo con cuero",
                      "Producción de aluminio",
                      "Industria petroquímica y refinería",
                      "Impresión y trabajos con tintas",
                    ].map((ind) => (
                      <div key={ind} className="flex items-center gap-2 text-sm text-amber-900">
                        <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                        {ind}
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-amber-800 text-sm font-medium">
                    Si trabajas o trabajaste en alguna de estas industrias, el monitoreo periódico
                    con análisis de orina es crucial, aunque no tengas síntomas.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* OTROS FACTORES */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "🎂",
                  title: "Edad avanzada",
                  desc: "El riesgo aumenta progresivamente después de los 55 años. El pico de incidencia es entre los 70 y 84 años. Esto no significa que no pueda ocurrir en personas jóvenes.",
                },
                {
                  icon: "🧬",
                  title: "Antecedente familiar",
                  desc: "Tener un familiar de primer grado con cáncer de vejiga aumenta el riesgo moderadamente. También el antecedente personal de cáncer urotelial previo (vejiga, riñón o uréter).",
                },
                {
                  icon: "☢️",
                  title: "Radioterapia pélvica previa",
                  desc: "Tratamientos de radioterapia en la pelvis por otros cánceres (próstata, cérvix, recto) aumentan el riesgo de cáncer de vejiga secundario años después.",
                },
                {
                  icon: "💊",
                  title: "Quimioterapia con ciclofosfamida",
                  desc: "La ciclofosfamida (usada en cánceres hematológicos y enfermedades autoinmunes) puede causar cistitis hemorrágica y aumenta el riesgo de cáncer de vejiga a largo plazo.",
                },
                {
                  icon: "🦠",
                  title: "Infecciones crónicas de vejiga",
                  desc: "La irritación crónica del urotelio por infecciones repetidas o sonda vesical permanente aumenta el riesgo, especialmente de carcinoma de células escamosas.",
                },
                {
                  icon: "💧",
                  title: "Agua contaminada con arsénico",
                  desc: "En regiones con agua potable contaminada con arsénico el riesgo está aumentado. Relevante en algunas zonas de Guanajuato y el Bajío.",
                },
              ].map((f) => (
                <Card key={f.title}>
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-semibold text-slate-900">{f.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* OTROS SÍNTOMAS */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Otros Síntomas del Cáncer de Vejiga
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              Además de la hematuria, el cáncer de vejiga puede manifestarse con síntomas
              urinarios que a veces se confunden con infección o vejiga hiperactiva.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="font-semibold text-slate-900 mb-4">Síntomas urinarios</h3>
                <ul className="space-y-3">
                  {[
                    { s: "Urgencia urinaria intensa o súbita", note: "" },
                    { s: "Necesidad de orinar con mucha frecuencia", note: "" },
                    { s: "Dolor o ardor al orinar (disuria)", note: "menos frecuente" },
                    { s: "Dificultad para orinar o chorro débil", note: "si hay masa grande" },
                    { s: "Coágulos en la orina", note: "hematuria con coágulos" },
                  ].map(({ s, note }) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-rose-100 flex-shrink-0 flex items-center justify-center text-rose-700 text-xs font-bold">
                        !
                      </span>
                      <span>
                        {s}
                        {note && <span className="text-slate-400 ml-1">({note})</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h3 className="font-semibold text-slate-900 mb-4">
                  Síntomas en etapas avanzadas
                </h3>
                <ul className="space-y-3">
                  {[
                    "Dolor en la parte baja de la espalda o pelvis (tumor invade estructuras vecinas)",
                    "Hinchazón en piernas (afectación ganglionar o venosa)",
                    "Pérdida de peso involuntaria",
                    "Fatiga persistente sin causa aparente",
                    "Incapacidad para orinar (obstrucción por tumor grande)",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-600 text-xs font-bold">
                        →
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-3">
                  <p className="text-xs text-amber-800">
                    Los síntomas avanzados indican enfermedad más extensa. Por eso es crucial
                    evaluar la hematuria sin esperar a que aparezcan otros síntomas.
                  </p>
                </div>
              </Card>
            </div>
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
              Diagnóstico del Cáncer de Vejiga
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              La evaluación diagnóstica sigue un proceso escalonado que culmina en la
              cistoscopia — el único método que permite ver directamente el interior de la
              vejiga y tomar una biopsia.
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  step: "01",
                  title: "Historia clínica y evaluación de riesgos",
                  desc: "Análisis detallado de los síntomas, tiempo de evolución, factores de riesgo (tabaquismo, exposición laboral), medicamentos y antecedentes familiares.",
                  color: "text-rose-200",
                },
                {
                  step: "02",
                  title: "Examen físico y análisis de orina",
                  desc: "El examen general de orina detecta sangre (macro o microscópica), leucocitos e infección. La citología urinaria busca células cancerosas exfoliadas en la orina.",
                  color: "text-rose-200",
                },
                {
                  step: "03",
                  title: "Citología urinaria",
                  desc: "Análisis microscópico de células presentes en la orina para detectar células cancerosas. Alta especificidad para tumores de alto grado. Se obtiene de 3 muestras de orina matutina.",
                  color: "text-rose-200",
                },
                {
                  step: "04",
                  title: "Ultrasonido renal y vesical",
                  desc: "Evalúa el riñón (hidronefrosis, masas renales), la vejiga (masas, grosor de pared) y el residuo postmiccional. No requiere contraste ni radiación. Estudio de primera línea.",
                  color: "text-rose-200",
                },
                {
                  step: "05",
                  title: "TAC de abdomen y pelvis con contraste (urografía-TC)",
                  desc: "Permite evaluar el tracto urinario completo (riñones, uréteres, vejiga) y detectar adenopatías o extensión a órganos vecinos. Esencial para la estadificación.",
                  color: "text-rose-200",
                },
                {
                  step: "06",
                  title: "Cistoscopia — El estándar de oro",
                  desc: "Visualización directa del interior de la vejiga con una cámara flexible o rígida. Permite ver el tumor, su localización, tamaño y apariencia. Si hay lesión sospechosa, se programa resección transuretral para diagnóstico definitivo y tratamiento.",
                  color: "text-rose-200",
                },
              ].map((d) => (
                <Card key={d.step}>
                  <div className={`text-3xl font-bold ${d.color} mb-2`}>{d.step}</div>
                  <h3 className="font-semibold text-slate-900">{d.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{d.desc}</p>
                </Card>
              ))}
            </div>

            {/* CISTOSCOPIA DESTACADA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 rounded-2xl bg-gradient-to-br from-slate-800 to-rose-900 text-white p-7"
            >
              <h3 className="text-xl font-bold mb-3">
                Cistoscopia: el único método para ver directamente la vejiga
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-slate-200 leading-relaxed">
                    La cistoscopia consiste en introducir un delgado tubo con cámara a través de la
                    uretra hasta la vejiga, bajo anestesia local. Permite visualizar directamente la
                    mucosa vesical, detectar cualquier lesión sospechosa y tomar biopsia. Si se
                    observa un tumor, se programa una resección transuretral (RTU-V) bajo anestesia
                    para extirparlo y obtener el diagnóstico patológico definitivo.
                  </p>
                  <p className="text-slate-300 text-sm mt-3">
                    El procedimiento dura 5–15 minutos y puede realizarse de forma ambulatoria.
                    Después puede haber molestias leves al orinar por 24–48 horas.
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    "Procedimiento ambulatorio — sin hospitalización",
                    "Anestesia local — sin necesidad de quirófano",
                    "Diagnóstico definitivo en la misma consulta",
                    "Permite biopsia inmediata de lesiones sospechosas",
                    "Instrumento flexible — bien tolerado",
                    "Disponible en León en el consultorio del Dr. Quiroz",
                  ].map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm text-slate-200">
                      <span className="text-rose-300 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ESTADIFICACIÓN */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Estadios del Cáncer de Vejiga
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              El estadio determina el tratamiento y el pronóstico. Se establece con la
              patología de la RTU-V y los estudios de imagen.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-5">
              <Card className="border-teal-200 bg-teal-50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-200 text-teal-800">Mejor pronóstico</span>
                </div>
                <h3 className="font-bold text-teal-900 text-lg">No músculo invasivo</h3>
                <p className="text-sm font-semibold text-teal-700 mb-3">Ta · T1 · Tis (carcinoma in situ)</p>
                <ul className="space-y-2 text-sm text-teal-800">
                  <li><strong>Ta:</strong> confinado a la mucosa (no invasivo)</li>
                  <li><strong>T1:</strong> invade la submucosa (lámina propia)</li>
                  <li><strong>Tis:</strong> carcinoma in situ — plano, de alto grado</li>
                </ul>
                <div className="mt-4 rounded-xl bg-teal-100 p-3">
                  <p className="text-xs text-teal-900 font-medium">Tratamiento: RTU-V + BCG o quimioterapia intravesical. La vejiga se preserva.</p>
                  <p className="text-xs text-teal-700 mt-1">Supervivencia a 5 años: &gt;90%</p>
                </div>
              </Card>

              <Card className="border-rose-200 bg-rose-50">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-200 text-rose-800">Requiere cirugía mayor</span>
                </div>
                <h3 className="font-bold text-rose-900 text-lg">Músculo invasivo</h3>
                <p className="text-sm font-semibold text-rose-700 mb-3">T2 · T3 · T4</p>
                <ul className="space-y-2 text-sm text-rose-800">
                  <li><strong>T2:</strong> invade la capa muscular de la vejiga</li>
                  <li><strong>T3:</strong> invade la grasa perivesical</li>
                  <li><strong>T4:</strong> invade órganos adyacentes (próstata, útero, vagina, pared pélvica)</li>
                </ul>
                <div className="mt-4 rounded-xl bg-rose-100 p-3">
                  <p className="text-xs text-rose-900 font-medium">Tratamiento: cistectomía radical ± quimioterapia neoadyuvante.</p>
                  <p className="text-xs text-rose-700 mt-1">Supervivencia a 5 años: 50–70% (enfermedad localizada)</p>
                </div>
              </Card>

              <Card className="border-slate-200 bg-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-300 text-slate-700">Tratamiento sistémico</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Metastásico</h3>
                <p className="text-sm font-semibold text-slate-600 mb-3">N+ · M1</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li><strong>N+:</strong> ganglios linfáticos regionales afectados</li>
                  <li><strong>M1a:</strong> ganglios linfáticos distantes</li>
                  <li><strong>M1b:</strong> metástasis a distancia (pulmón, hígado, hueso)</li>
                </ul>
                <div className="mt-4 rounded-xl bg-slate-200 p-3">
                  <p className="text-xs text-slate-800 font-medium">Tratamiento: quimioterapia sistémica e inmunoterapia. Manejo multidisciplinario.</p>
                  <p className="text-xs text-slate-600 mt-1">Supervivencia a 5 años: ~15%</p>
                </div>
              </Card>
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
              Tratamiento del Cáncer de Vejiga — Enfoque Personalizado
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-10 max-w-2xl"
            >
              El tratamiento depende del estadio, grado histológico y características del
              paciente. Haz clic en cada opción para ver detalles completos.
            </motion.p>

            <div className="space-y-10">
              {treatmentGroups.map((group) => (
                <div key={group.groupTitle}>
                  <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`text-xl font-bold mb-4 ${group.groupColor}`}
                  >
                    {group.groupTitle}
                  </motion.h3>
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
                            isOpen ? "border-rose-400 shadow-md" : "border-slate-200"
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
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-700 text-white">
                                      {t.badge}
                                    </span>
                                  )}
                                </div>
                                <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                                  <span className="text-xs text-slate-500">Indicación: {t.indication}</span>
                                  <span className="text-xs text-slate-500">Hospitalización: {t.hospitalization}</span>
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
                                  <h5 className="text-sm font-semibold text-green-700 mb-2">Ventajas</h5>
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
                                  <h5 className="text-sm font-semibold text-amber-700 mb-2">Consideraciones</h5>
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
                                  href={waLink(`Hola Dr. Quiroz, quiero información sobre ${t.name} para cáncer de vejiga.`)}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <Button className="bg-rose-600 text-white hover:bg-rose-700 text-sm">
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
          </div>
        </section>

        {/* PREVENCIÓN */}
        <section className="bg-gradient-to-br from-slate-900 to-rose-950 text-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Prevención y Detección Temprana
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-300 mb-10 max-w-2xl"
            >
              No podemos eliminar completamente el riesgo, pero sí podemos reducirlo de forma
              significativa y detectar la enfermedad cuando el tratamiento es más efectivo.
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: "🚭",
                  title: "Dejar de fumar",
                  desc: "Es la acción más importante. Elimina el factor de riesgo modificable más relevante. El riesgo disminuye gradualmente con los años de abstinencia.",
                },
                {
                  icon: "🦺",
                  title: "Protección ocupacional",
                  desc: "Usar equipo de protección adecuado en industrias de riesgo. Cumplir con la normativa de seguridad. Informar a tu médico sobre tu historial laboral.",
                },
                {
                  icon: "💧",
                  title: "Hidratación abundante",
                  desc: "Beber al menos 2 litros de agua al día diluye los carcinógenos en la orina y reduce el tiempo de contacto con la mucosa vesical.",
                },
                {
                  icon: "🔬",
                  title: "Evaluación inmediata de hematuria",
                  desc: "Ante cualquier sangre en la orina, consulta de inmediato. No esperes a que se repita. El diagnóstico en etapas iniciales es la mejor protección.",
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
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 rounded-2xl bg-white/10 border border-white/20 p-6"
            >
              <h3 className="font-bold text-white mb-2">Monitoreo en población de alto riesgo</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Las siguientes personas deben mantenerse vigilantes y consultar ante cualquier
                síntoma urinario, incluso sin hematuria:
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  "Fumadores activos mayores de 50 años",
                  "Ex-fumadores (el riesgo persiste años después)",
                  "Trabajadores o ex-trabajadores en industrias de riesgo",
                  "Pacientes con antecedente de cáncer de vejiga no músculo invasivo",
                  "Personas con antecedente de radioterapia pélvica",
                  "Pacientes que recibieron ciclofosfamida",
                ].map((g) => (
                  <div key={g} className="flex items-start gap-2 text-sm text-slate-200">
                    <span className="text-rose-300 font-bold mt-0.5 flex-shrink-0">•</span>
                    {g}
                  </div>
                ))}
              </div>
            </motion.div>
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
                  Por Qué Elegir al Dr. Quiroz para Cáncer de Vejiga
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  El <strong>Dr. Alejandro Quiroz Compeán</strong> tiene alta especialidad en
                  Urología Oncológica obtenida en el Instituto Nacional de Cancerología (INCan),
                  el centro de referencia más importante de México para el tratamiento del cáncer
                  urológico. Ofrece el manejo integral del cáncer de vejiga — desde la cistoscopia
                  diagnóstica hasta la cistectomía robótica y el seguimiento a largo plazo.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Alta especialidad en Urología Oncológica — Instituto Nacional de Cancerología (INCan)",
                    "Experiencia en cistoscopia diagnóstica y terapéutica",
                    "Resección transuretral de vejiga (RTU-V) con control completo de márgenes",
                    "Cistectomía radical: abierta, laparoscópica y robótica según el caso",
                    "Experiencia en neovejiga ortotópica y conducto ileal (Bricker)",
                    "Manejo multidisciplinario con oncología médica y radioterapia cuando se requiere",
                    "Seguimiento estructurado a largo plazo con cistoscopias periódicas",
                    "Tecnología disponible en León — sin necesidad de viajar a otra ciudad",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="text-rose-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={waLink(WA_MSG_GENERAL)} target="_blank" rel="noreferrer">
                    <Button className="bg-rose-600 text-white hover:bg-rose-700">
                      Agendar valoración
                    </Button>
                  </a>
                  <Link href="/cancer-prostata">
                    <Button className="bg-slate-100 text-slate-800 hover:bg-slate-200">
                      Cáncer de Próstata
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
                    de Cancerología (INCan), CDMX — centro de referencia nacional en oncología
                    urológica
                  </li>
                  <li>
                    <strong>Posgrado en Cirugía Robótica:</strong> Hospital Israelita Albert
                    Einstein, São Paulo, Brasil
                  </li>
                  <li>
                    <strong>Certificado:</strong> Consejo Nacional Mexicano de Urología (CONAMEU)
                  </li>
                  <li>
                    <strong>Fundador:</strong> Programa de residencia de Urología, Hospital
                    General de León — Tec de Monterrey
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
              Preguntas Frecuentes sobre Cáncer de Vejiga
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              <FAQItem q="¿Toda sangre en la orina es cáncer de vejiga?" highlight>
                No. La hematuria tiene muchas causas: infecciones urinarias, cálculos renales,
                hiperplasia prostática, entre otras. Sin embargo,{" "}
                <strong>nunca debe ignorarse</strong>. El cáncer de vejiga se presenta con
                hematuria en el 80–90% de los casos, y solo una evaluación urológica completa
                — con cistoscopia — puede descartar o confirmar el diagnóstico. No asumas que
                es "solo una infección" sin una evaluación adecuada.
              </FAQItem>

              <FAQItem q="¿El cáncer de vejiga se puede curar?">
                Sí, especialmente cuando se detecta en etapas tempranas. El cáncer no músculo
                invasivo (el 70–80% de los casos al diagnóstico) tiene una tasa de supervivencia
                a 5 años <strong>mayor al 90%</strong> con tratamiento adecuado. El cáncer
                músculo invasivo localizado tiene tasas de curación del 50–70%. El pronóstico
                depende directamente de la etapa al momento del diagnóstico — por eso la
                detección temprana es fundamental.
              </FAQItem>

              <FAQItem q="¿Con qué frecuencia debo hacerme cistoscopias de seguimiento?">
                El protocolo de seguimiento depende del riesgo del tumor. Para tumores de{" "}
                <strong>bajo riesgo</strong>: cistoscopia a los 3 meses y luego cada año. Para
                tumores de <strong>alto riesgo</strong>: cistoscopia cada 3 meses el primer año,
                cada 6 meses el segundo, y anualmente después. El carcinoma in situ (Tis)
                requiere seguimiento muy frecuente. El seguimiento de por vida es esencial —
                el cáncer de vejiga no músculo invasivo recurrirá hasta en el 70% de los casos
                sin vigilancia.
              </FAQItem>

              <FAQItem q="¿Puedo vivir sin vejiga después de una cistectomía?">
                Sí, con muy buena calidad de vida. Existen varias opciones de derivación
                urinaria. La más avanzada es la <strong>neovejiga ortotópica</strong>: se
                construye una nueva vejiga con intestino y el paciente orina de forma natural
                a través de la uretra. Otra opción es el{" "}
                <strong>conducto ileal</strong>: la orina drena hacia una bolsa externa. Muchos
                pacientes con urostomía llevan una vida completamente normal, incluyendo trabajo,
                deporte y vida social activa.
              </FAQItem>

              <FAQItem q="¿La cistectomía afecta la función sexual?">
                Puede afectarla, dependiendo del caso. En hombres, la cistectomía radical
                convencional puede causar disfunción eréctil y eyaculación ausente. Existen
                técnicas de preservación nerviosa en casos seleccionados que buscan minimizar
                este impacto. En mujeres puede afectar la sensibilidad vaginal y la lubricación.
                El Dr. Quiroz analiza las opciones de preservación funcional caso por caso y
                las discute abiertamente antes de la cirugía.
              </FAQItem>

              <FAQItem q="¿Fumar poco también aumenta el riesgo de cáncer de vejiga?" highlight>
                Sí. No hay un umbral "seguro" de tabaquismo para el cáncer de vejiga. Incluso
                los fumadores "ligeros" tienen riesgo elevado. El riesgo es proporcional a la
                cantidad de cigarrillos y los años de tabaquismo (paquetes-año). Los fumadores
                de cigarrillos tienen mayor riesgo que los de pipa o puro, pero todos tienen
                riesgo aumentado. Si fumas y has tenido hematuria, la evaluación es urgente.
              </FAQItem>

              <FAQItem q="¿El cáncer de vejiga es hereditario?">
                En la mayoría de los casos no es hereditario — es multifactorial. Sin embargo,
                tener un familiar de primer grado (padre, madre, hermano) con cáncer de vejiga
                aumenta el riesgo moderadamente. Existen síndromes genéticos raros (como el
                síndrome de Lynch) que aumentan el riesgo de cáncer urotelial. Si tienes
                antecedentes familiares, menciónalo en la consulta para una evaluación apropiada.
              </FAQItem>

              <FAQItem q="¿Cuánto tiempo dura la recuperación después de una cistectomía?">
                Depende del abordaje. La{" "}
                <strong>cistectomía robótica o laparoscópica</strong>: hospitalización de 3–5
                días, retorno a actividades normales en 4–6 semanas. La{" "}
                <strong>cistectomía abierta</strong>: hospitalización de 5–7 días, recuperación
                de 6–8 semanas. La elección entre robótica y abierta se basa en las
                características del paciente y la complejidad del caso, no solo en la
                preferencia — el objetivo oncológico es siempre prioritario.
              </FAQItem>

              <FAQItem q="¿Qué es el BCG y cómo funciona?">
                El BCG (bacilo de Calmette-Guérin) es una bacteria atenuada — la misma usada
                en la vacuna de la tuberculosis — que, instilada directamente dentro de la
                vejiga, activa el sistema inmune local para destruir células cancerosas
                residuales. Es la inmunoterapia intravesical más efectiva para el cáncer de
                vejiga de alto riesgo no músculo invasivo. Se administra semanalmente durante
                6 semanas (inducción) y luego en ciclos de mantenimiento hasta 3 años.
              </FAQItem>

              <FAQItem q="¿Puedo tener vida normal con una urostomía?">
                Sí. La mayoría de los pacientes con urostomía (conducto ileal) retoman su
                vida normal — trabajo, ejercicio, vida social, viajes y relaciones. Las bolsas
                modernas son discretas, seguras y cómodas. El equipo de enfermería especializado
                en ostomías ayuda durante el período de adaptación. Muchos pacientes reportan
                que, una vez adaptados, la urostomía tiene poco impacto en su calidad de vida
                cotidiana.
              </FAQItem>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          id="contacto"
          className="bg-gradient-to-br from-slate-900 to-rose-950 text-white py-16"
        >
          <div className="mx-auto max-w-3xl px-4 text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              Si has visto sangre en tu orina, no esperes.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-lg text-slate-200"
            >
              El diagnóstico temprano del cáncer de vejiga puede salvarte la vida. Una
              valoración urológica completa con cistoscopia es el primer paso — y puede
              hacerse en León, en el consultorio del Dr. Quiroz.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-2 text-rose-300 font-medium italic"
            >
              "La sangre en la orina nunca es normal — siempre merece una evaluación."
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer">
                <Button className="bg-rose-600 text-white hover:bg-rose-500 text-base px-8 py-3">
                  Valoración urgente por hematuria
                </Button>
              </a>
              <a href={DOCTORALIA} target="_blank" rel="noreferrer">
                <Button className="bg-white text-slate-900 hover:bg-slate-100 text-base px-8 py-3">
                  Doctoralia
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
