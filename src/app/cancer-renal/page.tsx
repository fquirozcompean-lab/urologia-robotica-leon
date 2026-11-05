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
        text: "No. Existen masas renales benignas — la más común es el angiomiolipoma(contiene grasa y vasos sanguíneos, detectable en TAC), seguido del oncocitoma. Sin embargo, muchos tumores renales no pueden distinguirse de un cáncer solo por imagen — requieren resección quirúrgica para análisis patológico definitivo. No se puede asumir que un tumor renal es benigno sin una evaluación especializada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo conservar mi riñón si tengo un tumor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En muchos casos, sí. La nefrectomía parcial — extirpación solo del tumor preservando el riñón — es el tratamiento de elección para tumores menores de 7 cm en localización favorable. Tiene la misma eficacia oncológica que la extirpación completa del riñón y protege mejor tu función renal y salud cardiovascular a largo plazo. La viabilidad depende del tamaño, localización y complejidad del tumor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo es necesario quitar el riñón completo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La nefrectomía radical está indicada cuando el tumor es muy grande (>7 cm), tiene una localización central que compromete el sistema colector del riñón, hay extensión a la vena renal o cava (trombo tumoral), el tumor es multifocal, o cuando técnicamente no es posible una resección parcial segura con márgenes libres.",
      },
    },
    {
      "@type": "Question",
      name: "¿La cirugía robótica es mejor que la laparoscópica para riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del caso. Para la nefrectomía parcial, la robótica aporta ventajas claras en tumores complejos o centrales: visión 3D, instrumentos articulados y sutura más rápida del riñón — lo que reduce el tiempo de isquemia. Para la nefrectomía radical en casos estándar, la laparoscopia convencional ofrece resultados equivalentes. El Dr. Quiroz utiliza la técnica más adecuada para cada caso, no una sola para todos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo vivir con un solo riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La mayoría de las personas con un riñón lleva una vida completamente normal. El riñón restante tiene capacidad de hipertrofia compensatoria — aumenta su función hasta en un 70% de lo perdido. Sin embargo, la función renal total será menor, lo que aumenta el riesgo a largo plazo de hipertensión y enfermedad cardiovascular. Por eso preservar el riñón cuando es posible es siempre preferible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Voy a necesitar diálisis después de la cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la gran mayoría de los casos, no. Si el riñón contralateral (el que queda) es sano y funciona bien, la nefrectomía no provoca necesidad de diálisis. El riesgo aumenta si ya tienes enfermedad renal crónica preexistente, diabetes, hipertensión mal controlada o si se extirpa el único riñón funcionante. La función renal se evalúa cuidadosamente antes de la cirugía.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer renal se puede curar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, especialmente cuando se detecta temprano. El cáncer renal en estadio I (tumor ≤7 cm, confinado al riñón) tiene una supervivencia a 5 años superior al 95% con cirugía adecuada. El estadio II alcanza el 88%. La cirugía es el único tratamiento con potencial curativo para enfermedad localizada. El cáncer renal metastásico tiene pronóstico más reservado, aunque la inmunoterapia moderna ha mejorado significativamente los resultados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura la cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La nefrectomía radical laparoscópica tiene una duración de 2–3 horas. La nefrectomía parcial robótica o laparoscópica de 2–4 horas dependiendo de la complejidad del tumor. La nefrectomía con trombo tumoral o la cirugía abierta en tumores muy grandes pueden durar 4–6 horas. El Dr. Quiroz discute el tiempo estimado según tu caso específico.",
      },
    },
    {
      "@type": "Question",
      name: "¿La función renal se recupera después de nefrectomía parcial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Después de la nefrectomía parcial puede haber una reducción temporal de la función renal relacionada con el tiempo de isquemia (flujo cortado durante la cirugía). En la mayoría de los casos, la función se recupera parcialmente en las semanas siguientes. La pérdida permanente de función depende de cuánto tejido renal sano se resecó y del tiempo de isquemia. En general la nefrectomía parcial preserva el 70–90% de la función del riñón operado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo puedo regresar a trabajar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con cirugía mínimamente invasiva (laparoscópica o robótica): trabajo sedentario en 2–3 semanas. Trabajo físico moderado en 4–6 semanas. Con cirugía abierta: trabajo sedentario en 4–6 semanas, trabajo físico en 6–8 semanas. La conducción se permite cuando no hay dolor significativo y el paciente no está tomando opioides — generalmente 1–2 semanas tras cirugía mínimamente invasiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si el cáncer ya se diseminó (metástasis)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El cáncer renal metastásico se trata con terapias sistémicas: inmunoterapia (inhibidores de checkpoint como nivolumab + ipilimumab) y/o terapias dirigidas (inhibidores de tirosina kinasa). La inmunoterapia ha transformado el pronóstico de la enfermedad metastásica en los últimos años. En casos seleccionados con bajo volumen metastásico, extirpar el tumor primario (nefrectomía citorreductiva) puede mejorar la respuesta al tratamiento. El manejo es siempre multidisciplinario con oncología médica.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer renal es hereditario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoría de los casos es esporádico. Sin embargo, entre el 5–8% de los cánceres renales tienen base genética: el síndrome de Von Hippel-Lindau (asociado a carcinoma de células claras), carcinoma papilar hereditario tipo 1, y otros. Estos pacientes pueden desarrollar múltiples tumores renales bilaterales a lo largo de su vida y requieren seguimiento especializado y asesoría genética. Si tienes antecedentes familiares de cáncer renal, menciónalo en la consulta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué síntomas da el cáncer de riñón en las mujeres?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El cáncer renal produce los mismos síntomas en mujeres y en hombres, porque no depende de órganos sexuales. Los más frecuentes son: sangre en la orina (hematuria), dolor persistente en el costado o la espalda baja, una masa palpable en el abdomen, fatiga, pérdida de peso sin explicación y anemia. En mujeres, el sangrado urinario a veces se confunde con sangrado ginecológico o con una infección, lo que puede retrasar el diagnóstico. Hoy muchos tumores renales se detectan por casualidad en ecografías o tomografías hechas por otra causa, antes de dar síntomas. Ante sangre en la orina o dolor lumbar persistente, conviene una valoración urológica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué síntomas da el cáncer de riñón avanzado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuando el cáncer renal está avanzado o se ha diseminado, pueden aparecer síntomas fuera del riñón según los órganos afectados: tos persistente o falta de aire (pulmón), dolor óseo (hueso), pérdida de peso importante, fatiga marcada, fiebre sin causa aparente y anemia. También puede haber hipertensión o elevación del calcio en sangre. Es importante saber que, incluso en etapas avanzadas, el cáncer renal cuenta hoy con tratamientos que han transformado el pronóstico: la inmunoterapia y las terapias dirigidas permiten controlar la enfermedad durante periodos prolongados en muchos pacientes. Un diagnóstico avanzado no significa que no haya opciones, sino que el manejo debe ser multidisciplinario y personalizado.",
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
