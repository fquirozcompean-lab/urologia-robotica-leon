"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPin, Clock, Phone } from "lucide-react";
import WAButtonConSelector from "@/components/WAButtonConSelector";
import CallButton from "@/components/CallButton";
import { SEDES } from "@/lib/contactos";

const MOTIVOS = [
  "Cáncer de próstata",
  "Segunda opinión oncológica",
  "Crecimiento de próstata / HoLEP",
  "Cáncer renal",
  "Cáncer de vejiga",
  "Cáncer testicular",
  "Piedras en el riñón",
  "Infección urinaria",
  "Disfunción eréctil",
  "VPH / verrugas genitales",
  "Otro motivo",
];

const SEDES_FORM = [
  "Hospital Ángeles León (Lun/Mar/Jue)",
  "Hospital Christus Muguerza (Mié/Vie)",
  "Cualquiera / no estoy seguro",
];

const inputClass =
  "w-full border-2 border-gris-premium/30 rounded-lg px-4 py-3 font-serif text-gris-profundo " +
  "focus:border-acero focus:outline-none transition-colors bg-white text-base";

const labelClass = "block font-sans font-semibold text-sm text-petroleo mb-1.5";

export default function AgendarContent() {
  const router = useRouter();
  const [enviando, setEnviando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState(false);
  const [errores, setErrores] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorEnvio(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    const nombre = (data.get("nombre") as string)?.trim() ?? "";
    const telefono = ((data.get("telefono") as string) ?? "").replace(/\D/g, "");
    const motivo = (data.get("motivo") as string) ?? "";
    const sede = (data.get("sede") as string) ?? "";
    const comentario = ((data.get("comentario") as string) ?? "").trim();
    const consentimiento = data.get("consentimiento") === "on";
    const website = (data.get("website") as string) ?? ""; // honeypot

    // Validación client-side
    const nuevosErrores: Record<string, string> = {};
    if (nombre.length < 3) nuevosErrores.nombre = "Escribe tu nombre completo";
    if (!/^\d{10}$/.test(telefono))
      nuevosErrores.telefono = "Escribe un teléfono de 10 dígitos";
    if (!motivo) nuevosErrores.motivo = "Selecciona el motivo de tu consulta";
    if (!sede) nuevosErrores.sede = "Selecciona una sede";
    if (!consentimiento)
      nuevosErrores.consentimiento =
        "Necesitamos tu autorización para poder contactarte";

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    setEnviando(true);
    try {
      const res = await fetch("/api/agendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          telefono,
          motivo,
          sede,
          comentario: comentario || undefined,
          consentimiento,
          website,
        }),
      });

      if (res.ok) {
        router.push("/gracias");
        return;
      }
      setErrorEnvio(true);
    } catch {
      setErrorEnvio(true);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="bg-white">
      {/* HERO COMPACTO */}
      <section className="bg-petroleo text-editorial py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-sans font-bold text-3xl md:text-4xl">
            Agenda tu consulta
          </h1>
          <p className="font-serif text-editorial/80 text-lg mt-3 max-w-xl mx-auto">
            Déjanos tus datos y el equipo del Dr. Quiroz te contactará para
            confirmar tu cita.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* FORMULARIO */}
          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="nombre" className={labelClass}>
                  Nombre completo *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClass}
                />
                {errores.nombre && (
                  <p className="text-red-600 text-sm font-sans mt-1">{errores.nombre}</p>
                )}
              </div>

              <div>
                <label htmlFor="telefono" className={labelClass}>
                  Teléfono (10 dígitos) *
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  inputMode="tel"
                  required
                  autoComplete="tel"
                  placeholder="477 000 0000"
                  className={inputClass}
                />
                {errores.telefono && (
                  <p className="text-red-600 text-sm font-sans mt-1">{errores.telefono}</p>
                )}
              </div>

              <div>
                <label htmlFor="motivo" className={labelClass}>
                  Motivo de consulta *
                </label>
                <select id="motivo" name="motivo" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {MOTIVOS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                {errores.motivo && (
                  <p className="text-red-600 text-sm font-sans mt-1">{errores.motivo}</p>
                )}
              </div>

              <fieldset>
                <legend className={labelClass}>Sede preferida *</legend>
                <div className="space-y-2">
                  {SEDES_FORM.map((s) => (
                    <label
                      key={s}
                      className="flex items-center gap-3 border-2 border-gris-premium/25 rounded-lg px-4 py-3 cursor-pointer hover:border-acero transition-colors font-serif text-gris-profundo has-[:checked]:border-acero has-[:checked]:bg-editorial"
                    >
                      <input
                        type="radio"
                        name="sede"
                        value={s}
                        required
                        className="accent-[#1F5C73] w-4 h-4"
                      />
                      <span className="text-sm">{s}</span>
                    </label>
                  ))}
                </div>
                {errores.sede && (
                  <p className="text-red-600 text-sm font-sans mt-1">{errores.sede}</p>
                )}
              </fieldset>

              <div>
                <label htmlFor="comentario" className={labelClass}>
                  Comentario (opcional)
                </label>
                <textarea
                  id="comentario"
                  name="comentario"
                  rows={3}
                  maxLength={500}
                  placeholder="¿Algo que debamos saber antes de tu cita?"
                  className={inputClass}
                />
              </div>

              {/* Honeypot anti-spam — oculto para humanos */}
              <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
                <label htmlFor="website">No llenar este campo</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentimiento"
                    required
                    className="accent-[#1F5C73] w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span className="font-serif text-sm text-gris-profundo">
                    Acepto el{" "}
                    <Link
                      href="/aviso-de-privacidad"
                      target="_blank"
                      className="text-acero underline hover:text-petroleo"
                    >
                      Aviso de Privacidad
                    </Link>{" "}
                    y autorizo ser contactado por teléfono o WhatsApp. *
                  </span>
                </label>
                {errores.consentimiento && (
                  <p className="text-red-600 text-sm font-sans mt-1">
                    {errores.consentimiento}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-acero text-editorial font-sans font-bold px-10 py-4 rounded-lg hover:bg-acero/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {enviando ? "Enviando…" : "Solicitar cita"}
              </button>

              {errorEnvio && (
                <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
                  <p className="font-serif text-sm text-gris-profundo mb-3">
                    Hubo un problema al enviar tu solicitud. Puedes intentar de
                    nuevo o escribirnos directamente por WhatsApp:
                  </p>
                  <WAButtonConSelector
                    mensaje="Hola, intenté agendar por el formulario del sitio y quisiera una cita."
                    motivo="agendar-fallback"
                    variant="green"
                    className="text-sm px-6 py-3"
                  >
                    Escribir por WhatsApp
                  </WAButtonConSelector>
                </div>
              )}
            </form>
          </div>

          {/* SEDES */}
          <aside className="lg:col-span-2 space-y-5">
            {[SEDES.angeles, SEDES.muguerza].map((sede) => (
              <div
                key={sede.id}
                className="bg-editorial rounded-xl p-6 border-2 border-gris-premium/15"
              >
                <h2 className="font-sans font-bold text-petroleo">{sede.nombre}</h2>
                <p className="flex items-center gap-2 font-serif text-sm text-gris-profundo mt-2">
                  <Clock size={15} className="text-quirurgico flex-shrink-0" />
                  {sede.dias}
                </p>
                <p className="flex items-center gap-2 font-serif text-sm text-gris-profundo mt-1">
                  <MapPin size={15} className="text-quirurgico flex-shrink-0" />
                  {sede.zona}, León, Gto.
                </p>
                <CallButton
                  telefono={sede.whatsapp.slice(3)}
                  sede={sede.id}
                  variant="ghost"
                  className="mt-3 text-sm"
                >
                  <Phone size={14} className="text-quirurgico" />
                  Llamar a la sede
                </CallButton>
              </div>
            ))}

            <div className="bg-petroleo rounded-xl p-6 text-center">
              <p className="font-serif text-editorial/85 mb-4">
                ¿Prefieres WhatsApp? Escríbenos directamente:
              </p>
              <WAButtonConSelector
                mensaje="Hola, quiero agendar una consulta con el Dr. Quiroz."
                motivo="agendar-whatsapp-directo"
                variant="green"
                className="text-sm px-6 py-3"
              >
                Escribir por WhatsApp
              </WAButtonConSelector>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
