import type { Metadata } from "next";
import DolorRinonContent from "./DolorRinonContent";

export const metadata: Metadata = {
  title: "Dolor de Riñón: Dónde Duele y Cómo Identificarlo | Dr. Quiroz León",
  description:
    "¿Dónde duele el riñón y cómo saber si es dolor de riñón o de espalda? Causas, síntomas de alarma, dolor de riñón en mujeres y cuándo acudir al urólogo. Dr. Quiroz, León, Gto.",
  keywords: [
    "dolor de riñón",
    "dónde duele el riñón",
    "dolor de riñón dónde es",
    "cómo es un dolor de riñón",
    "dolor de riñón en mujeres",
    "síntomas de dolor de riñón",
    "dolor de riñón o espalda",
    "dolor de riñón qué hacer",
    "riñones inflamados síntomas",
  ],
  openGraph: {
    title: "Dolor de Riñón: Dónde Duele y Cómo Identificarlo | Dr. Quiroz",
    description:
      "Dónde se ubica el dolor de riñón, cómo distinguirlo del dolor de espalda, sus causas y cuándo es urgente. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/dolor-de-rinon",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dolor de riñón: dónde duele — Dr. Alejandro Quiroz Compeán León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolor de Riñón: Dónde Duele y Cómo Identificarlo | Dr. Quiroz",
    description:
      "Dónde se ubica el dolor de riñón, cómo distinguirlo del dolor de espalda y cuándo es urgente. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/dolor-de-rinon",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Dónde duele el riñón exactamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En el costado o flanco, por debajo de las últimas costillas y hacia la espalda, casi siempre de un lado. Puede irradiarse al abdomen o la ingle, sobre todo con un cálculo. El centro de la espalda baja corresponde más a dolor muscular.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo sé si es dolor de riñón o de espalda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El dolor muscular cambia con los movimientos y mejora al reposar. El renal no suele modificarse al moverte y con frecuencia se acompaña de fiebre, ardor al orinar o sangre en la orina. Si hay fiebre o sangre, es más probable que sea renal.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo es el dolor de riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de la causa. El cólico por un cálculo es intenso, en oleadas, y no encuentra posición que lo alivie. La infección da un dolor más constante con fiebre. Muchos problemas renales, como los tumores tempranos, no duelen.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué me duele el riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las causas más frecuentes son los cálculos y las infecciones que ascienden al riñón (pielonefritis); con menor frecuencia, obstrucciones. Los tumores renales suelen ser indoloros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué puedo tomar para el dolor de riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No te automediques, sobre todo con antibióticos. Hidrátate y acude a valoración. Si hay fiebre, sangre en la orina, dolor intenso o imposibilidad para orinar, acude a urgencias. El tratamiento correcto depende de la causa.",
      },
    },
    {
      "@type": "Question",
      name: "¿El dolor de riñón en mujeres es diferente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La localización es la misma, pero en mujeres una causa muy frecuente es la infección urinaria que asciende al riñón (pielonefritis), porque las infecciones urinarias son más comunes en ellas. El embarazo también aumenta el riesgo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Importa si me duele el riñón derecho o el izquierdo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las causas renales, como cálculos e infecciones, pueden darse de cualquier lado. El lado ayuda a pensar en otras causas: del derecho pueden confundirse la vesícula o el apéndice, y del izquierdo, problemas del intestino. Lo que más orienta son los síntomas que acompañan al dolor.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dura un cólico renal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varía. El dolor suele venir en oleadas que pueden durar de minutos a horas, y puede repetirse durante días o semanas hasta que el cálculo sale o se trata. Si el dolor no cede, o hay fiebre o vómito, acude a urgencias.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tomar mucha agua quita el dolor de riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mantenerte hidratado es útil, sobre todo para prevenir cálculos, pero no quita el dolor ni cura una infección. Durante un cólico, tomar grandes cantidades de agua de golpe no ayuda a expulsar el cálculo más rápido. Lo recomendable es tomar líquidos con normalidad y acudir a valoración.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué especialista atiende el dolor de riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El urólogo atiende los cálculos, las obstrucciones, las infecciones complicadas y los tumores del riñón. El nefrólogo trata enfermedades que afectan la función del riñón, como la enfermedad renal crónica. Ante un dolor intenso con fiebre, acude a urgencias.",
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
      name: "Dolor de riñón",
      item: "https://urologiaroboticaleon.com/dolor-de-rinon",
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Dolor de riñón: dónde se ubica y cómo identificarlo",
  description:
    "Guía sobre el dolor de riñón: dónde se localiza, cómo distinguirlo del dolor de espalda, sus causas, el dolor de riñón en mujeres y cuándo es urgente. Dr. Alejandro Quiroz Compeán, urólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/dolor-de-rinon",
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

export default function DolorRinonPage() {
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
      <DolorRinonContent />
    </>
  );
}
