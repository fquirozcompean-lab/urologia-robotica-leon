import type { Metadata } from "next";
import BiopsiaProstataContent from "./BiopsiaProstataContent";

export const metadata: Metadata = {
  title: "Biopsia de Próstata en León: Cómo Es, Preparación y Costo | Dr. Quiroz",
  description:
    "Cuándo se indica la biopsia de próstata, cómo se realiza (con sedación y fusión cognitiva con resonancia), cuidados, resultados y costo desde $18,000 MXN. Dr. Alejandro Quiroz, urólogo oncólogo en León, Gto.",
  keywords: [
    "biopsia de próstata León",
    "costo biopsia de próstata",
    "precio biopsia de próstata León",
    "biopsia de próstata por fusión",
    "biopsia de próstata duele",
    "cuidados después de biopsia de próstata",
    "resultado biopsia de próstata",
    "urólogo oncólogo León",
  ],
  openGraph: {
    title: "Biopsia de Próstata en León: Cómo Es, Preparación y Costo | Dr. Alejandro Quiroz",
    description:
      "Cuándo se indica, cómo se realiza, cuidados y costo desde $18,000 MXN. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/biopsia-de-prostata",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Biopsia de próstata — Dr. Alejandro Quiroz Compeán, urólogo oncólogo en León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biopsia de Próstata en León | Dr. Quiroz",
    description: "Cuándo se indica, cómo se realiza, cuidados y costo. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/biopsia-de-prostata",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es una biopsia de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un procedimiento en el que se toman pequeñas muestras de tejido de la próstata con una aguja fina, guiada por ultrasonido, para que el patólogo confirme o descarte el cáncer y, si lo hay, determine qué tan agresivo es.",
      },
    },
    {
      "@type": "Question",
      name: "¿La biopsia de próstata duele?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se realiza con sedación a cargo de un anestesiólogo, así que durante el procedimiento estás cómodo. Después puede haber una molestia leve que cede con analgésicos, y algo de sangre en la orina, el semen o las evacuaciones por unos días.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una biopsia de próstata en León?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La biopsia de próstata con el Dr. Alejandro Quiroz tiene un costo desde $18,000 MXN, que incluye la sala de procedimientos, el servicio de anestesiología, el equipo rentado y el estudio de patología. El costo final se confirma en la consulta, según tu caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la biopsia de próstata por fusión cognitiva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una biopsia que aprovecha la resonancia magnética: el urólogo estudia antes las imágenes y, durante el procedimiento, dirige muestras adicionales a las zonas sospechosas usando el ultrasonido, además de las muestras ordenadas de toda la glándula.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda el resultado de la biopsia de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del laboratorio de patología; en general son algunos días. El resultado se revisa contigo en consulta para explicarte qué significa y cuáles son los siguientes pasos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es normal tener sangre en la orina o el semen después de la biopsia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Es normal ver un poco de sangre en la orina por algunos días y en el semen hasta por algunas semanas. Debes buscar atención si tienes fiebre, escalofríos, no puedes orinar o el sangrado es abundante o con coágulos.",
      },
    },
    {
      "@type": "Question",
      name: "¿La biopsia puede hacer que el cáncer se extienda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No hay evidencia de que la biopsia de próstata haga que el cáncer se disemine. Es un mito frecuente que puede retrasar un diagnóstico importante.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si la biopsia sale negativa pero el antígeno sigue alto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una biopsia negativa no descarta el cáncer por completo. Según el caso, se continúa con vigilancia del antígeno prostático, una resonancia si no se hizo antes y, si la sospecha persiste, una nueva biopsia dirigida.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://urologiaroboticaleon.com" },
    { "@type": "ListItem", position: 2, name: "Cáncer de Próstata", item: "https://urologiaroboticaleon.com/cancer-prostata" },
    { "@type": "ListItem", position: 3, name: "Biopsia de próstata", item: "https://urologiaroboticaleon.com/biopsia-de-prostata" },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Biopsia de próstata",
  description:
    "Guía sobre la biopsia de próstata: indicaciones, preparación, cómo se realiza con fusión cognitiva con resonancia, cuidados posteriores, resultados y costo. Dr. Alejandro Quiroz Compeán, urólogo oncólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/biopsia-de-prostata",
  about: {
    "@type": "MedicalProcedure",
    name: "Biopsia de próstata",
    procedureType: "https://schema.org/DiagnosticProcedure",
    bodyLocation: "Próstata",
  },
  author: {
    "@type": "Physician",
    name: "Dr. Alejandro Quiroz Compeán",
    url: "https://urologiaroboticaleon.com",
  },
  medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
};

export default function BiopsiaProstataPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <BiopsiaProstataContent />
    </>
  );
}
