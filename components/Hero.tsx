'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"
import { WhatsAppIcon } from '@/components/icons'

export function Hero() {
    const wordsRef = useRef<(HTMLSpanElement | null)[]>([])
    const paragraphRef = useRef<HTMLParagraphElement>(null)
    const buttonRef = useRef<HTMLAnchorElement>(null)
    const [showParticles, setShowParticles] = useState(false)

    const titleWords = [
        "Especialista",
        "em",
        "Coloração",
        "em",
        "São",
        "João",
        "del",
        "Rei."
    ]

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    useEffect(() => {
        // Partículas apenas em desktop (>= 768px) — melhora LCP mobile
        setShowParticles(window.innerWidth >= 768)

        // Animar palavras do título
        wordsRef.current.forEach((word, index) => {
            if (word) {
                setTimeout(() => {
                    word.style.opacity = '1'
                    word.style.transform = 'translateY(0) rotateX(0)'
                }, index * 200 + 500)
            }
        })

        if (paragraphRef.current) {
            setTimeout(() => { paragraphRef.current!.style.opacity = '1' }, 1500)
        }

        if (buttonRef.current) {
            setTimeout(() => { buttonRef.current!.style.opacity = '1' }, 2000)
        }
    }, [])

    return (
        <section className="relative min-h-screen md:h-screen flex items-center justify-center bg-black" style={{ position: 'relative', overflow: 'hidden', isolation: 'isolate' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none' }}>
                {showParticles && (
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        options={{
                            background: { color: { value: "transparent" } },
                            fullScreen: { enable: false, zIndex: 0 },
                            fpsLimit: 60,
                            particles: {
                                color: { value: ["#D4AF37", "#fff8af", "#ffffff"] },
                                links: { enable: false },
                                move: {
                                    enable: true,
                                    speed: 0.5,
                                    direction: "none",
                                    random: true,
                                    straight: false,
                                    outModes: { default: "out" },
                                },
                                number: { density: { enable: true, area: 800 }, value: 150 },
                                opacity: {
                                    value: { min: 0.3, max: 1 },
                                    animation: { enable: true, speed: 1, sync: false },
                                },
                                shape: { type: "circle" },
                                size: { value: { min: 1, max: 3 } },
                            },
                            detectRetina: true,
                        }}
                        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
                    />
                )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#012220]/30 to-black/50 pointer-events-none" style={{ zIndex: 1 }} />

            <div className="relative text-center max-w-[1200px] px-8" style={{ zIndex: 10 }}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-black tracking-tight mb-26 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
                    {titleWords.map((word, index) => (
                        <span
                            key={`${word}-${index}`}
                            ref={el => { wordsRef.current[index] = el }}
                            className="inline-block opacity-0 translate-y-[100px] rotate-x-[-90deg] bg-gradient-to-r from-[#fff8af] via-[#D4AF37] to-[#fff8af] bg-clip-text text-transparent hero-word-animation"
                            style={{
                                transformStyle: 'preserve-3d',
                                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
                                backgroundSize: '200% 200%',
                            }}
                        >
                            {word}
                        </span>
                    ))}
                </h1>

                <p
                    ref={paragraphRef}
                    className="text-lg sm:text-xl md:text-2xl mt-8 mb-12 opacity-0 font-light tracking-wide text-[rgba(232,232,232,0.8)] transition-opacity duration-1000 max-w-[900px] mx-auto"
                >
                    Especialista em colorimetria capilar para ruivos, loiros saudáveis e cores criativas em São João del Rei
                </p>

                <a
                    ref={buttonRef}
                    href="https://wa.me/5532998063010?text=Olá%20Tamires!%20Quero%20agendar%20uma%20avaliação%20para%20[Loiro%20/%20Ruivo%20/%20Cobertura%20de%20Brancos%20Gloss%20Express]."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-[#D4AF37] to-[#fff8af] text-black text-lg sm:text-xl font-bold rounded-full opacity-0 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(212,175,55,0.5)] shadow-[0_10px_40px_rgba(212,175,55,0.3)]"
                >
                    <WhatsAppIcon className="w-6 h-6" />
                    Agende seu Horário
                </a>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeInUp_1s_ease_3s_forwards]" style={{ zIndex: 10 }}>
                <div className="w-[2px] h-[50px] bg-gradient-to-b from-[#D4AF37] to-transparent animate-[scrollLine_2s_ease-in-out_infinite]" />
            </div>
        </section>
    )
}
