import type { Metadata } from "next";
import CancerTesticularContent from "./CancerTesticularContent";

export const metadata: Metadata = {
  title: "Cáncer Testicular en León, Gto | Dr. Quiroz Compeán — Orquiectomía y Tratamiento",
  description:
    "Diagnóstico y tratamiento del cáncer testicular en León, Guanajuato. Dr. Alejandro Quiroz Compeán, urólogo oncólogo certificado. Orquiectomía radical inguinal, estadificación y seguimiento oncológico. Alta tasa de curación.",
  keywords: [
    "cáncer testicular León",
    "tumor testicular León Guanajuato",
    "orquiectomía León",
    "urólogo testículo León",
    "masa testicular tratamiento León",
    "seminoma León",
    "cáncer testicular tratamiento León",
    "orquiectomía inguinal León",
    "cáncer testicular Guanajuato",
    "urólogo oncólogo testículo León",
    "tumor de células germinales León",
    "biopsia testicular León",
    "marcadores tumorales testiculares León",
    "RPLND León",
    "disección retroperitoneal ganglios León",
    "oncología testicular León",
    "Dr. Quiroz cáncer testicular",
  ],
  openGraph: {
    title: "Cáncer Testicular en León | Orquiectomía y Tratamiento — Dr. Quiroz Compeán",
    description:
      "Cáncer testicular en León, Gto: orquiectomía radical inguinal, estadificación y seguimiento oncológico. El cáncer más curable en hombres jóvenes. Dr. Quiroz Compeán, urólogo oncólogo.",
    url: "https://urologiaroboticaleon.com/cancer-testicular",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — Cáncer Testicular León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cáncer Testicular en León | Dr. Quiroz Compeán",
    description:
      "Diagnóstico y tratamiento del cáncer testicular en León, Gto. Orquiectomía radical inguinal. Dr. Quiroz Compeán, urólogo oncólogo certificado.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/cancer-testicular",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿El cáncer testicular tiene cura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El cáncer testicular es uno de los más curables en toda la oncología. En estadio I, la supervivencia a 5 años supera el 99% en seminoma y el 95% en no seminoma. Incluso en estadios avanzados con metástasis, la quimioterapia BEP logra altas tasas de curación. Detectarlo y tratarlo oportunamente es determinante.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se detecta el cáncer testicular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El primer paso es la autoexploración testicular mensual. Ante cualquier masa, dureza o bulto, el siguiente paso es un ultrasonido escrotal — disponible el mismo día. Si muestra una lesión sólida sospechosa, se solicitan marcadores tumorales (AFP, β-HCG, LDH) y se procede a la orquiectomía radical inguinal para confirmación histológica definitiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la orquiectomía radical inguinal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es la cirugía de referencia para el cáncer testicular. Se extirpa el testículo afectado a través de una incisión en la ingle — no en el escroto — para no alterar las vías linfáticas. Es a la vez diagnóstica (confirma el tipo de tumor) y terapéutica. Se realiza de forma ambulatoria o con 24 horas de hospitalización, con recuperación rápida.",
      },
    },
    {
      "@type": "Question",
      name: "¿La orquiectomía afecta la fertilidad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Extirpar un solo testículo no elimina la fertilidad si el testículo contralateral funciona bien. Sin embargo, la quimioterapia y la radioterapia sí pueden afectar la producción de espermatozoides. Por eso se recomienda el banco de esperma antes de cualquier tratamiento adyuvante, en todos los pacientes que deseen paternidad futura.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre seminoma y no seminoma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El seminoma es más frecuente en 25-35 años, crece lentamente y es muy sensible a radioterapia y quimioterapia. Los no seminomas (carcinoma embrionario, teratoma, coriocarcinoma, tumor del saco vitelino) tienden a crecer más rápido, pero también responden bien a la quimioterapia BEP. La distinción determina el tratamiento adyuvante posterior a la orquiectomía.",
      },
    },
    {
      "@type": "Question",
      name: "¿Si tengo AFP elevada, puede ser seminoma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La AFP elevada descarta el seminoma puro. Si el resultado histológico dice seminoma pero la AFP está elevada, el tumor debe clasificarse y tratarse como no seminoma. La β-HCG puede estar elevada en ambos tipos. Los marcadores tumorales son fundamentales tanto para el diagnóstico como para el seguimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la RPLND y cuándo se indica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La RPLND (disección retroperitoneal de ganglios linfáticos) es la extirpación quirúrgica de los ganglios retroperitoneales — el primer sitio de diseminación del cáncer testicular. Se indica en no seminomas en estadio I de alto riesgo como alternativa a la vigilancia o quimioterapia, y en estadio II con masa ganglionar residual post-quimioterapia. Puede realizarse por vía laparoscópica o robótica en centros con experiencia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura la recuperación tras la orquiectomía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La orquiectomía es ambulatoria o con 24 horas de hospitalización. La mayoría de los pacientes retoma actividades ligeras en 5-7 días y actividades completas en 2-3 semanas. El dolor es generalmente leve-moderado y controlable con analgésicos orales. Las relaciones sexuales y el ejercicio intenso se reanudan después de 3-4 semanas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son los factores de riesgo del cáncer testicular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El principal es la criptorquidia (testículo no descendido): aumenta el riesgo 3-8 veces. Otros factores incluyen antecedente familiar directo, haber tenido cáncer testicular en el otro testículo, atrofia testicular marcada e infección por VIH. Sin embargo, la mayoría de los casos ocurren en hombres sin ningún factor de riesgo identificable.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer testicular puede volver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la recaída es posible, especialmente en los primeros 2 años. Por eso el seguimiento oncológico estricto es fundamental: marcadores tumorales, TAC de control y exploración física en intervalos definidos durante 5 años. La mayoría de las recaídas detectadas en el seguimiento son tratables con quimioterapia de rescate u otras intervenciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer testicular es mortal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rara vez. El cáncer testicular es uno de los cánceres más curables que existen: incluso cuando se ha diseminado, las tasas de curación son muy altas gracias a la quimioterapia. La clave es no demorar la consulta ante cualquier bulto o cambio en el testículo — detectarlo pronto hace el tratamiento más sencillo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se hace la autoexploración testicular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es sencilla y conviene hacerla una vez al mes, de preferencia después de una ducha tibia (la piel está relajada). Sostén cada testículo entre los dedos y rueda suavemente su superficie buscando bultos, durezas o cambios de tamaño. El epidídimo —un cordón blando en la parte de atrás— es normal. Ante cualquier bulto, dureza o cambio, acude a valoración sin esperar.",
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
      name: "Cáncer Testicular",
      item: "https://urologiaroboticaleon.com/cancer-testicular",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Cáncer Testicular",
  alternateName: [
    "Tumor testicular",
    "Tumor de células germinales",
    "Seminoma",
    "No seminoma",
    "Carcinoma de células germinales",
  ],
  description:
    "Tumor maligno originado en las células germinales del testículo. Es el cáncer más frecuente en hombres de 15 a 35 años y uno de los más curables, con tasas de supervivencia superiores al 95% en estadio localizado cuando se trata de manera oportuna.",
  code: {
    "@type": "MedicalCode",
    code: "C62",
    codingSystem: "ICD-10",
  },
  riskFactor: [
    { "@type": "MedicalRiskFactor", name: "Criptorquidia (testículo no descendido)" },
    { "@type": "MedicalRiskFactor", name: "Antecedente familiar de cáncer testicular" },
    { "@type": "MedicalRiskFactor", name: "Antecedente personal de cáncer testicular contralateral" },
    { "@type": "MedicalRiskFactor", name: "Atrofia testicular marcada" },
    { "@type": "MedicalRiskFactor", name: "Infección por VIH" },
  ],
  possibleTreatment: [
    { "@type": "MedicalTherapy", name: "Orquiectomía radical inguinal" },
    { "@type": "MedicalTherapy", name: "Vigilancia activa" },
    { "@type": "MedicalTherapy", name: "Quimioterapia BEP (bleomicina, etopósido, cisplatino)" },
    { "@type": "MedicalTherapy", name: "Radioterapia (seminoma)" },
    { "@type": "MedicalTherapy", name: "RPLND — Disección retroperitoneal de ganglios" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Cáncer Testicular en León, Guanajuato — Orquiectomía, Estadificación y Tratamiento",
  description:
    "Información completa sobre diagnóstico, estadificación y tratamiento del cáncer testicular en León, Guanajuato. Orquiectomía radical inguinal, quimioterapia BEP y seguimiento oncológico. Dr. Alejandro Quiroz Compeán, urólogo oncólogo certificado.",
  url: "https://urologiaroboticaleon.com/cancer-testicular",
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

export default function CancerTesticularPage() {
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
      <CancerTesticularContent />
    </>
  );
}
