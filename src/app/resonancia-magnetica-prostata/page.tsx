import type { Metadata } from "next";
import ResonanciaProstataContent from "./ResonanciaProstataContent";

export const metadata: Metadata = {
  title: "Resonancia Magnética de Próstata en León | mpRM y PI-RADS — Dr. Quiroz",
  description:
    "Resonancia magnética multiparamétrica (mpRM) de próstata en León, Guanajuato. Guía la detección de cáncer, la biopsia de fusión y la vigilancia activa. Interpretada por el Dr. Quiroz Compeán, urólogo oncólogo.",
  keywords: [
    "resonancia magnética próstata León",
    "resonancia multiparamétrica próstata",
    "mpRM próstata León Guanajuato",
    "resonancia próstata antes de biopsia",
    "PI-RADS próstata",
    "biopsia de fusión próstata León",
    "resonancia próstata PSA elevado",
    "resonancia magnética próstata Guanajuato",
    "estudio de imagen próstata León",
    "resonancia próstata vigilancia activa",
  ],
  openGraph: {
    title: "Resonancia Magnética de Próstata en León | Dr. Quiroz Compeán",
    description:
      "mpRM de próstata en León, Gto: detecta lesiones sospechosas, guía la biopsia de fusión y clasifica el riesgo con PI-RADS. Interpretada por urólogo oncólogo.",
    url: "https://urologiaroboticaleon.com/resonancia-magnetica-prostata",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Resonancia Magnética de Próstata en León — Dr. Alejandro Quiroz Compeán",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resonancia Magnética de Próstata en León | Dr. Quiroz Compeán",
    description:
      "mpRM de próstata en León, Gto: guía la detección de cáncer, la biopsia de fusión y la vigilancia activa con PI-RADS.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/resonancia-magnetica-prostata",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es una resonancia magnética multiparamétrica de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un estudio de imagen que combina varias secuencias de resonancia (anatómica en T2, difusión y contraste dinámico) para evaluar la próstata con gran detalle. Permite identificar zonas sospechosas de cáncer clínicamente significativo antes de una biopsia, sin radiación. Se conoce como mpRM (resonancia multiparamétrica).",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué significa mi resultado PI-RADS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PI-RADS es una escala del 1 al 5 que estima la probabilidad de que una lesión en la próstata sea un cáncer clínicamente significativo. PI-RADS 1 y 2 indican probabilidad baja; PI-RADS 3 es intermedia; PI-RADS 4 y 5 indican probabilidad alta y suelen requerir biopsia dirigida. El resultado siempre se interpreta junto con el PSA, el tacto rectal y el contexto clínico de cada paciente.",
      },
    },
    {
      "@type": "Question",
      name: "¿La resonancia sustituye a la biopsia de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La resonancia identifica y localiza zonas sospechosas, pero el diagnóstico de cáncer solo se confirma con biopsia (análisis del tejido). Su valor es doble: puede evitar biopsias innecesarias cuando el estudio es tranquilizador y, cuando hay una lesión sospechosa, permite dirigir la biopsia al punto exacto mediante fusión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito una resonancia antes de la biopsia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las guías internacionales (EAU y AUA) recomiendan realizar la resonancia multiparamétrica antes de la primera biopsia en la mayoría de los hombres con sospecha de cáncer de próstata. Mejora la detección de tumores significativos y reduce el hallazgo de cánceres de muy bajo riesgo que no requieren tratamiento. La indicación se valora de forma individual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es una biopsia de fusión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una biopsia que superpone (fusiona) las imágenes de la resonancia con el ultrasonido en tiempo real, de modo que las muestras se toman exactamente de la zona sospechosa identificada en la resonancia. Es más precisa que la biopsia tradicional por muestreo al azar, especialmente en lesiones pequeñas o de difícil acceso.",
      },
    },
    {
      "@type": "Question",
      name: "¿La resonancia de próstata usa contraste o radiación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La resonancia magnética no utiliza radiación. La resonancia multiparamétrica generalmente incluye una fase con contraste intravenoso (gadolinio), aunque en casos seleccionados puede realizarse un protocolo abreviado sin contraste. El estudio es ambulatorio y bien tolerado.",
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
      name: "Resonancia Magnética de Próstata",
      item: "https://urologiaroboticaleon.com/resonancia-magnetica-prostata",
    },
  ],
};

const medicalTestSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTest",
  name: "Resonancia Magnética Multiparamétrica de Próstata (mpRM)",
  alternateName: [
    "Resonancia multiparamétrica de próstata",
    "mpRM de próstata",
    "Resonancia magnética de próstata",
  ],
  description:
    "Estudio de imagen sin radiación que combina secuencias en T2, difusión y contraste dinámico para detectar y localizar cáncer de próstata clínicamente significativo, guiar la biopsia de fusión y apoyar la vigilancia activa. Se clasifica con la escala PI-RADS. Disponible en León, Guanajuato.",
  usedToDiagnose: {
    "@type": "MedicalCondition",
    name: "Cáncer de Próstata",
    code: {
      "@type": "MedicalCode",
      code: "C61",
      codingSystem: "ICD-10",
    },
  },
};

export default function ResonanciaProstataPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalTestSchema) }}
      />
      <ResonanciaProstataContent />
    </>
  );
}
