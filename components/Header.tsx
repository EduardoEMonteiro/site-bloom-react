'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { WhatsAppIcon, InstagramIcon } from '@/components/icons'

const navLinks = [
    { href: '/servicos', label: 'Serviços' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/contato', label: 'Contato' },
]

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 w-full z-[1000] px-[5%] transition-all duration-500 ${scrolled
                ? 'py-4 bg-[rgba(1,34,32,0.95)] shadow-[0_10px_40px_rgba(0,0,0,0.3)]'
                : 'py-6 bg-[rgba(1,34,32,0.3)]'
                } backdrop-blur-[20px] border-b border-[rgba(255,248,175,0.1)]`}
        >
            <div className="max-w-[1400px] mx-auto flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/images/logo.webp"
                        alt="Bloom por Tamires Sousa, Especialista em Coloração em São João del-Rei"
                        width={100}
                        height={100}
                        className={`relative z-10 w-auto transition-all duration-500 ${scrolled
                            ? 'h-[70px] sm:h-[85px] md:h-[100px] -mt-[10px] -mb-[10px] sm:-mt-[12px] sm:-mb-[12px] md:-mt-[15px] md:-mb-[15px]'
                            : 'h-[80px] sm:h-[90px] md:h-[100px] -mt-[20px] -mb-[20px] sm:-mt-[25px] sm:-mb-[25px] md:-mt-[30px] md:-mb-[30px]'
                            }`}
                        style={{ filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))' }}
                        priority
                        fetchPriority="high"
                        loading="eager"
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navegação principal">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[rgba(232,232,232,0.8)] hover:text-[#D4AF37] transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://instagram.com/bloomhairts"
                        target="_blank"
                        rel="me noopener noreferrer"
                        className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.05)] text-[#e8e8e8] transition-all duration-300 hover:text-[#000000] hover:-translate-y-1 before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:bg-[#D4AF37] before:scale-0 before:transition-transform before:duration-300 before:-z-10 hover:before:scale-100"
                        aria-label="Instagram"
                    >
                        <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://wa.me/5532998063010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.05)] text-[#e8e8e8] transition-all duration-300 hover:text-[#000000] hover:-translate-y-1 before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:bg-[#D4AF37] before:scale-0 before:transition-transform before:duration-300 before:-z-10 hover:before:scale-100"
                        aria-label="WhatsApp"
                    >
                        <WhatsAppIcon className="w-5 h-5" />
                    </a>
                </nav>

                {/* Mobile: ícones + hamburger */}
                <div className="flex md:hidden items-center gap-3">
                    <a
                        href="https://wa.me/5532998063010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.05)] text-[#e8e8e8]"
                        aria-label="WhatsApp"
                    >
                        <WhatsAppIcon className="w-5 h-5" />
                    </a>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.05)] text-[#e8e8e8]"
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <nav
                    className="md:hidden mt-4 pb-4 border-t border-[rgba(255,248,175,0.1)] pt-4 flex flex-col gap-4"
                    aria-label="Menu mobile"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-[rgba(232,232,232,0.8)] hover:text-[#D4AF37] transition-colors text-base font-medium px-2"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    )
}
