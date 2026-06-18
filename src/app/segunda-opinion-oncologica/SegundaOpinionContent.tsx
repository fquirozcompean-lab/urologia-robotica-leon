"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { trackDoctoralia } from "@/lib/analytics";
import WAButton from "@/components/WAButton";
import {
  CheckCircle,
  ListChecks,
  Shield,
  FileText,
  Activity,
  Pill,
  ClipboardList,
  Microscope,
  ChevronDown,
  Award,
  GraduationCap,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const DOCTORALIA = "https://www.doctoralia.com.mx/z/oFar6h";

const WA_HERO =
  "Hola Dr. Quiroz, tengo un diagnóstico de cáncer y quisiera solicitar una segunda opinión.";
const WA_PROSTATA =
  "Hola Dr. Quiroz, tengo un diagnóstico de cáncer de próstata y quisiera una segunda opinión.";
const WA_RENAL =
  "Hola Dr. Quiroz, tengo un diagnóstico de tumor en el riñón y quisiera una segunda opinión.";
const WA_VEJIGA =
  "Hola Dr. Quiroz, tengo un diagnóstico de cáncer de vejiga y quisiera una segunda opinión.";
const WA_FINAL =
  "Hola Dr. Quiroz, tengo un diagnóstico de cáncer y quisiera solicitar una segunda opinión.";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const faqs = [
  {
    q: "¿Pedir una segunda opinión ofende a mi médico actual?",
    a: "No. Pedir una segunda opinión es una práctica normal y recomendada en medicina, especialmente en oncología. Un buen médico entiende que se trata de tu salud y tu tranquilidad. No tienes que informar a tu médico actual si no lo deseas.",
  },
  {
    q: "¿Necesito traer todos mis estudios?",
    a: "Es lo ideal. Mientras más información tengas disponible — APE/PSA, biopsia, estudios de imagen — más completa y precisa será la opinión. Si te falta algún estudio, durante la consulta se definirá qué información adicional se necesita.",
  },
  {
    q: "¿Una segunda opinión puede cambiar mi diagnóstico o tratamiento?",
    a: "Puede confirmarlo o puede ofrecer alternativas que no habías considerado. El objetivo no es contradecir a tu médico, sino asegurar que conoces todas tus opciones antes de decidir.",
  },
  {
    q: "¿Cuánto tiempo tengo para pedir una segunda opinión?",
    a: "En la mayoría de los cánceres urológicos hay tiempo razonable para buscar una segunda opinión sin comprometer el tratamiento. Sin embargo, no conviene retrasarlo demasiado. Si tienes dudas sobre la urgencia de tu caso, escríbenos y te orientamos.",
  },
  {
    q: "¿Atienden pacientes de otras ciudades?",
    a: "Sí. El Dr. Quiroz recibe pacientes de León, el Bajío y otras regiones que buscan una opinión especializada en cáncer urológico.",
  },
  {
    q: "¿La segunda opinión incluye revisar mis estudios de imagen y patología?",
    a: "Sí. Parte fundamental de la consulta es revisar tus reportes de patología, laboratorio e imagen para confirmar el diagnóstico y la estadificación.",
  },
  {
    q: "¿Qué pasa si decido tratarme con el Dr. Quiroz después de la segunda opinión?",
    a: "Si tras la consulta decides continuar tu tratamiento con el Dr. Quiroz, se te explicará el plan completo y los siguientes pasos. La decisión siempre es tuya.",
  },
  {
    q: "¿Cómo agendo una segunda opinión?",
    a: "Puedes escribir por WhatsApp describiendo tu diagnóstico. Te indicaremos disponibilidad, sede y qué estudios traer a tu consulta.",
  },
];

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gris-profundo/10 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left gap-4 hover:text-acero transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-semibold text-base text-gris-profundo leading-snug">
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-quirurgico"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-serif text-gris-profundo/80 text-base leading-relaxed pb-5 px-1">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SegundaOpinionContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-gris-profundo">

      {/* ===== HERO ===== */}
      <section className="relative bg-petroleo text-editorial py-24 px-4">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-quirurgico to-acero" />

        {/* Breadcrumb */}
        <div className="relative max-w-5xl mx-auto mb-8">
          <nav className="text-xs text-editorial/50 font-sans" aria-label="breadcrumb">
            <Link href="/" className="hover:text-editorial transition">
              Inicio
            </Link>
            <span className="mx-2">›</span>
            <span className="text-editorial/80">Segunda Opinión Oncológica</span>
          </nav>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto text-center"
        >
          <p className="text-quirurgico font-sans font-semibold text-sm uppercase tracking-widest mb-4">
            Urología Oncológica · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6 text-editorial">
            Segunda opinión en cáncer urológico
          </h1>
          <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-4">
            Un diagnóstico de cáncer de próstata, riñón o vejiga cambia todo. Antes de
            decidir tu tratamiento, asegúrate de tener la opinión de un urólogo oncólogo
            con formación en los centros de excelencia más exigentes de México y
            Latinoamérica.
          </p>
          <p className="text-dorado font-sans font-medium text-sm mb-10">
            Formación en Instituto Nacional de Cancerología (INCan) y Hospital Albert
            Einstein, Brasil
          </p>
          <div className="flex justify-center">
            <WAButton
              mensaje={WA_HERO}
              motivo="segunda-opinion-hero"
              variant="primary"
              className="shadow-lg"
            >
              Solicitar segunda opinión
            </WAButton>
          </div>
        </motion.div>
      </section>

      {/* ===== POR QUÉ UNA SEGUNDA OPINIÓN ===== */}
      <section className="bg-editorial py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-sans text-petroleo text-center mb-6"
          >
            ¿Por qué pedir una segunda opinión?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-gris-profundo text-lg leading-relaxed text-center max-w-3xl mx-auto mb-14"
          >
            Pedir una segunda opinión no significa desconfiar de tu médico. Significa
            tomar con seriedad una de las decisiones más importantes de tu vida. En
            cáncer urológico, diferentes especialistas pueden proponer enfoques distintos
            — y conocer todas tus opciones te permite decidir con tranquilidad y
            conocimiento.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: CheckCircle,
                title: "Confirmar el diagnóstico",
                text: "Revisar los estudios de patología, imagen y laboratorio para confirmar que el diagnóstico y la estadificación son correctos.",
              },
              {
                Icon: ListChecks,
                title: "Conocer todas tus opciones",
                text: "Cirugía, vigilancia activa, radioterapia, tratamiento sistémico. Cada caso es distinto. Entender las alternativas es tu derecho.",
              },
              {
                Icon: Shield,
                title: "Preservar tu calidad de vida",
                text: "En cáncer urológico, el objetivo no es solo eliminar el tumor, sino preservar la continencia, la función sexual y la calidad de vida cuando es posible.",
              },
            ].map(({ Icon, title, text }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-7 shadow-sm border border-gris-profundo/8"
              >
                <div className="w-11 h-11 rounded-full bg-acero/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-acero" />
                </div>
                <h3 className="font-sans font-semibold text-petroleo text-lg mb-2">
                  {title}
                </h3>
                <p className="font-serif text-gris-profundo/80 text-base leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOS TRES CÁNCERES ===== */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-sans text-petroleo text-center mb-4"
          >
            Segunda opinión en los tres cánceres urológicos principales
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-gris-profundo/70 text-center max-w-2xl mx-auto mb-14"
          >
            Cada tipo de cáncer urológico tiene decisiones críticas que dependen del
            estadio, el grado y tu situación personal.
          </motion.p>

          <div className="space-y-6">
            {[
              {
                color: "border-l-acero",
                badge: "bg-acero/10 text-acero",
                badgeText: "Próstata",
                title: "Cáncer de Próstata",
                text: "El cáncer urológico más frecuente en hombres. Las decisiones sobre vigilancia activa, prostatectomía robótica o radioterapia dependen del Gleason, el PSA y el estadio. Una segunda opinión ayuda a elegir entre tratar ahora o vigilar, y a entender el impacto de cada opción en la continencia y la función sexual.",
                link: "/cancer-prostata",
                linkText: "Más sobre cáncer de próstata",
                waMensaje: WA_PROSTATA,
                waMotivo: "segunda-opinion-prostata",
                waTexto: "Segunda opinión en próstata",
              },
              {
                color: "border-l-quirurgico",
                badge: "bg-quirurgico/10 text-quirurgico",
                badgeText: "Renal",
                title: "Cáncer Renal (de riñón)",
                text: "No todos los tumores renales requieren extirpar el riñón completo. La nefrectomía parcial robótica permite, en muchos casos, eliminar el tumor preservando el riñón sano. Una segunda opinión puede revelar opciones de preservación que no siempre se ofrecen de primera instancia.",
                link: "/cancer-renal",
                linkText: "Más sobre cáncer renal",
                waMensaje: WA_RENAL,
                waMotivo: "segunda-opinion-renal",
                waTexto: "Segunda opinión en riñón",
              },
              {
                color: "border-l-dorado",
                badge: "bg-dorado/10 text-dorado",
                badgeText: "Vejiga",
                title: "Cáncer de Vejiga",
                text: "El cáncer de vejiga requiere una estadificación precisa para definir si es superficial o invasivo — y esa diferencia cambia radicalmente el tratamiento. Una segunda opinión asegura que la profundidad del tumor y el plan terapéutico son los correctos antes de tomar decisiones mayores.",
                link: "/cancer-vejiga",
                linkText: "Más sobre cáncer de vejiga",
                waMensaje: WA_VEJIGA,
                waMotivo: "segunda-opinion-vejiga",
                waTexto: "Segunda opinión en vejiga",
              },
            ].map(
              (
                {
                  color,
                  badge,
                  badgeText,
                  title,
                  text,
                  link,
                  linkText,
                  waMensaje,
                  waMotivo,
                  waTexto,
                },
                i
              ) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-editorial rounded-xl p-7 border-l-4 ${color} shadow-sm`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                    <div className="flex-1">
                      <span
                        className={`inline-block text-xs font-sans font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${badge}`}
                      >
                        {badgeText}
                      </span>
                      <h3 className="font-sans font-bold text-petroleo text-2xl mb-3">
                        {title}
                      </h3>
                      <p className="font-serif text-gris-profundo/80 text-base leading-relaxed mb-4">
                        {text}
                      </p>
                      <Link
                        href={link}
                        className="inline-flex items-center gap-1 text-acero font-sans font-medium text-sm hover:gap-2 transition-all"
                      >
                        {linkText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="mt-5 md:mt-0 md:flex-shrink-0">
                      <WAButton
                        mensaje={waMensaje}
                        motivo={waMotivo}
                        variant="secondary"
                        className="whitespace-nowrap"
                      >
                        {waTexto}
                      </WAButton>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== QUÉ TRAER ===== */}
      <section className="relative bg-petroleo text-editorial py-20 px-4">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-quirurgico to-acero" />
        <div className="relative max-w-4xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-sans text-editorial text-center mb-4"
          >
            Qué traer a tu consulta de segunda opinión
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-gris-premium text-center max-w-2xl mx-auto mb-10"
          >
            Para darte una opinión completa y útil, es importante revisar toda la
            información de tu caso. Trae contigo todos los estudios que tengas
            disponibles:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                Icon: Activity,
                text: "Antígeno Prostático Específico (APE / PSA) — todos los resultados que tengas, no solo el último",
              },
              {
                Icon: Microscope,
                text: "Reporte de biopsia y patología (si ya te realizaron biopsia)",
              },
              {
                Icon: FileText,
                text: "Estudios de imagen: tomografía (TAC), resonancia magnética, gammagrama óseo, ultrasonido",
              },
              {
                Icon: ClipboardList,
                text: "Reportes de cualquier cirugía o procedimiento previo",
              },
              {
                Icon: Pill,
                text: "Lista de medicamentos que tomas actualmente",
              },
              {
                Icon: FileText,
                text: "Expediente o resumen clínico de tu médico tratante (si lo tienes)",
              },
            ].map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 bg-white/5 border border-editorial/10 rounded-lg p-4"
              >
                <Icon className="w-5 h-5 text-quirurgico flex-shrink-0 mt-0.5" />
                <p className="font-serif text-editorial/85 text-sm leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-serif text-gris-premium text-sm text-center max-w-xl mx-auto"
          >
            Si no cuentas con todos los estudios, no te preocupes — durante la consulta
            se definirá qué información adicional se necesita. Lo importante es comenzar.
          </motion.p>
        </div>
      </section>

      {/* ===== POR QUÉ EL DR. QUIROZ ===== */}
      <section className="bg-editorial py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-sans text-petroleo text-center mb-10"
          >
            Por qué una segunda opinión con el Dr. Quiroz
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-gris-profundo text-lg leading-relaxed"
            >
              El Dr. Alejandro Quiroz Compeán es urólogo oncólogo con alta especialidad
              en el Instituto Nacional de Cancerología (INCan), el centro de referencia
              para el tratamiento del cáncer en México, y formación en cirugía robótica
              en el Hospital Albert Einstein de São Paulo, uno de los referentes de
              Latinoamérica.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-gris-profundo text-lg leading-relaxed"
            >
              Esto significa que tu caso será revisado por alguien entrenado
              específicamente en el manejo oncológico del cáncer urológico — no solo en
              urología general — y con dominio de las técnicas quirúrgicas mínimamente
              invasivas que pueden preservar tu función y calidad de vida.
            </motion.p>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                Icon: GraduationCap,
                label: "INCan",
                sub: "Alta Especialidad en Urología Oncológica",
              },
              {
                Icon: Award,
                label: "Albert Einstein",
                sub: "Cirugía Robótica · São Paulo, Brasil",
              },
              {
                Icon: BadgeCheck,
                label: "CONAMEU",
                sub: "Certificación vigente",
              },
            ].map(({ Icon, label, sub }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gris-profundo/8"
              >
                <div className="w-10 h-10 rounded-full bg-acero/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-acero" />
                </div>
                <div>
                  <p className="font-sans font-bold text-petroleo text-sm">{label}</p>
                  <p className="font-serif text-gris-profundo/70 text-xs leading-snug">
                    {sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 text-acero font-sans font-semibold hover:gap-3 transition-all"
            >
              Conoce más sobre el Dr. Quiroz
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-sans text-petroleo text-center mb-12"
          >
            Preguntas frecuentes sobre la segunda opinión
          </motion.h2>
          <div className="divide-y divide-gris-profundo/10 border-t border-gris-profundo/10">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="relative bg-petroleo text-editorial py-20 px-4">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-quirurgico to-acero" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-editorial mb-4">
            Toma tu decisión con la mejor información posible
          </h2>
          <p className="font-serif text-editorial/80 text-lg mb-10 leading-relaxed">
            Solicita tu segunda opinión en cáncer urológico en León, Guanajuato.
          </p>
          <div className="flex flex-col items-center gap-4">
            <WAButton
              mensaje={WA_FINAL}
              motivo="segunda-opinion-cta-final"
              variant="primary"
              className="shadow-lg"
            >
              Solicitar segunda opinión por WhatsApp
            </WAButton>
            <a
              href={DOCTORALIA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDoctoralia("segunda-opinion")}
              className="text-gris-premium text-sm hover:text-editorial transition-colors"
            >
              Ver perfil en Doctoralia →
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
