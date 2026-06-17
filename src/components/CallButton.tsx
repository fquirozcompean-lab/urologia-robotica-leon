"use client";

import { trackCall } from "@/lib/analytics";

interface CallButtonProps {
  telefono: string;
  sede: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}

const variants = {
  primary:
    "inline-flex items-center justify-center gap-2 bg-acero text-editorial " +
    "font-sans font-bold px-8 py-4 rounded-lg hover:bg-acero/90 transition-colors",
  secondary:
    "inline-flex items-center justify-center gap-2 border-2 border-acero " +
    "text-acero font-sans font-bold px-8 py-4 rounded-lg hover:bg-acero " +
    "hover:text-editorial transition-colors",
  ghost:
    "inline-flex items-center gap-2 text-gris-premium font-sans text-sm " +
    "hover:text-acero transition-colors",
};

export default function CallButton({
  telefono,
  sede,
  children,
  className = "",
  variant = "ghost",
}: CallButtonProps) {
  return (
    <a
      href={`tel:+52${telefono}`}
      onClick={() => trackCall(sede)}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
