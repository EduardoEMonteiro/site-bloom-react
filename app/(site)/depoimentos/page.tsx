import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avaliações | Bloom por Tamires Sousa',
  description:
    'Veja as avaliações do Bloom por Tamires Sousa no Google e fale pelo WhatsApp para marcar uma avaliação em São João del-Rei.',
  alternates: { canonical: 'https://bloomts.com.br/depoimentos' },
  openGraph: {
    title: 'Avaliações | Bloom por Tamires Sousa',
    description: 'Veja avaliações no Google e marque uma avaliação pelo WhatsApp.',
    url: 'https://bloomts.com.br/depoimentos',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/images/logo.webp', width: 500, height: 500, alt: 'Bloom por Tamires Sousa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avaliações | Bloom por Tamires Sousa',
    description: 'Bloom por Tamires Sousa em São João del-Rei, MG.',
    images: ['/images/logo.webp'],
  },
}

const googleReviewsHref = 'https://maps.app.goo.gl/pxTAi3m5mCExT7fx8'
const whatsappHref =
  'https://wa.me/5532998063010?text=Olá%20Tamires!%20Vi%20as%20avaliações%20e%20quero%20marcar%20uma%20avaliação.'

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomts.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Avaliações', item: 'https://bloomts.com.br/depoimentos' },
  ],
}

export default function DepoimentosPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-[5%]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="max-w-[980px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[rgba(232,232,232,0.5)]">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-[#D4AF37]">Avaliações</li>
          </ol>
        </nav>

        <section className="rounded-[34px] border border-[rgba(255,248,175,0.16)] bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_34%),rgba(1,34,32,0.58)] p-8 md:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Prova social</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent leading-tight">
            Avaliações direto no Google.
          </h1>
          <p className="text-lg text-[rgba(232,232,232,0.78)] leading-relaxed max-w-[760px]">
            Para decidir com mais segurança, confira os comentários no perfil do Bloom em uma fonte externa
            antes de chamar no WhatsApp.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={googleReviewsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-[#D4AF37] px-8 py-4 font-black text-black transition-colors hover:bg-[#fff8af]"
            >
              Ver avaliações no Google
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-[#D4AF37] px-8 py-4 font-bold text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black"
            >
              Marcar avaliação
            </a>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            'Atendimento com hora marcada no Centro de São João del-Rei.',
            'Avaliação do fio antes de cor, loiro, ruivo ou mechas.',
            'Orientação de manutenção para cuidar do cabelo depois do salão.',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[rgba(255,248,175,0.14)] bg-[rgba(255,255,255,0.04)] p-6">
              <p className="text-[rgba(232,232,232,0.8)] leading-relaxed">{item}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
