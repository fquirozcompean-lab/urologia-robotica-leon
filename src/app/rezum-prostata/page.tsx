import type { Metadata } from "next";
import RezumContent from "./RezumContent";

export const metadata: Metadata = {
  title: "Rezum para Próstata Crecida en León | Sin Cirugía Mayor — Dr. Quiroz",
  description:
    "Rezum en León, Gto.: tratamiento del crecimiento de próstata con vapor de agua, mínimamente invasivo y que preserva la eyaculación. Para próstatas chicas-medianas. Dr. Quiroz, urólogo.",
  keywords: [
    "rezum León",
    "rezum próstata",
    "rezum México",
    "rezum vs holep",
    "tratamiento próstata sin cirugía",
    "vapor de agua próstata",
    "próstata crecida tratamiento León",
    "rezum preserva eyaculación",
    "terapia de vapor próstata",
  ],
  openGraph: {
    title: "Rezum para Próstata Crecida en León | Dr. Alejandro Quiroz Compeán",
    description:
      "Tratamiento del crecimiento de próstata con vapor de agua: mínimamente invasivo, ambulatorio y que preserva la eyaculación. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/rezum-prostata",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rezum para próstata crecida en León — Dr. Alejandro Quiroz Compeán",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rezum para Próstata Crecida en León | Dr. Quiroz",
    description:
      "Vapor de agua para la próstata crecida: mínimamente invasivo y preserva la eyaculación. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/rezum-prostata",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿El Rezum duele o requiere anestesia general?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No requiere anestesia general. Es ambulatorio, con anestesia local y, en muchos casos, sedación ligera. Dura pocos minutos y la molestia suele ser leve.",
      },
    },
    {
      "@type": "Question",
      name: "¿El Rezum preserva la eyaculación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, es su principal ventaja: en la mayoría de los pacientes preserva la eyaculación y la función eréctil, a diferencia de la RTUP o el HoLEP, donde la eyaculación retrógrada es común.",
      },
    },
    {
      "@type": "Question",
      name: "¿En cuánto tiempo se ven los resultados del Rezum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Son graduales: el tejido se reabsorbe poco a poco, así que la mejoría se nota en las primeras semanas y se consolida hacia los 2-3 meses. No es inmediato como una resección, pero es duradero.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito catéter después del Rezum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, una sonda urinaria temporal unos días (en promedio 3 a 7) mientras cede la inflamación inicial. Es una molestia pasajera y parte normal de la recuperación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Rezum o HoLEP: cuál me conviene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tamaño de la próstata y tus prioridades. El Rezum es ideal para próstatas chicas-medianas y para preservar la eyaculación; el HoLEP es más adecuado para próstatas grandes y ofrece un resultado más definitivo. Una uroflujometría y la medición del volumen ayudan a decidir.",
      },
    },
    {
      "@type": "Question",
      name: "¿El Rezum es permanente? ¿Podré dejar el medicamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los estudios muestran mejoría sostenida a varios años. Como toda técnica que conserva tejido prostático, una proporción de pacientes puede requerir tratamiento adicional con el tiempo —algo más probable en próstatas grandes, por lo que el Rezum se reserva para próstatas chicas a medianas. Muchos pacientes logran dejar o reducir el medicamento. El resultado se valora de forma individual.",
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
      name: "Hiperplasia Prostática Benigna",
      item: "https://urologiaroboticaleon.com/hiperplasia-prostatica-benigna",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Rezum",
      item: "https://urologiaroboticaleon.com/rezum-prostata",
    },
  ],
};

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Rezum (terapia con vapor de agua para la próstata)",
  alternateName: ["Rezum", "Terapia de vapor de agua", "Water vapor therapy"],
  procedureType: "Procedimiento mínimamente invasivo, ambulatorio",
  bodyLocation: "Próstata",
  howPerformed:
    "Se inyecta vapor de agua estéril en el tejido prostático sobrante mediante un acceso por la uretra, sin incisiones. El tejido tratado se reabsorbe poco a poco, reduciendo la obstrucción al flujo urinario. Preserva la eyaculación en la mayoría de los casos.",
  followup:
    "Sonda urinaria temporal unos días; mejoría gradual de los síntomas en las primeras semanas.",
  indication: {
    "@type": "MedicalIndication",
    name: "Hiperplasia prostática benigna (próstata crecida), especialmente de tamaño chico a mediano",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Rezum para próstata crecida en León, Guanajuato",
  description:
    "Información sobre el Rezum: tratamiento con vapor de agua para el crecimiento de próstata, mínimamente invasivo y que preserva la eyaculación. Dr. Alejandro Quiroz Compeán, urólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/rezum-prostata",
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

export default function RezumPage() {
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
      <RezumContent />
    </>
  );
}
