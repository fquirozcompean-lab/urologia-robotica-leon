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
const WA_TRATAMIENTO = waLink("Hola Dr. Quiroz, quisiera agendar una consulta para tratamiento de verrugas genitales en León.");
const WA_URGENTE = waLink("Hola Dr. Quiroz, tengo verrugas genitales y quisiera atención lo antes posible.");

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "¿Las verrugas genitales desaparecen solas?",
    a: "Algunas sí, muchas no. El 20-30% pueden desaparecer solas en 3-4 meses si el sistema inmune las combate. Sin embargo, la mayoría persisten y pueden crecer o multiplicarse. El tratamiento es la forma más confiable y rápida de eliminarlas.",
  },
  {
    q: "¿Puedo tener hijos si tengo verrugas genitales?",
    a: "Sí, las verrugas genitales no afectan la fertilidad. En mujeres embarazadas pueden crecer más rápido por cambios hormonales. En el parto puede haber riesgo de transmisión al recién nacido (papilomatosis laríngea neonatal), por lo que el obstetra evalúa la vía de nacimiento.",
  },
  {
    q: "¿Las verrugas genitales duelen?",
    a: "En la mayoría de casos NO duelen. Pueden causar picazón leve. Si duelen, es señal de irritación, infección sobreagregada, o que no son verrugas sino otra lesión que requiere evaluación urgente.",
  },
  {
    q: "¿Cuánto cuesta quitar verrugas genitales?",
    a: "El costo varía según el tratamiento y el número de verrugas. La crioterapia es la más accesible. La electrofulguración y el láser CO₂ tienen costo mayor pero pueden resolver el problema en una sola sesión. En la consulta, el Dr. Quiroz te orientará sobre el tratamiento más adecuado y su costo según tu caso específico.",
  },
  {
    q: "¿Cuántas sesiones de crioterapia necesito?",
    a: "Depende del número, tamaño y distribución de las verrugas. En general se requieren 2-3 sesiones con intervalos de 1-2 semanas. Algunas verrugas pequeñas responden con 1 sesión; otras más grandes o múltiples pueden requerir más.",
  },
  {
    q: "¿Los tratamientos dejan cicatriz?",
    a: "La crioterapia normalmente no deja cicatriz. La electrofulguración y el láser pueden dejar una cicatriz muy discreta o pigmentación temporal. La cirugía puede dejar cicatriz pequeña según la extensión. En todos los casos, las cicatrices son mínimas y en área no visible.",
  },
  {
    q: "¿Puedo usar cremas para verrugas de farmacia (las de manos y pies)?",
    a: "NUNCA. Los tratamientos para verrugas comunes (ácido salicílico, etc.) son para la piel gruesa de manos y pies. La piel genital es mucho más sensible y delicada — puedes causar quemaduras químicas severas. Los tratamientos para verrugas genitales son completamente diferentes y deben ser prescritos por médico.",
  },
  {
    q: "¿Las verrugas genitales pican?",
    a: "Pueden causar picazón leve en algunos casos. No es el síntoma principal — la mayoría son asintomáticas. Si la picazón es intensa, puede indicar irritación, infección sobreagregada, o puede ser otra condición diferente a verrugas.",
  },
  {
    q: "¿Cómo sé si es una verruga genital o herpes?",
    a: "Las verrugas son bultos sólidos, de crecimiento lento, sin dolor, con textura rugosa o en coliflor. El herpes genital son ampollas llenas de líquido, muy dolorosas, que aparecen en brotes de 7-10 días y luego desaparecen. Solo un médico puede confirmar el diagnóstico con certeza.",
  },
  {
    q: "¿Puedo rascarme las verrugas?",
    a: "No se recomienda. Rascarse puede irritar, sangrar, e incluso diseminar el virus a otras áreas de piel cercana. Si pican mucho, consulta — puede indicar irritación que se puede tratar.",
  },
  {
    q: "¿Las verrugas genitales sangran?",
    a: "Ocasionalmente pueden sangrar si se irritan, rozan con ropa, o se rascan. El sangrado leve es posible. Si sangran frecuentemente o abundantemente, consulta de inmediato — puede indicar irritación severa o que la lesión no es una verruga sino algo que requiere evaluación urgente.",
  },
  {
    q: "¿Cuánto tiempo después del contagio aparecen las verrugas?",
    a: "El período de incubación es muy variable: de 3 semanas a varios meses (hasta 2 años en casos extremos). Por esto es imposible determinar exactamente cuándo ni de quién se adquirió el virus. Algunas personas nunca desarrollan verrugas visibles a pesar de tener VPH.",
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
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-medium flex items-center justify-between gap-3"
      >
        <span>{q}</span>
        <span className="text-slate-400 text-lg shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-sm text-slate-700 leading-relaxed"
        >
          {a}
        </motion.p>
      )}
    </motion.div>
  );
}

