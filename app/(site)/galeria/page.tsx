import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Galeria de Fotos — Bloom por Tamires Sousa em São João del-Rei',
  description:
    'Veja o portfólio de trabalhos do Bloom por Tamires Sousa em São João del-Rei. Ruivos, loiros, mechas e colorações criativas com resultados reais.',
  alternates: { canonical: 'https://bloomts.com.br/galeria' },
  openGraph: {
    title: 'Galeria — Bloom por Tamires Sousa em São João del-Rei',
    description: 'Portfólio de colorações, ruivos, loiros e mechas em São João del-Rei, MG.',
    url: 'https://bloomts.com.br/galeria',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/images/gallery-1.webp', width: 800, height: 600, alt: 'Portfólio Bloom por Tamires Sousa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeria | Bloom por Tamires Sousa',
    description: 'Portfólio de trabalhos em São João del-Rei, MG.',
    images: ['/images/gallery-1.webp'],
  },
}

const galleryItems = [
  {
    src: '/images/gallery-1.webp',
    alt: 'Cabelo ruivo acobreado — resultado no Bloom por Tamires Sousa, Centro de São João del-Rei MG',
    label: 'Ruivo Acobreado',
  },
  {
    src: '/images/gallery-2.webp',
    alt: 'Loiro saudável de elite — cliente do Bloom por Tamires Sousa em São João del-Rei',
    label: 'Loiro Saudável',
  },
  {
    src: '/images/gallery-3.webp',
    alt: 'Coloração criativa — resultado no salão Bloom, São João del-Rei MG',
    label: 'Coloração Criativa',
  },
  {
    src: '/images/gallery-4.webp',
    alt: 'Mechas personalizadas — Tamires Sousa, especialista em São João del-Rei',
    label: 'Mechas Personalizadas',
  },
  {
    src: '/images/gallery-5.webp',
    alt: 'Ruivo vibrante — antes e depois no Bloom por Tamires Sousa em São João del-Rei',
    label: 'Ruivo Vibrante',
  },
  {
    src: '/images/gallery-6.webp',
    alt: 'Loiro platinado saudável — Bloom por Tamires Sousa, São João del-Rei MG',
    label: 'Loiro Platinado',
  },
  {
    src: '/images/gallery-7.webp',
    alt: 'Coloração gloss express — cobertura de fios brancos no Bloom, São João del-Rei',
    label: 'Gloss Express',
  },
]

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomts.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Galeria', item: 'https://bloomts.com.br/galeria' },
  ],
}

const imageGallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Portfólio Bloom por Tamires Sousa — São João del-Rei',
  description: 'Galeria de trabalhos de colorimetria capilar realizados por Tamires Sousa em São João del-Rei, MG.',
  url: 'https://bloomts.com.br/galeria',
  author: {
    '@type': 'Person',
    name: 'Tamires Sousa',
    worksFor: { '@type': 'HairSalon', name: 'Bloom por Tamires Sousa' },
  },
}

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-[5%]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }} />

      <div className="max-w-[1200px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[rgba(232,232,232,0.5)]">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-[#D4AF37]">Galeria</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent">
          Portfólio — Bloom por Tamires Sousa
        </h1>
        <p className="text-lg text-[rgba(232,232,232,0.7)] mb-16 max-w-[700px]">
          Trabalhos reais de colorimetria capilar realizados por Tamires Sousa em São João del-Rei, MG.
          Ruivos, loiros, mechas e colorações criativas com técnica e cuidado com a saúde dos fios.
        </p>

        {/* Grid de imagens — Server Component, indexável */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl border border-[rgba(255,248,175,0.1)] hover:border-[#D4AF37] transition-all">
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={700}
                className="w-full h-[350px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                loading={i < 3 ? 'eager' : 'lazy'}
                priority={i < 3}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-[#D4AF37] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label} — Bloom por Tamires Sousa, São João del-Rei
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-10 rounded-2xl border border-[rgba(255,248,175,0.15)] bg-[rgba(1,34,32,0.4)]">
          <h2 className="text-2xl font-bold text-[#fff8af] mb-4">Quer um resultado assim?</h2>
          <p className="text-[rgba(232,232,232,0.7)] mb-8">
            Agende sua avaliação com Tamires Sousa em São João del-Rei pelo WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/5532998063010?text=Olá%20Tamires%2C%20quero%20agendar%20um%20horário"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black font-bold px-8 py-3 rounded-full hover:bg-[#fff8af] transition-colors"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="https://instagram.com/bloomhairts"
              target="_blank"
              rel="me noopener noreferrer"
              className="border border-[#D4AF37] text-[#D4AF37] font-bold px-8 py-3 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
