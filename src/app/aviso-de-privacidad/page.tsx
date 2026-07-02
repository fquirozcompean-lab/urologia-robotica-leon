import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL_CONTACTO } from "@/lib/contactos";

// NOTA: Aviso de privacidad simplificado conforme a la LFPDPPP.
// El Dr. Quiroz puede refinarlo con un abogado especializado en
// protección de datos cuando lo considere necesario.

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Dr. Alejandro Quiroz Compeán",
  description:
    "Aviso de privacidad del sitio urologiaroboticaleon.com conforme a la LFPDPPP. Tratamiento de datos personales del Dr. Alejandro Quiroz Compeán.",
  alternates: {
    canonical: "https://urologiaroboticaleon.com/aviso-de-privacidad",
  },
};

export default function AvisoPrivacidadPage() {
  return (
    <div className="bg-white">
      <section className="bg-petroleo text-editorial py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-sans font-bold text-3xl md:text-4xl">
            Aviso de Privacidad
          </h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <article className="max-w-3xl mx-auto font-serif text-gris-profundo leading-relaxed space-y-6">
          <div>
            <h2 className="font-sans font-bold text-xl text-petroleo mb-2">
              Responsable del tratamiento
            </h2>
            <p>
              <strong>Dr. Alejandro Quiroz Compeán</strong>
              <br />
              Cédula Profesional 8860892 · Cédula de Especialidad 12465195
            </p>
            <p className="mt-2">
              Domicilios: Hospital Ángeles León, Consultorio 615, Torre II, Av.
              Cerro Gordo 311, Lomas del Campestre, León, Gto. / Hospital
              Christus Muguerza Altagracia, Consultorio 724, Blvd. Juan Alonso
              de Torres 2002, Valle del Campestre, León, Gto.
            </p>
          </div>

          <div>
            <h2 className="font-sans font-bold text-xl text-petroleo mb-2">
              Datos que recabamos
            </h2>
            <p>
              Nombre, teléfono y motivo general de consulta, proporcionados
              voluntariamente a través del formulario de este sitio web o por
              WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="font-sans font-bold text-xl text-petroleo mb-2">
              Finalidad
            </h2>
            <p>
              Contactarle para agendar y dar seguimiento a su consulta médica.
              No utilizamos sus datos con fines publicitarios ni los
              compartimos con terceros, salvo obligación legal.
            </p>
            <p className="mt-2">
              Sus datos son tratados de forma confidencial conforme a la Ley
              Federal de Protección de Datos Personales en Posesión de los
              Particulares (LFPDPPP).
            </p>
          </div>

          <div>
            <h2 className="font-sans font-bold text-xl text-petroleo mb-2">
              Derechos ARCO
            </h2>
            <p>
              Usted puede solicitar el acceso, rectificación, cancelación u
              oposición al tratamiento de sus datos escribiendo a{" "}
              <a
                href={`mailto:${EMAIL_CONTACTO}`}
                className="text-acero underline hover:text-petroleo"
              >
                {EMAIL_CONTACTO}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-sans font-bold text-xl text-petroleo mb-2">
              Analítica del sitio
            </h2>
            <p>
              Este sitio utiliza Google Analytics para métricas de uso de forma
              agregada y anónima.
            </p>
          </div>

          <p className="text-sm text-gris-profundo/80 pt-4 border-t border-gris-premium/20">
            Última actualización: Julio 2026.
          </p>

          <Link
            href="/"
            className="inline-block font-sans text-sm text-gris-profundo hover:text-acero transition-colors"
          >
            ← Volver al inicio
          </Link>
        </article>
      </section>
    </div>
  );
}
