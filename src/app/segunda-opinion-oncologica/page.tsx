import type { Metadata } from "next";
import Script from "next/script";
import SegundaOpinionContent from "./SegundaOpinionContent";

export const metadata: Metadata = {
  title:
    "Segunda Opinión en Cáncer Urológico en León | Próstata, Renal y Vejiga — Dr. Quiroz Compeán",
  description:
    "¿Tienes un diagnóstico de cáncer de próstata, renal o de vejiga? Solicita una segunda opinión con el Dr. Quiroz Compeán, urólogo oncólogo formado en INCan y Hospital Albert Einstein. Atención en León, Guanajuato.",
  keywords: [
    "segunda opinión cáncer próstata León",
    "segunda opinión urólogo oncólogo León",
    "segunda opinión cáncer renal",
    "segunda opinión cáncer vejiga",
    "segunda opinión cáncer próstata Guanajuato",
    "urólogo oncólogo segunda opinión León",
    "confirmar diagnóstico cáncer próstata",
    "valoración oncológica León Guanajuato",
    "segunda opinión urológica León",
  ],
  openGraph: {
    title: "Segunda Opinión en Cáncer Urológico | Dr. Quiroz Compeán — León, Gto.",
    description:
      "Urólogo oncólogo formado en INCan y Hospital Albert Einstein. Segunda opinión en cáncer de próstata, riñón y vejiga en León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/segunda-opinion-oncologica",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Segunda Opinión en Cáncer Urológico — Dr. Quiroz Compeán León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Segunda Opinión en Cáncer Urológico | Dr. Quiroz Compeán",
    description:
      "Solicita una segunda opinión en cáncer de próstata, riñón o vejiga con urólogo oncólogo en León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/segunda-opinion-oncologica",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Segunda Opinión en Cáncer Urológico",
  url: "https://urologiaroboticaleon.com/segunda-opinion-oncologica",
  about: {
    "@type": "MedicalCondition",
    name: "Cáncer urológico (próstata, renal, vejiga)",
  },
  author: {
    "@type": "Physician",
    name: "Dr. Alejandro Quiroz Compeán",
    medicalSpecialty: ["Urology", "Oncology"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Pedir una segunda opinión ofende a mi médico actual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Pedir una segunda opinión es una práctica normal y recomendada en medicina, especialmente en oncología. Un buen médico entiende que se trata de tu salud y tu tranquilidad. No tienes que informar a tu médico actual si no lo deseas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito traer todos mis estudios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es lo ideal. Mientras más información tengas disponible (APE/PSA, biopsia, estudios de imagen), más completa y precisa será la opinión. Si te falta algún estudio, durante la consulta se definirá qué información adicional se necesita.",
      },
    },
    {
      "@type": "Question",
      name: "¿Una segunda opinión puede cambiar mi diagnóstico o tratamiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede confirmarlo o puede ofrecer alternativas que no habías considerado. El objetivo no es contradecir a tu médico, sino asegurar que conoces todas tus opciones antes de decidir.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tengo para pedir una segunda opinión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoría de los cánceres urológicos hay tiempo razonable para buscar una segunda opinión sin comprometer el tratamiento. Sin embargo, no conviene retrasarlo demasiado. Si tienes dudas sobre la urgencia de tu caso, escríbenos y te orientamos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden pacientes de otras ciudades?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El Dr. Quiroz recibe pacientes de León, el Bajío y otras regiones que buscan una opinión especializada en cáncer urológico.",
      },
    },
    {
      "@type": "Question",
      name: "¿La segunda opinión incluye revisar mis estudios de imagen y patología?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Parte fundamental de la consulta es revisar tus reportes de patología, laboratorio e imagen para confirmar el diagnóstico y la estadificación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si decido tratarme con el Dr. Quiroz después de la segunda opinión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si tras la consulta decides continuar tu tratamiento con el Dr. Quiroz, se te explicará el plan completo y los siguientes pasos. La decisión siempre es tuya.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo agendo una segunda opinión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes escribir por WhatsApp describiendo tu diagnóstico. Te indicaremos disponibilidad, sede y qué estudios traer a tu consulta.",
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
      name: "Segunda Opinión Oncológica",
      item: "https://urologiaroboticaleon.com/segunda-opinion-oncologica",
    },
  ],
};

export default function SegundaOpinionPage() {
  return (
    <>
      <Script
        id="schema-medical-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SegundaOpinionContent />
    </>
  );
}
