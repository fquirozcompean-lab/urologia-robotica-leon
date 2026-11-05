import type { Metadata } from "next";
import PetPsmaContent from "./PetPsmaContent";

export const metadata: Metadata = {
  title: "PET-PSMA en León, Gto | Cuándo Está Indicado y Cómo se Interpreta",
  description:
    "Qué es el PET-PSMA, cuándo está indicado en cáncer de próstata y qué significa su resultado. No lo realizamos: lo solicitamos, interpretamos y normamos el manejo. Dr. Quiroz, urólogo oncólogo en León.",
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
      "Cuándo está indicado el PET-PSMA en cáncer de próstata y cómo se interpreta. Valoración con el Dr. Quiroz, urólogo oncólogo en León, Gto.",
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
      "Cuándo está indicado el PET-PSMA en cáncer de próstata y cómo se interpreta. León, Guanajuato.",
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
        text: "Una valoración previa con su expediente (antígeno prostático, biopsia, estudios previos). Si está indicado, el Dr. Quiroz lo solicita, y después interpreta el resultado y norma el manejo dentro de su plan de tratamiento completo.",
      },
    },
    {
      "@type": "Question",
      name: "¿El Dr. Quiroz realiza el PET-PSMA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El estudio se realiza en unidades de medicina nuclear externas a nuestro consultorio. Nosotros lo solicitamos cuando está indicado, interpretamos los resultados y normamos el manejo de cada paciente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el PET-PSMA y dónde se realiza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El PSMA PET requiere una unidad de medicina nuclear con equipo PET/CT (o PET CT) y el radiotrazador, por lo que no está en todos los hospitales. El costo lo define cada unidad y varía según lo que incluya. Nosotros no realizamos el estudio: en la valoración confirmamos si está indicado en tu caso y te orientamos sobre dónde realizarlo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Un PET-PSMA negativo descarta el cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No por completo. Lesiones muy pequeñas, un antígeno muy bajo o tumores con poca expresión de PSMA pueden no verse. Por eso el resultado se interpreta junto con el antígeno prostático, la biopsia y los demás estudios.",
      },
    },
    {
      "@type": "Question",
      name: "¿Todo lo que capta el PET-PSMA es cáncer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Algunas lesiones benignas, cambios en el hueso o estructuras normales como ciertos ganglios nerviosos también pueden captar el radiotrazador. Por eso la lectura debe hacerse en contexto, y a veces se necesita confirmar un hallazgo con otro estudio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo hacerme un PET-PSMA sin que me lo indiquen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No es lo recomendable. No sirve para detectar cáncer de próstata en hombres sin diagnóstico ni sustituye a la biopsia, y un estudio sin una pregunta clínica clara puede generar gastos y confusión. Primero conviene una valoración para saber si te aporta información útil.",
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
    "Estudio de imagen molecular de alta precisión para la estadificación y detección de recurrencia del cáncer de próstata. Se realiza en unidades de medicina nuclear; el Dr. Quiroz lo solicita cuando está indicado, interpreta los resultados y norma el manejo.",
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
