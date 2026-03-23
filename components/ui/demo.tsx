// Server Component — depoimentos renderizados em HTML estático para indexação pelo Google e LLMs
// O carrossel animado foi substituído por um grid estático com scroll horizontal no mobile

const TESTIMONIALS = [
    {
        id: 1,
        name: "Maria Silva",
        initials: "MS",
        rating: 5,
        text: "Atendimento excepcional! A Tamires é uma artista, transformou completamente meu visual. Super recomendo! Ambiente aconchegante e produtos de altíssima qualidade.",
        date: "Há 1 semana",
        service: "Coloração",
    },
    {
        id: 2,
        name: "Ana Paula",
        initials: "AP",
        rating: 5,
        text: "Ambiente acolhedor e profissionalismo impecável. Saí de lá me sentindo renovada! A Tamires tem um talento incrível para entender exatamente o que o cliente precisa.",
        date: "Há 2 semanas",
        service: "Luzes e Mechas",
    },
    {
        id: 3,
        name: "Juliana Costa",
        initials: "JC",
        rating: 5,
        text: "Melhor salão de São João del-Rei! Técnicas modernas e um carinho especial com cada cliente. Já indiquei para todas as minhas amigas e familiares.",
        date: "Há 1 mês",
        service: "Ruivos",
    },
    {
        id: 4,
        name: "Roberta Santos",
        initials: "RS",
        rating: 5,
        text: "Serviço de qualidade e atenção aos detalhes. A Tamires é muito atenciosa e paciente. Meu cabelo nunca esteve tão saudável e bonito. Vale cada centavo!",
        date: "Há 1 mês",
        service: "Hidratação Capilar",
    },
]

export function ReviewsSection() {
    return (
        <section className="bg-black px-8 py-20">
            <h2 className="text-center text-6xl md:text-7xl lg:text-8xl font-black mb-20 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent relative">
                O que dizem sobre nós
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-[#D4AF37]"></span>
            </h2>

            {/* Grid estático — indexável pelo Google e LLMs */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                {TESTIMONIALS.map((review) => (
                    <article
                        key={review.id}
                        className="bg-[rgba(1,34,32,0.6)] border-2 border-[rgba(212,175,55,0.3)] rounded-[25px] p-6 flex flex-col hover:border-[#D4AF37] hover:shadow-[0_16px_48px_rgba(212,175,55,0.2)] transition-all duration-300"
                        itemScope
                        itemType="https://schema.org/Review"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#fff8af] text-[#012220] text-lg font-bold flex-shrink-0">
                                {review.initials}
                            </div>
                            <div>
                                <p className="font-bold text-[#D4AF37] text-sm" itemProp="author">{review.name}</p>
                                <div className="flex gap-0.5" aria-label={`${review.rating} estrelas`}>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-[#D4AF37] text-sm" aria-hidden="true">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <blockquote
                            className="text-[#e8e8e8] text-sm leading-relaxed mb-auto italic"
                            itemProp="reviewBody"
                        >
                            &ldquo;{review.text}&rdquo;
                        </blockquote>

                        <div className="flex justify-between items-center mt-4">
                            <span className="text-[rgba(232,232,232,0.4)] text-xs">{review.date}</span>
                            <span className="text-xs text-[rgba(212,175,55,0.6)] bg-[rgba(212,175,55,0.08)] px-2 py-0.5 rounded-full">{review.service}</span>
                        </div>
                    </article>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
                <p className="text-xl md:text-2xl text-[rgba(232,232,232,0.8)] mb-8">
                    Verifique mais avaliações e deixe sua opinião!
                </p>
                <a
                    href="https://maps.app.goo.gl/pxTAi3m5mCExT7fx8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-16 py-6 bg-gradient-to-r from-[#D4AF37] to-[#fff8af] text-black text-xl font-bold rounded-full transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(212,175,55,0.5)] shadow-[0_10px_40px_rgba(212,175,55,0.3)]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                    Avaliar no Google
                </a>
            </div>
        </section>
    )
}
