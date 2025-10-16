'use client';

import React, { useMemo, useState } from "react";
import NextImage from "next/image";
import { motion } from "framer-motion";

// === Utilidad scroll suave ===
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// === Animaciones base ===
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// === COMPONENTES BASE ===

// ✅ Botón limpio y animado compatible con Vercel
// ✅ Botón animado compatible con TypeScript y Vercel
const Button = ({
  className = "",
  children,
  ...props
}: any) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className={
      "px-5 py-2 rounded-2xl font-medium shadow-sm transition-all hover:shadow-md active:scale-[0.98] " +
      className
    }
    {...props}
  >
    {children}
  </motion.button>
);

// ✅ Tarjeta animada
const Card = ({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
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
    {...props}
  >
    {children}
  </motion.div>
);

// ✅ FAQ
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
        highlight
          ? "bg-teal-50 border-teal-300"
          : "bg-white border-slate-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-medium flex items-center justify-between"
      >
        <span>{q}</span>
        <span className="text-slate-500">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-slate-700"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

// === DATOS ===
const LINKS = {
  instagram: "https://www.instagram.com/urologo.alejandroquiroz/",
  facebook: "https://www.facebook.com/DrQuirozUrologoLeon",
  doctoralia:
    "https://www.doctoralia.com.mx/alejandro-quiroz-compean/urologo/leon",
};

const MAPS: Record<string, string> = {
  angeles:
    "https://www.google.com/maps/search/?api=1&query=Hospital+Ángeles+León",
  altagracia:
    "https://www.google.com/maps/search/?api=1&query=Hospital+Christus+Muguerza+Altagracia",
  miyad:
    "https://www.google.com/maps/search/?api=1&query=Hospital+MIYAD+León",
};

const WHATSAPP: Record<string, string> = {
  altagracia: "5214776390492",
  angeles: "5214775617482",
  miyad: "5214774042375",
};

function waLink(phone: string, msg: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

// === COMPONENTE PRINCIPAL ===
export default function UrologiaRoboticaLeon() {
  const services = useMemo(
    () => [
      {
        title: "Cirugía robótica",
        desc: "Procedimientos urológicos avanzados con visión 3D y precisión milimétrica.",
      },
      {
        title: "Cáncer de próstata",
        desc: "Diagnóstico y tratamiento integral, incluida prostatectomía robótica.",
      },
      {
        title: "Cáncer de vejiga",
        desc: "Abordaje oncológico mínimamente invasivo y preservación funcional.",
      },
      {
        title: "Cáncer renal",
        desc: "Nefrectomía parcial o radical con mínima invasión.",
      },
      {
        title: "Hiperplasia prostática (HBP)",
        desc: "Tratamiento moderno de síntomas urinarios con láser o vapor.",
      },
      {
        title: "Litiasis urinaria",
        desc: "Manejo avanzado de cálculos con mínima invasión.",
      },
      {
        title: "Incontinencia urinaria",
        desc: "Tratamiento personalizado para hombres y mujeres.",
      },
      {
        title: "Disfunción eréctil",
        desc: "Manejo integral basado en evidencia científica.",
      },
      {
        title: "Infecciones urinarias",
        desc: "Atención oportuna y prevención de recurrencias.",
      },
    ],
    []
  );

  const faqs = [
    {
      q: "¿Cómo agendo una cita?",
      a: "Puedes agendar desde esta página, por WhatsApp o Doctoralia.",
      highlight: true,
    },
    {
      q: "¿Qué incluye la consulta?",
      a: "Historia clínica completa, exploración física, diagnóstico y tratamiento.",
    },
    {
      q: "¿Cuándo está indicada la cirugía robótica?",
      a: "En cáncer de próstata, riñón o vejiga donde se busca mínima invasión.",
    },
    {
      q: "¿Acepta seguros médicos?",
      a: "Sí, se atienden pacientes privados y con aseguradoras (verifica cobertura).",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* === HERO === */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-700 to-teal-600" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-6xl px-4 py-20"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Cirugía Robótica Avanzada en León, Guanajuato 🚀
              </h1>
              <p className="mt-4 text-lg text-slate-200">
                Atención integral y humanizada con tecnología avanzada.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  className="bg-white text-slate-900"
                  onClick={() => scrollToId("servicios")}
                >
                  Ver servicios
                </Button>
                <a
                  href={waLink(
                    "524776390492",
                    "Hola Dr. Quiroz, quiero agendar una consulta."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="bg-teal-600 text-white hover:bg-teal-700">
                    Agenda por WhatsApp
                  </Button>
                </a>
                <a href={LINKS.doctoralia} target="_blank" rel="noreferrer">
                  <Button className="bg-[#009688] text-white hover:bg-[#00796b]">
                    Agenda por Doctoralia
                  </Button>
                </a>
              </div>
              <div className="mt-6 text-xs text-slate-300">
                Cédulas: C.P. 8860892 (U. La Salle) • C.E. 12465195 (UNAM) •
                Certificado por CONAMEU
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-72 md:h-80 rounded-2xl overflow-hidden relative shadow-lg"
            >
              <NextImage
                src="/foto-dr-alejandro.jpg"
                alt="Dr. Alejandro Quiroz"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* === SERVICIOS === */}
      <section id="servicios" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Servicios
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card key={s.title}>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* === SOBRE MÍ === */}
      <section id="sobre-mi" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Sobre mí</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              El Dr. Alejandro Quiroz Compeán es urólogo con alta especialidad
              en Urología Oncológica y posgrado en Cirugía Robótica por el
              Hospital Israelita Albert Einstein. Formado en el Instituto
              Nacional de Nutrición y el Instituto Nacional de Cancerología.
            </p>
          </motion.div>
          <Card>
            <h3 className="font-semibold">Credenciales</h3>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-slate-700">
              <li>C.P. 8860892 (U. La Salle)</li>
              <li>C.E. 12465195 (UNAM)</li>
              <li>Certificado por CONAMEU</li>
              <li>
                Urología: Instituto Nacional de Ciencias Médicas y Nutrición
                Salvador Zubirán
              </li>
              <li>
                Urología Oncológica: Instituto Nacional de Cancerología
              </li>
              <li>Cirugía Robótica: Hospital Albert Einstein, Brasil</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* === OPINIONES === */}
      <section id="opiniones" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Opiniones de pacientes
        </motion.h2>
        <a href={LINKS.doctoralia} target="_blank" rel="noreferrer">
          <Button className="bg-teal-700 text-white hover:bg-teal-800">
            Ver en Doctoralia
          </Button>
        </a>
      </section>

      {/* === FAQ === */}
      <section id="faq" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-5">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} highlight={f.highlight}>
              {f.a}
            </FAQItem>
          ))}
        </div>
      </section>

      {/* === UBICACIÓN === */}
      <section id="ubicacion" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Ubicación y contacto
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-5">
          {Object.keys(MAPS).map((key) => (
            <Card key={key}>
              <h3 className="font-semibold capitalize">{key}</h3>
              <a href={MAPS[key]} target="_blank" rel="noreferrer">
                <Button className="mt-3 bg-slate-900 text-white">
                  Abrir en Maps
                </Button>
              </a>
              <a
                href={waLink(
                  WHATSAPP[key],
                  `Hola, quiero agendar en ${key}`
                )}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="mt-2 bg-teal-700 text-white">
                  WhatsApp
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-slate-900 text-slate-200 py-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-semibold"
        >
          © {new Date().getFullYear()} Urología Robótica León
        </motion.p>
        <p className="text-slate-400 text-sm mt-2">
          Dr. Alejandro Quiroz Compeán • Atención integral con tecnología
          avanzada
        </p>
      </footer>
    </div>
  );
}
