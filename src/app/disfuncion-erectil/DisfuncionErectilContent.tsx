'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { trackWhatsApp } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WHATSAPP_NUMBER = "5214776330492";
function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
const WA_CONFIDENCIAL = waLink("Hola Dr. Quiroz, me gustaría agendar una consulta confidencial para tratar un problema de disfunción eréctil.");

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "¿La disfunción eréctil es normal con la edad?",
    a: "La frecuencia de disfunción eréctil aumenta con la edad, pero NO es una consecuencia inevitable ni normal del envejecimiento. Un hombre de 60 o 70 años puede y debe tener una vida sexual activa y satisfactoria. Lo que cambia con la edad es que puede necesitar más estimulación y el tiempo de recuperación entre erecciones aumenta — pero no perder la capacidad de erección.",
  },
  {
    q: "¿Los medicamentos para la erección (tadalafil, sildenafil) son seguros?",
    a: "Sí, son medicamentos ampliamente estudiados y seguros cuando se usan bajo supervisión médica. El sildenafil lleva más de 25 años de uso clínico. La principal restricción de seguridad es no combinarlos con nitratos (medicamentos para angina o dolor de pecho). Por eso es fundamental la evaluación médica antes de usarlos — tu urólogo revisará tus medicamentos actuales y tu salud cardiovascular.",
  },
  {
    q: "¿Puedo tomar tadalafil todos los días?",
    a: "Existe una presentación de tadalafil específicamente diseñada y aprobada para uso diario. Es diferente a la presentación de uso ocasional. Esta modalidad permite actividad sexual espontánea sin necesidad de planear. Tu urólogo determinará si esta opción es apropiada para ti según tu frecuencia de actividad sexual, salud general y otros medicamentos. No decidas esto por cuenta propia.",
  },
  {
    q: "¿El sildenafil funciona en todos los hombres?",
    a: "Los inhibidores de PDE5 (sildenafil, tadalafil) son efectivos en la mayoría de los pacientes — alrededor del 70–80% reportan mejoría. La respuesta es menor en disfunción eréctil severa por daño vascular avanzado, diabetes de larga evolución sin control, o daño neurológico severo por cirugía de próstata. En estos casos existen otras opciones efectivas como inyecciones intracavernosas o implante de prótesis.",
  },
  {
    q: "¿La disfunción eréctil significa que soy infértil?",
    a: "No necesariamente. La erección y la fertilidad son funciones diferentes. Un hombre con disfunción eréctil puede tener una producción de espermatozoides completamente normal. Sin embargo, si la disfunción eréctil impide tener relaciones sexuales con penetración, sí afecta la posibilidad de concepción natural. Existen técnicas de reproducción asistida que pueden ayudar en esos casos.",
  },
  {
    q: "¿Puedo tomar medicamentos para la erección si tengo presión alta?",
    a: "En la mayoría de los casos sí, pero requiere evaluación médica. Los inhibidores de PDE5 pueden bajar ligeramente la presión arterial. La principal preocupación es si tomas nitratos para el corazón — esa combinación está contraindicada. Si tomas medicamentos para la presión, tu urólogo evaluará qué medicamentos tomas, si son compatibles y si tu corazón está en condiciones para la actividad sexual.",
  },
  {
    q: "¿Qué médico trata la disfunción eréctil?",
    a: "El urólogo es el especialista indicado. La disfunción eréctil es una subespecialidad dentro de la urología llamada andrología o medicina sexual. El urólogo puede hacer la evaluación completa — física, hormonal y vascular — y ofrecer todos los tratamientos disponibles, desde medicamentos orales hasta implante de prótesis si fuera necesario.",
  },
  {
    q: "¿La masturbación frecuente causa disfunción eréctil?",
    a: "No. La masturbación por sí sola no causa disfunción eréctil. Es un mito sin base científica. Lo que sí puede ocurrir es que una masturbación muy reciente reduce temporalmente la respuesta sexual — como pasa con cualquier actividad sexual. El problema real ocurre cuando se combina con uso excesivo de pornografía, lo que puede condicionar la respuesta sexual a estímulos muy intensos.",
  },
  {
    q: "¿La pornografía causa disfunción eréctil?",
    a: "El uso excesivo de pornografía puede contribuir a la disfunción eréctil, especialmente en hombres jóvenes, a través de un proceso de condicionamiento. El cerebro se acostumbra a niveles muy altos de estimulación visual, haciendo que la estimulación 'normal' con una pareja real parezca insuficiente. Esto se llama 'disfunción eréctil inducida por pornografía'. La solución principal es un periodo de abstinencia de pornografía, usualmente con apoyo psicológico.",
  },
  {
    q: "¿Puedo combinar tadalafil o sildenafil con alcohol?",
    a: "El alcohol moderado (1–2 bebidas) generalmente no tiene interacción grave con estos medicamentos. Sin embargo, el alcohol por sí mismo inhibe la erección — muchos hombres lo experimentan. Además, ambas sustancias bajan la presión arterial, lo que en combinación puede causar mareo o desmayo. Tu urólogo te indicará las recomendaciones específicas según tu caso.",
  },
  {
    q: "¿El ciclismo causa disfunción eréctil?",
    a: "El ciclismo intenso y prolongado puede ejercer presión sobre el perineo (zona entre escroto y ano), comprimiendo nervios y vasos que irrigan el pene. Ciclistas que pedalean varias horas diarias durante años tienen mayor riesgo. El riesgo se reduce significativamente con asientos ergonómicos con canal central (nariz corta o ranura), ajuste correcto de la bicicleta y pausas frecuentes. El ciclismo recreativo moderado no supone riesgo relevante.",
  },
  {
    q: "¿La vasectomía causa disfunción eréctil?",
    a: "No. La vasectomía no afecta la función eréctil. El procedimiento interrumpe los conductos deferentes (que transportan esperma) pero no afecta los vasos sanguíneos, nervios ni la producción de testosterona que son necesarios para la erección. El volumen de eyaculación puede disminuir mínimamente (el esperma representa solo el 2–5% del volumen total del semen), pero la función eréctil y el orgasmo son completamente normales.",
  },
  {
    q: "¿El finasteride (para la próstata) causa disfunción eréctil?",
    a: "Puede causarla en un pequeño porcentaje de pacientes (aproximadamente 5–8%). Si tomás finasteride y notás cambios en tu función eréctil o libido, coméntalo con tu urólogo — puede ajustar el tratamiento o explorar alternativas. En la mayoría de casos los efectos se revierten al suspender el medicamento, aunque existe un grupo pequeño de pacientes donde persisten.",
  },
  {
    q: "¿La disfunción eréctil puede ser señal de problemas cardiacos?",
    a: "Sí, y es muy importante saberlo. Las arterias del pene son pequeñas — cuando hay aterosclerosis (obstrucción por colesterol), las arterias pequeñas se obstruyen primero, antes de que las arterias coronarias muestren síntomas. La disfunción eréctil de causa vascular en un hombre de 40–60 años puede preceder 3–5 años a un evento cardiovascular. Por eso la evaluación siempre incluye perfil cardiovascular. Es una oportunidad de prevención.",
  },
  {
    q: "¿Los ejercicios de Kegel ayudan con la disfunción eréctil?",
    a: "Sí, tienen beneficio comprobado, especialmente para la disfunción eréctil por fuga venosa (cuando el pene no retiene sangre correctamente). Los ejercicios de Kegel fortalecen el músculo isquiocavernoso, que ayuda a comprimir las venas y mantener la erección. Estudios muestran mejoría en un porcentaje importante de pacientes con disfunción eréctil leve-moderada. Son parte del tratamiento integral, no un sustituto de la evaluación médica.",
  },
  {
    q: "¿Cuánto cuesta el tratamiento para la disfunción eréctil?",
    a: "El costo varía ampliamente según el tratamiento. Los medicamentos orales genéricos (sildenafil genérico) son los más económicos. El tadalafil de uso diario tiene costo mayor. Las inyecciones intracavernosas son opciones de costo medio. El implante de prótesis peneana es la opción más costosa pero es definitiva. En la consulta, el Dr. Quiroz puede orientarte sobre opciones según tu situación específica y la más costo-efectiva para tu caso.",
  },
];

