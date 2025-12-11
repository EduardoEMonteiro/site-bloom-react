'use client'

import Image from 'next/image'

export function Footer() {
    return (
        <footer className="py-12 md:py-16 px-[5%] bg-[#012220] border-t border-[rgba(255,248,175,0.1)]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-14 lg:gap-16 mb-12 md:mb-16">

                    {/* Logo Section */}
                    <div className="flex flex-col items-center text-center lg:col-span-1">
                        <Image
                            src="/images/footer-logo.png"
                            alt="Bloom Hair Logo"
                            width={140}
                            height={140}
                            className="mb-6"
                            style={{ filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))' }}
                        />
                        <p className="text-[rgba(232,232,232,0.7)] text-lg">
                            Beleza com atitude, estilo com alma.
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
                                <i className="fas fa-phone text-[#D4AF37] w-6 text-xl"></i>
                                <span>(32) 99806-3010</span>
                            </a>
                            <a
                                href="mailto:contato@bloomts.com.br"
                                className="flex items-center gap-3 text-[rgba(232,232,232,0.7)] hover:text-[#D4AF37] transition-all hover:pl-2 text-lg"
                            >
                                <i className="fas fa-envelope text-[#D4AF37] w-6 text-xl"></i>
                                <span>contato@bloomts.com.br</span>
                            </a>
                            <a
                                href="https://wa.me/5532998063010"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[rgba(232,232,232,0.7)] hover:text-[#D4AF37] transition-all hover:pl-2 text-lg"
                            >
                                <i className="fab fa-whatsapp text-[#D4AF37] w-6 text-xl"></i>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Localização */}
                    <div>
                        <h4 className="text-[#D4AF37] mb-8 text-3xl font-bold">Localização</h4>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Rua+Antônio+Rocha,+55+Centro+São+João+Del+Rei+MG"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 text-[rgba(232,232,232,0.7)] hover:text-[#D4AF37] transition-all hover:pl-2 text-lg"
                        >
                            <i className="fas fa-map-marker-alt text-[#D4AF37] w-6 text-xl mt-1"></i>
                            <span>
                                Rua Antônio Rocha, 53<br />
                                Centro, São João Del Rei - MG
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
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[rgba(232,232,232,0.7)] hover:text-[#D4AF37] transition-all hover:pl-2 text-lg"
                            >
                                <i className="fab fa-instagram text-[#D4AF37] w-6 text-xl"></i>
                                <span>Instagram</span>
                            </a>
                            <a
                                href="https://facebook.com/bloomhairts"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[rgba(232,232,232,0.7)] hover:text-[#D4AF37] transition-all hover:pl-2 text-lg"
                            >
                                <i className="fab fa-facebook text-[#D4AF37] w-6 text-xl"></i>
                                <span>Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-[rgba(255,248,175,0.1)]">
                    <p className="text-[rgba(232,232,232,0.5)] text-base">
                        © {new Date().getFullYear()} Bloom por Tamires Sousa. Todos os direitos reservados.
                    </p>
                    <p className="text-[rgba(232,232,232,0.5)] text-base mt-2">
                        Desenvolvido com &#128155; por{' '}
                        <a
                            href="https://aurago.site"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D4AF37] font-bold hover:text-[#fff8af] transition-colors duration-300"
                        >
                            Aura Go
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
