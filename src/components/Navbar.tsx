"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import WAButtonConSelector from "@/components/WAButtonConSelector";

const WA_MENSAJE = "Hola Dr. Quiroz, quiero agendar una valoración.";

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Mega-menú: refleja las 4 categorías del home (solo páginas con card — las
// sub-páginas/satélites se acceden desde su hub, no desde el navbar).
const ESPECIALIDADES: { categoria: string; items: { label: string; href: string }[] }[] = [
  {
    categoria: "Oncología Urológica",
    items: [
      { label: "Cáncer de Próstata", href: "/cancer-prostata" },
      { label: "Cáncer Renal", href: "/cancer-renal" },
      { label: "Cáncer de Vejiga", href: "/cancer-vejiga" },
      { label: "Cáncer Testicular", href: "/cancer-testicular" },
    ],
  },
  {
    categoria: "Próstata",
    items: [
      { label: "¿Qué es la Próstata?", href: "/que-es-la-prostata" },
      { label: "Crecimiento / HPB", href: "/hiperplasia-prostatica-benigna" },
      { label: "Prostatitis", href: "/prostatitis" },
      { label: "HoLEP: Cirugía Láser", href: "/holep-cirugia-laser" },
      { label: "Rezum: Vapor de Agua", href: "/rezum-prostata" },
      { label: "Medicamentos para Próstata", href: "/medicamentos-prostata" },
    ],
  },
  {
    categoria: "Salud Sexual y General",
    items: [
      { label: "Disfunción Eréctil", href: "/disfuncion-erectil" },
      { label: "VPH en Hombres", href: "/vph-en-hombres" },
      { label: "Verrugas Genitales", href: "/verrugas-genitales" },
      { label: "Infección Urinaria", href: "/infeccion-urinaria" },
      { label: "Vasectomía sin Bisturí", href: "/vasectomia" },
      { label: "Balanitis", href: "/balanitis" },
    ],
  },
  {
    categoria: "Riñón y Vías Urinarias",
    items: [
      { label: "¿Qué es el Riñón?", href: "/que-es-el-rinon" },
      { label: "Dolor de Riñón", href: "/dolor-de-rinon" },
      { label: "Cálculos Renales", href: "/calculos-renales" },
      { label: "Sangre en la Orina (Hematuria)", href: "/hematuria" },
    ],
  },
];

export default function Navbar() {
  const [espOpen, setEspOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const espRef = useRef<HTMLDivElement>(null);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setEspOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Dropdown desktop: cerrar con clic fuera o Escape
  useEffect(() => {
    if (!espOpen) return;
    const onClick = (e: MouseEvent) => {
      if (espRef.current && !espRef.current.contains(e.target as Node)) setEspOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEspOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [espOpen]);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-petroleo/95 backdrop-blur-sm border-b border-acero/20">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-editorial font-sans text-base md:text-lg hover:text-quirurgico transition-colors leading-tight"
        >
          <span className="hidden sm:inline">Dr. Alejandro Quiroz Compeán</span>
          <span className="sm:hidden">Dr. Quiroz</span>
        </Link>

        {/* Nav links — desktop */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6 text-sm text-editorial/75 font-sans">
          {/* Dropdown Especialidades */}
          <div ref={espRef} className="relative">
            <button
              type="button"
              onClick={() => setEspOpen((o) => !o)}
              aria-expanded={espOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 hover:text-editorial transition-colors"
            >
              Especialidades
              <ChevronDown
                size={14}
                className={`transition-transform ${espOpen ? "rotate-180" : ""}`}
              />
            </button>
            {espOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(92vw,56rem)] bg-petroleo border border-acero/30 rounded-xl shadow-2xl p-6 grid grid-cols-4 gap-6">
                {ESPECIALIDADES.map((cat) => (
                  <div key={cat.categoria}>
                    <p className="text-dorado text-xs font-bold uppercase tracking-wider mb-3">
                      {cat.categoria}
                    </p>
                    <ul className="space-y-2">
                      {cat.items.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            className="block text-sm text-editorial/75 hover:text-editorial transition-colors"
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/#hospitales" className="hover:text-editorial transition-colors">
            Hospitales
          </Link>
          <Link href="/sobre-mi" className="hover:text-editorial transition-colors">
            Sobre el Dr.
          </Link>
          <Link
            href="/segunda-opinion-oncologica"
            className="text-dorado font-semibold hover:text-dorado/80 transition-colors"
          >
            Segunda Opinión
          </Link>
          <Link href="/agendar" className="hover:text-editorial transition-colors">
            Agendar en línea
          </Link>
          <WAButtonConSelector
            mensaje={WA_MENSAJE}
            motivo="navbar-agendar"
            variant="custom"
            className="inline-flex items-center gap-2 bg-whatsapp text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-whatsapp/85 transition-colors shadow-sm"
          >
            {WA_ICON}
            Agendar valoración
          </WAButtonConSelector>
        </nav>

        {/* Mobile: botón WA + hamburguesa */}
        <div className="md:hidden flex items-center gap-2">
          <WAButtonConSelector
            mensaje={WA_MENSAJE}
            motivo="navbar-agendar-mobile"
            variant="custom"
            className="inline-flex items-center gap-1.5 bg-whatsapp text-white px-3 py-2 rounded-lg font-bold text-xs hover:bg-whatsapp/85 transition-colors"
          >
            {WA_ICON}
            Agendar
          </WAButtonConSelector>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            className="text-editorial p-1 hover:text-quirurgico transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Panel de menú móvil */}
      {mobileOpen && (
        <div className="md:hidden bg-petroleo border-t border-acero/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav aria-label="Navegación móvil" className="px-4 py-5 space-y-5">
            {ESPECIALIDADES.map((cat) => (
              <div key={cat.categoria}>
                <p className="text-dorado text-xs font-bold uppercase tracking-wider mb-2">
                  {cat.categoria}
                </p>
                <ul className="space-y-1 pl-1">
                  {cat.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="block text-sm text-editorial/80 py-1.5 hover:text-editorial transition-colors"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="border-t border-acero/20 pt-4 space-y-1">
              <Link
                href="/segunda-opinion-oncologica"
                className="block text-sm text-dorado font-semibold py-1.5 hover:text-dorado/80 transition-colors"
              >
                Segunda Opinión Oncológica
              </Link>
              <Link href="/#hospitales" className="block text-sm text-editorial/80 py-1.5 hover:text-editorial transition-colors">
                Hospitales
              </Link>
              <Link href="/sobre-mi" className="block text-sm text-editorial/80 py-1.5 hover:text-editorial transition-colors">
                Sobre el Dr.
              </Link>
              <Link href="/agendar" className="block text-sm text-editorial/80 py-1.5 hover:text-editorial transition-colors">
                Agendar cita en línea
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
