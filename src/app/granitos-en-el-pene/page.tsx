import type { Metadata } from "next";
import GranitosContent from "./GranitosContent";

export const metadata: Metadata = {
  title: "Granitos, Bolitas o Manchas en el Pene: ¿Qué Son? | Dr. Quiroz León",
  description:
    "Granitos blancos, bolitas o manchas en el pene: la mayoría son benignos (puntos de Fordyce, pápulas perladas), pero conviene distinguirlos de verrugas (VPH) u otras causas. Guía del Dr. Quiroz, urólogo en León.",
  keywords: [
    "granitos en el pene",
    "granitos blancos en el pene",
    "bolitas en el pene",
    "manchas en el pene",
    "puntos blancos en el pene",
    "pápulas perladas del pene",
    "puntos de Fordyce",
    "verrugas o granitos pene",
    "granos en el glande",
  ],
  openGraph: {
    title: "Granitos, Bolitas o Manchas en el Pene | Dr. Alejandro Quiroz Compeán",
    description:
      "La mayoría de los granitos en el pene son benignos, pero conviene distinguirlos de verrugas u otras causas. Guía clara. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/granitos-en-el-pene",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Granitos, bolitas o manchas en el pene — Dr. Alejandro Quiroz Compeán León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Granitos, Bolitas o Manchas en el Pene | Dr. Quiroz",
    description:
      "Qué son los granitos en el pene, cuáles son benignos y cuándo distinguirlos de verrugas u otras causas. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/granitos-en-el-pene",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Los granitos en el pene son normales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muchos sí. Las pápulas perladas (granitos en fila alrededor del glande) y los puntos de Fordyce (glándulas sebáceas) son variantes normales, no se transmiten y no requieren tratamiento. Pero no todos son de este tipo, así que ante la duda conviene revisarse.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué son los granitos blancos en el pene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suelen ser puntos de Fordyce, pápulas perladas o pequeños quistes, todos benignos. En algunos casos, unos granitos blancos con un hoyito central pueden ser molusco contagioso, de origen viral. Una valoración lo distingue con seguridad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo sé si son verrugas (VPH) o algo benigno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No siempre es fácil a simple vista. Las pápulas perladas son muy regulares alrededor del glande; las verrugas genitales (VPH) suelen ser irregulares, pueden crecer y se relacionan con contacto sexual. Ante la duda, o si algo cambia, revísate.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los granitos en el pene son contagiosos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de qué sean. Las pápulas perladas y los puntos de Fordyce no se contagian. Las verrugas (VPH), el molusco y algunas infecciones sí pueden transmitirse. Por eso importa distinguir el tipo de lesión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se deben quitar los granitos del pene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las lesiones benignas no necesitan tratamiento; solo se retiran por estética si el paciente lo desea. Las verrugas o el molusco sí tienen tratamiento indicado. Nunca intentes quitarlas por cuenta propia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo consultar por granitos en el pene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si aparecieron hace poco, crecen o se multiplican, cambian de color, sangran, dan comezón o dolor, o si hubo contacto sexual de riesgo. Una revisión rápida distingue lo benigno y te da tranquilidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué me salieron granitos en el pene si no he tenido relaciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque muchos no tienen relación con el sexo: las pápulas perladas y los puntos de Fordyce son variantes normales que pueden notarse desde la adolescencia, y la foliculitis se relaciona con el vello o el rasurado. Aun así, si la lesión es nueva o cambia, conviene revisarla.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los granitos en el pene pueden ser cáncer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es poco frecuente. La gran mayoría de los granitos son benignos. Lo que sí debe valorarse es una llaga, mancha o bolita que no sana en unas semanas, crece o sangra, porque en esos casos puede ser necesario tomar una biopsia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si me reviento un granito del pene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede infectarse, dejar cicatriz y, si es una lesión viral como el molusco, extenderse a la piel cercana. Lava la zona con agua y jabón neutro, no apliques productos y revísate si aparece dolor, enrojecimiento o secreción.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué significa tener granitos con comezón en el pene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La comezón orienta más a irritación, infección por hongos (balanitis) o foliculitis que a variantes normales, que no suelen dar molestias. Como puede tener varias causas, lo mejor es revisarlo antes de aplicar cremas.",
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
      name: "Balanitis",
      item: "https://urologiaroboticaleon.com/balanitis",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Granitos en el pene",
      item: "https://urologiaroboticaleon.com/granitos-en-el-pene",
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Granitos, bolitas o manchas en el pene: qué son",
  description:
    "Guía sobre los granitos, bolitas o manchas en el pene: causas benignas (pápulas perladas, puntos de Fordyce) frente a verrugas por VPH u otras causas, y cuándo acudir al urólogo. Dr. Alejandro Quiroz Compeán, León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/granitos-en-el-pene",
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

export default function GranitosPage() {
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
      <GranitosContent />
    </>
  );
}
