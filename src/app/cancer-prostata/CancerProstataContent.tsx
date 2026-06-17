"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackWhatsApp } from "@/lib/analytics";

const WHATSAPP_NUMBER = "5214776330492";
const WA_MSG = "Hola Dr. Quiroz, quiero agendar una consulta por cáncer de próstata.";

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

export default function CancerProstataContent() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <main>
        {/* BREADCRUMB */}
        <div className="mx-auto max-w-6xl px-4 pt-4 pb-2">
          <nav className="text-sm text-slate-500" aria-label="breadcrumb">
            <Link href="/" className="hover:text-teal-600 transition">
              Inicio
            </Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">Cáncer de Próstata</span>
          </nav>
        </div>

        {/* HERO */}
        <section className="relative text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-700 to-teal-600" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-6xl px-4 py-20"
          >
            <div className="max-w-3xl">
              <p className="text-teal-300 font-medium text-sm uppercase tracking-widest mb-3">
                Urología Oncológica · León, Guanajuato
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Cáncer de Próstata: Diagnóstico y Tratamiento Especializado en León
              </h1>
              <p className="mt-5 text-lg text-slate-200 leading-relaxed">
                Detección temprana y tratamiento de precisión. El Dr. Alejandro Quiroz Compeán,
                urólogo oncólogo certificado y cirujano robótico formado en el{" "}
                <strong className="text-white">INCan</strong> y{" "}
                <strong className="text-white">Hospital Albert Einstein (Brasil)</strong>, ofrece
                atención integral en León.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("cancer-prostata")}>
                  <Button className="bg-teal-500 text-white hover:bg-teal-400">
                    Agendar consulta por WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* DATOS CLAVE */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold text-slate-900">
                ¿Qué es el cáncer de próstata?
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed max-w-3xl">
                El cáncer de próstata es el tumor maligno{" "}
                <strong>más frecuente en hombres mexicanos</strong> —después del cáncer de piel— y
                la segunda causa de muerte por cáncer en varones. Se origina en las células de la
                glándula prostática y en sus etapas tempranas generalmente{" "}
                <strong>no produce síntomas</strong>, por eso la detección oportuna mediante PSA
                es fundamental.
              </p>
              <p className="mt-3 text-slate-700 leading-relaxed max-w-3xl">
                La buena noticia: cuando se detecta en etapa localizada, la tasa de supervivencia
                a 5 años <strong>supera el 98%</strong>. El diagnóstico a tiempo y un tratamiento
                especializado hacen la diferencia.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  stat: "1 de cada 8",
                  desc: "hombres desarrollará cáncer de próstata en su vida",
                  color: "border-indigo-300 bg-indigo-50",
                },
                {
                  stat: ">98%",
                  desc: "tasa de supervivencia a 5 años en enfermedad localizada",
                  color: "border-teal-300 bg-teal-50",
                },
                {
                  stat: "~95%",
                  desc: "de los casos en etapa inicial no presentan síntomas",
                  color: "border-amber-300 bg-amber-50",
                },
              ].map((item) => (
                <motion.div
                  key={item.stat}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-2xl border p-6 text-center shadow-sm ${item.color}`}
                >
                  <p className="text-4xl font-bold text-indigo-800">{item.stat}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FACTORES DE RIESGO */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8"
            >
              Factores de riesgo
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Edad mayor de 50 años",
                  desc: "El riesgo aumenta significativamente a partir de los 50 años. Con antecedentes familiares, la vigilancia inicia desde los 40-45.",
                },
                {
                  title: "Antecedentes familiares",
                  desc: "Tener un padre, hermano o hijo con cáncer de próstata duplica el riesgo. El riesgo es mayor si el familiar fue diagnosticado antes de los 65 años.",
                },
                {
                  title: "Predisposición genética",
                  desc: "Mutaciones en genes BRCA1/BRCA2 y Lynch aumentan el riesgo. También se asocian con formas más agresivas de la enfermedad.",
                },
                {
                  title: "Dieta y obesidad",
                  desc: "Una dieta alta en grasas animales y la obesidad se asocian con mayor riesgo. El sedentarismo y los hábitos poco saludables también influyen.",
                },
              ].map((r) => (
                <Card key={r.title}>
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mb-3">
                    <span className="text-red-600 text-lg font-bold">!</span>
                  </div>
                  <h3 className="font-semibold text-slate-900">{r.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{r.desc}</p>
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
              className="text-3xl font-bold mb-8"
            >
              Síntomas
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-slate-600 text-sm mb-5">
                  En etapas tempranas el cáncer de próstata generalmente{" "}
                  <strong>no produce síntomas</strong>. Cuando aparecen, pueden incluir:
                </p>
                <ul className="space-y-3">
                  {[
                    "Flujo urinario débil o interrumpido",
                    "Dificultad para iniciar o detener la orina",
                    "Necesidad frecuente de orinar, especialmente de noche (nicturia)",
                    "Sensación de que la vejiga no se vacía completamente",
                    "Sangre en la orina (hematuria) o en el semen (hematospermia)",
                    "Dolor o ardor al orinar o eyacular",
                    "Disfunción eréctil de inicio reciente",
                    "Dolor en cadera, espalda o pelvis (puede indicar enfermedad avanzada)",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-700 text-xs font-bold">
                        ✓
                      </span>
                      {s}
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
                className="rounded-2xl bg-amber-50 border border-amber-200 p-6 shadow-sm"
              >
                <h3 className="font-bold text-amber-800 text-lg mb-3">
                  ¿Por qué es importante el PSA?
                </h3>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Muchos síntomas urinarios como los listados también pueden deberse a{" "}
                  <strong>hiperplasia prostática benigna (HBP)</strong>, que no es cáncer.
                  Por eso, <strong>no espere a tener síntomas</strong>: la prueba del PSA
                  (antígeno prostático específico) en sangre, junto con la exploración
                  física, permite detectar el cáncer de próstata en etapas donde es
                  curable.
                </p>
                <p className="mt-4 text-sm text-amber-900 leading-relaxed">
                  <strong>Recomendación:</strong> solicite su PSA anual a partir de los{" "}
                  <strong>50 años</strong> (o 40-45 si tiene factores de riesgo).
                </p>
                <div className="mt-5">
                  <a href={waLink("Hola Dr. Quiroz, quiero solicitar una prueba de PSA.")} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("psa")}>
                    <Button className="bg-amber-600 text-white hover:bg-amber-700 text-sm">
                      Solicitar prueba de PSA
                    </Button>
                  </a>
                </div>
              </motion.div>
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
              Diagnóstico
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              Un diagnóstico preciso determina el tipo de tratamiento más adecuado. El proceso
              es sistemático y personalizado:
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  step: "01",
                  title: "PSA (Antígeno Prostático Específico)",
                  desc: "Análisis de sangre que mide los niveles de PSA. Valores elevados (> 4 ng/mL, aunque depende de la edad y volumen prostático) pueden indicar cáncer, HBP o prostatitis.",
                },
                {
                  step: "02",
                  title: "Tacto rectal digital (TRD)",
                  desc: "Exploración física que permite palpar la próstata y detectar nódulos, induración o asimetría sugestivos de malignidad.",
                },
                {
                  step: "03",
                  title: "RM Multiparamétrica (mpRM)",
                  desc: "Estudio de imagen de alta resolución que identifica lesiones sospechosas dentro de la próstata, guía la biopsia y contribuye a la estadificación (PI-RADS).",
                },
                {
                  step: "04",
                  title: "Biopsia de próstata",
                  desc: "Obtención de muestras de tejido prostático bajo guía de ultrasonido transrectal o fusión mpRM-ultrasonido para confirmación histológica.",
                },
                {
                  step: "05",
                  title: "Clasificación Gleason / ISUP",
                  desc: "El grado histológico (Gleason 6-10 / Grupos ISUP 1-5) determina la agresividad del tumor y orienta las decisiones de tratamiento.",
                },
                {
                  step: "06",
                  title: "Estadificación TNM",
                  desc: "Evaluación de la extensión local (T), ganglionar (N) y a distancia (M) mediante RM pélvica y gammagrafía ósea cuando está indicado.",
                },
              ].map((d) => (
                <Card key={d.step}>
                  <div className="text-3xl font-bold text-indigo-200 mb-2">{d.step}</div>
                  <h3 className="font-semibold text-slate-900">{d.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{d.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TRATAMIENTO */}
        <section id="tratamiento" className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              Opciones de tratamiento
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-600 mb-8 max-w-2xl"
            >
              El tratamiento se individualiza según el estadio, el grado Gleason, el PSA, la
              edad y el estado de salud del paciente. Las principales opciones son:
            </motion.p>

            {/* PROSTATECTOMÍA ROBÓTICA — FEATURED */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border-2 border-indigo-400 bg-indigo-50 p-7 shadow-md mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-xl">★</span>
                </div>
                <div>
                  <div className="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    Tratamiento recomendado en cáncer localizado
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900">
                    Prostatectomía Robótica (Da Vinci)
                  </h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">
                    La extirpación de la próstata mediante el sistema robótico Da Vinci es el estándar
                    de oro para el cáncer de próstata localizado de riesgo intermedio o alto en hombres
                    candidatos a cirugía. El Dr. Quiroz realiza este procedimiento con formación
                    especializada obtenida en el <strong>Hospital Albert Einstein (Brasil)</strong> y la
                    experiencia adquirida en el <strong>INCan</strong>.
                  </p>
                  <div className="mt-4 grid sm:grid-cols-3 gap-3">
                    {[
                      "Visión 3D de alta definición y magnificada",
                      "Brazos robóticos de precisión milimétrica",
                      "Mínima pérdida de sangre (sin transfusiones en la mayoría)",
                      "Hospitalización de 1-2 días",
                      "Recuperación en 4-6 semanas",
                      "Mayor preservación de nervios (continencia y erección)",
                    ].map((b) => (
                      <div key={b} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-teal-600 font-bold mt-0.5">✓</span>
                        {b}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("cancer-prostata")}>
                      <Button className="bg-indigo-700 text-white hover:bg-indigo-800">
                        Consultar sobre prostatectomía robótica
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* OTHER OPTIONS */}
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: "Vigilancia Activa",
                  desc: "Para cánceres de muy bajo o bajo riesgo (Gleason 6 / ISUP 1). Seguimiento estrecho con PSA, exploración física y biopsias periódicas. Evita tratamiento inmediato sin sacrificar la posibilidad de curación.",
                  tag: "Bajo riesgo",
                  tagColor: "bg-green-100 text-green-700",
                },
                {
                  title: "Radioterapia",
                  desc: "Radioterapia externa de intensidad modulada (IMRT/VMAT) o braquiterapia. Alternativa a la cirugía en cáncer localizado, especialmente en pacientes con contraindicaciones quirúrgicas.",
                  tag: "Alternativa a cirugía",
                  tagColor: "bg-blue-100 text-blue-700",
                },
                {
                  title: "Hormonoterapia",
                  desc: "Deprivación androgénica para controlar el cáncer de próstata avanzado, metastásico o en recurrencia bioquímica. Generalmente se combina con radioterapia o nuevos agentes hormonales.",
                  tag: "Enfermedad avanzada",
                  tagColor: "bg-orange-100 text-orange-700",
                },
              ].map((t) => (
                <Card key={t.title}>
                  <span
                    className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-3 ${t.tagColor}`}
                  >
                    {t.tag}
                  </span>
                  <h3 className="font-semibold text-slate-900">{t.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{t.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ CIRUGÍA ROBÓTICA */}
        <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold mb-3"
            >
              ¿Por qué elegir la cirugía robótica frente a la cirugía abierta?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-slate-300 mb-10 max-w-2xl"
            >
              La prostatectomía robótica ha demostrado resultados oncológicos equivalentes a la
              cirugía abierta, con ventajas significativas en calidad de vida postoperatoria:
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "🩸",
                  title: "Menor pérdida de sangre",
                  desc: "Las pequeñas incisiones y la precisión robótica reducen el sangrado. Las transfusiones son excepcionales.",
                },
                {
                  icon: "🏥",
                  title: "Estancia hospitalaria reducida",
                  desc: "Alta en 1-2 días en la mayoría de los casos, frente a 3-5 días con cirugía abierta.",
                },
                {
                  icon: "⚡",
                  title: "Recuperación más rápida",
                  desc: "Retorno a actividades cotidianas en 2-3 semanas y completas en 4-6 semanas.",
                },
                {
                  icon: "🔬",
                  title: "Visión 3D magnificada",
                  desc: "El sistema Da Vinci ofrece una visión tridimensional con aumento de 10×, ideal para preservar estructuras delicadas.",
                },
                {
                  icon: "🧠",
                  title: "Preservación de nervios",
                  desc: "Mayor precisión en la disección de los haces neurovasculares, favoreciendo la continencia y la recuperación eréctil.",
                },
                {
                  icon: "✂️",
                  title: "Cicatrices mínimas",
                  desc: "Solo 5-6 pequeñas incisiones de 5-12 mm, comparado con la incisión de 10-15 cm de la cirugía abierta.",
                },
              ].map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-white/10 border border-white/20 p-5 hover:bg-white/15 transition"
                >
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-semibold text-white">{v.title}</h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DR. QUIROZ */}
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
                  Atención especializada del Dr. Quiroz
                </h2>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  El <strong>Dr. Alejandro Quiroz Compeán</strong> es urólogo con alta especialidad
                  en <strong>Urología Oncológica y Cirugía Robótica</strong>. Realizó su formación
                  oncológica en el <strong>Instituto Nacional de Cancerología (INCan)</strong> y su
                  posgrado en cirugía robótica en el{" "}
                  <strong>Hospital Israelita Albert Einstein, São Paulo, Brasil</strong>.
                </p>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Cuenta con certificación del{" "}
                  <strong>Consejo Nacional Mexicano de Urología (CONAMEU)</strong> y ejerce en León
                  con enfoque en diagnóstico precoz, tratamiento personalizado y acompañamiento
                  humano durante todo el proceso.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("cancer-prostata")}>
                    <Button className="bg-teal-600 text-white hover:bg-teal-700">
                      Agendar consulta
                    </Button>
                  </a>
                  <Link href="/">
                    <Button className="bg-slate-100 text-slate-800 hover:bg-slate-200">
                      Ver perfil completo
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
                    <strong>Alta Especialidad en Urología Oncológica:</strong> Instituto Nacional de
                    Cancerología (INCan), CDMX
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
              Preguntas frecuentes sobre el cáncer de próstata
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              <FAQItem
                q="¿A qué edad debo empezar a hacerme la prueba del PSA?"
                highlight
              >
                Se recomienda iniciar la detección con PSA a partir de los{" "}
                <strong>50 años</strong> en hombres de riesgo promedio. Si tiene antecedentes
                familiares de primer grado o es de ascendencia afroamericana, se recomienda
                desde los <strong>40-45 años</strong>. Consulte con el Dr. Quiroz para una
                evaluación personalizada.
              </FAQItem>

              <FAQItem q="¿Qué significa tener el PSA elevado?">
                Un PSA elevado <strong>no siempre indica cáncer</strong>; puede deberse a
                hiperplasia prostática benigna (HBP), prostatitis o infección. Sin embargo,
                es una señal de alerta que requiere evaluación urológica completa: tacto
                rectal, resonancia magnética multiparamétrica y posiblemente biopsia de próstata.
              </FAQItem>

              <FAQItem q="¿El cáncer de próstata siempre requiere operación inmediata?">
                No. Los cánceres de <strong>bajo riesgo</strong> pueden manejarse con vigilancia
                activa (seguimiento cercano sin tratamiento inmediato). Los de riesgo intermedio
                o alto se benefician de prostatectomía robótica o radioterapia. El tratamiento
                se individualiza según Gleason, PSA, estadio y estado de salud del paciente.
              </FAQItem>

              <FAQItem q="¿Cuánto tiempo dura la recuperación tras una prostatectomía robótica?">
                La hospitalización es de <strong>1-2 días</strong>. El catéter urinario se retira
                entre 7-14 días. La mayoría retoma actividades ligeras en 2-3 semanas y actividades
                completas en 4-6 semanas. La cirugía robótica implica menos dolor y menor pérdida
                de sangre que la cirugía abierta.
              </FAQItem>

              <FAQItem q="¿La prostatectomía robótica afecta la continencia y la función sexual?">
                La cirugía robótica, con visión 3D de alta definición, permite mayor precisión en la
                preservación de los nervios responsables de la erección y del esfínter urinario. La
                mayoría de los pacientes recupera la{" "}
                <strong>continencia en semanas a meses</strong>. La recuperación de la función
                eréctil depende de la preservación nerviosa, la edad y la salud preoperatoria.
              </FAQItem>

              <FAQItem q="¿Puedo curarme del cáncer de próstata?">
                Sí. Cuando se detecta en etapa localizada, la tasa de supervivencia a 5 años{" "}
                <strong>supera el 98%</strong>. Con el tratamiento adecuado —cirugía robótica,
                radioterapia o vigilancia activa— la mayoría de los hombres viven una vida plena.
                La clave es la detección temprana mediante PSA y una evaluación urológica oportuna.
              </FAQItem>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className="bg-gradient-to-br from-teal-700 to-indigo-800 text-white py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              ¿Tienes dudas sobre el cáncer de próstata?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-lg text-slate-200"
            >
              Agenda una consulta con el Dr. Quiroz en León. Evaluación personalizada,
              diagnóstico preciso y acompañamiento en cada etapa del proceso.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" onClick={() => trackWhatsApp("cancer-prostata")}>
                <Button className="bg-white text-indigo-900 hover:bg-slate-100 text-base px-8 py-3">
                  Agendar por WhatsApp
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
