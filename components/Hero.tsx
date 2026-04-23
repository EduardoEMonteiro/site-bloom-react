import Image from 'next/image'
import Link from 'next/link'
import { WhatsAppIcon } from '@/components/icons'

const whatsappHref =
  'https://wa.me/5532998063010?text=Olá%20Tamires!%20Vim%20pelo%20site%20e%20quero%20marcar%20uma%20avaliação%20para%20meu%20cabelo.'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.18),transparent_28%),linear-gradient(135deg,#020504_0%,#071c1a_46%,#000_100%)] px-[5%] pb-20 pt-36 md:min-h-screen md:pt-40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
      <div className="absolute -right-32 top-28 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-[#012220] blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#D4AF37]/30 bg-black/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Colorimetria em São João del-Rei
          </p>

          <h1 className="max-w-[760px] text-5xl font-black leading-[0.95] tracking-tight text-[#fff8af] sm:text-6xl md:text-7xl lg:text-8xl">
            Cor bonita começa com um cabelo bem cuidado.
          </h1>

          <p className="mt-7 max-w-[650px] text-lg leading-relaxed text-[rgba(232,232,232,0.82)] md:text-xl">
            Ruivos, loiros, mechas, cobertura de brancos e tratamentos com avaliação antes da química.
            A Tamires olha seu fio, entende seu histórico e combina com você o caminho mais seguro para chegar no resultado.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#fff8af] px-8 py-4 text-base font-black text-black shadow-[0_18px_50px_rgba(212,175,55,0.28)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(212,175,55,0.38)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Quero uma avaliação
            </a>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/55 px-8 py-4 text-base font-bold text-[#fff8af] transition-all hover:bg-[#D4AF37] hover:text-black"
            >
              Ver resultados
            </Link>
          </div>

          <div className="mt-10 grid max-w-[720px] grid-cols-1 gap-3 text-sm text-[rgba(232,232,232,0.72)] sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <strong className="block text-[#fff8af]">Hora marcada</strong>
              Atendimento sem pressa
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <strong className="block text-[#fff8af]">Centro</strong>
              Rua Antônio Rocha, 53
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <strong className="block text-[#fff8af]">Plano realista</strong>
              Sem promessa impossível
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] self-end">
          <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-[#D4AF37]/25 via-transparent to-[#fff8af]/10 blur-xl" />
          <div className="relative overflow-hidden rounded-[30px] border border-[#D4AF37]/25 bg-[#071c1a] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            <Image
              src="/images/about.webp"
              alt="Tamires Sousa, colorista do Bloom em São João del-Rei"
              width={620}
              height={740}
              className="h-[700px] w-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
