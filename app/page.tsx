import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Gallery } from '@/components/Gallery'
import { Spotify } from '@/components/Spotify'
import { SectionDivider } from '@/components/SectionDivider'
import { ReviewsSection } from '@/components/ui/demo'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <ReviewsSection />
      <SectionDivider />
      <Spotify />
    </main>
  )
}