type TratamientoInfo = {
  letra: string;
  nombre: string;
  subtitulo: string;
  que_es: string;
  procedimiento: string;
  ventajas: string[];
  desventajas: string[];
  efectividad: string;
  sesiones: string;
  dolor: string;
  costo: "$" | "$$" | "$$$";
  ideal_para: string;
};

const tratamientos: TratamientoInfo[] = [
  {
    letra: "A",
    nombre: "Crioterapia",
    subtitulo: "Congelamiento con Nitrógeno Líquido",
    que_es: "Aplicación de nitrógeno líquido a -196 °C que congela y destruye el tejido de la verruga. La verruga se oscurece y cae sola en 7-10 días.",
    procedimiento: "Aplicación directa en consultorio (5-10 minutos). Sin anestesia general. Tolerable.",
    ventajas: ["Efectivo y rápido", "Sin cirugía ni anestesia general", "Costo accesible", "Sin tiempo de recuperación importante"],
    desventajas: ["Puede necesitar 2-3 sesiones", "Molestia leve durante la aplicación", "Puede causar pigmentación temporal"],
    efectividad: "60-80% con 2-3 sesiones",
    sesiones: "2-3 sesiones (1-2 semanas de intervalo)",
    dolor: "Leve",
    costo: "$",
    ideal_para: "Verrugas pequeñas o moderadas — primera línea de tratamiento",
  },
  {
    letra: "B",
    nombre: "Electrofulguración",
    subtitulo: "Cauterización Eléctrica",
    que_es: "Corriente eléctrica de alta frecuencia que destruye inmediatamente el tejido de la verruga. Eliminación en una sola sesión.",
    procedimiento: "Anestesia local + aplicación de corriente eléctrica. 15-30 minutos. Resultado inmediato.",
    ventajas: ["Resultado inmediato en una sesión", "Efectivo en verrugas grandes", "Elimina múltiples verrugas en un procedimiento"],
    desventajas: ["Requiere anestesia local", "Puede dejar cicatriz discreta", "Costo mayor que crioterapia"],
    efectividad: "80-90%",
    sesiones: "1 sesión usualmente",
    dolor: "Moderado (controlado con anestesia local)",
    costo: "$$",
    ideal_para: "Verrugas grandes, múltiples, o que no respondieron a crioterapia",
  },
  {
    letra: "C",
    nombre: "Láser CO₂",
    subtitulo: "Vaporización con Rayo Láser",
    que_es: "Rayo láser que vaporiza con precisión el tejido de la verruga. Muy preciso, mínimo daño a tejido sano circundante.",
    procedimiento: "Anestesia local + aplicación de láser. Curación en 2-3 semanas.",
    ventajas: ["Muy preciso — mínimo daño a tejido sano", "Ideal para verrugas en áreas delicadas", "Menos sangrado que cirugía", "Una sesión usualmente suficiente"],
    desventajas: ["Más costoso", "Requiere equipo especializado", "Puede dejar cicatriz leve"],
    efectividad: "85-95%",
    sesiones: "1 sesión usualmente",
    dolor: "Moderado (controlado con anestesia local)",
    costo: "$$$",
    ideal_para: "Verrugas en áreas delicadas (glande, uretra), verrugas extensas",
  },
  {
    letra: "D",
    nombre: "Cirugía (Escisión Quirúrgica)",
    subtitulo: "Extirpación Directa",
    que_es: "Corte y extirpación directa de la verruga. Permite eliminación completa en una sesión y biopsia si hay duda diagnóstica.",
    procedimiento: "Anestesia local + incisión + sutura si es necesario. Curación en 2-3 semanas.",
    ventajas: ["Eliminación completa en una sesión", "Permite biopsia para confirmar diagnóstico", "Útil para verrugas muy grandes"],
    desventajas: ["Más invasivo", "Mayor riesgo de cicatriz", "Recuperación más larga"],
    efectividad: "95%+",
    sesiones: "1 sesión",
    dolor: "Moderado (controlado con anestesia local)",
    costo: "$$$",
    ideal_para: "Verrugas muy grandes, lesiones con duda diagnóstica, casos complejos",
  },
  {
    letra: "E",
    nombre: "Tratamientos Tópicos",
    subtitulo: "Aplicación en Casa — Solo Bajo Supervisión Médica",
    que_es: "Cremas o soluciones específicas para verrugas genitales que se aplican en casa según indicación médica. No son medicamentos de venta libre.",
    procedimiento: "Aplicación según prescripción médica. Ciclos repetidos durante semanas.",
    ventajas: ["Se aplican en casa", "Sin visitas frecuentes al consultorio", "Costo moderado"],
    desventajas: ["Resultados en 8-12 semanas (más lento)", "Pueden causar irritación local", "Menor tasa de efectividad", "No usar en mucosas"],
    efectividad: "50-70%",
    sesiones: "Aplicación continua por semanas",
    dolor: "Leve-moderado (irritación)",
    costo: "$",
    ideal_para: "Verrugas pequeñas accesibles, pacientes que prefieren tratamiento en casa",
  },
];

