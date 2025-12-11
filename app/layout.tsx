import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LoadingScreen } from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloom por Tamires Sousa - Salão de Beleza em São João Del Rei",
  description: "Transforme seu visual no Bloom por Tamires Sousa! Salão de beleza moderno em São João Del Rei. Cortes, coloração e tratamentos capilares. Agende agora pelo WhatsApp!",
  keywords: ["salão de beleza", "cabeleireiro são joão del rei", "bloom hair", "tamires sousa", "corte feminino", "coloração capilar", "penteados sjdr", "tratamento capilar", "escova progressiva", "mechas", "ombre hair"],
  authors: [{ name: "Tamires Sousa" }],
  creator: "Bloom por Tamires Sousa",
  publisher: "Bloom por Tamires Sousa",

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bloomts.com.br",
    title: "Bloom por Tamires Sousa - Beleza que Transforma",
    description: "Salão de beleza moderno em São João Del Rei. Cortes, coloração e tratamentos capilares. Agende seu horário!",
    siteName: "Bloom por Tamires Sousa",
    images: [{
      url: "/images/logo.webp",
      width: 500,
      height: 500,
      alt: "Bloom por Tamires Sousa - Salão de Beleza"
    }],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Bloom por Tamires Sousa - Beleza que Transforma",
    description: "Salão de beleza moderno em São João Del Rei. Agende agora!",
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

  // Theme Color
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#D4AF37' },
    { media: '(prefers-color-scheme: dark)', color: '#D4AF37' },
  ],

  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data - Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Bloom por Tamires Sousa",
    "description": "Salão de beleza moderno especializado em cortes, coloração e tratamentos capilares em São João Del Rei",
    "image": "https://bloomts.com.br/images/logo.webp",
    "logo": "https://bloomts.com.br/images/logo.webp",
    "url": "https://bloomts.com.br",
    "telephone": "+55-32-99806-3010",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Antônio Rocha, 53",
      "addressLocality": "São João Del Rei",
      "addressRegion": "MG",
      "postalCode": "36307-304",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -21.1324548,
      "longitude": -44.2559968
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:30"
      }
    ],
    "sameAs": [
      "https://instagram.com/bloomhairts",
      "https://wa.me/5532998063010"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "4"
    }
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Preconnect para Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

        {/* Font Awesome para ícones */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen />

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
