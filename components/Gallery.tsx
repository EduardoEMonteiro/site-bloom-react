'use client'

import { TeamCarousel } from '@/components/TeamCarousel'
import { useEffect, useState } from 'react'

const galleryImages = [
  { id: '1', name: 'Portfólio de trabalhos - Bloom por Tamires Sousa', role: '', image: '/images/gallery-1.webp' },
  { id: '2', name: 'Portfólio de trabalhos - Bloom por Tamires Sousa', role: '', image: '/images/gallery-2.webp' },
  { id: '3', name: 'Portfólio de trabalhos - Bloom por Tamires Sousa', role: '', image: '/images/gallery-3.webp' },
  { id: '4', name: 'Portfólio de trabalhos - Bloom por Tamires Sousa', role: '', image: '/images/gallery-4.webp' },
  { id: '5', name: 'Portfólio de trabalhos - Bloom por Tamires Sousa', role: '', image: '/images/gallery-5.webp' },
  { id: '6', name: 'Portfólio de trabalhos - Bloom por Tamires Sousa', role: '', image: '/images/gallery-6.webp' },
  { id: '7', name: 'Portfólio de trabalhos - Bloom por Tamires Sousa', role: '', image: '/images/gallery-7.webp' },
]

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
        setDimensions({ width: 300, height: 400, visible: 2 })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <section className="py-20 px-[5%] bg-gradient-to-b from-[#012220] via-black to-[#012220] relative">
      <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-center mb-0 bg-gradient-to-r from-[#fff8af] to-[#D4AF37] bg-clip-text text-transparent relative">
        Portfólio
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-[#D4AF37]"></span>
      </h2>

      <div className="-mt-30">
        <TeamCarousel
          members={galleryImages}
          background="transparent"
          cardWidth={dimensions.width}
          cardHeight={dimensions.height}
          cardRadius={20}
          showArrows={true}
          showDots={true}
          autoPlay={4000}
          pauseOnHover={true}
          visibleCards={dimensions.visible}
          sideCardScale={0.9}
          sideCardOpacity={0.7}
          grayscaleEffect={true}
          animationDuration={800}
          keyboardNavigation={true}
          touchNavigation={true}
          infoPosition="none"
          infoTextColor="#D4AF37"
          className="py-0"
        />
      </div>
    </section>
  )
}