import type { Metadata } from "next";
import UroflujometriaContent from "./UroflujometriaContent";

export const metadata: Metadata = {
  title: "Uroflujometría en León, Gto. | Qué es y cómo se hace | Dr. Quiroz",
  description:
    "Uroflujometría en León: estudio no invasivo que mide tu flujo urinario en minutos, sin dolor ni preparación especial. Qué es, para qué sirve y cómo interpretar tus resultados.",
  keywords: [
    "uroflujometría León",
    "uroflujometría Guanajuato",
    "qué es la uroflujometría",
    "valores normales de uroflujometría",
    "estudio de flujo urinario",
    "chorro urinario débil",
    "dificultad para orinar próstata",
    "preparación uroflujometría",
  ],
  openGraph: {
    title: "Uroflujometría en León, Gto. | Dr. Alejandro Quiroz Compeán",
    description:
      "Estudio no invasivo que mide tu flujo urinario en minutos, sin dolor ni preparación especial. Qué es, para qué sirve y cómo se interpreta.",
    url: "https://urologiaroboticaleon.com/uroflujometria-leon",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Uroflujometría en León — Dr. Alejandro Quiroz Compeán",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uroflujometría en León, Gto. | Dr. Quiroz",
    description:
      "Estudio no invasivo del flujo urinario: qué es, para qué sirve y cómo se interpreta. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/uroflujometria-leon",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La uroflujometría es dolorosa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Consiste en orinar de manera normal dentro de un dispositivo especial; no involucra sondas ni instrumentos dentro del cuerpo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito estar en ayuno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Solo se recomienda llegar con la vejiga llena, sin haber orinado en las horas previas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda el estudio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 3 y 5 minutos en total.",
      },
    },
    {
      "@type": "Question",
      name: "¿La uroflujometría diagnostica cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No directamente. Evalúa la función del vaciamiento urinario, no detecta cáncer. Sin embargo, es parte de la evaluación integral de síntomas urinarios, que puede llevar a estudios adicionales si el urólogo lo considera necesario.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo hacerme el estudio si tengo una infección urinaria activa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generalmente se recomienda posponerlo hasta resolver la infección, ya que puede alterar los resultados. Coméntalo con tu urólogo antes de la cita.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el flujo máximo normal en una uroflujometría?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Como referencia general, por arriba de 15 mL/segundo suele considerarse normal, entre 10 y 15 es una zona intermedia y por debajo de 10 es más probable que haya un problema para vaciar. El valor se interpreta con el volumen orinado, la edad y los síntomas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué puede salir alterada si no tengo nada grave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque el resultado depende de las condiciones del momento: orinar muy poco, tener la vejiga demasiado llena, los nervios o una postura incómoda pueden alterar la gráfica. Por eso a veces se repite antes de sacar conclusiones.",
      },
    },
    {
      "@type": "Question",
      name: "¿La uroflujometría también sirve en mujeres?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Aunque se asocia con la próstata, también se usa en mujeres con dificultad para vaciar la vejiga o chorro débil. Los valores de referencia se interpretan de forma distinta que en los hombres.",
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
      name: "Uroflujometría",
      item: "https://urologiaroboticaleon.com/uroflujometria-leon",
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Uroflujometría en León, Guanajuato — Qué es, para qué sirve y cómo se realiza",
  description:
    "Información sobre la uroflujometría: estudio no invasivo del flujo urinario para evaluar síntomas del tracto urinario inferior. Dr. Alejandro Quiroz Compeán, urólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/uroflujometria-leon",
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

const medicalTestSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTest",
  name: "Uroflujometría (estudio de flujo urinario)",
  alternateName: ["Uroflujometría", "Estudio de flujo urinario"],
  description:
    "Estudio no invasivo que mide la velocidad y el volumen del flujo urinario para evaluar el vaciamiento de la vejiga. Útil en la valoración de síntomas del tracto urinario inferior (STUI/LUTS), frecuentemente asociados al crecimiento prostático.",
  usedToDiagnose: {
    "@type": "MedicalCondition",
    name: "Síntomas del tracto urinario inferior (STUI/LUTS)",
  },
};

export default function UroflujometriaPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalTestSchema) }}
      />
      <UroflujometriaContent />
    </>
  );
}
