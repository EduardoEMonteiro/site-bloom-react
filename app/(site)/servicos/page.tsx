import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Serviços de Beleza em São João del-Rei | Bloom por Tamires Sousa',
  description:
    'Coloração, luzes, ruivos, loiros, hidratação e escova progressiva em São João del-Rei. Especialista Tamires Sousa — agende pelo WhatsApp.',
  alternates: { canonical: 'https://bloomts.com.br/servicos' },
  openGraph: {
    title: 'Serviços de Beleza em São João del-Rei | Bloom por Tamires Sousa',
    description:
      'Coloração, luzes, ruivos, loiros, hidratação e escova progressiva em São João del-Rei.',
    url: 'https://bloomts.com.br/servicos',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/images/logo.webp', width: 500, height: 500, alt: 'Bloom por Tamires Sousa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serviços | Bloom por Tamires Sousa',
    description: 'Especialista em colorimetria capilar em São João del-Rei.',
    images: ['/images/logo.webp'],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomts.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://bloomts.com.br/servicos' },
  ],
}

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-[5%]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-[1200px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[rgba(232,232,232,0.5)]">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-[#D4AF37]">Serviços</li>
          </ol>
        </nav>

        <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent">
          Serviços em São João del-Rei
        </h1>
        <p className="text-xl text-[rgba(232,232,232,0.8)] mb-16 max-w-[700px] leading-relaxed">
          O Bloom por Tamires Sousa oferece serviços especializados em colorimetria capilar em São João del-Rei, MG.
          Cada atendimento é personalizado para garantir o melhor resultado com saúde e técnica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicos/${service.slug}`}
              className="group p-8 rounded-2xl border border-[rgba(255,248,175,0.2)] bg-[rgba(255,255,255,0.04)] backdrop-blur-md hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-xl font-bold mb-4 text-[#fff8af] group-hover:text-[#D4AF37] transition-colors leading-tight">
                {service.name}
              </h2>
              <p className="text-[rgba(232,232,232,0.8)] leading-relaxed mb-6 text-base">
                {service.description}
              </p>
              <span className="text-[#D4AF37] text-sm font-semibold group-hover:underline">
                Saiba mais →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-2xl border border-[rgba(255,248,175,0.2)] bg-[rgba(255,255,255,0.04)] text-center">
          <h2 className="text-3xl font-bold text-[#fff8af] mb-4">Agende seu horário</h2>
          <p className="text-[rgba(232,232,232,0.8)] mb-8 text-lg">
            Atendimento exclusivo pelo WhatsApp. Bloom por Tamires Sousa — Rua Antônio Rocha, 55, Centro, São João del-Rei, MG.
          </p>
          <a
            href="https://wa.me/5532998063010?text=Olá%20Tamires%2C%20quero%20agendar%20um%20horário"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-black font-bold px-10 py-4 rounded-full hover:bg-[#fff8af] transition-colors text-lg"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}
