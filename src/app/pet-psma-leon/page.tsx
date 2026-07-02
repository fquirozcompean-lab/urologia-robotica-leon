import type { Metadata } from "next";
import PetPsmaContent from "./PetPsmaContent";

export const metadata: Metadata = {
  title: "PET-PSMA en León, Gto | Estadificación de Cáncer de Próstata",
  description:
    "PET-PSMA disponible en León, Guanajuato. El estudio más preciso para estadificar el cáncer de próstata. Dr. Quiroz Compeán, urólogo oncólogo certificado.",
  keywords: [
    "PET PSMA León",
    "PET PSMA Guanajuato",
    "PET PSMA México Bajío",
    "PSMA cáncer de próstata",
    "estadificación cáncer próstata León",
    "recurrencia bioquímica próstata",
    "PSA elevado después de cirugía",
    "PSA en ascenso tras radioterapia",
    "gammagrama óseo vs PET PSMA",
    "dónde hacer PET PSMA León",
    "urólogo oncólogo PET PSMA",
    "metástasis cáncer de próstata diagnóstico",
  ],
  openGraph: {
    title: "PET-PSMA en León | Dr. Quiroz Compeán",
    description:
      "El estudio de imagen más preciso para el cáncer de próstata, disponible en León, Gto. Estadificación y detección de recurrencia con precisión molecular.",
    url: "https://urologiaroboticaleon.com/pet-psma-leon",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PET-PSMA en León — Dr. Alejandro Quiroz Compeán",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PET-PSMA en León | Dr. Quiroz Compeán",
    description:
      "Estadificación de precisión del cáncer de próstata con PET-PSMA en León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/pet-psma-leon",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es el PET-PSMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un estudio de imagen molecular que utiliza un radiotrazador dirigido al antígeno prostático específico de membrana (PSMA), una proteína presente en la superficie de las células de cáncer de próstata. Permite visualizar con gran precisión dónde hay células tumorales en todo el cuerpo, incluso en lesiones pequeñas que otros estudios no detectan.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo está indicado el PET-PSMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las guías internacionales (NCCN, EAU) lo recomiendan principalmente en dos escenarios: estadificación inicial de cáncer de próstata de riesgo alto o desfavorable, y recurrencia bioquímica (PSA en ascenso después de cirugía o radioterapia) para localizar dónde está la enfermedad y dirigir el tratamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿El PET-PSMA está disponible en León, Guanajuato?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. León cuenta con acceso a PET-PSMA, algo poco común fuera de las grandes capitales. El Dr. Quiroz Compeán lo integra en la evaluación de sus pacientes cuando está indicado, sin necesidad de trasladarse a Ciudad de México o Guadalajara.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué ventajas tiene sobre la tomografía y el gammagrama óseo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El PET-PSMA detecta enfermedad en ganglios linfáticos y hueso con mayor sensibilidad y especificidad que la tomografía computarizada y el gammagrama óseo combinados, especialmente con valores bajos de PSA. Esto permite tomar decisiones de tratamiento más certeras: evitar cirugías que no beneficiarían al paciente o confirmar que un tratamiento curativo sí es viable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo me preparo para un PET-PSMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La preparación es sencilla y el estudio es ambulatorio. Se aplica el radiotrazador por vía intravenosa, se espera aproximadamente una hora y se realiza la adquisición de imágenes. El Dr. Quiroz le indicará los detalles específicos y coordinará el estudio como parte de su plan de evaluación.",
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
      name: "PET-PSMA",
      item: "https://urologiaroboticaleon.com/pet-psma-leon",
    },
  ],
};

const medicalTestSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTest",
  name: "PET-PSMA (Tomografía por Emisión de Positrones con PSMA)",
  description:
    "Estudio de imagen molecular de alta precisión para la estadificación y detección de recurrencia del cáncer de próstata. Disponible en León, Guanajuato.",
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

export default function PetPsmaPage() {
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
      <PetPsmaContent />
    </>
  );
}
