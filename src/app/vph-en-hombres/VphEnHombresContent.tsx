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
const WA_CONFIDENCIAL = waLink("Hola Dr. Quiroz, me gustaría una consulta confidencial sobre VPH (virus del papiloma humano).");
const WA_EVALUACION = waLink("Hola Dr. Quiroz, quiero agendar una evaluación de VPH en León.");

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "¿Cómo sé si tengo VPH?",
    a: "La mayoría de hombres con VPH no tienen síntomas. Si tienes verrugas genitales (bultos o protuberancias en pene, escroto o zona anal), esa es la señal más visible. Si no tienes síntomas pero tuviste contacto sexual sin protección, o tu pareja fue diagnosticada con VPH, una evaluación con el urólogo es lo más recomendable. No existe prueba de tamizaje rutinaria para hombres.",
  },
  {
    q: "¿El VPH en hombres se cura solo?",
    a: "En la mayoría de los casos, sí. El 70-90% de las infecciones por VPH se resuelven solas gracias al sistema inmune en 1-2 años. No existe tratamiento para eliminar el virus directamente — lo que se trata son las verrugas y lesiones que causa. En una minoría de casos, el virus persiste y requiere vigilancia.",
  },
  {
    q: "¿Puedo tener hijos si tengo VPH?",
    a: "Sí, el VPH generalmente no afecta la fertilidad masculina. La producción de espermatozoides es independiente de la infección por VPH. Algunos estudios sugieren que el VPH podría afectar la movilidad espermática en ciertos casos, pero no es una causa establecida de infertilidad. Si estás buscando un embarazo y tienes VPH, coméntalo con tu urólogo.",
  },
  {
    q: "¿El VPH causa infertilidad en hombres?",
    a: "No de forma directa. El VPH no está establecido como causa de infertilidad masculina. Existen estudios que sugieren que el VPH podría unirse a los espermatozoides y afectar su capacidad de fertilización en algunos casos, pero esto no significa infertilidad en la práctica clínica habitual.",
  },
  {
    q: "¿Puedo donar sangre si tengo VPH?",
    a: "El VPH no se transmite por transfusión de sangre — es una infección que se transmite por contacto piel con piel y sexual. No existe prueba de VPH en el tamizaje estándar de donadores de sangre. Si tienes dudas específicas, consulta directamente con el banco de sangre.",
  },
  {
    q: "¿Debo vacunarme si ya tuve VPH?",
    a: "Sí, vale la pena. La vacuna Gardasil 9 protege contra 9 tipos de VPH. Aunque hayas tenido VPH, probablemente no hayas sido infectado por todos los tipos incluidos en la vacuna. Vacunarte protege contra los tipos que aún no has contraído. Tu urólogo puede orientarte sobre si la vacuna es adecuada en tu caso.",
  },
  {
    q: "¿El condón protege completamente contra VPH?",
    a: "No completamente, pero reduce el riesgo de forma significativa. El VPH puede estar en áreas no cubiertas por el condón como el escroto, la base del pene y la zona inguinal. Aun así, el uso consistente de condón es una medida de protección importante — siempre recomendado.",
  },
  {
    q: "¿Puedo transmitir VPH aunque no tenga verrugas?",
    a: "Sí. Esta es una de las características más importantes del VPH: puedes transmitirlo aunque no tengas ningún síntoma visible. El virus puede estar presente en la piel sin causar verrugas — y en ese estado igualmente puede transmitirse por contacto sexual. Esto explica por qué el VPH es tan común.",
  },
  {
    q: "¿Cuánto tiempo tarda en aparecer el VPH después del contagio?",
    a: "El tiempo entre la exposición y la aparición de síntomas puede variar enormemente. Las verrugas genitales pueden aparecer entre 3 semanas y varios meses después del contacto. El VPH de alto riesgo puede permanecer latente por años. Por esto es imposible determinar con certeza cuándo ni de quién se adquirió la infección.",
  },
  {
    q: "¿Las verrugas genitales se vuelven cáncer?",
    a: "No. Las verrugas genitales son causadas por los tipos 6 y 11 del VPH, que son de bajo riesgo y no son cancerígenos. Las verrugas son molestas y contagiosas, pero no son precancerosas ni evolucionan a cáncer. El cáncer relacionado con VPH es causado por otros tipos (principalmente 16 y 18), que no producen verrugas visibles.",
  },
  {
    q: "¿Puedo tener VPH y VIH al mismo tiempo?",
    a: "Sí, ambas infecciones pueden coexistir. El VIH debilita el sistema inmune, lo que dificulta que el cuerpo elimine el VPH naturalmente. Las personas con VIH tienen mayor riesgo de infección persistente por VPH y mayor riesgo de desarrollar cánceres relacionados. El control efectivo del VIH con tratamiento antirretroviral mejora la respuesta frente al VPH.",
  },
  {
    q: "¿El VPH oral es igual que el genital?",
    a: "El VPH oral es causado por los mismos tipos de virus (incluyendo 16 y 18) pero afecta la mucosa de la boca y garganta. Se transmite principalmente por sexo oral. No causa síntomas visibles en la mayoría de casos. El VPH oral de alto riesgo está relacionado con el aumento en cánceres de orofaringe en las últimas décadas.",
  },
  {
    q: "¿Debo hacerme prueba de VPH regularmente?",
    a: "No existe tamizaje rutinario de VPH para hombres como el Papanicolaou para mujeres. La evaluación se recomienda cuando hay verrugas visibles, lesiones sospechosas o si tu pareja fue diagnosticada con VPH. En hombres que tienen sexo con hombres o en personas con VIH, puede estar indicada una evaluación más periódica.",
  },
  {
    q: "¿Mi novia tiene VPH, significa que me fue infiel?",
    a: "No. El VPH puede estar latente por años o décadas antes de causar síntomas. Una persona puede haber adquirido el virus en una relación anterior sin saberlo, y el virus puede activarse o hacerse detectable mucho tiempo después. El diagnóstico de VPH no es evidencia de infidelidad — es evidencia de actividad sexual en algún momento de la vida, como le ocurre a la mayoría de las personas.",
  },
  {
    q: "¿El VPH puede causar disfunción eréctil?",
    a: "El VPH por sí mismo no causa disfunción eréctil directamente. Sin embargo, la ansiedad y el estrés psicológico asociados al diagnóstico de VPH pueden afectar temporalmente la función eréctil. Si experimentas disfunción eréctil, esta tiene causas vasculares, hormonales o psicológicas que vale la pena evaluar por separado con tu urólogo.",
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

export default function VphEnHombresContent() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <main>
        {/* HERO */}
        <section className="relative text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-800 to-purple-700" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-5xl px-4 py-20 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-700/50 text-indigo-100 text-sm px-4 py-1.5 rounded-full mb-6 border border-indigo-500/40">
              🔒 Consulta confidencial — sin juicios, con profesionalismo
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              VPH en Hombres en León, Guanajuato:<br className="hidden md:block" />
              Síntomas, Diagnóstico y Tratamiento
            </h1>
            <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
              Información clara sobre el virus del papiloma humano en hombres — diagnóstico, tratamiento y prevención. El VPH es más común de lo que piensas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={WA_EVALUACION} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("vph")}
                className="bg-white text-indigo-900 font-semibold px-6 py-3 rounded-2xl hover:bg-indigo-50 transition shadow-lg">
                Agenda evaluación de VPH
              </a>
              <a href={WA_CONFIDENCIAL} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("vph")}
                className="bg-indigo-700 border border-indigo-500 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-indigo-600 transition">
                💬 WhatsApp confidencial
              </a>
            </div>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="mx-auto max-w-5xl px-4 -mt-6 relative z-10 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { num: "80-90%", label: "de personas sexualmente activas tendrán VPH en algún momento" },
              { num: "100+", label: "tipos de VPH existen — no todos causan cáncer" },
              { num: "70-90%", label: "de infecciones se eliminan solas en 1-2 años" },
              { num: ">90%", label: "de efectividad de la vacuna Gardasil 9" },
            ].map((stat) => (
              <motion.div
                key={stat.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-center"
              >
                <div className="text-2xl font-bold text-indigo-700">{stat.num}</div>
                <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* QUÉ ES EL VPH */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-2">¿Qué es el VPH en Hombres?</h2>
            <p className="text-slate-600 mb-8">El VPH (Virus del Papiloma Humano) es la infección de transmisión sexual más común en el mundo.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4 text-indigo-800">¿Qué es el VPH?</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-indigo-500 shrink-0 mt-0.5">•</span>Infección viral de transmisión sexual — la más común en el mundo</li>
                <li className="flex gap-2"><span className="text-indigo-500 shrink-0 mt-0.5">•</span>Más de 100 tipos diferentes — no todos son iguales</li>
                <li className="flex gap-2"><span className="text-indigo-500 shrink-0 mt-0.5">•</span>Algunos tipos causan <strong>verrugas genitales</strong> (tipos 6 y 11 — bajo riesgo)</li>
                <li className="flex gap-2"><span className="text-indigo-500 shrink-0 mt-0.5">•</span>Otros tipos pueden causar <strong>cáncer</strong> (tipos 16 y 18 — alto riesgo)</li>
                <li className="flex gap-2"><span className="text-indigo-500 shrink-0 mt-0.5">•</span>Puede permanecer latente por años sin ningún síntoma visible</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4 text-indigo-800">¿Qué tan común es en hombres?</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-indigo-500 shrink-0 mt-0.5">•</span>80-90% de personas sexualmente activas lo contraerán en algún momento</li>
                <li className="flex gap-2"><span className="text-indigo-500 shrink-0 mt-0.5">•</span>La mayoría de infecciones son <strong>transitorias</strong> — desaparecen en 1-2 años</li>
                <li className="flex gap-2"><span className="text-indigo-500 shrink-0 mt-0.5">•</span>Más frecuente en hombres de 20-30 años con vida sexual activa</li>
                <li className="flex gap-2"><span className="text-indigo-500 shrink-0 mt-0.5">•</span>Puede estar presente sin síntomas — los hombres son reservorios frecuentes</li>
              </ul>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <div className="flex gap-3">
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-semibold text-indigo-800 mb-1">Mensaje importante: el VPH no significa infidelidad</p>
                <p className="text-sm text-indigo-700 leading-relaxed">
                  Tener VPH <strong>NO significa que tu pareja te fue infiel</strong>. Es una infección tan común que la mayoría de personas sexualmente activas la tendrán en algún momento. El virus puede permanecer latente por años — es imposible saber cuándo se adquirió. La clave está en detectarlo y tratarlo cuando causa problemas.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TIPOS DE VPH */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl font-bold mb-8">
              Tipos de VPH en Hombres: Bajo y Alto Riesgo
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-bold text-emerald-800">VPH de Bajo Riesgo</h3>
                    <p className="text-xs text-emerald-600">No causan cáncer</p>
                  </div>
                </div>
                <div className="bg-emerald-100 rounded-xl px-4 py-2 inline-block mb-4">
                  <span className="font-bold text-emerald-700 text-sm">Tipos principales: 6 y 11</span>
                </div>
                <ul className="space-y-2 text-sm text-emerald-800">
                  <li>• Causan el 90% de las verrugas genitales</li>
                  <li>• Visibles y molestos, pero <strong>NO cancerosos</strong></li>
                  <li>• Tienen tratamiento efectivo</li>
                  <li>• Pueden aparecer semanas o meses después del contagio</li>
                </ul>
                <div className="mt-4 p-3 bg-emerald-100 rounded-xl text-xs text-emerald-700">
                  💉 La vacuna Gardasil 9 protege contra los tipos 6 y 11 — previene la mayoría de las verrugas genitales.
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h3 className="font-bold text-rose-800">VPH de Alto Riesgo</h3>
                    <p className="text-xs text-rose-600">Pueden causar cáncer — requieren vigilancia</p>
                  </div>
                </div>
                <div className="bg-rose-100 rounded-xl px-4 py-2 inline-block mb-4">
                  <span className="font-bold text-rose-700 text-sm">Tipos principales: 16 y 18 (también 31, 33, 45, 52, 58)</span>
                </div>
                <ul className="space-y-2 text-sm text-rose-800">
                  <li>• <strong>NO causan verrugas visibles</strong></li>
                  <li>• Asintomáticos por años</li>
                  <li>• Solo detectables con estudios específicos</li>
                  <li>• Requieren vigilancia a largo plazo</li>
                  <li>• El sistema inmune los elimina en la mayoría de casos</li>
                </ul>
                <div className="mt-4 p-3 bg-rose-100 rounded-xl text-xs text-rose-700">
                  ⚠️ Si el sistema inmune no los elimina, pueden progresar a cáncer de pene, anal u orofaringe tras años de persistencia.
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-slate-100 rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-800 mb-4">Tipos de cáncer que VPH puede causar en hombres</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { cancer: "Cáncer de pene", rate: "~50% relacionado con VPH", note: "Raro (menos del 1% de cánceres en hombres). Detectable tempranamente — es una lesión visible.", color: "bg-amber-50 border-amber-200 text-amber-800" },
                  { cancer: "Cáncer anal", rate: ">90% relacionado con VPH", note: "Más frecuente en hombres que tienen sexo con hombres. Especialista: coloproctólogo.", color: "bg-orange-50 border-orange-200 text-orange-800" },
                  { cancer: "Cáncer de garganta (orofaringe)", rate: ">70% relacionado con VPH", note: "Aumento dramático en últimas décadas. Relacionado con sexo oral. Especialista: otorrinolaringólogo.", color: "bg-red-50 border-red-200 text-red-800" },
                ].map((item) => (
                  <div key={item.cancer} className={`rounded-xl border p-4 ${item.color}`}>
                    <h4 className="font-semibold text-sm mb-1">{item.cancer}</h4>
                    <p className="text-xs font-medium mb-2">{item.rate}</p>
                    <p className="text-xs opacity-80">{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-white rounded-xl p-3 text-xs text-slate-700 border border-slate-200">
                <strong>Importante:</strong> El VPH <strong>NO causa</strong> cáncer de próstata, cáncer testicular, ni cáncer de vejiga. Solo los tipos de cáncer mencionados arriba están relacionados con VPH.
              </div>
            </motion.div>
          </div>
        </section>

        {/* SÍNTOMAS */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-2">Síntomas del VPH en Hombres</h2>
            <p className="text-slate-600 mb-6">La sección más buscada — lo que necesitas saber sobre las señales del VPH</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-8">
            <p className="font-semibold text-indigo-800 text-lg">
              Realidad importante: La mayoría de hombres con VPH NO tienen ningún síntoma
            </p>
            <p className="text-sm text-indigo-700 mt-2">
              El virus puede estar presente por años sin que lo sepas. Por eso es tan común y tan fácil de transmitir sin saberlo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 text-xs font-bold">A</span>
                Verrugas Genitales (VPH de bajo riesgo)
              </h3>
              <div className="space-y-3">
                {[
                  { icon: "🔍", label: "Apariencia", desc: "Pequeños bultos o protuberancias en la piel" },
                  { icon: "📍", label: "Ubicación", desc: "Pene, escroto, ingle, zona anal, uretra" },
                  { icon: "🍄", label: "Forma", desc: "Pueden parecer coliflor, planas o elevadas" },
                  { icon: "🎨", label: "Color", desc: "Color piel, rosadas o blanquecinas" },
                  { icon: "🔢", label: "Cantidad", desc: "Una sola o múltiples en racimos" },
                  { icon: "😐", label: "Sensación", desc: "Usualmente sin dolor — pueden picar levemente" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 items-start">
                    <span className="text-lg">{item.icon}</span>
                    <div className="text-sm">
                      <span className="font-medium text-slate-700">{item.label}: </span>
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                En consulta se realiza una evaluación visual completa y discreta. Las verrugas genitales tienen apariencias características que el especialista reconoce inmediatamente.
              </div>
            </motion.div>

            <div className="space-y-5">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 text-xs font-bold">B</span>
                  VPH de Alto Riesgo (asintomático)
                </h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex gap-2"><span className="text-rose-400 shrink-0">•</span><span><strong>No causa verrugas visibles</strong></span></div>
                  <div className="flex gap-2"><span className="text-rose-400 shrink-0">•</span><span>No causa dolor ni molestia</span></div>
                  <div className="flex gap-2"><span className="text-rose-400 shrink-0">•</span><span>No tiene síntomas hasta que —tras años— puede causar cáncer</span></div>
                  <div className="flex gap-2"><span className="text-rose-400 shrink-0">•</span><span>Solo detectable con estudios específicos (PCR, biopsia)</span></div>
                  <div className="flex gap-2"><span className="text-rose-400 shrink-0">•</span><span>En la mayoría de hombres el sistema inmune lo elimina solo</span></div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <p className="font-semibold text-red-800 mb-3">🚨 Señales de alarma — consulta urgente:</p>
                <ul className="space-y-1.5 text-sm text-red-700">
                  <li className="flex gap-2"><span>•</span>Verrugas que sangran</li>
                  <li className="flex gap-2"><span>•</span>Cambio de color en lesiones existentes</li>
                  <li className="flex gap-2"><span>•</span>Crecimiento rápido de lesiones</li>
                  <li className="flex gap-2"><span>•</span>Lesiones dolorosas en pene</li>
                  <li className="flex gap-2"><span>•</span>Dificultad para orinar o sangrado uretral</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRANSMISIÓN */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl font-bold mb-8">
              ¿Cómo se Transmite el VPH?
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="font-bold text-lg text-slate-800 mb-4">Vías de transmisión sexual</h3>
                <div className="space-y-3 mb-4">
                  {[
                    { tipo: "Sexo vaginal", nivel: "Principal", color: "bg-orange-100 text-orange-700" },
                    { tipo: "Sexo anal", nivel: "Principal", color: "bg-orange-100 text-orange-700" },
                    { tipo: "Sexo oral", nivel: "Frecuente", color: "bg-amber-100 text-amber-700" },
                    { tipo: "Contacto piel con piel genital", nivel: "Posible", color: "bg-yellow-100 text-yellow-700" },
                  ].map((item) => (
                    <div key={item.tipo} className="flex items-center justify-between bg-slate-50 rounded-xl p-3 border border-slate-200">
                      <span className="text-sm font-medium text-slate-700">{item.tipo}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.color}`}>{item.nivel}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-100 rounded-xl p-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">NO se transmite por:</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>✗ Baños o sanitarios públicos</li>
                    <li>✗ Albercas o jacuzzis</li>
                    <li>✗ Compartir ropa o toallas</li>
                    <li>✗ Contacto casual (saludar, abrazar)</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="font-bold text-lg text-slate-800 mb-4">Factores que aumentan el riesgo</h3>
                <div className="space-y-2 mb-4">
                  {[
                    "Inicio temprano de vida sexual",
                    "Múltiples parejas sexuales",
                    "Pareja con VPH (conocida o no)",
                    "Sistema inmune debilitado (VIH, trasplante, quimioterapia)",
                    "Tabaquismo — dificulta la eliminación del virus",
                    "No estar circuncidado (riesgo ligeramente mayor)",
                    "Sexo sin protección",
                  ].map((factor) => (
                    <div key={factor} className="flex gap-2 text-sm text-slate-700 bg-white border border-slate-200 rounded-xl p-3">
                      <span className="text-rose-400 shrink-0 mt-0.5">▸</span>
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                  <p className="font-semibold text-indigo-800 text-sm mb-2">¿El condón protege contra VPH?</p>
                  <p className="text-sm text-indigo-700">
                    El condón <strong>reduce el riesgo significativamente, pero no lo elimina completamente</strong>. El VPH puede estar en áreas no cubiertas (escroto, base del pene, ingle). Aun así, siempre se recomienda usar condón.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DIAGNÓSTICO */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl font-bold mb-6">
            Diagnóstico del VPH en Hombres: Prueba y Evaluación
          </motion.h2>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
            <p className="font-semibold text-amber-800 mb-1">Realidad sobre las pruebas de VPH en hombres</p>
            <p className="text-sm text-amber-700">
              <strong>NO existe prueba estándar de VPH para hombres</strong> como el Papanicolaou existe para mujeres. El diagnóstico en hombres es principalmente clínico — basado en la evaluación visual por el especialista.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {[
              { titulo: "Examen físico visual", desc: "Inspección cuidadosa de genitales. Identificación de verrugas y evaluación de lesiones sospechosas. Es el método diagnóstico principal en hombres.", icon: "🔎", color: "border-indigo-200 bg-indigo-50" },
              { titulo: "PCR para VPH", desc: "Detecta el tipo específico de VPH presente. Disponible en laboratorios especializados, pero no se recomienda como tamizaje rutinario — no cambia el manejo clínico en la mayoría de casos.", icon: "🧬", color: "border-slate-200 bg-slate-50" },
              { titulo: "Biopsia de lesiones", desc: "Extracción de muestra de tejido para análisis microscópico. Se indica en lesiones sospechosas que no responden al tratamiento o cuando se sospecha malignidad.", icon: "🔬", color: "border-slate-200 bg-slate-50" },
            ].map((item) => (
              <motion.div key={item.titulo} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`rounded-2xl border p-5 ${item.color}`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{item.titulo}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-800 mb-3">¿Cuándo buscar evaluación?</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Verrugas genitales visibles — cualquier bulto o lesión nueva",
                "Tu pareja fue diagnosticada con VPH o verrugas genitales",
                "Lesiones o cambios en piel genital que no desaparecen",
                "Síntomas urinarios inusuales sin causa aparente",
                "Antes de vacunarte — evaluación para conocer tu situación",
                "Múltiples parejas sexuales sin protección regular",
              ].map((item) => (
                <div key={item} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-indigo-500 shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ¿SE CURA? */}
        <section className="bg-gradient-to-br from-indigo-950 to-purple-900 text-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-2">¿El VPH en Hombres se Cura?</h2>
              <p className="text-indigo-200 mb-8">Respuesta honesta basada en la evidencia científica actual</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                <h3 className="font-bold text-xl mb-3">La respuesta honesta</h3>
                <p className="text-indigo-100 text-sm leading-relaxed mb-4">
                  <strong className="text-white">NO existe cura para el virus del VPH</strong>, pero en la mayoría de hombres el sistema inmune lo elimina naturalmente en 1-2 años. Mientras tanto, <strong className="text-white">SÍ se pueden tratar las verrugas</strong> y prevenir complicaciones.
                </p>
                <ul className="space-y-2 text-sm text-indigo-100">
                  <li className="flex gap-2"><span>→</span>El virus puede quedar latente (dormido) en el cuerpo</li>
                  <li className="flex gap-2"><span>→</span>Puede reactivarse si el sistema inmune se debilita</li>
                  <li className="flex gap-2"><span>→</span>Las verrugas pueden regresar incluso después del tratamiento</li>
                  <li className="flex gap-2"><span>→</span>El VPH de alto riesgo requiere vigilancia a largo plazo</li>
                </ul>
              </motion.div>

              <div className="space-y-4">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-emerald-500/20 border border-emerald-400/40 rounded-2xl p-5">
                  <h3 className="font-bold text-emerald-300 mb-2">✅ Con eliminación natural (70-90% de casos)</h3>
                  <ul className="space-y-1 text-sm text-emerald-100">
                    <li>• Sistema inmune elimina el virus en 1-2 años</li>
                    <li>• Más común en hombres jóvenes con sistema inmune saludable</li>
                    <li>• Las infecciones transitorias no causan cáncer</li>
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-amber-500/20 border border-amber-400/40 rounded-2xl p-5">
                  <h3 className="font-bold text-amber-300 mb-2">⚠️ Con infección persistente (minoría de casos)</h3>
                  <ul className="space-y-1 text-sm text-amber-100">
                    <li>• VPH permanece activo por años</li>
                    <li>• Mayor riesgo si es de alto riesgo oncogénico</li>
                    <li>• Requiere vigilancia y seguimiento periódico</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* TRATAMIENTO */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-2">Tratamiento del VPH en Hombres</h2>
            <p className="text-slate-600 mb-8">No existe tratamiento para el virus en sí — los tratamientos son para las verrugas y lesiones que causa</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4">Tratamiento de Verrugas Genitales</h3>
              <p className="text-sm text-slate-600 mb-4">El objetivo es eliminar las lesiones visibles y reducir el riesgo de transmisión. <Link href="/verrugas-genitales" className="text-indigo-600 hover:text-indigo-800 font-medium underline">Ver guía completa de tratamientos →</Link></p>
              <div className="space-y-3">
                {[
                  { nombre: "Crioterapia", desc: "Congelamiento con nitrógeno líquido. Efectivo, rápido, sin cicatriz." },
                  { nombre: "Electrofulguración", desc: "Cauterización eléctrica. Permite tratar múltiples verrugas en una sesión." },
                  { nombre: "Láser CO₂", desc: "Alta precisión — ideal para lesiones extensas o en áreas delicadas." },
                  { nombre: "Aplicaciones tópicas", desc: "Bajo supervisión médica estricta, para lesiones pequeñas y accesibles." },
                  { nombre: "Cirugía", desc: "Para casos extensos o lesiones que no responden a otros tratamientos." },
                ].map((opt) => (
                  <div key={opt.nombre} className="flex gap-3 border-b border-slate-100 pb-3 last:border-0">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full shrink-0 mt-1.5" />
                    <div>
                      <span className="text-sm font-semibold text-slate-800">{opt.nombre}: </span>
                      <span className="text-sm text-slate-600">{opt.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-5">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-bold text-lg mb-4">Fortalecimiento del Sistema Inmune</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  {[
                    { item: "Dejar de fumar", nota: "Fundamental — el tabaco interfiere con la eliminación del VPH" },
                    { item: "Alimentación saludable", nota: "Rica en frutas, verduras y antioxidantes" },
                    { item: "Ejercicio regular", nota: "Fortalece el sistema inmune" },
                    { item: "Manejo del estrés", nota: "El estrés crónico debilita las defensas" },
                    { item: "Control de enfermedades crónicas", nota: "Diabetes, VIH — su control mejora la respuesta inmune" },
                  ].map((i) => (
                    <div key={i.item}>
                      <span className="font-medium text-slate-800">{i.item}: </span>
                      <span className="text-slate-600">{i.nota}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
                <h3 className="font-bold text-indigo-800 mb-2">Seguimiento y Vigilancia</h3>
                <ul className="space-y-1.5 text-sm text-indigo-700">
                  <li>• Autoexamen regular de genitales</li>
                  <li>• Consultas periódicas si el VPH es persistente</li>
                  <li>• Vigilancia de nuevas lesiones</li>
                  <li>• Evaluación de la pareja sexual</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VACUNA */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16 border-y border-emerald-200">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
              <div className="inline-block bg-emerald-100 text-emerald-700 text-sm px-4 py-1.5 rounded-full mb-4 font-medium">
                La medida preventiva más efectiva disponible
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-3">Vacuna contra VPH en Hombres: Gardasil 9</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Los hombres pueden y deben vacunarse contra el VPH. Protege contra 9 tipos — incluyendo los que causan verrugas y los que causan cáncer.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6">
                <div className="text-3xl mb-3">💉</div>
                <h3 className="font-bold text-slate-800 mb-3">Gardasil 9 — ¿Qué protege?</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-emerald-500">✓</span>Tipos 6, 11 — previene 90% de verrugas genitales</li>
                  <li className="flex gap-2"><span className="text-emerald-500">✓</span>Tipos 16, 18 — principales cánceres relacionados</li>
                  <li className="flex gap-2"><span className="text-emerald-500">✓</span>Tipos 31, 33, 45, 52, 58 — otros tipos oncogénicos</li>
                </ul>
                <div className="mt-4 bg-emerald-50 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-emerald-700">&gt;90%</div>
                  <div className="text-xs text-emerald-600">efectividad contra tipos incluidos</div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="font-bold text-slate-800 mb-3">¿A qué edad vacunarse?</h3>
                <div className="space-y-3">
                  {[
                    { label: "EDAD IDEAL", edad: "11-12 años", desc: "Antes del inicio de vida sexual — máxima efectividad", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
                    { label: "RECOMENDADA HASTA", edad: "26 años", desc: "Altamente efectiva en este rango de edad", color: "bg-slate-50 border-slate-200 text-slate-800" },
                    { label: "PUEDE APLICARSE HASTA", edad: "45 años", desc: "Beneficio menor pero existe — consulta con tu urólogo", color: "bg-slate-50 border-slate-200 text-slate-800" },
                  ].map((item) => (
                    <div key={item.label} className={`rounded-xl border p-3 ${item.color}`}>
                      <p className="text-xs font-medium opacity-60 mb-0.5">{item.label}</p>
                      <p className="font-bold">{item.edad}</p>
                      <p className="text-xs opacity-70 mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6">
                <div className="text-3xl mb-3">❓</div>
                <h3 className="font-bold text-slate-800 mb-3">Preguntas clave sobre la vacuna</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-slate-700">¿Cuántas dosis?</p>
                    <p className="text-slate-600 mt-1">2 dosis si inicias antes de los 15 años · 3 dosis si inicias después</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">¿Funciona si ya tuve VPH?</p>
                    <p className="text-slate-600 mt-1">Sí. Protege contra los tipos que aún no has contraído. Vale la pena vacunarse.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">¿Elimina el VPH que ya tengo?</p>
                    <p className="text-slate-600 mt-1">No — protege contra nuevas exposiciones a los tipos incluidos.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mt-8 text-center">
              <a href={WA_CONFIDENCIAL} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("vph")}
                className="inline-block bg-emerald-600 text-white font-semibold px-8 py-3 rounded-2xl hover:bg-emerald-700 transition shadow-md">
                Consultar sobre vacunación VPH
              </a>
            </motion.div>
          </div>
        </section>

        {/* VPH Y PAREJA */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl font-bold mb-8">
            VPH y tu Relación de Pareja
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                q: "¿Si tengo VPH, significa que mi pareja me fue infiel?",
                a: "NO necesariamente. El VPH puede estar latente por años antes de causar síntomas. Es imposible saber cuándo ni de quién se adquirió. Tener VPH no es evidencia de infidelidad — es evidencia de contacto sexual en algún momento de la vida.",
                color: "border-indigo-200 bg-indigo-50",
                icon: "💙",
              },
              {
                q: "¿Debo decirle a mi pareja que tengo VPH?",
                a: "Sí, es importante informarle. Tu pareja debe evaluarse — en mujeres el VPH puede causar cáncer cervical. La comunicación abierta protege a ambos y permite tomar decisiones informadas sobre protección y vacunación.",
                color: "border-emerald-200 bg-emerald-50",
                icon: "💬",
              },
              {
                q: "¿Podemos tener relaciones sexuales si uno de los dos tiene VPH?",
                a: "Sí, pero con información y protección. Si hay verrugas activas, esperar hasta después del tratamiento reduce la transmisión. Tu pareja debería evaluarse y considerar la vacuna.",
                color: "border-amber-200 bg-amber-50",
                icon: "🤝",
              },
              {
                q: "¿Debo informar a parejas futuras?",
                a: "Es una decisión ética. Si tienes verrugas activas o VPH persistente, informar a la pareja le permite tomar decisiones informadas. Si el virus ya fue eliminado por tu sistema inmune, el riesgo es mínimo.",
                color: "border-slate-200 bg-slate-50",
                icon: "🔮",
              },
            ].map((item) => (
              <motion.div key={item.q} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`rounded-2xl border p-5 ${item.color}`}>
                <div className="flex gap-3 mb-3">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="font-bold text-slate-800 text-sm">{item.q}</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PREVENCIÓN */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl font-bold mb-8">
              Prevención del VPH en Hombres
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: "1", titulo: "Vacunación", desc: "La medida más efectiva. Previene hasta el 90% de infecciones por tipos cubiertos.", badge: "Más efectiva", badgeColor: "bg-emerald-100 text-emerald-700" },
                { num: "2", titulo: "Uso de condón", desc: "Reduce el riesgo aunque no lo elimina completamente. Usar en cada relación sexual.", badge: "Muy recomendado", badgeColor: "bg-blue-100 text-blue-700" },
                { num: "3", titulo: "Limitar parejas sexuales", desc: "Menor número de parejas = menor probabilidad de exposición al VPH.", badge: "Efectivo", badgeColor: "bg-indigo-100 text-indigo-700" },
                { num: "4", titulo: "Sistema inmune saludable", desc: "No fumar, dieta balanceada, ejercicio regular y manejo del estrés ayudan al cuerpo a eliminar el VPH.", badge: "Importante", badgeColor: "bg-amber-100 text-amber-700" },
                { num: "5", titulo: "Autoexamen regular", desc: "Revisión periódica de genitales para detectar verrugas o cambios tempranos. Consultar ante cualquier lesión nueva.", badge: "Detección temprana", badgeColor: "bg-slate-100 text-slate-700" },
                { num: "6", titulo: "Circuncisión", desc: "Reduce ligeramente el riesgo y facilita la higiene genital. No es preventivo absoluto, pero es un factor protector.", badge: "Factor protector", badgeColor: "bg-purple-100 text-purple-700" },
              ].map((item) => (
                <motion.div key={item.num} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">{item.num}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.badgeColor}`}>{item.badge}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{item.titulo}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VPH Y CÁNCER */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-2">VPH y Cáncer en Hombres</h2>
            <p className="text-slate-600 mb-8">Qué debes saber y cuándo estar alerta</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {[
              {
                titulo: "Cáncer de pene",
                stat: "~50% relacionado con VPH",
                prevalencia: "Raro: menos del 1% de cánceres en hombres",
                sintomas: ["Lesión que no cicatriza en el pene", "Cambio de color en piel peniana", "Bulto o engrosamiento", "Sangrado o secreción anormal"],
                nota: "Detectable tempranamente por ser lesión visible. La circuncisión reduce el riesgo.",
                headerColor: "bg-rose-50",
                borderColor: "border-rose-200",
              },
              {
                titulo: "Cáncer anal",
                stat: ">90% relacionado con VPH",
                prevalencia: "Más frecuente en hombres que tienen sexo con hombres",
                sintomas: ["Sangrado rectal", "Dolor o presión en el ano", "Cambios en hábitos intestinales", "Masa o bulto perianal"],
                nota: "Especialista: coloproctólogo. El Dr. Quiroz puede orientarte y referirte.",
                headerColor: "bg-orange-50",
                borderColor: "border-orange-200",
              },
              {
                titulo: "Cáncer de garganta (orofaringe)",
                stat: ">70% relacionado con VPH",
                prevalencia: "Aumento dramático en últimas décadas — relacionado con sexo oral",
                sintomas: ["Dolor de garganta persistente >2 semanas", "Dificultad para tragar", "Nódulo en el cuello", "Ronquera persistente"],
                nota: "Especialista: otorrinolaringólogo. El Dr. Quiroz puede orientarte y referirte.",
                headerColor: "bg-amber-50",
                borderColor: "border-amber-200",
              },
            ].map((cancer) => (
              <motion.div key={cancer.titulo} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${cancer.borderColor}`}>
                <div className={`p-4 ${cancer.headerColor}`}>
                  <h3 className="font-bold text-slate-800">{cancer.titulo}</h3>
                  <p className="text-sm font-medium text-slate-700 mt-1">{cancer.stat}</p>
                  <p className="text-xs text-slate-500 mt-1">{cancer.prevalencia}</p>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-slate-600 mb-2">Señales de alerta:</p>
                  <ul className="space-y-1 mb-3">
                    {cancer.sintomas.map((s) => (
                      <li key={s} className="text-xs text-slate-700 flex gap-1.5">
                        <span className="text-rose-400 shrink-0">▸</span>{s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 italic">{cancer.nota}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-slate-100 border border-slate-200 rounded-2xl p-5">
            <p className="font-semibold text-slate-800 mb-3">✅ El VPH NO causa estos cánceres:</p>
            <div className="flex flex-wrap gap-2">
              {["Cáncer de próstata", "Cáncer testicular", "Cáncer de vejiga", "Cáncer de riñón"].map((c) => (
                <span key={c} className="bg-white border border-slate-300 text-slate-700 text-sm px-3 py-1 rounded-full">{c}</span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl font-bold mb-8">
              Preguntas Frecuentes sobre VPH en Hombres
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ DR. QUIROZ */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center">
            Por qué elegir al Dr. Quiroz para Evaluación de VPH en León
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🔒", titulo: "Consulta confidencial", desc: "Ambiente profesional, sin juicios y con total discreción." },
              { icon: "🩺", titulo: "Diagnóstico experto", desc: "Evaluación clínica completa y orientación sobre estudios específicos." },
              { icon: "💉", titulo: "Tratamiento de verrugas", desc: "Múltiples técnicas: crioterapia, electrofulguración, láser CO₂." },
              { icon: "🛡️", titulo: "Asesoría sobre vacunación", desc: "Orientación personalizada sobre Gardasil 9 según tu situación." },
              { icon: "🔍", titulo: "Evaluación de riesgo", desc: "Identificación de factores de riesgo y plan de seguimiento." },
              { icon: "👥", titulo: "Orientación para pareja", desc: "Guía sobre comunicación, evaluación y protección de la pareja." },
              { icon: "📍", titulo: "León, Guanajuato", desc: "Consultorios en Hospital Ángeles León y Christus Muguerza Altagracia." },
              { icon: "⚡", titulo: "Atención oportuna", desc: "Diagnóstico y tratamiento sin demoras innecesarias." },
            ].map((item) => (
              <motion.div key={item.titulo} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">{item.titulo}</h3>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-800 to-purple-700 py-16 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl px-4"
          >
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-3xl font-bold mb-3">El VPH en Hombres es Común y Manejable</h2>
            <p className="text-indigo-100 mb-2">
              Diagnóstico y tratamiento profesional disponible en León, Guanajuato.
            </p>
            <p className="text-indigo-200 text-sm mb-8">
              Consulta confidencial — tu salud y privacidad son prioridad
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <a href={WA_EVALUACION} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("vph")}
                className="bg-white text-indigo-900 font-semibold px-8 py-3 rounded-2xl hover:bg-indigo-50 transition shadow-lg">
                Agenda evaluación de VPH
              </a>
              <a href={WA_CONFIDENCIAL} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("vph")}
                className="bg-indigo-700 border border-indigo-500 text-white font-semibold px-8 py-3 rounded-2xl hover:bg-indigo-600 transition">
                💬 WhatsApp confidencial
              </a>
            </div>
            <div className="text-sm text-indigo-300 flex flex-wrap justify-center gap-3">
              <Link href="/" className="hover:text-white transition">← Inicio</Link>
              <span>·</span>
              <Link href="/verrugas-genitales" className="hover:text-white transition">Verrugas genitales</Link>
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
