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
const WA_UROFLUJOMETRIA = waLink("Hola Dr. Quiroz, quiero agendar una uroflujometría para evaluar mis síntomas prostáticos.");
const WA_CONSULTA = waLink("Hola Dr. Quiroz, quiero agendar una consulta por síntomas prostáticos.");

type DrugCard = {
  name: string;
  brand?: string;
  dose?: string;
  onset: string;
  highlights: string[];
  warning?: string;
  featured?: boolean;
};

type DrugClass = {
  title: string;
  subtitle: string;
  color: string;
  border: string;
  bg: string;
  drugs: DrugCard[];
  note?: string;
};

const drugClasses: DrugClass[] = [
  {
    title: "Alfabloqueadores",
    subtitle: "Primera línea · Alivio rápido de síntomas",
    color: "text-violet-700",
    border: "border-violet-300",
    bg: "bg-violet-50",
    note: "Relajan el músculo liso del cuello vesical y la próstata. Efecto en días, no meses. No reducen el tamaño prostático.",
    drugs: [
      {
        name: "Tamsulosina",
        brand: "OMNIC · Uroblock",
        dose: "0.4 mg una vez al día",
        onset: "24–48 horas",
        featured: true,
        highlights: [
          "El alfabloqueador más uroselecto: actúa casi exclusivamente en próstata y vejiga",
          "Mínimos efectos cardiovasculares (no baja tensión arterial de forma significativa)",
          "Puede tomarse en cualquier momento del día",
          "Mejora síntomas obstructivos e irritativos",
        ],
        warning: "⚠️ IMPORTANTE: Si usas tamsulosina y te programan cualquier cirugía ocular (cataratas, glaucoma), debes avisarle a tu oftalmólogo. La tamsulosina puede causar Síndrome de Iris Flácido Intraoperatorio (IFIS) y complica la cirugía aunque ya hayas suspendido el medicamento. No lo omitas.",
      },
      {
        name: "Silodosina",
        brand: "UROREC · Silodyx",
        dose: "8 mg una vez al día",
        onset: "24 horas",
        highlights: [
          "Máxima uroselectividad entre todos los alfabloqueadores",
          "Muy eficaz en síntomas obstructivos",
          "Alta tasa de eyaculación retrógrada o aeyaculación (~28%): sin peligro, pero afecta fertilidad",
        ],
      },
      {
        name: "Alfuzosina",
        brand: "XATRAL",
        dose: "10 mg una vez al día",
        onset: "2–3 días",
        highlights: [
          "Perfil favorable en disfunción eréctil (menos efecto sobre eyaculación que silodosina)",
          "Menos efectos cardiovasculares que doxazosina y terazosina",
          "Buena opción si hay componente de disfunción eréctil asociado",
        ],
      },
      {
        name: "Doxazosina",
        brand: "CARDURA",
        dose: "4–8 mg una vez al día",
        onset: "1 semana",
        highlights: [
          "Útil si también tienes hipertensión arterial (trata ambas condiciones)",
          "Mayor riesgo de hipotensión ortostática (mareo al levantarse)",
          "Iniciar con dosis baja y titular gradualmente",
        ],
      },
      {
        name: "Terazosina",
        brand: "HYTRIN",
        dose: "2–10 mg una vez al día",
        onset: "1 semana",
        highlights: [
          "También útil en hipertensión arterial",
          "Requiere titulación de dosis (iniciar con 1 mg)",
          "Más efectos cardiovasculares que tamsulosina o alfuzosina",
        ],
      },
    ],
  },
  {
    title: "Inhibidores de la 5-alfa-reductasa",
    subtitle: "Para próstatas grandes · Reducen volumen prostático",
    color: "text-purple-700",
    border: "border-purple-300",
    bg: "bg-purple-50",
    note: "Bloquean la conversión de testosterona a dihidrotestosterona (DHT), la hormona que agranda la próstata. Reducen el volumen prostático 20–30% en 6–12 meses. Más eficaces si la próstata mide > 40 mL.",
    drugs: [
      {
        name: "Finasteride",
        brand: "PROSCAR · Nopecia",
        dose: "5 mg una vez al día",
        onset: "6–12 meses para efecto máximo",
        featured: true,
        highlights: [
          "Inhibe la 5-alfa-reductasa tipo 2",
          "Reduce el volumen prostático ~20% tras 6 meses",
          "Disminuye el PSA a la mitad: si lo tomas, tu médico debe multiplicar el PSA por 2 para interpretarlo correctamente",
          "Reduce el riesgo de retención urinaria aguda y necesidad de cirugía a largo plazo",
        ],
        warning: "Efectos secundarios posibles: disminución del deseo sexual, disfunción eréctil leve, alteraciones de la eyaculación. Ocurren en ~5–8% de pacientes. Suelen mejorar con el tiempo o al suspenderlo.",
      },
      {
        name: "Dutasteride",
        brand: "AVODART",
        dose: "0.5 mg una vez al día",
        onset: "6–12 meses para efecto máximo",
        highlights: [
          "Inhibe ambos tipos de 5-alfa-reductasa (tipo 1 y tipo 2): reducción de DHT más completa",
          "Reduce el volumen prostático ~25–30%",
          "Perfil de efectos secundarios similar al finasteride",
          "También reduce el PSA a la mitad: comunicarlo siempre al médico",
        ],
      },
    ],
  },
  {
    title: "Terapia combinada",
    subtitle: "Alfa-bloqueador + Inhibidor 5-AR · Para casos seleccionados",
    color: "text-indigo-700",
    border: "border-indigo-300",
    bg: "bg-indigo-50",
    drugs: [
      {
        name: "Combinación (ej. Tamsulosina + Dutasteride)",
        brand: "DUODART (combinación fija)",
        dose: "Tamsulosina 0.4 mg + Dutasteride 0.5 mg una vez al día",
        onset: "Alivio rápido (alfa-bloqueador) + reducción prostática a largo plazo (5-ARI)",
        highlights: [
          "Indicada cuando la próstata mide > 40 mL o el PSA basal es > 1.5 ng/mL",
          "Estudios MTOPS y CombAT demostraron mayor reducción de síntomas y menor progresión que monoterapia",
          "Reduce el riesgo de retención urinaria aguda en hasta un 67% vs placebo",
          "Permite ir retirando el alfa-bloqueador en algunos pacientes tras 6–9 meses de terapia combinada",
        ],
      },
    ],
  },
  {
    title: "Otros medicamentos",
    subtitle: "Casos específicos · Síntomas irritativos predominantes",
    color: "text-teal-700",
    border: "border-teal-300",
    bg: "bg-teal-50",
    drugs: [
      {
        name: "Tadalafilo",
        brand: "CIALIS",
        dose: "5 mg una vez al día",
        onset: "2–4 semanas",
        highlights: [
          "Aprobado para síntomas del tracto urinario inferior (LUTS) por HPB",
          "Opción ideal si hay disfunción eréctil asociada (trata ambas condiciones)",
          "No combinar con nitratos (nitroglicerina) por riesgo de hipotensión grave",
        ],
      },
      {
        name: "Anticolinérgicos / Beta-3 agonistas",
        brand: "Solifenacina (VESICARE) · Oxibutinina · Mirabegron",
        dose: "Variable según medicamento",
        onset: "2–4 semanas",
        highlights: [
          "Para cuando predominan síntomas irritativos: urgencia, frecuencia, incontinencia de urgencia",
          "Útiles en vejiga hiperactiva que coexiste con HPB",
          "Precaución: evitar en obstrucción severa (residuo posmiccional > 150 mL o Qmax < 5 mL/s)",
          "Mirabegron (beta-3 agonista) tiene mejor perfil de tolerabilidad que anticolinérgicos clásicos",
        ],
        warning: "Nunca iniciar anticolinérgicos sin una uroflujometría previa que descarte obstrucción severa. Pueden precipitar retención urinaria aguda.",
      },
    ],
  },
];

