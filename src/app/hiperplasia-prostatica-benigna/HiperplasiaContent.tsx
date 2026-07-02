"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { trackWhatsApp } from "@/lib/analytics";

const WHATSAPP_NUMBER = "5214776330492";
const WA_MSG = "Hola Dr. Quiroz, quiero agendar una valoración por próstata crecida (HPB).";

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
        highlight ? "bg-teal-50 border-teal-300" : "bg-white border-slate-200"
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
    id: "rtup",
    name: "Resección Transuretral (RTUP)",
    tag: "Estándar de oro",
    tagColor: "bg-indigo-100 text-indigo-700",
    badge: null,
    prostate: "Próstatas medianas (30–80 g)",
    ejaculation: "Eyaculación retrógrada frecuente",
    ejaculationColor: "text-amber-700",
    recovery: "1–2 semanas",
    bleeding: "Bajo-moderado",
    description:
      "Procedimiento quirúrgico endoscópico en el que se reseca el tejido prostático que obstruye el flujo urinario utilizando un resectoscopio. Es el tratamiento quirúrgico más utilizado históricamente con eficacia comprobada.",
    pros: [
      "Efectividad a largo plazo comprobada",
      "Sin cicatrices externas",
      "Hospitalización corta (1–2 días)",
      "Disponible en múltiples centros",
    ],
    cons: [
      "Riesgo de eyaculación retrógrada (~75%)",
      "Sangrado mayor que con láser",
      "Requiere catéter postoperatorio",
    ],
  },
  {
    id: "holep",
    name: "Enucleación con Láser de Holmio (HoLEP)",
    tag: "Ideal para próstatas grandes",
    tagColor: "bg-teal-100 text-teal-700",
    badge: "Tecnología avanzada",
    prostate: "Cualquier tamaño, especialmente >80 g",
    ejaculation: "Eyaculación retrógrada común",
    ejaculationColor: "text-amber-700",
    recovery: "2–3 semanas",
    bleeding: "Muy bajo",
    description:
      "El láser de Holmio permite enuclear (separar) el tejido prostático de forma completa con mínimo sangrado. Es la mejor alternativa a la cirugía abierta en próstatas muy grandes y puede realizarse en próstatas de cualquier tamaño.",
    pros: [
      "Funciona en próstatas de cualquier tamaño",
      "Mínimo sangrado — seguro para anticoagulados",
      "Recuperación más rápida que cirugía abierta",
      "Bajas tasas de recurrencia a largo plazo",
      "Sin cicatrices externas",
    ],
    cons: [
      "Curva de aprendizaje del cirujano",
      "Eyaculación retrógrada común",
      "No disponible en todos los centros",
    ],
  },
  {
    id: "green-light",
    name: "Vaporización con Láser Verde (GreenLight / KTP)",
    tag: "Mínimo sangrado",
    tagColor: "bg-green-100 text-green-700",
    badge: null,
    prostate: "Próstatas pequeñas a medianas (<80 g)",
    ejaculation: "Eyaculación retrógrada posible",
    ejaculationColor: "text-amber-700",
    recovery: "Muy rápida (días)",
    bleeding: "Mínimo",
    description:
      "El láser verde vaporiza el tejido prostático con gran precisión y mínima pérdida de sangre. Ideal para pacientes anticoagulados o con alto riesgo quirúrgico, y para quienes buscan la recuperación más rápida.",
    pros: [
      "Mínimo sangrado — excelente para anticoagulados",
      "Recuperación muy rápida",
      "Catéter por corto tiempo (a veces solo horas)",
      "Sin cicatrices externas",
    ],
    cons: [
      "Menos tejido disponible para análisis",
      "Mayor tasa de retreatamiento que HoLEP en próstatas grandes",
      "Eyaculación retrógrada posible",
    ],
  },
  {
    id: "rezum",
    name: "Rezum (Ablación por Vapor de Agua)",
    tag: "Preserva la eyaculación",
    tagColor: "bg-purple-100 text-purple-700",
    badge: "Preserva eyaculación",
    prostate: "Próstatas pequeñas a medianas (30–80 g)",
    ejaculation: "Preserva eyaculación anterógrada",
    ejaculationColor: "text-green-700",
    recovery: "Días (retorno rápido a actividades)",
    bleeding: "Mínimo",
    description:
      "Procedimiento mínimamente invasivo que utiliza vapor de agua para destruir el tejido prostático en exceso. Diseñado para hombres que desean preservar la eyaculación anterógrada. Los resultados mejoran gradualmente en semanas.",
    pros: [
      "Preserva la eyaculación en la mayoría de los casos",
      "Procedimiento ambulatorio o corta estancia",
      "Sin cicatrices",
      "Mínimo sangrado",
    ],
    cons: [
      "Mejoría gradual (semanas a meses)",
      "Candidatos limitados a próstatas medianas",
      "Puede requerir catéter por varios días",
      "Menos datos de seguimiento a muy largo plazo",
    ],
  },
  {
    id: "robotica",
    name: "Prostatectomía Simple Robótica o Laparoscópica",
    tag: "Para próstatas muy grandes",
    tagColor: "bg-orange-100 text-orange-700",
    badge: null,
    prostate: "Próstatas muy grandes (>100 g)",
    ejaculation: "Eyaculación retrógrada o ausente",
    ejaculationColor: "text-amber-700",
    recovery: "3–4 semanas",
    bleeding: "Bajo (menor que cirugía abierta)",
    description:
      "Extirpación del adenoma prostático mediante cirugía mínimamente invasiva robótica o laparoscópica. Es la alternativa moderna a la cirugía abierta para próstatas de más de 100 gramos, con menor sangrado y hospitalización más corta.",
    pros: [
      "Ideal para próstatas muy grandes",
      "Menor sangrado que cirugía abierta",
      "Recuperación más rápida que cirugía abierta",
      "Visión magnificada y mayor precisión",
    ],
    cons: [
      "Requiere cirujano con entrenamiento robótico",
      "Mayor tiempo quirúrgico",
      "Eyaculación retrógrada o ausente",
    ],
  },
  {
    id: "abierta",
    name: "Adenomectomía Abierta",
    tag: "Próstatas gigantes",
    tagColor: "bg-slate-100 text-slate-700",
    badge: null,
    prostate: "Próstatas muy grandes (>100 g) cuando otras no disponibles",
    ejaculation: "Eyaculación retrógrada o ausente",
    ejaculationColor: "text-amber-700",
    recovery: "4–6 semanas",
    bleeding: "Mayor",
    description:
      "Cirugía convencional con incisión abdominal para extraer el adenoma prostático. Sigue siendo una opción válida en próstatas gigantes cuando las opciones mínimamente invasivas no están disponibles o son impracticables.",
    pros: [
      "Eficaz en próstatas muy grandes",
      "Amplia disponibilidad",
      "Larga trayectoria de resultados",
    ],
    cons: [
      "Mayor sangrado y transfusiones",
      "Hospitalización prolongada (5–7 días)",
      "Recuperación más lenta",
      "Cicatriz abdominal",
    ],
  },
];

