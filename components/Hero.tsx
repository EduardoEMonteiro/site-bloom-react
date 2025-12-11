'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export function Hero() {
    const wordsRef = useRef<(HTMLSpanElement | null)[]>([])
    const paragraphRef = useRef<HTMLParagraphElement>(null)
    const buttonRef = useRef<HTMLAnchorElement>(null)
    const [particleCount, setParticleCount] = useState(150)

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    useEffect(() => {
        // Set adaptive particle count based on screen size
        const updateParticles = () => {
            setParticleCount(window.innerWidth < 768 ? 80 : 150)
        }
        updateParticles()
        window.addEventListener('resize', updateParticles)

        // Animar palavras do título
        wordsRef.current.forEach((word, index) => {
            if (word) {
                setTimeout(() => {
                    word.style.opacity = '1'
                    word.style.transform = 'translateY(0) rotateX(0)'
                }, index * 200 + 500)
            }
        })

        // Animar parágrafo
        if (paragraphRef.current) {
            setTimeout(() => {
                paragraphRef.current!.style.opacity = '1'
            }, 1500)
        }

        // Animar botão
        if (buttonRef.current) {
            setTimeout(() => {
                buttonRef.current!.style.opacity = '1'
            }, 2000)
        }

        return () => window.removeEventListener('resize', updateParticles)
    }, [])

    return (
        <section className="relative min-h-screen md:h-screen flex items-center justify-center bg-black" style={{ position: 'relative', overflow: 'hidden', isolation: 'isolate' }}>
            {/* Particles Container - Absolutely contained */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none' }}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fullScreen: {
                            enable: false,
                            zIndex: 0,
                        },
                        fpsLimit: 120,
                        particles: {
                            color: {
                                value: ["#D4AF37", "#fff8af", "#ffffff"],
                            },
                            links: {
                                enable: false,
                            },
                            move: {
                                enable: true,
                                speed: 0.5,
                                direction: "none",
                                random: true,
                                straight: false,
                                outModes: {
                                    default: "out",
                                },
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: particleCount,
                            },
                            opacity: {
                                value: { min: 0.3, max: 1 },
                                animation: {
                                    enable: true,
                                    speed: 1,
                                    sync: false,
                                },
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                    style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
                />
            </div>

            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#012220]/30 to-black/50 pointer-events-none" style={{ zIndex: 1 }} />

            {/* Content */}
            <div className="relative text-center max-w-[1200px] px-8" style={{ zIndex: 10 }}>
                {/* Title - Keep all words in one line */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-black tracking-tight mb-26 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
                    <span
                        ref={el => { wordsRef.current[0] = el }}
                        className="inline-block opacity-0 translate-y-[100px] rotate-x-[-90deg] bg-gradient-to-r from-[#fff8af] via-[#D4AF37] to-[#fff8af] bg-clip-text text-transparent hero-word-animation"
                        style={{
                            transformStyle: 'preserve-3d',
                            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
                            backgroundSize: '200% 200%',
                        }}
                    >
                        Beleza
                    </span>
                    <span
                        ref={el => { wordsRef.current[1] = el }}
                        className="inline-block opacity-0 translate-y-[100px] rotate-x-[-90deg] bg-gradient-to-r from-[#fff8af] via-[#D4AF37] to-[#fff8af] bg-clip-text text-transparent hero-word-animation"
                        style={{
                            transformStyle: 'preserve-3d',
                            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
                            backgroundSize: '200% 200%',
                        }}
                    >
                        que
                    </span>
                    <span
                        ref={el => { wordsRef.current[2] = el }}
                        className="inline-block opacity-0 translate-y-[100px] rotate-x-[-90deg] bg-gradient-to-r from-[#fff8af] via-[#D4AF37] to-[#fff8af] bg-clip-text text-transparent hero-word-animation"
                        style={{
                            transformStyle: 'preserve-3d',
                            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
                            backgroundSize: '200% 200%',
                        }}
                    >
                        Transforma
                    </span>
                </h1>

                {/* Subtitle - Clear spacing from title */}
                <p
                    ref={paragraphRef}
                    className="text-lg sm:text-xl md:text-2xl mt-8 mb-12 opacity-0 font-light tracking-wide text-[rgba(232,232,232,0.8)] transition-opacity duration-1000 max-w-[900px] mx-auto"
                >
                    Transforme seu visual em um espaço acolhedor, moderno e cheio de atitude
                </p>

                {/* CTA Button */}
                <a
                    ref={buttonRef}
                    href="https://wa.me/5532998063010?text=Olá!%20Vim%20pelo%20site%20e%20quero%20agendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-[#D4AF37] to-[#fff8af] text-black text-lg sm:text-xl font-bold rounded-full opacity-0 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(212,175,55,0.5)] shadow-[0_10px_40px_rgba(212,175,55,0.3)]"
                >
                    <i className="fab fa-whatsapp"></i>
                    Agende seu Horário
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeInUp_1s_ease_3s_forwards]" style={{ zIndex: 10 }}>
                <div className="w-[2px] h-[50px] bg-gradient-to-b from-[#D4AF37] to-transparent animate-[scrollLine_2s_ease-in-out_infinite]" />
            </div>
        </section>
    )
}
