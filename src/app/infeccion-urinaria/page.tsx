import type { Metadata } from "next";
import InfeccionUrinariaContent from "./InfeccionUrinariaContent";

export const metadata: Metadata = {
  title: "Infección Urinaria en León, Guanajuato | Tratamiento y Prevención — Dr. Quiroz Compeán",
  description:
    "Infección urinaria en León, Gto: tratamiento inmediato, antibiótico correcto y plan de prevención para infecciones recurrentes. Cistitis, pielonefritis, hematuria. Dr. Alejandro Quiroz Compeán, urólogo certificado. Consulta el mismo día disponible.",
  keywords: [
    "infección urinaria León",
    "infección urinaria León Guanajuato",
    "síntomas infección urinaria León",
    "infección urinaria que tomar León",
    "medicamento infección urinaria León",
    "antibiótico infección urinaria León",
    "pastilla infección urinaria León",
    "cistitis León",
    "infección vías urinarias León",
    "infección urinaria recurrente León",
    "tratamiento infección urinaria León",
    "urólogo infección urinaria León",
    "ardor al orinar León",
    "urgencia urinaria León",
    "pielonefritis León",
    "infección renal León",
    "prevención infección urinaria León",
    "por qué da infección urinaria",
    "infección urinaria mujer León",
    "infección urinaria hombre León",
  ],
  openGraph: {
    title: "Infección Urinaria en León | Tratamiento Inmediato y Prevención — Dr. Quiroz Compeán",
    description:
      "Ardor al orinar, urgencia, frecuencia: síntomas de infección urinaria que no deben esperar. Tratamiento inmediato y plan de prevención en León, Guanajuato. Dr. Quiroz Compeán, urólogo certificado.",
    url: "https://urologiaroboticaleon.com/infeccion-urinaria",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — Infección Urinaria León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infección Urinaria en León | Dr. Quiroz Compeán",
    description:
      "Tratamiento inmediato de infección urinaria y plan de prevención para infecciones recurrentes en León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/infeccion-urinaria",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo tener relaciones sexuales con infección urinaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se recomienda evitarlo durante el tratamiento. Las relaciones pueden introducir más bacterias a la uretra y empeorar los síntomas. Espera hasta terminar el ciclo de antibióticos y estar sin síntomas por al menos 24–48 horas.",
      },
    },
    {
      "@type": "Question",
      name: "¿La infección urinaria se contagia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No es una enfermedad de transmisión sexual. La actividad sexual puede facilitar que bacterias del área genital entren a la uretra de la mujer, pero el problema está en la propia bacteria de la persona. Los hombres raramente adquieren ITU por contacto sexual con una mujer infectada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en curarse la infección urinaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con el antibiótico correcto, los síntomas mejoran en 24–48 horas. Es fundamental completar el ciclo completo: 3–7 días para cistitis, 7–14 días para pielonefritis. No completar el tratamiento aunque te sientas bien es una de las principales causas de recurrencia y resistencia antibiótica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo tomar el antibiótico que me sobró de otra infección?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La bacteria actual puede ser diferente o resistente al antibiótico anterior. Usar el medicamento incorrecto no cura la infección, sino que selecciona bacterias más resistentes que serán mucho más difíciles de tratar después. Siempre requiere prescripción médica basada en el cuadro actual.",
      },
    },
    {
      "@type": "Question",
      name: "¿El jugo de arándano funciona para la infección urinaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El arándano no cura una infección activa, pero puede ayudar a prevenirlas. Sus proantocianidinas dificultan que la bacteria E. coli se adhiera a la vejiga. Para efecto preventivo se necesitan dosis concentradas (36 mg de proantocianidinas diarias) — las cápsulas de extracto concentrado son más efectivas que el jugo diluido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué me dan infecciones urinarias después de tener relaciones sexuales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es la cistitis post-coital o 'de luna de miel'. Durante las relaciones, la fricción puede transportar bacterias hacia la uretra. La medida más efectiva: orinar dentro de los 30 minutos después del coito. En casos recurrentes, la profilaxis post-coital con una dosis de antibiótico bajo prescripción es muy efectiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las infecciones urinarias causan infertilidad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las infecciones de vejiga (cistitis) no afectan la fertilidad. Si la infección afecta estructuras del tracto genital sin tratamiento adecuado (como en prostatitis o epididimitis en hombres), podría tener implicaciones reproductivas. En mujeres embarazadas, las ITU no tratadas aumentan el riesgo de complicaciones obstétricas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es normal tener sangre en la orina con infección urinaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, es relativamente común. La cistitis hemorrágica ocurre cuando la inflamación irrita el revestimiento de la vejiga. Con el tratamiento correcto desaparece en 2–3 días. Si persiste después del tratamiento o es abundante, necesita evaluación para descartar otras causas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si no tomo el antibiótico completo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las bacterias más resistentes sobreviven al ciclo incompleto y vuelven a multiplicarse. El resultado es una infección que regresa, más difícil de tratar, que puede requerir antibióticos más potentes. Completar el ciclo aunque te sientas bien es fundamental.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué siempre me dan infecciones urinarias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las infecciones recurrentes tienen causas identificables: actividad sexual sin profilaxis post-coital, espermicidas, menopausia con atrofia vaginal, diabetes no controlada, residuo post-miccional elevado, anomalías anatómicas. Una evaluación completa permite encontrar la causa y diseñar un plan personalizado. No es mala suerte — tiene solución.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo prevenir las infecciones urinarias de forma natural?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Con evidencia científica: orinar después de relaciones sexuales, hidratación adecuada (2–3 litros diarios), no aguantarse las ganas, higiene de adelante hacia atrás, cápsulas de arándano concentrado, D-manosa 2 g al día, probióticos con Lactobacillus. En mujeres postmenopáusicas los estrógenos vaginales son altamente efectivos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los hombres también tienen infecciones urinarias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, pero son mucho menos comunes. Cuando ocurren en hombres menores de 50 años siempre requieren investigación: hiperplasia prostática, prostatitis, cálculos, anomalías anatómicas. El tratamiento es más prolongado (7–14 días) y siempre debe basarse en un urocultivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la bacteriuria asintomática? ¿Necesito antibiótico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La bacteriuria asintomática es presencia de bacterias en orina sin síntomas. En la mayoría de personas NO requiere antibiótico: no previene infecciones futuras pero sí aumenta la resistencia bacteriana. Solo se trata de forma obligatoria en mujeres embarazadas y antes de procedimientos urológicos invasivos.",
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
      name: "Infección Urinaria",
      item: "https://urologiaroboticaleon.com/infeccion-urinaria",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Infección Urinaria",
  alternateName: [
    "Cistitis",
    "Infección de vías urinarias",
    "ITU",
    "IVU",
    "Infección de vejiga",
    "Pielonefritis",
  ],
  description:
    "Infección bacteriana del tracto urinario — vejiga, uretra o riñones. Causada principalmente por Escherichia coli (80–85% de casos). Afecta al 50–60% de mujeres al menos una vez en su vida. Requiere diagnóstico y tratamiento antibiótico guiado por urocultivo.",
  code: {
    "@type": "MedicalCode",
    code: "N39.0",
    codingSystem: "ICD-10",
  },
  riskFactor: [
    { "@type": "MedicalRiskFactor", name: "Sexo femenino (uretra más corta)" },
    { "@type": "MedicalRiskFactor", name: "Actividad sexual" },
    { "@type": "MedicalRiskFactor", name: "Menopausia con atrofia vaginal" },
    { "@type": "MedicalRiskFactor", name: "Diabetes mellitus" },
    { "@type": "MedicalRiskFactor", name: "Hiperplasia prostática benigna (en hombres)" },
    { "@type": "MedicalRiskFactor", name: "Cálculos renales o vesicales" },
    { "@type": "MedicalRiskFactor", name: "Catéter vesical" },
    { "@type": "MedicalRiskFactor", name: "Inmunosupresión" },
  ],
  possibleTreatment: [
    { "@type": "MedicalTherapy", name: "Nitrofurantoína oral" },
    { "@type": "MedicalTherapy", name: "Fosfomicina oral" },
    { "@type": "MedicalTherapy", name: "Trimetoprima-sulfametoxazol" },
    { "@type": "MedicalTherapy", name: "Fluoroquinolonas (casos seleccionados)" },
    { "@type": "MedicalTherapy", name: "Antibióticos intravenosos (pielonefritis grave)" },
    { "@type": "MedicalTherapy", name: "Profilaxis antibiótica post-coital o continua" },
    { "@type": "MedicalTherapy", name: "Estrógenos vaginales (menopausia)" },
    { "@type": "MedicalTherapy", name: "Inmunoprofilaxis con lisados bacterianos (Urovaxom)" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
  },
  signOrSymptom: [
    { "@type": "MedicalSymptom", name: "Disuria (ardor o dolor al orinar)" },
    { "@type": "MedicalSymptom", name: "Urgencia urinaria" },
    { "@type": "MedicalSymptom", name: "Polaquiuria (orinar frecuentemente)" },
    { "@type": "MedicalSymptom", name: "Hematuria (sangre en orina)" },
    { "@type": "MedicalSymptom", name: "Dolor abdominal bajo o suprapúbico" },
    { "@type": "MedicalSymptom", name: "Orina turbia o con olor fuerte" },
    { "@type": "MedicalSymptom", name: "Fiebre y dolor en flanco (pielonefritis)" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Infección Urinaria en León, Guanajuato — Tratamiento Inmediato y Prevención de Recurrencias",
  description:
    "Guía completa sobre síntomas, diagnóstico, tratamiento antibiótico y prevención de infecciones urinarias en León, Guanajuato. Incluye información sobre cistitis, pielonefritis, infecciones recurrentes y bacteriuria asintomática. Dr. Alejandro Quiroz Compeán.",
  url: "https://urologiaroboticaleon.com/infeccion-urinaria",
  author: {
    "@type": "Physician",
    name: "Dr. Alejandro Quiroz Compeán",
    url: "https://urologiaroboticaleon.com",
  },
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  about: {
    "@type": "MedicalCondition",
    name: "Infección Urinaria",
    alternateName: ["Cistitis", "ITU", "IVU"],
  },
};

export default function InfeccionUrinariaPage() {
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
      <InfeccionUrinariaContent />
    </>
  );
}
