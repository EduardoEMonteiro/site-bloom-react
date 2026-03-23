import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import '../globals.css'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bloom por Tamires Sousa — Links',
  description: 'Agende sua avaliação, veja o portfólio e encontre o Bloom por Tamires Sousa em São João del-Rei.',
  robots: { index: false, follow: false },
}

// Layout completamente isolado — sem Header, Footer, LoadingScreen, WhatsAppButton
export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
