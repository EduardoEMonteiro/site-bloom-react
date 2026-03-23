import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Tamires Sousa — Cabeleireira em São João del-Rei | Bloom',
  description:
    'Conheça Tamires Sousa, especialista em colorimetria capilar em São João del-Rei, MG. Referência em ruivos, loiros e cores criativas no Bloom por Tamires Sousa.',
  alternates: { canonical: 'https://bloomts.com.br/sobre' },
  openGraph: {
    title: 'Sobre Tamires Sousa — Cabeleireira em São João del-Rei',
    description:
      'Tamires Sousa é especialista em colorimetria capilar em São João del-Rei, MG. Referência em ruivos, loiros e cores criativas.',
    url: 'https://bloomts.com.br/sobre',
    locale: 'pt_BR',
    type: 'profile',
    images: [{ url: '/images/about.webp', width: 500, height: 600, alt: 'Tamires Sousa — Colorista em São João del-Rei' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Tamires Sousa | Bloom por Tamires Sousa',
    description: 'Especialista em colorimetria capilar em São João del-Rei, MG.',
    images: ['/images/about.webp'],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomts.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Sobre', item: 'https://bloomts.com.br/sobre' },
  ],
}

// Schema de Pessoa — cria entidade nomeada para LLMs
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tamires Sousa',
  jobTitle: 'Cabeleireira e Colorista',
  worksFor: {
    '@type': 'HairSalon',
    name: 'Bloom por Tamires Sousa',
    url: 'https://bloomts.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Antônio Rocha, 55',
      addressLocality: 'São João del-Rei',
      addressRegion: 'MG',
      postalCode: '36300-000',
      addressCountry: 'BR',
    },
  },
  knowsAbout: [
    'Coloração de Cabelos',
    'Cabelos Ruivos',
    'Mechas e Luzes',
    'Loiros Saudáveis',
    'Colorimetria Capilar',
    'Hidratação Capilar',
    'Escova Progressiva',
  ],
  sameAs: ['https://instagram.com/bloomhairts'],
}

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-[5%]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="max-w-[1100px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[rgba(232,232,232,0.5)]">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-[#D4AF37]">Sobre</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <Image
              src="/images/about.webp"
              alt="Tamires Sousa — Cabeleireira e Colorista Especialista em São João del-Rei, MG"
              width={500}
              height={600}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent leading-tight">
              Tamires Sousa
            </h1>
            <p className="text-[#D4AF37] font-semibold text-lg mb-8">
              Cabeleireira e Colorista — São João del-Rei, MG
            </p>

            {/* Texto rico em entidades nomeadas — essencial para GEO */}
            <div className="space-y-5 text-lg text-[rgba(232,232,232,0.85)] leading-relaxed">
              <p>
                <strong className="text-[#fff8af]">Tamires Sousa</strong> é cabeleireira e colorista especialista em colorimetria capilar,
                com atuação em <strong className="text-[#fff8af]">São João del-Rei, MG</strong>. Fundadora do{' '}
                <strong className="text-[#fff8af]">Bloom por Tamires Sousa</strong>, ela é referência regional em técnicas de coloração
                avançada, com foco em ruivos, loiros saudáveis e cores criativas.
              </p>
              <p>
                Formada e especializada em colorimetria de alta performance, Tamires utiliza produtos
                profissionais Schwarzkopf e técnicas como pigmentação seletiva, balayage, babylights e
                mechas californianas. Seu diferencial está na combinação de precisão técnica com cuidado
                real com a saúde da fibra capilar.
              </p>
              <p>
                O <strong className="text-[#fff8af]">Bloom por Tamires Sousa</strong> está localizado na{' '}
                <strong className="text-[#fff8af]">Rua Antônio Rocha, 55, Centro, São João del-Rei, MG — CEP 36300-000</strong>.
                O atendimento é exclusivo com hora marcada, garantindo dedicação total a cada cliente.
              </p>
              <p>
                As especialidades de Tamires incluem: coloração capilar, cabelos ruivos, luzes e mechas,
                loiros saudáveis, hidratação capilar pós-química, escova progressiva e cronograma capilar
                personalizado. Cada atendimento começa com uma consultoria para entender o histórico do
                cabelo e definir o melhor caminho para o resultado desejado.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
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
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Especialidades em cards */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-[#fff8af] mb-10 text-center">Especialidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Cabelos Ruivos', desc: 'Pigmentação seletiva para ruivos vibrantes e duradouros em São João del-Rei.' },
              { title: 'Loiros Saudáveis', desc: 'Clareamento técnico com preservação total da integridade da fibra capilar.' },
              { title: 'Luzes e Mechas', desc: 'Balayage, babylights e mechas californianas com acabamento artesanal.' },
              { title: 'Cores Criativas', desc: 'Cores fantasia e personalizadas com pigmentos de alta performance.' },
              { title: 'Hidratação Capilar', desc: 'Cronograma capilar personalizado pós-química para restaurar saúde e brilho.' },
              { title: 'Colorimetria Avançada', desc: 'Análise colorimétrica completa antes de cada processo químico.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-[rgba(255,248,175,0.15)] bg-[rgba(255,255,255,0.04)]"
              >
                <h3 className="text-lg font-bold text-[#D4AF37] mb-2">{item.title}</h3>
                <p className="text-[rgba(232,232,232,0.8)] text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NAP consistente */}
        <div className="mt-16 p-8 rounded-2xl border border-[rgba(255,248,175,0.15)] bg-[rgba(1,34,32,0.4)] text-center">
          <p className="text-[rgba(232,232,232,0.7)] text-lg leading-relaxed">
            <strong className="text-[#fff8af]">Bloom por Tamires Sousa</strong><br />
            Rua Antônio Rocha, 55, Centro — São João del-Rei, MG — CEP 36300-000<br />
            <a href="tel:+5532998063010" className="text-[#D4AF37] hover:underline">(32) 99806-3010</a>
          </p>
        </div>
      </div>
    </main>
  )
}
