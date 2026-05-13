import type { Metadata } from "next";
import CancerVejigaContent from "./CancerVejigaContent";

export const metadata: Metadata = {
  title: "Cáncer de Vejiga en León, Gto | Dr. Quiroz Compeán — Cistoscopia y Cistectomía Robótica",
  description:
    "Sangre en la orina en León, Guanajuato: diagnóstico y tratamiento especializado del cáncer de vejiga. Dr. Alejandro Quiroz Compeán, urólogo oncólogo certificado. Cistoscopia, resección transuretral, BCG y cistectomía robótica.",
  keywords: [
    "cáncer de vejiga León",
    "sangre en la orina León",
    "hematuria León Guanajuato",
    "cistoscopia León",
    "urólogo sangre en orina León",
    "tumor vejiga León",
    "tratamiento cáncer de vejiga León",
    "cistectomía robótica León",
    "resección transuretral vejiga León",
    "BCG intravesical León",
    "neovejiga León",
    "urólogo oncólogo vejiga León",
    "hematuria causas León",
    "diagnóstico cáncer vejiga Guanajuato",
    "sangre orina urólogo León",
    "factores riesgo cáncer vejiga",
    "tabaquismo cáncer vejiga",
    "exposición químicos cáncer vejiga",
    "cistectomía laparoscópica León",
    "oncología urológica León",
  ],
  openGraph: {
    title: "Cáncer de Vejiga en León | Sangre en Orina — Dr. Quiroz Compeán",
    description:
      "Sangre en la orina puede ser señal de cáncer de vejiga. Diagnóstico con cistoscopia y tratamiento completo en León, Gto: RTU-V, BCG, cistectomía robótica. Dr. Quiroz Compeán, urólogo oncólogo.",
    url: "https://urologiaroboticaleon.com/cancer-vejiga",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — Cáncer de Vejiga León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cáncer de Vejiga en León | Dr. Quiroz Compeán",
    description:
      "Sangre en la orina: diagnóstico y tratamiento del cáncer de vejiga en León, Guanajuato. Cistoscopia, BCG y cistectomía robótica.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/cancer-vejiga",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Toda sangre en la orina es cáncer de vejiga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La hematuria tiene muchas causas: infecciones urinarias, cálculos renales, hiperplasia prostática, entre otras. Sin embargo, nunca debe ignorarse. El cáncer de vejiga se presenta con hematuria en el 80–90% de los casos, y solo una evaluación urológica completa con cistoscopia puede descartar o confirmar el diagnóstico.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer de vejiga se puede curar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, especialmente cuando se detecta en etapas tempranas. El cáncer no músculo invasivo (el 70–80% de los casos al diagnóstico) tiene una tasa de supervivencia a 5 años mayor al 90% con tratamiento adecuado. El pronóstico depende directamente de la etapa al momento del diagnóstico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo vivir sin vejiga después de una cistectomía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, con muy buena calidad de vida. La neovejiga ortotópica construida con intestino permite orinar de forma natural. El conducto ileal (Bricker) drena la orina hacia una bolsa externa. Muchos pacientes con urostomía llevan una vida completamente normal, incluyendo trabajo, deporte y vida social.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la cistoscopia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cistoscopia consiste en introducir un delgado tubo con cámara a través de la uretra hasta la vejiga bajo anestesia local. Permite visualizar directamente la mucosa vesical, detectar lesiones sospechosas y tomar biopsia. Es el estándar de oro para el diagnóstico del cáncer de vejiga.",
      },
    },
    {
      "@type": "Question",
      name: "¿Fumar poco también aumenta el riesgo de cáncer de vejiga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. No hay un umbral seguro de tabaquismo. Incluso los fumadores ligeros tienen riesgo elevado. El riesgo es proporcional a la cantidad de cigarrillos y los años de tabaquismo. Si fumas y has tenido hematuria, la evaluación urológica es urgente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el BCG intravesical?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El BCG es una bacteria atenuada que, instilada directamente dentro de la vejiga, activa el sistema inmune local para destruir células cancerosas residuales. Es la inmunoterapia intravesical más efectiva para el cáncer de vejiga de alto riesgo no músculo invasivo, administrada durante 6 semanas y luego en mantenimiento hasta 3 años.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué frecuencia debo hacerme cistoscopias de seguimiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para tumores de bajo riesgo: cistoscopia a los 3 meses y luego cada año. Para tumores de alto riesgo: cada 3 meses el primer año, cada 6 meses el segundo, y anualmente después. El seguimiento de por vida es esencial — el cáncer de vejiga no músculo invasivo puede recurrir en el 70% de los casos sin vigilancia.",
      },
    },
    {
      "@type": "Question",
      name: "¿La cistectomía afecta la función sexual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede afectarla. En hombres, la cistectomía radical puede causar disfunción eréctil y eyaculación ausente. Existen técnicas de preservación nerviosa en casos seleccionados. En mujeres puede afectar la sensibilidad vaginal y la lubricación. El Dr. Quiroz analiza las opciones de preservación funcional caso por caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura la recuperación después de una cistectomía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con cistectomía robótica o laparoscópica: hospitalización de 3–5 días y retorno a actividades en 4–6 semanas. Con cistectomía abierta: hospitalización de 5–7 días y recuperación de 6–8 semanas.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer de vejiga es hereditario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoría de los casos no es hereditario — es multifactorial. Sin embargo, tener un familiar de primer grado con cáncer de vejiga aumenta el riesgo moderadamente. Existen síndromes genéticos raros como el síndrome de Lynch que aumentan el riesgo de cáncer urotelial.",
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
      name: "Cáncer de Vejiga",
      item: "https://urologiaroboticaleon.com/cancer-vejiga",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Cáncer de Vejiga",
  alternateName: [
    "Tumor de vejiga",
    "Carcinoma urotelial",
    "Neoplasia vesical",
    "Carcinoma de células transicionales",
  ],
  description:
    "Tumor maligno que surge en el revestimiento interno de la vejiga urinaria. Es el cuarto cáncer más común en hombres. La hematuria (sangre en la orina) es el síntoma más frecuente. El diagnóstico temprano ofrece tasas de curación superiores al 90%.",
  code: {
    "@type": "MedicalCode",
    code: "C67",
    codingSystem: "ICD-10",
  },
  riskFactor: [
    { "@type": "MedicalRiskFactor", name: "Tabaquismo" },
    { "@type": "MedicalRiskFactor", name: "Exposición ocupacional a aminas aromáticas" },
    { "@type": "MedicalRiskFactor", name: "Edad mayor de 55 años" },
    { "@type": "MedicalRiskFactor", name: "Radioterapia pélvica previa" },
    { "@type": "MedicalRiskFactor", name: "Quimioterapia con ciclofosfamida" },
  ],
  possibleTreatment: [
    { "@type": "MedicalTherapy", name: "Resección transuretral de vejiga (RTU-V)" },
    { "@type": "MedicalTherapy", name: "Inmunoterapia intravesical con BCG" },
    { "@type": "MedicalTherapy", name: "Quimioterapia intravesical (Mitomicina / Gemcitabina)" },
    { "@type": "MedicalTherapy", name: "Cistectomía radical robótica" },
    { "@type": "MedicalTherapy", name: "Cistectomía radical laparoscópica" },
    { "@type": "MedicalTherapy", name: "Quimioterapia neoadyuvante con cisplatino" },
    { "@type": "MedicalTherapy", name: "Trimodalidad — preservación de vejiga" },
    { "@type": "MedicalTherapy", name: "Quimioterapia sistémica e inmunoterapia" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Cáncer de Vejiga en León, Guanajuato — Diagnóstico y Tratamiento",
  description:
    "Información completa sobre diagnóstico, estadificación y tratamiento del cáncer de vejiga en León, Guanajuato. Dr. Alejandro Quiroz Compeán, urólogo oncólogo certificado.",
  url: "https://urologiaroboticaleon.com/cancer-vejiga",
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

export default function CancerVejigaPage() {
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
      <CancerVejigaContent />
    </>
  );
}
