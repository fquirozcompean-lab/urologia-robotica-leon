import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import ConversionTracker from "./ConversionTracker";
import WAButtonConSelector from "@/components/WAButtonConSelector";
import CallButton from "@/components/CallButton";
import { SEDES } from "@/lib/contactos";

export const metadata: Metadata = {
  title: "Solicitud recibida | Dr. Quiroz",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasPage() {
  return (
    <div className="bg-white min-h-[70vh]">
      <ConversionTracker />

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle size={72} className="text-acero mx-auto mb-6" strokeWidth={1.5} />

          <h1 className="font-sans font-bold text-3xl md:text-4xl text-petroleo mb-5">
            Tu solicitud fue recibida
          </h1>

          <p className="font-serif text-lg text-gris-profundo leading-relaxed max-w-xl mx-auto">
            El equipo del Dr. Quiroz revisará tu solicitud y te contactará por
            teléfono o WhatsApp en un plazo de 2 a 4 horas en días hábiles
            (lunes a viernes, 9:00 AM a 8:00 PM).
          </p>

          {/* CONTACTO INMEDIATO */}
          <div className="bg-editorial rounded-xl p-6 md:p-8 mt-10 text-left">
            <h2 className="font-sans font-bold text-petroleo text-center mb-5">
              ¿Prefieres contacto inmediato?
            </h2>
            <div className="flex justify-center mb-6">
              <WAButtonConSelector
                mensaje="Hola, acabo de enviar una solicitud de cita por el formulario y quisiera confirmar."
                motivo="gracias-whatsapp"
                variant="green"
                className="text-sm px-6 py-3"
              >
                Escribir por WhatsApp
              </WAButtonConSelector>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[SEDES.angeles, SEDES.muguerza].map((sede) => (
                <div key={sede.id} className="text-center">
                  <p className="font-sans font-semibold text-sm text-petroleo">
                    {sede.nombre}
                  </p>
                  <CallButton
                    telefono={sede.whatsapp.slice(3)}
                    sede={sede.id}
                    variant="ghost"
                    className="justify-center mt-1"
                  >
                    <Phone size={14} className="text-quirurgico" />
                    Llamar
                  </CallButton>
                </div>
              ))}
            </div>
          </div>

          {/* AVISO URGENCIAS */}
          <div className="border-l-4 border-dorado bg-editorial/60 p-5 mt-8 text-left rounded-r-xl">
            <p className="font-serif text-sm text-gris-profundo leading-relaxed">
              <strong className="font-sans text-petroleo">Importante:</strong>{" "}
              esta vía no atiende urgencias médicas. Si presentas retención
              urinaria, sangrado abundante, fiebre alta o dolor intenso, acude
              directamente al área de urgencias del Hospital Ángeles León o del
              Hospital Christus Muguerza.
            </p>
          </div>

          <Link
            href="/"
            className="inline-block mt-10 font-sans text-sm text-gris-profundo hover:text-acero transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>
    </div>
  );
}
