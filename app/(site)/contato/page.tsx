import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import { WhatsAppIcon, InstagramIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contato e Localização — Bloom por Tamires Sousa em São João del-Rei',
  description:
    'Entre em contato com o Bloom por Tamires Sousa. Rua Antônio Rocha, 55, Centro, São João del-Rei, MG. Agendamento pelo WhatsApp: (32) 99806-3010.',
  alternates: { canonical: 'https://bloomts.com.br/contato' },
  openGraph: {
    title: 'Contato — Bloom por Tamires Sousa em São João del-Rei',
    description: 'Rua Antônio Rocha, 55, Centro, São João del-Rei, MG. Agendamento pelo WhatsApp.',
    url: 'https://bloomts.com.br/contato',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/images/logo.webp', width: 500, height: 500, alt: 'Bloom por Tamires Sousa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato | Bloom por Tamires Sousa',
    description: 'São João del-Rei, MG. Agendamento pelo WhatsApp.',
    images: ['/images/logo.webp'],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomts.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Contato', item: 'https://bloomts.com.br/contato' },
  ],
}

// LocalBusiness completo na página de contato — reforça NAP para Google Maps e LLMs
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Bloom por Tamires Sousa',
  description: 'Especialista em colorimetria capilar em São João del-Rei. Referência em ruivos, loiros saudáveis e cores criativas.',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -21.131552,
    longitude: -44.256833,
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Rua+Antônio+Rocha,+55+Centro+São+João+del+Rei+MG',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  priceRange: '$$',
  sameAs: ['https://instagram.com/bloomhairts'],
}

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-[5%]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div className="max-w-[1000px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[rgba(232,232,232,0.5)]">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-[#D4AF37]">Contato</li>
          </ol>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent">
          Contato e Localização
        </h1>
        <p className="text-lg text-[rgba(232,232,232,0.7)] mb-16 max-w-[600px]">
          O Bloom por Tamires Sousa atende com hora marcada em São João del-Rei, MG.
          Entre em contato pelo WhatsApp para agendar sua avaliação.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-[rgba(255,248,175,0.15)] bg-[rgba(255,255,255,0.04)]">
              <h2 className="text-xl font-bold text-[#D4AF37] mb-6">Fale conosco</h2>
              <div className="space-y-5">
                <a
                  href="https://wa.me/5532998063010?text=Olá%20Tamires%2C%20quero%20agendar%20um%20horário"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[rgba(232,232,232,0.8)] hover:text-[#D4AF37] transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center group-hover:bg-[rgba(212,175,55,0.2)] transition-colors">
                    <WhatsAppIcon className="text-[#D4AF37] w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#fff8af]">WhatsApp</p>
                    <p className="text-sm">(32) 99806-3010</p>
                  </div>
                </a>
                <a
                  href="tel:+5532998063010"
                  className="flex items-center gap-4 text-[rgba(232,232,232,0.8)] hover:text-[#D4AF37] transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center group-hover:bg-[rgba(212,175,55,0.2)] transition-colors">
                    <Phone className="text-[#D4AF37] w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#fff8af]">Telefone</p>
                    <p className="text-sm">(32) 99806-3010</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/bloomhairts"
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="flex items-center gap-4 text-[rgba(232,232,232,0.8)] hover:text-[#D4AF37] transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center group-hover:bg-[rgba(212,175,55,0.2)] transition-colors">
                    <InstagramIcon className="text-[#D4AF37] w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#fff8af]">Instagram</p>
                    <p className="text-sm">@bloomhairts</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-[rgba(255,248,175,0.15)] bg-[rgba(255,255,255,0.04)]">
              <h2 className="text-xl font-bold text-[#D4AF37] mb-6">Horário de funcionamento</h2>
              <div className="space-y-3 text-[rgba(232,232,232,0.8)]">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="text-[#fff8af]">09h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="text-[#fff8af]">09h às 14h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-[rgba(232,232,232,0.4)]">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="p-8 rounded-2xl border border-[rgba(255,248,175,0.15)] bg-[rgba(255,255,255,0.04)]">
            <h2 className="text-xl font-bold text-[#D4AF37] mb-6">Localização</h2>
            {/* NAP em texto corrido — crítico para SEO local e GEO */}
            <address className="not-italic text-[rgba(232,232,232,0.85)] leading-relaxed mb-6">
              <strong className="text-[#fff8af]">Bloom por Tamires Sousa</strong><br />
              Rua Antônio Rocha, 55<br />
              Centro, São João del-Rei — MG<br />
              CEP: 36300-000<br />
              Tel: <a href="tel:+5532998063010" className="text-[#D4AF37] hover:underline">(32) 99806-3010</a>
            </address>
            <p className="text-[rgba(232,232,232,0.6)] text-sm mb-8 leading-relaxed">
              O salão fica no centro histórico de São João del-Rei, de fácil acesso a pé ou de carro.
              Próximo à Praça Severiano Resende.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Antônio+Rocha,+55+Centro+São+João+del+Rei+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#D4AF37] text-black font-bold px-6 py-3 rounded-full hover:bg-[#fff8af] transition-colors w-fit"
            >
              <MapPin className="w-4 h-4" />
              Como chegar
            </a>
          </div>
        </div>

        {/* Mapa embed */}
        <div className="rounded-2xl overflow-hidden border border-[rgba(255,248,175,0.15)] mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.5!2d-44.256833!3d-21.131552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzUzLjYiUyA0NMKwMTUnMjQuNiJX!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Bloom por Tamires Sousa — Rua Antônio Rocha, 55, Centro, São João del-Rei, MG"
          />
        </div>

        {/* CTA final */}
        <div className="text-center">
          <a
            href="https://wa.me/5532998063010?text=Olá%20Tamires%2C%20quero%20agendar%20um%20horário"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-black font-bold px-12 py-4 rounded-full hover:bg-[#fff8af] transition-colors text-lg"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}
