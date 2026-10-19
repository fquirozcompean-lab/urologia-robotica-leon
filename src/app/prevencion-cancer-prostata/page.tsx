import type { Metadata } from "next";
import PrevencionContent from "./PrevencionContent";

export const metadata: Metadata = {
  title: "Prevención del Cáncer de Próstata: Qué Funciona | Dr. Quiroz — León",
  description:
    "Cómo reducir el riesgo de cáncer de próstata y por qué la detección temprana con PSA es la clave. Hábitos con respaldo, mitos sobre suplementos y a qué edad revisarte. Dr. Quiroz, urólogo en León, Gto.",
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
      "Cómo reducir el riesgo, qué hábitos tienen respaldo, mitos sobre suplementos y por qué la detección temprana con PSA es lo más importante. León, Guanajuato.",
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
        text: "No existe una forma garantizada de prevenir el cáncer de próstata, porque los factores de mayor peso —la edad y los antecedentes familiares— no se pueden cambiar. Sin embargo, sí puedes reducir el riesgo con hábitos saludables y, sobre todo, detectarlo a tiempo con el PSA, cuando es más fácil de curar. La detección temprana es la herramienta más poderosa que tienes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué alimentos ayudan a cuidar la próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La evidencia es modesta, pero una alimentación con más verduras y frutas, menos carne roja y procesada, y menos grasas saturadas se asocia con un perfil más saludable. No hay un 'alimento milagro' que prevenga el cáncer de próstata; lo que ayuda es el patrón general de alimentación, junto con el peso adecuado y la actividad física.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los suplementos como vitamina E, selenio o licopeno previenen el cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Un estudio grande (SELECT) demostró que la vitamina E y el selenio no previenen el cáncer de próstata, e incluso la vitamina E se asoció con un ligero aumento del riesgo. El licopeno (del tomate) tiene evidencia débil e inconsistente. No se recomienda tomar suplementos para prevenir el cáncer de próstata; pueden dar una falsa sensación de protección.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué edad debo empezar a revisarme la próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En hombres de riesgo promedio, la revisión con PSA suele iniciar a los 50 años. Si tienes antecedentes familiares de cáncer de próstata o factores de riesgo, se recomienda desde los 40-45 años. La revisión es sencilla e indolora y permite detectar el cáncer en etapas tempranas.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ejercicio reduce el riesgo de cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La actividad física regular y mantener un peso saludable se asocian con un menor riesgo de cáncer de próstata agresivo y, en general, con mejor salud. No es una garantía, pero es uno de los hábitos con mejor respaldo y aporta beneficios para todo el cuerpo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo hacer algo si tengo antecedentes familiares de cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí: lo más importante es adelantar la detección. Con antecedentes familiares de primer grado o mutaciones como BRCA, la revisión con PSA suele comenzar antes (40-45 años) y con seguimiento más cercano. No puedes cambiar tu genética, pero sí encontrar el cáncer a tiempo, que es lo que cambia el pronóstico.",
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
    "Guía sobre cómo reducir el riesgo de cáncer de próstata, qué hábitos tienen respaldo científico, los mitos sobre suplementos y la importancia de la detección temprana con PSA. Dr. Alejandro Quiroz Compeán, urólogo en León, Guanajuato.",
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