type CausaItem = { icon: string; titulo: string; detalle: string; alerta?: string };
type CausaGroup = { categoria: string; color: string; border: string; bg: string; icon: string; items: CausaItem[] };

const causas: CausaGroup[] = [
  {
    categoria: "Causas vasculares — las más frecuentes",
    icon: "🫀",
    color: "text-red-700",
    border: "border-red-200",
    bg: "bg-red-50",
    items: [
      { icon: "🩸", titulo: "Diabetes mellitus", detalle: "Principal causa de disfunción eréctil. Daña vasos sanguíneos y nervios del pene. Puede ser el primer síntoma de diabetes no diagnosticada.", alerta: "Si tienes DE y menos de 50 años sin causa clara, descarta diabetes." },
      { icon: "💉", titulo: "Hipertensión arterial", detalle: "Daña las arterias del pene con el tiempo. Algunos medicamentos antihipertensivos también pueden afectar la erección." },
      { icon: "🧈", titulo: "Colesterol alto y aterosclerosis", detalle: "La placa reduce el flujo sanguíneo al pene. La disfunción eréctil puede ser la primera señal de enfermedad cardiovascular." },
      { icon: "⚖️", titulo: "Obesidad y síndrome metabólico", detalle: "Reduce testosterona, daña vasos sanguíneos e inflamación crónica. Perder el 10% del peso corporal mejora significativamente la función eréctil." },
    ],
  },
  {
    categoria: "Causas hormonales",
    icon: "🧪",
    color: "text-amber-700",
    border: "border-amber-200",
    bg: "bg-amber-50",
    items: [
      { icon: "📉", titulo: "Testosterona baja (hipogonadismo)", detalle: "Afecta deseo sexual y calidad de erección. Común después de los 40 años. Requiere análisis de sangre en ayunas para diagnosticar correctamente." },
      { icon: "🔬", titulo: "Prolactina elevada", detalle: "Hormona que, en niveles altos, suprime la testosterona y el deseo sexual. Puede indicar un tumor benigno de hipófisis." },
      { icon: "🦋", titulo: "Problemas de tiroides", detalle: "Tanto el hipotiroidismo como el hipertiroidismo pueden afectar la función eréctil y el deseo sexual." },
    ],
  },
  {
    categoria: "Causas neurológicas",
    icon: "🧠",
    color: "text-blue-700",
    border: "border-blue-200",
    bg: "bg-blue-50",
    items: [
      { icon: "⚕️", titulo: "Cirugía prostática", detalle: "Prostatectomía radical puede dañar nervios erectores adyacentes. Con cirugía robótica con preservación de nervios, la recuperación eréctil es significativamente mejor." },
      { icon: "⚡", titulo: "Lesión medular", detalle: "La capacidad eréctil depende del nivel y tipo de lesión." },
      { icon: "🔄", titulo: "Esclerosis múltiple y Parkinson", detalle: "Afectan la transmisión nerviosa necesaria para la erección." },
      { icon: "🩸", titulo: "Neuropatía diabética", detalle: "Daño nervioso por diabetes. Se suma al daño vascular haciendo la disfunción más compleja." },
    ],
  },
  {
    categoria: "Causas psicológicas",
    icon: "🧘",
    color: "text-purple-700",
    border: "border-purple-200",
    bg: "bg-purple-50",
    items: [
      { icon: "😰", titulo: "Ansiedad de desempeño", detalle: "El miedo a fallar crea un círculo vicioso: ansiedad → erección insuficiente → más ansiedad. Muy común en hombres jóvenes." },
      { icon: "😔", titulo: "Depresión", detalle: "Afecta libido y función eréctil directamente. Los antidepresivos también pueden causar disfunción como efecto secundario." },
      { icon: "😤", titulo: "Estrés laboral o personal", detalle: "El cortisol elevado por estrés crónico interfiere con la erección. Muy común en ejecutivos y profesionistas." },
      { icon: "📱", titulo: "Uso excesivo de pornografía", detalle: "Puede condicionar la respuesta sexual a estímulos muy intensos, dificultando la respuesta con una pareja real.", alerta: "Especialmente relevante en hombres jóvenes con erecciones normales durante masturbación." },
    ],
  },
  {
    categoria: "Medicamentos que pueden causar disfunción eréctil",
    icon: "💊",
    color: "text-slate-700",
    border: "border-slate-200",
    bg: "bg-slate-50",
    items: [
      { icon: "💊", titulo: "Algunos antihipertensivos", detalle: "Ciertos diuréticos y betabloqueadores. No todos — muchos son neutrales o incluso beneficiosos." },
      { icon: "💊", titulo: "Algunos antidepresivos", detalle: "Especialmente los ISRS (inhibidores de recaptación de serotonina). Efecto común y subestimado." },
      { icon: "💊", titulo: "Finasteride (para HPB o calvicie)", detalle: "En un pequeño porcentaje de pacientes. Reversible en la mayoría al suspender el medicamento." },
      { icon: "💊", titulo: "Antipsicóticos", detalle: "Varios mecanismos incluyendo aumento de prolactina.", alerta: "Si la disfunción empezó después de iniciar un medicamento nuevo, coméntalo con tu médico. Puede haber alternativas." },
    ],
  },
  {
    categoria: "Factores de estilo de vida",
    icon: "🏃",
    color: "text-teal-700",
    border: "border-teal-200",
    bg: "bg-teal-50",
    items: [
      { icon: "🚬", titulo: "Tabaquismo", detalle: "Daña directamente las arterias del pene. Duplica el riesgo de disfunción eréctil. Dejar de fumar mejora la función eréctil incluso en etapas avanzadas." },
      { icon: "🍺", titulo: "Alcohol excesivo", detalle: "El alcohol crónico en exceso daña el hígado, reduce testosterona y afecta nervios. El alcohol agudo inhibe la erección." },
      { icon: "💉", titulo: "Drogas recreativas", detalle: "Cocaína, anfetaminas y uso crónico de cannabis asociados a disfunción eréctil." },
      { icon: "🛋️", titulo: "Sedentarismo", detalle: "El ejercicio regular mejora el flujo sanguíneo, aumenta testosterona y reduce la disfunción eréctil en varios estudios." },
    ],
  },
];

