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
    "costo tratamiento cálculos renales León",
    "catéter doble J",
    "qué no comer con piedras en el riñón",
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
        text: "El síntoma más característico es el cólico renal: dolor muy intenso en el flanco (espalda baja lateral) que puede irradiar a la ingle y los genitales. Puede acompañarse de sangre en la orina, náuseas y vómito. Sin embargo, muchos cálculos no causan síntomas y se descubren en estudios de imagen por otras razones. El diagnóstico se confirma con ultrasonido o tomografía computada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Todos los cálculos renales requieren cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los cálculos menores de 5 mm tienen una tasa de expulsión espontánea del 70–80% con hidratación y medicamentos. Entre 5–10 mm la tasa baja al 50%. Los mayores de 10 mm rara vez pasan solos y generalmente requieren algún procedimiento. La ureteroscopía con láser no es cirugía abierta — es un procedimiento endoscópico que no requiere incisiones en la piel.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en pasar un cálculo solo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tamaño y la localización. Los cálculos pequeños (<5 mm) en el uréter distal pueden pasar en días a 4 semanas. Si no hay expulsión en 4 semanas, o antes si hay infección, fiebre, dolor incontrolable o daño renal, se procede con tratamiento activo. El Dr. Quiroz define el plazo de espera apropiado según tu caso específico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se expulsan las piedras del riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los cálculos pequeños (<5 mm) suelen expulsarse solos con hidratación abundante y manejo del dolor; a veces se indica un medicamento (como la tamsulosina) que relaja el uréter y facilita el paso. No existen \"remedios\" que disuelvan de forma fiable un cálculo ya formado. Cuando la piedra es grande, se atora o hay infección, se retira con procedimientos sin incisiones (ureteroscopía con láser o litotricia). Nunca conviene forzar la situación sin valoración: el plan depende del tamaño, la localización y tus síntomas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es la ureteroscopía con láser y duele?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La ureteroscopía flexible es un procedimiento endoscópico: se introduce un tubo delgado y flexible por la uretra hasta llegar al cálculo. El láser de Holmio pulveriza el cálculo en polvo o fragmentos pequeños que se eliminan solos. Se realiza bajo anestesia (general o raquídea), por lo que no se siente dolor durante el procedimiento. Después puede haber molestias leves por 1–2 días.",
      },
    },
    {
      "@type": "Question",
      name: "¿El cálculo puede dañar el riñón de forma permanente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, si hay obstrucción prolongada sin tratamiento. Una obstrucción completa puede causar daño renal irreversible en semanas. Por eso es importante no ignorar los síntomas ni esperar demasiado. Especialmente si hay fiebre con dolor de flanco — eso puede indicar infección del riñón obstruido (pionefrosis), que es una emergencia.",
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
        text: "Inmediatamente: toma un analgésico disponible (ibuprofeno o naproxeno son los más efectivos para el cólico renal), bebe agua, y busca atención médica. Ve a urgencias si tienes fiebre, si el dolor es insoportable y no cede, o si no puedes orinar. Guarda la orina en un colador para recuperar el cálculo si se expulsa — el análisis del cálculo es muy valioso para planificar la prevención.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo tener cálculos en los dos riñones al mismo tiempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la litiasis bilateral ocurre en aproximadamente el 15–20% de los pacientes. El tratamiento se prioriza según cuál cálculo cause más síntomas, obstrucción o riesgo de complicaciones. En casos seleccionados se pueden tratar ambos riñones en la misma sesión o en sesiones consecutivas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el tratamiento de cálculos renales en León?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del caso. Hay mucha variedad de procedimientos y modificaciones que cambian el costo: el tamaño, el número y la localización de los cálculos, la técnica (litotripsia, ureteroscopía semirrígida o flexible con láser, nefrolitotomía percutánea), si se deja un catéter doble J, los días de hospital y el hospital. Con tus estudios de imagen se define el tratamiento y en la consulta se entrega una cotización personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el catéter doble J y cuánto tiempo se deja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un tubo delgado y flexible que se coloca por dentro, del riñón a la vejiga, para que la orina drene mientras el uréter se desinflama. No se ve por fuera. Después de una ureteroscopía sin complicaciones suele dejarse de una a dos semanas; en otros casos, más tiempo. Puede causar ganas frecuentes de orinar, ardor o un poco de sangre en la orina. Es muy importante acudir a retirarlo en la fecha indicada: un catéter olvidado puede calcificarse y dañar el riñón.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué no debo comer si tengo piedras en el riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lo que más ayuda es reducir la sal, los alimentos procesados y embutidos, el exceso de carne roja y mariscos, y los refrescos y bebidas azucaradas. No conviene eliminar el calcio de los alimentos (leche, queso, yogur): el calcio de la dieta protege contra los cálculos. Limitar alimentos ricos en oxalato, como espinaca o chocolate, solo tiene sentido si tus cálculos son de oxalato. La dieta ideal se ajusta al tipo de cálculo identificado en el análisis.",
      },
    },
    {
      "@type": "Question",
      name: "¿La cerveza o el limón ayudan a expulsar las piedras del riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cerveza no es un tratamiento: el alcohol deshidrata y sus purinas elevan el ácido úrico, lo que puede favorecer nuevos cálculos. El limón aporta citrato, que ayuda a prevenir algunos cálculos de calcio, pero no disuelve una piedra ya formada. Lo que sí ayuda es tomar suficiente agua y recibir una valoración para saber si el cálculo puede salir solo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué estudio detecta mejor las piedras en el riñón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La tomografía simple (sin contraste) es el estudio más preciso: muestra el tamaño, la localización y la densidad del cálculo, y si hay obstrucción. El ultrasonido no usa radiación y es útil como primer estudio, en el embarazo y para el seguimiento, pero puede no ver cálculos pequeños en el uréter. La radiografía simple no detecta todos los tipos de cálculo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo un cálculo renal es una urgencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acude a urgencias si el dolor se acompaña de fiebre o escalofríos, si el dolor no cede con analgésicos, si hay vómito que no te permite tomar líquidos, si no puedes orinar, si tienes un solo riñón o si estás embarazada. Un riñón obstruido e infectado debe drenarse de inmediato.",
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
