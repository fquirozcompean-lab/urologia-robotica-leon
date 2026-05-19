import type { Metadata } from "next";
import VphEnHombresContent from "./VphEnHombresContent";

export const metadata: Metadata = {
  title: "VPH en Hombres en León, Guanajuato | Síntomas, Diagnóstico y Tratamiento — Dr. Quiroz Compeán",
  description:
    "VPH en hombres en León, Gto: síntomas, diagnóstico, tratamiento de verrugas genitales y vacuna Gardasil 9. Consulta confidencial. El VPH es la infección de transmisión sexual más común — información clara y sin estigma. Dr. Alejandro Quiroz Compeán, urólogo certificado.",
  keywords: [
    "vph en hombres León",
    "el vph en hombres",
    "vph en hombres",
    "vph que es",
    "que es vph en hombres",
    "vph en hombres sintomas",
    "verrugas vph en hombres",
    "vph en hombres tratamiento",
    "prueba vph hombres",
    "vacuna vph hombres",
    "vph se cura",
    "tratamiento vph hombres",
    "vph en hombres fotos",
    "verrugas genitales hombres León",
    "virus papiloma humano hombres León",
    "vph genital hombres León",
    "vacuna gardasil hombres León",
    "verrugas genitales tratamiento León",
    "vph contagio hombres",
    "vph diagnóstico hombres León",
  ],
  openGraph: {
    title: "VPH en Hombres en León | Síntomas, Diagnóstico y Tratamiento — Dr. Quiroz Compeán",
    description:
      "Información clara sobre VPH en hombres: síntomas, verrugas genitales, diagnóstico, vacuna Gardasil 9 y consulta confidencial en León, Guanajuato. Dr. Quiroz Compeán, urólogo certificado.",
    url: "https://urologiaroboticaleon.com/vph-en-hombres",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — VPH en Hombres León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VPH en Hombres en León | Dr. Quiroz Compeán",
    description:
      "Síntomas, diagnóstico y tratamiento del VPH en hombres en León, Guanajuato. Verrugas genitales, vacuna Gardasil 9, consulta confidencial.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/vph-en-hombres",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo sé si tengo VPH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de hombres con VPH no tienen síntomas. Si tienes verrugas genitales (bultos o protuberancias en pene, escroto o zona anal), esa es la señal más visible. Si no tienes síntomas pero tuviste contacto sexual sin protección, o tu pareja fue diagnosticada con VPH, una evaluación con el urólogo es lo más recomendable. No existe prueba de tamizaje rutinaria para hombres.",
      },
    },
    {
      "@type": "Question",
      name: "¿El VPH en hombres se cura solo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoría de los casos, sí. El 70-90% de las infecciones por VPH se resuelven solas gracias al sistema inmune en 1-2 años. No existe tratamiento para eliminar el virus directamente — lo que se trata son las verrugas y lesiones que causa. En una minoría de casos, el virus persiste y requiere vigilancia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo tener hijos si tengo VPH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el VPH generalmente no afecta la fertilidad masculina. La producción de espermatozoides es independiente de la infección por VPH. Si estás buscando un embarazo y tienes VPH, coméntalo con tu urólogo.",
      },
    },
    {
      "@type": "Question",
      name: "¿El VPH causa infertilidad en hombres?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No de forma directa. El VPH no está establecido como causa de infertilidad masculina. Existen estudios que sugieren que el VPH podría afectar la movilidad espermática en algunos casos, pero esto no significa infertilidad en la práctica clínica habitual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo donar sangre si tengo VPH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El VPH no se transmite por transfusión de sangre — es una infección que se transmite por contacto piel con piel y sexual. No existe prueba de VPH en el tamizaje estándar de donadores de sangre.",
      },
    },
    {
      "@type": "Question",
      name: "¿Debo vacunarme si ya tuve VPH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, vale la pena. La vacuna Gardasil 9 protege contra 9 tipos de VPH. Aunque hayas tenido VPH, probablemente no hayas sido infectado por todos los tipos incluidos en la vacuna. Vacunarte protege contra los tipos que aún no has contraído.",
      },
    },
    {
      "@type": "Question",
      name: "¿El condón protege completamente contra VPH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No completamente, pero reduce el riesgo de forma significativa. El VPH puede estar en áreas no cubiertas por el condón como el escroto, la base del pene y la zona inguinal. Aun así, el uso consistente de condón es una medida de protección importante — siempre recomendado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo transmitir VPH aunque no tenga verrugas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puedes transmitir el VPH aunque no tengas ningún síntoma visible. El virus puede estar presente en la piel sin causar verrugas — y en ese estado igualmente puede transmitirse por contacto sexual. Esto explica por qué el VPH es tan común.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en aparecer el VPH después del contagio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las verrugas genitales pueden aparecer entre 3 semanas y varios meses después del contacto. El VPH de alto riesgo puede permanecer latente por años. Por esto es imposible determinar con certeza cuándo ni de quién se adquirió la infección.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las verrugas genitales se vuelven cáncer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Las verrugas genitales son causadas por los tipos 6 y 11 del VPH, que son de bajo riesgo y no son cancerígenos. Las verrugas son molestas y contagiosas, pero no son precancerosas ni evolucionan a cáncer. El cáncer relacionado con VPH es causado por otros tipos (principalmente 16 y 18), que no producen verrugas visibles.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo tener VPH y VIH al mismo tiempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, ambas infecciones pueden coexistir. El VIH debilita el sistema inmune, lo que dificulta que el cuerpo elimine el VPH naturalmente. Las personas con VIH tienen mayor riesgo de infección persistente por VPH y mayor riesgo de desarrollar cánceres relacionados.",
      },
    },
    {
      "@type": "Question",
      name: "¿El VPH oral es igual que el genital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El VPH oral es causado por los mismos tipos de virus pero afecta la mucosa de la boca y garganta. Se transmite principalmente por sexo oral. El VPH oral de alto riesgo está relacionado con el aumento en cánceres de orofaringe en las últimas décadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Debo hacerme prueba de VPH regularmente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No existe tamizaje rutinario de VPH para hombres como el Papanicolaou para mujeres. La evaluación se recomienda cuando hay verrugas visibles, lesiones sospechosas o si tu pareja fue diagnosticada con VPH. En hombres que tienen sexo con hombres o en personas con VIH, puede estar indicada una evaluación más periódica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mi novia tiene VPH, significa que me fue infiel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El VPH puede estar latente por años o décadas antes de causar síntomas. Una persona puede haber adquirido el virus en una relación anterior sin saberlo. El diagnóstico de VPH no es evidencia de infidelidad — es evidencia de actividad sexual en algún momento de la vida, como le ocurre a la mayoría de las personas.",
      },
    },
    {
      "@type": "Question",
      name: "¿El VPH puede causar disfunción eréctil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El VPH por sí mismo no causa disfunción eréctil directamente. Sin embargo, la ansiedad y el estrés psicológico asociados al diagnóstico de VPH pueden afectar temporalmente la función eréctil. Si experimentas disfunción eréctil, esta tiene causas vasculares, hormonales o psicológicas que vale la pena evaluar por separado con tu urólogo.",
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
      name: "VPH en Hombres",
      item: "https://urologiaroboticaleon.com/vph-en-hombres",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "VPH en Hombres (Virus del Papiloma Humano)",
  alternateName: [
    "Virus del Papiloma Humano",
    "HPV",
    "Verrugas genitales",
    "Condilomas acuminados",
    "VPH genital",
  ],
  description:
    "El VPH (Virus del Papiloma Humano) es la infección de transmisión sexual más común en el mundo. Más de 100 tipos diferentes. Los tipos de bajo riesgo (6 y 11) causan verrugas genitales; los de alto riesgo (16 y 18) pueden causar cáncer de pene, anal u orofaringe. El 70-90% de infecciones se resuelven solas en 1-2 años. La vacuna Gardasil 9 previene más del 90% de infecciones por los tipos incluidos.",
  code: {
    "@type": "MedicalCode",
    code: "A63.0",
    codingSystem: "ICD-10",
  },
  riskFactor: [
    { "@type": "MedicalRiskFactor", name: "Múltiples parejas sexuales" },
    { "@type": "MedicalRiskFactor", name: "Inicio temprano de vida sexual" },
    { "@type": "MedicalRiskFactor", name: "Sistema inmune debilitado (VIH, inmunosupresión)" },
    { "@type": "MedicalRiskFactor", name: "Tabaquismo" },
    { "@type": "MedicalRiskFactor", name: "Sexo sin protección" },
    { "@type": "MedicalRiskFactor", name: "Pareja con VPH diagnosticado" },
  ],
  possibleTreatment: [
    { "@type": "MedicalTherapy", name: "Crioterapia con nitrógeno líquido" },
    { "@type": "MedicalTherapy", name: "Electrofulguración" },
    { "@type": "MedicalTherapy", name: "Láser CO2" },
    { "@type": "MedicalTherapy", name: "Tratamiento tópico bajo supervisión médica" },
    { "@type": "MedicalTherapy", name: "Cirugía para casos extensos" },
    { "@type": "MedicalTherapy", name: "Vacunación profiláctica con Gardasil 9" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
  },
  signOrSymptom: [
    { "@type": "MedicalSymptom", name: "Verrugas genitales (condilomas acuminados)" },
    { "@type": "MedicalSymptom", name: "Bultos o protuberancias en pene o escroto" },
    { "@type": "MedicalSymptom", name: "Lesiones en zona anal o perianal" },
    { "@type": "MedicalSymptom", name: "Infección asintomática (mayoría de casos en hombres)" },
  ],
  prevention: [
    { "@type": "MedicalTherapy", name: "Vacuna Gardasil 9 (>90% de efectividad)" },
    { "@type": "MedicalTherapy", name: "Uso de condón" },
    { "@type": "MedicalTherapy", name: "Reducción de número de parejas sexuales" },
    { "@type": "MedicalTherapy", name: "Circuncisión (factor protector)" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "VPH en Hombres en León, Guanajuato — Síntomas, Diagnóstico, Tratamiento y Vacuna",
  description:
    "Guía clínica completa sobre el virus del papiloma humano (VPH) en hombres: tipos de VPH, síntomas, verrugas genitales, diagnóstico, tratamiento y vacuna Gardasil 9. Consulta confidencial en León, Guanajuato. Dr. Alejandro Quiroz Compeán.",
  url: "https://urologiaroboticaleon.com/vph-en-hombres",
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
    name: "Virus del Papiloma Humano (VPH)",
    alternateName: ["HPV", "VPH genital", "Verrugas genitales"],
  },
};

export default function VphEnHombresPage() {
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
      <VphEnHombresContent />
    </>
  );
}
