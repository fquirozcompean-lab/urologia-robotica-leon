import type { Metadata } from "next";
import HematuriaContent from "./HematuriaContent";

export const metadata: Metadata = {
  title: "Sangre en la Orina (Hematuria) en León | Causas y Evaluación — Dr. Quiroz",
  description:
    "¿Orinas con sangre? La hematuria puede deberse a infección, cálculos o crecimiento de próstata, pero también puede ser el primer signo de un tumor urológico. Evaluación con el Dr. Quiroz Compeán en León, Guanajuato.",
  keywords: [
    "sangre en la orina",
    "orinar con sangre",
    "hematuria León",
    "sangre en la orina hombre",
    "orino con sangre sin dolor",
    "por qué orino con sangre",
    "hematuria causas",
    "coágulos en la orina",
    "sangre en la orina Guanajuato",
    "urólogo hematuria León",
  ],
  openGraph: {
    title: "Sangre en la Orina (Hematuria) | Dr. Quiroz Compeán — León, Gto.",
    description:
      "Causas de la sangre en la orina y cuándo es una señal de alarma. Evaluación urológica especializada en León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/hematuria",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sangre en la orina (hematuria) — Dr. Alejandro Quiroz Compeán León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sangre en la Orina (Hematuria) | Dr. Quiroz Compeán",
    description:
      "Causas de la hematuria y cuándo acudir con el urólogo. Evaluación especializada en León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/hematuria",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Es grave ver sangre en la orina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cualquier episodio de sangre visible en la orina debe evaluarse, incluso si ocurre una sola vez y desaparece. Muchas causas son benignas —como una infección o un cálculo— pero la sangre en la orina también puede ser el primer y único signo de un tumor de vejiga o de riñón. La única forma de saberlo es con una evaluación urológica.",
      },
    },
    {
      "@type": "Question",
      name: "Orino con sangre pero no me duele, ¿debo preocuparme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La hematuria sin dolor (indolora) es precisamente la forma en que suelen manifestarse los tumores de vejiga y riñón, por lo que no debe ignorarse. La ausencia de dolor no significa que sea inofensiva; al contrario, es un motivo importante para acudir pronto con el urólogo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué enfermedades causan sangre en la orina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las causas más frecuentes son las infecciones urinarias, los cálculos renales o ureterales y el crecimiento benigno de la próstata (HPB). Otras causas incluyen el cáncer de vejiga, el cáncer de riñón, el cáncer de próstata, enfermedades del riñón, el ejercicio intenso y algunos medicamentos anticoagulantes. La evaluación busca distinguir las causas benignas de las que requieren tratamiento urgente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué estudios se hacen para encontrar la causa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La evaluación suele incluir un análisis de orina y urocultivo, estudios de imagen del aparato urinario (ultrasonido o tomografía uro-TC), y en muchos casos una cistoscopia, que permite revisar el interior de la vejiga con una cámara. En algunos casos se añade citología urinaria. El plan se ajusta a la edad, los factores de riesgo y el tipo de sangrado.",
      },
    },
    {
      "@type": "Question",
      name: "Vi sangre en la orina una sola vez y ya no volvió, ¿debo revisarme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Un solo episodio de sangre visible es suficiente para justificar una evaluación, aunque la orina vuelva a verse normal. Los tumores urológicos pueden sangrar de forma intermitente, por lo que esperar a que 'vuelva a pasar' puede retrasar un diagnóstico importante.",
      },
    },
    {
      "@type": "Question",
      name: "¿La sangre en la orina siempre es cáncer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La mayoría de los casos se deben a causas benignas como infecciones, cálculos o crecimiento de la próstata. Sin embargo, como la hematuria puede ser el único signo temprano de un tumor, el objetivo de la evaluación es descartar las causas graves y tratar la que corresponda. Detectar un problema a tiempo mejora mucho el pronóstico.",
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
      name: "Sangre en la Orina (Hematuria)",
      item: "https://urologiaroboticaleon.com/hematuria",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Hematuria (sangre en la orina)",
  alternateName: [
    "Sangre en la orina",
    "Orinar con sangre",
    "Hematuria macroscópica",
    "Hematuria microscópica",
  ],
  description:
    "Presencia de sangre en la orina, visible (macroscópica) o detectada solo en el análisis (microscópica). Puede deberse a causas benignas como infección, cálculos o crecimiento prostático, o ser el primer signo de un tumor urológico. Requiere evaluación urológica.",
  code: {
    "@type": "MedicalCode",
    code: "R31",
    codingSystem: "ICD-10",
  },
  possibleCause: [
    { "@type": "MedicalCause", name: "Infección de vías urinarias" },
    { "@type": "MedicalCause", name: "Cálculos renales o ureterales" },
    { "@type": "MedicalCause", name: "Hiperplasia prostática benigna" },
    { "@type": "MedicalCause", name: "Cáncer de vejiga" },
    { "@type": "MedicalCause", name: "Cáncer renal" },
    { "@type": "MedicalCause", name: "Cáncer de próstata" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
  },
};

export default function HematuriaPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
      />
      <HematuriaContent />
    </>
  );
}
