import type { Metadata } from "next";
import HoLEPContent from "./HoLEPContent";

export const metadata: Metadata = {
  title: "HoLEP: Cirugía Láser de Próstata en León | Recuperación Rápida — Dr. Quiroz",
  description:
    "Cirugía láser HoLEP para próstata grande en León, Guanajuato. Recuperación 24-48h, mínimo sangrado, resultados duraderos. Dr. Alejandro Quiroz, especialista certificado.",
  keywords: [
    "holep cirugia",
    "cirugía láser próstata León",
    "holep León",
    "enucleación prostática láser",
    "holep vs turp",
    "láser holmium próstata",
    "holep cirugia prostata",
    "holep próstata grande",
    "cirugía próstata láser holmium",
    "laser holmium prostata León",
    "holep cirugia recuperacion",
    "mejor cirugia prostata grande",
    "holep vs cirugia abierta",
    "cirugía láser próstata León Guanajuato",
  ],
  openGraph: {
    title: "HoLEP: Cirugía Láser de Próstata en León — Dr. Alejandro Quiroz",
    description:
      "Tratamiento avanzado con láser HoLEP para hiperplasia prostática. Recuperación rápida, mínimas complicaciones. León, Guanajuato.",
    url: "https://urologiaroboticaleon.com/holep-cirugia-laser",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HoLEP Cirugía Láser de Próstata — Dr. Quiroz León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HoLEP: Cirugía Láser de Próstata en León | Dr. Quiroz",
    description:
      "Cirugía láser HoLEP para próstata grande en León. Recuperación 24-48h, mínimo sangrado.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/holep-cirugia-laser",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "HoLEP: Cirugía Láser de Próstata en León, Guanajuato",
  description:
    "Información completa sobre cirugía láser HoLEP para hiperplasia prostática benigna. Dr. Alejandro Quiroz Compeán, urólogo certificado en León.",
  url: "https://urologiaroboticaleon.com/holep-cirugia-laser",
  about: {
    "@type": "MedicalProcedure",
    name: "Enucleación Prostática con Láser de Holmium (HoLEP)",
    alternateName: "HoLEP",
    procedureType: "Cirugía mínimamente invasiva",
    bodyLocation: "Próstata",
    preparation: "Evaluación preoperatoria, estudios de laboratorio e imagen",
    followup: "Alta hospitalaria 24-48h, seguimiento ambulatorio",
    howPerformed:
      "El láser de holmium separa el adenoma prostático de la cápsula sin incisiones externas. Acceso endoscópico transurethral.",
    medicationUsed: "Láser de Holmium",
    indication: {
      "@type": "MedicalIndication",
      name: "Hiperplasia Prostática Benigna (HPB)",
    },
  },
  author: {
    "@type": "Physician",
    name: "Dr. Alejandro Quiroz Compeán",
    medicalSpecialty: "Urología Oncológica",
    address: {
      "@type": "PostalAddress",
      addressLocality: "León",
      addressRegion: "Guanajuato",
      addressCountry: "MX",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿HoLEP es mejor que TURP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para próstatas grandes (>80g), HoLEP es superior a TURP en resultados a largo plazo, menor tasa de reoperación (<2% vs 10-15%) y capacidad de tratar cualquier tamaño prostático. Para próstatas pequeñas-medianas, ambas técnicas son efectivas, pero HoLEP ofrece recuperación más rápida y menor sangrado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura la recuperación de HoLEP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alta hospitalaria en 24-48 horas. Sonda vesical 1-2 días. Retorno a actividades ligeras en 1 semana y actividades completas en 2 semanas. Mejoría completa del flujo urinario en 1-3 meses.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tamaño de próstata puede tratar HoLEP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No hay límite superior. Se han tratado próstatas de más de 300 gramos. Es el único procedimiento láser que puede tratar próstatas de cualquier tamaño sin necesidad de cirugía abierta.",
      },
    },
    {
      "@type": "Question",
      name: "¿HoLEP afecta la función sexual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La erección se preserva en más del 90% de casos si la función era normal antes. La eyaculación retrógrada (semen va a vejiga) es común, al igual que con TURP o cirugía abierta, pero no afecta el orgasmo ni el placer sexual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo hacerme HoLEP si tomo anticoagulantes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. HoLEP es especialmente ventajoso en pacientes anticoagulados porque el láser minimiza el sangrado. Se coordina con cardiología para el manejo perioperatorio del anticoagulante.",
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
      name: "HoLEP: Cirugía Láser de Próstata",
      item: "https://urologiaroboticaleon.com/holep-cirugia-laser",
    },
  ],
};

export default function HoLEPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HoLEPContent />
    </>
  );
}
