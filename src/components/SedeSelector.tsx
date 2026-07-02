"use client";

import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { trackWhatsApp } from "@/lib/analytics";
import { SEDES, waUrl } from "@/lib/contactos";

interface SedeSelectorProps {
  abierto: boolean;
  onCerrar: () => void;
  mensaje: string;
  motivo: string;
}

export default function SedeSelector({
  abierto,
  onCerrar,
  mensaje,
  motivo,
}: SedeSelectorProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  const elegirSede = useCallback(
    (sedeId: "angeles" | "muguerza") => {
      const sede = SEDES[sedeId];
      trackWhatsApp(motivo, sedeId);
      window.open(waUrl(sede.whatsapp, mensaje), "_blank", "noopener,noreferrer");
      onCerrar();
    },
    [mensaje, motivo, onCerrar]
  );

  // Escape para cerrar + focus trap básico
  useEffect(() => {
    if (!abierto) return;

    const dialog = dialogRef.current;
    dialog?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCerrar();
        return;
      }
      if (e.key === "Tab" && dialog) {
        const focusables = dialog.querySelectorAll<HTMLElement>(
          'button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [abierto, onCerrar]);

  if (!abierto || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-petroleo/60 backdrop-blur-sm"
      onClick={onCerrar}
      aria-hidden="false"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sede-selector-titulo"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 outline-none"
      >
        <div className="flex items-start justify-between mb-6">
          <h2
            id="sede-selector-titulo"
            className="font-sans font-bold text-xl text-petroleo pr-4"
          >
            ¿En qué sede te gustaría agendar?
          </h2>
          <button
            type="button"
            onClick={onCerrar}
            aria-label="Cerrar"
            className="text-gris-profundo hover:text-petroleo transition-colors flex-shrink-0 p-1"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => elegirSede("angeles")}
            className="w-full text-left border-2 border-gris-premium/25 rounded-xl p-5 hover:border-acero hover:shadow-md transition-all cursor-pointer group"
          >
            <span className="block font-sans font-bold text-petroleo group-hover:text-acero transition-colors">
              {SEDES.angeles.nombre}
            </span>
            <span className="block font-serif text-sm text-gris-profundo mt-1">
              {SEDES.angeles.dias}
            </span>
            <span className="block font-serif text-xs text-gris-profundo/80 mt-0.5">
              {SEDES.angeles.zona}
            </span>
          </button>

          <button
            type="button"
            onClick={() => elegirSede("muguerza")}
            className="w-full text-left border-2 border-gris-premium/25 rounded-xl p-5 hover:border-acero hover:shadow-md transition-all cursor-pointer group"
          >
            <span className="block font-sans font-bold text-petroleo group-hover:text-acero transition-colors">
              {SEDES.muguerza.nombre}
            </span>
            <span className="block font-serif text-sm text-gris-profundo mt-1">
              {SEDES.muguerza.dias}
            </span>
            <span className="block font-serif text-xs text-gris-profundo/80 mt-0.5">
              {SEDES.muguerza.zona}
            </span>
          </button>
        </div>

        <p className="font-serif text-sm text-gris-profundo mt-6 text-center">
          ¿No estás seguro? Cualquiera de las dos sedes puede orientarte.
        </p>
      </div>
    </div>,
    document.body
  );
}
