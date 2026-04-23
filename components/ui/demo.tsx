import { WhatsAppIcon } from '@/components/icons'

const googleReviewsHref = 'https://maps.app.goo.gl/pxTAi3m5mCExT7fx8'
const whatsappHref =
  'https://wa.me/5532998063010?text=Olá%20Tamires!%20Quero%20marcar%20uma%20avaliação%20pelo%20site.'

const trustPoints = [
  'Atendimento com hora marcada no Centro de São João del-Rei.',
  'Avaliação antes de procedimentos de cor e clareamento.',
  'Orientação de cuidado para manter a cor depois do salão.',
]

export function ReviewsSection() {
  return (
    <section className="bg-black px-[5%] py-20">
      <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[34px] border border-[#D4AF37]/18 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_34%),#061b19] p-7 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Prova social</p>
            <h2 className="text-4xl font-black leading-tight text-[#fff8af] md:text-6xl">
              Veja as avaliações antes de decidir.
            </h2>
            <p className="mt-5 max-w-[680px] text-lg leading-relaxed text-[rgba(232,232,232,0.78)]">
              Para manter tudo transparente, o melhor caminho é conferir os comentários diretamente no perfil do Bloom no Google.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#D4AF37]/18 bg-black/35 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex text-2xl text-[#D4AF37]" aria-label="Avaliações no Google">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="font-bold text-[#fff8af]">Google</span>
            </div>

            <ul className="space-y-3 text-[rgba(232,232,232,0.78)]">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={googleReviewsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-[#D4AF37]/55 px-6 py-3 font-bold text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black"
              >
                Ver no Google
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3 font-black text-black transition-colors hover:bg-[#fff8af]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
