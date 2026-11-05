import type { Metadata } from "next";
import CuestionarioIpssContent from "./CuestionarioIpssContent";

export const metadata: Metadata = {
  title: "Cuestionario IPSS de Próstata: Calcula tus Síntomas | Dr. Quiroz — León",
  description:
    "Contesta el cuestionario IPSS en 2 minutos y conoce el puntaje de tus síntomas urinarios: leves, moderados o severos. Orientativo, no sustituye la consulta. Dr. Quiroz, urólogo en León, Gto.",
  keywords: [
    "IPSS próstata",
    "cuestionario IPSS",
    "calculadora IPSS",
    "puntuación internacional de síntomas prostáticos",
    "test de próstata en línea",
    "síntomas de próstata cuestionario",
    "crecimiento de próstata síntomas",
    "urólogo próstata León",
  ],
  openGraph: {
    title: "Cuestionario IPSS de Próstata: Calcula tus Síntomas | Dr. Alejandro Quiroz",
    description:
      "8 preguntas, 2 minutos: conoce el puntaje de tus síntomas urinarios y qué significa. Orientativo, no sustituye la consulta. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/cuestionario-ipss-prostata",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cuestionario IPSS de próstata — Dr. Alejandro Quiroz Compeán León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuestionario IPSS de Próstata | Dr. Quiroz",
    description:
      "Conoce en 2 minutos el puntaje de tus síntomas urinarios. Orientativo, no sustituye la consulta. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/cuestionario-ipss-prostata",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el cuestionario IPSS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El IPSS (Puntuación Internacional de Síntomas Prostáticos) es un cuestionario de 8 preguntas que se usa en todo el mundo para medir la intensidad de los síntomas urinarios y dar seguimiento a su tratamiento. Cuenta con una versión validada en español.",
      },
    },
    {
      "@type": "Question",
      name: "¿Un puntaje alto significa que tengo cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El IPSS mide síntomas, no su causa, y no sirve para detectar cáncer. Los síntomas urinarios suelen deberse al crecimiento benigno de la próstata, aunque también a infecciones, cálculos u otras causas. Y al revés: un puntaje bajo no descarta cáncer de próstata, que en etapas iniciales casi nunca da síntomas. Para eso sirve la revisión con antígeno prostático.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cuestionario IPSS sustituye a la consulta con el urólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Es una herramienta orientativa. El diagnóstico requiere una valoración que puede incluir exploración física, antígeno prostático, análisis de orina, ultrasonido y uroflujometría.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué hago si mi puntaje IPSS es moderado o severo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lo recomendable es agendar una valoración urológica para encontrar la causa de los síntomas. El tratamiento se decide con esa evaluación, según la causa, el tamaño de la próstata y cuánto te afectan los síntomas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cada cuánto conviene contestar el IPSS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sirve para comparar: tu urólogo puede pedirte contestarlo antes de iniciar un tratamiento y durante el seguimiento, para ver si los síntomas mejoran. También puedes repetirlo si notas que tus síntomas cambian.",
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
      name: "Crecimiento de próstata",
      item: "https://urologiaroboticaleon.com/hiperplasia-prostatica-benigna",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cuestionario IPSS",
      item: "https://urologiaroboticaleon.com/cuestionario-ipss-prostata",
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Cuestionario IPSS de próstata",
  description:
    "Cuestionario internacional de síntomas prostáticos (IPSS) con cálculo del puntaje e interpretación orientativa. Dr. Alejandro Quiroz Compeán, urólogo oncólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/cuestionario-ipss-prostata",
  about: {
    "@type": "MedicalCondition",
    name: "Hiperplasia prostática benigna",
    alternateName: ["Crecimiento de próstata", "HPB"],
    code: {
      "@type": "MedicalCode",
      code: "N40",
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

export default function CuestionarioIpssPage() {
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
      <CuestionarioIpssContent />
    </>
  );
}
