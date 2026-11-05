import type { Metadata } from "next";
import PrevencionContent from "./PrevencionContent";

export const metadata: Metadata = {
  title: "Prevención del Cáncer de Próstata: Qué Funciona | Dr. Quiroz — León",
  description:
    "Cómo reducir el riesgo de cáncer de próstata y por qué la detección temprana con antígeno prostático es la clave. Hábitos con respaldo, mitos sobre suplementos y a qué edad revisarte. Dr. Quiroz, urólogo en León, Gto.",
  keywords: [
    "prevención cáncer de próstata",
    "cómo prevenir el cáncer de próstata",
    "reducir riesgo cáncer próstata",
    "qué comer para la próstata",
    "suplementos para la próstata",
    "detección temprana cáncer próstata",
    "cáncer de próstata hábitos",
    "prevención próstata León",
  ],
  openGraph: {
    title: "Prevención del Cáncer de Próstata: Qué Funciona | Dr. Alejandro Quiroz",
    description:
      "Cómo reducir el riesgo, qué hábitos tienen respaldo, mitos sobre suplementos y por qué la detección temprana con antígeno prostático es lo más importante. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/prevencion-cancer-prostata",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prevención del cáncer de próstata — Dr. Alejandro Quiroz Compeán León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prevención del Cáncer de Próstata: Qué Funciona | Dr. Quiroz",
    description:
      "Reducir el riesgo, hábitos con respaldo, mitos de suplementos y la importancia de la detección temprana. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/prevencion-cancer-prostata",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Se puede prevenir el cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No de forma garantizada —la edad y los antecedentes familiares no se pueden cambiar—, pero sí puedes reducir el riesgo con hábitos saludables y, sobre todo, detectarlo a tiempo con el PSA, cuando es más fácil de curar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué alimentos ayudan a cuidar la próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La evidencia es modesta: más verduras y frutas, menos carne roja y procesada y menos grasas saturadas. No hay un \"alimento milagro\"; lo que ayuda es el patrón general de alimentación junto con el peso adecuado y el ejercicio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los suplementos (vitamina E, selenio, licopeno) previenen el cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El estudio SELECT mostró que la vitamina E y el selenio no lo previenen, y la vitamina E se asoció con un ligero aumento del riesgo. El licopeno tiene evidencia débil. No se recomiendan suplementos para prevenir el cáncer de próstata.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué edad debo empezar a revisarme la próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A los 50 años en riesgo promedio, y desde los 40-45 si hay antecedentes familiares o factores de riesgo. La revisión con PSA es sencilla e indolora.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ejercicio reduce el riesgo de cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La actividad física regular y un peso saludable se asocian con menor riesgo de cáncer de próstata agresivo y con mejor salud general. No es garantía, pero es uno de los hábitos con mejor respaldo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo hacer algo si tengo antecedentes familiares?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí: adelantar la detección. Con antecedentes de primer grado o mutaciones BRCA, la revisión con PSA suele empezar antes (40-45 años) y con seguimiento más cercano. No cambias tu genética, pero sí encuentras el cáncer a tiempo.",
      },
    },
  ],
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
      name: "Cáncer de Próstata",
      item: "https://urologiaroboticaleon.com/cancer-prostata",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Prevención del cáncer de próstata",
      item: "https://urologiaroboticaleon.com/prevencion-cancer-prostata",
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Prevención del cáncer de próstata: qué funciona",
  description:
    "Guía sobre cómo reducir el riesgo de cáncer de próstata, qué hábitos tienen respaldo científico, los mitos sobre suplementos y la importancia de la detección temprana con antígeno prostático. Dr. Alejandro Quiroz Compeán, urólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/prevencion-cancer-prostata",
  about: {
    "@type": "MedicalCondition",
    name: "Cáncer de Próstata",
    code: {
      "@type": "MedicalCode",
      code: "C61",
      codingSystem: "ICD-10",
    },
  },
  author: {
    "@type": "Physician",
    name: "Dr. Alejandro Quiroz Compeán",
    url: "https://urologiaroboticaleon.com",
  },
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
};

export default function PrevencionCancerProstataPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <PrevencionContent />
    </>
  );
}
