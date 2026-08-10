import type { Metadata } from "next";
import VasectomiaContent from "./VasectomiaContent";

export const metadata: Metadata = {
  title: "Vasectomía sin Bisturí en León, Gto. | Qué es y Cómo se Hace — Dr. Quiroz",
  description:
    "Vasectomía sin bisturí en León, Guanajuato: qué es, cómo se hace paso a paso, recuperación y mitos. Método anticonceptivo definitivo, ambulatorio y con anestesia local. Dr. Quiroz, urólogo.",
  keywords: [
    "vasectomía León",
    "vasectomía Guanajuato",
    "vasectomía sin bisturí",
    "qué es la vasectomía",
    "cómo se hace la vasectomía",
    "vasectomía recuperación",
    "vasectomía reversible",
    "reversión de vasectomía",
    "vasectomía precio León",
    "beneficios de la vasectomía",
  ],
  openGraph: {
    title: "Vasectomía sin Bisturí en León, Gto. | Dr. Alejandro Quiroz Compeán",
    description:
      "Qué es la vasectomía, cómo se hace la técnica sin bisturí, recuperación y mitos. Método anticonceptivo definitivo. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/vasectomia",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vasectomía sin bisturí en León — Dr. Alejandro Quiroz Compeán",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasectomía sin Bisturí en León, Gto. | Dr. Quiroz",
    description:
      "Qué es, cómo se hace la técnica sin bisturí, recuperación y mitos de la vasectomía. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/vasectomia",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La vasectomía duele?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se realiza con anestesia local, por lo que durante el procedimiento no hay dolor, solo la molestia inicial de la anestesia. En la técnica sin bisturí no hay corte ni puntos, así que el malestar posterior suele ser leve y se controla con hielo, reposo y analgésicos comunes durante uno o dos días.",
      },
    },
    {
      "@type": "Question",
      name: "¿La vasectomía afecta la erección, el deseo sexual o el orgasmo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La vasectomía no afecta la testosterona, la erección, el deseo sexual ni el orgasmo. Tampoco cambia la cantidad ni el aspecto del semen de forma perceptible, porque los espermatozoides son una fracción mínima del volumen. Lo único que cambia es que el semen ya no contiene espermatozoides.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo es efectiva la vasectomía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No es efectiva de inmediato. Quedan espermatozoides en la vía durante algunas semanas, por lo que es indispensable usar otro método anticonceptivo hasta confirmar la ausencia de espermatozoides con un análisis de semen (espermatobioscopia), habitualmente alrededor de los 3 meses o tras unas 20 eyaculaciones. Solo entonces se considera efectiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿La vasectomía es reversible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La vasectomía debe considerarse un método permanente. Existe la reversión (vasovasostomía), una microcirugía que el Dr. Quiroz realiza, pero no garantiza recuperar la fertilidad: las probabilidades de embarazo disminuyen conforme pasa más tiempo desde la vasectomía. Por eso la decisión debe tomarse pensando en que es definitiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿La vasectomía sin bisturí es diferente de la convencional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En lugar de un corte con bisturí, se accede al conducto (conducto deferente) a través de una pequeña punción, sin necesidad de puntos. Esto se asocia con menos sangrado, menos molestia y una recuperación más rápida que la técnica convencional, con la misma eficacia anticonceptiva.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta la vasectomía en León?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo se informa en la consulta e incluye la valoración, el procedimiento y el seguimiento con el análisis de semen de control. Se realiza en Hospital Ángeles León y Hospital Christus Muguerza Altagracia. Escríbenos por WhatsApp para conocer disponibilidad y detalles.",
      },
    },
    {
      "@type": "Question",
      name: "¿La vasectomía protege contra infecciones de transmisión sexual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La vasectomía es un método anticonceptivo, no protege contra infecciones de transmisión sexual. Para eso sigue siendo necesario el uso de preservativo cuando corresponde.",
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
      name: "Vasectomía",
      item: "https://urologiaroboticaleon.com/vasectomia",
    },
  ],
};

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Vasectomía sin bisturí",
  alternateName: ["Vasectomía", "Vasectomía no-scalpel"],
  procedureType: "Procedimiento ambulatorio con anestesia local",
  bodyLocation: "Conducto deferente (escroto)",
  howPerformed:
    "A través de una pequeña punción en el escroto se localizan e interrumpen los conductos deferentes, impidiendo que los espermatozoides lleguen al semen. Sin corte de bisturí ni puntos.",
  followup:
    "Reposo relativo 1-2 días; análisis de semen de control para confirmar la ausencia de espermatozoides antes de considerarla efectiva.",
  indication: {
    "@type": "MedicalIndication",
    name: "Anticoncepción masculina definitiva",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Vasectomía sin bisturí en León, Guanajuato",
  description:
    "Información sobre la vasectomía sin bisturí: qué es, cómo se hace, recuperación, efectividad, mitos y reversión. Dr. Alejandro Quiroz Compeán, urólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/vasectomia",
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

export default function VasectomiaPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <VasectomiaContent />
    </>
  );
}