type Indication = { label: string; detail: string; absolute: boolean };
const indications: Indication[] = [
  { label: "Retención urinaria aguda recurrente", detail: "Incapacidad de orinar que requiere sonda repetidamente. Es indicación quirúrgica absoluta.", absolute: true },
  { label: "Insuficiencia renal por obstrucción", detail: "Hidronefrosis o daño renal causado por la obstrucción prostática. Requiere cirugía urgente.", absolute: true },
  { label: "Infecciones urinarias recurrentes", detail: "Cuando la obstrucción prostática es la causa demostrable de infecciones de repetición.", absolute: true },
  { label: "Hematuria macroscópica recurrente por HPB", detail: "Sangrado urinario repetido sin otra causa identificada.", absolute: true },
  { label: "Cálculos vesicales por HPB", detail: "Piedras en la vejiga formadas por el residuo urinario secundario a la obstrucción.", absolute: true },
  { label: "IPSS > 20 (síntomas graves)", detail: "Cuando los síntomas afectan significativamente la calidad de vida y no responden al tratamiento médico.", absolute: false },
  { label: "Flujo urinario Qmax < 10 mL/s persistente", detail: "Obstrucción demostrada en uroflujometría que no mejora con medicamento.", absolute: false },
  { label: "Residuo posmiccional > 300 mL", detail: "Cantidad elevada de orina que queda en vejiga tras orinar.", absolute: false },
  { label: "Falla del tratamiento médico optimizado", detail: "Persistencia o progresión de síntomas a pesar de medicación correcta y adecuada.", absolute: false },
  { label: "Preferencia del paciente bien informado", detail: "Algunos pacientes prefieren resolver el problema de forma definitiva.", absolute: false },
];