type TratamientoItem = { name: string; badge?: string; desc: string; pros: string[]; cons?: string[]; nota?: string; featured?: boolean };

const tratamientos: TratamientoItem[] = [
  {
    name: "Inhibidores de PDE5 (medicamentos orales)",
    badge: "Primera línea",
    featured: true,
    desc: "Tadalafil, sildenafil, vardenafil y avanafilo. Mejoran el flujo sanguíneo al pene facilitando y prolongando la erección. NO causan erección automática — requieren estimulación sexual.",
    pros: [
      "Efectivos en el 70–80% de los pacientes",
      "No invasivos — se toman por vía oral",
      "Amplia experiencia clínica de seguridad",
      "Varias opciones según necesidades del paciente",
    ],
    cons: [
      "Contraindicados con nitratos (medicamentos para angina)",
      "Requieren estimulación sexual para funcionar",
      "Respuesta variable en daño neurológico o vascular severo",
    ],
    nota: "Tu urólogo determinará qué medicamento, presentación y frecuencia es la adecuada según tu salud cardiovascular, otros medicamentos y tus necesidades específicas. Todos requieren receta médica.",
  },
  {
    name: "Terapia de reemplazo de testosterona",
    badge: "Indicado en hipogonadismo",
    desc: "Para pacientes con testosterona baja confirmada en análisis de sangre. Mejora el deseo sexual y puede mejorar la respuesta a medicamentos orales.",
    pros: [
      "Mejora libido, energía y composición corporal",
      "Potencia el efecto de otros tratamientos",
      "Varias formas disponibles: gel, inyecciones, parches",
    ],
    cons: [
      "Requiere monitoreo continuo de próstata y hematocrito",
      "No usar si hay ciertas condiciones de próstata",
      "No siempre mejora la erección por sí solo",
    ],
    nota: "Solo está indicado si la testosterona está baja en análisis de sangre. No es útil si los niveles son normales.",
  },
  {
    name: "Inyecciones intracavernosas",
    badge: "Alta efectividad",
    desc: "Inyección directa de medicamento vasodilatador en el pene, minutos antes de la actividad sexual. Produce erección independiente de estimulación.",
    pros: [
      "Muy efectivo — funciona cuando los orales fallan",
      "Independiente de estimulación sexual",
      "Útil en daño neurológico (cirugía prostática)",
    ],
    cons: [
      "Requiere inyectarse (incomodidad inicial)",
      "Riesgo de erección prolongada (priapismo) — requiere atención inmediata",
      "Menos espontáneo",
    ],
    nota: "El Dr. Quiroz enseña la técnica correcta y supervisa las primeras aplicaciones.",
  },
  {
    name: "Dispositivo de vacío (bomba de erección)",
    badge: "Sin medicamentos",
    desc: "Cilindro que crea vacío alrededor del pene atrayendo sangre, más anillo de constricción que mantiene la erección.",
    pros: [
      "No invasivo, sin medicamentos",
      "Efectivo en la mayoría de casos",
      "Costo único, sin receta",
    ],
    cons: [
      "Menos espontáneo, requiere preparación",
      "Curva de aprendizaje",
      "Tiempo limitado de uso del anillo constrictor",
    ],
  },
  {
    name: "Ondas de choque de baja intensidad",
    badge: "No invasivo",
    desc: "Terapia con ondas acústicas que mejoran el flujo sanguíneo y estimulan la formación de nuevos vasos en el pene.",
    pros: [
      "No invasivo, sin medicamentos",
      "Estudios muestran mejoría en disfunción vascular leve-moderada",
      "Puede mejorar respuesta a medicamentos orales",
    ],
    cons: [
      "Efecto temporal, puede necesitar mantenimiento",
      "Evidencia científica aún en desarrollo",
      "No efectivo en daño neurológico severo",
    ],
    nota: "Protocolo de varias sesiones. Mejor en hombres jóvenes sin comorbilidades severas.",
  },
  {
    name: "Implante de prótesis peneana",
    badge: "Solución definitiva",
    desc: "Dispositivo quirúrgico que reemplaza los cuerpos cavernosos del pene. Permite erección a demanda, permanente.",
    pros: [
      "Solución definitiva cuando otros tratamientos fallan",
      "Satisfacción muy alta entre pacientes y parejas",
      "Orgasmo y eyaculación normales se conservan",
      "Durabilidad prolongada",
    ],
    cons: [
      "Procedimiento quirúrgico con sus riesgos habituales",
      "Irreversible — decisión que requiere reflexión informada",
      "Costo más elevado",
    ],
    nota: "Dos tipos disponibles: prótesis inflable (más natural) y semi-rígida (más simple). Tu urólogo explicará cada opción en detalle.",
  },
];

