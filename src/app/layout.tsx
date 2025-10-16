// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// === Metadatos para SEO ===
export const metadata: Metadata = {
  title:
    "Dr. Alejandro Quiroz Compeán | Urólogo Oncólogo y Cirujano Robótico en León, Guanajuato",
  description:
    "Atención integral en urología oncológica y cirugía robótica avanzada. Especialista en cáncer de próstata, riñón y vejiga en León, Gto.",
  openGraph: {
    title:
      "Dr. Alejandro Quiroz Compeán | Urología Robótica León, Guanajuato",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon-512.png",
  },
};

// === Layout principal ===
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* === JSON-LD Schema.org (Physician) === */}
        <Script
          id="json-ld-physician"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Alejandro Quiroz Compeán",
              image:
                "https://urologiaroboticaleon.com/foto-dr-alejandro.jpg",
              description:
                "Urólogo oncólogo especializado en cirugía robótica en León, Guanajuato. Formación en INCMNSZ, INCAN y Hospital Albert Einstein.",
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
                streetAddress:
                  "Av. Cerro Gordo 3110, Torre de Especialidades II, Consultorio 425",
                addressLocality: "León",
                addressRegion: "Guanajuato",
                postalCode: "37160",
                addressCountry: "MX",
              },
              openingHours: "Mo-Fr 09:00-20:00",
              telephone: "+52-477-561-7482",
            }),
          }}
        />

        {/* === Google Analytics (gtag.js) === */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FFEFH848TS"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FFEFH848TS', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      {/* === Cuerpo del sitio === */}
      <body className="antialiased bg-white text-slate-800 font-sans">
        {children}
      </body>
    </html>
  );
}

