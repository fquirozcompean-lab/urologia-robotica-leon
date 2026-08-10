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
        text: "El dolor de riñón se siente en el costado o flanco, por debajo de las últimas costillas y hacia la espalda, casi siempre de un solo lado. Puede irradiarse hacia el abdomen, la ingle o los genitales, sobre todo cuando lo causa un cálculo. No suele ubicarse en el centro de la espalda baja: esa zona corresponde más a dolor muscular.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo sé si es dolor de riñón o de espalda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El dolor muscular de espalda suele cambiar con los movimientos y la postura, y mejora al reposar o con calor. El dolor de riñón, en cambio, no suele modificarse al moverte y con frecuencia se acompaña de otros síntomas: fiebre, ardor al orinar, sangre en la orina o náuseas. Si hay fiebre o sangre en la orina, es más probable que el origen sea renal y conviene una valoración pronta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo es el dolor de riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de la causa. El cólico por un cálculo suele ser intenso, aparece en oleadas y no encuentra una posición que lo alivie. El dolor por infección renal es más constante y se acompaña de fiebre y malestar. En muchos problemas del riñón, como los tumores en etapas tempranas, no hay dolor en absoluto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué me duele el riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las causas más frecuentes son los cálculos renales (piedras que se desplazan por la vía urinaria) y las infecciones que ascienden al riñón (pielonefritis). Con menor frecuencia, obstrucciones del flujo de orina. Los tumores renales suelen ser indoloros, por lo que un dolor no descarta ni confirma un tumor: lo que orienta es el conjunto de síntomas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué puedo tomar para el dolor de riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No es recomendable automedicarse, sobre todo con antibióticos: usarlos mal puede enmascarar una infección y complicarla. Mientras acudes a valoración, ayuda mantenerte hidratado y evitar esfuerzos. Si hay fiebre, sangre en la orina, dolor intenso que no cede o imposibilidad para orinar, acude a urgencias sin esperar. El tratamiento correcto depende de la causa, que un urólogo determina.",
      },
    },
    {
      "@type": "Question",
      name: "¿El dolor de riñón en mujeres es diferente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La localización es la misma, pero en mujeres una causa muy frecuente de dolor en el flanco es la infección urinaria que asciende al riñón (pielonefritis), porque las infecciones urinarias son más comunes en ellas. El embarazo también aumenta el riesgo. Por eso, ante dolor de costado con fiebre o ardor al orinar, la evaluación es especialmente importante.",
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
