"use client";

import { useState } from "react";
import SedeSelector from "@/components/SedeSelector";

interface WASelectorLinkProps {
  mensaje: string;
  motivo: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Reemplazo drop-in para anchors inline `<a href={waLink(...)}>` en páginas
 * de condición: conserva el markup interno (Buttons con framer-motion) pero
 * abre el SedeSelector en vez de ir directo a WhatsApp. El tracking GA4 se
 * dispara al elegir sede.
 */
export default function WASelectorLink({
  mensaje,
  motivo,
  children,
  className = "",
}: WASelectorLinkProps) {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <a
        role="button"
        tabIndex={0}
        onClick={() => setAbierto(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setAbierto(true);
          }
        }}
        className={`cursor-pointer ${className}`}
      >
        {children}
      </a>
      <SedeSelector
        abierto={abierto}
        onCerrar={() => setAbierto(false)}
        mensaje={mensaje}
        motivo={motivo}
      />
    </>
  );
}
