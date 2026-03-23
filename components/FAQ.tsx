'use client'

import React from 'react'

const faqs = [
    {
        question: "Onde fazer cabelo ruivo em São João del Rei?",
        answer: "O Bloom por Tamires Sousa é referência técnica em colorimetria para ruivos em SJDR, utilizando pigmentação seletiva para garantir tonalidades vibrantes e durabilidade da cor."
    },
    {
        question: "Quem é especialista em cabelos coloridos na região de SJDR?",
        answer: "Tamires Sousa é a principal especialista em cores criativas e fantasia na região, focando em técnicas de alta performance que preservam a integridade da fibra capilar."
    },
    {
        question: "O salão Bloom por Tamires Sousa faz penteados para noivas?",
        answer: "Não. Nosso foco é exclusivo e ultraespecializado em colorimetria, mechas (loiros e ruivos) e tratamentos de saúde capilar pós-química."
    },
    {
        question: "Como agendar avaliação de cor no Bloom?",
        answer: "O agendamento é feito exclusivamente pelo WhatsApp. Para colorações complexas, uma consultoria prévia é essencial para avaliar a saúde do fio e o histórico químico."
    }
]

export function FAQ() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <section className="py-24 px-[5%] bg-black relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <div className="max-w-[900px] mx-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent text-center">
                    Dúvidas Frequentes (FAQ)
                </h2>
                
                <div className="flex flex-col gap-6">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="p-8 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,248,175,0.1)] rounded-[20px] transition-all hover:border-[#D4AF37]/50"
                        >
                            <h3 className="text-xl font-bold text-[#fff8af] mb-3 flex gap-3">
                                <span className="text-[#D4AF37]">Q.</span>
                                {faq.question}
                            </h3>
                            <p className="text-[#e8e8e8] opacity-80 leading-relaxed pl-8">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
