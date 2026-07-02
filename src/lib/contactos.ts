// Números de contacto oficiales del sitio — NUNCA hardcodear números en
// componentes o páginas: importar siempre desde este archivo.
//
// Enrutamiento oficial (Julio 2026):
// - CTAs de sede específica → WhatsApp de la asistente de cada sede
// - CTAs de segunda opinión oncológica → WhatsApp personal del Dr. Quiroz
// - CTAs genéricos → modal SedeSelector → asistente de la sede elegida

export const WA_DR = "5214776330492"; // Dr. Quiroz — SOLO segunda opinión
export const WA_ANGELES = "5214791037564"; // Asistente Hospital Ángeles León
export const WA_MUGUERZA = "5214772351442"; // Asistente Hospital Christus Muguerza
export const EMAIL_CONTACTO = "urologoquiroz@gmail.com";

export const SEDES = {
  angeles: {
    id: "angeles",
    nombre: "Hospital Ángeles León",
    dias: "Lun / Mar / Jue · 9:00 AM – 8:00 PM",
    zona: "Lomas del Campestre",
    whatsapp: WA_ANGELES,
  },
  muguerza: {
    id: "muguerza",
    nombre: "Hospital Christus Muguerza Altagracia",
    dias: "Mié / Vie · 9:00 AM – 8:00 PM",
    zona: "Valle del Campestre",
    whatsapp: WA_MUGUERZA,
  },
} as const;

export function waUrl(telefono: string, mensaje: string): string {
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
}
