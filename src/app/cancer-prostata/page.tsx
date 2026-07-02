import type { Metadata } from "next";
import CancerProstataContent from "./CancerProstataContent";

export const metadata: Metadata = {
  title: "Cáncer de Próstata en León | Cirugía Robótica — Dr. Quiroz",
  description:
    "Urólogo oncólogo en León, Gto. Diagnóstico con PET-PSMA y prostatectomía robótica de mínima invasión. Agende su valoración con el Dr. Quiroz Compeán.",
  keywords: [
    "cáncer de próstata León",
    "cáncer de próstata Guanajuato",
    "prostatectomía robótica León",
    "tratamiento cáncer próstata León",
    "PSA elevado León",
    "biopsia de próstata León",
    "urólogo oncólogo próstata León",
    "cirugía robótica próstata León",
    "prostatectomía laparoscópica León",
    "vigilancia activa cáncer próstata",
    "Dr. Quiroz cáncer de próstata",
    "urólogo cáncer próstata Guanajuato",
    "diagnóstico precoz cáncer próstata",
    "RM multiparamétrica próstata León",
    "PET PSMA León",
    "PET PSMA Guanajuato",
    "estadificación cáncer próstata PSMA",
    "gleason próstata León",
    "tratamiento cáncer próstata sin cirugía León",
    "oncología urológica León",
  ],
  openGraph: {
    title: "Cáncer de Próstata en León | Dr. Quiroz Compeán",
    description:
      "Especialista en cáncer de próstata en León, Gto. Prostatectomía robótica con cirugía mínimamente invasiva. Consulta en Hospital Ángeles León.",
    url: "https://urologiaroboticaleon.com/cancer-prostata",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — Cáncer de Próstata León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cáncer de Próstata en León | Dr. Quiroz Compeán",
    description:
      "Diagnóstico y tratamiento del cáncer de próstata en León, Gto. Prostatectomía robótica Da Vinci.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/cancer-prostata",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿A qué edad debo empezar a hacerme la prueba del PSA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se recomienda iniciar la detección con PSA a partir de los 50 años en hombres de riesgo promedio. Si tiene antecedentes familiares de primer grado o es de ascendencia afroamericana, se recomienda desde los 40-45 años. Consulte con el Dr. Quiroz para una evaluación personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué significa tener el PSA elevado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un PSA elevado no siempre indica cáncer; puede deberse a hiperplasia prostática benigna (HBP), prostatitis o infección. Sin embargo, sí es una señal de alerta que requiere evaluación urológica completa, que puede incluir tacto rectal, resonancia magnética multiparamétrica y posiblemente biopsia de próstata.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer de próstata siempre requiere operación inmediata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los cánceres de bajo riesgo pueden manejarse con vigilancia activa (seguimiento cercano sin tratamiento inmediato). Los de riesgo intermedio o alto, o con enfermedad localizada candidata a curación, se benefician de prostatectomía robótica o radioterapia. El tratamiento se individualiza según el grado Gleason, PSA, estadio clínico y la salud general del paciente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura la recuperación tras una prostatectomía robótica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La hospitalización típica es de 1-2 días. El catéter urinario se retira generalmente entre 7-14 días después. La mayoría de los pacientes retoman actividades ligeras en 2-3 semanas y actividades completas en 4-6 semanas. La cirugía robótica implica menos dolor, menor pérdida de sangre y recuperación más rápida que la cirugía abierta.",
      },
    },
    {
      "@type": "Question",
      name: "¿La prostatectomía robótica afecta la continencia urinaria y la función sexual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cirugía robótica, con su visión 3D de alta definición, permite mayor precisión en la preservación de los nervios responsables de la erección y de los esfínteres urinarios. La mayoría de los pacientes recupera la continencia en semanas a meses. La recuperación de la función eréctil depende de la preservación nerviosa y de la edad y salud preoperatoria del paciente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el PET-PSMA y está disponible en León?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El PET-PSMA es el estudio de imagen más preciso disponible para detectar la extensión del cáncer de próstata: identifica metástasis que la tomografía y el gammagrama óseo pueden pasar por alto. Está recomendado por las guías internacionales (NCCN, EAU) para estadificación de riesgo alto y para detectar recurrencia con PSA en ascenso. Sí está disponible en León, Guanajuato, y el Dr. Quiroz lo integra rutinariamente en la evaluación de sus pacientes cuando está indicado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo curarme del cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cuando se detecta en etapa localizada, la tasa de supervivencia a 5 años supera el 98%. La clave es la detección temprana mediante PSA y una evaluación urológica oportuna. Con el tratamiento adecuado — ya sea cirugía robótica, radioterapia o vigilancia activa — la mayoría de los hombres viven una vida plena y sin recurrencia.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cáncer de próstata es hereditario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de los casos son esporádicos, pero un 5-10% tiene componente hereditario. Tener padre o hermano con cáncer de próstata duplica el riesgo, y las mutaciones en BRCA1/BRCA2 o el síndrome de Lynch se asocian con formas más agresivas. Si tienes antecedentes familiares, la detección con PSA debe iniciar desde los 40-45 años.",
      },
    },
    {
      "@type": "Question",
      name: "¿La biopsia de próstata es dolorosa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se realiza con anestesia local o sedación y la molestia es tolerable para la gran mayoría de los pacientes. Dura 15-20 minutos y se guía por ultrasonido o fusión con resonancia magnética para mayor precisión. Puede haber molestias leves posteriores — pequeñas cantidades de sangre en orina o semen — que se resuelven en días.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si mi biopsia salió negativa pero el PSA sigue elevado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una biopsia negativa no descarta el cáncer al 100%. En ese escenario se evalúa con resonancia magnética multiparamétrica (si no se hizo antes de la biopsia), biopsia de fusión dirigida a zonas sospechosas y seguimiento estrecho del PSA. Lo importante es no abandonar el seguimiento mientras el PSA permanezca elevado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los seguros médicos cubren el tratamiento del cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muchos seguros de gastos médicos mayores cubren el diagnóstico y el tratamiento, incluida la cirugía robótica según la póliza. Se entrega una carta médica detallando la indicación para el trámite con la aseguradora. Se recomienda verificar la cobertura específica antes de iniciar el proceso.",
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
      name: "Cáncer de Próstata",
      item: "https://urologiaroboticaleon.com/cancer-prostata",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Cáncer de Próstata",
  alternateName: [
    "Cáncer prostático",
    "Tumor de próstata",
    "Adenocarcinoma de próstata",
    "Carcinoma prostático",
  ],
  description:
    "Tumor maligno originado en la glándula prostática. Es el cáncer más frecuente en hombres mexicanos. Cuando se detecta en etapa localizada, la tasa de supervivencia supera el 98%.",
  code: {
    "@type": "MedicalCode",
    code: "C61",
    codingSystem: "ICD-10",
  },
  riskFactor: [
    { "@type": "MedicalRiskFactor", name: "Edad mayor de 50 años" },
    { "@type": "MedicalRiskFactor", name: "Antecedentes familiares de cáncer de próstata" },
    { "@type": "MedicalRiskFactor", name: "Mutaciones BRCA1/BRCA2" },
    { "@type": "MedicalRiskFactor", name: "Dieta alta en grasas animales y obesidad" },
  ],
  possibleTreatment: [
    { "@type": "MedicalTherapy", name: "Prostatectomía robótica" },
    { "@type": "MedicalTherapy", name: "Radioterapia externa" },
    { "@type": "MedicalTherapy", name: "Braquiterapia" },
    { "@type": "MedicalTherapy", name: "Vigilancia activa" },
    { "@type": "MedicalTherapy", name: "Hormonoterapia" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Instituto Nacional de Cancerología (INCan)",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Cáncer de Próstata en León, Guanajuato — Diagnóstico y Tratamiento Especializado",
  description:
    "Información completa sobre detección con PSA/APE, diagnóstico, estadificación con PET-PSMA y tratamiento del cáncer de próstata en León, Guanajuato. Dr. Alejandro Quiroz Compeán, urólogo oncólogo certificado.",
  url: "https://urologiaroboticaleon.com/cancer-prostata",
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

export default function CancerProstataPage() {
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
      <CancerProstataContent />
    </>
  );
}
