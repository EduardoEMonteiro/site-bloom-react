import Link from 'next/link'
import { WhatsAppIcon } from '@/components/icons'

const whatsappHref =
  'https://wa.me/5532998063010?text=Olá%20Tamires!%20Quero%20marcar%20uma%20avaliação%20e%20entender%20qual%20serviço%20é%20melhor%20para%20meu%20cabelo.'

const serviceCards = [
  {
    title: 'Quero ficar ruiva',
    href: '/servicos/cabelo-ruivo-sao-joao-del-rei',
    text: 'Para quem busca um ruivo bonito, com brilho e manutenção possível no dia a dia.',
  },
  {
    title: 'Quero iluminar ou ficar loira',
    href: '/servicos/luzes-e-mechas-sao-joao-del-rei',
    text: 'Mechas, luzes e loiros com avaliação do fio antes de qualquer clareamento.',
  },
  {
    title: 'Quero cobrir brancos',
    href: '/servicos/coloracao-sao-joao-del-rei',
    text: 'Coloração pensada para cobrir, tonalizar ou renovar a cor sem perder naturalidade.',
  },
  {
    title: 'Meu cabelo precisa de tratamento',
    href: '/servicos/hidratacao-capilar-sao-joao-del-rei',
    text: 'Cuidado para fios ressecados, porosos ou sensibilizados por química.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-black px-[5%] py-20 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 max-w-[820px]">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Serviços</p>
          <h2 className="text-4xl font-black leading-tight text-[#fff8af] md:text-6xl">
            Você não precisa chegar sabendo o nome da técnica.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[rgba(232,232,232,0.78)]">
            Pode chegar dizendo o que te incomoda, o que você quer mudar e quanto tempo consegue cuidar em casa.
            A avaliação transforma isso em um plano possível para o seu cabelo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-[26px] border border-[#D4AF37]/16 bg-[rgba(255,255,255,0.045)] p-7 transition-all hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-[rgba(255,255,255,0.07)]"
            >
              <h3 className="text-2xl font-black leading-tight text-[#fff8af] group-hover:text-[#D4AF37]">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-[rgba(232,232,232,0.76)]">{service.text}</p>
              <span className="mt-8 inline-block text-sm font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
                Entender melhor
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-[#D4AF37]/18 bg-[#061b19] p-7 md:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#fff8af]">Na dúvida, comece pela avaliação.</h3>
              <p className="mt-2 max-w-[760px] text-[rgba(232,232,232,0.76)]">
                Principalmente em cabelo com química anterior, a conversa antes do procedimento evita promessa errada e ajuda a proteger o fio.
              </p>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 font-black text-black transition-colors hover:bg-[#fff8af]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Marcar avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
