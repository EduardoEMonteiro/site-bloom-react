import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Depoimentos — Bloom por Tamires Sousa em São João del-Rei',
  description:
    'Veja o que as clientes dizem sobre o Bloom por Tamires Sousa em São João del-Rei. Avaliações reais de quem já transformou o cabelo com Tamires.',
  alternates: { canonical: 'https://bloomts.com.br/depoimentos' },
  openGraph: {
    title: 'Depoimentos — Bloom por Tamires Sousa',
    description: 'Avaliações reais de clientes do Bloom por Tamires Sousa em São João del-Rei, MG.',
    url: 'https://bloomts.com.br/depoimentos',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/images/logo.webp', width: 500, height: 500, alt: 'Bloom por Tamires Sousa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depoimentos | Bloom por Tamires Sousa',
    description: 'Avaliações reais de clientes em São João del-Rei.',
    images: ['/images/logo.webp'],
  },
}

// Depoimentos reais — renderizados em HTML puro para indexação por Google e LLMs
const reviews = [
  {
    name: 'Maria Silva',
    rating: 5,
    text: 'Atendimento excepcional! A Tamires é uma artista, transformou completamente meu visual. Super recomendo! Ambiente aconchegante e produtos de altíssima qualidade.',
    service: 'Coloração',
    date: '2025-03-01',
  },
  {
    name: 'Ana Paula',
    rating: 5,
    text: 'Ambiente acolhedor e profissionalismo impecável. Saí de lá me sentindo renovada! A Tamires tem um talento incrível para entender exatamente o que o cliente precisa.',
    service: 'Luzes e Mechas',
    date: '2025-02-15',
  },
  {
    name: 'Juliana Costa',
    rating: 5,
    text: 'Melhor salão de São João del-Rei! Técnicas modernas e um carinho especial com cada cliente. Já indiquei para todas as minhas amigas e familiares.',
    service: 'Ruivos',
    date: '2025-02-01',
  },
  {
    name: 'Roberta Santos',
    rating: 5,
    text: 'Serviço de qualidade e atenção aos detalhes. A Tamires é muito atenciosa e paciente. Meu cabelo nunca esteve tão saudável e bonito. Vale cada centavo!',
    service: 'Hidratação Capilar',
    date: '2025-01-20',
  },
]

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomts.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Depoimentos', item: 'https://bloomts.com.br/depoimentos' },
  ],
}

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Bloom por Tamires Sousa',
  url: 'https://bloomts.com.br',
  telephone: '+5532998063010',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Antônio Rocha, 55',
    addressLocality: 'São João del-Rei',
    addressRegion: 'MG',
    postalCode: '36300-000',
    addressCountry: 'BR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: String(reviews.length),
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
    reviewBody: r.text,
    datePublished: r.date,
  })),
}

export default function DepoimentosPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-[5%]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="max-w-[1000px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[rgba(232,232,232,0.5)]">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-[#D4AF37]">Depoimentos</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent">
          O que dizem sobre o Bloom
        </h1>
        <p className="text-lg text-[rgba(232,232,232,0.7)] mb-4">
          Avaliações reais de clientes do <strong className="text-[#fff8af]">Bloom por Tamires Sousa</strong> em São João del-Rei, MG.
        </p>

        {/* Nota de avaliação geral — indexável */}
        <div className="flex items-center gap-3 mb-16">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#D4AF37] text-2xl">★</span>
            ))}
          </div>
          <span className="text-[#fff8af] font-bold text-xl">5.0</span>
          <span className="text-[rgba(232,232,232,0.5)]">— {reviews.length} avaliações</span>
        </div>

        {/* Depoimentos em HTML puro — Server Component, indexável por Google e LLMs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="p-8 rounded-2xl border border-[rgba(255,248,175,0.15)] bg-[rgba(255,255,255,0.04)]"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#fff8af] flex items-center justify-center text-[#012220] font-bold text-lg flex-shrink-0">
                  {review.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="font-bold text-[#D4AF37]" itemProp="author">{review.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <span key={j} className="text-[#D4AF37] text-sm">★</span>
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-xs text-[rgba(232,232,232,0.4)] bg-[rgba(255,255,255,0.05)] px-3 py-1 rounded-full">
                  {review.service}
                </span>
              </div>
              <blockquote className="text-[rgba(232,232,232,0.85)] leading-relaxed italic" itemProp="reviewBody">
                &ldquo;{review.text}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>

        {/* CTA para Google Maps */}
        <div className="text-center p-10 rounded-2xl border border-[rgba(255,248,175,0.15)] bg-[rgba(1,34,32,0.4)]">
          <h2 className="text-2xl font-bold text-[#fff8af] mb-4">Deixe sua avaliação</h2>
          <p className="text-[rgba(232,232,232,0.7)] mb-8">
            Já foi atendida no Bloom por Tamires Sousa em São João del-Rei? Compartilhe sua experiência no Google.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/pxTAi3m5mCExT7fx8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black font-bold px-8 py-3 rounded-full hover:bg-[#fff8af] transition-colors"
            >
              Avaliar no Google
            </a>
            <a
              href="https://wa.me/5532998063010?text=Olá%20Tamires%2C%20quero%20agendar%20um%20horário"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#D4AF37] text-[#D4AF37] font-bold px-8 py-3 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
