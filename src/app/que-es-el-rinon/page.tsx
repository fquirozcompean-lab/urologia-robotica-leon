import type { Metadata } from "next";
import QueEsRinonContent from "./QueEsRinonContent";

export const metadata: Metadata = {
  title: "¿Qué es el Riñón y cómo Funciona? | Guía del Dr. Quiroz — León",
  description:
    "Qué es el riñón, para qué sirve, dónde está y qué problemas puede tener (cálculos, infección, cáncer, dolor). Guía clara y basada en evidencia. Dr. Quiroz, urólogo en León, Gto.",
  keywords: [
    "qué es el riñón",
    "para qué sirve el riñón",
    "cómo funciona el riñón",
    "dónde está el riñón",
    "qué es bueno para los riñones",
    "función de los riñones",
    "problemas de riñón",
    "cuántos riñones tiene el cuerpo",
    "riñones",
  ],
  openGraph: {
    title: "¿Qué es el Riñón y cómo Funciona? | Dr. Alejandro Quiroz Compeán",
    description:
      "Guía clara sobre el riñón: qué es, para qué sirve, dónde está y sus problemas más frecuentes. Basada en evidencia.",
    url: "https://urologiaroboticaleon.com/que-es-el-rinon",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "¿Qué es el riñón? — Dr. Alejandro Quiroz Compeán, León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Qué es el Riñón y cómo Funciona? | Dr. Quiroz",
    description:
      "Qué es el riñón, para qué sirve y sus problemas más frecuentes. Guía basada en evidencia. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/que-es-el-rinon",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Dónde están los riñones y qué tamaño tienen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Son dos órganos con forma de frijol, del tamaño aproximado de un puño, ubicados en la parte alta de la espalda, uno a cada lado de la columna y por debajo de las últimas costillas. El riñón derecho suele estar un poco más abajo que el izquierdo. No están en la zona lumbar baja, sino más arriba y hacia los costados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué sirven los riñones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Filtran la sangre y eliminan los desechos y el exceso de líquido produciendo la orina. Además equilibran las sales y el agua del cuerpo, ayudan a regular la presión arterial, estimulan la producción de glóbulos rojos y activan la vitamina D para la salud de los huesos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede vivir con un solo riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La mayoría de las personas con un solo riñón lleva una vida completamente normal, porque el riñón restante compensa la función. Por eso, cuando es necesario operar un riñón (por ejemplo, por un tumor), muchas veces se busca preservar la mayor cantidad de tejido sano posible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde duele el riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El dolor de riñón se siente en el costado o flanco, por debajo de las costillas y hacia la espalda, generalmente de un solo lado. Puede irradiarse hacia el abdomen o la ingle. Es importante saber que gran parte del 'dolor de riñón' que la gente reporta es en realidad dolor muscular de la espalda; distinguirlos requiere valorar los síntomas acompañantes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es bueno para los riñones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lo que tiene respaldo científico es sencillo: mantenerse bien hidratado, controlar la presión arterial y la diabetes, no abusar de la sal ni de los antiinflamatorios sin indicación médica, y no fumar. No hay evidencia sólida de que 'limpiezas', tés o suplementos 'desintoxiquen' o curen los riñones; los riñones sanos ya se depuran solos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué enfermedades afectan al riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las más frecuentes en la consulta urológica son los cálculos renales (piedras), las infecciones que ascienden al riñón (pielonefritis) y los tumores renales. También la enfermedad renal crónica, más relacionada con la diabetes y la hipertensión. Cada una tiene causas y tratamientos distintos.",
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
      name: "¿Qué es el riñón?",
      item: "https://urologiaroboticaleon.com/que-es-el-rinon",
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "¿Qué es el riñón y cómo funciona?",
  description:
    "Guía informativa sobre el riñón: anatomía, función, y sus problemas más frecuentes (cálculos, infección, tumores y dolor). Dr. Alejandro Quiroz Compeán, urólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/que-es-el-rinon",
  about: {
    "@type": "AnatomicalStructure",
    name: "Riñón",
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

export default function QueEsRinonPage() {
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
      <QueEsRinonContent />
    </>
  );
}
