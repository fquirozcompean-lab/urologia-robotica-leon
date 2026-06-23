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
        text: "Sí. El cáncer testicular es uno de los cánceres más curables que existen. En estadio I (enfermedad localizada al testículo), la tasa de supervivencia a 5 años supera el 99% en seminoma y está por encima del 95% en no seminoma. Incluso en estadios avanzados con metástasis, la quimioterapia con esquema BEP logra altas tasas de curación. La detección temprana y el tratamiento oportuno son determinantes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se detecta el cáncer testicular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El primer paso es la autoexploración testicular mensual. Ante cualquier masa, dureza o bulto en el testículo, se debe solicitar un ultrasonido escrotal, que es el estudio de imagen de elección. Si el ultrasonido muestra una lesión sólida sospechosa, se complementa con marcadores tumorales en sangre (AFP, β-HCG, LDH) y se procede a la orquiectomía radical inguinal, que es a la vez diagnóstica y terapéutica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la orquiectomía radical inguinal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La orquiectomía radical inguinal es la cirugía de referencia para el cáncer testicular. Consiste en extirpar el testículo afectado a través de una pequeña incisión en la ingle (no en el escroto), para evitar la diseminación linfática al cambiar las vías de drenaje. Es un procedimiento quirúrgico de baja complejidad con recuperación rápida (alta el mismo día o en 24 horas), y representa el primer paso diagnóstico y terapéutico ante la sospecha de tumor testicular.",
      },
    },
    {
      "@type": "Question",
      name: "¿Afecta la fertilidad el cáncer testicular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La orquiectomía de un solo testículo no elimina la fertilidad si el testículo contralateral funciona correctamente. Sin embargo, la quimioterapia y la radioterapia sí pueden afectar la producción de espermatozoides de forma temporal o permanente. Por eso se recomienda el banco de esperma (criopreservación de semen) antes de iniciar cualquier tratamiento adyuvante, en todos los pacientes que deseen tener hijos en el futuro.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre seminoma y no seminoma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El seminoma es el tipo más frecuente en hombres de 25-35 años. Crece más lentamente y es muy sensible a la radioterapia y a la quimioterapia. Los no seminomas (carcinoma embrionario, teratoma, coriocarcinoma, tumor del saco vitelino) tienden a crecer más rápido y a diseminarse antes, pero también responden bien a la quimioterapia. La distinción es fundamental porque el plan de tratamiento adyuvante varía entre ambos tipos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Si tengo AFP elevada, puede ser seminoma puro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La AFP (alfafetoproteína) elevada descarta el diagnóstico de seminoma puro, ya que los seminomas no producen AFP. Si la AFP está elevada, el tumor debe clasificarse y tratarse como no seminoma, independientemente de lo que muestre el estudio histológico. La β-HCG puede estar elevada tanto en seminoma como en no seminoma.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la RPLND (disección retroperitoneal de ganglios)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La RPLND (Retroperitoneal Lymph Node Dissection) es la extirpación quirúrgica de los ganglios linfáticos retroperitoneales — el primer sitio de diseminación del cáncer testicular. Se indica en no seminomas en estadio I o II con enfermedad ganglionar residual o en estadio II seleccionado como alternativa a la quimioterapia. Puede realizarse por vía laparoscópica o robótica en centros con experiencia, con menor morbilidad que el abordaje abierto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura la recuperación tras la orquiectomía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La orquiectomía radical inguinal es un procedimiento ambulatorio o con 24 horas de hospitalización. La recuperación es rápida: el dolor es leve a moderado, controlable con analgésicos orales. La mayoría de los pacientes retoma actividades ligeras en 5-7 días y actividades completas en 2-3 semanas. Las relaciones sexuales y el ejercicio intenso se reanudan después de 3-4 semanas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué factores de riesgo tiene el cáncer testicular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El principal factor de riesgo es la criptorquidia (testículo no descendido), que aumenta el riesgo entre 3 y 8 veces. Otros factores incluyen antecedente familiar de primer grado con cáncer testicular, antecedente personal de cáncer testicular en el testículo contralateral, atrofia testicular marcada, e infección por VIH. La mayoría de los casos, sin embargo, ocurren en hombres sin factores de riesgo identificables.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer testicular puede volver después del tratamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La recaída es posible, especialmente en los primeros 2 años tras el tratamiento. Por eso el seguimiento oncológico es fundamental: incluye exploración física, marcadores tumorales (AFP, β-HCG, LDH) y estudios de imagen de forma periódica. La mayoría de las recaídas se detectan en el seguimiento rutinario y son tratables con quimioterapia de rescate u otras intervenciones. El seguimiento estricto a 5 años es parte integral del tratamiento.",
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
