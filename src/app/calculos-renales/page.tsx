import type { Metadata } from "next";
import CalculosRenalesContent from "./CalculosRenalesContent";

export const metadata: Metadata = {
  title: "Cálculos Renales (Piedras en el Riñón) en León, Gto | Dr. Quiroz Compeán",
  description:
    "Diagnóstico y tratamiento de piedras en el riñón en León, Guanajuato. Dr. Alejandro Quiroz Compeán ofrece ureteroscopía con láser, litotripsia (LEOC) y nefrolitotomía percutánea. Sin cirugía abierta. Incluye plan de prevención personalizado.",
  keywords: [
    "cálculos renales León",
    "piedras en el riñón León",
    "litiasis renal León",
    "litiasis urinaria León",
    "cólico renal León",
    "tratamiento cálculos renales León",
    "ureteroscopía láser León",
    "litotripsia León Guanajuato",
    "LEOC León",
    "nefrolitotomía percutánea León",
    "piedras en los riñones León",
    "urólogo cálculos León",
    "cálculos urinarios León",
    "piedras riñón tratamiento León",
    "laser cálculos renales León",
    "cólico nefrítico León",
    "hidronefrosis León",
    "cálculos en el uréter León",
    "urólogo litiasis León Guanajuato",
  ],
  openGraph: {
    title: "Piedras en el Riñón (Cálculos Renales) en León | Dr. Quiroz Compeán",
    description:
      "Tratamiento de cálculos renales sin cirugía abierta en León, Gto. Ureteroscopía con láser de Holmio, litotripsia y nefrolitotomía percutánea. Plan de prevención personalizado. Consulta con el Dr. Quiroz.",
    url: "https://urologiaroboticaleon.com/calculos-renales",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — Cálculos Renales León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piedras en el Riñón en León | Dr. Quiroz Compeán",
    description:
      "Diagnóstico y tratamiento de cálculos renales en León, Gto. Ureteroscopía con láser, litotripsia y prevención de recurrencias.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/calculos-renales",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo sé si tengo piedras en el riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El síntoma más característico es el cólico renal: dolor muy intenso en el flanco (espalda baja lateral) que puede irradiar a la ingle y los genitales, acompañado de sangre en la orina, náuseas y vómito. Muchos cálculos son asintomáticos y se descubren en estudios de imagen. El diagnóstico se confirma con ultrasonido o tomografía computada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Todos los cálculos renales requieren cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los cálculos menores de 5 mm tienen una tasa de expulsión espontánea del 70–80% con hidratación y medicamentos. Los mayores de 10 mm rara vez pasan solos. La ureteroscopía con láser no es cirugía abierta — es un procedimiento endoscópico sin incisiones en la piel con anestesia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la ureteroscopía con láser y duele?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La ureteroscopía flexible es un procedimiento endoscópico: se introduce un tubo delgado por la uretra hasta llegar al cálculo. El láser de Holmio pulveriza el cálculo. Se realiza bajo anestesia general o raquídea, por lo que no se siente dolor durante el procedimiento. Después puede haber molestias leves por 1–2 días.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en pasar un cálculo solo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los cálculos pequeños (<5 mm) pueden pasar en días a 4 semanas. Si no hay expulsión en 4 semanas, o antes si hay infección, fiebre o dolor incontrolable, se procede con tratamiento activo. El Dr. Quiroz define el plazo de espera apropiado según cada caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los cálculos renales se pueden prevenir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En gran medida, sí. La medida más importante es beber suficiente agua para producir más de 2 litros de orina al día. El resto de las medidas (dieta, medicamentos) se personaliza según el tipo de cálculo identificado por análisis. Con las medidas correctas, el riesgo de recurrencia se reduce a la mitad o más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué hago durante un cólico renal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tome un analgésico (ibuprofeno o naproxeno son los más efectivos), beba agua y busque atención médica. Vaya a urgencias si tiene fiebre, dolor insoportable que no cede o no puede orinar. Guarde la orina en un colador para recuperar el cálculo si se expulsa — el análisis es muy valioso para planificar la prevención.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cálculo puede dañar el riñón de forma permanente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, si hay obstrucción prolongada sin tratamiento. Una obstrucción completa puede causar daño renal irreversible en semanas. Si hay fiebre con dolor de flanco puede indicar pionefrosis (infección del riñón obstruido), que es una emergencia urológica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo tener cálculos en los dos riñones al mismo tiempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la litiasis bilateral ocurre en aproximadamente el 15–20% de los pacientes. El tratamiento se prioriza según cuál cálculo cause más síntomas, obstrucción o riesgo de complicaciones. En casos seleccionados se pueden tratar ambos riñones en la misma sesión.",
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
      name: "Cálculos Renales",
      item: "https://urologiaroboticaleon.com/calculos-renales",
    },
  ],
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Litiasis Renal",
  alternateName: [
    "Cálculos renales",
    "Piedras en el riñón",
    "Nefrolitiasis",
    "Litiasis urinaria",
    "Cólico renal",
  ],
  description:
    "Depósitos sólidos de minerales y sales que se forman dentro del riñón. Pueden causar dolor intenso (cólico renal) cuando se movilizan al uréter. Afectan aproximadamente a 1 de cada 10 personas y tienen alta tasa de recurrencia sin medidas preventivas.",
  code: {
    "@type": "MedicalCode",
    code: "N20",
    codingSystem: "ICD-10",
  },
  possibleTreatment: [
    { "@type": "MedicalTherapy", name: "Manejo conservador con hidratación y analgesia" },
    { "@type": "MedicalTherapy", name: "Litotripsia extracorpórea por ondas de choque (LEOC)" },
    { "@type": "MedicalTherapy", name: "Ureteroscopía flexible con láser de Holmio" },
    { "@type": "MedicalTherapy", name: "Nefrolitotomía percutánea (NLPC)" },
    { "@type": "MedicalTherapy", name: "Cirugía laparoscópica o robótica" },
  ],
  recognizingAuthority: {
    "@type": "MedicalOrganization",
    name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
  },
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Cálculos Renales (Piedras en el Riñón) en León, Guanajuato",
  description:
    "Información completa sobre diagnóstico, tratamiento y prevención de cálculos renales en León, Guanajuato. Dr. Alejandro Quiroz Compeán, urólogo certificado.",
  url: "https://urologiaroboticaleon.com/calculos-renales",
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

export default function CalculosRenalesPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <CalculosRenalesContent />
    </>
  );
}