type FAQ = { q: string; a: string };
const faqs: FAQ[] = [
  {
    q: "¿Cuánto tarda en hacer efecto la tamsulosina?",
    a: "La mejoría del flujo urinario y los síntomas se nota habitualmente en 24–72 horas. El efecto máximo suele alcanzarse en 2–4 semanas. Si tras 4 semanas no hay mejoría significativa, es necesario reevaluar el diagnóstico y el tratamiento.",
  },
  {
    q: "¿Los medicamentos reducen el tamaño de la próstata?",
    a: "Solo los inhibidores de la 5-alfa-reductasa (finasteride, dutasteride) reducen el volumen prostático, en un 20–30% aproximadamente, y solo si se toman durante 6–12 meses. Los alfabloqueadores (tamsulosina, alfuzosina) no reducen el tamaño; simplemente relajan el músculo para mejorar el flujo.",
  },
  {
    q: "¿Puedo tomar tamsulosina de por vida?",
    a: "Sí, es seguro a largo plazo. Sin embargo, tomar un medicamento indefinidamente no es lo mismo que tener el problema resuelto. La próstata puede seguir creciendo, el flujo urinario empeorar progresivamente y aparecer complicaciones. Una uroflujometría anual permite monitorizar si el tratamiento sigue siendo suficiente.",
  },
  {
    q: "¿El medicamento me libra de la cirugía?",
    a: "En muchos pacientes, sí. Los medicamentos controlan los síntomas durante años. Pero si la próstata es grande, el flujo es muy bajo o el IPSS es severo, el medicamento gestiona el problema sin resolverlo. En ese escenario, los procedimientos modernos mínimamente invasivos (HoLEP con láser, TURP bipolar, Rezūm, UroLift) son definitivos y tienen excelentes resultados.",
  },
  {
    q: "¿La tamsulosina afecta la erección o el orgasmo?",
    a: "La tamsulosina generalmente no afecta la erección. Sin embargo, puede causar eyaculación retrógrada (el semen va hacia la vejiga en lugar de salir) en una minoría de pacientes. La silodosina tiene esta efecto con mucha mayor frecuencia (~28%). Si la función sexual es prioritaria, existe otras opciones de tratamiento.",
  },
  {
    q: "¿Por qué el médico me pide una uroflujometría antes de recetar?",
    a: "Porque los síntomas por sí solos no distinguen entre obstrucción prostática, vejiga hiperactiva, o vejiga con contracción débil. La uroflujometría mide el flujo real de orina y el residuo posmiccional, orientando si el problema es la salida (próstata) o la vejiga en sí. Las guías europeas de urología recomiendan realizarla antes de cualquier tratamiento para síntomas urinarios.",
  },
  {
    q: "¿El finasteride afecta mi PSA?",
    a: "Sí, de forma predecible y conocida. Finasteride y dutasteride reducen el PSA aproximadamente a la mitad. Esto es importante: si lo tomas y tu PSA mide 2.0 ng/mL, el valor real equivalente sería 4.0 ng/mL. Tu urólogo debe saberlo para interpretar correctamente el PSA y no dejar pasar un cáncer de próstata.",
  },
  {
    q: "¿Qué pasa si tengo urgencia urinaria además de flujo débil?",
    a: "Tener ambos (síntomas obstructivos + irritativos) es muy común en la HPB. En ese caso puede necesitarse un tratamiento que aborde los dos componentes: un alfa-bloqueador para el flujo y un anticolinérgico o beta-3 agonista (mirabegron) para la urgencia. Sin embargo, no se deben agregar anticolinérgicos sin antes confirmar que no hay obstrucción severa. Una uroflujometría es indispensable.",
  },
  {
    q: "¿Puedo tomar tamsulosina y tadalafilo juntos?",
    a: "Sí, es una combinación válida y eficaz, especialmente si coexisten síntomas prostáticos y disfunción eréctil. Puede haber algo más de descenso de tensión arterial con la combinación. Se recomienda empezar el tadalafilo con dosis baja y hacerlo bajo supervisión médica.",
  },
  {
    q: "¿Los suplementos de palma enana (saw palmetto) funcionan igual que la tamsulosina?",
    a: "No. Los estudios clínicos de mayor calidad (incluyendo el estudio STEP, multicéntrico y aleatorizado) no han demostrado que la palma enana sea superior al placebo para los síntomas urinarios. Las guías europeas y norteamericanas de urología no la recomiendan como tratamiento de la HPB. No es un sustituto de los medicamentos.",
  },
  {
    q: "¿Cuándo es necesaria la cirugía en vez de medicamento?",
    a: "Hay indicaciones absolutas que requieren cirugía independientemente de los medicamentos: retención urinaria recurrente, daño renal por obstrucción, infecciones de repetición, sangrado urinario por próstata, o cálculos vesicales. En síntomas severos sin respuesta al tratamiento médico también se considera cirugía. Los procedimientos actuales (HoLEP láser, TURP bipolar) tienen excelentes resultados con recuperación rápida.",
  },
  {
    q: "¿Tengo que tomar el medicamento para siempre?",
    a: "Depende del objetivo. Si el objetivo es control de síntomas, sí, habitualmente es tratamiento de larga duración. Pero con los procedimientos mínimamente invasivos actuales es posible resolver el problema de forma definitiva, sin catéter permanente y con hospitalización breve. Muchos pacientes prefieren resolver el problema una vez que conocen todas las opciones.",
  },
];

