'use client'

import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
    {
        id: 1,
        name: "Maria Silva",
        initials: "MS",
        rating: 5,
        text: "Atendimento excepcional! A Tamires é uma artista, transformou completamente meu visual. Super recomendo! Ambiente aconchegante e produtos de altíssima qualidade.",
        date: "Há 1 semana"
    },
    {
        id: 2,
        name: "Ana Paula",
        initials: "AP",
        rating: 5,
        text: "Ambiente acolhedor e profissionalismo impecável. Saí de lá me sentindo renovada! A Tamires tem um talento incrível para entender exatamente o que o cliente precisa.",
        date: "Há 2 semanas"
    },
    {
        id: 3,
        name: "Juliana Costa",
        initials: "JC",
        rating: 5,
        text: "Melhor salão de São João Del Rei! Técnicas modernas e um carinho especial com cada cliente. Já indiquei para todas as minhas amigas e familiares.",
        date: "Há 1 mês"
    },
    {
        id: 4,
        name: "Roberta Santos",
        initials: "RS",
        rating: 5,
        text: "Serviço de qualidade e atenção aos detalhes. A Tamires é muito atenciosa e paciente. Meu cabelo nunca esteve tão saudável e bonito. Vale cada centavo!",
        date: "Há 1 mês"
    },
]

export function ReviewsSection() {
    const [isPaused, setIsPaused] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const trackRef = useRef<HTMLDivElement>(null)

    // Detect mobile on mount
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Triplicar para loop infinito seamless
    const allReviews = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        let animationFrame: number
        let position = 0
        // Adaptive speed: slower on mobile for better readability
        const speed = isMobile ? 0.3 : 0.5

        const animate = () => {
            if (!isPaused && track) {
                position += speed

                // Adaptive card width based on screen size
                const cardWidth = (isMobile ? 280 : 320) + (isMobile ? 16 : 24)
                const resetPoint = TESTIMONIALS.length * cardWidth

                if (position >= resetPoint) {
                    position = 0
                }

                track.style.transform = `translateX(-${position}px)`
            }
            animationFrame = requestAnimationFrame(animate)
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [isPaused, isMobile])

    return (
        <section className="bg-black px-8 py-20">
            <h2 className="text-center text-6xl md:text-7xl lg:text-8xl font-black mb-20 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent relative">
                O que dizem sobre nós
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-[#D4AF37]"></span>
            </h2>

            {/* Carousel Container */}
            <div className="max-w-[1400px] mx-auto overflow-x-hidden py-8">
                <div
                    ref={trackRef}
                    className="flex gap-4 sm:gap-6"
                    style={{ willChange: 'transform' }}
                >
                    {allReviews.map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            className="flex-shrink-0 w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] relative"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={() => setIsPaused(!isPaused)}
                            style={{ zIndex: 1 }}
                        >
                            <div className="bg-[rgba(1,34,32,0.6)] border-2 border-[rgba(212,175,55,0.3)] rounded-[25px] p-4 sm:p-6 h-full flex flex-col backdrop-blur-xl hover:border-[#D4AF37] hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer relative shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(212,175,55,0.4)]">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#fff8af] text-[#012220] text-lg font-bold flex-shrink-0">
                                        {review.initials}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm sm:text-base font-bold text-[#D4AF37] truncate">
                                            {review.name}
                                        </h4>
                                        <div className="flex gap-0.5">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <span key={i} className="text-[#D4AF37] text-xs sm:text-sm">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Review Text */}
                                <p className="text-[#e8e8e8] text-xs sm:text-sm leading-relaxed mb-auto line-clamp-6 italic">
                                    &ldquo;{review.text}&rdquo;
                                </p>

                                {/* Date */}
                                <p className="text-[rgba(232,232,232,0.4)] text-[10px] sm:text-xs mt-3">
                                    {review.date}
                                </p>

                                {/* Heart Icon */}
                                <div className="absolute bottom-4 right-4 text-[#D4AF37]/40">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-24">
                <p className="text-xl md:text-2xl text-[rgba(232,232,232,0.8)] mb-12">
                    Verifique mais avaliações e deixe sua opinião!
                </p>
                <a
                    href="https://maps.app.goo.gl/pxTAi3m5mCExT7fx8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-16 py-6 bg-gradient-to-r from-[#D4AF37] to-[#fff8af] text-black text-xl font-bold rounded-full transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(212,175,55,0.5)] shadow-[0_10px_40px_rgba(212,175,55,0.3)]"
                >
                    <i className="fab fa-google"></i>
                    Avaliar no Google
                </a>
            </div>
        </section>
    )
}
