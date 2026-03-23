import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getServiceBySlug } from '@/lib/services-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: `${service.name} | Bloom por Tamires Sousa`,
    description: service.description,
    alternates: { canonical: `https://bloomts.com.br/servicos/${service.slug}` },
    openGraph: {
      title: `${service.name} | Bloom por Tamires Sousa`,
      description: service.description,
      url: `https://bloomts.com.br/servicos/${service.slug}`,
      locale: 'pt_BR',
      type: 'website',
      images: [{ url: '/images/logo.webp', width: 500, height: 500, alt: `${service.name} — Bloom por Tamires Sousa` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} | Bloom por Tamires Sousa`,
      description: service.description,
      images: ['/images/logo.webp'],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomts.com.br' },
      { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://bloomts.com.br/servicos' },
      { '@type': 'ListItem', position: 3, name: service.name, item: `https://bloomts.com.br/servicos/${service.slug}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.longDescription,
    provider: {
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
    },
    areaServed: { '@type': 'City', name: 'São João del-Rei' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-[5%]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-[900px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[rgba(232,232,232,0.5)]">
          <ol className="flex gap-2 flex-wrap">
            <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/servicos" className="hover:text-[#D4AF37] transition-colors">Serviços</Link></li>
            <li>/</li>
            <li className="text-[#D4AF37]">{service.shortName}</li>
          </ol>
        </nav>

        {/* H1 otimizado para keyword local */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent leading-tight">
          {service.name}
        </h1>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#fff8af] mb-4">O que é {service.shortName}</h2>
          <p className="text-lg text-[rgba(232,232,232,0.85)] leading-relaxed">
            {service.longDescription}
          </p>
        </section>

        {/* Como funciona no Bloom */}
        <section className="mb-12 p-8 rounded-2xl border border-[rgba(255,248,175,0.15)] bg-[rgba(255,255,255,0.04)]">
          <h2 className="text-2xl font-bold text-[#fff8af] mb-4">
            Como funciona no Bloom por Tamires Sousa
          </h2>
          <p className="text-lg text-[rgba(232,232,232,0.85)] leading-relaxed">
            {service.howItWorks}
          </p>
          <p className="mt-4 text-[rgba(232,232,232,0.6)] text-base">
            Duração média: <span className="text-[#D4AF37] font-semibold">{service.duration}</span>
          </p>
        </section>

        {/* Para quem é indicado */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#fff8af] mb-4">Para quem é indicado</h2>
          <p className="text-lg text-[rgba(232,232,232,0.85)] leading-relaxed">
            {service.forWhom}
          </p>
        </section>

        {/* Localização — importante para GEO */}
        <section className="mb-12 p-8 rounded-2xl border border-[rgba(255,248,175,0.15)] bg-[rgba(1,34,32,0.4)]">
          <h2 className="text-2xl font-bold text-[#fff8af] mb-4">
            Onde fica o Bloom — São João del-Rei, MG
          </h2>
          <p className="text-lg text-[rgba(232,232,232,0.85)] leading-relaxed">
            O Bloom por Tamires Sousa está localizado na <strong className="text-[#D4AF37]">Rua Antônio Rocha, 55, Centro, São João del-Rei, MG</strong> — CEP 36300-000.
            O salão fica no coração do centro histórico de São João del-Rei, de fácil acesso a pé ou de carro.
            Atendimento exclusivo com hora marcada pelo WhatsApp: <a href="tel:+5532998063010" className="text-[#D4AF37] hover:underline">(32) 99806-3010</a>.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://wa.me/5532998063010?text=Olá%20Tamires%2C%20quero%20agendar%20um%20horário"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black font-bold px-8 py-3 rounded-full hover:bg-[#fff8af] transition-colors"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Antônio+Rocha,+55+Centro+São+João+del+Rei+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#D4AF37] text-[#D4AF37] font-bold px-8 py-3 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              Como chegar
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#fff8af] mb-8">
            Perguntas frequentes sobre {service.shortName}
          </h2>
          <div className="flex flex-col gap-6">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-8 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,248,175,0.1)] rounded-[20px] hover:border-[#D4AF37]/50 transition-all"
              >
                <h3 className="text-lg font-bold text-[#fff8af] mb-3 flex gap-3">
                  <span className="text-[#D4AF37]">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-[rgba(232,232,232,0.8)] leading-relaxed pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Links para outros serviços */}
        <section>
          <h2 className="text-xl font-bold text-[#fff8af] mb-6">Outros serviços no Bloom</h2>
          <div className="flex flex-wrap gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicos/${s.slug}`}
                  className="px-5 py-2 rounded-full border border-[rgba(255,248,175,0.2)] text-[rgba(232,232,232,0.7)] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-sm"
                >
                  {s.shortName}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  )
}
