'use client';

import React, { useMemo, useState } from "react";
import NextImage from "next/image";

// === Utility: smooth scroll ===
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// === Minimal UI atoms ===
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = "", children, ...props }) => (
  <button
    className={
      "px-5 py-2 rounded-2xl font-medium shadow-sm transition hover:shadow-md active:scale-[0.99] " +
      className
    }
    {...props}
  >
    {children}
  </button>
);

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", children, ...props }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm " + className} {...props}>
    {children}
  </div>
);

// === FAQ item (colapsable) ===
function FAQItem({ q, children, highlight }: { q: string; children: React.ReactNode; highlight?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border p-5 shadow-sm ${highlight ? 'bg-teal-50 border-teal-300' : 'bg-white border-slate-200'}`}>
      <button onClick={() => setOpen(!open)} className="w-full text-left font-medium flex items-center justify-between">
        <span>{q}</span>
        <span className="text-slate-500">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="mt-2 text-sm text-slate-700">{children}</div>}
    </div>
  );
}

// === Links & constants ===
const LINKS = {
  instagram: "https://www.instagram.com/urologo.alejandroquiroz/",
  facebook: "https://www.facebook.com/DrQuirozUrologoLeon",
  doctoralia: "https://www.doctoralia.com.mx/alejandro-quiroz-compean/urologo/leon",
  linkedin: "https://www.linkedin.com/in/alejandro-quiroz-compean-9955ba61/?originalSubdomain=mx",
  researchgate: "https://www.researchgate.net/profile/Alejandro-Quiroz-Compean",
};

const MAPS = {
  angeles:
    "https://www.google.com/maps/search/?api=1&query=Hospital+%C3%81ngeles+Le%C3%B3n+Torre+de+Especialidades+II+Consultorio+425+Av.+Cerro+Gordo+3110+Le%C3%B3n",
  altagracia:
    "https://www.google.com/maps/search/?api=1&query=Hospital+Christus+Muguerza+Altagracia+Consultorio+724+Le%C3%B3n",
  miyad:
    "https://www.google.com/maps/search/?api=1&query=Hospital+MIYAD+Blvd.+Vicente+Valtierra+4502+Le%C3%B3n",
};

// === WhatsApp targets ===
const WHATSAPP = {
  altagracia: "5214776390492",
  angeles: "5214775617482",
  miyad: "5214774042375",
};

function waLink(phone: string, msg: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

const NAV = [
  { id: "servicios", label: "Servicios" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "opiniones", label: "Opiniones de pacientes" },
  { id: "faq", label: "Preguntas frecuentes" },
  { id: "ubicacion", label: "Ubicación" },
];

export default function UrologiaRoboticaLeon() {
  const [askClinicOpen, setAskClinicOpen] = useState(false);

  const services = useMemo(
    () => [
      { title: "Cirugía robótica", desc: "Procedimientos urológicos avanzados con visión 3D y precisión milimétrica." },
      { title: "Cáncer de próstata", desc: "Diagnóstico y tratamiento integral, incluida prostatectomía robótica." },
      { title: "Cáncer de vejiga", desc: "Abordaje oncológico mínimamente invasivo y preservación funcional." },
      { title: "Cáncer renal", desc: "Nefrectomía parcial o radical con mínima invasión." },
      { title: "Hiperplasia prostática obstructiva (HBP)", desc: "Manejo de síntomas urinarios con opciones médicas y quirúrgicas modernas." },
      { title: "Litiasis (piedras urinarias)", desc: "Tratamiento de cálculos renales y ureterales con mínima invasión." },
      { title: "Incontinencia urinaria", desc: "Tratamiento personalizado para mejorar la calidad de vida." },
      { title: "Infección de vías urinarias", desc: "Atención oportuna y prevención de recurrencias." },
      { title: "Infecciones de transmisión sexual", desc: "Diagnóstico confidencial, tratamiento y seguimiento." },
      { title: "Disfunción eréctil", desc: "Alternativas terapéuticas basadas en evidencia." },
      { title: "Consulta externa", desc: "Valoración clínica, interpretación de estudios y plan individualizado." },
      { title: "Atención de urgencias", desc: "Disponibilidad para eventos urológicos agudos." },
    ],
    []
  );

  const faqs = [
    { q: "¿Cómo agendo una cita?", a: "Desde esta página: botón ‘Agenda tu cita’. Elija el consultorio y será dirigido a WhatsApp con un mensaje prellenado.", highlight: true },
    { q: "¿Qué incluye la consulta?", a: "Interrogatorio, exploración física, diagnóstico de presunción y receta acorde al caso." },
    { q: "¿Cuándo está indicada la cirugía robótica?", a: "En cáncer de próstata, vejiga o riñón, donde se busca mayor precisión y menor invasión." },
    { q: "¿Diferencias entre cirugía robótica y laparoscópica?", a: "La robótica ofrece visión 3D, mayor precisión y ergonomía; menos sangrado y recuperación rápida." },
    { q: "¿Atienden urgencias urológicas?", a: "Sí, tenemos atención de urgencias." },
    { q: "¿Qué estudios llevo a la primera consulta?", a: "Laboratorios recientes, estudios de imagen y reportes previos." },
    { q: "¿Acepta seguros médicos?", a: "Se atienden pacientes privados y con aseguradoras (confirmar cobertura)." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Ir al inicio"
              className="relative h-16 w-48 md:h-20 md:w-56"
              style={{ lineHeight: 0 }}
            >
              <NextImage
                src="/logo-aq.png"
                alt="Logo del Dr. Alejandro Quiroz Compeán"
                fill
                sizes="(min-width: 768px) 224px, 192px"
                priority
                className="object-contain"
              />
            </button>

            <div className="leading-tight">
              <p className="font-semibold whitespace-nowrap">Dr. Alejandro Quiroz Compeán</p>
              <p className="hidden sm:block text-xs md:text-sm text-slate-500 whitespace-nowrap">
                Urología Oncológica • Cirugía Robótica
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollToId(n.id)}
                className="text-[13px] md:text-sm text-slate-600 hover:text-slate-900"
              >
                {n.label}
              </button>
            ))}
            <Button className="ml-2 bg-teal-700 text-white hover:bg-teal-800" onClick={() => setAskClinicOpen(true)}>
              Agenda tu cita
            </Button>
          </nav>

          <div className="md:hidden">
            <Button className="bg-teal-700 text-white" onClick={() => setAskClinicOpen(true)}>Cita</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-700 to-teal-600"></div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Cirugía Robótica Avanzada en León, Guanajuato 🚀
              </h1>

              <p className="mt-4 text-slate-200 text-lg">
                Atención integral y humanizada con tecnología avanzada.
              </p>

              {/* BOTONES PRINCIPALES */}
              <div className="mt-6 flex flex-wrap gap-3">
                {/* Ver servicios */}
                <Button
                  className="bg-white text-slate-900"
                  onClick={() => scrollToId("servicios")}
                >
                  Ver servicios
                </Button>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/524776390492?text=Hola%20Dr.%20Quiroz%2C%20quiero%20agendar%20una%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-teal-600 text-white hover:bg-teal-700">
                    Agenda por WhatsApp
                  </Button>
                </a>

                {/* Doctoralia (con ícono animado) */}
                <a
                  href={LINKS.doctoralia}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#009688] text-white hover:bg-[#00796b] flex items-center gap-2 group transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-5 h-5 transform transition-transform duration-500 group-hover:rotate-[20deg]"
                    >
                      <path d="M372.3 307.7c-12.3-4.5-25.2-7.4-38.5-8.5l-36.7-3.1c-3.2-.3-5.8-2.8-6.1-6.1l-3.1-36.7c-1.1-13.3-4-26.3-8.5-38.5-3.6-10-9.7-19.1-17.7-27.1-21.9-21.9-55.6-25.5-81.6-8.5-30.2 19.6-39.3 59.8-19.7 90l1.5 2.3c2.1 3.2 2.1 7.3 0 10.5l-1.5 2.3c-19.6 30.2-10.5 70.4 19.7 90 26 17 59.7 13.4 81.6-8.5 8-8 14.1-17.1 17.7-27.1 4.5-12.3 7.4-25.2 8.5-38.5l3.1-36.7c.3-3.2 2.8-5.8 6.1-6.1l36.7-3.1c13.3-1.1 26.3-4 38.5-8.5 10-3.6 19.1-9.7 27.1-17.7 21.9-21.9 25.5-55.6 8.5-81.6-19.6-30.2-59.8-39.3-90-19.7l-2.3 1.5c-3.2 2.1-7.3 2.1-10.5 0l-2.3-1.5c-30.2-19.6-70.4-10.5-90 19.7-17 26-13.4 59.7 8.5 81.6 8 8 17.1 14.1 27.1 17.7z" />
                    </svg>
                    Agenda por Doctoralia
                  </Button>
                </a>
              </div>

              {/* Social */}
              <div className="mt-4 flex items-center gap-3">
                <a href={LINKS.instagram} target="_blank" rel="noreferrer">
                  <Button className="bg-white text-slate-900">Instagram</Button>
                </a>
                <a href={LINKS.facebook} target="_blank" rel="noreferrer">
                  <Button className="bg-white text-slate-900">Facebook</Button>
                </a>
              </div>

              <div className="mt-6 text-xs text-slate-300">
                Cédulas: C.P. 8860892 (U. La Salle) • C.E. 12465195 (UNAM) • Certificado por CONAMEU
              </div>
            </div>

            {/* Foto derecha */}
            <div className="h-72 md:h-80 rounded-2xl overflow-hidden relative">
              <NextImage
                src="/foto-dr-alejandro.jpg"
                alt="Foto del Dr. Alejandro Quiroz Compeán"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ... resto del archivo igual (servicios, sobre mí, opiniones, FAQ, ubicación, footer, popup) */}
