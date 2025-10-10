// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urología Robótica León",
  description:
    "Atención integral y humanizada con tecnología avanzada. Dr. Alejandro Quiroz Compeán, especialista en Urología Oncológica y Cirugía Robótica.",
  openGraph: {
    title: "Urología Robótica León | Dr. Alejandro Quiroz Compeán",
    description: "Cirugía Robótica y Urología Oncológica en León, Gto.",
    url: "https://urologiaroboticaleon.com",
    siteName: "Urología Robótica León",
    images: [
      {
        url: "/og-image.jpg", // coloca este archivo en /public
        width: 1200,
        height: 630,
        alt: "Urología Robótica León",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urología Robótica León",
    description: "Cirugía Robótica y Urología Oncológica en León, Gto.",
    images: ["/og-image.jpg"], // coloca este archivo en /public
  },
  icons: {
    icon: "/favicon.ico", // coloca este archivo en /public
    shortcut: "/favicon.ico",
    apple: "/icon-512.png", // opcional: ícono grande en /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Schema.org JSON-LD para SEO (Physician) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Alejandro Quiroz Compeán",
              image:
                "https://urologiaroboticaleon.com/foto-dr-alejandro.jpg",
              medicalSpecialty: [
                "Urology",
                "Oncology",
                "Robotic Surgery",
              ],
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
                addressLocality: "León",
                addressRegion: "Guanajuato",
                addressCountry: "MX",
              },
            }),
          }}
        />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FFEFH848TS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FFEFH848TS');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
