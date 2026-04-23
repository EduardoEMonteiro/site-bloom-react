import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Gallery } from '@/components/Gallery'
import { SectionDivider } from '@/components/SectionDivider'
import { ReviewsSection } from '@/components/ui/demo'
import { FAQ } from '@/components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <About />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <ReviewsSection />
    </main>
  )
}