function TratamientoCard({ t, index }: { t: TratamientoInfo; index: number }) {
  const [open, setOpen] = useState(false);
  const costoLabels = { "$": "Accesible", "$$": "Moderado", "$$$": "Mayor inversión" };
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex items-center gap-4"
      >
        <span className="w-10 h-10 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
          {t.letra}
        </span>
        <div className="flex-1">
          <h3 className="font-bold text-slate-800">{t.nombre}</h3>
          <p className="text-xs text-slate-500">{t.subtitulo}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{t.efectividad}</span>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{t.sesiones}</span>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Costo: {costoLabels[t.costo]}</span>
          </div>
        </div>
        <span className="text-slate-400 text-xl shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-5 pb-5 border-t border-slate-100"
        >
          <div className="pt-4 grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase mb-2">¿Qué es?</p>
              <p className="text-sm text-slate-700">{t.que_es}</p>
              <p className="text-xs font-semibold text-slate-500 uppercase mt-3 mb-1">Procedimiento</p>
              <p className="text-sm text-slate-700">{t.procedimiento}</p>
              <p className="text-xs font-semibold text-slate-500 uppercase mt-3 mb-1">Ideal para</p>
              <p className="text-sm text-slate-600 italic">{t.ideal_para}</p>
            </div>
            <div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-3">
                <p className="text-xs font-semibold text-emerald-700 mb-1">Ventajas</p>
                <ul className="space-y-1">
                  {t.ventajas.map((v) => (
                    <li key={v} className="text-xs text-emerald-800 flex gap-1.5">
                      <span>✓</span>{v}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-3">
                <p className="text-xs font-semibold text-rose-700 mb-1">Consideraciones</p>
                <ul className="space-y-1">
                  {t.desventajas.map((d) => (
                    <li key={d} className="text-xs text-rose-800 flex gap-1.5">
                      <span>•</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function VerrugasGenitalesContent() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <main>
        {/* HERO */}
        <section className="relative text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-rose-900 to-pink-800" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-5xl px-4 py-20 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-rose-800/60 text-rose-100 text-sm px-4 py-1.5 rounded-full mb-6 border border-rose-600/40">
              🔒 Atención confidencial — diagnóstico y tratamiento profesional
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Verrugas Genitales en León, Guanajuato:<br className="hidden md:block" />
              Tratamiento Efectivo y Rápido
            </h1>
            <p className="text-lg text-rose-100 max-w-2xl mx-auto mb-8">
              Eliminación de verrugas genitales — crioterapia, láser y electrofulguración. Las verrugas genitales tienen solución: no necesitas vivir con ellas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={WA_TRATAMIENTO} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("verrugas-genitales")}
                className="bg-white text-rose-900 font-semibold px-6 py-3 rounded-2xl hover:bg-rose-50 transition shadow-lg">
                Agenda tratamiento hoy
              </a>
              <a href={WA_URGENTE} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("verrugas-genitales")}
                className="bg-rose-800 border border-rose-600 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-rose-700 transition">
                💬 WhatsApp urgente
              </a>
            </div>
          </motion.div>
        </section>

        {/* STAT CARDS */}
        <section className="mx-auto max-w-5xl px-4 -mt-6 relative z-10 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { stat: "NO SON CÁNCER", sub: "Las verrugas genitales nunca se vuelven cáncer", color: "text-emerald-600" },
              { stat: "90%", sub: "causadas por tipos 6 y 11 del VPH — de bajo riesgo", color: "text-rose-600" },
              { stat: "1 sesión", sub: "de electrofulguración o láser puede ser suficiente", color: "text-blue-600" },
              { stat: ">90%", sub: "de efectividad de la vacuna para prevenir verrugas", color: "text-violet-600" },
            ].map((s) => (
              <motion.div key={s.stat} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-center">
                <div className={`text-xl font-bold ${s.color}`}>{s.stat}</div>
                <div className="text-xs text-slate-600 mt-1">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* QUÉ SON */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-2">¿Qué son las Verrugas Genitales?</h2>
            <p className="text-slate-600 mb-8">Crecimientos en piel del área genital causados por el Virus del Papiloma Humano (VPH)</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4 text-rose-800">¿Cómo se ven?</h3>
              <div className="space-y-3">
                {[
                  { label: "Forma", desc: "Bultos elevados, planos o en racimos — textura rugosa o tipo coliflor" },
                  { label: "Color", desc: "Color piel, rosadas, blanquecinas o grises" },
                  { label: "Tamaño", desc: "Desde 1-2 mm hasta varios centímetros" },
                  { label: "Cantidad", desc: "Una sola o múltiples agrupadas" },
                  { label: "Sensación", desc: "Usualmente sin dolor — pueden picar levemente" },
                  { label: "Evolución", desc: "Crecen lentamente, pueden multiplicarse" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 border-b border-slate-100 pb-2 last:border-0">
                    <span className="text-sm font-semibold text-rose-600 w-20 shrink-0">{item.label}</span>
                    <span className="text-sm text-slate-700">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="font-bold text-slate-800 mb-3">Ubicaciones en hombres</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Pene (glande, cuerpo, base)", "Escroto", "Ingle", "Zona anal", "Uretra (menos común)"].map((u) => (
                    <div key={u} className="text-xs bg-rose-50 border border-rose-200 text-rose-800 rounded-lg px-2 py-1.5 text-center">{u}</div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="font-bold text-slate-800 mb-3">Ubicaciones en mujeres</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Vulva", "Vagina", "Cuello uterino", "Zona anal"].map((u) => (
                    <div key={u} className="text-xs bg-pink-50 border border-pink-200 text-pink-800 rounded-lg px-2 py-1.5 text-center">{u}</div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <p className="text-sm font-semibold text-amber-800 mb-1">Si tienes dudas sobre lo que ves</p>
                <p className="text-xs text-amber-700">Solo un médico puede diagnosticar con certeza. Si ves algo inusual en tus genitales, consulta — es mejor descartar que ignorar.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* IDENTIFICACIÓN */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl font-bold mb-8">
              ¿Cómo Identificar Verrugas Genitales?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <h3 className="font-bold text-emerald-800 mb-3">✅ Las verrugas genitales SÍ son:</h3>
                <ul className="space-y-2 text-sm text-emerald-800">
                  <li className="flex gap-2"><span>•</span>Bultos sólidos visibles y palpables</li>
                  <li className="flex gap-2"><span>•</span>Textura diferente a la piel normal</li>
                  <li className="flex gap-2"><span>•</span>Superficie rugosa o en "coliflor"</li>
                  <li className="flex gap-2"><span>•</span>Aparecen en área genital o anal</li>
                  <li className="flex gap-2"><span>•</span>Crecen lentamente semanas o meses</li>
                  <li className="flex gap-2"><span>•</span>No desaparecen en pocos días</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="font-bold text-slate-800 mb-3">❌ NO son verrugas genitales:</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span>•</span><span><strong>Granos o espinillas</strong> — con punta blanca, dolorosos</span></li>
                  <li className="flex gap-2"><span>•</span><span><strong>Pápulas perladas del pene</strong> — fila de puntos en el glande, completamente normales</span></li>
                  <li className="flex gap-2"><span>•</span><span><strong>Manchas Fordyce</strong> — glándulas sebáceas pequeñas, normales</span></li>
                  <li className="flex gap-2"><span>•</span><span><strong>Molusco contagioso</strong> — virus diferente, apariencia diferente</span></li>
                  <li className="flex gap-2"><span>•</span><span><strong>Herpes genital</strong> — ampollas con líquido, muy dolorosas</span></li>
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-800 px-5 py-3">
                <h3 className="font-bold text-white text-sm">Verrugas Genitales vs Herpes Genital — Diferencias clave</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left px-4 py-3 font-semibold text-slate-600 w-1/3">Característica</th>
                      <th className="text-left px-4 py-3 font-semibold text-rose-700">Verrugas Genitales</th>
                      <th className="text-left px-4 py-3 font-semibold text-orange-700">Herpes Genital</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Tipo de lesión", "Bultos sólidos elevados", "Ampollas con líquido"],
                      ["Dolor", "Sin dolor (o mínimo)", "Muy doloroso"],
                      ["Evolución", "Crecen lentamente", "Brotes de 7-10 días"],
                      ["Desaparición", "No desaparecen solas usualmente", "El brote remite solo"],
                      ["Textura", "Rugosa o tipo coliflor", "Ampollas que revientan"],
                      ["Fiebre", "No", "Puede haber en primer brote"],
                    ].map(([car, vg, hg], i) => (
                      <tr key={car} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 text-slate-600 font-medium">{car}</td>
                        <td className="px-4 py-3 text-slate-700">{vg}</td>
                        <td className="px-4 py-3 text-slate-700">{hg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTAGIO */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl font-bold mb-8">
            ¿Cómo se Contagian las Verrugas Genitales?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-5">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h3 className="font-bold text-slate-800 mb-3">Vías de transmisión</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">▸</span>Contacto sexual piel con piel — principal vía</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">▸</span>Sexo vaginal, anal u oral</li>
                <li className="flex gap-2"><span className="text-rose-400 shrink-0">▸</span>Contacto genital sin penetración</li>
              </ul>
              <div className="mt-4 bg-slate-50 rounded-xl p-3">
                <p className="text-xs font-semibold text-slate-600 mb-1">NO se transmite por:</p>
                <ul className="space-y-0.5 text-xs text-slate-500">
                  <li>✗ Baños o sanitarios</li>
                  <li>✗ Albercas</li>
                  <li>✗ Ropa o toallas compartidas</li>
                  <li>✗ Contacto casual</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h3 className="font-bold text-slate-800 mb-3">Período de incubación</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <p className="font-semibold text-amber-800 mb-1">Semanas a meses</p>
                  <p className="text-xs text-amber-700">Las verrugas pueden aparecer entre 3 semanas y varios meses después del contacto sexual</p>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>• Algunas personas nunca desarrollan verrugas visibles aunque tengan el virus</p>
                  <p>• Es imposible saber exactamente cuándo ni de quién se adquirió</p>
                  <p>• MÁS contagioso cuando hay verrugas visibles</p>
                  <p>• Puede transmitirse incluso sin verrugas (virus latente)</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h3 className="font-bold text-slate-800 mb-3">Factores de riesgo</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "Múltiples parejas sexuales",
                  "Inicio temprano de vida sexual",
                  "Sistema inmune debilitado",
                  "Otras infecciones de transmisión sexual",
                  "Tabaquismo",
                  "Sexo sin protección",
                ].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-rose-400 shrink-0 mt-0.5">▸</span>{f}</li>
                ))}
              </ul>
              <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-xl p-3">
                <p className="text-xs font-semibold text-indigo-700 mb-1">¿El condón protege?</p>
                <p className="text-xs text-indigo-700">Reduce el riesgo 60-70% pero no lo elimina — el VPH puede estar en áreas no cubiertas.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ¿SON PELIGROSAS? */}
        <section className="bg-emerald-600 py-16 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-emerald-100 text-sm font-medium mb-2">La pregunta más importante</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Las Verrugas Genitales son Peligrosas?</h2>
              <div className="inline-block bg-white rounded-3xl px-10 py-4 mb-6 shadow-xl">
                <p className="text-6xl md:text-7xl font-black text-emerald-600">NO</p>
              </div>
              <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                Las verrugas genitales <strong className="text-white">NO son cáncer ni se vuelven cáncer.</strong> Son molestas y contagiosas, pero no representan peligro para tu vida.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white/10 rounded-2xl border border-white/20 p-5">
                <h3 className="font-bold text-white mb-3">Aclaración fundamental</h3>
                <p className="text-sm text-emerald-100">Los tipos de VPH que causan verrugas (tipos 6 y 11) son de <strong className="text-white">bajo riesgo</strong>. Los tipos que causan cáncer (16 y 18) son distintos y <strong className="text-white">no causan verrugas visibles</strong>. Son infecciones diferentes.</p>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white/10 rounded-2xl border border-white/20 p-5">
                <h3 className="font-bold text-white mb-3">Pueden causar</h3>
                <ul className="space-y-1 text-sm text-emerald-100">
                  <li>• Ansiedad y estrés emocional</li>
                  <li>• Molestia durante el sexo</li>
                  <li>• Picazón leve</li>
                  <li>• Sangrado si se irritan</li>
                  <li>• Vergüenza (comprensible, pero tratable)</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white/10 rounded-2xl border border-white/20 p-5">
                <h3 className="font-bold text-white mb-3">NO causan</h3>
                <ul className="space-y-1 text-sm text-emerald-100">
                  <li>✗ Cáncer — nunca</li>
                  <li>✗ Infertilidad</li>
                  <li>✗ Disfunción eréctil</li>
                  <li>✗ Problemas urinarios graves</li>
                  <li>✗ Daño permanente a salud</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRATAMIENTO */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-2">Tratamiento de Verrugas Genitales</h2>
            <p className="text-slate-600 mb-4">No existe tratamiento para el virus VPH en sí — los tratamientos <strong>eliminan las verrugas visibles</strong></p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-8">
            <p className="font-semibold text-red-800 mb-1">⚠️ Advertencia importante</p>
            <p className="text-sm text-red-700">
              <strong>NUNCA uses cremas o parches de venta libre para verrugas de manos y pies</strong> en verrugas genitales. La piel genital es extremadamente sensible — puedes causar quemaduras químicas graves. Los tratamientos genitales son completamente diferentes.
            </p>
          </motion.div>

          <div className="space-y-4 mb-10">
            {tratamientos.map((t, i) => (
              <TratamientoCard key={t.letra} t={t} index={i} />
            ))}
          </div>

          {/* Tabla comparativa */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-800 px-5 py-3">
              <h3 className="font-bold text-white text-sm">Comparativa rápida de tratamientos</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-4 py-3 font-semibold text-slate-600">Tratamiento</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600">Sesiones</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600">Dolor</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600">Costo</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600">Efectividad</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Crioterapia", "2-3", "Leve", "$", "60-80%"],
                    ["Electrofulguración", "1", "Moderado*", "$$", "80-90%"],
                    ["Láser CO₂", "1", "Moderado*", "$$$", "85-95%"],
                    ["Cirugía", "1", "Moderado*", "$$$", "95%+"],
                    ["Tópicos", "Semanas", "Leve-moderado", "$", "50-70%"],
                  ].map(([tratam, ses, dolor, costo, efect], i) => (
                    <tr key={tratam} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-800">{tratam}</td>
                      <td className="px-4 py-3 text-slate-600">{ses}</td>
                      <td className="px-4 py-3 text-slate-600">{dolor}</td>
                      <td className="px-4 py-3 text-slate-600">{costo}</td>
                      <td className="px-4 py-3">
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-medium">{efect}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-2 bg-slate-50 border-t border-slate-200">
              <p className="text-xs text-slate-500">* Con anestesia local — muy tolerable. Tu urólogo te recomendará el tratamiento más adecuado según número, tamaño y ubicación de las verrugas.</p>
            </div>
          </motion.div>
        </section>

        {/* ¿REGRESAN? */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl font-bold mb-6">
              ¿Las Verrugas Regresan Después del Tratamiento?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-amber-800 text-lg mb-3">La respuesta honesta: pueden regresar</h3>
                <p className="text-sm text-amber-700 leading-relaxed mb-4">
                  En el 20-30% de los casos las verrugas pueden regresar, especialmente en los primeros 3 meses después del tratamiento.
                </p>
                <h4 className="font-semibold text-amber-800 mb-2 text-sm">¿Por qué regresan?</h4>
                <ul className="space-y-1 text-sm text-amber-700">
                  <li className="flex gap-2"><span>•</span>El tratamiento elimina verrugas, pero no el virus VPH</li>
                  <li className="flex gap-2"><span>•</span>El VPH puede permanecer latente en células cercanas</li>
                  <li className="flex gap-2"><span>•</span>Si el sistema inmune no lo elimina, puede reactivarse</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-bold text-slate-800 mb-4">¿Cómo reducir recurrencias?</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  {[
                    { item: "Dejar de fumar", nota: "El tabaco debilita el sistema inmune — fundamental" },
                    { item: "Alimentación saludable", nota: "Rica en vitaminas y antioxidantes" },
                    { item: "Manejo del estrés", nota: "El estrés crónico debilita las defensas" },
                    { item: "Seguimiento médico", nota: "Consulta periódica para detectar nuevas verrugas temprano" },
                    { item: "Tratamiento temprano", nota: "Las verrugas nuevas pequeñas son más fáciles de tratar" },
                  ].map((i) => (
                    <div key={i.item} className="flex gap-2">
                      <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                      <div><span className="font-medium">{i.item}: </span><span className="text-slate-600">{i.nota}</span></div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-700">
                  Si regresan, se pueden tratar nuevamente con las mismas opciones. A veces se usan combinaciones de tratamientos para casos recurrentes.
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CUIDADOS POST-TRATAMIENTO */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl font-bold mb-8">
            Cuidados Después del Tratamiento
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="font-bold text-slate-800 mb-3">Después de Crioterapia</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-blue-400">•</span>El área puede verse roja o hinchada por 1-2 días (normal)</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span>Puede formarse una pequeña ampolla (normal)</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span>Mantener área limpia y seca</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span>Evitar relaciones sexuales por 1-2 semanas</li>
                  <li className="flex gap-2"><span className="text-blue-400">•</span>No raspar ni picar la costra</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                <h3 className="font-bold text-slate-800 mb-3">Después de Electrofulguración / Láser / Cirugía</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-violet-400">•</span>Curación completa en 2-3 semanas</li>
                  <li className="flex gap-2"><span className="text-violet-400">•</span>Mantener área limpia según indicaciones</li>
                  <li className="flex gap-2"><span className="text-violet-400">•</span>Evitar relaciones sexuales hasta curación completa</li>
                  <li className="flex gap-2"><span className="text-violet-400">•</span>No mojar excesivamente los primeros días</li>
                  <li className="flex gap-2"><span className="text-violet-400">•</span>Tomar analgésico si hay molestia</li>
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-red-50 border border-red-200 rounded-2xl p-5">
              <h3 className="font-bold text-red-800 mb-3">🚨 Señales de alarma — consulta inmediata</h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex gap-2"><span>•</span>Fiebre mayor a 38°C</li>
                <li className="flex gap-2"><span>•</span>Dolor severo que no mejora</li>
                <li className="flex gap-2"><span>•</span>Pus o mal olor en la zona tratada</li>
                <li className="flex gap-2"><span>•</span>Sangrado abundante</li>
                <li className="flex gap-2"><span>•</span>Hinchazón excesiva o que aumenta</li>
                <li className="flex gap-2"><span>•</span>Enrojecimiento que se extiende</li>
              </ul>
              <div className="mt-4">
                <a href={WA_URGENTE} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("verrugas-genitales")}
                  className="block w-full text-center bg-red-600 text-white font-semibold py-2.5 rounded-xl hover:bg-red-700 transition text-sm">
                  Reportar problema post-tratamiento
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PREVENCIÓN */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl font-bold mb-8">
              Prevención de Verrugas Genitales
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: "1", titulo: "Vacuna Gardasil 9", desc: "La medida más efectiva. Previene >90% de verrugas genitales al proteger contra los tipos 6 y 11 del VPH.", badge: "Más efectiva", badgeColor: "bg-emerald-100 text-emerald-700" },
                { num: "2", titulo: "Uso de condón", desc: "Reduce el riesgo 60-70%. No protege completamente — el VPH puede estar en áreas no cubiertas. Siempre recomendado.", badge: "Muy recomendado", badgeColor: "bg-blue-100 text-blue-700" },
                { num: "3", titulo: "Evitar sexo con verrugas visibles", desc: "Las verrugas son más contagiosas cuando están presentes. Espera hasta después del tratamiento y curación.", badge: "Reducción de riesgo", badgeColor: "bg-amber-100 text-amber-700" },
                { num: "4", titulo: "Sistema inmune saludable", desc: "No fumar, dieta balanceada, ejercicio y manejo del estrés ayudan al cuerpo a eliminar el virus y prevenir recurrencias.", badge: "Importante", badgeColor: "bg-rose-100 text-rose-700" },
                { num: "5", titulo: "Autoexamen regular", desc: "Revisión periódica de genitales. Cualquier lesión nueva o cambio inusual debe evaluarse cuanto antes.", badge: "Detección temprana", badgeColor: "bg-slate-100 text-slate-700" },
                { num: "6", titulo: "Limitar parejas sexuales", desc: "Menor número de parejas = menor exposición al VPH. No elimina el riesgo, pero lo reduce significativamente.", badge: "Efectivo", badgeColor: "bg-indigo-100 text-indigo-700" },
              ].map((item) => (
                <motion.div key={item.num} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center font-bold text-sm">{item.num}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.badgeColor}`}>{item.badge}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{item.titulo}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VIDA SEXUAL */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl font-bold mb-8">
            Verrugas Genitales y Vida Sexual
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                q: "¿Puedo tener relaciones sexuales con verrugas?",
                a: "No se recomienda mientras haya verrugas visibles. El riesgo de transmisión es alto. Espera hasta después del tratamiento y curación completa — usualmente 1-3 semanas.",
                color: "border-red-200 bg-red-50",
                icon: "🚫",
              },
              {
                q: "¿Debo decirle a mi pareja?",
                a: "Sí, absolutamente. Tu pareja debe evaluarse — puede tener VPH sin saberlo. En mujeres, el VPH puede causar cáncer cervical. La comunicación honesta es fundamental.",
                color: "border-amber-200 bg-amber-50",
                icon: "💬",
              },
              {
                q: "¿Cuándo puedo volver a tener sexo?",
                a: "Después del tratamiento y curación completa. Siempre con condón. Informa a tu pareja para que pueda evaluarse y vacunarse.",
                color: "border-emerald-200 bg-emerald-50",
                icon: "✅",
              },
              {
                q: "¿Puedo transmitir VPH si ya no tengo verrugas?",
                a: "Sí, el virus puede permanecer en el cuerpo. El riesgo es menor que con verrugas visibles, pero existe. El uso de condón siempre es recomendado.",
                color: "border-indigo-200 bg-indigo-50",
                icon: "ℹ️",
              },
            ].map((item) => (
              <motion.div key={item.q} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`rounded-2xl border p-5 ${item.color}`}>
                <div className="flex gap-3 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="font-bold text-slate-800 text-sm">{item.q}</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MITOS Y REALIDADES */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl font-bold mb-8">
              Mitos y Realidades sobre Verrugas Genitales
            </motion.h2>
            <div className="space-y-4">
              {[
                {
                  mito: "Las verrugas genitales se vuelven cáncer",
                  realidad: "FALSO. Los tipos de VPH que causan verrugas (6 y 11) son de bajo riesgo y no causan cáncer. Son tipos completamente diferentes a los que pueden causar cáncer (16 y 18).",
                },
                {
                  mito: "Solo las personas promiscuas tienen verrugas genitales",
                  realidad: "FALSO. Cualquier persona sexualmente activa puede contraer VPH y desarrollar verrugas. El 80-90% de las personas sexualmente activas tendrán VPH en algún momento de su vida.",
                },
                {
                  mito: "Me puedo contagiar en baños públicos o albercas",
                  realidad: "FALSO. El VPH se transmite por contacto sexual directo piel con piel. No sobrevive en superficies ni en agua. Los baños públicos no representan riesgo.",
                },
                {
                  mito: "Si uso condón siempre, estoy completamente protegido",
                  realidad: "PARCIALMENTE INCORRECTO. El condón reduce el riesgo significativamente (60-70%), pero el VPH puede estar en áreas no cubiertas (escroto, base del pene). El condón sigue siendo muy recomendable.",
                },
                {
                  mito: "Si mi pareja tiene verrugas, definitivamente me fue infiel",
                  realidad: "FALSO. El VPH puede permanecer latente por años. Tu pareja pudo haberlo adquirido mucho antes de conocerte. Las verrugas no son evidencia de infidelidad.",
                },
                {
                  mito: "Puedo curarme con remedios caseros (ajo, vinagre de manzana, etc.)",
                  realidad: "FALSO Y PELIGROSO. Los remedios caseros no tienen evidencia científica y pueden causar quemaduras químicas severas en la piel genital. Usa solo tratamientos médicos prescritos.",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="bg-slate-800 p-4 flex gap-3 items-start">
                      <span className="bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded shrink-0 mt-0.5">MITO</span>
                      <p className="text-sm text-white font-medium">{item.mito}</p>
                    </div>
                    <div className="bg-emerald-50 border-l border-emerald-200 p-4 flex gap-3 items-start">
                      <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded shrink-0 mt-0.5">REALIDAD</span>
                      <p className="text-sm text-emerald-800">{item.realidad}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl font-bold mb-8">
            Preguntas Frecuentes sobre Verrugas Genitales
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* POR QUÉ DR. QUIROZ */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center">
              Por qué elegir al Dr. Quiroz para Tratamiento de Verrugas Genitales en León
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🔒", titulo: "Consulta confidencial", desc: "Sin juicios. Ambiente profesional y discreto." },
                { icon: "🩺", titulo: "Diagnóstico experto", desc: "Diferenciación de verrugas con otras lesiones genitales." },
                { icon: "❄️", titulo: "Crioterapia en consultorio", desc: "Tratamiento rápido, sin cirugía, en la misma consulta." },
                { icon: "⚡", titulo: "Electrofulguración", desc: "Eliminación inmediata en una sesión." },
                { icon: "🔦", titulo: "Láser CO₂", desc: "Alta precisión para áreas delicadas o verrugas extensas." },
                { icon: "🔬", titulo: "Biopsia si necesario", desc: "Confirmación diagnóstica cuando hay duda clínica." },
                { icon: "🔄", titulo: "Manejo de recurrencias", desc: "Seguimiento y retratamiento si las verrugas regresan." },
                { icon: "💉", titulo: "Asesoría en vacunación", desc: "Orientación sobre Gardasil 9 para prevención futura." },
              ].map((item) => (
                <motion.div key={item.titulo} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{item.titulo}</h3>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-br from-rose-950 via-rose-900 to-pink-800 py-16 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl px-4"
          >
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-3xl font-bold mb-3">Las Verrugas Genitales Tienen Solución</h2>
            <p className="text-rose-100 mb-2">
              Tratamiento efectivo disponible hoy en León, Guanajuato.
            </p>
            <p className="text-rose-200 text-sm mb-2">
              No esperes — mientras más pronto, mejor resultado
            </p>
            <p className="text-rose-300 text-xs mb-8">
              Eliminación efectiva de verrugas genitales — consulta confidencial y profesional
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <a href={WA_TRATAMIENTO} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("verrugas-genitales")}
                className="bg-white text-rose-900 font-semibold px-8 py-3 rounded-2xl hover:bg-rose-50 transition shadow-lg">
                Agenda tratamiento hoy
              </a>
              <a href={WA_URGENTE} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("verrugas-genitales")}
                className="bg-rose-800 border border-rose-600 text-white font-semibold px-8 py-3 rounded-2xl hover:bg-rose-700 transition">
                💬 WhatsApp para consulta urgente
              </a>
            </div>
            <div className="text-sm text-rose-300 flex flex-wrap justify-center gap-3">
              <Link href="/" className="hover:text-white transition">← Inicio</Link>
              <span>·</span>
              <Link href="/vph-en-hombres" className="hover:text-white transition">VPH en Hombres</Link>
              <span>·</span>
              <Link href="/infeccion-urinaria" className="hover:text-white transition">Infección urinaria</Link>
              <span>·</span>
              <Link href="/disfuncion-erectil" className="hover:text-white transition">Disfunción eréctil</Link>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
