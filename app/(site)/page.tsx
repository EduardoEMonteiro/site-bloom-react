import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Gallery } from '@/components/Gallery'
import { Spotify } from '@/components/Spotify'
import { SectionDivider } from '@/components/SectionDivider'
import { ReviewsSection } from '@/components/ui/demo'
import { FAQ } from '@/components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <ReviewsSection />
      <SectionDivider />
      <Spotify />
    </main>
  )
}
