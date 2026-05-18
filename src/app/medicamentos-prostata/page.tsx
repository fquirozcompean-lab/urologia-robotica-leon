import type { Metadata } from "next";
import MedicamentosProstataContent from "./MedicamentosProstataContent";

export const metadata: Metadata = {
  title: "Medicamentos para la Próstata en León | Tamsulosina, Finasteride — Dr. Quiroz Compeán",
  description:
    "Guía clínica sobre medicamentos para la próstata en León, Guanajuato. Tamsulosina, finasteride, dutasteride, silodosina: cuándo funcionan y cuándo no son suficientes. Uroflujometría para orientar el tratamiento. Dr. Alejandro Quiroz Compeán, urólogo certificado.",
  keywords: [
    "medicamentos próstata León",
    "tamsulosina León",
    "finasteride León",
    "dutasteride León",
    "silodosina León",
    "alfabloqueadores próstata León",
    "inhibidores 5 alfa reductasa León",
    "uroflujometría León",
    "tratamiento HPB León",
    "hiperplasia prostática medicamento León",
    "síntomas urinarios hombre León",
    "IPSS próstata León",
    "flujo urinario débil León",
    "nocturia próstata León",
    "medicamento para orinar bien León",
    "urólogo HPB León",
    "tratamiento médico próstata Guanajuato",
    "pastillas para la próstata León",
  ],
  openGraph: {
    title: "Medicamentos para la Próstata en León | Dr. Quiroz Compeán",
    description:
      "Tamsulosina, finasteride, dutasteride: cuándo funcionan y cuándo el tratamiento médico no es suficiente. Uroflujometría en León, Guanajuato. Dr. Quiroz Compeán, urólogo certificado.",
    url: "https://urologiaroboticaleon.com/medicamentos-prostata",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — Medicamentos para la Próstata León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicamentos para la Próstata | Dr. Quiroz Compeán, León",
    description:
      "Guía clínica: tamsulosina, finasteride, dutasteride para HPB en León, Gto. Uroflujometría para orientar el tratamiento. Dr. Quiroz Compeán, urólogo certificado.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/medicamentos-prostata",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda en hacer efecto la tamsulosina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mejoría del flujo urinario y los síntomas se nota habitualmente en 24–72 horas. El efecto máximo suele alcanzarse en 2–4 semanas. Si tras 4 semanas no hay mejoría significativa, es necesario reevaluar el diagnóstico y el tratamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los medicamentos reducen el tamaño de la próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo los inhibidores de la 5-alfa-reductasa (finasteride, dutasteride) reducen el volumen prostático, en un 20–30% aproximadamente, y solo si se toman durante 6–12 meses. Los alfabloqueadores (tamsulosina, alfuzosina) no reducen el tamaño; simplemente relajan el músculo para mejorar el flujo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo tomar tamsulosina de por vida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, es seguro a largo plazo. Sin embargo, tomar un medicamento indefinidamente no es lo mismo que tener el problema resuelto. La próstata puede seguir creciendo, el flujo urinario empeorar progresivamente y aparecer complicaciones. Una uroflujometría anual permite monitorizar si el tratamiento sigue siendo suficiente.",
      },
    },
    {
      "@type": "Question",
      name: "¿El medicamento me libra de la cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En muchos pacientes, sí. Los medicamentos controlan los síntomas durante años. Pero si la próstata es grande, el flujo es muy bajo o el IPSS es severo, el medicamento gestiona el problema sin resolverlo. En ese escenario, los procedimientos modernos mínimamente invasivos (HoLEP con láser, TURP bipolar, Rezūm, UroLift) son definitivos y tienen excelentes resultados.",
      },
    },
    {
      "@type": "Question",
      name: "¿La tamsulosina afecta la erección o el orgasmo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La tamsulosina generalmente no afecta la erección. Sin embargo, puede causar eyaculación retrógrada en una minoría de pacientes. La silodosina tiene este efecto con mucha mayor frecuencia (~28%). Si la función sexual es prioritaria, existen otras opciones de tratamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué el médico me pide una uroflujometría antes de recetar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque los síntomas por sí solos no distinguen entre obstrucción prostática, vejiga hiperactiva, o vejiga con contracción débil. La uroflujometría mide el flujo real de orina y el residuo posmiccional, orientando si el problema es la salida (próstata) o la vejiga en sí. Las guías europeas de urología recomiendan realizarla antes de cualquier tratamiento para síntomas urinarios.",
      },
    },
    {
      "@type": "Question",
      name: "¿El finasteride afecta mi PSA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, de forma predecible y conocida. Finasteride y dutasteride reducen el PSA aproximadamente a la mitad. Esto es importante: si lo tomas y tu PSA mide 2.0 ng/mL, el valor real equivalente sería 4.0 ng/mL. Tu urólogo debe saberlo para interpretar correctamente el PSA y no dejar pasar un cáncer de próstata.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si tengo urgencia urinaria además de flujo débil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tener ambos síntomas obstructivos e irritativos es muy común en la HPB. Puede necesitarse un tratamiento que aborde los dos componentes: un alfa-bloqueador para el flujo y un anticolinérgico o beta-3 agonista para la urgencia. Sin embargo, no se deben agregar anticolinérgicos sin confirmar que no hay obstrucción severa. Una uroflujometría es indispensable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo tomar tamsulosina y tadalafilo juntos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, es una combinación válida y eficaz, especialmente si coexisten síntomas prostáticos y disfunción eréctil. Puede haber algo más de descenso de tensión arterial con la combinación. Se recomienda empezar el tadalafilo con dosis baja y hacerlo bajo supervisión médica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los suplementos de palma enana (saw palmetto) funcionan igual que la tamsulosina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los estudios clínicos de mayor calidad no han demostrado que la palma enana sea superior al placebo para los síntomas urinarios. Las guías europeas y norteamericanas de urología no la recomiendan como tratamiento de la HPB.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo es necesaria la cirugía en vez de medicamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hay indicaciones absolutas que requieren cirugía: retención urinaria recurrente, daño renal por obstrucción, infecciones de repetición, sangrado urinario por próstata, o cálculos vesicales. En síntomas severos sin respuesta al tratamiento médico también se considera cirugía. Los procedimientos actuales como HoLEP con láser tienen excelentes resultados con recuperación rápida.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tengo que tomar el medicamento para siempre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del objetivo. Si el objetivo es control de síntomas, habitualmente es tratamiento de larga duración. Con los procedimientos mínimamente invasivos actuales es posible resolver el problema de forma definitiva, sin catéter permanente y con hospitalización breve.",
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
      name: "Medicamentos para la Próstata",
      item: "https://urologiaroboticaleon.com/medicamentos-prostata",
    },
  ],
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Medicamentos para la Próstata en León, Guanajuato — Guía Clínica",
  description:
    "Información clínica sobre alfabloqueadores, inhibidores de la 5-alfa-reductasa y otros medicamentos para la hiperplasia prostática benigna. Indicaciones, cuándo funcionan y cuándo no son suficientes. Dr. Alejandro Quiroz Compeán.",
  url: "https://urologiaroboticaleon.com/medicamentos-prostata",
  author: {
    "@type": "Physician",
    name: "Dr. Alejandro Quiroz Compeán",
    url: "https://urologiaroboticaleon.com",
  },
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  about: {
    "@type": "MedicalCondition",
    name: "Hiperplasia Prostática Benigna",
    code: {
      "@type": "MedicalCode",
      code: "N40",
      codingSystem: "ICD-10",
    },
  },
};

export default function MedicamentosProstatacPage() {
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
      <MedicamentosProstataContent />
    </>
  );
}
