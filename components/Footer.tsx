'use client'

import Image from 'next/image'
import { Phone, MapPin } from 'lucide-react'
import { WhatsAppIcon, InstagramIcon } from '@/components/icons'

export function Footer() {
    return (
        <footer className="py-12 md:py-16 px-[5%] bg-[#012220] border-t border-[rgba(255,248,175,0.1)]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-14 lg:gap-16 mb-12 md:mb-16">

                    {/* Logo Section */}
                    <div className="flex flex-col items-center text-center lg:col-span-1">
                        <Image
                            src="/images/footer-logo.png"
                            alt="Bloom por Tamires Sousa - Especialista em Coloração"
                            width={140}
                            height={140}
                            className="mb-6"
                            style={{ filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))' }}
                        />
                        <p className="text-[rgba(232,232,232,0.7)] text-lg">
                            Cor, mechas e tratamento capilar com avaliação do fio em São João del-Rei.
                        </p>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 className="text-[#D4AF37] mb-8 text-3xl font-bold">Contato</h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+5532998063010"
                                className="flex items-center gap-3 text-[rgba(232,232,232,0.7)] hover:text-[#D4AF37] transition-all hover:pl-2 text-lg"
                            >
                                <Phone className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                                <span>(32) 99806-3010</span>
                            </a>
                            <a
                                href="https://wa.me/5532998063010"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[rgba(232,232,232,0.7)] hover:text-[#D4AF37] transition-all hover:pl-2 text-lg"
                            >
                                <WhatsAppIcon className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                                <span>Marcar avaliação</span>
                            </a>
                        </div>
                    </div>

                    {/* Localização */}
                    <div>
                        <h4 className="text-[#D4AF37] mb-8 text-3xl font-bold">Localização</h4>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Rua+Antônio+Rocha,+55+Centro+São+João+del+Rei+MG"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 text-[rgba(232,232,232,0.7)] hover:text-[#D4AF37] transition-all hover:pl-2 text-lg"
                        >
                            <MapPin className="text-[#D4AF37] w-5 h-5 flex-shrink-0 mt-1" />
                            <span>
                                Rua Antônio Rocha, 55<br />
                                Centro, São João del-Rei — MG
                            </span>
                        </a>
                    </div>

                    {/* Redes Sociais */}
                    <div>
                        <h4 className="text-[#D4AF37] mb-8 text-3xl font-bold">Redes Sociais</h4>
                        <div className="space-y-4">
                            <a
                                href="https://instagram.com/bloomhairts"
                                target="_blank"
                                rel="me noopener noreferrer"
                                className="flex items-center gap-3 text-[rgba(232,232,232,0.7)] hover:text-[#D4AF37] transition-all hover:pl-2 text-lg"
                            >
                                <InstagramIcon className="text-[#D4AF37] w-5 h-5 flex-shrink-0" />
                                <span>@bloomhairts</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-[rgba(255,248,175,0.1)]">
                    <p className="text-[rgba(232,232,232,0.5)] text-base">
                        © {new Date().getFullYear()} Bloom por Tamires Sousa. Todos os direitos reservados.
                    </p>
                    <p className="text-[rgba(232,232,232,0.5)] text-base mt-2 flex items-center justify-center gap-1">
                        Desenvolvido por{' '}
                        <a
                            href="https://aurago.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D4AF37] font-bold hover:underline"
                        >
                            Aura Go
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