export default function HiperplasiaContent() {
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
              <span className="text-editorial/90">Hiperplasia Prostática Benigna</span>
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
              Urología · León, Guanajuato
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
              Hiperplasia Prostática Benigna (HPB) en León, Guanajuato: Diagnóstico y Tratamiento Personalizado
            </h1>
            <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-4">
              Tratamiento individualizado adaptado a tu caso — desde láser HoLEP hasta opciones que preservan la eyaculación.
            </p>
            <p className="text-quirurgico font-sans font-medium italic mb-10">
              &ldquo;Cada paciente es único — el tratamiento se adapta a ti.&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("hpb")}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-acero text-editorial px-8 py-4 rounded-lg font-bold font-sans hover:bg-acero/90 transition-colors shadow-lg cursor-pointer"
                >
                  Agenda tu valoración
                </motion.div>
              </a>
            </div>
          </motion.div>
        </section>

        {/* ¿QUÉ ES LA HPB? */}
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
                  ¿Qué es la Hiperplasia Prostática Benigna?
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  La HPB, también conocida como <strong>crecimiento prostático benigno</strong> o
                  próstata crecida, es el agrandamiento no canceroso de la glándula prostática. Con
                  el paso de los años, la próstata crece de forma natural y puede comprimir la
                  uretra, dificultando el paso de la orina.
                </p>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Este crecimiento se debe a cambios hormonales propios del envejecimiento,
                  especialmente al incremento relativo de estrógenos y la acción de la
                  dihidrotestosterona (DHT) sobre el tejido prostático.
                </p>
                <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-5">
                  <h3 className="font-bold text-green-800 mb-2">
                    HPB no es cáncer de próstata
                  </h3>
                  <p className="text-sm text-green-900 leading-relaxed">
                    Son enfermedades completamente distintas. La HPB es benigna y{" "}
                    <strong>no se convierte en cáncer</strong> ni aumenta el riesgo de
                    desarrollarlo. Sin embargo, durante la valoración siempre se descarta el
                    cáncer de próstata mediante PSA y examen físico.
                  </p>
                </div>
                <Image
                  src="/images/cancer-prostata/anatomia-funcion-prostata.webp"
                  alt="Infografía anatómica: la próstata, su ubicación debajo de la vejiga rodeando la uretra, su estructura interna por zonas y su función en la producción del líquido seminal"
                  width={1369}
                  height={1149}
                  className="mt-8 rounded-2xl border border-slate-200 shadow-sm w-full h-auto"
                />
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
                  ¿Qué tan común es?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: "50%", label: "de los hombres a los 50 años", color: "bg-teal-50 border-teal-200 text-teal-800" },
                    { stat: "70%", label: "de los hombres a los 70 años", color: "bg-indigo-50 border-indigo-200 text-indigo-800" },
                    { stat: "80%", label: "de los hombres a los 80 años", color: "bg-amber-50 border-amber-200 text-amber-800" },
                    { stat: "45+", label: "años: edad en que suelen iniciar síntomas", color: "bg-slate-100 border-slate-200 text-slate-800" },
                  ].map((item) => (
                    <div
                      key={item.stat}
                      className={`rounded-2xl border p-4 text-center ${item.color}`}
                    >
                      <p className="text-3xl font-bold">{item.stat}</p>
                      <p className="text-xs mt-1 leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  La HPB es una de las condiciones más frecuentes en hombres maduros. Tener
                  síntomas urinarios no significa que tengas cáncer — pero sí es razón para
                  consultar con un urólogo.
                </p>
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
              Síntomas de la Próstata Crecida
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              Los síntomas de la HPB se agrupan en dos categorías: los que se producen durante
              la micción (obstructivos) y los que se producen por irritación de la vejiga
              (irritativos).
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white">
                <h3 className="font-semibold text-slate-900 mb-4 text-lg">
                  Síntomas obstructivos
                </h3>
                <ul className="space-y-3">
                  {[
                    "Dificultad para iniciar la micción (esperar para que salga el chorro)",
                    "Chorro urinario débil o intermitente",
                    "Necesidad de hacer esfuerzo para orinar",
                    "Sensación de vaciado incompleto de la vejiga",
                    "Goteo al terminar de orinar",
                    "Chorro en dos tiempos",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-teal-100 flex-shrink-0 flex items-center justify-center text-teal-700 text-xs font-bold">
                        ✓
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="bg-white">
                <h3 className="font-semibold text-slate-900 mb-4 text-lg">
                  Síntomas irritativos
                </h3>
                <ul className="space-y-3">
                  {[
                    "Necesidad de orinar frecuentemente durante el día",
                    "Levantarse a orinar varias veces en la noche (nicturia)",
                    "Urgencia urinaria: ganas súbitas e imperiosas de ir al baño",
                    "Incontinencia de urgencia (pérdida de orina antes de llegar al baño)",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-700 text-xs font-bold">
                        !
                      </span>
                      {s}
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
              transition={{ duration: 0.5 }}
              className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-6 shadow-sm"
            >
              <p className="text-amber-900 font-medium">
                Si tienes estos síntomas, es momento de una valoración urológica. No esperes
                a que los síntomas empeoren — la HPB no tratada puede provocar infecciones
                urinarias repetidas, retención aguda de orina o daño renal.
              </p>
              <div className="mt-4">
                <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("hpb")}>
                  <Button className="bg-amber-600 text-white hover:bg-amber-700 text-sm">
                    Agenda tu valoración
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
              Diagnóstico Integral
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              Una valoración completa es imprescindible para elegir el tratamiento más adecuado
              y descartar otras causas de síntomas urinarios, incluyendo el cáncer de próstata.
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  step: "01",
                  title: "Historia clínica y cuestionario IPSS",
                  desc: "El cuestionario Internacional de Síntomas Prostáticos (IPSS) cuantifica la severidad de los síntomas y su impacto en la calidad de vida, orientando la decisión de tratamiento.",
                },
                {
                  step: "02",
                  title: "Examen físico y tacto rectal",
                  desc: "Permite estimar el tamaño y consistencia de la próstata, detectar nódulos sugestivos de cáncer y evaluar el tono del esfínter anal.",
                },
                {
                  step: "03",
                  title: "PSA (Antígeno Prostático Específico)",
                  desc: "Análisis de sangre fundamental para descartar cáncer de próstata. Un PSA elevado puede deberse a HPB, prostatitis o cáncer, y orienta los estudios adicionales.",
                },
                {
                  step: "04",
                  title: "Ultrasonido transabdominal",
                  desc: "Permite medir con precisión el volumen de la próstata, evaluar la vejiga y detectar orina residual post-miccional, información clave para elegir el tratamiento quirúrgico.",
                },
                {
                  step: "05",
                  title: "Uroflujometría",
                  desc: "Mide la velocidad y patrón del flujo urinario. Un flujo máximo menor a 10 mL/s habitualmente indica obstrucción significativa que puede requerir tratamiento.",
                },
                {
                  step: "06",
                  title: "Estudios complementarios",
                  desc: "Examen general de orina para descartar infección, creatinina sérica para evaluar función renal, y en casos seleccionados, cistoscopia o urodinámica.",
                },
              ].map((d) => (
                <Card key={d.step}>
                  <div className="text-3xl font-bold text-teal-200 mb-2">{d.step}</div>
                  <h3 className="font-semibold text-slate-900">{d.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{d.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FACTORES DE DECISIÓN */}
        <section className="bg-petroleo text-editorial py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Opciones de Tratamiento — Enfoque Personalizado
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-300 mb-3 max-w-2xl text-lg"
            >
              No existe un tratamiento único para todos. Cada paciente requiere una valoración
              individual.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-slate-300 mb-10 max-w-2xl"
            >
              La elección del tratamiento depende de múltiples factores que se evalúan en
              conjunto durante la consulta:
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "📏",
                  title: "Tamaño de la próstata",
                  desc: "El volumen prostático (en gramos) determina qué técnicas son técnicamente posibles y cuál ofrece los mejores resultados.",
                },
                {
                  icon: "📊",
                  title: "Severidad de los síntomas",
                  desc: "El puntaje IPSS y la medición del flujo urinario orientan cuándo es necesario pasar del tratamiento médico al quirúrgico.",
                },
                {
                  icon: "❤️",
                  title: "Calidad de vida",
                  desc: "El impacto de los síntomas en el sueño, trabajo y vida cotidiana es tan importante como los números del ultrasonido.",
                },
                {
                  icon: "👶",
                  title: "Preservación de la eyaculación",
                  desc: "Para hombres que priorizan mantener la eyaculación anterógrada existen opciones específicas como Rezum.",
                },
                {
                  icon: "🏥",
                  title: "Condiciones médicas asociadas",
                  desc: "El uso de anticoagulantes, enfermedades cardíacas o renales influyen en qué procedimiento es más seguro.",
                },
                {
                  icon: "🤝",
                  title: "Preferencias del paciente",
                  desc: "La decisión final siempre se toma en conjunto. El Dr. Quiroz explica ventajas y desventajas de cada opción para que puedas elegir informado.",
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
          </div>
        </section>

        {/* TRATAMIENTOS DISPONIBLES */}
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
              El Dr. Quiroz ofrece el espectro completo de opciones para HPB, desde la
              observación vigilante hasta las técnicas quirúrgicas más avanzadas.
            </motion.p>

            {/* OBSERVACIÓN Y TRATAMIENTO MÉDICO */}
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <Card className="bg-slate-50">
                <div className="inline-block bg-slate-200 text-slate-700 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                  Para síntomas leves
                </div>
                <h3 className="text-lg font-bold text-slate-900">Observación Vigilante</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Cuando los síntomas son leves y no afectan significativamente la calidad de
                  vida, la vigilancia periódica —sin tratamiento inmediato— es una opción
                  válida. Incluye controles regulares de síntomas, PSA y ultrasonido para
                  detectar progresión.
                </p>
                <p className="text-sm text-slate-500 mt-3 italic">
                  Ideal para: IPSS leve (&lt;8), flujo urinario aceptable, sin complicaciones.
                </p>
              </Card>

              <Card className="bg-slate-50">
                <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                  Primera línea
                </div>
                <h3 className="text-lg font-bold text-slate-900">Tratamiento Médico</h3>
                <div className="space-y-3 mt-2">
                  <div>
                    <p className="text-sm font-medium text-slate-800">Alfabloqueadores</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Relajan la musculatura del cuello vesical y la próstata, mejorando el
                      flujo urinario en días. Ejemplos: tamsulosina, silodosina.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      Inhibidores de 5-alfa reductasa
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Reducen el tamaño de la próstata a lo largo de meses al bloquear la
                      producción de DHT. Ejemplos: finasteride, dutasteride.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">Terapia combinada</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Combinación de ambos tipos para síntomas moderados-severos o próstatas
                      de tamaño significativo.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-3 italic">
                  Cuándo no es suficiente: retención urinaria, infecciones repetidas, daño
                  renal o síntomas que afectan gravemente la calidad de vida.
                </p>
              </Card>
            </div>

            {/* TRATAMIENTOS QUIRÚRGICOS */}
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-bold text-slate-900 mb-2 mt-8"
            >
              Tratamientos Quirúrgicos Mínimamente Invasivos
            </motion.h3>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-6 max-w-2xl"
            >
              Todos sin cicatrices externas — se realizan a través de la uretra o con
              incisiones mínimas. Haz clic en cada opción para ver los detalles.
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
                      isOpen ? "border-teal-400 shadow-md" : "border-slate-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenTreatment(isOpen ? null : t.id)}
                      className="w-full text-left p-5 bg-white hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-start gap-3 flex-wrap">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span
                                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${t.tagColor}`}
                              >
                                {t.tag}
                              </span>
                              {t.badge && (
                                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-600 text-white">
                                  {t.badge}
                                </span>
                              )}
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">{t.name}</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                              <span className="text-xs text-slate-500">
                                Tamaño: {t.prostate}
                              </span>
                              <span className={`text-xs font-medium ${t.ejaculationColor}`}>
                                {t.ejaculation}
                              </span>
                              <span className="text-xs text-slate-500">
                                Recuperación: {t.recovery}
                              </span>
                            </div>
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
                            <h4 className="text-sm font-semibold text-green-700 mb-2">
                              Ventajas
                            </h4>
                            <ul className="space-y-1">
                              {t.pros.map((p) => (
                                <li
                                  key={p}
                                  className="flex items-start gap-2 text-xs text-slate-700"
                                >
                                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-amber-700 mb-2">
                              Consideraciones
                            </h4>
                            <ul className="space-y-1">
                              {t.cons.map((c) => (
                                <li
                                  key={c}
                                  className="flex items-start gap-2 text-xs text-slate-700"
                                >
                                  <span className="text-amber-500 font-bold mt-0.5">→</span>
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-5">
                          <a
                            href={waLink(
                              `Hola Dr. Quiroz, quiero información sobre el tratamiento ${t.name} para HPB.`
                            )}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button className="bg-teal-600 text-white hover:bg-teal-700 text-sm">
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
        </section>

        {/* TABLA COMPARATIVA */}
        <section id="comparativa" className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              ¿Cómo Elegir el Tratamiento Correcto?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              &ldquo;La decisión se toma en conjunto — tú y yo.&rdquo; Esta tabla es una guía general;
              la valoración individual siempre es necesaria.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm"
            >
              <table className="w-full text-sm">
                <thead className="bg-teal-700 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Tratamiento</th>
                    <th className="text-left px-4 py-3 font-semibold">Tamaño próstata</th>
                    <th className="text-left px-4 py-3 font-semibold">Eyaculación</th>
                    <th className="text-left px-4 py-3 font-semibold">Recuperación</th>
                    <th className="text-left px-4 py-3 font-semibold">Sangrado</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Observación vigilante",
                      size: "Cualquier tamaño",
                      ejac: "Sin cambios",
                      ejacColor: "text-green-700",
                      rec: "N/A",
                      blood: "N/A",
                      bg: "bg-white",
                    },
                    {
                      name: "Medicamentos",
                      size: "Cualquier tamaño",
                      ejac: "Sin cambios o leve alteración",
                      ejacColor: "text-green-700",
                      rec: "Efecto en semanas",
                      blood: "N/A",
                      bg: "bg-slate-50",
                    },
                    {
                      name: "RTUP",
                      size: "Mediana (30–80 g)",
                      ejac: "Retrógrada frecuente",
                      ejacColor: "text-amber-700",
                      rec: "1–2 semanas",
                      blood: "Bajo-moderado",
                      bg: "bg-white",
                    },
                    {
                      name: "HoLEP (láser Holmio)",
                      size: "Cualquier tamaño (>80 g ideal)",
                      ejac: "Retrógrada común",
                      ejacColor: "text-amber-700",
                      rec: "2–3 semanas",
                      blood: "Muy bajo",
                      bg: "bg-slate-50",
                    },
                    {
                      name: "Láser verde (GreenLight)",
                      size: "Pequeña a mediana (<80 g)",
                      ejac: "Retrógrada posible",
                      ejacColor: "text-amber-700",
                      rec: "Días",
                      blood: "Mínimo",
                      bg: "bg-white",
                    },
                    {
                      name: "Rezum",
                      size: "Pequeña a mediana (30–80 g)",
                      ejac: "Preservada ✓",
                      ejacColor: "text-green-700 font-semibold",
                      rec: "Días",
                      blood: "Mínimo",
                      bg: "bg-purple-50",
                    },
                    {
                      name: "Prostatectomía robótica simple",
                      size: "Muy grande (>100 g)",
                      ejac: "Retrógrada/ausente",
                      ejacColor: "text-amber-700",
                      rec: "3–4 semanas",
                      blood: "Bajo",
                      bg: "bg-white",
                    },
                    {
                      name: "Cirugía abierta",
                      size: "Muy grande (>100 g)",
                      ejac: "Retrógrada/ausente",
                      ejacColor: "text-amber-700",
                      rec: "4–6 semanas",
                      blood: "Mayor",
                      bg: "bg-slate-50",
                    },
                  ].map((row) => (
                    <tr key={row.name} className={row.bg}>
                      <td className="px-4 py-3 font-medium text-slate-900">{row.name}</td>
                      <td className="px-4 py-3 text-slate-600">{row.size}</td>
                      <td className={`px-4 py-3 ${row.ejacColor}`}>{row.ejac}</td>
                      <td className="px-4 py-3 text-slate-600">{row.rec}</td>
                      <td className="px-4 py-3 text-slate-600">{row.blood}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 rounded-2xl bg-teal-50 border border-teal-200 p-5"
            >
              <p className="text-teal-900 font-medium text-sm">
                La clave está en una valoración completa para elegir la opción ideal para tu
                caso particular. No todos los pacientes necesitan el mismo tratamiento.
              </p>
              <div className="mt-4">
                <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("hpb")}>
                  <Button className="bg-teal-600 text-white hover:bg-teal-700 text-sm">
                    Agenda tu valoración personalizada
                  </Button>
                </a>
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
                  Por Qué Elegir al Dr. Quiroz para HPB
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  El <strong>Dr. Alejandro Quiroz Compeán</strong> es urólogo certificado con
                  formación de alta especialidad en Urología Oncológica y Cirugía Robótica.
                  Ofrece a sus pacientes con HPB algo poco común: <strong>dominio de todas
                  las técnicas quirúrgicas disponibles</strong>, lo que permite elegir la
                  mejor opción según cada caso sin sesgos.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Experiencia en todas las técnicas: RTUP, HoLEP, láser verde, Rezum, cirugía robótica",
                    "Enfoque genuinamente personalizado según tu próstata, síntomas y prioridades",
                    "Explicación clara y honesta de ventajas y desventajas de cada opción",
                    "Tecnología avanzada disponible en León — sin necesidad de viajar",
                    "Procedimientos sin cicatriz (endoscópicos o mínimamente invasivos)",
                    "Acompañamiento humano en la toma de decisión",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="text-teal-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("hpb")}>
                    <Button className="bg-teal-600 text-white hover:bg-teal-700">
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
                    <strong>Especialidad en Urología:</strong> INCMNSZ — UNAM (Cédula
                    12465195)
                  </li>
                  <li>
                    <strong>Alta Especialidad en Urología Oncológica:</strong> Instituto
                    Nacional de Cancerología (INCan), CDMX
                  </li>
                  <li>
                    <strong>Posgrado en Cirugía Robótica:</strong> Hospital Israelita Albert
                    Einstein, São Paulo, Brasil
                  </li>
                  <li>
                    <strong>Certificado:</strong> Consejo Nacional Mexicano de Urología
                    (CONAMEU)
                  </li>
                  <li>
                    <strong>Consultorios:</strong> Hospital Ángeles León (Cons. 615, Torre
                    II) · Hospital Christus Muguerza Altagracia
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
              Preguntas Frecuentes sobre HPB
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              <FAQItem q="¿La HPB se convierte en cáncer de próstata?" highlight>
                <strong>No.</strong> La hiperplasia prostática benigna y el cáncer de próstata
                son enfermedades completamente distintas. La HPB no aumenta el riesgo de
                cáncer ni se transforma en él. Sin embargo, ambas pueden coexistir, por eso
                siempre se descarta el cáncer con PSA y tacto rectal en la valoración.
              </FAQItem>

              <FAQItem q="¿Puedo evitar la cirugía de próstata?">
                En muchos casos sí. Los{" "}
                <strong>síntomas leves o moderados se controlan con medicamentos</strong>{" "}
                (alfabloqueadores e inhibidores de 5-alfa reductasa). La cirugía se recomienda
                cuando los síntomas afectan significativamente la calidad de vida, hay
                complicaciones como retención urinaria o infecciones repetidas, o cuando el
                paciente prefiere una solución definitiva.
              </FAQItem>

              <FAQItem q="¿Voy a quedar incontinente después de la cirugía?">
                La incontinencia permanente es{" "}
                <strong>muy rara en la cirugía de HPB</strong>. A diferencia de la cirugía
                por cáncer, los procedimientos para HPB (RTUP, HoLEP, láser verde) no afectan
                el esfínter urinario externo, por lo que la continencia se preserva en la
                gran mayoría de los pacientes.
              </FAQItem>

              <FAQItem q="¿Qué pasa con mi vida sexual después del tratamiento?">
                Depende del tratamiento. La RTUP y los láseres pueden causar{" "}
                <strong>eyaculación retrógrada</strong> (el semen va hacia la vejiga, no hacia
                fuera), lo que no afecta el placer ni la erección pero sí la fertilidad.
                Existen procedimientos como <strong>Rezum</strong> diseñados para preservar
                la eyaculación anterógrada. El Dr. Quiroz discute todas estas opciones con
                cada paciente.
              </FAQItem>

              <FAQItem q="¿Cuánto tiempo dura la recuperación?">
                Varía según el procedimiento:{" "}
                <strong>láser verde y Rezum</strong> permiten retomar actividades en días.{" "}
                <strong>RTUP</strong>: 1–2 días de hospitalización y 1–2 semanas de
                recuperación. <strong>HoLEP</strong>: 1–3 días de hospitalización y 2–3
                semanas. La{" "}
                <strong>cirugía abierta</strong> tiene la recuperación más larga (3–6
                semanas).
              </FAQItem>

              <FAQItem q="¿Los síntomas pueden volver después de la cirugía?">
                Los procedimientos como <strong>HoLEP y RTUP</strong> tienen excelentes
                resultados a largo plazo con bajas tasas de recurrencia (menos del 5–10% a 10
                años). La próstata puede seguir creciendo con el tiempo, pero la mejoría es
                duradera. Los procedimientos más conservadores pueden tener mayor tasa de
                retreatamiento.
              </FAQItem>

              <FAQItem q="¿Cuál es la mejor cirugía para próstata grande?">
                Para próstatas muy grandes (más de 80–100 g), el{" "}
                <strong>HoLEP (láser de Holmio)</strong> o la{" "}
                <strong>prostatectomía simple robótica</strong> son las mejores opciones. El
                HoLEP puede tratar próstatas de cualquier tamaño con mínimo sangrado y
                recuperación más rápida que la cirugía abierta. La elección depende también
                de la experiencia del cirujano y los recursos disponibles.
              </FAQItem>

              <FAQItem q="¿Existe tratamiento que preserve la eyaculación?" highlight>
                Sí. Procedimientos como <strong>Rezum</strong> (ablación por vapor de agua)
                están diseñados para preservar la eyaculación anterógrada. Son especialmente
                indicados para hombres que priorizan mantener esta función, generalmente con
                próstatas pequeñas a medianas. El Dr. Quiroz evalúa cada caso para determinar
                si usted es candidato.
              </FAQItem>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          id="contacto"
          className="bg-gradient-to-br from-teal-800 to-indigo-800 text-white py-16"
        >
          <div className="mx-auto max-w-3xl px-4 text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              ¿Tienes síntomas urinarios o próstata crecida?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-lg text-slate-200"
            >
              El primer paso es una valoración completa para elegir el mejor tratamiento para
              ti. Agenda tu consulta con el Dr. Quiroz en León, Guanajuato.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-2 text-teal-300 font-medium italic"
            >
              &ldquo;No todos los pacientes necesitan el mismo tratamiento — la clave está en tu
              valoración individual.&rdquo;
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("hpb")}>
                <Button className="bg-white text-indigo-900 hover:bg-slate-100 text-base px-8 py-3">
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
