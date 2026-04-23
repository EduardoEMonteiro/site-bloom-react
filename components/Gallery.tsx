'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { TeamCarousel } from '@/components/TeamCarousel'
import { WhatsAppIcon } from '@/components/icons'

const galleryImages = [
  {
    id: '1',
    name: 'Cabelo ruivo acobreado feito por Tamires Sousa no Bloom em São João del-Rei',
    role: '',
    image: '/images/gallery-1.webp',
  },
  {
    id: '2',
    name: 'Loiro saudável feito por Tamires Sousa no Bloom em São João del-Rei',
    role: '',
    image: '/images/gallery-2.webp',
  },
  {
    id: '3',
    name: 'Cabelo colorido criativo feito por Tamires Sousa no Bloom em São João del-Rei',
    role: '',
    image: '/images/gallery-3.webp',
  },
  {
    id: '4',
    name: 'Mechas personalizadas feitas por Tamires Sousa no Bloom em São João del-Rei',
    role: '',
    image: '/images/gallery-4.webp',
  },
  {
    id: '5',
    name: 'Ruivo vibrante feito por Tamires Sousa no Bloom em São João del-Rei',
    role: '',
    image: '/images/gallery-5.webp',
  },
  {
    id: '6',
    name: 'Loiro platinado saudável feito por Tamires Sousa no Bloom em São João del-Rei',
    role: '',
    image: '/images/gallery-6.webp',
  },
  {
    id: '7',
    name: 'Cobertura de fios brancos feita por Tamires Sousa no Bloom em São João del-Rei',
    role: '',
    image: '/images/gallery-7.webp',
  },
]

const whatsappHref =
  'https://wa.me/5532998063010?text=Olá%20Tamires!%20Vi%20os%20resultados%20no%20site%20e%20quero%20marcar%20uma%20avaliação.'

export function Gallery() {
  const [dimensions, setDimensions] = useState({
    width: 300,
    height: 400,
    visible: 2,
  })

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth
      if (width < 640) {
        setDimensions({ width: 250, height: 350, visible: 1 })
      } else if (width < 1024) {
        setDimensions({ width: 280, height: 380, visible: 2 })
      } else {
        setDimensions({ width: 310, height: 430, visible: 2 })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <section id="portfolio" className="bg-gradient-to-b from-black via-[#061b19] to-black px-[5%] py-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-2 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Resultados reais</p>
            <h2 className="max-w-[780px] text-4xl font-black leading-tight text-[#fff8af] md:text-6xl">
              A cor aparece melhor quando o cabelo também está bem cuidado.
            </h2>
          </div>
          <Link
            href="/galeria"
            className="w-fit rounded-full border border-[#D4AF37]/55 px-6 py-3 font-bold text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black"
          >
            Abrir galeria
          </Link>
        </div>

        <TeamCarousel
          members={galleryImages}
          background="transparent"
          cardWidth={dimensions.width}
          cardHeight={dimensions.height}
          cardRadius={24}
          showArrows
          showDots
          autoPlay={4200}
          pauseOnHover
          visibleCards={dimensions.visible}
          sideCardScale={0.9}
          sideCardOpacity={0.72}
          grayscaleEffect={false}
          animationDuration={800}
          keyboardNavigation
          touchNavigation
          infoPosition="none"
          infoTextColor="#D4AF37"
          className="min-h-[560px] py-0 md:min-h-[640px]"
        />

        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[28px] border border-[#D4AF37]/18 bg-black/35 p-6 md:flex-row md:items-center md:p-8">
          <div>
            <h3 className="text-2xl font-black text-[#fff8af]">Quer entender o que funciona no seu cabelo?</h3>
            <p className="mt-2 max-w-[720px] text-[rgba(232,232,232,0.76)]">
              Envie uma mensagem com uma foto atual do seu cabelo e uma referência do que você gostaria.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 font-black text-black transition-colors hover:bg-[#fff8af]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
