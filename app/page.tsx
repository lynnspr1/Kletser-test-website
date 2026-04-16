import { HeroSection }   from "@/components/blocks/hero-section"
import { KletserTabs }    from "@/components/blocks/kletser-tabs"
import { ReservationCta } from "@/components/blocks/reservation-cta"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <KletserTabs />
      <ReservationCta />
    </main>
  )
}
