"use client";

import { useState } from "react";
import SedeSelector from "@/components/SedeSelector";

interface WAButtonConSelectorProps {
  mensaje: string;
  motivo: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "green" | "custom";
  /** "div" para CTAs cuyo contenido incluye headings (un <button> solo admite phrasing content) */
  as?: "button" | "div";
}

// Mismos estilos que WAButton — mantener en sincronía
const variants = {
  primary:
    "inline-flex items-center justify-center gap-2 bg-acero text-editorial " +
    "font-sans font-bold px-8 py-4 rounded-lg hover:bg-acero/90 transition-colors",
  secondary:
    "inline-flex items-center justify-center gap-2 border-2 border-acero " +
    "text-acero font-sans font-bold px-8 py-4 rounded-lg hover:bg-acero " +
    "hover:text-editorial transition-colors",
  ghost:
    "inline-flex items-center gap-2 text-acero font-sans font-medium " +
    "hover:underline transition-colors",
  green:
    "inline-flex items-center justify-center gap-2 bg-whatsapp text-white " +
    "font-sans font-bold px-8 py-4 rounded-lg hover:bg-whatsapp/85 transition-colors",
  custom: "", // el CTA trae todas sus clases vía className
};

/**
 * Botón visualmente idéntico a WAButton, pero en vez de ir directo a WhatsApp
 * abre el SedeSelector para que el paciente elija sede (el tracking GA4 se
 * dispara al elegir, con la sede real).
 */
export default function WAButtonConSelector({
  mensaje,
  motivo,
  children,
  className = "",
  variant = "primary",
  as = "button",
}: WAButtonConSelectorProps) {
  const [abierto, setAbierto] = useState(false);
  const clases = `${variants[variant]} ${className} cursor-pointer`;

  return (
    <>
      {as === "div" ? (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setAbierto(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setAbierto(true);
            }
          }}
          className={clases}
        >
          {children}
        </div>
      ) : (
        <button type="button" onClick={() => setAbierto(true)} className={clases}>
          {children}
        </button>
      )}
      <SedeSelector
        abierto={abierto}
        onCerrar={() => setAbierto(false)}
        mensaje={mensaje}
        motivo={motivo}
      />
    </>
  );
}
