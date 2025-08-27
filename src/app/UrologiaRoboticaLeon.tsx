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
  // Si tienes el link exacto de Google Business, puedes agregarlo aquí si lo necesitas:
  // googleBusiness: "https://g.page/xxxx",
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
      { title: "Atención de urgencias 24/7", desc: "Disponibilidad para eventos urológicos agudos." },
    ],
    []
  );

  const faqs = [
    { q: "¿Cómo agendo una cita?", a: "Desde esta página: botón ‘Agenda tu cita’. Elija el consultorio y será dirigido a WhatsApp con un mensaje prellenado.", highlight: true },
    { q: "¿Qué incluye la consulta?", a: "Interrogatorio, exploración física, diagnóstico de presunción y receta acorde al caso." },
    { q: "¿Cuándo está indicada la cirugía robótica?", a: "En cáncer de próstata, vejiga o riñón, donde se busca mayor precisión y menor invasión." },
    { q: "¿Diferencias entre cirugía robótica y laparoscópica?", a: "La robótica ofrece visión 3D, mayor precisión y ergonomía; menos sangrado y recuperación rápida." },
    { q: "¿Atienden urgencias urológicas?", a: "Sí, hay disponibilidad 24/7. Use el botón ‘Agenda tu cita’." },
    { q: "¿Qué estudios llevo a la primera consulta?", a: "Laboratorios recientes, estudios de imagen y reportes previos." },
    { q: "¿Acepta seguros médicos?", a: "Se atienden pacientes privados y con aseguradoras (confirmar cobertura)." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2 md:gap-3 shrink-0">
  {/* Logo clicable */}
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

  {/* Texto */}
  <div className="leading-tight">
    <p className="font-semibold whitespace-nowrap">Dr. Alejandro Quiroz Compeán</p>
    {/* En móvil ocultamos la segunda línea para liberar espacio */}
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

          {/* Mobile */}
          <div className="md:hidden">
            <Button className="bg-teal-700 text-white" onClick={() => setAskClinicOpen(true)}>Cita</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
{/* Hero */}
<section className="relative">
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-800"></div>
  <div className="relative mx-auto max-w-6xl px-4 py-20 text-white">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Columna izquierda: título, CTA, redes, cédulas */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">Urología Robótica en León</h1>
        <p className="mt-4 text-slate-200 text-lg">Atención integral y humanizada con tecnología avanzada.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button className="bg-white text-slate-900" onClick={() => scrollToId("servicios")}>Ver servicios</Button>
          <Button className="bg-teal-600 text-white hover:bg-teal-700" onClick={() => setAskClinicOpen(true)}>Agenda por WhatsApp</Button>
        </div>
        {/* Social buttons */}
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

      {/* Columna derecha: foto */}
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


      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold">Servicios</h2>
        <p className="text-slate-600 mt-2">Diagnóstico y tratamiento especializado en urología oncológica, funcional y de mínima invasión.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card key={s.title}>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="bg-white py-16 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Sobre mí</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              El Dr. Alejandro Quiroz Compeán es urólogo con alta especialidad en Urología Oncológica y postgrado en Cirugía Robótica.
              Formación en el Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán; Urología Oncológica en el INCAN; Cirugía Robótica en el Hospital Israelita Albert Einstein. Certificado por CONAMEU.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={LINKS.doctoralia} target="_blank" rel="noreferrer" className="text-teal-700 underline">Perfil en Doctoralia</a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-teal-700 underline">LinkedIn</a>
              <a href={LINKS.researchgate} target="_blank" rel="noreferrer" className="text-teal-700 underline">ResearchGate</a>
            </div>
          </div>
          <Card className="bg-slate-50">
            <h3 className="font-semibold">Credenciales</h3>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-slate-700">
              <li>C.P. 8860892 (U. La Salle)</li>
              <li>C.E. 12465195 (UNAM)</li>
              <li>Certificado por CONAMEU</li>
              <li>Urología: INCMNSZ</li>
              <li>Urología Oncológica: INCAN</li>
              <li>Cirugía Robótica: Hospital Israelita Albert Einstein</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Opiniones */}
      <section id="opiniones" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold">Opiniones de pacientes</h2>
        <p className="mt-2 text-slate-600">Mostramos reseñas verificadas de Doctoralia para mayor objetividad.</p>
        <div className="mt-6">
          <a href={LINKS.doctoralia} target="_blank" rel="noreferrer">
            <Button className="bg-teal-700 text-white hover:bg-teal-800">Ver en Doctoralia</Button>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-16 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} highlight={f.highlight}>
                {f.a}
              </FAQItem>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section id="ubicacion" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold">Ubicación y contacto</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          <Card>
            <h3 className="font-semibold">Hospital Ángeles León</h3>
            <p className="text-sm text-slate-600 mt-1">
              Torre de Especialidades II, Consultorio 425<br />Av. Cerro Gordo #3110
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={MAPS.angeles} target="_blank" rel="noreferrer">
                <Button className="bg-slate-900 text-white">Abrir en Maps</Button>
              </a>
              <a href={waLink(WHATSAPP.angeles, "Hola, quiero agendar en Hospital Ángeles León")} target="_blank" rel="noreferrer">
                <Button className="bg-teal-700 text-white">WhatsApp</Button>
              </a>
            </div>
          </Card>
          <Card>
            <h3 className="font-semibold">Christus Muguerza Altagracia</h3>
            <p className="text-sm text-slate-600 mt-1">
              Consultorio 724 • Blvd. Jorge Verbits Campero 761<br />Fracc. Cañada Alfaro, 37238
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={MAPS.altagracia} target="_blank" rel="noreferrer">
                <Button className="bg-slate-900 text-white">Abrir en Maps</Button>
              </a>
              <a href={waLink(WHATSAPP.altagracia, "Hola, quiero agendar en Christus Muguerza Altagracia")} target="_blank" rel="noreferrer">
                <Button className="bg-teal-700 text-white">WhatsApp</Button>
              </a>
            </div>
          </Card>
          <Card>
            <h3 className="font-semibold">Hospital MIYAD</h3>
            <p className="text-sm text-slate-600 mt-1">
              Consultorio 12 • Blvd. Vicente Valtierra 4502<br />San Pedro de los Hernández, 37200
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href={MAPS.miyad} target="_blank" rel="noreferrer">
                <Button className="bg-slate-900 text-white">Abrir en Maps</Button>
              </a>
              <a href={waLink(WHATSAPP.miyad, "Hola, quiero agendar en Hospital MIYAD")} target="_blank" rel="noreferrer">
                <Button className="bg-teal-700 text-white">WhatsApp</Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-semibold">Dr. Alejandro Quiroz Compeán</p>
            <p className="text-sm text-slate-400">Atención integral y humanizada con tecnología avanzada</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            <a href={LINKS.facebook} target="_blank" rel="noreferrer" className="hover:underline">Facebook</a>
            <a href={LINKS.doctoralia} target="_blank" rel="noreferrer" className="hover:underline">Doctoralia</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            <a href={LINKS.researchgate} target="_blank" rel="noreferrer" className="hover:underline">ResearchGate</a>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Urología Robótica León</div>
      </footer>

      {/* === Popup: elegir consultorio para WhatsApp === */}
      {askClinicOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold">Agenda por WhatsApp</h3>
            <p className="text-sm text-slate-600 mt-1">Elija el consultorio donde desea agendar:</p>
            <div className="mt-4 grid gap-3">
              <a href={waLink(WHATSAPP.angeles, "Hola, quiero agendar en Hospital Ángeles León")} target="_blank" rel="noreferrer">
                <Button className="w-full bg-slate-900 text-white">Hospital Ángeles León</Button>
              </a>
              <a href={waLink(WHATSAPP.altagracia, "Hola, quiero agendar en Christus Muguerza Altagracia")} target="_blank" rel="noreferrer">
                <Button className="w-full bg-teal-700 text-white">Christus Muguerza Altagracia</Button>
              </a>
              <a href={waLink(WHATSAPP.miyad, "Hola, quiero agendar en Hospital MIYAD")} target="_blank" rel="noreferrer">
                <Button className="w-full bg-slate-700 text-white">Hospital MIYAD</Button>
              </a>
            </div>
            <div className="mt-4 flex justify-end">
              <Button className="bg-white border border-slate-300" onClick={() => setAskClinicOpen(false)}>Cerrar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
