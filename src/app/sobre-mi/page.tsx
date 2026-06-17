import type { Metadata } from "next";
import SobreMiContent from "./SobreMiContent";

export const metadata: Metadata = {
  title:
    "Dr. Alejandro Quiroz Compeán | Urólogo Oncólogo en León, Guanajuato",
  description:
    "Conoce al Dr. Alejandro Quiroz Compeán, urólogo oncólogo y cirujano robótico certificado en León. Formado en Zubirán, INCan y Hospital Albert Einstein, Brasil. Especialista en cáncer de próstata, cirugía robótica y HoLEP.",
  keywords: [
    "urólogo León",
    "Dr. Alejandro Quiroz Compeán",
    "urólogo oncólogo León",
    "cirujano robótico León",
    "cirugía robótica próstata León",
    "HoLEP León",
    "cáncer de próstata León",
  ],
  openGraph: {
    title: "Dr. Alejandro Quiroz Compeán | Urólogo Oncólogo León",
    description:
      "Urólogo oncólogo y cirujano robótico certificado en León, Guanajuato. Formado en Zubirán, INCan y Hospital Albert Einstein.",
    url: "https://urologiaroboticaleon.com/sobre-mi",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — Urólogo Oncólogo León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alejandro Quiroz Compeán | Urólogo Oncólogo León",
    description:
      "Urólogo oncólogo y cirujano robótico certificado en León, Guanajuato. Formado en Zubirán, INCan y Hospital Albert Einstein.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/sobre-mi",
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Alejandro Quiroz Compeán",
  description:
    "Urólogo oncólogo y cirujano robótico certificado en León, Guanajuato. Especialista en cáncer de próstata, cáncer renal, cirugía robótica Da Vinci y HoLEP.",
  url: "https://urologiaroboticaleon.com/sobre-mi",
  image:
    "https://urologiaroboticaleon.com/images/foto%20para%20sobre%20mi.png",
  telephone: "+524776330492",
  medicalSpecialty: ["Urology", "Oncology", "Robotic Surgery"],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      recognizedBy: {
        "@type": "Organization",
        name: "Consejo Nacional Mexicano de Urología (CONAMEU)",
      },
    },
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán",
    },
    {
      "@type": "EducationalOrganization",
      name: "Instituto Nacional de Cancerología (INCan)",
    },
    {
      "@type": "EducationalOrganization",
      name: "Hospital Israelita Albert Einstein",
    },
  ],
  worksFor: [
    {
      "@type": "Hospital",
      name: "Hospital Ángeles León",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Cerro Gordo 311",
        addressLocality: "León",
        addressRegion: "Guanajuato",
        addressCountry: "MX",
      },
      telephone: "+524791037564",
    },
    {
      "@type": "Hospital",
      name: "Hospital Christus Muguerza Altagracia",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Blvd. Juan Alonso de Torres 2002",
        addressLocality: "León",
        addressRegion: "Guanajuato",
        addressCountry: "MX",
      },
      telephone: "+524772351442",
    },
  ],
  identifier: [
    {
      "@type": "PropertyValue",
      name: "Cédula Profesional",
      value: "8860892",
    },
    {
      "@type": "PropertyValue",
      name: "Cédula de Especialidad",
      value: "12465195",
    },
  ],
  sameAs: [
    "https://www.doctoralia.com.mx/alejandro-quiroz-compean/urologo/leon",
    "https://hospitalangeles.com/medico/alejandro-quiroz-compean",
    "https://www.instagram.com/urologo.alejandroquiroz/",
    "https://www.facebook.com/DrQuirozUrologoLeon",
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
      name: "Sobre el Dr. Quiroz",
      item: "https://urologiaroboticaleon.com/sobre-mi",
    },
  ],
};

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SobreMiContent />
    </>
  );
}
