import type { Metadata } from "next";
import CancerRenalContent from "./CancerRenalContent";

export const metadata: Metadata = {
  title: "Cáncer Renal en León, Gto | Dr. Quiroz Compeán — Nefrectomía Parcial Robótica",
  description:
    "Diagnóstico y tratamiento del cáncer de riñón en León, Guanajuato. Dr. Alejandro Quiroz Compeán: nefrectomía parcial robótica y laparoscópica con preservación de función renal. Cirugía mínimamente invasiva de alto volumen.",
  keywords: [
    "cáncer renal León",
    "cáncer de riñón León",
    "tumor renal León",
    "masa renal León Guanajuato",
    "nefrectomía parcial León",
    "nefrectomía parcial robótica León",
    "nefrectomía laparoscópica León",
    "cirugía robótica riñón León",
    "preservación función renal León",
    "urólogo oncólogo riñón León",
    "carcinoma células renales León",
    "tumor riñón tratamiento León",
    "cirugía mínimamente invasiva riñón León",
    "nefrectomía radical laparoscópica León",
    "cáncer renal Guanajuato",
    "oncología renal León",
    "cirugía riñón León",
    "urólogo cáncer riñón León",
  ],
  openGraph: {
    title: "Cáncer Renal en León | Nefrectomía Parcial Robótica — Dr. Quiroz Compeán",
    description:
      "Cáncer de riñón en León, Gto: nefrectomía parcial robótica y laparoscópica con preservación de función renal. Alto volumen quirúrgico. Dr. Quiroz Compeán, urólogo oncólogo.",
    url: "https://urologiaroboticaleon.com/cancer-renal",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — Cáncer Renal León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cáncer Renal en León | Dr. Quiroz Compeán",
    description:
      "Nefrectomía parcial robótica y laparoscópica en León, Gto. Preservación de función renal. Dr. Quiroz Compeán, urólogo oncólogo certificado.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/cancer-renal",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Todos los tumores renales son cáncer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Existen masas renales benignas como el angiomiolipoma y el oncocitoma. Sin embargo, muchos tumores renales no pueden distinguirse de un cáncer solo por imagen y requieren resección quirúrgica para análisis patológico definitivo. No se puede asumir que un tumor renal es benigno sin evaluación especializada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo conservar mi riñón si tengo un tumor renal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En muchos casos sí. La nefrectomía parcial es el tratamiento de elección para tumores menores de 7 cm en localización favorable. Tiene la misma eficacia oncológica que la extirpación completa del riñón y protege mejor la función renal a largo plazo. La viabilidad depende del tamaño, localización y complejidad del tumor.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer renal se puede curar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, especialmente cuando se detecta temprano. El cáncer renal en estadio I tiene supervivencia a 5 años superior al 95% con cirugía adecuada. La cirugía es el único tratamiento con potencial curativo para enfermedad localizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo vivir con un solo riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La mayoría de las personas con un riñón lleva una vida completamente normal. El riñón restante tiene capacidad de hipertrofia compensatoria. Sin embargo, la función renal total será menor, aumentando el riesgo cardiovascular a largo plazo. Por eso preservar el riñón cuando es posible es siempre preferible.",
      },
    },
    {
      "@type": "Question",
      name: "¿La cirugía robótica es mejor que la laparoscópica para riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del caso. Para nefrectomía parcial, la robótica aporta ventajas claras en tumores complejos: visión 3D y sutura más rápida que reduce el tiempo de isquemia. Para nefrectomía radical en casos estándar, la laparoscopia convencional ofrece resultados equivalentes. El Dr. Quiroz utiliza la técnica más adecuada para cada caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo es necesario quitar el riñón completo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La nefrectomía radical está indicada cuando el tumor es mayor de 7 cm, tiene localización central que compromete el sistema colector, hay extensión a la vena renal o cava (trombo tumoral), el tumor es multifocal, o cuando técnicamente no es posible una resección parcial segura.",
      },
    },
    {
      "@type": "Question",
      name: "¿Voy a necesitar diálisis después de la cirugía renal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la gran mayoría de los casos, no. Si el riñón contralateral es sano y funciona bien, la nefrectomía no provoca necesidad de diálisis. El riesgo aumenta si ya tienes enfermedad renal crónica preexistente, diabetes o hipertensión mal controlada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo puedo regresar a trabajar después de la cirugía renal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con cirugía mínimamente invasiva: trabajo sedentario en 2-3 semanas, trabajo físico moderado en 4-6 semanas. Con cirugía abierta: trabajo sedentario en 4-6 semanas, trabajo físico en 6-8 semanas.",
      },
    },
    {
      "@type": "Question",
      name: "¿La función renal se recupera después de nefrectomía parcial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede haber una reducción temporal de función renal tras la nefrectomía parcial. En la mayoría de casos, la función se recupera parcialmente en las semanas siguientes. En general la nefrectomía parcial preserva el 70-90% de la función del riñón operado.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer renal es hereditario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoría de los casos es esporádico. Entre el 5-8% tienen base genética: síndrome de Von Hippel-Lindau, carcinoma papilar hereditario, entre otros. Estos pacientes pueden desarrollar múltiples tumores bilaterales y requieren seguimiento especializado y asesoría genética.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si el cáncer renal ya se diseminó?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El cáncer renal metastásico se trata con terapias sistémicas: inmunoterapia (nivolumab + ipilimumab, pembrolizumab) y terapias dirigidas. La inmunoterapia ha transformado el pronóstico. En casos seleccionados, extirpar el tumor primario puede mejorar la respuesta al tratamiento. El manejo es siempre multidisciplinario.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura la cirugía de riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La nefrectomía radical laparoscópica dura 2-3 horas. La nefrectomía parcial robótica o laparoscópica de 2-4 horas según la complejidad. La nefrectomía con trombo tumoral o cirugía abierta en tumores muy grandes puede durar 4-6 horas.",
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
      name: "Cáncer Renal",
      item: "https://urologiaroboticaleon.com/cancer-renal",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Cáncer Renal",
  alternateName: [
    "Cáncer de riñón",
    "Tumor renal",
    "Carcinoma de células renales",
    "Masa renal",
    "Neoplasia renal",
  ],
  description:
    "Tumor maligno que se origina en las células del riñón. Es el tercer cáncer urológico más frecuente. El 50-60% se detectan incidentalmente en estudios de imagen. El tratamiento quirúrgico mínimamente invasivo ofrece excelente pronóstico en etapas tempranas.",
  code: {
    "@type": "MedicalCode",
    code: "C64",
    codingSystem: "ICD-10",
  },
  riskFactor: [
    { "@type": "MedicalRiskFactor", name: "Tabaquismo" },
    { "@type": "MedicalRiskFactor", name: "Obesidad" },
    { "@type": "MedicalRiskFactor", name: "Hipertensión arterial" },
    { "@type": "MedicalRiskFactor", name: "Enfermedad renal crónica" },
    { "@type": "MedicalRiskFactor", name: "Síndrome de Von Hippel-Lindau" },
  ],
  possibleTreatment: [
    { "@type": "MedicalTherapy", name: "Vigilancia activa" },
    { "@type": "MedicalTherapy", name: "Nefrectomía parcial robótica" },
    { "@type": "MedicalTherapy", name: "Nefrectomía parcial laparoscópica" },
    { "@type": "MedicalTherapy", name: "Nefrectomía radical laparoscópica" },
    { "@type": "MedicalTherapy", name: "Nefrectomía radical robótica" },
    { "@type": "MedicalTherapy", name: "Crioablación percutánea" },
    { "@type": "MedicalTherapy", name: "Inmunoterapia sistémica" },
    { "@type": "MedicalTherapy", name: "Terapias dirigidas anti-VEGF" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Cáncer Renal en León, Guanajuato — Nefrectomía Parcial Robótica y Laparoscópica",
  description:
    "Información completa sobre diagnóstico, estadificación y tratamiento quirúrgico del cáncer renal en León, Guanajuato. Enfoque en preservación de función renal. Dr. Alejandro Quiroz Compeán, urólogo oncólogo certificado.",
  url: "https://urologiaroboticaleon.com/cancer-renal",
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

export default function CancerRenalPage() {
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
      <CancerRenalContent />
    </>
  );
}
