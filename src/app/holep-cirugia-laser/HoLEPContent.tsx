"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const WHATSAPP = "5214776330492";
const DOCTORALIA = "https://www.doctoralia.com.mx/z/oFar6h";
const WA_MSG = "Hola Dr. Quiroz, quiero agendar una evaluación para cirugía HoLEP de próstata.";

function waLink() {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WA_MSG)}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-bold text-petroleo font-sans text-center mb-4"
    >
      {children}
    </motion.h2>
  );
}

function GoldLine() {
  return <div className="w-24 h-1 bg-dorado mx-auto mb-12" />;
}

function FAQItem({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-editorial rounded-xl border-2 border-gris-premium/20 hover:border-acero transition-all overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 font-sans font-bold text-petroleo text-lg flex justify-between items-center"
      >
        <span>{q}</span>
        <span
          className={`text-acero transition-transform flex-shrink-0 ml-4 ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-6 pb-6 font-serif text-gris-profundo leading-relaxed"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

const navSections = [
  { id: "que-es", label: "¿Qué es?" },
  { id: "ventajas", label: "Ventajas" },
  { id: "candidatos", label: "Candidatos" },
  { id: "procedimiento", label: "Procedimiento" },
  { id: "recuperacion", label: "Recuperación" },
  { id: "faq", label: "Preguntas" },
  { id: "contacto", label: "Contacto" },
];

export default function HoLEPContent() {
  return (
    <div className="min-h-screen bg-white text-gris-profundo">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-petroleo/95 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-6xl flex justify-between items-center px-4 py-3">
          <Link
            href="/"
            className="font-semibold text-editorial hover:text-quirurgico transition text-sm font-sans"
          >
            ← Urología Robótica León
          </Link>
          <nav className="hidden md:flex gap-5 text-xs font-sans">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() =>
                  document
                    .getElementById(s.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="text-editorial/70 hover:text-editorial transition"
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {/* BREADCRUMB */}
        <div className="bg-petroleo px-4 pt-4 pb-2">
          <div className="max-w-6xl mx-auto">
            <nav className="text-xs text-editorial/60 font-sans" aria-label="breadcrumb">
              <Link href="/" className="hover:text-editorial transition">Inicio</Link>
              <span className="mx-2">›</span>
              <Link href="/hiperplasia-prostatica-benigna" className="hover:text-editorial transition">HPB</Link>
              <span className="mx-2">›</span>
              <span className="text-editorial/90">HoLEP</span>
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
              HoLEP: Cirugía Láser Avanzada de Próstata en León, Guanajuato
            </h1>
            <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-4">
              Tratamiento con láser de holmium para próstatas de cualquier tamaño.
              Recuperación rápida, mínimo sangrado, resultados duraderos.
            </p>
            <p className="text-quirurgico font-sans font-medium italic mb-10">
              "Precisión que inspira confianza"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={DOCTORALIA} target="_blank" rel="noreferrer">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-acero text-editorial px-8 py-4 rounded-lg font-bold font-sans hover:bg-acero/90 transition-colors shadow-lg cursor-pointer"
                >
                  Agendar Evaluación HoLEP
                </motion.div>
              </a>
              <a href={waLink()} target="_blank" rel="noreferrer">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-editorial text-editorial px-8 py-4 rounded-lg font-bold font-sans hover:bg-editorial hover:text-petroleo transition-colors cursor-pointer"
                >
                  WhatsApp
                </motion.div>
              </a>
            </div>
          </motion.div>
        </section>

        {/* ¿QUÉ ES HOLEP? */}
        <Section id="que-es" className="bg-white">
          <SectionTitle>¿Qué es HoLEP?</SectionTitle>
          <GoldLine />
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-gris-profundo leading-relaxed"
            >
              <p className="text-xl mb-6">
                <strong className="font-sans text-petroleo">
                  HoLEP (Holmium Laser Enucleation of the Prostate)
                </strong>{" "}
                es la técnica láser más avanzada para el tratamiento de la hiperplasia
                prostática benigna (próstata crecida).
              </p>
              <p className="mb-6">
                Utiliza un láser de holmium de alta precisión para eliminar completamente el
                tejido prostático que obstruye el flujo urinario,{" "}
                <strong className="font-sans">sin incisiones externas</strong>. Es el
                tratamiento recomendado por las guías internacionales (AUA y EAU) para
                próstatas grandes y es el único procedimiento con capacidad de tratar
                próstatas de{" "}
                <strong className="font-sans">cualquier tamaño</strong>.
              </p>
              <p className="mb-8">
                A diferencia de otros procedimientos como TURP o cirugía abierta, HoLEP
                permite resultados equivalentes a cirugía abierta con las ventajas de la
                mínima invasión.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Tratar próstatas de cualquier tamaño",
                    desc: "Desde 30g hasta más de 200g — sin límite superior",
                  },
                  {
                    title: "Sangrado mínimo",
                    desc: "El láser coagula vasos sanguíneos durante el corte",
                  },
                  {
                    title: "Recuperación rápida",
                    desc: "Alta hospitalaria 24-48h, sonda 1-2 días",
                  },
                  {
                    title: "Resultados duraderos",
                    desc: "Tasa de reoperación <2% a 10 años — la más baja de todas las técnicas",
                  },
                  {
                    title: "Sin cicatrices externas",
                    desc: "Acceso endoscópico transurethral completo",
                  },
                  {
                    title: "Análisis patológico completo",
                    desc: "El tejido se conserva para descartar cáncer oculto (10-15% de casos)",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 bg-editorial p-4 rounded-xl"
                  >
                    <span className="text-quirurgico text-xl flex-shrink-0 font-sans font-bold mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="font-sans font-semibold text-petroleo text-sm">
                        {item.title}
                      </p>
                      <p className="text-sm text-gris-premium mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        {/* IMAGEN COMPARATIVA */}
        <Section className="bg-editorial">
          <SectionTitle>HoLEP vs. Cirugía Convencional</SectionTitle>
          <GoldLine />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl shadow-2xl overflow-hidden border-2 border-acero/20 max-w-4xl mx-auto"
          >
            <Image
              src="/holep/holep-vs-turp.png"
              alt="Comparación HoLEP vs TURP cirugía convencional de próstata"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </motion.div>
          <p className="text-center text-gris-premium font-serif mt-6 max-w-3xl mx-auto">
            HoLEP permite eliminar completamente el adenoma prostático con mínimo trauma,
            sangrado reducido y recuperación acelerada comparado con TURP o cirugía abierta.
          </p>
        </Section>

        {/* VIDEO */}
        <Section className="bg-white">
          <SectionTitle>HoLEP en Acción: Video Quirúrgico</SectionTitle>
          <GoldLine />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-petroleo/5 rounded-2xl p-6 border-2 border-quirurgico/20 max-w-4xl mx-auto"
          >
            <video controls className="w-full rounded-xl shadow-2xl" preload="metadata">
              <source src="/holep/video-holep.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
            <p className="text-center text-gris-premium font-serif mt-4 text-sm">
              Dr. Alejandro Quiroz realizando cirugía HoLEP con láser de holmium. Procedimiento
              mínimamente invasivo, alta precisión y excelentes resultados funcionales.
            </p>
          </motion.div>
        </Section>

        {/* VENTAJAS */}
        <Section id="ventajas" className="bg-editorial">
          <SectionTitle>Ventajas de HoLEP sobre Otros Procedimientos</SectionTitle>
          <GoldLine />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                title: "Cualquier Tamaño de Próstata",
                desc: "Desde 30g hasta más de 200g. En próstatas grandes, evita cirugía abierta.",
                highlight: "Resultados equivalentes a cirugía abierta sin sus riesgos.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
                title: "Sangrado Mínimo",
                desc: "El láser coagula vasos sanguíneos durante el corte.",
                highlight:
                  "Menor riesgo de transfusión. Ideal para pacientes anticoagulados.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                title: "Recuperación Rápida",
                desc: "Alta: 24-48h. Sonda: 1-2 días.",
                highlight:
                  "Retorno a actividades en 1-2 semanas vs. 4-6 semanas en cirugía abierta.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
                title: "Resultados Duraderos",
                desc: "Elimina completamente el tejido obstructivo.",
                highlight: "Tasa de reoperación <2% a 10 años — la más baja de todas las técnicas.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                ),
                title: "Análisis Patológico Completo",
                desc: "El tejido extraído se conserva intacto para análisis.",
                highlight:
                  "Detecta cáncer oculto en 10-15% de casos no diagnosticado previamente.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                ),
                title: "Respaldado por Evidencia",
                desc: "Recomendado por guías AUA y EAU.",
                highlight:
                  "Tratamiento de elección para próstatas grandes según asociaciones americana y europea de urología.",
              },
            ].map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg border-2 border-gris-premium/20 hover:border-acero transition-colors"
              >
                <div className="w-14 h-14 bg-quirurgico/10 rounded-full flex items-center justify-center mb-5">
                  <svg
                    className="w-7 h-7 text-quirurgico"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {v.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-petroleo mb-2 font-sans">{v.title}</h3>
                <p className="text-gris-premium font-serif text-sm leading-relaxed mb-2">
                  {v.desc}
                </p>
                <p className="text-petroleo font-sans font-medium text-sm">{v.highlight}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* TABLA COMPARATIVA */}
        <Section className="bg-white">
          <SectionTitle>HoLEP vs. Otros Tratamientos</SectionTitle>
          <GoldLine />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto rounded-2xl shadow-xl border border-gris-premium/20"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-acero text-editorial font-sans">
                  <th className="p-4 text-left font-bold">Característica</th>
                  <th className="p-4 text-center font-bold bg-quirurgico">HoLEP ✓</th>
                  <th className="p-4 text-center font-bold">TURP</th>
                  <th className="p-4 text-center font-bold">Cirugía Abierta</th>
                </tr>
              </thead>
              <tbody className="font-serif text-sm">
                {[
                  ["Tamaño de próstata", "Cualquier tamaño", "30-80g", ">80g"],
                  ["Sangrado", "Mínimo", "Moderado", "Alto"],
                  ["Estancia hospitalaria", "1-2 días", "2-3 días", "5-7 días"],
                  ["Días con sonda", "1-2 días", "2-3 días", "5-7 días"],
                  ["Recuperación completa", "1-2 semanas", "2-3 semanas", "4-6 semanas"],
                  ["Reoperación a 10 años", "<2%", "10-15%", "5-8%"],
                  ["Análisis patológico", "Completo ✓", "Parcial", "Completo ✓"],
                  ["Sin cicatriz", "Sí ✓", "Sí ✓", "No"],
                ].map(([car, holep, turp, abierta], i) => (
                  <tr
                    key={car}
                    className={i % 2 === 0 ? "bg-white" : "bg-editorial"}
                  >
                    <td className="p-4 font-sans font-semibold text-petroleo">{car}</td>
                    <td className="p-4 text-center bg-quirurgico/10 font-bold text-petroleo">
                      {holep}
                    </td>
                    <td className="p-4 text-center text-gris-profundo">{turp}</td>
                    <td className="p-4 text-center text-gris-profundo">{abierta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <p className="text-center text-gris-premium font-serif mt-6 max-w-3xl mx-auto text-sm">
            HoLEP combina las ventajas de la cirugía mínimamente invasiva con los resultados
            duraderos de la cirugía abierta, evitando las desventajas de ambas.
          </p>
        </Section>

        {/* CANDIDATOS */}
        <Section id="candidatos" className="bg-editorial">
          <SectionTitle>¿Quién es Candidato para HoLEP?</SectionTitle>
          <GoldLine />
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-2 border-acero/20"
            >
              <h3 className="text-xl font-bold text-petroleo mb-5 font-sans">
                ✓ HoLEP es ideal si tienes:
              </h3>
              <ul className="space-y-3 font-serif text-gris-profundo mb-8">
                {[
                  ["Próstata grande", "(mayor a 80g) que requeriría cirugía abierta"],
                  ["Síntomas urinarios severos", "que no mejoran con medicamentos"],
                  ["Retención urinaria", "incapacidad de orinar, necesidad de sonda permanente"],
                  ["Infecciones urinarias recurrentes", "por obstrucción prostática"],
                  ["Cálculos vesicales", "por vaciamiento incompleto de vejiga"],
                  ["Anticoagulación", "mayor seguridad hemostática con HoLEP"],
                  ["Deseo de recuperación rápida", "retorno pronto a actividades normales"],
                ].map(([bold, rest]) => (
                  <li key={bold} className="flex items-start gap-3">
                    <span className="text-quirurgico flex-shrink-0 font-sans font-bold">•</span>
                    <span>
                      <strong className="font-sans">{bold}</strong> — {rest}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-petroleo mb-5 font-sans">
                ✗ HoLEP NO trata:
              </h3>
              <ul className="space-y-3 font-serif text-gris-profundo mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-gris-premium flex-shrink-0 font-sans font-bold">✗</span>
                  <span>
                    <strong className="font-sans">Cáncer de próstata</strong> — requiere
                    tratamiento oncológico diferente (cirugía robótica, radioterapia)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gris-premium flex-shrink-0 font-sans font-bold">✗</span>
                  <span>
                    <strong className="font-sans">Prostatitis activa</strong> — la infección
                    debe tratarse antes de cualquier procedimiento
                  </span>
                </li>
              </ul>

              <div className="p-5 bg-quirurgico/10 rounded-xl border-l-4 border-quirurgico">
                <p className="font-serif text-gris-profundo text-sm">
                  <strong className="font-sans text-petroleo">Nota importante:</strong> Durante
                  HoLEP el tejido extraído se analiza en patología. Si se detectan células
                  cancerosas no diagnosticadas previamente (10-15% de casos), se puede realizar
                  tratamiento oncológico posterior.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* PROCEDIMIENTO PASO A PASO */}
        <Section id="procedimiento" className="bg-white">
          <SectionTitle>El Procedimiento HoLEP: Paso a Paso</SectionTitle>
          <GoldLine />
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                n: "1",
                title: "Evaluación Preoperatoria",
                desc: "Consulta completa con el Dr. Quiroz, exámenes de laboratorio, ultrasonido prostático con volumen exacto, uroflujometría y evaluación cardiológica si es necesario. Discusión de expectativas y riesgos.",
              },
              {
                n: "2",
                title: "Anestesia",
                desc: "General o raquídea (según caso y preferencia del paciente). Duración total del procedimiento: 60-120 minutos dependiendo del tamaño prostático.",
              },
              {
                n: "3",
                title: "Enucleación con Láser",
                desc: 'El láser de holmium separa el adenoma prostático de la cápsula prostática, como "pelar una naranja". Sin incisiones externas — todo acceso por uretra con cámara endoscópica.',
              },
              {
                n: "4",
                title: "Morcelación",
                desc: "El tejido enucleado se fragmenta con morcelador y se extrae completamente. Todo el tejido se conserva intacto para análisis patológico completo.",
              },
              {
                n: "5",
                title: "Recuperación",
                desc: "Sonda vesical por 1-2 días. Alta hospitalaria 24-48 horas. Retorno a actividades ligeras en 1 semana y actividades completas en 2 semanas.",
              },
            ].map((paso) => (
              <motion.div
                key={paso.n}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-acero rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-editorial font-sans">{paso.n}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-petroleo mb-2 font-sans">
                    {paso.title}
                  </h3>
                  <p className="font-serif text-gris-profundo leading-relaxed">{paso.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* RECUPERACIÓN */}
        <Section id="recuperacion" className="bg-editorial">
          <SectionTitle>Recuperación Después de HoLEP</SectionTitle>
          <GoldLine />
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Timeline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-petroleo mb-6 font-sans">
                Timeline de Recuperación
              </h3>
              <div className="space-y-5 font-serif text-gris-profundo">
                {[
                  ["Día 1-2", "Hospitalización, sonda vesical, líquidos abundantes. Caminar desde el primer día."],
                  ["Día 2-3", "Retiro de sonda, alta hospitalaria. Puede haber urgencia urinaria inicial (normal)."],
                  ["Semana 1", "Reposo relativo. Evitar esfuerzos y cargar peso. Orina puede tener sangre ligera."],
                  ["Semana 2-4", "Retorno gradual a actividades. Mejoría progresiva de síntomas urinarios."],
                  ["Mes 1-3", "Mejoría completa. Flujo urinario óptimo. Evaluación con uroflujometría."],
                ].map(([tiempo, desc]) => (
                  <div key={tiempo}>
                    <p className="font-sans font-bold text-acero text-sm mb-1">{tiempo}:</p>
                    <p className="text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Qué esperar */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-petroleo mb-6 font-sans">
                Qué Esperar (Normal)
              </h3>
              <ul className="space-y-4 font-serif text-gris-profundo">
                {[
                  ["Sangre en orina", "primeras 2-4 semanas (normal, se resuelve sola)"],
                  ["Urgencia urinaria", "primeras semanas (mejora gradualmente con ejercicios de Kegel)"],
                  ["Ardor al orinar", "primeros días (temporal, controlado con medicamento)"],
                  ["Eyaculación retrógrada", "semen va a vejiga — no afecta orgasmo ni erección"],
                ].map(([bold, rest]) => (
                  <li key={bold} className="flex items-start gap-3">
                    <span className="text-quirurgico flex-shrink-0 font-sans font-bold">✓</span>
                    <span className="text-sm leading-relaxed">
                      <strong className="font-sans">{bold}</strong> — {rest}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-acero/10 rounded-lg">
                <p className="text-xs font-serif text-gris-profundo">
                  <strong className="font-sans text-petroleo">Consultar urgente si:</strong>{" "}
                  fiebre mayor a 38°C, sangrado abundante rojo brillante, incapacidad para
                  orinar después de retirar la sonda.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Recomendaciones */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-bold text-petroleo mb-6 font-sans text-center">
              Recomendaciones para Óptima Recuperación
            </h3>
            <div className="grid md:grid-cols-2 gap-6 font-serif text-gris-profundo">
              <div>
                <h4 className="font-sans font-bold text-acero mb-3 text-sm">✓ SÍ hacer:</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Tomar 2-3 litros de agua al día",
                    "Caminar desde el primer día",
                    "Tomar medicamentos indicados",
                    "Dieta normal, evitar estreñimiento",
                    "Ejercicios de Kegel para urgencia",
                    "Acudir a citas de seguimiento",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-quirurgico font-bold">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-bold text-gris-premium mb-3 text-sm">
                  ✗ NO hacer (4 semanas):
                </h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Cargar peso mayor a 5 kg",
                    "Ejercicio intenso o bicicleta",
                    "Actividad sexual",
                    "Pujar o hacer esfuerzo abdominal",
                    "Baños de inmersión (regadera sí)",
                    "Conducir vehículos la primera semana",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gris-premium font-bold">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="bg-white">
          <SectionTitle>Preguntas Frecuentes sobre HoLEP</SectionTitle>
          <GoldLine />
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "¿HoLEP es mejor que TURP?",
                a: "Para próstatas grandes (>80g), HoLEP es superior a TURP: menor tasa de reoperación (<2% vs 10-15%), puede tratar cualquier tamaño y menor sangrado. Para próstatas pequeñas-medianas, ambas son efectivas, pero HoLEP ofrece recuperación más rápida y resultados más duraderos.",
              },
              {
                q: "¿Cuánto tiempo dura la cirugía?",
                a: "Entre 60 y 120 minutos dependiendo del tamaño prostático. Próstatas 50-80g: ~60-90 min. Próstatas >100g: 90-120 min. Es más larga que TURP pero evita cirugía abierta en próstatas grandes.",
              },
              {
                q: "¿Cuánto tiempo estaré hospitalizado?",
                a: "24 a 48 horas. La mayoría de pacientes se va a casa al segundo día — significativamente menos que cirugía abierta (5-7 días).",
              },
              {
                q: "¿Cuántos días tendré sonda?",
                a: "1 a 2 días. Se retira antes del alta o al día siguiente en consulta — mucho menor que cirugía abierta (5-7 días) o TURP (2-3 días).",
              },
              {
                q: "¿Tendré incontinencia urinaria después?",
                a: "Incontinencia permanente es rara (<1%). Puede haber urgencia urinaria las primeras semanas — mejora gradualmente. Los ejercicios de Kegel ayudan. El esfínter urinario externo se preserva durante la cirugía.",
              },
              {
                q: "¿Afectará mi función sexual?",
                a: "Erección: se preserva en >90% si la función era normal antes. Eyaculación: >90% tendrá eyaculación retrógrada (semen va a vejiga, no hacia afuera), lo que no afecta el orgasmo ni el placer. Esto es común a TURP y cirugía abierta también.",
              },
              {
                q: "¿Cuándo podré retomar actividad sexual?",
                a: "Se recomienda esperar 4 semanas para permitir cicatrización completa. Después de ese tiempo la actividad sexual es completamente normal.",
              },
              {
                q: "¿Puedo hacerme HoLEP si tomo anticoagulantes?",
                a: "Sí. HoLEP es especialmente ventajoso en pacientes anticoagulados (warfarina, apixaban, rivaroxaban) porque el láser minimiza el sangrado. Se coordina con cardiología para el manejo perioperatorio.",
              },
              {
                q: "¿Qué tan grande puede ser la próstata para HoLEP?",
                a: "No hay límite superior. Se han tratado próstatas de más de 300 gramos con éxito. Es el único procedimiento láser que puede tratar próstatas gigantes sin cirugía abierta.",
              },
              {
                q: "¿Cuándo veré mejoría en síntomas?",
                a: "Mejoría inmediata después de retirar la sonda (día 2-3). Puede haber urgencia e frecuencia inicial que mejoran en 2-4 semanas. Mejoría completa del flujo urinario: 1-3 meses.",
              },
              {
                q: "¿Necesitaré otra cirugía en el futuro?",
                a: "HoLEP tiene la tasa de reoperación más baja de todas las técnicas: <2% a 10 años vs 10-15% de TURP. Esto es porque HoLEP elimina completamente el tejido obstructivo.",
              },
              {
                q: "¿HoLEP puede detectar cáncer de próstata?",
                a: "Sí. El tejido extraído se analiza en patología. En 10-15% de casos se detecta cáncer no diagnosticado previamente. Si se encuentra, se puede realizar tratamiento oncológico posterior (cirugía robótica, radioterapia).",
              },
              {
                q: "¿Cuánto cuesta HoLEP en León?",
                a: "El costo varía según el hospital y el tamaño prostático. Incluye honorarios médicos, hospital, anestesia, uso del láser y análisis patológico. Se ofrece cotización personalizada en consulta. Algunos seguros médicos cubren HoLEP.",
              },
              {
                q: "¿Los seguros médicos cubren HoLEP?",
                a: "Muchos seguros sí lo cubren como tratamiento estándar para HPB. Se recomienda verificar cobertura con la aseguradora antes del procedimiento. Llevamos carta médica detallando la indicación.",
              },
              {
                q: "¿Qué diferencia HoLEP de otros láseres (GreenLight, Thulium)?",
                a: "HoLEP: enuclea (extrae) tejido completo, análisis patológico completo y trata cualquier tamaño. GreenLight/Thulium: vaporizan tejido, análisis incompleto, más limitados en próstatas grandes. HoLEP tiene más evidencia científica a largo plazo.",
              },
              {
                q: "¿Tengo que venir a León para el procedimiento?",
                a: "Sí, la cirugía se realiza en Hospital Ángeles León. Para pacientes foráneos: consulta inicial puede ser por videollamada, cirugía presencial, seguimiento mixto. Estadía en León: 3-4 días.",
              },
              {
                q: "¿Por qué elegir al Dr. Quiroz para HoLEP?",
                a: "Formación en centros de excelencia (Hospital Albert Einstein Brasil, Instituto Nacional de Cancerología), certificado por el Consejo Mexicano de Urología, experiencia en cirugía mínimamente invasiva, enfoque en preservación de función y seguimiento integral personalizado.",
              },
            ].map((item) => (
              <FAQItem key={item.q} q={item.q}>
                {item.a}
              </FAQItem>
            ))}
          </div>
        </Section>

        {/* DR. QUIROZ */}
        <Section className="bg-editorial">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-petroleo font-sans mb-4">
                Dr. Alejandro Quiroz — Especialista en HoLEP en León
              </h2>
              <p className="font-serif text-gris-profundo leading-relaxed mb-4">
                El <strong className="font-sans">Dr. Alejandro Quiroz Compeán</strong> es
                urólogo certificado con alta especialidad en Urología Oncológica y Cirugía
                Robótica. Su formación en centros de excelencia internacionales le otorga el
                dominio técnico necesario para HoLEP en próstatas de cualquier tamaño.
              </p>
              <ul className="space-y-2 font-serif text-gris-profundo text-sm mb-6">
                <li>
                  <strong className="font-sans">Especialidad en Urología:</strong> INCMNSZ —
                  UNAM
                </li>
                <li>
                  <strong className="font-sans">Alta Especialidad Urología Oncológica:</strong>{" "}
                  Instituto Nacional de Cancerología (INCan)
                </li>
                <li>
                  <strong className="font-sans">Cirugía Robótica:</strong> Hospital Israelita
                  Albert Einstein, São Paulo, Brasil
                </li>
                <li>
                  <strong className="font-sans">Certificado:</strong> Consejo Nacional Mexicano
                  de Urología (CONAMEU)
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href={DOCTORALIA} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block bg-acero text-editorial px-6 py-3 rounded-lg font-bold font-sans text-sm hover:bg-acero/90 transition-colors cursor-pointer"
                  >
                    Agendar en Doctoralia
                  </motion.div>
                </a>
                <Link href="/hiperplasia-prostatica-benigna">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block bg-white text-petroleo border-2 border-petroleo/20 px-6 py-3 rounded-lg font-bold font-sans text-sm hover:border-acero transition-colors cursor-pointer"
                  >
                    Ver todas las opciones para HPB
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-2 border-acero/20"
            >
              <h3 className="font-sans font-bold text-petroleo text-lg mb-4">
                Consultorios en León
              </h3>
              <div className="space-y-4 font-serif text-gris-profundo text-sm">
                <div className="p-4 bg-editorial rounded-xl">
                  <p className="font-sans font-semibold text-petroleo">
                    Hospital Ángeles León
                  </p>
                  <p>Consultorio 615, Torre II</p>
                  <p className="text-gris-premium">Lunes, Martes, Jueves</p>
                </div>
                <div className="p-4 bg-editorial rounded-xl">
                  <p className="font-sans font-semibold text-petroleo">
                    Hospital Christus Muguerza Altagracia
                  </p>
                  <p className="text-gris-premium">Miércoles, Viernes</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gris-premium/20 text-xs text-gris-premium font-sans">
                C.P. 8860892 · C.E. 12465195 · Certificado CONAMEU
              </div>
            </motion.div>
          </div>
        </Section>

        {/* CTA FINAL */}
        <section id="contacto" className="py-20 px-4 bg-acero text-editorial">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-sans mb-6"
            >
              ¿Listo para Resolver tus Síntomas de Próstata con HoLEP?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xl font-serif text-editorial/85 mb-10 max-w-2xl mx-auto"
            >
              Agenda tu evaluación con el Dr. Quiroz. Determinaremos si HoLEP es la mejor
              opción para tu caso específico.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <a href={DOCTORALIA} target="_blank" rel="noreferrer">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-editorial text-petroleo px-10 py-5 rounded-lg font-bold font-sans hover:bg-editorial/90 transition-colors shadow-2xl text-lg cursor-pointer"
                >
                  Agendar Consulta de Evaluación
                </motion.div>
              </a>
              <a href={waLink()} target="_blank" rel="noreferrer">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-editorial text-editorial px-10 py-5 rounded-lg font-bold font-sans hover:bg-editorial hover:text-acero transition-colors text-lg cursor-pointer"
                >
                  WhatsApp
                </motion.div>
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-editorial/60 font-sans text-sm space-y-1"
            >
              <p>Hospital Ángeles León — Consultorio 615, Torre II · Lun, Mar, Jue</p>
              <p>Hospital Christus Muguerza Altagracia · Mié, Vie</p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-petroleo text-editorial/70 py-8 text-center font-sans text-sm">
        <p className="font-semibold text-editorial">
          © 2025 Dr. Alejandro Quiroz Compeán | Urología Robótica León
        </p>
        <p className="mt-1">HoLEP · Cirugía Láser de Próstata · León, Guanajuato, México</p>
        <p className="mt-1 text-xs text-editorial/40">
          C.P. 8860892 · C.E. 12465195 · Certificado CONAMEU · Aviso COFEPRIS pendiente
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <Link href="/" className="text-quirurgico hover:text-editorial transition">
            ← Inicio
          </Link>
          <Link
            href="/hiperplasia-prostatica-benigna"
            className="text-quirurgico hover:text-editorial transition"
          >
            HPB →
          </Link>
        </div>
      </footer>
    </div>
  );
}
