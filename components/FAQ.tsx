const faqs = [
  {
    question: 'Preciso fazer avaliação antes?',
    answer:
      'Para cor, mechas, loiro, ruivo ou cabelo com química anterior, sim. A avaliação evita surpresa no dia do procedimento e ajuda a escolher um caminho seguro para o fio.',
  },
  {
    question: 'Dá para chegar no tom que eu quero em um dia?',
    answer:
      'Às vezes dá, às vezes não. Depende do histórico do cabelo, da cor atual e da resistência do fio. Quando o resultado precisa de etapas, a Tamires explica antes de começar.',
  },
  {
    question: 'Como marco pelo WhatsApp?',
    answer:
      'Envie uma mensagem contando o que você quer fazer e, se puder, mande uma foto atual do cabelo com uma referência do resultado desejado. Assim a conversa já começa mais objetiva.',
  },
  {
    question: 'Onde fica o Bloom?',
    answer:
      'O Bloom fica na Rua Antônio Rocha, 55, Centro, São João del-Rei, MG. O atendimento é com hora marcada.',
  },
]

export function FAQ() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="relative bg-black px-[5%] py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto max-w-[980px]">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Dúvidas comuns</p>
          <h2 className="text-4xl font-black leading-tight text-[#fff8af] md:text-6xl">
            Antes de marcar, vale saber.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[24px] border border-[#D4AF37]/14 bg-white/[0.045] p-6 md:p-7"
            >
              <h3 className="text-xl font-black text-[#fff8af]">{faq.question}</h3>
              <p className="mt-3 leading-relaxed text-[rgba(232,232,232,0.78)]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
