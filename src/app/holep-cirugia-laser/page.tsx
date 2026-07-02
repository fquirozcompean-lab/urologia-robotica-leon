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
    "cirugia prostata grande León",
    "cuanto cuesta holep León",
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
      "El láser de holmium separa el adenoma prostático de la cápsula sin incisiones externas. Acceso endoscópico transuretral.",
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
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
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
        text: "Para próstatas grandes (>80g), HoLEP es superior a TURP: menor tasa de reoperación (<2% vs 10-15%), puede tratar cualquier tamaño y menor sangrado. Para próstatas pequeñas-medianas, ambas son efectivas, pero HoLEP ofrece recuperación más rápida y resultados más duraderos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo dura la cirugía?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 60 y 120 minutos dependiendo del tamaño prostático. Próstatas 50-80g: ~60-90 min. Próstatas >100g: 90-120 min. Es más larga que TURP pero evita cirugía abierta en próstatas grandes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo estaré hospitalizado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "24 a 48 horas. La mayoría de pacientes se va a casa al segundo día — significativamente menos que cirugía abierta (5-7 días).",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos días tendré sonda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1 a 2 días. Se retira antes del alta o al día siguiente en consulta — mucho menor que cirugía abierta (5-7 días) o TURP (2-3 días).",
      },
    },
    {
      "@type": "Question",
      name: "¿Tendré incontinencia urinaria después?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Incontinencia permanente es rara (<1%). Puede haber urgencia urinaria las primeras semanas — mejora gradualmente. Los ejercicios de Kegel ayudan. El esfínter urinario externo se preserva durante la cirugía.",
      },
    },
    {
      "@type": "Question",
      name: "¿Afectará mi función sexual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Erección: se preserva en >90% si la función era normal antes. Eyaculación: >90% tendrá eyaculación retrógrada (semen va a vejiga, no hacia afuera), lo que no afecta el orgasmo ni el placer. Esto es común a TURP y cirugía abierta también.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo podré retomar actividad sexual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se recomienda esperar 4 semanas para permitir cicatrización completa. Después de ese tiempo la actividad sexual es completamente normal.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo hacerme HoLEP si tomo anticoagulantes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. HoLEP es especialmente ventajoso en pacientes anticoagulados (warfarina, apixaban, rivaroxaban) porque el láser minimiza el sangrado. Se coordina con cardiología para el manejo perioperatorio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tan grande puede ser la próstata para HoLEP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No hay límite superior. Se han tratado próstatas de más de 300 gramos con éxito. Es el único procedimiento láser que puede tratar próstatas gigantes sin cirugía abierta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo veré mejoría en síntomas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mejoría inmediata después de retirar la sonda (día 2-3). Puede haber urgencia y frecuencia inicial que mejoran en 2-4 semanas. Mejoría completa del flujo urinario: 1-3 meses.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesitaré otra cirugía en el futuro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HoLEP tiene la tasa de reoperación más baja de todas las técnicas: <2% a 10 años vs 10-15% de TURP. Esto es porque HoLEP elimina completamente el tejido obstructivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿HoLEP puede detectar cáncer de próstata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El tejido extraído se analiza en patología. En 10-15% de casos se detecta cáncer no diagnosticado previamente. Si se encuentra, se puede realizar tratamiento oncológico posterior (cirugía robótica, radioterapia).",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta HoLEP en León?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo varía según el hospital y el tamaño prostático. Incluye honorarios médicos, hospital, anestesia, uso del láser y análisis patológico. Se ofrece cotización personalizada en consulta. Algunos seguros médicos cubren HoLEP.",
      },
    },
    {
      "@type": "Question",
      name: "¿Los seguros médicos cubren HoLEP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muchos seguros sí lo cubren como tratamiento estándar para HPB. Se recomienda verificar cobertura con la aseguradora antes del procedimiento. Llevamos carta médica detallando la indicación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia HoLEP de otros láseres (GreenLight, Thulium)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HoLEP: enuclea (extrae) tejido completo, análisis patológico completo y trata cualquier tamaño. GreenLight/Thulium: vaporizan tejido, análisis incompleto, más limitados en próstatas grandes. HoLEP tiene más evidencia científica a largo plazo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tengo que venir a León para el procedimiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la cirugía se realiza en Hospital Ángeles León. Para pacientes foráneos: consulta inicial puede ser por videollamada, cirugía presencial, seguimiento mixto. Estadía en León: 3-4 días.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué elegir al Dr. Quiroz para HoLEP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Formación en centros de excelencia (Hospital Albert Einstein Brasil, Instituto Nacional de Cancerología), certificado por el Consejo Mexicano de Urología, experiencia en cirugía mínimamente invasiva, enfoque en preservación de función y seguimiento integral personalizado.",
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
