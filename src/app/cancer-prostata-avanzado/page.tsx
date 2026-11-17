import type { Metadata } from "next";
import CancerProstataAvanzadoContent from "./CancerProstataAvanzadoContent";

export const metadata: Metadata = {
  title: "Cáncer de Próstata Avanzado y Metastásico: Tratamiento en León | Dr. Quiroz",
  description:
    "Qué significa cáncer de próstata avanzado o metastásico, cómo se trata hoy (hormonoterapia, nuevos antiandrógenos, quimioterapia, radioterapia, terapia con PSMA) y qué esperar. Dr. Alejandro Quiroz, urólogo oncólogo en León, Gto.",
  keywords: [
    "cáncer de próstata avanzado",
    "cáncer de próstata metastásico",
    "cáncer de próstata etapa 4",
    "cáncer de próstata con metástasis en huesos",
    "cáncer de próstata resistente a la castración",
    "hormonoterapia cáncer de próstata",
    "tratamiento cáncer de próstata avanzado León",
    "urólogo oncólogo León",
  ],
  openGraph: {
    title: "Cáncer de Próstata Avanzado y Metastásico | Dr. Alejandro Quiroz — León",
    description:
      "Qué significa, cómo se trata hoy y qué esperar. Valoración con urólogo oncólogo en León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/cancer-prostata-avanzado",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cáncer de próstata avanzado — Dr. Alejandro Quiroz Compeán, urólogo oncólogo en León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cáncer de Próstata Avanzado y Metastásico | Dr. Quiroz",
    description: "Qué significa, cómo se trata hoy y qué esperar. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/cancer-prostata-avanzado",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el cáncer de próstata avanzado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es el cáncer de próstata que ya no está limitado a la glándula: puede haber salido de la cápsula de la próstata (localmente avanzado) o haberse extendido a ganglios lejanos, huesos u otros órganos (metastásico). El tratamiento depende de la etapa.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer de próstata avanzado tiene tratamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Hoy existen más opciones que nunca: hormonoterapia, antiandrógenos de nueva generación, quimioterapia, radioterapia y terapias dirigidas. Combinadas según cada caso, permiten controlar la enfermedad durante periodos prolongados en muchos pacientes, con buena calidad de vida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo se vive con cáncer de próstata metastásico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de la extensión de la enfermedad, de cómo responde al tratamiento y del estado de salud de cada paciente. Los tratamientos combinados de los últimos años han prolongado de forma importante la vida en estudios internacionales, y muchos pacientes viven años. El urólogo oncólogo puede darte un pronóstico más preciso con tu caso completo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué efectos secundarios tiene la hormonoterapia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los más comunes son bochornos, disminución del deseo sexual y de la erección, cansancio, aumento de peso, pérdida de masa muscular y de densidad de los huesos. Muchos se pueden prevenir o aliviar con ejercicio, alimentación, vigilancia de los huesos y tratamiento específico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué significa cáncer de próstata resistente a la castración?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Que el cáncer sigue avanzando aunque la testosterona esté en niveles muy bajos por la hormonoterapia. No significa que se acabaron las opciones: existen varias líneas de tratamiento para esta etapa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede operar la próstata si el cáncer ya se extendió?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la enfermedad metastásica, la cirugía de la próstata no es el tratamiento habitual y solo se considera en estudios o casos muy seleccionados. En cambio, cuando la enfermedad tiene poca extensión, la radioterapia dirigida a la próstata ha mostrado beneficio en pacientes seleccionados. Cada caso se valora de forma individual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué me recomiendan un estudio genético?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque una parte de los pacientes con cáncer de próstata metastásico tiene alteraciones en genes como BRCA1 o BRCA2. Identificarlas permite usar tratamientos dirigidos y orientar a los familiares, que podrían necesitar revisiones más tempranas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la terapia con PSMA para el cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un tratamiento con un radiofármaco que se une al PSMA, una proteína de las células del cáncer de próstata, y les lleva radiación directamente. Se usa en pacientes seleccionados con enfermedad resistente a la castración. No está disponible en todos los centros y su indicación se valora en cada caso.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://urologiaroboticaleon.com" },
    { "@type": "ListItem", position: 2, name: "Cáncer de Próstata", item: "https://urologiaroboticaleon.com/cancer-prostata" },
    { "@type": "ListItem", position: 3, name: "Cáncer de próstata avanzado", item: "https://urologiaroboticaleon.com/cancer-prostata-avanzado" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Cáncer de próstata avanzado y metastásico",
  description:
    "Guía sobre el cáncer de próstata avanzado y metastásico: qué significa, opciones de tratamiento actuales y seguimiento. Dr. Alejandro Quiroz Compeán, urólogo oncólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/cancer-prostata-avanzado",
  about: {
    "@type": "MedicalCondition",
    name: "Cáncer de próstata metastásico",
    alternateName: ["Cáncer de próstata avanzado", "Cáncer de próstata etapa 4"],
    code: { "@type": "MedicalCode", code: "C61", codingSystem: "ICD-10" },
  },
  author: {
    "@type": "Physician",
    name: "Dr. Alejandro Quiroz Compeán",
    url: "https://urologiaroboticaleon.com",
  },
  medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
};

export default function CancerProstataAvanzadoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <CancerProstataAvanzadoContent />
    </>
  );
}