type DrugAccordionProps = { drug: DrugCard; colorBg: string; border: string };

function DrugAccordion({ drug, colorBg, border }: DrugAccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border ${border} ${drug.featured ? colorBg : "bg-white"} overflow-hidden`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 flex items-start justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-800">{drug.name}</span>
            {drug.featured && (
              <span className="text-xs bg-violet-600 text-white px-2 py-0.5 rounded-full">más usada</span>
            )}
            {drug.brand && (
              <span className="text-xs text-slate-500">{drug.brand}</span>
            )}
          </div>
          <div className="text-xs text-slate-500 mt-0.5">
            {drug.dose && <span>{drug.dose} · </span>}
            <span>Efecto: {drug.onset}</span>
          </div>
        </div>
        <span className="text-slate-400 text-lg leading-none mt-0.5 shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 pb-4 space-y-3"
        >
          <ul className="space-y-1.5">
            {drug.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="text-violet-500 mt-0.5 shrink-0">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          {drug.warning && (
            <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 text-sm text-amber-900">
              {drug.warning}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

type FAQItemProps = { q: string; a: string };
function FAQItem({ q, a }: FAQItemProps) {
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

const ipssItems = [
  "Sensación de vaciamiento incompleto al terminar de orinar",
  "Necesidad de orinar de nuevo antes de 2 horas",
  "Chorro urinario intermitente o entrecortado",
  "Dificultad para aguantar las ganas de orinar (urgencia)",
  "Flujo urinario débil o lento",
  "Necesidad de empujar o hacer esfuerzo para iniciar la orina",
  "Levantarse a orinar de noche (nocturia)",
];

export default function MedicamentosProstataContent() {
  return (
    <div className="bg-white text-gris-profundo">
      <main>
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
              Hiperplasia Prostática Benigna · Tratamiento Médico
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
              Medicamentos para la Próstata: Cuándo Funcionan y Cuándo No Son Suficientes
            </h1>
            <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-4">
              Tamsulosina, finasteride, dutasteride, silodosina — cada uno actúa diferente. La clave está en saber si tu situación es la adecuada para el medicamento o si ya es momento de ir más allá.
            </p>
            <p className="text-quirurgico font-sans font-medium italic mb-10">
              "La uroflujometría determina si los medicamentos son suficientes o si necesitas cirugía."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href={WA_UROFLUJOMETRIA}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsApp("medicamentos-prostata")}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-acero text-editorial px-8 py-4 rounded-lg font-bold font-sans hover:bg-acero/90 transition-colors shadow-lg cursor-pointer"
                >
                  Agenda tu uroflujometría
                </motion.div>
              </a>
              <a
                href={WA_CONSULTA}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsApp("medicamentos-prostata")}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 border-2 border-editorial/60 text-editorial px-8 py-4 rounded-lg font-bold font-sans hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Consulta general
                </motion.div>
              </a>
            </div>
          </motion.div>
        </section>

        {/* IPSS */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              ¿Qué tan graves son tus síntomas? El IPSS
            </h2>
            <p className="text-slate-600 mb-6 max-w-2xl">
              El IPSS (International Prostate Symptom Score) es el cuestionario validado internacionalmente para cuantificar los síntomas prostáticos. Son 7 preguntas, cada una puntúa de 0 a 5. El total orienta el tratamiento.
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
              <h3 className="font-semibold text-slate-800 mb-4">Los 7 síntomas del IPSS</h3>
              <ol className="space-y-2">
                {ipssItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 bg-violet-100 text-violet-700 rounded-full text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="bg-green-50 border border-green-300 rounded-2xl p-5">
                <div className="text-2xl font-bold text-green-700">0 – 7</div>
                <div className="font-semibold text-green-800">Síntomas leves</div>
                <p className="text-sm text-green-700 mt-1">
                  Vigilancia activa. En muchos casos no se requiere medicamento. Se monitoriza anualmente.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5">
                <div className="text-2xl font-bold text-amber-700">8 – 19</div>
                <div className="font-semibold text-amber-800">Síntomas moderados</div>
                <p className="text-sm text-amber-700 mt-1">
                  Zona de tratamiento médico. Los medicamentos son efectivos aquí. Una uroflujometría guía la elección.
                </p>
              </div>
              <div className="bg-red-50 border border-red-300 rounded-2xl p-5">
                <div className="text-2xl font-bold text-red-700">20 – 35</div>
                <div className="font-semibold text-red-800">Síntomas graves</div>
                <p className="text-sm text-red-700 mt-1">
                  El medicamento puede aliviar temporalmente, pero frecuentemente se requiere procedimiento. Evaluación urológica urgente.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* UROFLUJOMETRÍA */}
        <section className="bg-violet-900 text-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-violet-300 text-sm font-medium uppercase tracking-wide mb-2">
                Guías Europeas de Urología (EAU) — Recomendación de Grado Fuerte
              </p>
              <h2 className="text-3xl font-bold mb-4">
                Por qué la uroflujometría es el primer paso, no el medicamento
              </h2>
              <p className="text-violet-100 leading-relaxed max-w-3xl mb-8">
                Las guías de la Asociación Europea de Urología establecen que ningún tratamiento para síntomas del tracto urinario inferior debe iniciarse sin una evaluación objetiva del flujo urinario. Los síntomas subjetivos no distinguen entre obstrucción prostática, vejiga hiperactiva o vejiga débil — tres condiciones que se tratan de forma completamente diferente.
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-violet-800 rounded-2xl p-5">
                  <div className="text-3xl font-bold text-white mb-1">&gt; 15 <span className="text-lg font-normal">mL/s</span></div>
                  <div className="text-violet-200 font-medium">Qmáx normal</div>
                  <p className="text-violet-300 text-sm mt-2">
                    Flujo normal. Los síntomas pueden deberse a vejiga hiperactiva, no a obstrucción. El alfabloqueador puede no ser la respuesta.
                  </p>
                </div>
                <div className="bg-amber-800 rounded-2xl p-5">
                  <div className="text-3xl font-bold text-white mb-1">10–15 <span className="text-lg font-normal">mL/s</span></div>
                  <div className="text-amber-200 font-medium">Qmáx borderline</div>
                  <p className="text-amber-300 text-sm mt-2">
                    Zona gris. Puede haber obstrucción leve o flujo normal bajo. El residuo posmiccional ayuda a clarificar.
                  </p>
                </div>
                <div className="bg-red-800 rounded-2xl p-5">
                  <div className="text-3xl font-bold text-white mb-1">&lt; 10 <span className="text-lg font-normal">mL/s</span></div>
                  <div className="text-red-200 font-medium">Obstrucción significativa</div>
                  <p className="text-red-300 text-sm mt-2">
                    Obstrucción demostrada. El medicamento puede aliviar síntomas, pero el procedimiento definitivo debe considerarse seriamente.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-violet-800 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-3">Qué incluye la uroflujometría</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Curva de flujo urinario con Qmáx y Qmed",
                    "Volumen orinado total",
                    "Residuo posmiccional por ultrasonido",
                    "Patrón de la curva (obstructivo vs. débil vs. normal)",
                    "Comparación con valores de referencia por edad",
                    "Sin catéter, sin dolor, sin contraste — solo orinar",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 text-sm text-violet-100">
                      <span className="text-violet-400 shrink-0">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href={WA_UROFLUJOMETRIA}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-white text-violet-900 font-bold px-8 py-3 rounded-xl hover:bg-violet-50 transition shadow-lg text-lg"
                >
                  Agenda tu uroflujometría con el Dr. Quiroz
                </a>
                <p className="text-violet-300 text-sm mt-2">Hospital Ángeles León · Hospital Christus Muguerza Altagracia</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DRUG CLASSES */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Medicamentos disponibles</h2>
            <p className="text-slate-600 mb-10 max-w-2xl">
              Cada clase actúa por mecanismo distinto. La elección depende del volumen prostático, el flujo urinario, la presencia de síntomas irritativos y las condiciones del paciente.
            </p>
          </motion.div>

          <div className="space-y-10">
            {drugClasses.map((dc) => (
              <motion.div
                key={dc.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className={`rounded-2xl border ${dc.border} ${dc.bg} p-6`}>
                  <h3 className={`text-xl font-bold ${dc.color} mb-1`}>{dc.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{dc.subtitle}</p>
                  {dc.note && (
                    <p className="text-sm text-slate-700 mb-5 leading-relaxed border-l-4 border-violet-300 pl-3">
                      {dc.note}
                    </p>
                  )}
                  <div className="space-y-3">
                    {dc.drugs.map((drug) => (
                      <DrugAccordion key={drug.name} drug={drug} colorBg={dc.bg} border={dc.border} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CUANDO FUNCIONAN vs NO SON SUFICIENTES */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                ¿Cuándo funcionan los medicamentos y cuándo no son suficientes?
              </h2>
              <p className="text-slate-600 mb-10 max-w-2xl">
                El medicamento no es bueno o malo en abstracto — es adecuado o inadecuado según el perfil del paciente.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Cuando SÍ funcionan */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-green-800 mb-4">Los medicamentos son una buena opción cuando...</h3>
                <ul className="space-y-3">
                  {[
                    { label: "IPSS 8–19", detail: "Síntomas moderados que afectan la calidad de vida pero sin urgencia quirúrgica" },
                    { label: "Qmáx entre 10–15 mL/s", detail: "Flujo reducido pero sin obstrucción grave demostrada" },
                    { label: "Próstata < 40 mL", detail: "Alfa-bloqueador solo puede ser suficiente" },
                    { label: "Sin complicaciones", detail: "Sin retención, sin daño renal, sin infecciones de repetición" },
                    { label: "Preferencia por manejo conservador", detail: "Paciente informado que elige diferir procedimiento" },
                    { label: "Próstata > 40 mL + PSA > 1.5", detail: "Terapia combinada puede cambiar la historia natural y prevenir complicaciones" },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <span className="font-semibold text-green-800">{item.label}: </span>
                        <span className="text-green-700 text-sm">{item.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Cuando NO son suficientes */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-red-50 border border-red-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-red-800 mb-4">Los medicamentos no son suficientes cuando...</h3>
                <ul className="space-y-3">
                  {[
                    { label: "IPSS ≥ 20", detail: "Síntomas graves que impactan severamente la vida cotidiana" },
                    { label: "Qmáx < 10 mL/s persistente", detail: "Obstrucción grave que el medicamento difícilmente revierte" },
                    { label: "Residuo posmiccional > 300 mL", detail: "Vejiga que no vacía bien: riesgo de infección y daño renal" },
                    { label: "Retención urinaria aguda", detail: "Incapacidad de orinar: indicación quirúrgica absoluta si es recurrente" },
                    { label: "Falla del tratamiento médico", detail: "Síntomas que persisten o empeoran a pesar del medicamento correcto y tomado de forma adecuada" },
                    { label: "Complicaciones establecidas", detail: "Infecciones de repetición, hematuria, cálculos vesicales, daño renal" },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
                      <div>
                        <span className="font-semibold text-red-800">{item.label}: </span>
                        <span className="text-red-700 text-sm">{item.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INDICACIONES QUIRÚRGICAS */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Indicaciones quirúrgicas</h2>
            <p className="text-slate-600 mb-8 max-w-2xl">
              Algunas situaciones requieren tratamiento definitivo independientemente de cuánto tiempo lleves con el medicamento.
            </p>
          </motion.div>

          <div className="space-y-3">
            {indications.map((ind, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-xl border p-4 flex gap-4 items-start ${
                  ind.absolute
                    ? "bg-red-50 border-red-200"
                    : "bg-amber-50 border-amber-200"
                }`}
              >
                <span
                  className={`text-xs font-bold px-2 py-1 rounded shrink-0 mt-0.5 ${
                    ind.absolute
                      ? "bg-red-600 text-white"
                      : "bg-amber-500 text-white"
                  }`}
                >
                  {ind.absolute ? "ABSOLUTA" : "RELATIVA"}
                </span>
                <div>
                  <div className="font-semibold text-slate-800">{ind.label}</div>
                  <div className="text-sm text-slate-600 mt-0.5">{ind.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ALTERNATIVAS */}
        <section className="bg-slate-800 text-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-3">
                Alternativas al medicamento
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl">
                Los procedimientos modernos no son "cirugía mayor". Muchos son ambulatorios, sin catéter permanente y con resultados más duraderos que el medicamento de por vida.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  name: "HoLEP (Láser Holmio)",
                  detail: "Enucleación prostática con láser. Gold standard para próstatas grandes. Resultados definitivos. Sin incisión.",
                  badge: "Gold Standard",
                  color: "bg-yellow-600",
                },
                {
                  name: "TURP Bipolar",
                  detail: "Resección transuretral con energía bipolar. Eficaz para próstatas medianas. Sin incisión abdominal.",
                  badge: "Estándar",
                  color: "bg-slate-600",
                },
                {
                  name: "Rezūm (Vapor de agua)",
                  detail: "Inyección de vapor a través de uretra. Ambulatorio. Sin anestesia general. Preserva eyaculación.",
                  badge: "Mínima invasión",
                  color: "bg-teal-600",
                },
                {
                  name: "UroLift",
                  detail: "Implantes que separan los lóbulos prostáticos. Sin resección de tejido. Preserva función sexual.",
                  badge: "Sin resección",
                  color: "bg-violet-600",
                },
                {
                  name: "Prostatectomía robótica (casos seleccionados)",
                  detail: "Para próstatas muy grandes (&gt;100 mL) donde los procedimientos endoscópicos son menos eficaces.",
                  badge: "Casos complejos",
                  color: "bg-indigo-700",
                },
                {
                  name: "Embolización prostática (PAE)",
                  detail: "Procedimiento radiológico intervencionista. Para pacientes que no pueden someterse a anestesia general.",
                  badge: "Alta comorbilidad",
                  color: "bg-rose-700",
                },
              ].map((alt, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-slate-700 rounded-2xl p-5"
                >
                  <span className={`text-xs font-bold ${alt.color} text-white px-2 py-0.5 rounded`}>
                    {alt.badge}
                  </span>
                  <h3 className="font-semibold mt-2 mb-1">{alt.name}</h3>
                  <p className="text-sm text-slate-300" dangerouslySetInnerHTML={{ __html: alt.detail }} />
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/hiperplasia-prostatica-benigna"
                className="inline-block bg-white text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition"
              >
                Ver guía completa de tratamientos para HPB →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Preguntas frecuentes</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-violet-700 text-white py-16">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-3">
                El primer paso es saber dónde estás
              </h2>
              <p className="text-violet-100 max-w-xl mx-auto mb-8 leading-relaxed">
                Con una uroflujometría podemos determinar si tu medicamento actual está funcionando, si necesitas ajuste de tratamiento, o si ya llegó el momento de resolver el problema de forma definitiva.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={WA_UROFLUJOMETRIA}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-violet-900 font-bold px-8 py-3 rounded-xl hover:bg-violet-50 transition shadow-lg text-lg"
                >
                  Agenda tu uroflujometría
                </a>
                <a
                  href={WA_CONSULTA}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-violet-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-violet-500 transition border border-violet-400 text-lg"
                >
                  Consulta general
                </a>
              </div>
              <p className="mt-4 text-violet-200 text-sm">
                Hospital Ángeles León (Cons. 615, Torre II) · Hospital Christus Muguerza Altagracia
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
