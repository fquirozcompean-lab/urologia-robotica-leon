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
      name: "¿La hiperplasia prostática benigna se convierte en cáncer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La HPB y el cáncer de próstata son enfermedades completamente diferentes. Tener HPB no aumenta el riesgo de desarrollar cáncer de próstata. Sin embargo, ambas pueden coexistir, por lo que el Dr. Quiroz siempre descarta el cáncer durante la valoración inicial con PSA y tacto rectal.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo evitar la cirugía de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En muchos casos, sí. Los síntomas leves o moderados se pueden controlar con medicamentos (alfabloqueadores e inhibidores de 5-alfa reductasa). La cirugía se recomienda cuando los síntomas afectan significativamente la calidad de vida, cuando hay complicaciones como retención urinaria, infecciones repetidas o daño renal, o cuando el paciente prefiere una solución definitiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Voy a quedar incontinente después de la cirugía de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La incontinencia urinaria permanente es muy rara en la cirugía de HPB. A diferencia de la cirugía por cáncer de próstata, los procedimientos para HPB (RTUP, HoLEP, láser verde) no afectan el esfínter urinario externo, por lo que la continencia se preserva en la gran mayoría de los pacientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa con mi vida sexual después del tratamiento de HPB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tratamiento elegido. La resección transuretral (RTUP) y los procedimientos con láser (HoLEP, láser verde) pueden causar eyaculación retrógrada (el semen va hacia la vejiga en lugar de salir), lo cual no afecta el placer sexual ni la erección, pero sí la fertilidad. Existen procedimientos alternativos que preservan la eyaculación anterógrada, como el Rezum. El Dr. Quiroz discute todas estas opciones con cada paciente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura la recuperación después de la cirugía de próstata por HPB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varía según el procedimiento. El láser verde y Rezum permiten regreso rápido a actividades en días. La RTUP implica hospitalización de 1-2 días y recuperación de 1-2 semanas. El HoLEP requiere 1-3 días de hospitalización con recuperación de 2-3 semanas. La cirugía abierta tiene la recuperación más larga, de 3-6 semanas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los síntomas pueden volver después de la cirugía de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los procedimientos como HoLEP y RTUP tienen excelentes resultados a largo plazo con bajas tasas de recurrencia. La próstata puede seguir creciendo con el tiempo, pero la tasa de retreatamiento es baja (menos del 5-10% a 10 años). Los procedimientos más conservadores pueden tener mayor tasa de recurrencia a largo plazo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la mejor cirugía para próstata grande?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para próstatas muy grandes (más de 80-100 gramos), el HoLEP (enucleación con láser de Holmio) o la prostatectomía simple robótica son las mejores opciones. El HoLEP permite tratar próstatas de cualquier tamaño con mínimo sangrado y recuperación rápida. La elección depende también de la experiencia del cirujano y los recursos disponibles.",
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
