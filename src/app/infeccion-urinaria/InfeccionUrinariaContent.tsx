'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WHATSAPP_NUMBER = "5214776330492";
function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
const WA_URGENTE = waLink("Hola Dr. Quiroz, tengo síntomas de infección urinaria y necesito una consulta urgente.");
const WA_RECURRENTE = waLink("Hola Dr. Quiroz, tengo infecciones urinarias recurrentes y quiero un plan de prevención personalizado.");

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "¿Puedo tener relaciones sexuales con infección urinaria?",
    a: "Se recomienda evitarlo durante el tratamiento. Las relaciones pueden introducir más bacterias a la uretra y empeorar los síntomas. Espera hasta terminar el ciclo de antibióticos y estar sin síntomas por al menos 24–48 horas.",
  },
  {
    q: "¿La infección urinaria se contagia?",
    a: "No es una enfermedad de transmisión sexual. La actividad sexual puede facilitar que bacterias del área genital entren a la uretra de la mujer, pero el problema está en la propia bacteria de la persona. Los hombres raramente adquieren ITU por contacto sexual con una mujer infectada.",
  },
  {
    q: "¿Cuánto tiempo tarda en curarse?",
    a: "Con el antibiótico correcto, los síntomas mejoran en 24–48 horas. Sin embargo, debes completar el ciclo completo: 3–7 días para cistitis, 7–14 días para pielonefritis. No completar el tratamiento aunque te sientas bien es una de las principales causas de recurrencia y resistencia antibiótica.",
  },
  {
    q: "¿Puedo tomar el antibiótico que me sobró de otra infección?",
    a: "No. Esta es una de las causas más frecuentes de infecciones recurrentes y resistencia antibiótica. La bacteria actual puede ser diferente o resistente al antibiótico anterior. Usar el medicamento incorrecto no cura — selecciona bacterias más resistentes que serán mucho más difíciles de tratar después.",
  },
  {
    q: "¿El jugo de arándano realmente funciona?",
    a: "El arándano no cura una infección activa, pero puede ayudar a prevenirlas. Sus proantocianidinas dificultan que la bacteria E. coli se adhiera a la pared de la vejiga. Para efecto preventivo se necesitan dosis concentradas (36 mg de proantocianidinas diarias) — el jugo diluido de supermercado no alcanza esa concentración. Las cápsulas de extracto concentrado son más efectivas.",
  },
  {
    q: "¿Por qué me dan infecciones después de tener relaciones sexuales?",
    a: "Es la llamada cistitis post-coital o 'de luna de miel'. Durante las relaciones, la fricción puede transportar bacterias de la zona vaginal o anal hacia la uretra. Las medidas más efectivas: orinar dentro de los 30 minutos después del coito, y en casos recurrentes, profilaxis post-coital con una dosis de antibiótico bajo prescripción médica.",
  },
  {
    q: "¿Las infecciones urinarias causan infertilidad?",
    a: "Las infecciones de vejiga (cistitis) no afectan la fertilidad. Sin embargo, si la infección asciende a riñones o afecta estructuras del tracto genital sin tratamiento adecuado (como en prostatitis o epididimitis en hombres), podría tener implicaciones reproductivas. En mujeres embarazadas, las ITU no tratadas aumentan el riesgo de complicaciones obstétricas.",
  },
  {
    q: "¿Puedo hacer ejercicio con infección urinaria?",
    a: "El ejercicio ligero (caminar) es generalmente tolerable. El ejercicio intenso puede ser incómodo por el malestar pélvico y la urgencia urinaria. Lo prioritario es completar el antibiótico, hidratarte bien y descansar.",
  },
  {
    q: "¿Es normal tener sangre en la orina con infección urinaria?",
    a: "Sí, es relativamente común. La cistitis hemorrágica ocurre cuando la inflamación irrita el revestimiento de la vejiga causando pequeños sangrados. Con el tratamiento correcto desaparece en 2–3 días. Si la hematuria persiste después del tratamiento, es abundante, o aparece sin síntomas de infección, necesita evaluación adicional para descartar otras causas.",
  },
  {
    q: "¿Qué pasa si no tomo el antibiótico completo?",
    a: "Las bacterias más resistentes sobreviven al ciclo incompleto y vuelven a multiplicarse. El resultado es una infección que regresa, más difícil de tratar, que puede requerir antibióticos más potentes. Completar el ciclo aunque te sientas bien es fundamental.",
  },
  {
    q: "¿Por qué siempre me dan infecciones urinarias?",
    a: "Las infecciones recurrentes tienen causas específicas identificables: actividad sexual sin profilaxis post-coital, espermicidas, menopausia con atrofia vaginal, diabetes no controlada, residuo post-miccional elevado, anomalías anatómicas. Una evaluación completa (urocultivos seriados, ultrasonido, cistoscopia en casos seleccionados) permite encontrar la causa y diseñar un plan personalizado. No es mala suerte — tiene solución.",
  },
  {
    q: "¿Puedo prevenir las infecciones urinarias de forma natural?",
    a: "Sí. Con evidencia científica: orinar después de relaciones sexuales, hidratación adecuada, no aguantarse las ganas, higiene de adelante hacia atrás, cápsulas de arándano concentrado (36 mg PAC), D-manosa 2 g al día, probióticos con Lactobacillus. En mujeres postmenopáusicas, los estrógenos vaginales son altamente efectivos. Estas medidas reducen significativamente la frecuencia.",
  },
  {
    q: "¿Los hombres también tienen infecciones urinarias?",
    a: "Sí, pero son mucho menos comunes. Cuando ocurren en hombres menores de 50 años siempre requieren investigación para descartar: hiperplasia prostática, prostatitis, cálculos, anomalías anatómicas. El tratamiento en hombres es más prolongado (7–14 días) y siempre debe basarse en un urocultivo.",
  },
  {
    q: "¿Qué es la bacteriuria asintomática? ¿Necesito antibiótico si tengo bacterias en la orina sin síntomas?",
    a: "La bacteriuria asintomática es la presencia de bacterias en la orina sin síntomas de infección. En la mayoría de personas NO requiere antibiótico: tratarla no previene infecciones futuras, pero sí aumenta la resistencia bacteriana. Solo se trata de forma obligatoria en mujeres embarazadas y antes de procedimientos urológicos invasivos. Si te recetaron antibiótico solo porque el análisis de orina mostró bacteria, pero no tienes síntomas, consulta si el tratamiento es realmente necesario.",
  },
];

