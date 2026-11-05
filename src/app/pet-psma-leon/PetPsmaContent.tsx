"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import WAButtonConSelector from "@/components/WAButtonConSelector";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function FAQItem({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
      >
        <span className="font-semibold text-slate-800">{q}</span>
        <span className="text-teal-600 text-xl shrink-0">{open ? "−" : "+"}</span>
      </button>
      <div hidden={!open} className="px-5 pb-5 text-slate-700 text-sm leading-relaxed">
          {children}
        </div>
    </motion.div>
  );
}

export default function PetPsmaContent() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-petroleo text-editorial py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-quirurgico mb-4">
            Estadificación de precisión · León, Guanajuato
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
            PET-PSMA en León: cuándo está indicado y cómo se interpreta
          </h1>
          <p className="text-xl md:text-2xl font-serif text-editorial/85 leading-relaxed max-w-3xl mx-auto mb-10">
            Saber exactamente dónde está el cáncer cambia las decisiones de tratamiento.
            Te explicamos para qué sirve este estudio, a quién le beneficia y qué significa su resultado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WAButtonConSelector
              mensaje="Hola Dr. Quiroz, quisiera información sobre el estudio PET-PSMA."
              motivo="pet-psma-hero"
              variant="green"
            >
              Consultar si está indicado en mi caso
            </WAButtonConSelector>
          </div>
        </div>
      </section>

      {/* AVISO: NO REALIZAMOS EL ESTUDIO */}
      <section aria-label="Aviso sobre la realización del estudio" className="bg-editorial border-b-4 border-dorado py-8">
        <div className="mx-auto max-w-6xl px-4">
          <p className="font-sans font-bold text-petroleo text-lg">
            Importante: nosotros no realizamos el PET-PSMA
          </p>
          <p className="mt-2 font-serif text-gris-profundo leading-relaxed max-w-3xl">
            El estudio se hace en unidades de medicina nuclear externas a nuestro consultorio.
            Nuestro papel es <strong>solicitarlo cuando está indicado, interpretar los resultados
            y normar el manejo</strong> de cada paciente.
          </p>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-3"
          >
            ¿Qué es el PET-PSMA?
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="mt-4 text-slate-700 leading-relaxed">
              El PET-PSMA es un estudio de <strong>imagen molecular</strong>: utiliza un
              radiotrazador que se une al{" "}
              <strong>antígeno prostático específico de membrana (PSMA)</strong>, una
              proteína presente en la superficie de las células del cáncer de próstata.
              El resultado es un mapa de todo el cuerpo que muestra, con gran detalle,
              dónde hay actividad tumoral.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              A diferencia de la tomografía o el gammagrama óseo — que detectan cambios
              en la <em>forma</em> de los tejidos — el PET-PSMA detecta la{" "}
              <strong>biología del tumor</strong>. Por eso identifica metástasis en
              ganglios y hueso que los estudios convencionales pueden pasar por alto,
              incluso con valores bajos de PSA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CUÁNDO ESTÁ INDICADO */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            ¿Cuándo está indicado?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Estadificación inicial de riesgo alto",
                body: "Antes de decidir entre cirugía, radioterapia u otro tratamiento, el PET-PSMA confirma si el cáncer está confinado a la próstata o ya se extendió. Esto evita cirugías que no beneficiarían al paciente — y confirma cuándo un tratamiento curativo sí es viable.",
              },
              {
                title: "Recurrencia bioquímica (antígeno prostático en ascenso)",
                body: "Si el PSA sube después de una cirugía o radioterapia, la pregunta clave es: ¿dónde está la enfermedad? El PET-PSMA la localiza con mayor sensibilidad que los estudios de imagen convencionales, permitiendo dirigir el tratamiento de rescate al sitio exacto.",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{c.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 text-sm text-slate-600 max-w-3xl"
          >
            Ambas indicaciones están respaldadas por las guías internacionales{" "}
            <strong>NCCN</strong> (National Comprehensive Cancer Network) y{" "}
            <strong>EAU</strong> (Asociación Europea de Urología). No todos los pacientes
            lo requieren: la indicación se valora de forma individual.
          </motion.p>
        </div>
      </section>

      {/* POR QUÉ EN LEÓN */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900">
                Nuestro papel: solicitarlo, interpretarlo y normar el manejo
              </h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                El estudio lo realiza una unidad de medicina nuclear. El Dr. Quiroz Compeán —
                urólogo oncólogo formado en el{" "}
                <strong>Instituto Nacional de Cancerología (INCan)</strong> — valora si le
                aporta algo a tu caso, lo solicita cuando está indicado y te orienta para
                realizarlo.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Después interpreta el resultado junto con tu antígeno prostático, tu biopsia y
                tus estudios previos, y con esa información define el manejo: un hallazgo en la
                imagen solo tiene valor dentro del contexto clínico completo.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <WAButtonConSelector
                  mensaje="Hola Dr. Quiroz, quisiera una valoración para saber si el PET-PSMA está indicado en mi caso."
                  motivo="pet-psma-valoracion"
                  variant="primary"
                >
                  Agendar valoración
                </WAButtonConSelector>
                <Link
                  href="/cancer-prostata"
                  className="inline-flex items-center gap-2 text-acero font-sans font-medium hover:underline px-4 py-4"
                >
                  Ver guía completa de cáncer de próstata →
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-slate-50 border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                En resumen
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm leading-relaxed">
                <li>
                  <strong>Qué detecta:</strong> actividad tumoral de cáncer de próstata en
                  todo el cuerpo (próstata, ganglios, hueso, tejidos blandos)
                </li>
                <li>
                  <strong>Cuándo se usa:</strong> riesgo alto antes de tratar, o PSA en
                  ascenso después de tratamiento
                </li>
                <li>
                  <strong>Ventaja:</strong> mayor precisión que tomografía + gammagrama
                  óseo combinados
                </li>
                <li>
                  <strong>Cómo es:</strong> estudio ambulatorio, aplicación intravenosa
                  del trazador e imágenes en la misma sesión
                </li>
                <li>
                  <strong>Dónde:</strong> en unidades de medicina nuclear; no se realiza en
                  nuestro consultorio
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-3">¿Qué estudio responde qué pregunta?</h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl mb-6">
            El PET-PSMA no reemplaza a todos los demás. Cada estudio responde una pregunta distinta:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">Comparación de estudios en cáncer de próstata</caption>
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold text-slate-800">Estudio</th>
                  <th scope="col" className="px-4 py-3 font-semibold text-slate-800">Pregunta que responde</th>
                  <th scope="col" className="px-4 py-3 font-semibold text-slate-800">Cuándo suele usarse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {[
                  ["Resonancia de próstata", "¿Hay una zona sospechosa dentro de la próstata?", "Antígeno elevado, antes de una biopsia"],
                  ["Biopsia", "¿Hay cáncer y qué tan agresivo es?", "Para confirmar el diagnóstico"],
                  ["Tomografía y gammagrama óseo", "¿Hay enfermedad en ganglios, órganos o hueso?", "Estadificación convencional"],
                  ["PET-PSMA", "¿Dónde está la enfermedad, con mayor detalle?", "Riesgo alto o antígeno en ascenso tras tratamiento"],
                ].map(([estudio, pregunta, cuando]) => (
                  <tr key={estudio}>
                    <th scope="row" className="px-4 py-3 font-semibold text-petroleo">{estudio}</th>
                    <td className="px-4 py-3">{pregunta}</td>
                    <td className="px-4 py-3">{cuando}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-slate-700 leading-relaxed max-w-3xl">
            <strong>La evidencia:</strong> en el estudio aleatorizado proPSMA (The Lancet, 2020), en
            hombres con cáncer de próstata de alto riesgo, el PET-PSMA tuvo una exactitud de 92%
            frente a 65% de la tomografía con gammagrama óseo, con menor exposición a radiación.{" "}
            <Link href="/resonancia-magnetica-prostata" className="text-acero font-medium hover:underline">
              Conoce la resonancia de próstata →
            </Link>
          </p>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-6">Qué significa el resultado</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Captación solo en la próstata", d: "Apoya que la enfermedad está localizada, lo que favorece considerar un tratamiento con intención curativa, según el resto de tu evaluación." },
              { t: "Captación fuera de la próstata", d: "Puede cambiar el plan: añadir tratamientos, dirigir la radioterapia o replantear una cirugía. No todo hallazgo es cáncer, y algunos requieren confirmarse con otros estudios." },
              { t: "Sin captación", d: "Es información valiosa, pero no descarta por completo la enfermedad: lesiones muy pequeñas o tumores con poca expresión de PSMA pueden no verse, sobre todo con antígeno muy bajo." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{c.t}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Preguntas frecuentes sobre el PET-PSMA
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            <FAQItem q="¿El estudio duele o tiene efectos secundarios?">
              No. Es un estudio <strong>ambulatorio y bien tolerado</strong>: se aplica el
              radiotrazador por vía intravenosa, se espera aproximadamente una hora y se
              adquieren las imágenes. La dosis de radiación es comparable a la de otros
              estudios de medicina nuclear.
            </FAQItem>
            <FAQItem q="¿Sustituye a la biopsia de próstata?">
              No. El diagnóstico de cáncer de próstata se confirma con{" "}
              <strong>biopsia</strong>. El PET-PSMA responde otra pregunta:{" "}
              <em>hasta dónde llega la enfermedad</em>. Son estudios complementarios
              dentro de una evaluación integral.
            </FAQItem>
            <FAQItem q="¿Todos los pacientes con cáncer de próstata lo necesitan?">
              No. En cáncer de <strong>bajo riesgo</strong> generalmente no está indicado.
              Su mayor utilidad es en <strong>riesgo alto</strong> y en{" "}
              <strong>recurrencia bioquímica</strong>. El Dr. Quiroz valora cada caso
              conforme a las guías NCCN y EAU.
            </FAQItem>
            <FAQItem q="¿Qué necesito para realizarlo?">
              Una <strong>valoración previa</strong> con su expediente (antígeno prostático,
              biopsia, estudios previos). Si está indicado, el Dr. Quiroz lo solicita, y después{" "}
              <strong>interpreta el resultado</strong> y norma el manejo dentro de su plan de
              tratamiento completo.
            </FAQItem>
            <FAQItem q="¿El Dr. Quiroz realiza el PET-PSMA?">
              No. El estudio se realiza en unidades de medicina nuclear externas a nuestro
              consultorio. Nosotros lo solicitamos cuando está indicado, interpretamos los
              resultados y normamos el manejo de cada paciente.
            </FAQItem>
            <FAQItem q="¿Cuánto cuesta el PET-PSMA y dónde se realiza?">
              El <strong>PSMA PET</strong> requiere una unidad de medicina nuclear con equipo{" "}
              <strong>PET/CT</strong> (o PET CT) y el radiotrazador, por lo que no está en todos los
              hospitales. El costo lo define cada unidad y varía según lo que incluya. Nosotros no
              realizamos el estudio: en la valoración confirmamos si está indicado en tu caso y te
              orientamos sobre dónde realizarlo.
            </FAQItem>
            <FAQItem q="¿Un PET-PSMA negativo descarta el cáncer de próstata?">
              No por completo. Lesiones muy pequeñas, un antígeno muy bajo o tumores con poca
              expresión de PSMA pueden no verse. Por eso el resultado se interpreta junto con el
              antígeno prostático, la biopsia y los demás estudios.
            </FAQItem>
            <FAQItem q="¿Todo lo que capta el PET-PSMA es cáncer?">
              No. Algunas lesiones benignas, cambios en el hueso o estructuras normales como ciertos
              ganglios nerviosos también pueden captar el radiotrazador. Por eso la lectura debe
              hacerse en contexto, y a veces se necesita confirmar un hallazgo con otro estudio.
            </FAQItem>
            <FAQItem q="¿Puedo hacerme un PET-PSMA sin que me lo indiquen?">
              No es lo recomendable. No sirve para detectar cáncer de próstata en hombres sin
              diagnóstico ni sustituye a la biopsia, y un estudio sin una pregunta clínica clara puede
              generar gastos y confusión. Primero conviene una valoración para saber si te aporta
              información útil.
            </FAQItem>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="bg-gradient-to-br from-teal-700 to-indigo-800 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            La decisión correcta empieza con la información correcta
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/85 text-lg leading-relaxed"
          >
            Si tiene un diagnóstico de cáncer de próstata de riesgo alto, o su PSA está
            subiendo después de un tratamiento, una valoración especializada puede cambiar
            el rumbo de su tratamiento.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <WAButtonConSelector
              mensaje="Hola Dr. Quiroz, quisiera agendar una valoración. Tengo interés en el estudio PET-PSMA."
              motivo="pet-psma-cta-final"
              variant="green"
            >
              Agendar por WhatsApp
            </WAButtonConSelector>
            <Link
              href="/segunda-opinion-oncologica"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white font-sans font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Solicitar segunda opinión
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
