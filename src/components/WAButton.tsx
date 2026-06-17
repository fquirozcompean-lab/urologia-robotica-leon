"use client";

import { trackWhatsApp } from "@/lib/analytics";

interface WAButtonProps {
  mensaje: string;
  motivo: string;
  sede?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "green";
}

const BASE = "wa.me/5214776330492";

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
    "inline-flex items-center justify-center gap-2 bg-[#25D366] text-white " +
    "font-sans font-bold px-8 py-4 rounded-lg hover:bg-[#20b358] transition-colors",
};

export default function WAButton({
  mensaje,
  motivo,
  sede = "",
  children,
  className = "",
  variant = "primary",
}: WAButtonProps) {
  const url = `https://${BASE}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(motivo, sede)}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
