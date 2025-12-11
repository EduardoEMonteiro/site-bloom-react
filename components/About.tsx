'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const features = [
    {
        icon: 'fa-star',
        title: 'Exclusivo',
        description: 'Atendimento personalizado'
    },
    {
        icon: 'fa-palette',
        title: 'Moderno',
        description: 'Técnicas atualizadas'
    },
    {
        icon: 'fa-heart',
        title: 'Acolhedor',
        description: 'Ambiente confortável'
    },
    {
        icon: 'fa-gem',
        title: 'Premium',
        description: 'Produtos de qualidade'
    }
]

export function About() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="min-h-screen py-40 px-[5%] relative bg-black"
        >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center relative z-10">

                {/* Image */}
                <div className="relative max-w-[500px] mx-auto">
                    <Image
                        src="/images/about.webp"
                        alt="Tamires Sousa - Cabeleireira profissional especializada em cortes, coloração e tratamentos capilares em São João Del Rei"
                        width={500}
                        height={600}
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 rounded-lg"
                    />
                </div>

                {/* Text Content */}
                <div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent">
                        Sobre Tamires
                    </h2>

                    <p className="text-xl leading-relaxed mb-6 font-light opacity-90 text-[#e8e8e8]">
                        Tamires Sousa é mais do que uma profissional da beleza, ela é uma artista dedicada a realçar o melhor de cada cliente.
                    </p>

                    <p className="text-xl leading-relaxed mb-12 font-light opacity-90 text-[#e8e8e8]">
                        Com anos de experiência, constante aperfeiçoamento e um olhar único para tendências, ela criou um espaço onde cada detalhe importa.
                    </p>

                    {/* Feature Cards */}
                    <div className={`grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-6 md:gap-8 mt-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-10 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,248,175,0.15)] rounded-[20px] backdrop-blur-md transition-all duration-500 hover:bg-[rgba(255,255,255,0.12)] hover:border-[#D4AF37] hover:-translate-y-3 hover:scale-105 hover:shadow-[0_20px_60px_rgba(212,175,55,0.2)] cursor-pointer"
                            >
                                <i className={`fas ${feature.icon} text-[#D4AF37] text-4xl mb-6 block`}></i>
                                <h3 className="text-2xl font-bold mb-3 text-[#fff8af]">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-[rgba(232,232,232,0.9)]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
