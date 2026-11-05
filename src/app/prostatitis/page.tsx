import type { Metadata } from "next";
import ProstatitisContent from "./ProstatitisContent";

export const metadata: Metadata = {
  title: "Prostatitis (Próstata Inflamada): Síntomas y Tratamiento | Dr. Quiroz León",
  description:
    "Próstata inflamada (prostatitis): por qué se inflama, dónde duele, tipos, síntomas y tratamiento. Cuándo es urgente. Evaluación con el Dr. Quiroz, urólogo en León, Guanajuato.",
  keywords: [
    "prostatitis",
    "próstata inflamada",
    "síntomas de próstata inflamada",
    "prostata inflamada síntomas y tratamiento",
    "porque se inflama la próstata",
    "dolor de próstata",
    "prostatitis tratamiento",
    "prostatitis León",
    "ardor al orinar hombre",
  ],
  openGraph: {
    title: "Prostatitis (Próstata Inflamada): Síntomas y Tratamiento | Dr. Quiroz",
    description:
      "Por qué se inflama la próstata, dónde duele, tipos, síntomas y tratamiento. Cuándo acudir de urgencia. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/prostatitis",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prostatitis (próstata inflamada) — Dr. Alejandro Quiroz Compeán León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prostatitis (Próstata Inflamada) | Dr. Quiroz",
    description:
      "Síntomas, causas y tratamiento de la próstata inflamada. Cuándo es urgente. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/prostatitis",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre prostatitis, próstata agrandada y cáncer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La prostatitis es una inflamación, muchas veces por infección, y suele doler. La próstata agrandada (HPB) es un crecimiento benigno por la edad. El cáncer es un tumor maligno que en etapas tempranas no da síntomas. La evaluación urológica es la que las distingue.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué se inflama la próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La causa más clara son las infecciones bacterianas desde las vías urinarias. Pero la forma más frecuente es el síndrome de dolor pélvico crónico, donde no siempre hay bacteria y participan tensión del piso pélvico, estrés e inflamación.",
      },
    },
    {
      "@type": "Question",
      name: "¿La prostatitis se cura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La bacteriana aguda suele resolverse con el antibiótico adecuado. La crónica y el síndrome de dolor pélvico pueden requerir manejo más prolongado; en la mayoría de los pacientes los síntomas mejoran de forma importante, aunque pueden reaparecer.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde duele con la prostatitis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En el perineo (entre testículos y ano), la parte baja del abdomen, la ingle, los testículos, la punta del pene o la espalda baja. También puede haber ardor al orinar y dolor al eyacular.",
      },
    },
    {
      "@type": "Question",
      name: "¿La prostatitis es contagiosa o se transmite sexualmente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En general no es contagiosa. En algunos casos se relaciona con infecciones de transmisión sexual, que sí requieren tratamiento específico y valorar a la pareja. Tu urólogo determinará si es tu caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿La prostatitis aumenta el riesgo de cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No se ha demostrado que cause cáncer. Sin embargo, la inflamación puede elevar temporalmente el antígeno prostático (PSA), lo que a veces genera confusión. Por eso, ante un antígeno prostático elevado, el urólogo considera el contexto completo antes de tomar decisiones.",
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
      name: "Prostatitis (próstata inflamada)",
      item: "https://urologiaroboticaleon.com/prostatitis",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Prostatitis (próstata inflamada)",
  alternateName: [
    "Próstata inflamada",
    "Inflamación de la próstata",
    "Síndrome de dolor pélvico crónico",
  ],
  description:
    "Inflamación de la próstata, que puede ser bacteriana (aguda o crónica) o no bacteriana (síndrome de dolor pélvico crónico). Causa dolor pélvico, síntomas urinarios y molestias al eyacular. Es distinta del crecimiento prostático benigno y del cáncer de próstata.",
  code: {
    "@type": "MedicalCode",
    code: "N41",
    codingSystem: "ICD-10",
  },
  possibleTreatment: [
    { "@type": "MedicalTherapy", name: "Antibióticos (prostatitis bacteriana)" },
    { "@type": "MedicalTherapy", name: "Antiinflamatorios y alfa-bloqueadores" },
    { "@type": "MedicalTherapy", name: "Terapia del piso pélvico" },
    { "@type": "MedicalTherapy", name: "Manejo multimodal del dolor pélvico crónico" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Prostatitis (próstata inflamada): síntomas, causas y tratamiento",
  description:
    "Información sobre la prostatitis o próstata inflamada: tipos, por qué se inflama, dónde duele, diagnóstico y tratamiento. Dr. Alejandro Quiroz Compeán, urólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/prostatitis",
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

export default function ProstatitisPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <ProstatitisContent />
    </>
  );
}
