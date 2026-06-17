// Utilidad centralizada de tracking para GA4 (ID: G-FFEFH848TS)
// Todos los eventos de conversión del sitio pasan por aquí

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

type GAEvent =
  | "click_whatsapp"
  | "click_call"
  | "doctoralia_outbound_click";

interface GAEventParams {
  event_category?: string;
  event_label?: string;
  page_location?: string;
  motivo?: string;
  sede?: string;
}

export function trackEvent(
  eventName: GAEvent,
  params: GAEventParams = {}
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    event_category: params.event_category ?? "conversion",
    event_label: params.event_label ?? "",
    page_location: params.page_location ?? window.location.href,
    motivo: params.motivo ?? "",
    sede: params.sede ?? "",
  });
}

export const trackWhatsApp = (motivo: string, sede = "") =>
  trackEvent("click_whatsapp", {
    event_category: "conversion",
    event_label: motivo,
    motivo,
    sede,
  });

export const trackCall = (sede: string) =>
  trackEvent("click_call", {
    event_category: "conversion",
    event_label: sede,
    sede,
  });

export const trackDoctoralia = (origen: string) =>
  trackEvent("doctoralia_outbound_click", {
    event_category: "outbound",
    event_label: origen,
  });
