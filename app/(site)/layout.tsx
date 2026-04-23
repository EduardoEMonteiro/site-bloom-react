import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bloomts.com.br'),
  title: "Bloom por Tamires Sousa | Colorimetria em São João del-Rei",
  description: "Ruivos, loiros, mechas, cobertura de brancos e tratamentos capilares com avaliação do fio em São João del-Rei. Agende pelo WhatsApp.",
  keywords: ["colorista em são joão del rei", "bloom por tamires sousa", "colorimetria capilar", "cabelo ruivo", "loiro saudável", "mechas", "cobertura de brancos", "tratamento capilar"],
  authors: [{ name: "Tamires Sousa" }],
  creator: "Bloom por Tamires Sousa",
  publisher: "Bloom por Tamires Sousa",
  alternates: { canonical: 'https://bloomts.com.br' },

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bloomts.com.br",
    title: "Bloom por Tamires Sousa | Colorimetria em São João del-Rei",
    description: "Cor bonita com avaliação do fio, cuidado e hora marcada em São João del-Rei.",
    siteName: "Bloom por Tamires Sousa",
    images: [{
      url: "/images/logo.webp",
      width: 500,
      height: 500,
      alt: "Bloom por Tamires Sousa"
    }],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Bloom por Tamires Sousa | Colorimetria em São João del-Rei",
    description: "Ruivos, loiros, mechas e tratamentos com avaliação do fio.",
    images: ["/images/logo.webp"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Manifest
  manifest: '/site.webmanifest',
};

// Next.js 16: viewport deve estar separado
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#D4AF37' },
    { media: '(prefers-color-scheme: dark)', color: '#D4AF37' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data - Local Business (completo para SEO local + GEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Bloom por Tamires Sousa",
    "@id": "https://bloomts.com.br/#salao",
    "description": "Salão especializado em colorimetria capilar em São João del-Rei, com atendimento para ruivos, loiros, mechas, cobertura de brancos e tratamentos.",
    "url": "https://bloomts.com.br",
    "telephone": "+5532998063010",
    "image": "https://bloomts.com.br/images/logo.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Antônio Rocha, 55",
      "addressLocality": "São João del-Rei",
      "addressRegion": "MG",
      "postalCode": "36300-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -21.131552,
      "longitude": -44.256833
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Rua+Antônio+Rocha,+55+Centro+São+João+del+Rei+MG",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": [
      { "@type": "City", "name": "São João del-Rei" },
      { "@type": "AdministrativeArea", "name": "Campo das Vertentes" }
    ],
    "knowsAbout": [
      "Colorimetria capilar",
      "Cabelos ruivos",
      "Loiros e mechas",
      "Cobertura de fios brancos",
      "Tratamento capilar pós-química",
      "Escova progressiva"
    ],
    "sameAs": [
      "https://instagram.com/bloomhairts"
    ]
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Preconnect para Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Header será exibido em todas as páginas */}
          <Header />

          {/* Conteúdo de cada página */}
          {children}

          {/* Footer */}
          <Footer />

          {/* WhatsApp Button */}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