function FAQItem({ q, a }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-medium flex items-start justify-between gap-3"
      >
        <span>{q}</span>
        <span className="text-slate-400 text-lg leading-none shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-sm text-slate-700 leading-relaxed"
        >
          {a}
        </motion.div>
      )}
    </motion.div>
  );
}

const cistitisSintomas = [
  { icon: "🔥", label: "Ardor o dolor al orinar", detail: "Disuria — el síntoma más característico", strong: true },
  { icon: "⚡", label: "Urgencia para orinar", detail: "Sensación de no poder aguantar", strong: true },
  { icon: "🔄", label: "Orinar muy frecuentemente", detail: "Cada 15–30 minutos, incluso de noche" },
  { icon: "💧", label: "Orina en pequeñas cantidades", detail: "Sensación de vaciamiento incompleto" },
  { icon: "🩸", label: "Orina turbia, oscura o con sangre", detail: "Hematuria — puede alarmar pero es tratable" },
  { icon: "👃", label: "Olor fuerte o desagradable", detail: "La orina huele diferente a lo normal" },
  { icon: "🤕", label: "Dolor en la parte baja del abdomen", detail: "Presión o molestia por encima del pubis" },
  { icon: "❌", label: "Sensación de vaciamiento incompleto", detail: "Sientes que queda orina aunque ya orinaste" },
];

const antibioticosList = [
  {
    name: "Nitrofurantoína",
    brand: "Macrodantina",
    pro: "Muy efectiva, baja resistencia bacteriana",
    con: "No sirve para infección renal; puede causar náusea",
    note: "Primera opción en muchos casos de cistitis no complicada",
  },
  {
    name: "Fosfomicina",
    brand: "Fosfocina",
    pro: "Una sola toma, muy bien tolerada, amplia cobertura",
    con: "Puede ser más costosa",
    note: "Excelente para infecciones no complicadas. Una dosis es suficiente",
  },
  {
    name: "Trimetoprima-sulfametoxazol",
    brand: "TMP-SMX / Bactrim",
    pro: "Económica y ampliamente disponible",
    con: "Resistencia creciente (20–30% en muchas regiones). Ya no es primera línea",
    note: "Solo si el urocultivo confirma sensibilidad a este antibiótico",
  },
];

const prevencionHigiene = [
  { ok: true, text: "Limpiarse de adelante hacia atrás — nunca de atrás hacia adelante" },
  { ok: true, text: "Orinar dentro de los 30 minutos después de relaciones sexuales" },
  { ok: true, text: "Beber 2–3 litros de agua al día" },
  { ok: true, text: "No aguantarse las ganas de orinar — ir cada 2–3 horas" },
  { ok: true, text: "Ropa interior de algodón (no telas sintéticas)" },
  { ok: true, text: "Mantener el área genital limpia y seca" },
  { ok: false, text: "Evitar duchas vaginales internas — alteran la flora protectora" },
  { ok: false, text: "Evitar jabones perfumados o productos íntimos con fragancia" },
  { ok: false, text: "Evitar espermicidas si tienes infecciones recurrentes" },
];

