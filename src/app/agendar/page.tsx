import type { Metadata } from "next";
import AgendarContent from "./AgendarContent";

export const metadata: Metadata = {
  title:
    "Agendar Consulta | Dr. Alejandro Quiroz Compeán — Urólogo Oncólogo en León",
  description:
    "Agenda tu consulta de urología en León, Guanajuato. Hospital Ángeles y Hospital Christus Muguerza. Solicita tu cita en línea o por WhatsApp.",
  alternates: {
    canonical: "https://urologiaroboticaleon.com/agendar",
  },
  openGraph: {
    title: "Agendar Consulta — Dr. Alejandro Quiroz Compeán",
    description:
      "Agenda tu consulta de urología en León, Guanajuato. Solicita tu cita en línea o por WhatsApp.",
    url: "https://urologiaroboticaleon.com/agendar",
    siteName: "Urología Robótica León",
    locale: "es_MX",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://urologiaroboticaleon.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Agendar Consulta",
      item: "https://urologiaroboticaleon.com/agendar",
    },
  ],
};

export default function AgendarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AgendarContent />
    </>
  );
}
