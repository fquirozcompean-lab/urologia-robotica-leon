"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { trackWhatsApp, trackDoctoralia } from "@/lib/analytics";
import CallButton from "@/components/CallButton";
import {
  Award,
  GraduationCap,
  Activity,
  Cpu,
  Crosshair,
  Heart,
  Users,
  Shield,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const WHATSAPP = "5214776330492";
const DOCTORALIA = "https://www.doctoralia.com.mx/z/oFar6h";
const WA_MSG_HERO = "Hola Dr. Quiroz, quiero agendar una consulta.";
const WA_MSG_FINAL =
  "Hola Dr. Quiroz, vi su perfil y quisiera agendar una consulta.";

function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-4xl md:text-5xl font-bold font-sans text-center mb-4 ${
        light ? "text-editorial" : "text-petroleo"
      }`}
    >
      {children}
    </motion.h2>
  );
}

function GoldLine() {
  return <div className="w-24 h-1 bg-dorado mx-auto mb-12" />;
}

function WaIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhotoWithFallback() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full aspect-[6/7] bg-acero rounded-xl flex items-center justify-center shadow-2xl">
        <span className="text-editorial font-bold font-sans text-7xl select-none">
          AQ
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/images/foto%20para%20sobre%20mi.png"
      alt="Dr. Alejandro Quiroz Compeán — Urólogo oncólogo y cirujano robótico en León, Guanajuato"
      width={600}
      height={700}
      priority
      onError={() => setError(true)}
      className="w-full rounded-xl object-cover shadow-2xl"
    />
  );
}

export default function SobreMiContent() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-petroleo py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-editorial/50 mb-10 font-sans">
            <Link href="/" className="hover:text-editorial/80 transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-editorial/80">Sobre el Dr. Quiroz</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-acero/30 text-quirurgico text-xs font-sans font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-acero/40">
                Urólogo Oncólogo Certificado · León, Guanajuato
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-editorial font-sans leading-tight mb-4">
                Dr. Alejandro Quiroz Compeán
              </h1>

              <p className="text-lg text-gris-premium font-serif mb-6 leading-relaxed">
                Urólogo Oncólogo y Cirujano Robótico especializado en cáncer
                urológico y técnicas mínimamente invasivas en León, Guanajuato.
              </p>

              <p className="text-dorado font-serif italic text-base mb-8">
                &ldquo;Precisión que inspira confianza&rdquo;
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-acero/20 text-editorial/80 text-xs font-sans px-3 py-1.5 rounded-full border border-acero/30">
                  C.P. 8860892
                </span>
                <span className="bg-acero/20 text-editorial/80 text-xs font-sans px-3 py-1.5 rounded-full border border-acero/30">
                  C.E. 12465195
                </span>
                <span className="bg-acero/20 text-editorial/80 text-xs font-sans px-3 py-1.5 rounded-full border border-acero/30">
                  Certificado CONAMEU
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={waLink(WA_MSG_HERO)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp("sobre-mi")}
                  className="inline-flex items-center justify-center gap-2 bg-acero text-editorial px-6 py-3 rounded-lg font-bold font-sans hover:bg-acero/80 transition-colors"
                >
                  <WaIcon />
                  Agendar consulta
                </a>
                <a
                  href={DOCTORALIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackDoctoralia("sobre-mi")}
                  className="text-gris-premium text-sm hover:text-editorial transition-colors text-center"
                >
                  Ver perfil en Doctoralia →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                <PhotoWithFallback />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="bg-editorial py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                value: "3",
                label: "Centros de excelencia",
                desc: "Zubirán · INCan · Albert Einstein",
              },
              {
                value: "Da Vinci",
                label: "Sistema robótico",
                desc: "Cirugía oncológica urológica de precisión",
              },
              {
                value: "Gold Standard",
                label: "HoLEP disponible en León",
                desc: "Para próstatas de cualquier tamaño",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center px-6 py-8 bg-white rounded-xl border border-gris-premium/20 hover:border-acero hover:shadow-lg transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-acero font-sans mb-2">
                  {item.value}
                </div>
                <div className="text-base font-bold text-petroleo font-sans mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-gris-premium font-serif">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMACIÓN */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Formación en Centros de Excelencia</SectionTitle>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-gris-premium font-serif text-lg mb-4 max-w-2xl mx-auto"
          >
            Entrenado en los referentes más exigentes de México y
            Latinoamérica en urología oncológica y cirugía robótica.
          </motion.p>
          <GoldLine />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1 — INCMNSZ */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-gris-premium/20 hover:border-acero hover:shadow-xl rounded-xl p-8 transition-all"
            >
              <div className="h-20 flex items-center mb-6">
                <Image
                  src="/images/Logo%20nutricion.png"
                  alt="INCMNSZ — Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán"
                  width={160}
                  height={80}
                  className="object-contain max-h-20 w-auto"
                />
              </div>
              <h3 className="font-bold font-sans text-petroleo text-lg leading-tight mb-1">
                Instituto Nacional de Ciencias Médicas y Nutrición Salvador
                Zubirán
              </h3>
              <p className="text-xs font-sans text-gris-premium mb-1">
                INCMNSZ — UNAM
              </p>
              <p className="text-sm text-gris-premium font-serif mb-4">
                Ciudad de México, México
              </p>
              <div className="w-12 h-0.5 bg-dorado mb-4" />
              <p className="text-base font-bold text-acero font-sans mb-2">
                Residencia en Urología
              </p>
              <p className="text-sm text-gris-profundo font-serif leading-relaxed">
                Uno de los hospitales universitarios de mayor prestigio
                académico en México. Formación en urología general, oncológica
                y reconstructiva bajo los estándares más exigentes del país.
              </p>
            </motion.div>

            {/* Card 2 — INCan */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gris-premium/20 hover:border-acero hover:shadow-xl rounded-xl p-8 transition-all"
            >
              <div className="h-20 flex items-center mb-6">
                <Image
                  src="/images/logo%20INCAN.png"
                  alt="Instituto Nacional de Cancerología — INCan"
                  width={160}
                  height={80}
                  className="object-contain max-h-20 w-auto"
                />
              </div>
              <h3 className="font-bold font-sans text-petroleo text-lg leading-tight mb-1">
                Instituto Nacional de Cancerología
              </h3>
              <p className="text-xs font-sans text-gris-premium mb-1">INCan</p>
              <p className="text-sm text-gris-premium font-serif mb-4">
                Ciudad de México, México
              </p>
              <div className="w-12 h-0.5 bg-dorado mb-4" />
              <p className="text-base font-bold text-acero font-sans mb-2">
                Alta Especialidad en Urología Oncológica
              </p>
              <p className="text-sm text-gris-profundo font-serif leading-relaxed">
                Centro de referencia nacional para el diagnóstico y tratamiento
                del cáncer. Subespecialización en cáncer de próstata, renal y
                vesical con enfoque en cirugía oncológica avanzada.
              </p>
            </motion.div>

            {/* Card 3 — Albert Einstein */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-gris-premium/20 hover:border-acero hover:shadow-xl rounded-xl p-8 transition-all"
            >
              <div className="h-20 flex items-center mb-6">
                <Image
                  src="/images/logo%20AE.png"
                  alt="Hospital Israelita Albert Einstein — São Paulo, Brasil"
                  width={160}
                  height={80}
                  className="object-contain max-h-20 w-auto"
                />
              </div>
              <h3 className="font-bold font-sans text-petroleo text-lg leading-tight mb-1">
                Hospital Israelita Albert Einstein
              </h3>
              <p className="text-sm text-gris-premium font-serif mb-4">
                São Paulo, Brasil
              </p>
              <div className="w-12 h-0.5 bg-dorado mb-4" />
              <p className="text-base font-bold text-acero font-sans mb-2">
                Posgrado en Cirugía Robótica
              </p>
              <p className="text-sm text-gris-profundo font-serif leading-relaxed mb-4">
                Centro líder en cirugía robótica urológica en Latinoamérica.
                Entrenamiento avanzado en prostatectomía, nefrectomía y
                cistectomía robótica con sistema Da Vinci.
              </p>
              <span className="inline-block bg-acero/10 text-acero rounded-full px-3 py-1 text-xs font-sans">
                Referente robótico de Latinoamérica
              </span>
            </motion.div>

            {/* Card 4 — CONAMEU */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border border-gris-premium/20 hover:border-acero hover:shadow-xl rounded-xl p-8 transition-all"
            >
              <div className="h-20 flex items-center mb-6">
                <Award className="text-quirurgico w-16 h-16" />
              </div>
              <h3 className="font-bold font-sans text-petroleo text-lg leading-tight mb-1">
                Consejo Nacional Mexicano de Urología
              </h3>
              <p className="text-xs font-sans text-gris-premium mb-1">
                CONAMEU
              </p>
              <p className="text-sm text-gris-premium font-serif mb-4">
                México
              </p>
              <div className="w-12 h-0.5 bg-dorado mb-4" />
              <p className="text-base font-bold text-acero font-sans mb-2">
                Certificación Oficial en Urología
              </p>
              <p className="text-sm text-gris-profundo font-serif leading-relaxed">
                Certificación que acredita el dominio técnico, ético y
                académico en urología. Renovable periódicamente para
                garantizar actualización continua en los estándares más
                recientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACTIVIDAD ACADÉMICA */}
      <section className="bg-petroleo py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle light>Actividad Académica</SectionTitle>
          <GoldLine />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-editorial/80 font-serif text-lg leading-relaxed mb-6">
                &ldquo;La docencia universitaria no es solo un compromiso
                académico — es una forma de mantenerse en el frente del
                conocimiento. Formar residentes exige dominar los fundamentos,
                seguir la evidencia más reciente y defender cada decisión
                clínica ante los estándares más exigentes.&rdquo;
              </p>
              <p className="text-gris-premium font-serif text-sm">
                — Dr. Alejandro Quiroz Compeán
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-acero/20 border border-acero/30 rounded-xl p-8"
            >
              <GraduationCap className="text-quirurgico w-12 h-12 mb-4" />
              <h3 className="text-editorial font-bold font-sans text-xl mb-2">
                Médico Adscrito y Titular del Programa de Residencia de
                Urología
              </h3>
              <p className="text-editorial/70 font-serif text-sm mb-4">
                Hospital General de León
              </p>
              <div className="w-12 h-0.5 bg-dorado mb-4" />
              <span className="inline-block bg-dorado/20 text-dorado rounded-full px-3 py-1.5 text-xs font-sans font-bold border border-dorado/30">
                Programa acreditado por Tec de Monterrey
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="bg-editorial py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Áreas de Especialización</SectionTitle>
          <GoldLine />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Urología Oncológica",
                desc: "Cáncer de próstata, renal y vesical. Cirugía oncológica con preservación de función y calidad de vida.",
                link: "/cancer-prostata",
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Cirugía Robótica Da Vinci",
                desc: "Prostatectomía, nefrectomía y cistectomía robótica. Mínima invasión, máxima precisión.",
                link: "/cancer-prostata",
              },
              {
                icon: <Crosshair className="w-8 h-8" />,
                title: "HoLEP — Cirugía Láser de Próstata",
                desc: "Gold standard mundial para próstata grande. Recuperación 24-48h, resultados duraderos.",
                link: "/holep-cirugia-laser",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Hiperplasia Prostática (HPB)",
                desc: "Tratamiento médico y quirúrgico del crecimiento prostático. Opciones mínimamente invasivas.",
                link: "/hiperplasia-prostatica-benigna",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Disfunción Eréctil y Salud Sexual",
                desc: "Evaluación integral, tratamientos orales, ondas de choque e implantes. Consulta confidencial.",
                link: "/disfuncion-erectil",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "VPH y Verrugas Genitales",
                desc: "Diagnóstico, tratamiento y vacunación. Manejo integral de ITS urológicas masculinas.",
                link: "/vph-en-hombres",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={item.link}
                  className="block bg-white rounded-xl p-6 border border-gris-premium/20 hover:border-acero hover:shadow-xl transition-all group h-full"
                >
                  <div className="text-quirurgico mb-4 group-hover:text-acero transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold font-sans text-petroleo text-base mb-2 group-hover:text-acero transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gris-premium font-serif leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="bg-petroleo py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle light>Mi enfoque como médico</SectionTitle>
          <GoldLine />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Precisión diagnóstica",
                body: "El diagnóstico correcto es el primer acto quirúrgico. Antes de recomendar cualquier intervención, aseguro que la indicación está basada en evidencia sólida y es la mejor opción para cada paciente específico.",
              },
              {
                title: "Preservación de función",
                body: "La cirugía oncológica no termina en extirpar el tumor. El objetivo es eliminar el cáncer preservando la continencia, la función sexual y la calidad de vida. Eso requiere entrenamiento especializado, no solo técnica quirúrgica.",
              },
              {
                title: "Acompañamiento integral",
                body: "Desde la primera consulta hasta el seguimiento postoperatorio. El paciente oncológico necesita claridad, honestidad y un plan completo — no solo una cirugía.",
              },
            ].map((col, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-24 h-1 bg-dorado mx-auto mb-6" />
                <h3 className="text-editorial font-bold font-sans text-xl mb-4">
                  {col.title}
                </h3>
                <p className="text-gris-premium font-serif text-base leading-relaxed">
                  {col.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTORIOS */}
      <section className="bg-editorial py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Consultorios</SectionTitle>
          <GoldLine />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hospital Ángeles León */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-gris-premium/20 hover:border-acero hover:shadow-xl transition-all p-8"
            >
              <h3 className="font-bold font-sans text-petroleo text-xl mb-1">
                Hospital Ángeles León
              </h3>
              <p className="text-acero font-sans text-sm font-bold mb-5">
                Consultorio 615, Torre II
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-quirurgico flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gris-profundo font-serif">
                    Av. Cerro Gordo 311, Lomas del Campestre
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-quirurgico flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gris-profundo font-serif">
                    Lunes, Martes, Jueves — 9:00 AM a 8:00 PM
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-quirurgico flex-shrink-0 mt-0.5" />
                  <CallButton
                    telefono="4791037564"
                    sede="angeles"
                    variant="ghost"
                    className="text-sm text-acero font-serif hover:underline"
                  >
                    479 103 7564
                  </CallButton>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink(WA_MSG_FINAL)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp("sobre-mi")}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-acero text-editorial px-4 py-2.5 rounded-lg font-bold font-sans text-sm hover:bg-acero/80 transition-colors"
                >
                  <WaIcon />
                  WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/xX2Rgs1cjE4e4vAz8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-acero text-acero px-4 py-2.5 rounded-lg font-bold font-sans text-sm hover:bg-acero/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver en Maps
                </a>
              </div>
            </motion.div>

            {/* Hospital Muguerza */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl border border-gris-premium/20 hover:border-acero hover:shadow-xl transition-all p-8"
            >
              <h3 className="font-bold font-sans text-petroleo text-xl mb-1">
                Hospital Christus Muguerza Altagracia
              </h3>
              <p className="text-acero font-sans text-sm font-bold mb-5">
                Consultorio 724
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-quirurgico flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gris-profundo font-serif">
                    Blvd. Juan Alonso de Torres 2002, Valle del Campestre
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-quirurgico flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gris-profundo font-serif">
                    Miércoles, Viernes — 9:00 AM a 8:00 PM
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-quirurgico flex-shrink-0 mt-0.5" />
                  <CallButton
                    telefono="4772351442"
                    sede="muguerza"
                    variant="ghost"
                    className="text-sm text-acero font-serif hover:underline"
                  >
                    477 235 1442
                  </CallButton>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink(WA_MSG_FINAL)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp("sobre-mi")}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-acero text-editorial px-4 py-2.5 rounded-lg font-bold font-sans text-sm hover:bg-acero/80 transition-colors"
                >
                  <WaIcon />
                  WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/9GaeXhzTKwQ8ngZP6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-acero text-acero px-4 py-2.5 rounded-lg font-bold font-sans text-sm hover:bg-acero/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver en Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-acero py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-editorial font-sans mb-4">
              ¿Listo para tu consulta?
            </h2>
            <p className="text-editorial/80 font-serif text-lg mb-8 leading-relaxed">
              Atención especializada en urología oncológica y cirugía robótica
              en León, Guanajuato.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href={waLink(WA_MSG_FINAL)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("sobre-mi")}
                className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-8 py-4 rounded-lg font-bold font-sans text-lg hover:bg-whatsapp/85 transition-colors shadow-lg"
              >
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar por WhatsApp
              </a>
              <a
                href={DOCTORALIA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDoctoralia("sobre-mi-cta")}
                className="text-gris-premium text-sm hover:text-editorial transition-colors"
              >
                Ver perfil en Doctoralia →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
