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
    "antígeno prostático elevado después de cirugía",
    "PSA elevado después de cirugía",
    "PSA en ascenso tras radioterapia",
    "gammagrama óseo vs PET PSMA",
    "dónde hacer PET PSMA León",
    "urólogo oncólogo PET PSMA",
    "metástasis cáncer de próstata diagnóstico",
    "PET CT próstata",
    "PSMA PET CT",
    "PET con PSMA",
    "PSMA PET scan",
    "costo PET PSMA León",
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
      name: "¿El estudio duele o tiene efectos secundarios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Es un estudio ambulatorio y bien tolerado: se aplica el radiotrazador por vía intravenosa, se espera aproximadamente una hora y se adquieren las imágenes. La dosis de radiación es comparable a la de otros estudios de medicina nuclear.",
      },
    },
    {
      "@type": "Question",
      name: "¿Sustituye a la biopsia de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El diagnóstico de cáncer de próstata se confirma con biopsia. El PET-PSMA responde otra pregunta: hasta dónde llega la enfermedad. Son estudios complementarios dentro de una evaluación integral.",
      },
    },
    {
      "@type": "Question",
      name: "¿Todos los pacientes con cáncer de próstata lo necesitan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. En cáncer de bajo riesgo generalmente no está indicado. Su mayor utilidad es en riesgo alto y en recurrencia bioquímica. El Dr. Quiroz valora cada caso conforme a las guías NCCN y EAU.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué necesito para realizarlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una valoración previa con su expediente (PSA, biopsia, estudios previos). Si está indicado, el Dr. Quiroz coordina el estudio y —lo más importante— interpreta el resultado dentro de su plan de tratamiento completo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el PET-PSMA y dónde se realiza en León?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo varía según la unidad de medicina nuclear y lo que incluya el estudio (radiotrazador, equipo PET/CT e interpretación). El PSMA PET no se realiza en todos los hospitales: requiere una unidad con tecnología PET CT, de las cuales existen opciones privadas en León y el Bajío. Lo más útil es que la indicación y la lectura las haga un urólogo oncólogo: un estudio mal indicado o interpretado fuera de contexto representa un gasto sin aportar valor. En la valoración, el Dr. Quiroz confirma si está indicado en tu caso, coordina la unidad y te orienta sobre el costo aproximado antes de realizarlo.",
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
