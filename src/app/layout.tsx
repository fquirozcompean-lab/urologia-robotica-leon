// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// (Opcional) si quieres usar una fuente de Google, descomenta:
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urología Robótica León",
  description:
    "Atención integral y humanizada con tecnología avanzada. Dr. Alejandro Quiroz Compeán, especialista en Urología Oncológica y Cirugía Robótica.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* Si usas una fuente con next/font, agrega className={inter.className} */}
      <body>{children}</body>
    </html>
  );
}
