import type { Metadata } from "next";
import InternationalPatientsContent from "./InternationalPatientsContent";

export const metadata: Metadata = {
  title:
    "International & English-Speaking Patients | Dr. Alejandro Quiroz — Urologic Oncologist in León, México",
  description:
    "English-speaking urologic oncologist and robotic surgeon in León, Guanajuato, México. Prostate, kidney and bladder cancer, HoLEP laser surgery, and remote second opinions for international patients. Fellowship-trained at INCan and Hospital Albert Einstein.",
  keywords: [
    "english speaking urologist León México",
    "urologic oncologist León English",
    "prostate cancer second opinion México",
    "robotic prostatectomy León",
    "international patients urology México",
    "expat urologist Guanajuato",
    "HoLEP surgery México",
    "kidney cancer surgery León",
    "second opinion urologic cancer México",
  ],
  openGraph: {
    title:
      "International & English-Speaking Patients | Dr. Alejandro Quiroz — León, México",
    description:
      "English-speaking urologic oncologist and robotic surgeon in León, Guanajuato. Prostate, kidney and bladder cancer, HoLEP, and remote second opinions for international patients.",
    url: "https://urologiaroboticaleon.com/en/international-patients",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán — Urologic Oncologist in León, México",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "English-Speaking Urologic Oncologist in León, México | Dr. Quiroz",
    description:
      "Prostate, kidney and bladder cancer, robotic surgery and remote second opinions for international and English-speaking patients.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://urologiaroboticaleon.com/en/international-patients",
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Alejandro Quiroz Compeán",
  inLanguage: "en",
  image: "https://urologiaroboticaleon.com/foto-dr-alejandro.jpg",
  description:
    "English-speaking urologic oncologist and robotic surgeon in León, Guanajuato, México. Fellowship-trained in urologic oncology at Instituto Nacional de Cancerología (INCan) and in robotic surgery at Hospital Israelita Albert Einstein, São Paulo, Brazil.",
  medicalSpecialty: ["Urology", "Oncology", "Robotic Surgery"],
  url: "https://urologiaroboticaleon.com/en/international-patients",
  address: {
    "@type": "PostalAddress",
    addressLocality: "León",
    addressRegion: "Guanajuato",
    addressCountry: "MX",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Dr. Quiroz see English-speaking patients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Quiroz communicates directly with international and English-speaking patients and personally answers inquiries sent through WhatsApp. You do not need to speak Spanish to consult with him.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a second opinion from another country before traveling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you already have a diagnosis, you can share your records — PSA, biopsy report, and imaging — and Dr. Quiroz can provide an independent specialist opinion on your case before you decide to travel. This is common for prostate, kidney and bladder cancer.",
      },
    },
    {
      "@type": "Question",
      name: "What information should I send or bring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whatever you already have: lab results (such as PSA), pathology and biopsy reports, and imaging studies (MRI, CT or PET). If something is missing, it will be defined during the consultation. The more complete the information, the more precise the opinion.",
      },
    },
    {
      "@type": "Question",
      name: "How do I schedule a consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Message Dr. Quiroz directly on WhatsApp describing your situation. You will receive guidance on availability, the clinic location, and what to send or bring. Consultations take place at Hospital Ángeles León and Hospital Christus Muguerza Altagracia in León, Guanajuato.",
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
      name: "Home",
      item: "https://urologiaroboticaleon.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "International Patients",
      item: "https://urologiaroboticaleon.com/en/international-patients",
    },
  ],
};

export default function InternationalPatientsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <InternationalPatientsContent />
    </>
  );
}
