import { NextResponse } from "next/server";
import { Resend } from "resend";

// TEMPORAL: cambiar a urologoquiroz@gmail.com (EMAIL_CONTACTO de @/lib/contactos)
// cuando el dominio esté verificado en Resend (bloqueado por limitación de Wix DNS).
// El plan gratuito sin dominio verificado solo permite enviar al correo de la cuenta.
const EMAIL_DESTINO = "aqc.alejandr@gmail.com";

interface AgendarBody {
  nombre: string;
  telefono: string;
  motivo: string;
  sede: string;
  comentario?: string;
  consentimiento: boolean;
  website?: string; // honeypot — los humanos nunca lo llenan
}

const MOTIVOS_VALIDOS = [
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

const SEDES_VALIDAS = [
  "Hospital Ángeles León (Lun/Mar/Jue)",
  "Hospital Christus Muguerza (Mié/Vie)",
  "Cualquiera / no estoy seguro",
];

function esBodyValido(body: unknown): body is AgendarBody {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.nombre === "string" &&
    b.nombre.trim().length >= 3 &&
    b.nombre.trim().length <= 120 &&
    typeof b.telefono === "string" &&
    /^\d{10}$/.test(b.telefono.replace(/\D/g, "")) &&
    typeof b.motivo === "string" &&
    MOTIVOS_VALIDOS.includes(b.motivo) &&
    typeof b.sede === "string" &&
    SEDES_VALIDAS.includes(b.sede) &&
    (b.comentario === undefined ||
      (typeof b.comentario === "string" && b.comentario.length <= 500)) &&
    b.consentimiento === true
  );
}

function escapeHtml(texto: string): string {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }

  // Honeypot: si el campo oculto viene lleno, es un bot.
  // Respondemos ok sin enviar nada para no darle señal.
  const honeypot = (body as Record<string, unknown>)?.website;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!esBodyValido(body)) {
    return NextResponse.json(
      { error: "Faltan campos requeridos o el formato es inválido" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada");
    return NextResponse.json(
      { error: "Servicio de contacto no disponible" },
      { status: 500 }
    );
  }

  const telefonoLimpio = body.telefono.replace(/\D/g, "");
  const fecha = new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
    dateStyle: "full",
    timeStyle: "short",
  });

  const html = `
    <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #37474F;">
      <h2 style="color: #0F2D3A;">Nueva solicitud de cita desde urologiaroboticaleon.com</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Nombre:</td><td>${escapeHtml(body.nombre.trim())}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Teléfono:</td><td><a href="tel:+52${telefonoLimpio}">${telefonoLimpio}</a></td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Motivo:</td><td>${escapeHtml(body.motivo)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Sede:</td><td>${escapeHtml(body.sede)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Comentario:</td><td>${body.comentario ? escapeHtml(body.comentario) : "—"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Fecha:</td><td>${fecha}</td></tr>
      </table>
      <p style="margin-top: 24px;">
        <a href="https://wa.me/52${telefonoLimpio}"
           style="background: #15803d; color: #fff; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: bold;">
          Responder al paciente por WhatsApp
        </a>
      </p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    // NOTA: onboarding@resend.dev es el dominio default de Resend.
    // Migrar a dominio propio verificado (urologiaroboticaleon.com) después.
    const { error } = await resend.emails.send({
      from: "Sitio Web <onboarding@resend.dev>",
      to: EMAIL_DESTINO,
      subject: `🩺 Nueva solicitud de cita — ${body.motivo} — ${body.sede}`,
      html,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return NextResponse.json(
        { error: "No se pudo enviar la solicitud" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error al enviar email:", err);
    return NextResponse.json(
      { error: "No se pudo enviar la solicitud" },
      { status: 500 }
    );
  }
}
