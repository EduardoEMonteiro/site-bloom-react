"use client"

import Image from "next/image"
import { motion } from "motion/react"

const links = [
  {
    id: "agendar",
    label: "Consultoria e Agendamento via WhatsApp",
    href: "https://wa.me/5532998063010?text=Ol%C3%A1%20Tamires!%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20cor.",
    highlight: true,
  },
  {
    id: "portfolio",
    label: "Ver Transformações no Instagram",
    href: "https://instagram.com/bloomhairts",
  },
  {
    id: "endereco",
    label: "Como chegar: Rua Antônio Rocha, 55, SJDR",
    href: "https://www.google.com/maps/search/?api=1&query=Rua+Ant%C3%B4nio+Rocha,+55+Centro+S%C3%A3o+Jo%C3%A3o+Del+Rei+MG",
  },
  {
    id: "site",
    label: "Conheça nosso site",
    href: "https://bloomts.com.br",
  },
]

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-[420px]">

        <header className="flex flex-col items-center text-center mb-10">
          <div className="w-[104px] h-[104px] rounded-full border border-[rgba(255,248,175,0.25)] bg-[rgba(255,255,255,0.05)] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/about.webp"
              alt="Bloom por Tamires Sousa"
              width={104}
              height={104}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <h1 className="mt-6 text-3xl font-black tracking-tight">
            Bloom por Tamires Sousa
          </h1>
          <p className="mt-2 text-sm text-[rgba(232,232,232,0.8)] leading-relaxed">
            Especialista em Colorimetria: Ruivos, Loiros e Cores Criativas.
          </p>
        </header>

        <div className="flex flex-col gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full rounded-2xl px-5 py-4 text-base font-semibold text-center transition-all duration-300 ${
                link.highlight
                  ? "border-2 border-[#D4AF37] bg-[rgba(212,175,55,0.12)] text-[#fff8af] shadow-[0_12px_30px_rgba(212,175,55,0.2)]"
                  : "border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.9)]"
              } hover:-translate-y-1 hover:border-[#D4AF37]`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <footer className="mt-10 text-center text-xs text-[rgba(232,232,232,0.5)]">
          <p className="font-semibold tracking-wide text-[rgba(232,232,232,0.6)]">
            Schwarzkopf Professional · Gloss Express Expert
          </p>
          <p className="mt-1">São João del-Rei, MG</p>
        </footer>

      </div>
    </main>
  )
}