const especiales = [
  {
    title: "Durante el embarazo",
    icon: "🤰",
    color: "bg-pink-50 border-pink-200",
    titleColor: "text-pink-800",
    items: [
      "Mayor frecuencia por cambios hormonales y anatómicos",
      "Requieren tratamiento inmediato — incluso bacteriuria asintomática se trata",
      "Antibióticos seguros: amoxicilina, cefalexina, nitrofurantoína (no en tercer trimestre)",
      "Evitar fluoroquinolonas y tetraciclinas",
    ],
    alert: "Sin tratamiento aumenta el riesgo de parto prematuro y bajo peso al nacer.",
  },
  {
    title: "En hombres",
    icon: "👨",
    color: "bg-blue-50 border-blue-200",
    titleColor: "text-blue-800",
    items: [
      "Siempre requiere investigación de causa subyacente",
      "Descartar: HPB, prostatitis, cálculos renales, anomalías anatómicas",
      "Tratamiento más prolongado: 7–14 días",
      "Urocultivo obligatorio para guiar antibiótico",
    ],
    link: { href: "/hiperplasia-prostatica-benigna", text: "Ver HPB como causa en hombres →" },
  },
  {
    title: "Con diabetes",
    icon: "🩺",
    color: "bg-amber-50 border-amber-200",
    titleColor: "text-amber-800",
    items: [
      "Mayor riesgo de infecciones más graves y resistentes",
      "Puede progresar rápidamente a pielonefritis",
      "Mayor susceptibilidad a infecciones por hongos también",
      "El control de glucosa es la medida preventiva más importante",
    ],
    alert: "Con glucosa alta, la orina es un ambiente ideal para que las bacterias crezcan rápido.",
  },
  {
    title: "Con sonda vesical",
    icon: "🏥",
    color: "bg-slate-50 border-slate-200",
    titleColor: "text-slate-700",
    items: [
      "Muy alto riesgo de colonización bacteriana",
      "Solo tratar si hay síntomas — la bacteriuria asintomática con sonda no se trata",
      "Cambiar sonda si lleva mucho tiempo colocada",
      "Técnica aséptica en el manejo de la sonda",
    ],
    alert: "Tratar bacteriuria asintomática en portadores de sonda solo aumenta resistencias.",
  },
];

