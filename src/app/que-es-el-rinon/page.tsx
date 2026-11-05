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
        text: "Son dos órganos con forma de frijol, del tamaño de un puño, en la parte alta de la espalda, uno a cada lado de la columna y por debajo de las últimas costillas. No están en la zona lumbar baja, sino más arriba y hacia los costados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué sirven los riñones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Filtran la sangre y eliminan desechos y líquido en forma de orina. Además equilibran las sales y el agua, ayudan a regular la presión arterial, estimulan la producción de glóbulos rojos y activan la vitamina D.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede vivir con un solo riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La mayoría de las personas con un solo riñón lleva una vida normal, porque el riñón restante compensa la función. Por eso la cirugía renal busca preservar tejido sano siempre que es posible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde duele el riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En el costado o flanco, por debajo de las costillas y hacia la espalda, generalmente de un lado. Ojo: buena parte del \"dolor de riñón\" que la gente siente es en realidad dolor muscular de espalda.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es bueno para los riñones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hidratarte bien, controlar la presión y la diabetes, no abusar de la sal ni de los antiinflamatorios y no fumar. No hay evidencia de que \"limpiezas\" o suplementos desintoxiquen los riñones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué enfermedades afectan al riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las más frecuentes son los cálculos (piedras), las infecciones que ascienden al riñón (pielonefritis) y los tumores renales, además de la enfermedad renal crónica ligada a la diabetes y la hipertensión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué significa tener la creatinina alta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede indicar que los riñones están filtrando menos, aunque también influyen la masa muscular, la deshidratación y algunos medicamentos. Un solo valor no hace el diagnóstico: se interpreta junto con la tasa de filtración, el examen de orina y tu historia clínica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los riñones duelen cuando empiezan a fallar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Por lo general, no. La enfermedad renal crónica suele avanzar sin dolor, y los síntomas como cansancio o hinchazón aparecen en etapas tardías. Por eso, quienes tienen diabetes o hipertensión deben revisarse aunque se sientan bien.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánta agua debo tomar para cuidar mis riñones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No hay una cantidad única: depende de tu peso, tu actividad, el clima y tu salud. Una guía práctica es que la orina se vea clara. Si has tenido cálculos, suele recomendarse tomar líquidos suficientes para orinar unos 2.5 litros al día. Si tienes insuficiencia renal o del corazón, sigue la indicación de tu médico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué médico trata los riñones: urólogo o nefrólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del problema. El urólogo atiende los cálculos, las obstrucciones, la sangre en la orina y los tumores del riñón. El nefrólogo atiende la enfermedad renal crónica y la diálisis. Muchas veces trabajan en equipo.",
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
