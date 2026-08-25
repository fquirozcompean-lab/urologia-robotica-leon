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
        text: "Muchos sí. Las pápulas perladas del pene (pequeños granitos en fila alrededor del borde del glande) y los puntos de Fordyce (glándulas sebáceas visibles como puntos blancos o amarillentos) son variantes anatómicas normales, no son una infección ni se transmiten sexualmente, y no requieren tratamiento. Sin embargo, no todos los granitos son de este tipo, por lo que ante la duda conviene una revisión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué son los granitos blancos en el pene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los granitos blancos suelen corresponder a puntos de Fordyce (glándulas sebáceas), pápulas perladas o pequeños quistes, todos benignos. En algunos casos, unos granitos blancos con un hoyito central pueden ser molusco contagioso, de origen viral. La forma más segura de distinguirlos es una valoración urológica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo sé si son verrugas (VPH) o algo benigno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No siempre es fácil a simple vista. Las pápulas perladas se distribuyen de forma muy regular alrededor del glande, mientras que las verrugas genitales (por VPH) suelen ser irregulares, pueden crecer o multiplicarse y se relacionan con contacto sexual. Ante la duda, o si una lesión cambia, crece o sangra, la evaluación con el urólogo es lo indicado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los granitos en el pene son contagiosos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de qué sean. Las pápulas perladas y los puntos de Fordyce no son contagiosos. En cambio, las verrugas genitales (VPH), el molusco contagioso y algunas infecciones sí pueden transmitirse. Por eso importa distinguir el tipo de lesión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se deben quitar los granitos del pene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las lesiones benignas como las pápulas perladas o los puntos de Fordyce no necesitan tratamiento; solo se retiran por motivos estéticos si el paciente lo desea. Las verrugas, el molusco u otras lesiones sí tienen tratamiento indicado. Nunca conviene intentar quitarlas por cuenta propia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo consultar por granitos en el pene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conviene revisarse si las lesiones aparecieron recientemente, crecen o se multiplican, cambian de color, sangran, dan comezón o dolor, o si hubo contacto sexual de riesgo. Una revisión rápida distingue lo benigno de lo que sí requiere tratamiento y te da tranquilidad.",
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
