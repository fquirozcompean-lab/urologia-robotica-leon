'use client';

import React, { useMemo, useState } from "react";
import NextImage from "next/image";
import { motion } from "framer-motion";

// === Scroll suave ===
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// === Animaciones base ===
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// === Botón sin conflicto de tipos ===
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

const Button = ({ className = "", children, ...props }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {...(props as any)} // ← evita el conflicto MotionProps, tipo ignorado de forma segura
    className={
      "px-5 py-2 rounded-2xl font-medium shadow-sm transition-all hover:shadow-md active:scale-[0.98] " +
      className
    }
  >
    {children}
  </motion.button>
);


// === Tarjeta sin conflicto de tipos ===
type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className = "", children, ...props }: CardProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {...(props as any)} // ← evita conflicto entre MotionProps y eventos HTML
    className={
      "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg transition " +
      className
    }
  >
    {children}
  </motion.div>
);

// === FAQ ===
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

// === Datos ===
const LINKS = {
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
  const sections = [
    { id: "servicios", label: "Servicios" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "faq", label: "Preguntas" },
    { id: "ubicacion", label: "Contacto" },
  ];

  const services = useMemo(
    () => [
      { title: "Cirugía robótica", desc: "Procedimientos urológicos avanzados con visión 3D y precisión milimétrica." },
      { title: "Cáncer de próstata", desc: "Diagnóstico y tratamiento integral, incluida prostatectomía robótica." },
      { title: "Cáncer de vejiga", desc: "Abordaje oncológico mínimamente invasivo y preservación funcional." },
      { title: "Cáncer renal", desc: "Nefrectomía parcial o radical con mínima invasión." },
      { title: "Hiperplasia prostática (HBP)", desc: "Tratamiento moderno de síntomas urinarios con láser o vapor." },
      { title: "Litiasis urinaria", desc: "Manejo avanzado de cálculos con mínima invasión." },
      { title: "Incontinencia urinaria", desc: "Tratamiento personalizado para hombres y mujeres." },
      { title: "Disfunción eréctil", desc: "Manejo integral basado en evidencia científica." },
      { title: "Infecciones urinarias", desc: "Atención oportuna y prevención de recurrencias." },
    ],
    []
  );

  const faqs = [
    { q: "¿Cómo agendo una cita?", a: "Puedes agendar desde esta página, por WhatsApp o Doctoralia.", highlight: true },
    { q: "¿Qué incluye la consulta?", a: "Historia clínica completa, exploración física, diagnóstico y tratamiento." },
    { q: "¿Cuándo está indicada la cirugía robótica?", a: "En cáncer de próstata, riñón o vejiga donde se busca mínima invasión." },
    { q: "¿Acepta seguros médicos?", a: "Sí, se atienden pacientes privados y con aseguradoras (verifica cobertura)." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* === NAVBAR === */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-6xl flex justify-between items-center px-4 py-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-semibold text-slate-800 hover:text-teal-600 transition"
          >
            Urología Robótica León
          </button>
          <nav className="flex gap-4 text-sm">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className="text-slate-600 hover:text-teal-600 transition"
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-20">
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
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Cirugía Robótica Avanzada en León, Guanajuato 🚀
                </h2>
                <p className="mt-4 text-lg text-slate-200">
                  Atención integral y humanizada con tecnología avanzada.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button className="bg-white text-slate-900" onClick={() => scrollToId("servicios")}>
                    Ver servicios
                  </Button>
                  <a href={waLink("524776390492", "Hola Dr. Quiroz, quiero agendar una consulta.")} target="_blank" rel="noreferrer">
                    <Button className="bg-teal-600 text-white hover:bg-teal-700">Agenda por WhatsApp</Button>
                  </a>
                  <a href={LINKS.doctoralia} target="_blank" rel="noreferrer">
                    <Button className="bg-[#009688] text-white hover:bg-[#00796b]">Doctoralia</Button>
                  </a>
                </div>
                <div className="mt-6 text-xs text-slate-300">
                  C.P. 8860892 • C.E. 12465195 • Certificado por CONAMEU
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-72 md:h-80 rounded-2xl overflow-hidden relative shadow-lg"
              >
                <NextImage src="/foto-dr-alejandro.jpg" alt="Dr. Alejandro Quiroz" fill priority className="object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* === SERVICIOS === */}
        <section id="servicios" className="mx-auto max-w-6xl px-4 py-16">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold mb-4">
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
      <h2 className="text-3xl font-bold text-slate-900">Sobre mí</h2>

      <p className="mt-4 text-slate-700 leading-relaxed">
        Soy el <strong>Dr. Alejandro Quiroz Compeán</strong>, urólogo con alta especialidad en
        <strong> Urología Oncológica</strong> y <strong>Cirugía Robótica</strong>. Me formé en el
        <strong> Instituto Nacional de Ciencias Médicas y Nutrición “Salvador Zubirán”</strong> y en el
        <strong> Instituto Nacional de Cancerología</strong>, dos de los hospitales más reconocidos de México.
        Posteriormente, realicé un <strong>posgrado en Cirugía Robótica</strong> en el
        <strong> Hospital Israelita Albert Einstein</strong>, en São Paulo, Brasil, una de las instituciones más avanzadas de América Latina.
      </p>

      <p className="mt-4 text-slate-700 leading-relaxed">
        Mi vocación es ofrecer una atención médica <strong>humana, cercana y basada en la mejor evidencia científica</strong>.
        Creo profundamente en escuchar, acompañar y explicar con claridad cada paso del proceso,
        porque sé que detrás de cada diagnóstico hay una persona, una historia y una familia.
      </p>

      <p className="mt-4 text-slate-700 leading-relaxed">
        Me dedico al tratamiento integral del <strong>cáncer de próstata, riñón, vejiga y testículo</strong>,
        así como a enfermedades urológicas generales. Además, soy
        <strong> profesor y titular de la residencia de Urología en el Hospital General de León</strong>,
        donde tengo el privilegio de formar a las nuevas generaciones de urólogos comprometidos con su labor.
      </p>

      <p className="mt-4 text-slate-700 leading-relaxed">
        Mi objetivo es brindar a cada paciente una atención personalizada, con tecnología de vanguardia
        y con la misma empatía con la que me gustaría que atendieran a mi propia familia.
      </p>
    </motion.div>

    <Card className="shadow-lg rounded-2xl p-6 bg-slate-50 border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">Formación y Certificaciones</h3>
      <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
        <li>
          <strong>Médico Cirujano:</strong> Universidad La Salle, CDMX — Cédula Prof. 8860892
        </li>
        <li>
          <strong>Especialidad en Urología:</strong> Instituto Nacional de Ciencias Médicas y Nutrición “Salvador Zubirán” — UNAM — Cédula Esp. 12465195
        </li>
        <li>
          <strong>Alta Especialidad en Urología Oncológica:</strong> Instituto Nacional de Cancerología (INCan)
        </li>
        <li>
          <strong>Posgrado en Cirugía Robótica:</strong> Hospital Israelita Albert Einstein, São Paulo, Brasil
        </li>
        <li>
          <strong>Certificación Nacional:</strong> Consejo Nacional Mexicano de Urología (CONAMEU)
        </li>
        <li>
          <strong>Profesor Titular:</strong> Programa de Residencia en Urología del Hospital General de León, avalado por el Tec de Monterrey
        </li>
      </ul>

      <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-600 italic">
        <p>“Cirugía urológica de alta precisión con enfoque humano y tecnología de vanguardia.”</p>
      </div>
    </Card>
  </div>
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
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold mb-4">
            Ubicación y contacto
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-5">
            {Object.keys(MAPS).map((key) => (
              <Card key={key}>
                <h3 className="font-semibold capitalize">{key}</h3>
                <a href={MAPS[key]} target="_blank" rel="noreferrer">
                  <Button className="mt-3 bg-slate-900 text-white">Abrir en Maps</Button>
                </a>
                <a href={waLink(WHATSAPP[key], `Hola, quiero agendar en ${key}`)} target="_blank" rel="noreferrer">
                  <Button className="mt-2 bg-teal-700 text-white">WhatsApp</Button>
                </a>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* === FOOTER === */}
      <footer className="bg-slate-900 text-slate-200 py-8 text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="font-semibold">
          © {new Date().getFullYear()} Urología Robótica León
        </motion.p>
        <p className="text-slate-400 text-sm mt-2">
          Dr. Alejandro Quiroz Compeán • Atención integral con tecnología avanzada
        </p>
      </footer>
    </div>
  );
}
