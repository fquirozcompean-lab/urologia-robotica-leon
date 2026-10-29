import type { Metadata } from "next";
import ValoresAntigenoContent from "./ValoresAntigenoContent";

export const metadata: Metadata = {
  title: "Valores de Antígeno Prostático (PSA) según la Edad | Dr. Quiroz — León",
  description:
    "Tabla de valores de referencia del antígeno prostático (PSA) por edad, qué significa el antígeno total y libre, qué puede elevarlo sin ser cáncer y qué hacer si sale alto. Dr. Quiroz, urólogo oncólogo en León, Gto.",
  keywords: [
    "valores de antígeno prostático según edad",
    "antígeno prostático valores normales",
    "antígeno prostático específico total y libre",
    "qué es el antígeno prostático específico",
    "antígeno prostático elevado",
    "tabla antígeno prostático por edad",
    "PSA normal por edad",
    "antígeno prostático León",
  ],
  openGraph: {
    title: "Valores de Antígeno Prostático (PSA) según la Edad | Dr. Alejandro Quiroz",
    description:
      "Tabla de referencia por edad, antígeno total y libre, causas de elevación sin cáncer y qué hacer si tu resultado salió alto. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/valores-antigeno-prostatico-edad",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valores de antígeno prostático según la edad — Dr. Alejandro Quiroz Compeán León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valores de Antígeno Prostático (PSA) según la Edad | Dr. Quiroz",
    description:
      "Tabla de referencia por edad, antígeno total y libre y qué hacer si tu resultado salió alto. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/valores-antigeno-prostatico-edad",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es el valor normal del antígeno prostático según la edad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Como referencia orientativa: hasta 2.5 ng/mL entre los 40 y 49 años, hasta 3.5 ng/mL entre los 50 y 59, hasta 4.5 ng/mL entre los 60 y 69, y hasta 6.5 ng/mL entre los 70 y 79. Muchos laboratorios usan 4.0 ng/mL como límite general. Estos valores no son un corte absoluto: el urólogo los interpreta junto con tu historia, el tamaño de la próstata y la evolución del resultado en el tiempo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué hago si mi antígeno prostático salió elevado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un solo resultado alto no es motivo para hacer una biopsia de inmediato. El primer paso es repetir el análisis unas semanas después para confirmar la elevación. Si persiste elevado, se complementa con tacto rectal y resonancia magnética multiparamétrica de próstata, que ayudan a decidir si la biopsia es necesaria.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el antígeno prostático total y libre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El antígeno prostático circula en la sangre de dos formas: unido a proteínas y libre. El antígeno total suma ambas. Cuando el total está entre 4 y 10 ng/mL, el porcentaje de antígeno libre ayuda a afinar el riesgo: un porcentaje bajo (menor de 10%) se asocia con mayor probabilidad de cáncer, y uno alto (mayor de 25%) con menor probabilidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Un antígeno prostático normal descarta el cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No por completo. La mayoría de los hombres con antígeno normal no tienen cáncer, pero una parte de los cánceres se presenta con valores dentro del rango de referencia. Por eso la revisión periódica, el tacto rectal y la evolución del antígeno en el tiempo son importantes, sobre todo si tienes antecedentes familiares.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué puede elevar el antígeno prostático sin que sea cáncer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El crecimiento benigno de la próstata (hiperplasia), la prostatitis, una infección urinaria, una eyaculación reciente, el ejercicio intenso como andar en bicicleta, y una sonda o un estudio urológico reciente. Por eso un resultado alto se confirma antes de tomar decisiones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo me preparo para el análisis de antígeno prostático?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No requiere ayuno especial. Se recomienda evitar la eyaculación y andar en bicicleta durante las 48 horas previas, y no hacerlo mientras tengas una infección urinaria o en las semanas siguientes a una sonda o estudio urológico. Lo ideal es hacerlo siempre en condiciones parecidas para poder comparar resultados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los medicamentos para la próstata cambian el resultado del antígeno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La finasterida y la dutasterida, que se usan para el crecimiento de la próstata, reducen el antígeno prostático aproximadamente a la mitad después de varios meses de tratamiento. Si los tomas, avísale a tu urólogo: el resultado se interpreta ajustando ese efecto.",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Valores de antígeno prostático según la edad",
      item: "https://urologiaroboticaleon.com/valores-antigeno-prostatico-edad",
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Valores de antígeno prostático (PSA) según la edad",
  description:
    "Guía sobre los valores de referencia del antígeno prostático específico por edad, el antígeno total y libre, las causas de elevación no cancerosas y qué hacer ante un resultado elevado. Dr. Alejandro Quiroz Compeán, urólogo oncólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/valores-antigeno-prostatico-edad",
  about: {
    "@type": "MedicalTest",
    name: "Antígeno prostático específico (PSA)",
    alternateName: ["PSA", "Antígeno prostático"],
    usedToDiagnose: {
      "@type": "MedicalCondition",
      name: "Cáncer de Próstata",
      code: {
        "@type": "MedicalCode",
        code: "C61",
        codingSystem: "ICD-10",
      },
    },
  },
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

export default function ValoresAntigenoPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <ValoresAntigenoContent />
    </>
  );
}
