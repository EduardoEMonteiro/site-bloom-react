import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <Image
        src="/images/logo.webp"
        alt="Bloom por Tamires Sousa"
        width={120}
        height={120}
        className="mb-8"
        style={{ filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))' }}
        priority
      />

      <p className="text-[#D4AF37] font-bold text-lg mb-2 tracking-widest uppercase">404</p>
      <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent">
        Página não encontrada
      </h1>
      <p className="text-[rgba(232,232,232,0.7)] text-lg mb-10 max-w-[400px] leading-relaxed">
        Essa página não existe, mas o Bloom por Tamires Sousa está aqui para transformar seu cabelo em São João del-Rei.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="bg-[#D4AF37] text-black font-bold px-8 py-3 rounded-full hover:bg-[#fff8af] transition-colors"
        >
          Voltar para o início
        </Link>
        <a
          href="https://wa.me/5532998063010?text=Olá%20Tamires%2C%20quero%20agendar%20um%20horário"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#D4AF37] text-[#D4AF37] font-bold px-8 py-3 rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </main>
  )
}
