"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Dispara el evento GA4 `conversion_contact` UNA sola vez al montar.
 * Este evento se marca como conversión principal en GA4 y se importa
 * a Google Ads para Smart Bidding.
 */
export default function ConversionTracker() {
  const disparado = useRef(false);

  useEffect(() => {
    if (disparado.current) return;
    disparado.current = true;
    trackEvent("conversion_contact", {
      event_category: "conversion",
      event_label: "formulario-agendar",
    });
  }, []);

  return null;
}
