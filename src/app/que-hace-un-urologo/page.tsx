import type { Metadata } from "next";
import QueHaceUrologoContent from "./QueHaceUrologoContent";

export const metadata: Metadata = {
  title: "¿Qué es un Urólogo y en qué se Especializa? Cuándo Ir | León — Dr. Quiroz",
  description:
    "Qué es un urólogo, qué atiende, en qué se especializa y cómo se forma; cuándo ir y qué pasa en la primera visita. Consulta en León desde $1,000 MXN con el Dr. Alejandro Quiroz, urólogo oncólogo.",
  keywords: [
    "qué es un urólogo",
    "qué es un urólogo y en qué se especializa",
    "qué hace un urólogo",
    "cuántos años estudia un urólogo",
    "qué es un urólogo oncólogo",
    "diferencia entre urólogo y andrólogo",
    "urólogo para qué sirve",
    "cuándo ir al urólogo",
    "urólogo en León",
    "cuánto cobra un urólogo en León",
    "consulta urólogo León precio",
    "primera consulta con el urólogo",
    "urólogo para mujeres",
  ],
  openGraph: {
    title: "¿Qué es un Urólogo y en qué se Especializa? | Dr. Alejandro Quiroz — León",
    description:
      "Qué es un urólogo, en qué se especializa, cuándo consultar y qué esperar de la primera visita. Consulta en León desde $1,000 MXN.",
    url: "https://urologiaroboticaleon.com/que-hace-un-urologo",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Qué hace un urólogo — Dr. Alejandro Quiroz Compeán, urólogo en León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Qué es un Urólogo y en qué se Especializa? | Dr. Quiroz",
    description:
      "Qué es un urólogo, en qué se especializa, cuándo consultar y qué esperar de la primera visita. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/que-hace-un-urologo",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué hace un urólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El urólogo es el médico y cirujano especialista en el aparato urinario de hombres y mujeres (riñones, uréteres, vejiga y uretra) y en el aparato reproductor masculino (próstata, testículos y pene). Diagnostica y trata problemas como crecimiento de próstata, cálculos renales, infecciones urinarias, disfunción eréctil y cánceres urológicos, con medicamentos o cirugía.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es un urólogo y en qué se especializa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es el médico cirujano especialista en el aparato urinario de hombres y mujeres y en el aparato reproductor masculino. Todos los urólogos se forman en el área completa, y algunos hacen una alta especialidad en urología oncológica, endourología y cálculos, andrología y salud sexual, urología funcional y femenina, urología pediátrica, reconstructiva o trasplante.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos años estudia un urólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En México, después de la carrera de medicina (6 a 7 años con internado y servicio social), se hacen de 1 a 2 años de cirugía general y luego la residencia de urología: en total, más de 10 años de formación. Quien hace una alta especialidad, como urología oncológica, suma de 1 a 2 años más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es un urólogo oncólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un urólogo con alta especialidad en el diagnóstico y tratamiento del cáncer del aparato urinario y genital masculino: próstata, riñón, vejiga, testículo y pene. Realiza las biopsias y cirugías de estos tumores, y trabaja en equipo con oncología médica y radioterapia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre un urólogo y un andrólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En México, la andrología es un área de la urología: el andrólogo es un urólogo que se enfoca en la salud sexual y reproductiva del hombre, como la disfunción eréctil, los problemas de eyaculación y la fertilidad. Cualquier urólogo certificado atiende estos problemas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo debo ir al urólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuando tengas sangre en la orina, ardor o infecciones urinarias que se repiten, chorro débil o te levantes varias veces a orinar por la noche, dolor en el costado, antígeno prostático elevado, un bulto en un testículo, problemas de erección o lesiones en el pene. Si no puedes orinar o tienes dolor intenso y repentino en un testículo, acude a urgencias.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué edad debe un hombre ir al urólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sin síntomas, se recomienda una revisión de próstata desde los 50 años, o desde los 40-45 si hay antecedentes familiares de cáncer de próstata. Con síntomas, a cualquier edad. Entre los 15 y 35 años conviene la autoexploración testicular mensual.",
      },
    },
    {
      "@type": "Question",
      name: "¿El urólogo también atiende mujeres?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Atiende el aparato urinario de las mujeres: cálculos renales, infecciones urinarias que se repiten, sangre en la orina y tumores del riñón o la vejiga, entre otros. Los órganos reproductores femeninos los atiende el ginecólogo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una consulta con el urólogo en León?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La consulta con el Dr. Alejandro Quiroz tiene un costo desde $1,000 MXN. Si necesitas estudios o algún procedimiento, se te explica para qué sirven y su costo antes de realizarlos.",
      },
    },
    {
      "@type": "Question",
      name: "¿En la consulta con el urólogo siempre se hace tacto rectal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El tacto rectal solo se hace cuando está indicado, por ejemplo en la revisión de la próstata. Se te explica antes, dura unos segundos y aporta información que el antígeno prostático por sí solo no da.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué debo llevar a mi primera consulta con el urólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La lista de medicamentos que tomas, tus estudios previos (resultados de antígeno prostático, ultrasonidos, tomografías o análisis de orina) y las preguntas que quieras hacer.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre un urólogo y un nefrólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El urólogo es cirujano y atiende problemas del aparato urinario como cálculos, obstrucciones, sangre en la orina, próstata y tumores. El nefrólogo atiende la función del riñón, como la enfermedad renal crónica y la diálisis. Con frecuencia trabajan en equipo.",
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
      name: "¿Qué es un urólogo?",
      item: "https://urologiaroboticaleon.com/que-hace-un-urologo",
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "¿Qué es un urólogo, qué hace y cuándo ir?",
  description:
    "Guía sobre qué es un urólogo, en qué se especializa y cómo se forma, qué atiende la urología, qué síntomas son motivo de consulta, cuándo es urgente acudir y qué esperar de la primera consulta. Dr. Alejandro Quiroz Compeán, urólogo oncólogo en León, Guanajuato.",
  url: "https://urologiaroboticaleon.com/que-hace-un-urologo",
  specialty: "https://schema.org/Urologic",
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

export default function QueHaceUrologoPage() {
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
      <QueHaceUrologoContent />
    </>
  );
}
