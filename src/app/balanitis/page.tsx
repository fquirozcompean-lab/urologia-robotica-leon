import type { Metadata } from "next";
import BalanitisContent from "./BalanitisContent";

export const metadata: Metadata = {
  title: "Balanitis: Causas, Síntomas y Tratamiento | Dr. Quiroz — León, Gto.",
  description:
    "Balanitis (inflamación del glande): por qué aparece, síntomas (enrojecimiento, comezón, ardor), causas y tratamiento. Cuándo NO automedicarse. Dr. Quiroz, urólogo en León, Guanajuato.",
  keywords: [
    "balanitis",
    "balanitis tratamiento",
    "inflamación del glande",
    "enrojecimiento del glande",
    "comezón en el pene",
    "hongos en el pene",
    "infección en el pene",
    "crema para balanitis",
    "balanitis causas",
    "balanitis León",
  ],
  openGraph: {
    title: "Balanitis: Causas, Síntomas y Tratamiento | Dr. Alejandro Quiroz Compeán",
    description:
      "Inflamación del glande: síntomas, causas y tratamiento. Por qué no toda balanitis es por hongos y cuándo acudir al urólogo. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/balanitis",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Balanitis: causas, síntomas y tratamiento — Dr. Alejandro Quiroz Compeán León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balanitis: Causas, Síntomas y Tratamiento | Dr. Quiroz",
    description:
      "Inflamación del glande: síntomas, causas y tratamiento. Cuándo no automedicarse. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/balanitis",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La balanitis es una infección de transmisión sexual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesariamente. La balanitis es una inflamación del glande que puede tener muchas causas: hongos (Candida), bacterias, irritación por jabones o higiene inadecuada, dermatitis, psoriasis o enfermedades de la piel, entre otras. Algunas infecciones de transmisión sexual pueden causarla, pero la mayoría de los casos no son por una ITS. La evaluación urológica define la causa real.",
      },
    },
    {
      "@type": "Question",
      name: "¿Sirve una crema antimicótica (antihongos) para la balanitis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los antimicóticos tópicos (por ejemplo, clotrimazol) ayudan cuando la balanitis es por hongos, que es una causa frecuente, sobre todo en personas con diabetes. Pero no toda balanitis es por hongos: si te automedicas a ciegas y la causa es otra (dermatitis, psoriasis, liquen escleroso, una ITS u otra), el problema no mejora y puede retrasarse un diagnóstico importante. Si no cede en pocos días o reaparece, conviene una valoración.",
      },
    },
    {
      "@type": "Question",
      name: "¿La balanitis se quita sola?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Algunos casos leves por irritación mejoran con higiene suave y evitando el agente irritante. Sin embargo, cuando hay infección o una causa de piel de fondo, suele requerir tratamiento dirigido. La balanitis que no mejora, que reaparece o que se acompaña de lesiones que no curan debe evaluarse.",
      },
    },
    {
      "@type": "Question",
      name: "¿La diabetes causa balanitis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La diabetes, sobre todo si el azúcar está mal controlado, favorece la balanitis por hongos y las recaídas. De hecho, una balanitis candidiásica de repetición puede ser la primera señal de una diabetes no diagnosticada, por lo que a veces se recomienda revisar la glucosa.",
      },
    },
    {
      "@type": "Question",
      name: "¿La circuncisión previene la balanitis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La balanitis es más frecuente en hombres no circuncidados, porque la humedad y los restos bajo el prepucio favorecen la irritación e infección. En casos de balanitis muy recurrente o de fimosis asociada, la circuncisión puede ser una opción de tratamiento, que se valora de forma individual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo debo preocuparme por una balanitis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conviene acudir con el urólogo si la balanitis no mejora con el tratamiento, si reaparece con frecuencia, o si aparecen placas blancas, endurecimiento, una lesión que no cura, sangrado o cambios en la piel del glande. Estos signos ayudan a descartar causas como el liquen escleroso u otras condiciones que requieren un manejo específico.",
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
      name: "Balanitis",
      item: "https://urologiaroboticaleon.com/balanitis",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Balanitis (inflamación del glande)",
  alternateName: [
    "Inflamación del glande",
    "Balanopostitis",
    "Enrojecimiento del glande",
  ],
  description:
    "Inflamación del glande (la punta del pene), que puede afectar también el prepucio (balanopostitis). Sus causas incluyen infecciones por hongos o bacterias, irritación, dermatitis y enfermedades de la piel. Es más frecuente en hombres no circuncidados y en personas con diabetes.",
  code: {
    "@type": "MedicalCode",
    code: "N48.1",
    codingSystem: "ICD-10",
  },
  possibleCause: [
    { "@type": "MedicalCause", name: "Infección por hongos (Candida)" },
    { "@type": "MedicalCause", name: "Infección bacteriana" },
    { "@type": "MedicalCause", name: "Irritación o higiene inadecuada" },
    { "@type": "MedicalCause", name: "Dermatitis, psoriasis o liquen escleroso" },
    { "@type": "MedicalCause", name: "Diabetes (factor de riesgo)" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Balanitis: causas, síntomas y tratamiento",
  description:
    "Guía sobre la balanitis o inflamación del glande: síntomas, causas, tratamiento y cuándo acudir al urólogo. Dr. Alejandro Quiroz Compeán, urólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/balanitis",
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

export default function BalanitisPage() {
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
      <BalanitisContent />
    </>
  );
}