export default function InfeccionUrinariaContent() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-6xl flex justify-between items-center px-4 py-3">
          <Link href="/" className="font-semibold text-slate-800 hover:text-teal-600 transition text-sm">
            ← Urología Robótica León
          </Link>
          <a
            href={WA_URGENTE}
            target="_blank"
            rel="noreferrer"
            className="bg-teal-600 text-white text-sm px-4 py-2 rounded-xl font-medium hover:bg-teal-700 transition"
          >
            Consulta urgente
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* ── HERO ── */}
        <section className="relative text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-700 to-cyan-600" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-5xl px-4 py-20"
          >
            <p className="text-teal-200 text-sm font-medium mb-3 uppercase tracking-wide">
              Infección de Vías Urinarias · Cistitis · León, Guanajuato
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
              Infección Urinaria en León, Guanajuato: Tratamiento Inmediato y Prevención de Recurrencias
            </h1>
            <p className="mt-5 text-lg text-teal-100 max-w-2xl leading-relaxed">
              Alivio rápido de síntomas + plan personalizado para que no regresen. Si tienes ardor al orinar, no esperes — las infecciones urinarias no tratadas pueden complicarse.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_URGENTE}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-teal-900 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition shadow"
              >
                Agenda consulta urgente
              </a>
              <a
                href={WA_RECURRENTE}
                target="_blank"
                rel="noreferrer"
                className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-teal-500 transition border border-teal-400"
              >
                Infecciones recurrentes
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { stat: "50–60%", label: "de mujeres tendrán al menos una infección en su vida" },
                { stat: "80–85%", label: "de casos son causados por la bacteria E. coli" },
                { stat: "20–30%", label: "de mujeres con una infección tendrán infecciones recurrentes" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">{s.stat}</div>
                  <div className="text-teal-100 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-teal-200 text-sm">
              Dr. Alejandro Quiroz Compeán · Urólogo certificado por CONAMEU · León, Guanajuato
            </p>
          </motion.div>
        </section>

        {/* ── QUÉ ES ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">¿Qué es una infección urinaria?</h2>
            <p className="text-slate-600 max-w-2xl mb-8">
              Es una infección bacteriana en cualquier parte del sistema urinario — riñones, vejiga o uretra. La mayoría afecta la vejiga (<strong>cistitis</strong>) y la uretra. La bacteria <strong>E. coli</strong>, que vive normalmente en el intestino, es la responsable en el 80–85% de los casos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4 text-lg">¿Por qué son más comunes en mujeres?</h3>
              <ul className="space-y-2">
                {[
                  { label: "Uretra más corta", detail: "4 cm en mujeres vs. 20 cm en hombres — bacteria llega más fácil" },
                  { label: "Anatomía", detail: "La uretra está muy cerca del ano y la vagina, fuentes de bacteria" },
                  { label: "Actividad sexual", detail: "Puede transportar bacterias hacia la uretra" },
                  { label: "Menopausia", detail: "La caída de estrógenos cambia la flora vaginal protectora" },
                  { label: "Embarazo", detail: "Cambios hormonales y presión del útero favorecen infecciones" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="text-teal-500 font-bold shrink-0 mt-0.5">→</span>
                    <span><strong className="text-slate-800">{item.label}:</strong> <span className="text-slate-600">{item.detail}</span></span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-teal-50 border border-teal-200 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-teal-800 mb-4 text-lg">Tipos de infección urinaria</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-teal-700">Cistitis</div>
                  <p className="text-sm text-slate-600 mt-1">Infección de la vejiga. La más común. Causa ardor, urgencia y frecuencia. Generalmente sin fiebre.</p>
                </div>
                <div>
                  <div className="font-semibold text-teal-700">Uretritis</div>
                  <p className="text-sm text-slate-600 mt-1">Infección de la uretra. Síntomas similares a cistitis. Puede coincidir con infecciones de transmisión sexual.</p>
                </div>
                <div>
                  <div className="font-semibold text-amber-700">Pielonefritis</div>
                  <p className="text-sm text-slate-600 mt-1">Infección renal. Más grave. Causa fiebre alta, dolor de espalda y malestar general. Puede requerir hospitalización.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SÍNTOMAS — sección muy prominente ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Síntomas de infección urinaria</h2>
              <p className="text-slate-600 mb-8 max-w-2xl">
                Los síntomas de la infección urinaria (cistitis) son muy característicos. Si reconoces dos o más de estos, es probable que tengas una infección y necesitas atención médica.
              </p>
            </motion.div>

            {/* Cistitis */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {cistitisSintomas.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`rounded-xl border p-4 ${s.strong ? "bg-teal-50 border-teal-300" : "bg-slate-50 border-slate-200"}`}
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className={`font-semibold text-sm ${s.strong ? "text-teal-800" : "text-slate-800"}`}>{s.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.detail}</div>
                </motion.div>
              ))}
            </div>

            {/* Pielonefritis — alarma */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-8"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚨</span>
                <div>
                  <h3 className="font-bold text-red-800 text-lg mb-2">
                    Infección renal (pielonefritis) — síntomas más graves
                  </h3>
                  <p className="text-red-700 text-sm mb-3">
                    Si la infección asciende a los riñones, los síntomas son más intensos y requieren atención urgente, posiblemente hospitalización.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      "🌡️ Fiebre alta (&gt;38°C) y escalofríos",
                      "🤕 Dolor intenso en espalda baja o costado (flanco)",
                      "🤢 Náusea y vómito",
                      "😰 Malestar general intenso, sensación de enfermedad grave",
                    ].map((s, i) => (
                      <div key={i} className="text-sm text-red-800" dangerouslySetInnerHTML={{ __html: s }} />
                    ))}
                  </div>
                  <div className="mt-4 bg-red-100 border border-red-300 rounded-lg p-3">
                    <strong className="text-red-900">Si tienes fiebre + dolor de espalda + síntomas urinarios:</strong>
                    <span className="text-red-800 text-sm"> es una infección renal. Necesitas atención médica urgente — no esperes.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hombres */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-6"
            >
              <h3 className="font-bold text-blue-800 text-lg mb-2">Síntomas en hombres — requiere investigación completa</h3>
              <p className="text-blue-700 text-sm mb-3">
                Los síntomas son los mismos que en mujeres. Sin embargo, las infecciones urinarias en hombres son poco comunes. Cuando ocurren, especialmente en menores de 50 años, sugieren una causa subyacente que debe investigarse.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  "Hiperplasia prostática benigna (HPB) — obstrucción del flujo",
                  "Prostatitis — infección de la glándula prostática",
                  "Cálculos renales o vesicales",
                  "Anomalía estructural del tracto urinario",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-blue-800">
                    <span className="shrink-0">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Link href="/hiperplasia-prostatica-benigna" className="text-sm text-blue-700 hover:text-blue-900 font-medium underline">
                  Ver guía de HPB como causa de infecciones en hombres →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CAUSAS ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">¿Por qué da la infección urinaria?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Conocer la causa específica es clave, especialmente si las infecciones se repiten. No siempre es por falta de higiene.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4">Causas más frecuentes en mujeres</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { causa: "Actividad sexual", detalle: "Bacteria de la zona vaginal/anal entra a la uretra. La cistitis post-coital ('luna de miel') es muy común." },
                  { causa: "Higiene inadecuada", detalle: "Limpiarse de atrás hacia adelante lleva bacteria del ano hacia la uretra." },
                  { causa: "Aguantarse la orina", detalle: "La retención urinaria permite que las bacterias se multipliquen en la vejiga." },
                  { causa: "Menopausia", detalle: "La caída de estrógenos altera la flora vaginal protectora y el pH urinario." },
                  { causa: "Espermicidas o diafragma", detalle: "Alteran la flora vaginal natural y favorecen el crecimiento de E. coli." },
                  { causa: "Embarazo", detalle: "Cambios hormonales + presión del útero sobre vejiga y uréteres." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-teal-500 shrink-0 font-bold mt-0.5">•</span>
                    <span><strong className="text-slate-800">{item.causa}:</strong> <span className="text-slate-600">{item.detalle}</span></span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Causas en hombres</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Hiperplasia prostática — orina residual donde crecen bacterias",
                    "Prostatitis — infección de la próstata",
                    "Cálculos renales o vesicales",
                    "Sonda vesical (catéter)",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-slate-700">
                      <span className="text-teal-500 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-semibold text-amber-800 mb-3">Factores de riesgo en todos</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Diabetes mellitus — glucosa en orina = alimento para bacterias",
                    "Sistema inmune debilitado (VIH, quimioterapia)",
                    "Cálculos renales — obstruyen el flujo de orina",
                    "Anomalías del tracto urinario (reflujo, riñón poliquístico)",
                    "Vejiga neurogénica (lesión medular, esclerosis múltiple)",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-amber-800">
                      <span className="shrink-0">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <Link href="/calculos-renales" className="text-sm text-amber-700 hover:text-amber-900 font-medium underline">
                    Ver cálculos renales como causa de infecciones →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── DIAGNÓSTICO ── */}
        <section className="bg-slate-800 text-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-2">Diagnóstico</h2>
              <p className="text-slate-300 mb-8 max-w-2xl">
                El diagnóstico correcto guía el tratamiento correcto. No todas las infecciones urinarias son iguales.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Examen General de Orina (EGO)",
                  icon: "🔬",
                  bg: "bg-teal-800",
                  items: [
                    "Resultado en 30 minutos",
                    "Detecta leucocitos (inflamación) y nitritos (bacteria)",
                    "Sangre microscópica y bacteria visibles",
                    "Primera prueba diagnóstica — básica y rápida",
                  ],
                },
                {
                  title: "Urocultivo y antibiograma",
                  icon: "🧪",
                  bg: "bg-teal-700",
                  badge: "Estándar de oro",
                  items: [
                    "Identifica la bacteria específica",
                    "Determina qué antibiótico funciona (antibiograma)",
                    "Resultados en 48–72 horas",
                    "Indispensable en recurrentes, hombres, embarazo, falla de tratamiento",
                  ],
                },
                {
                  title: "Estudios adicionales",
                  icon: "📡",
                  bg: "bg-slate-600",
                  items: [
                    "Ultrasonido: infecciones recurrentes, sospecha de cálculos, hombres",
                    "Cistoscopia: recurrentes sin causa clara, hematuria persistente",
                    "TAC abdominopélvico: pielonefritis complicada, sospecha de absceso",
                  ],
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`${card.bg} rounded-2xl p-5`}
                >
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="font-semibold mb-1">{card.title}</div>
                  {card.badge && (
                    <span className="text-xs bg-teal-500 text-white px-2 py-0.5 rounded-full inline-block mb-2">{card.badge}</span>
                  )}
                  <ul className="space-y-1.5 mt-2">
                    {card.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-200 flex gap-2">
                        <span className="text-teal-400 shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRATAMIENTO ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Tratamiento de la infección urinaria</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              El tratamiento correcto requiere el antibiótico correcto para la bacteria correcta. Aquí está lo que debes saber.
            </p>
          </motion.div>

          {/* Aviso automedicación */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-red-900 text-white rounded-2xl p-6 mb-8"
          >
            <div className="flex gap-4 items-start">
              <span className="text-3xl shrink-0">🚫</span>
              <div>
                <h3 className="font-bold text-lg mb-2">NUNCA te automediques con antibióticos</h3>
                <p className="text-red-100 leading-relaxed">
                  Usar el antibiótico incorrecto, en dosis incorrecta o por tiempo insuficiente <strong>no cura la infección</strong> — selecciona las bacterias más resistentes y las deja crecer. El resultado: una infección que regresa más fuerte, que requiere antibióticos más potentes o intravenosos, y que se vuelve recurrente. El antibiótico debe recetarse después de evaluar tus síntomas y, en muchos casos, un urocultivo.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bacteriuria asintomática */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 border border-blue-300 rounded-2xl p-6 mb-8"
          >
            <div className="flex gap-3 items-start">
              <span className="text-2xl shrink-0">💡</span>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">¿Bacterias en la orina sin síntomas? No siempre necesitas antibiótico</h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Esto se llama <strong>bacteriuria asintomática</strong>: hay bacteria en la orina, pero tú no sientes nada. En la mayoría de personas — incluyendo mujeres adultas, hombres y personas mayores — <strong>no se trata</strong>, porque:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-blue-700">
                  <li className="flex gap-2"><span>•</span><span>Tratarla no previene infecciones sintomáticas futuras</span></li>
                  <li className="flex gap-2"><span>•</span><span>Genera resistencia bacteriana</span></li>
                  <li className="flex gap-2"><span>•</span><span>Altera la flora bacteriana protectora</span></li>
                </ul>
                <p className="text-blue-700 text-sm mt-2">
                  <strong>Solo se trata en:</strong> mujeres embarazadas y antes de procedimientos urológicos invasivos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Antibióticos */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4">Antibióticos de uso común para cistitis (ejemplos que tu médico puede prescribir)</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {antibioticosList.map((ab, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                  <div className="font-semibold text-slate-800">{ab.name}</div>
                  <div className="text-xs text-slate-500 mb-3">{ab.brand}</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-green-500 shrink-0">✓</span>
                      <span className="text-slate-700">{ab.pro}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-amber-500 shrink-0">⚠</span>
                      <span className="text-slate-700">{ab.con}</span>
                    </div>
                    <div className="text-xs text-slate-500 border-t pt-2 mt-2">{ab.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-3">
              * La elección del antibiótico depende del urocultivo, patrones locales de resistencia, embarazo, alergias y función renal. Solo tu médico puede prescribirlo.
            </p>
          </motion.div>

          {/* Pielonefritis */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8"
          >
            <h3 className="font-bold text-red-800 mb-3">Pielonefritis (infección renal): tratamiento diferente</h3>
            <ul className="space-y-2 text-sm text-red-700">
              <li className="flex gap-2"><span>→</span><span>Tratamiento más prolongado: 10–14 días de antibiótico</span></li>
              <li className="flex gap-2"><span>→</span><span>Puede requerir hospitalización si hay fiebre alta con vómito, deshidratación, sepsis o embarazo</span></li>
              <li className="flex gap-2"><span>→</span><span>Antibióticos intravenosos inicialmente si la situación es grave</span></li>
              <li className="flex gap-2"><span>→</span><span>Urocultivo obligatorio para guiar el tratamiento</span></li>
            </ul>
          </motion.div>

          {/* Fenazopiridina + medidas generales */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-amber-50 border border-amber-200 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-amber-800 mb-2">Alivio de síntomas: Fenazopiridina</h3>
              <p className="text-sm text-amber-700 leading-relaxed mb-3">
                Analgésico urinario que alivia el ardor, la urgencia y el dolor mientras el antibiótico hace efecto. <strong>No es antibiótico — no cura la infección.</strong>
              </p>
              <div className="bg-amber-100 border border-amber-300 rounded-lg p-3 text-sm text-amber-800">
                ⚠️ Tiñe la orina de color naranja intenso o rojo. Es normal y no significa sangre. No te asustes.
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-teal-50 border border-teal-200 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-teal-800 mb-3">Medidas de apoyo en casa</h3>
              <ul className="space-y-2 text-sm text-teal-700">
                {[
                  "Tomar mucha agua — 2–3 litros al día (diluye bacteria)",
                  "Orinar frecuentemente — no aguantarse",
                  "Aplicar calor suave en el abdomen bajo para el dolor",
                  "Evitar irritantes: café, alcohol, picante, cítricos",
                  "Descanso — el cuerpo necesita energía para combatir la infección",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-teal-500 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── IVU RECURRENTES ── */}
        <section className="bg-teal-900 text-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-2">Infecciones urinarias recurrentes</h2>
              <p className="text-teal-200 mb-3 max-w-2xl">
                Si tienes ≥2 infecciones en 6 meses, o ≥3 en 12 meses, se considera infección urinaria recurrente. No es mala suerte — tiene una causa identificable y un plan de solución.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-teal-800 rounded-2xl p-6"
              >
                <h3 className="font-semibold mb-4">¿Por qué regresan?</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-teal-700 rounded-lg p-3">
                    <div className="font-semibold">80%: Reinfección</div>
                    <p className="text-teal-200 mt-1">Nueva bacteria que entra de nuevo al tracto urinario. La infección anterior se curó, pero el ambiente favorece que entren otras bacterias.</p>
                  </div>
                  <div className="bg-teal-700 rounded-lg p-3">
                    <div className="font-semibold">20%: Recaída</div>
                    <p className="text-teal-200 mt-1">La misma bacteria que no se eliminó completamente. Ocurre cuando el tratamiento fue incompleto o la bacteria era resistente al antibiótico usado.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-teal-800 rounded-2xl p-6"
              >
                <h3 className="font-semibold mb-4">Causas identificables</h3>
                <ul className="space-y-2 text-sm text-teal-100">
                  {[
                    "Actividad sexual sin profilaxis post-coital",
                    "Uso de espermicidas — alteran flora protectora",
                    "Menopausia con atrofia vaginal",
                    "Diabetes no controlada",
                    "Residuo post-miccional elevado (vejiga no vacía)",
                    "Prolapso de órganos pélvicos",
                    "Cálculos renales o vesicales",
                    "Anomalías anatómicas del tracto urinario",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-teal-400 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 bg-white/10 rounded-2xl p-5"
            >
              <h3 className="font-semibold mb-3">Evaluación necesaria en infecciones recurrentes</h3>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-teal-100">
                {[
                  "Urocultivo en cada episodio — comparar bacterias y resistencias",
                  "Ultrasonido renal y vesical",
                  "Medición de residuo post-miccional",
                  "Cistoscopia en casos seleccionados",
                  "Glucosa y función renal",
                  "Evaluación hormonal en menopausia",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-teal-300 shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 text-center">
                <a
                  href={WA_RECURRENTE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-white text-teal-900 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition shadow"
                >
                  Quiero un plan para mis infecciones recurrentes
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PREVENCIÓN ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Prevención de infecciones urinarias</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Muchas infecciones urinarias son prevenibles. Estas medidas, combinadas, reducen significativamente el riesgo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
            >
              <h3 className="font-semibold text-slate-800 mb-4">Medidas de higiene y hábitos</h3>
              <ul className="space-y-2.5">
                {prevencionHigiene.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className={`shrink-0 font-bold ${item.ok ? "text-green-500" : "text-red-400"}`}>
                      {item.ok ? "✓" : "✗"}
                    </span>
                    <span className="text-slate-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5">
                <h3 className="font-semibold text-teal-800 mb-3">Suplementos con evidencia científica</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-teal-700">Arándano (extracto concentrado)</div>
                    <p className="text-slate-600 mt-0.5">Previene adhesión de E. coli a la vejiga. Requiere 36 mg de proantocianidinas diarias. Las cápsulas de extracto son más efectivas que el jugo.</p>
                  </div>
                  <div>
                    <div className="font-medium text-teal-700">D-Manosa (2 g/día)</div>
                    <p className="text-slate-600 mt-0.5">Azúcar simple que evita que la bacteria se adhiera a la pared vesical. Evidencia moderada de efectividad preventiva.</p>
                  </div>
                  <div>
                    <div className="font-medium text-teal-700">Probióticos vaginales (Lactobacillus)</div>
                    <p className="text-slate-600 mt-0.5">Restauran la flora vaginal protectora. L. crispatus y L. rhamnosus han mostrado reducción en frecuencia de infecciones.</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
                <h3 className="font-semibold text-purple-800 mb-3">Inmunoprofilaxis: Urovaxom</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Extracto de lisados bacterianos de <em>E. coli</em> inactivada. Estimula el sistema inmune para reconocer y combatir la bacteria antes de que cause infección. Se toma en ciclos orales. Las guías europeas de urología lo recomiendan para la prevención de infecciones urinarias recurrentes no complicadas. Requiere prescripción médica.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800 text-white rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-3">Profilaxis antibiótica (casos seleccionados)</h3>
              <p className="text-slate-300 text-sm mb-3">Para mujeres con ≥3 infecciones al año que no responden a medidas no antibióticas.</p>
              <div className="space-y-2 text-sm text-slate-200">
                <div><strong className="text-white">Post-coital:</strong> dosis única de antibiótico después de relaciones sexuales</div>
                <div><strong className="text-white">Continua:</strong> dosis baja diaria por 6–12 meses (nitrofurantoína, fosfomicina semanal)</div>
              </div>
              <p className="text-slate-400 text-xs mt-3">Requiere supervisión médica y urocultivos periódicos.</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-pink-50 border border-pink-200 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-pink-800 mb-3">Terapia estrogénica vaginal (menopausia)</h3>
              <p className="text-sm text-pink-700 leading-relaxed">
                Los estrógenos vaginales en crema u óvulos restauran el pH y la flora vaginal natural. En mujeres postmenopáusicas con infecciones recurrentes, es una de las intervenciones más efectivas disponibles. Actúan localmente — absorción sistémica mínima. Requieren prescripción médica.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SITUACIONES ESPECIALES ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Situaciones especiales</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {especiales.map((e, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`rounded-2xl border p-6 ${e.color}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{e.icon}</span>
                    <h3 className={`font-bold text-lg ${e.titleColor}`}>{e.title}</h3>
                  </div>
                  <ul className="space-y-1.5 text-sm text-slate-700 mb-3">
                    {e.items.map((item, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-slate-400 shrink-0 mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {e.alert && (
                    <div className="text-xs text-slate-600 bg-white/60 border border-slate-200 rounded-lg p-2 mt-2">
                      ⚠ {e.alert}
                    </div>
                  )}
                  {e.link && (
                    <div className="mt-3">
                      <Link href={e.link.href} className="text-sm text-blue-700 hover:text-blue-900 font-medium underline">
                        {e.link.text}
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEÑALES DE ALARMA ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">¿Cuándo buscar atención médica?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-red-50 border-2 border-red-300 rounded-2xl p-6"
            >
              <h3 className="font-bold text-red-800 mb-4">🚨 Busca atención urgente si...</h3>
              <ul className="space-y-2">
                {[
                  "Fiebre alta (&gt;38.3°C) con síntomas urinarios",
                  "Dolor intenso en espalda baja o flancos",
                  "Náusea y vómito persistente",
                  "Sangre abundante en la orina",
                  "Imposibilidad de orinar",
                  "Síntomas que empeoran a pesar del tratamiento",
                  "Confusión o alteración del estado mental (adultos mayores)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-red-800" dangerouslySetInnerHTML={{ __html: `<span>🚨</span><span>${item}</span>` }} />
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={WA_URGENTE}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition"
                >
                  Atención urgente — WhatsApp ahora
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-amber-50 border border-amber-300 rounded-2xl p-6"
            >
              <h3 className="font-bold text-amber-800 mb-4">⏰ Busca atención en 24–48 horas si...</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                {[
                  "Tienes ardor, urgencia y frecuencia urinaria (síntomas típicos de cistitis)",
                  "Es tu primera infección y no has recibido diagnóstico",
                  "Tu infección no mejora con el antibiótico que tomaste",
                  "Tienes ≥3 infecciones en el último año",
                  "Eres hombre con síntomas urinarios",
                  "Estás embarazada (incluso sin síntomas si el cultivo salió positivo)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0">⏰</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── POR QUÉ DR. QUIROZ ── */}
        <section className="bg-teal-50 py-12">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-teal-900 mb-6">Por qué elegir al Dr. Quiroz para infección urinaria</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: "⚡", title: "Atención el mismo día", detail: "Para infecciones agudas que necesitan tratamiento inmediato" },
                  { icon: "🔬", title: "Diagnóstico preciso", detail: "Examen de orina en consultorio + urocultivo para antibiótico correcto" },
                  { icon: "📋", title: "Plan de prevención", detail: "Evaluación completa para infecciones recurrentes: no solo tratar, sino prevenir" },
                  { icon: "🔍", title: "Investigación de causas", detail: "Cistoscopia, ultrasonido y evaluación completa cuando se requiere" },
                  { icon: "🔗", title: "Causas subyacentes", detail: "Tratamiento de HPB, cálculos o prolapso como origen de infecciones en hombres y mujeres" },
                  { icon: "📅", title: "Seguimiento a largo plazo", detail: "No una sola consulta — acompañamiento para que las infecciones no regresen" },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-teal-200 rounded-xl p-4 shadow-sm">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-teal-800">{item.title}</div>
                    <p className="text-sm text-slate-600 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Preguntas frecuentes sobre infección urinaria</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="bg-teal-700 text-white py-16">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-3">Si tienes ardor al orinar, no esperes</h2>
              <p className="text-teal-100 max-w-xl mx-auto mb-4 leading-relaxed">
                Las infecciones urinarias no tratadas se complican. Una consulta oportuna, el antibiótico correcto y un plan de prevención marcan toda la diferencia.
              </p>
              <div className="bg-teal-600 border border-teal-400 rounded-xl p-4 max-w-lg mx-auto mb-8">
                <p className="font-semibold">¿Te da infección urinaria cada mes?</p>
                <p className="text-teal-100 text-sm mt-1">No es normal y tiene solución. Un plan personalizado puede eliminar las recurrencias.</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={WA_URGENTE}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-teal-900 font-bold px-8 py-3 rounded-xl hover:bg-teal-50 transition shadow-lg text-lg"
                >
                  Agenda consulta urgente
                </a>
                <a
                  href={WA_RECURRENTE}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-teal-500 transition border border-teal-400 text-lg"
                >
                  Plan para infecciones recurrentes
                </a>
              </div>
              <p className="mt-5 text-teal-200 text-sm">
                Hospital Ángeles León (Cons. 615, Torre II · Lun, Mar, Jue) · Hospital Christus Muguerza Altagracia (Mié, Vie)
              </p>
              <p className="mt-1 text-teal-300 text-sm font-medium">Atención el mismo día disponible según agenda</p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-200 py-8 text-center">
        <p className="font-semibold">© 2025 Dr. Alejandro Quiroz Compeán | Urología Robótica León</p>
        <p className="text-slate-400 text-sm mt-2">Urólogo Oncólogo · Cirugía Robótica · León, Guanajuato, México</p>
        <p className="text-slate-500 text-xs mt-2">
          C.P. 8860892 · C.E. 12465195 · Certificado CONAMEU · COFEPRIS No. 2611072002A00152
        </p>
      </footer>
    </div>
  );
}
