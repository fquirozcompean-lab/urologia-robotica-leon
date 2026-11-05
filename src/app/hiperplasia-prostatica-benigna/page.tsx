import type { Metadata } from "next";
import HiperplasiaContent from "./HiperplasiaContent";

export const metadata: Metadata = {
  title: "Hiperplasia Prostática Benigna (HPB) en León, Gto | Dr. Quiroz Compeán",
  description:
    "Diagnóstico y tratamiento personalizado de la próstata crecida en León, Guanajuato. Dr. Alejandro Quiroz Compeán ofrece todas las opciones: láser HoLEP, láser verde, RTUP, cirugía robótica y tratamientos que preservan la eyaculación.",
  keywords: [
    "hiperplasia prostática benigna León",
    "crecimiento prostático benigno León",
    "próstata crecida León",
    "HPB León Guanajuato",
    "síntomas urinarios próstata León",
    "cirugía de próstata León",
    "tratamiento HPB León",
    "láser de próstata León",
    "HoLEP León",
    "láser verde próstata León",
    "preservar eyaculación próstata León",
    "próstata grande tratamiento León",
    "urólogo próstata León",
    "RTUP León",
    "cirugía preserva eyaculación próstata",
    "urólogo para próstata grande León",
    "tratamiento HBP Guanajuato",
  ],
  openGraph: {
    title: "Hiperplasia Prostática Benigna en León | Dr. Quiroz Compeán",
    description:
      "Tratamiento personalizado de HPB en León, Gto. Todas las opciones disponibles: láser HoLEP, láser verde, RTUP y cirugía que preserva la eyaculación. Consulta con el Dr. Quiroz.",
    url: "https://urologiaroboticaleon.com/hiperplasia-prostatica-benigna",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — Hiperplasia Prostática Benigna León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiperplasia Prostática Benigna en León | Dr. Quiroz Compeán",
    description:
      "Diagnóstico y tratamiento de próstata crecida en León, Gto. Láser HoLEP, láser verde, RTUP y opciones que preservan la eyaculación.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/hiperplasia-prostatica-benigna",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La HPB se convierte en cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La hiperplasia prostática benigna y el cáncer de próstata son enfermedades completamente distintas. La HPB no aumenta el riesgo de cáncer ni se transforma en él. Sin embargo, ambas pueden coexistir, por eso siempre se descarta el cáncer con PSA y tacto rectal en la valoración.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo evitar la cirugía de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En muchos casos sí. Los síntomas leves o moderados se controlan con medicamentos (alfabloqueadores e inhibidores de 5-alfa reductasa). La cirugía se recomienda cuando los síntomas afectan significativamente la calidad de vida, hay complicaciones como retención urinaria o infecciones repetidas, o cuando el paciente prefiere una solución definitiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Voy a quedar incontinente después de la cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La incontinencia permanente es muy rara en la cirugía de HPB. A diferencia de la cirugía por cáncer, los procedimientos para HPB (RTUP, HoLEP, láser verde) no afectan el esfínter urinario externo, por lo que la continencia se preserva en la gran mayoría de los pacientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa con mi vida sexual después del tratamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tratamiento. La RTUP y los láseres pueden causar eyaculación retrógrada (el semen va hacia la vejiga, no hacia fuera), lo que no afecta el placer ni la erección pero sí la fertilidad. Existen procedimientos como Rezum diseñados para preservar la eyaculación anterógrada. El Dr. Quiroz discute todas estas opciones con cada paciente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura la recuperación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varía según el procedimiento: láser verde y Rezum permiten retomar actividades en días. RTUP: 1–2 días de hospitalización y 1–2 semanas de recuperación. HoLEP: 1–3 días de hospitalización y 2–3 semanas. La cirugía abierta tiene la recuperación más larga (3–6 semanas).",
      },
    },
    {
      "@type": "Question",
      name: "¿Los síntomas pueden volver después de la cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los procedimientos como HoLEP y RTUP tienen excelentes resultados a largo plazo con bajas tasas de recurrencia (menos del 5–10% a 10 años). La próstata puede seguir creciendo con el tiempo, pero la mejoría es duradera. Los procedimientos más conservadores pueden tener mayor tasa de retreatamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la mejor cirugía para próstata grande?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para próstatas muy grandes (más de 80–100 g), el HoLEP (láser de Holmio) o la prostatectomía simple robótica son las mejores opciones. El HoLEP puede tratar próstatas de cualquier tamaño con mínimo sangrado y recuperación más rápida que la cirugía abierta. La elección depende también de la experiencia del cirujano y los recursos disponibles.",
      },
    },
    {
      "@type": "Question",
      name: "¿Existe tratamiento que preserve la eyaculación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Procedimientos como Rezum (ablación por vapor de agua) están diseñados para preservar la eyaculación anterógrada. Son especialmente indicados para hombres que priorizan mantener esta función, generalmente con próstatas pequeñas a medianas. El Dr. Quiroz evalúa cada caso para determinar si usted es candidato.",
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
      name: "Hiperplasia Prostática Benigna",
      item: "https://urologiaroboticaleon.com/hiperplasia-prostatica-benigna",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Hiperplasia Prostática Benigna",
  alternateName: ["HPB", "HBP", "Crecimiento prostático benigno", "Próstata crecida"],
  description:
    "Agrandamiento benigno de la glándula prostática que causa síntomas urinarios. Afecta al 50% de los hombres a los 50 años y al 80% a los 80 años. No es cáncer y tiene múltiples opciones de tratamiento.",
  code: {
    "@type": "MedicalCode",
    code: "N40",
    codingSystem: "ICD-10",
  },
  possibleTreatment: [
    { "@type": "MedicalTherapy", name: "Observación vigilante" },
    { "@type": "MedicalTherapy", name: "Alfabloqueadores" },
    { "@type": "MedicalTherapy", name: "Inhibidores de 5-alfa reductasa" },
    { "@type": "MedicalTherapy", name: "Resección transuretral de próstata (RTUP)" },
    { "@type": "MedicalTherapy", name: "Enucleación con láser de Holmio (HoLEP)" },
    { "@type": "MedicalTherapy", name: "Vaporización con láser verde (GreenLight)" },
    { "@type": "MedicalTherapy", name: "Rezum (ablación por vapor de agua)" },
    { "@type": "MedicalTherapy", name: "Prostatectomía simple robótica" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Hiperplasia Prostática Benigna (HPB) en León, Guanajuato",
  description:
    "Información completa sobre diagnóstico y tratamiento personalizado de HPB en León, Guanajuato. Dr. Alejandro Quiroz Compeán, urólogo certificado.",
  url: "https://urologiaroboticaleon.com/hiperplasia-prostatica-benigna",
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

export default function HiperplasiaPage() {
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
      <HiperplasiaContent />
    </>
  );
}
