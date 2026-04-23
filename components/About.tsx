import Link from 'next/link'

const principles = [
  {
    title: 'Primeiro, entender o cabelo',
    text: 'Histórico de tintura, alisamento, descoloração e rotina em casa mudam completamente o caminho.',
  },
  {
    title: 'Depois, combinar expectativa',
    text: 'Nem todo resultado seguro acontece em uma sessão. Quando precisa de etapas, isso é explicado antes.',
  },
  {
    title: 'Por fim, cuidar da manutenção',
    text: 'A cor continua bonita quando você sabe como lavar, tratar e quando voltar para retocar.',
  },
]

export function About() {
  return (
    <section className="bg-black px-[5%] py-20 md:py-24">
      <div className="mx-auto max-w-[980px]">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Sobre a Tamires</p>
          <h2 className="mx-auto max-w-[780px] text-4xl font-black leading-tight text-[#fff8af] md:text-6xl">
            Técnica importa. Escuta também.
          </h2>

          <div className="mx-auto mt-6 max-w-[820px] space-y-5 text-lg leading-relaxed text-[rgba(232,232,232,0.8)]">
            <p>
              A Tamires Sousa atende no Bloom, em São João del-Rei, com foco em colorimetria, ruivos, loiros, mechas,
              cobertura de brancos e tratamento para fios que passaram por química.
            </p>
            <p>
              O trabalho começa com uma conversa honesta: o que você quer, como está o seu cabelo hoje e qual caminho
              preserva melhor a saúde do fio. Quando o cabelo precisa de preparo, a orientação é parte do atendimento.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-[22px] border border-[#D4AF37]/16 bg-white/[0.045] p-5">
                <h3 className="text-lg font-black text-[#fff8af]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[rgba(232,232,232,0.72)]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/sobre"
              className="rounded-full border border-[#D4AF37]/55 px-7 py-3 font-bold text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black"
            >
              Conhecer a Tamires
            </Link>
            <Link
              href="/contato"
              className="rounded-full bg-[#D4AF37] px-7 py-3 font-black text-black transition-colors hover:bg-[#fff8af]"
            >
              Ver endereço
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
