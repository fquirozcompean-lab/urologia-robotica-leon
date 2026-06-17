// src/app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MedicalAIAgent from "@/components/MedicalAIAgent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  verification: {
    google: "uHJCLoFt5l687JtukoNWbLvkfsziurjH7E2BmYZDc0E",
  },
  title:
    "Dr. Alejandro Quiroz Compeán | Urólogo Oncólogo y Cirujano Robótico en León, Guanajuato",
  description:
    "Atención integral en urología oncológica y cirugía robótica avanzada. Especialista en cáncer de próstata, riñón y vejiga en León, Gto.",
  keywords: [
    "urología robótica León",
    "urólogo en León",
    "Dr. Alejandro Quiroz Compeán",
    "cirugía robótica próstata",
    "cáncer de próstata",
    "urología oncológica León",
    "urólogo oncológico en León",
    "cirugía mínimamente invasiva urológica",
    "tratamiento de hiperplasia prostática",
    "prostatectomía robótica",
    "prostatectomía laparoscópica",
    "nefrectomía robótica",
    "cistectomía robótica",
    "cirugía del cáncer renal",
    "mejor urólogo en León",
    "urólogo especializado en cáncer de próstata",
    "experto en cirugía robótica de próstata",
    "urólogo certificado en León Guanajuato",
    "consulta urológica con robot Da Vinci",
    "urólogo recomendado en León Gto",
    "hospital Ángeles León urólogo",
    "hospital Muguerza León urólogo",
    "cirujano robótico en Guanajuato",
  ],
  openGraph: {
    title: "Dr. Alejandro Quiroz Compeán | Urología Robótica León, Guanajuato",
    description:
      "Cirugía robótica y urología oncológica de alto nivel con atención personalizada y tecnología avanzada.",
    url: "https://urologiaroboticaleon.com",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alejandro Quiroz Compeán | Urología Robótica León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alejandro Quiroz Compeán | Urología Robótica León",
    description:
      "Atención integral en cirugía robótica y urología oncológica. León, Guanajuato.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon-512.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${jakarta.variable} ${lora.variable}`}>
      <head>
        <Script
          id="json-ld-physician"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Alejandro Quiroz Compeán",
              image: "https://urologiaroboticaleon.com/foto-dr-alejandro.jpg",
              description:
                "Urólogo oncólogo especializado en cirugía robótica en León, Guanajuato. Formación en INCMNSZ, INCan y Hospital Albert Einstein, São Paulo, Brasil.",
              medicalSpecialty: ["Urology", "Oncology", "Robotic Surgery"],
              url: "https://urologiaroboticaleon.com",
              sameAs: [
                "https://www.instagram.com/urologo.alejandroquiroz/",
                "https://www.facebook.com/DrQuirozUrologoLeon",
                "https://www.doctoralia.com.mx/alejandro-quiroz-compean/urologo/leon",
                "https://hospitalangeles.com/medico/alejandro-quiroz-compean",
                "https://www.researchgate.net/profile/Alejandro-Quiroz-Compean",
                "https://www.linkedin.com/in/alejandro-quiroz-compean-9955ba61",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Cerro Gordo 311, Consultorio 615, Torre II",
                addressLocality: "León",
                addressRegion: "Guanajuato",
                postalCode: "37160",
                addressCountry: "MX",
              },
              openingHours: "Mo-Fr 09:00-20:00",
              telephone: "+52-477-633-0492",
            }),
          }}
        />
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Dr. Alejandro Quiroz Compeán — Urología Oncológica y Cirugía Robótica",
              image: "https://urologiaroboticaleon.com/og-image.jpg",
              description:
                "Consulta de urología oncológica y cirugía robótica en León, Guanajuato. Especialista en cáncer de próstata, hiperplasia prostática, HoLEP, cáncer renal y vejiga.",
              url: "https://urologiaroboticaleon.com",
              telephone: "+52-477-633-0492",
              priceRange: "$$",
              currenciesAccepted: "MXN",
              paymentAccepted: "Efectivo, Tarjeta de crédito, Seguros médicos",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Cerro Gordo 311, Consultorio 615, Torre II",
                addressLocality: "León",
                addressRegion: "Guanajuato",
                postalCode: "37160",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 21.1234,
                longitude: -101.6839,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Thursday"],
                  opens: "09:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Wednesday", "Friday"],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/urologo.alejandroquiroz/",
                "https://www.facebook.com/DrQuirozUrologoLeon",
                "https://www.doctoralia.com.mx/alejandro-quiroz-compean/urologo/leon",
              ],
              medicalSpecialty: [
                "Urology",
                "Oncology",
                "Robotic Surgery",
              ],
              hasMap: "https://www.google.com/maps/search/?api=1&query=Hospital+Ángeles+León",
              areaServed: {
                "@type": "City",
                name: "León",
                containedInPlace: {
                  "@type": "State",
                  name: "Guanajuato",
                },
              },
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FFEFH848TS"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FFEFH848TS', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body className="antialiased bg-white text-gris-profundo font-sans">
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
        <MedicalAIAgent />
      </body>
    </html>
  );
}
