"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import WAButtonConSelector from "@/components/WAButtonConSelector";

// 1 dic 2026, 00:00 en León (UTC-6).
const FIN_CAMPANA = Date.parse("2026-12-01T06:00:00Z");

const sinSuscripcion = () => () => {};

/** Campaña de noviembre (mes de la salud del hombre). Se apaga sola en diciembre. */
export default function BannerNoviembre({ motivo }: { motivo: string }) {
  // El HTML es estático: durante la hidratación se usa el valor de servidor (true) y
  // después React revisa la fecha real, sin error de hidratación en diciembre.
  const vigente = useSyncExternalStore(
    sinSuscripcion,
    () => Date.now() < FIN_CAMPANA,
    () => true
  );

  if (!vigente) return null;

  return (
    <section
      aria-label="Noviembre, mes de la salud del hombre"
      className="bg-editorial border-b-4 border-dorado px-4 py-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <p className="font-sans font-bold text-petroleo text-lg">
            Noviembre, mes de la salud del hombre: revisa tu próstata
          </p>
          <p className="font-serif text-gris-profundo mt-1 max-w-2xl">
            En etapa inicial, el cáncer de próstata casi nunca da síntomas. Se recomienda
            revisarse desde los 50 años, o desde los 40-45 si hay antecedentes familiares.{" "}
            <Link
              href="/valores-antigeno-prostatico-edad"
              className="text-acero font-medium font-sans hover:underline"
            >
              Valores de antígeno prostático según la edad →
            </Link>
          </p>
        </div>
        <WAButtonConSelector
          mensaje="Hola Dr. Quiroz, quiero agendar mi revisión de próstata de noviembre."
          motivo={motivo}
          variant="green"
          className="shrink-0 whitespace-nowrap"
        >
          Agendar mi revisión
        </WAButtonConSelector>
      </div>
    </section>
  );
}
