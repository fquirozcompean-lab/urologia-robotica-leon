import type { Metadata } from "next";
import QueEsProstataContent from "./QueEsProstataContent";

export const metadata: Metadata = {
  title: "¿Qué es la Próstata y para qué Sirve? | Guía del Dr. Quiroz — León",
  description:
    "Qué es la próstata, para qué sirve, cómo cambia con la edad y qué problemas puede tener (crecimiento, prostatitis, cáncer). Guía clara y basada en evidencia. Dr. Quiroz, urólogo en León, Gto.",
  keywords: [
    "qué es la próstata",
    "próstata que es",
    "para qué sirve la próstata",
    "dónde está la próstata",
    "qué es bueno para la próstata",
    "dónde duele la próstata",
    "problemas de próstata",
    "síntomas de próstata",
    "próstata hombre",
  ],
  openGraph: {
    title: "¿Qué es la Próstata y para qué Sirve? | Dr. Alejandro Quiroz Compeán",
    description:
      "Guía clara sobre la próstata: qué es, para qué sirve, cómo cambia con la edad y sus problemas más frecuentes. Basada en evidencia.",
    url: "https://urologiaroboticaleon.com/que-es-la-prostata",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "¿Qué es la próstata? — Dr. Alejandro Quiroz Compeán, León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Qué es la Próstata y para qué Sirve? | Dr. Quiroz",
    description:
      "Qué es la próstata, para qué sirve y sus problemas más frecuentes. Guía basada en evidencia. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/que-es-la-prostata",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Dónde está la próstata y qué tamaño tiene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La próstata es una glándula que solo tienen los hombres. Está debajo de la vejiga y rodea la uretra, el conducto por el que sale la orina. En un adulto joven tiene el tamaño aproximado de una nuez y tiende a crecer con la edad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué sirve la próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Su función principal es producir parte del líquido que forma el semen, el cual nutre y transporta a los espermatozoides. También participa en la eyaculación y produce el PSA, una proteína que se mide en sangre para evaluar la salud prostática.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde duele cuando hay un problema de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muchos problemas de próstata no duelen y se manifiestan con síntomas urinarios (chorro débil, orinar de noche, urgencia). Cuando hay dolor, suele sentirse en la zona baja del abdomen, entre los testículos y el ano (perineo), la espalda baja o al orinar y eyacular. El dolor es más típico de la prostatitis que del crecimiento benigno o del cáncer en etapas tempranas.",
      },
    },
    {
      "@type": "Question",
      name: "¿El ajo o los suplementos sirven para la próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No existe evidencia científica sólida de que el ajo, ni la mayoría de los suplementos 'para la próstata', traten o prevengan las enfermedades prostáticas. Algunos, como el saw palmetto, han sido estudiados y no superaron al placebo en ensayos grandes. Lo que sí ayuda es la detección temprana con PSA, hábitos saludables y una evaluación urológica oportuna. Ningún suplemento sustituye el diagnóstico médico.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué edad debo revisarme la próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En hombres de riesgo promedio, la revisión con PSA suele iniciar a los 50 años. Si hay antecedentes familiares de cáncer de próstata o factores de riesgo, se recomienda desde los 40-45 años. La revisión es sencilla e indolora y permite detectar problemas en etapas tempranas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué problemas puede tener la próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los tres más frecuentes son: el crecimiento benigno (hiperplasia prostática benigna o HPB), la inflamación (prostatitis) y el cáncer de próstata. Son condiciones distintas, con causas y tratamientos diferentes, aunque pueden compartir algunos síntomas urinarios. Por eso la evaluación debe ser individualizada.",
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
      name: "¿Qué es la próstata?",
      item: "https://urologiaroboticaleon.com/que-es-la-prostata",
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "¿Qué es la próstata y para qué sirve?",
  description:
    "Guía informativa sobre la próstata: anatomía, función, cambios con la edad y sus problemas más frecuentes (crecimiento, prostatitis y cáncer). Dr. Alejandro Quiroz Compeán, urólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/que-es-la-prostata",
  about: {
    "@type": "AnatomicalStructure",
    name: "Próstata",
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

export default function QueEsProstataPage() {
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
      <QueEsProstataContent />
    </>
  );
}