const suplementos = [
  { nombre: "L-arginina", evidencia: "Moderada", nota: "Precursor de óxido nítrico. Puede ayudar en casos leves. Requiere uso constante y dosis altas para efecto." },
  { nombre: "Vitamina D", evidencia: "Moderada", nota: "La deficiencia de vitamina D se asocia a disfunción eréctil. Útil solo si tienes deficiencia confirmada en análisis." },
  { nombre: "Zinc", evidencia: "Limitada", nota: "Útil solo si hay deficiencia documentada. El zinc es necesario para producción de testosterona." },
  { nombre: "Ginseng coreano (Panax)", evidencia: "Limitada", nota: "Estudios pequeños muestran mejoría leve. Requiere uso prolongado para ver efecto." },
  { nombre: "Maca, Tribulus, Yohimbina", evidencia: "Sin evidencia sólida", nota: "Populares en mercado pero sin ensayos clínicos rigurosos que respalden su uso. La yohimbina puede ser peligrosa en algunas condiciones." },
];

function CausaAccordion({ grupo }: { grupo: CausaGroup }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border ${grupo.border} overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left p-5 flex items-center justify-between gap-3 ${grupo.bg}`}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{grupo.icon}</span>
          <span className={`font-semibold ${grupo.color}`}>{grupo.categoria}</span>
        </div>
        <span className="text-slate-400 text-lg shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-5 space-y-4 bg-white"
        >
          {grupo.items.map((item, i) => (
            <div key={i}>
              <div className="flex gap-2 items-start">
                <span className="text-base shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{item.titulo}</div>
                  <div className="text-sm text-slate-600 mt-0.5">{item.detalle}</div>
                  {item.alerta && (
                    <div className="mt-1.5 text-xs bg-amber-50 border border-amber-200 rounded px-2 py-1 text-amber-800">
                      ⚠ {item.alerta}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function TratamientoAccordion({ item }: { item: TratamientoItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border overflow-hidden ${item.featured ? "border-blue-300" : "border-slate-200"}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left p-4 flex items-start justify-between gap-3 ${item.featured ? "bg-blue-50" : "bg-white"}`}
      >
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-800">{item.name}</span>
            {item.badge && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.featured ? "bg-blue-600 text-white" : "bg-slate-700 text-white"}`}>
                {item.badge}
              </span>
            )}
          </div>
          <div className="text-xs text-slate-500 mt-0.5 leading-relaxed line-clamp-2">{item.desc}</div>
        </div>
        <span className="text-slate-400 text-lg shrink-0 mt-0.5">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 pb-4 bg-white space-y-3"
        >
          <p className="text-sm text-slate-700">{item.desc}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <div className="text-xs font-semibold text-green-700 mb-1">Ventajas</div>
              <ul className="space-y-1">
                {item.pros.map((p, i) => (
                  <li key={i} className="flex gap-1.5 text-sm text-slate-700">
                    <span className="text-green-500 shrink-0">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            {item.cons && (
              <div>
                <div className="text-xs font-semibold text-amber-700 mb-1">Consideraciones</div>
                <ul className="space-y-1">
                  {item.cons.map((c, i) => (
                    <li key={i} className="flex gap-1.5 text-sm text-slate-700">
                      <span className="text-amber-500 shrink-0">⚠</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {item.nota && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
              📋 {item.nota}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

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

export default function DisfuncionErectilContent() {
  return (
    <div className="bg-white text-gris-profundo">
      <main>
        {/* ── HERO ── */}
        <section className="relative bg-petroleo text-editorial py-24 px-4">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-quirurgico to-acero" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-5xl mx-auto text-center"
          >
            <p className="text-quirurgico font-sans font-semibold text-sm uppercase tracking-widest mb-4">
              Andrología · Medicina Sexual · León, Guanajuato
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
              Disfunción Eréctil en León, Guanajuato: Causas, Tratamiento y Soluciones Efectivas
            </h1>
            <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-4">
              Consulta confidencial, diagnóstico preciso y tratamiento personalizado. La disfunción eréctil es un problema médico real con soluciones efectivas en más del 90% de los casos.
            </p>
            <p className="text-quirurgico font-sans font-medium italic mb-10">
              "Consulta confidencial, privada y sin juicios."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href={WA_CONFIDENCIAL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsApp("disfuncion-erectil")}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-acero text-editorial px-8 py-4 rounded-lg font-bold font-sans hover:bg-acero/90 transition-colors shadow-lg cursor-pointer"
                >
                  Agenda consulta confidencial
                </motion.div>
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { stat: "30–50%", label: "de hombres entre 40–70 años tienen algún grado de disfunción eréctil" },
                { stat: ">90%", label: "de los casos tienen tratamiento efectivo con opciones actuales" },
                { stat: "No es normal", label: "perder la capacidad eréctil por envejecer — tiene solución médica" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold">{s.stat}</div>
                  <div className="text-editorial/70 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-blue-300 text-sm">
              Dr. Alejandro Quiroz Compeán · Urólogo certificado por CONAMEU · León, Guanajuato · Atención discreta y profesional
            </p>
          </motion.div>
        </section>

        {/* ── QUÉ ES ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">¿Qué es la disfunción eréctil?</h2>
            <p className="text-slate-600 max-w-2xl mb-8">
              Es la incapacidad persistente de lograr o mantener una erección suficiente para tener relaciones sexuales satisfactorias. La palabra clave es <strong>persistente</strong>.
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
              <h3 className="font-semibold text-slate-800 mb-4">¿Cómo saber si tengo disfunción eréctil?</h3>
              <p className="text-sm text-slate-600 mb-4">Responde estas preguntas:</p>
              <ul className="space-y-2.5">
                {[
                  "¿El problema ocurre en más del 75% de los intentos?",
                  "¿Ha durado más de 3 meses?",
                  "¿Afecta tu calidad de vida o relación de pareja?",
                  "¿Ya no tienes erecciones matutinas?",
                ].map((q, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-slate-700">{q}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                Si respondiste <strong>SÍ a 2 o más</strong> → es momento de consultar a un urólogo.
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
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                <div className="font-semibold text-green-800 mb-2">Disfunción eréctil persistente</div>
                <p className="text-sm text-green-700">Problema médico real que ocurre en más del 75% de los intentos durante más de 3 meses. Tiene causas identificables y tratamiento efectivo.</p>
              </div>
              <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5">
                <div className="font-semibold text-slate-700 mb-2">Falla ocasional — no es disfunción eréctil</div>
                <p className="text-sm text-slate-600">Perder una erección puntualmente por estrés, cansancio, alcohol o ansiedad es completamente normal. No es un problema médico.</p>
              </div>
              <div className="bg-blue-900 text-white rounded-2xl p-5">
                <div className="font-semibold mb-2">La disfunción eréctil también afecta a hombres jóvenes</div>
                <p className="text-sm text-blue-200">El 25% de los nuevos diagnósticos son en hombres menores de 40 años. En ellos las causas psicológicas son más frecuentes, pero siempre requiere evaluación.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SÍNTOMAS ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Síntomas de la disfunción eréctil</h2>
              <p className="text-slate-600 mb-8 max-w-2xl">Más allá de "no puedo tener erección" — la disfunción eréctil se presenta de varias formas.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🚫", label: "Dificultad para lograr erección", detail: "Incluso con estímulo sexual adecuado y sin distracciones", strong: true },
                { icon: "⏱️", label: "Dificultad para mantener la erección", detail: "Se pierde durante el acto sexual antes de la conclusión", strong: true },
                { icon: "📉", label: "Erecciones menos firmes", detail: "Rigidez insuficiente para la penetración" },
                { icon: "🌅", label: "Pérdida de erecciones matutinas", detail: "Signo importante de causa física, no psicológica" },
                { icon: "😰", label: "Ansiedad anticipatoria", detail: "Preocupación antes del acto sexual que empeora el problema" },
                { icon: "💔", label: "Impacto en relación de pareja", detail: "Evitación de intimidad, tensión, pérdida de comunicación" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`rounded-xl border p-4 ${s.strong ? "bg-blue-50 border-blue-300" : "bg-slate-50 border-slate-200"}`}
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className={`font-semibold text-sm ${s.strong ? "text-blue-800" : "text-slate-800"}`}>{s.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAUSAS ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Causas de la disfunción eréctil</h2>
            <p className="text-slate-600 mb-4 max-w-2xl">
              La disfunción eréctil casi nunca es "solo psicológica" ni "solo física" — generalmente hay una combinación. Identificar la causa es esencial para el tratamiento correcto.
            </p>
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-8 text-sm text-amber-800 max-w-2xl">
              <strong>⚠️ Dato importante:</strong> La disfunción eréctil de causa vascular en hombres de 40–60 años puede ser la primera señal de enfermedad cardiovascular — aparece 3–5 años antes de síntomas cardiacos. Es una oportunidad de prevención, no solo un problema sexual.
            </div>
          </motion.div>

          <div className="space-y-3">
            {causas.map((g, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <CausaAccordion grupo={g} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── TIENE CURA ── */}
        <section className="bg-green-700 text-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-3">¿La disfunción eréctil tiene cura?</h2>
              <p className="text-green-100 text-lg mb-8 max-w-2xl">
                <strong>SÍ — en la gran mayoría de casos.</strong> El tipo de solución depende de la causa, pero incluso cuando la causa no se puede revertir por completo, los tratamientos actuales permiten vida sexual satisfactoria.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-600 rounded-2xl p-6">
                <h3 className="font-bold mb-4">Cura completa posible cuando...</h3>
                <ul className="space-y-2 text-sm text-green-100">
                  {[
                    "Causa psicológica (ansiedad, depresión) — con terapia especializada",
                    "Causada por un medicamento — al cambiar a alternativa",
                    "Testosterona baja — con reemplazo hormonal",
                    "Obesidad y sedentarismo — con cambios de estilo de vida",
                    "Post-cirugía prostática — con rehabilitación peneana temprana",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-300 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-600 rounded-2xl p-6">
                <h3 className="font-bold mb-4">Control excelente (aunque no cura)</h3>
                <ul className="space-y-2 text-sm text-green-100">
                  {[
                    "Diabetes, hipertensión — medicamentos orales muy efectivos",
                    "Daño neurológico — inyecciones o implante como solución",
                    "Problemas vasculares severos — opciones definitivas disponibles",
                    "Edad avanzada con múltiples factores — tratamiento combinado",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-300 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-green-500 rounded-lg p-3 text-sm">
                  No tener cura completa NO significa vivir sin erecciones. Los tratamientos permiten vida sexual activa en más del 90% de los casos.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIAGNÓSTICO ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Diagnóstico</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">Una evaluación completa orienta el tratamiento correcto. La consulta es confidencial.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Evaluación clínica",
                icon: "👨‍⚕️",
                items: ["Historia clínica confidencial", "Cuestionario IIEF-5 (función eréctil)", "Examen físico completo", "Evaluación cardiovascular y neurológica"],
              },
              {
                title: "Laboratorio",
                icon: "🔬",
                items: ["Testosterona total y libre (mañana, ayunas)", "Glucosa y HbA1c (diabetes)", "Perfil de lípidos (colesterol)", "Prolactina y función tiroidea", "PSA si corresponde por edad"],
              },
              {
                title: "Estudios especializados",
                icon: "📡",
                items: ["Ecografía doppler peneana (flujo arterial y venoso)", "Prueba de tumescencia nocturna (física vs psicológica)", "Prueba de erección farmacológica", "Evaluación psicológica cuando aplica"],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5"
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-3">{card.title}</h3>
                <ul className="space-y-1.5">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-blue-500 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── TRATAMIENTO ── */}
        <section className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-3">Opciones de tratamiento</h2>
              <div className="bg-blue-900 border border-blue-700 rounded-xl p-4 mb-8 max-w-2xl">
                <p className="text-blue-100 text-sm">
                  <strong>ℹ️ Información educativa — no es prescripción médica.</strong> Todos los tratamientos requieren evaluación médica, receta cuando aplique y seguimiento profesional. Tu urólogo determinará la opción, presentación y frecuencia adecuada según tu caso específico.
                </p>
              </div>
            </motion.div>

            {/* Tabla comparativa PDE5 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800 rounded-2xl p-6 mb-8"
            >
              <h3 className="font-semibold mb-4 text-lg">Medicamentos orales disponibles — comparativa</h3>
              <p className="text-slate-300 text-sm mb-4">Los cuatro medicamentos aprobados para disfunción eréctil. Tu urólogo elegirá el más adecuado según tu situación.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-slate-400 text-left border-b border-slate-700">
                      <th className="pb-2 pr-4">Medicamento</th>
                      <th className="pb-2 pr-4">Inicio de efecto</th>
                      <th className="pb-2 pr-4">Duración aprox.</th>
                      <th className="pb-2">Ventaja principal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {[
                      { med: "Sildenafil", inicio: "30–60 min", duracion: "Varias horas", ventaja: "Más estudiado, mayor experiencia clínica, opción genérica económica" },
                      { med: "Tadalafil", inicio: "30–60 min", duracion: "Hasta 36 horas", ventaja: "Duración larga (espontaneidad), opción de uso diario disponible" },
                      { med: "Vardenafilo", inicio: "30–60 min", duracion: "Varias horas", ventaja: "Menos afectado por alimentos, balance duración-efecto" },
                      { med: "Avanafilo", inicio: "15–30 min", duracion: "Varias horas", ventaja: "Inicio de acción más rápido, perfil de efectos secundarios favorable" },
                    ].map((row, i) => (
                      <tr key={i} className={i === 1 ? "text-blue-200" : "text-slate-200"}>
                        <td className="py-3 pr-4 font-medium">{row.med}</td>
                        <td className="py-3 pr-4">{row.inicio}</td>
                        <td className="py-3 pr-4">{row.duracion}</td>
                        <td className="py-3 text-sm text-slate-300">{row.ventaja}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-red-900/50 border border-red-700 rounded-lg p-3 text-sm text-red-200">
                <strong>⚠️ Contraindicación crítica:</strong> NUNCA combinar estos medicamentos con nitratos (medicamentos para angina como nitroglicerina). Puede causar caída severa y peligrosa de presión arterial. Por esto la evaluación médica previa es obligatoria.
              </div>
            </motion.div>

            {/* Todos los tratamientos */}
            <div className="space-y-3">
              {tratamientos.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <TratamientoAccordion item={t} />
                </motion.div>
              ))}
            </div>

            {/* Estilo de vida */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-slate-800 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-lg mb-4">Cambios de estilo de vida — base del tratamiento</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: "🏃", texto: "Ejercicio aeróbico moderado — mejora flujo sanguíneo y testosterona" },
                  { icon: "🍎", texto: "Dieta mediterránea — reduce riesgo cardiovascular y mejora función eréctil" },
                  { icon: "🚭", texto: "Dejar de fumar — mejoría notable en la función eréctil demostrada" },
                  { icon: "⚖️", texto: "Perder peso — pérdida del 10% del peso puede revertir disfunción leve" },
                  { icon: "😴", texto: "Tratar apnea del sueño — empeora significativamente la función eréctil" },
                  { icon: "🧘", texto: "Reducir estrés — terapia psicológica cuando el componente ansioso es importante" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-slate-200">
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <span>{item.texto}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── VITAMINAS Y SUPLEMENTOS ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Vitaminas y suplementos para la disfunción eréctil</h2>
            <p className="text-slate-600 mb-4 max-w-2xl">
              Respuesta honesta: la mayoría NO tienen evidencia científica sólida. Algunos pueden ayudar en casos específicos de deficiencia.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800 max-w-2xl">
              Antes de gastar en suplementos de eficacia no comprobada, invierte en: <strong>dejar de fumar, hacer ejercicio, perder peso y consultar a un urólogo</strong> para tratamiento con evidencia científica real.
            </div>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr className="text-slate-600 text-left">
                  <th className="px-5 py-3 font-semibold">Suplemento</th>
                  <th className="px-5 py-3 font-semibold">Evidencia</th>
                  <th className="px-5 py-3 font-semibold">Nota clínica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {suplementos.map((s, i) => (
                  <tr key={i}>
                    <td className="px-5 py-3 font-medium text-slate-800">{s.nombre}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        s.evidencia === "Moderada" ? "bg-amber-100 text-amber-700" :
                        s.evidencia === "Limitada" ? "bg-red-100 text-red-700" :
                        "bg-slate-100 text-slate-600"
                      }`}>
                        {s.evidencia}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-slate-600">{s.nota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── HOMBRES JÓVENES ── */}
        <section className="bg-blue-50 py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Disfunción eréctil en hombres jóvenes (menores de 40 años)</h2>
              <p className="text-slate-600 mb-8 max-w-2xl">
                El 25% de los nuevos diagnósticos son en hombres menores de 40. No es algo que "solo pasa a los viejos" y no es "solo psicológico".
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  titulo: "Causas más comunes en menores de 40",
                  color: "bg-white border-blue-200",
                  titleColor: "text-blue-800",
                  items: [
                    "Ansiedad de desempeño — la más frecuente, círculo vicioso",
                    "Uso excesivo de pornografía — respuesta sexual condicionada",
                    "Depresión o ansiedad generalizada",
                    "Estrés laboral o académico intenso",
                    "Diabetes no diagnosticada (importante descartar)",
                    "Uso de esteroides anabólicos — suprimen testosterona",
                    "Varicocele — puede reducir testosterona",
                    "Drogas recreativas — cocaína, cannabis crónico",
                  ],
                },
                {
                  titulo: "Señales de que es psicológico (no físico)",
                  color: "bg-white border-green-200",
                  titleColor: "text-green-800",
                  items: [
                    "Erecciones matutinas normales — el mecanismo físico funciona",
                    "Erecciones normales durante masturbación",
                    "El problema aparece con pareja pero no solo",
                    "Primera experiencia sexual o nueva pareja",
                    "El problema empezó en un momento de estrés específico",
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
                  className={`rounded-2xl border p-6 ${card.color}`}
                >
                  <h3 className={`font-bold text-lg mb-3 ${card.titleColor}`}>{card.titulo}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-700">
                        <span className="text-slate-400 shrink-0 mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 bg-blue-800 text-white rounded-2xl p-5"
            >
              <p className="font-semibold">Para hombres jóvenes con disfunción eréctil:</p>
              <p className="text-blue-200 text-sm mt-1">Tener este problema a los 20–30 años NO es normal ni "está en tu cabeza". Tiene solución pero requiere evaluación profesional. No lo ignores esperando que desaparezca solo — mientras antes se trata, más fácil es resolver.</p>
            </motion.div>
          </div>
        </section>

        {/* ── URGENCIAS ── */}
        <section className="mx-auto max-w-5xl px-4 py-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-red-50 border-2 border-red-300 rounded-2xl p-6"
          >
            <h3 className="font-bold text-red-800 text-xl mb-4">🚨 Cuándo buscar atención urgente</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="font-semibold text-red-800 mb-2">Emergencia inmediata:</div>
                <ul className="space-y-2 text-sm text-red-700">
                  <li className="flex gap-2"><span>🚨</span><span><strong>Erección dolorosa de más de 4 horas (priapismo):</strong> emergencia médica, puede causar daño permanente si no se trata</span></li>
                  <li className="flex gap-2"><span>🚨</span><span>Pérdida súbita de erección tras trauma genital</span></li>
                  <li className="flex gap-2"><span>🚨</span><span>Deformidad peneana nueva y dolorosa (fractura de pene)</span></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-slate-700 mb-2">Consulta pronto (1–2 semanas):</div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span>→</span><span>Disfunción eréctil persistente por más de 3 meses</span></li>
                  <li className="flex gap-2"><span>→</span><span>Pérdida de erecciones matutinas</span></li>
                  <li className="flex gap-2"><span>→</span><span>Eres joven (menor de 40) con disfunción eréctil</span></li>
                  <li className="flex gap-2"><span>→</span><span>Síntomas cardiovasculares asociados</span></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── POR QUÉ DR. QUIROZ ── */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Por qué elegir al Dr. Quiroz</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: "🔒", titulo: "Consulta 100% confidencial", detalle: "Ambiente de confianza, sin juicios, privacidad garantizada" },
                  { icon: "🔬", titulo: "Evaluación completa", detalle: "Física, hormonal, vascular y psicológica — diagnóstico preciso" },
                  { icon: "💊", titulo: "Todas las opciones", detalle: "Desde medicamentos orales hasta implante de prótesis — sin excluir ninguna" },
                  { icon: "⚕️", titulo: "Casos complejos", detalle: "Experiencia en post-cirugía prostática, diabetes avanzada, daño neurológico" },
                  { icon: "💙", titulo: "Enfoque integral", detalle: "Tu salud sexual como parte de tu salud general — cardiovascular y hormonal" },
                  { icon: "📅", titulo: "Seguimiento personalizado", detalle: "Hasta encontrar la solución que funciona para ti y tu pareja" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-slate-800">{item.titulo}</div>
                    <p className="text-sm text-slate-600 mt-1">{item.detalle}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="text-sm text-slate-500">
                  <strong className="text-slate-700">Links relacionados:</strong>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <Link href="/cancer-prostata" className="text-blue-600 hover:underline">Cáncer de próstata →</Link>
                    <Link href="/hiperplasia-prostatica-benigna" className="text-blue-600 hover:underline">HPB →</Link>
                    <Link href="/medicamentos-prostata" className="text-blue-600 hover:underline">Medicamentos próstata →</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Preguntas frecuentes sobre disfunción eréctil</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="bg-blue-900 text-white py-16">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-3">La disfunción eréctil tiene solución. El primer paso es hablar.</h2>
              <p className="text-blue-100 max-w-xl mx-auto mb-4 leading-relaxed">
                Cada semana que pasa sin evaluación es tiempo en que la causa subyacente sigue avanzando. Una consulta confidencial con el Dr. Quiroz puede cambiar tu vida.
              </p>
              <div className="bg-blue-800 border border-blue-600 rounded-xl p-4 max-w-lg mx-auto mb-8 text-sm text-blue-200">
                Tu privacidad es nuestra prioridad. La consulta es completamente confidencial — no compartimos información con nadie. Atención discreta en León, Guanajuato.
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={WA_CONFIDENCIAL}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-blue-900 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition shadow-lg text-lg"
                >
                  Agenda consulta confidencial
                </a>
              </div>
              <p className="mt-5 text-blue-300 text-sm">
                Hospital Ángeles León (Cons. 615, Torre II · Lun, Mar, Jue) · Hospital Christus Muguerza Altagracia (Mié, Vie)
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
