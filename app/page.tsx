import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemOpportunity } from "@/components/problem-opportunity"
import { SolutionSection } from "@/components/solution-section"
import { ValuePillars } from "@/components/value-pillars"
import { HighlightSection } from "@/components/highlight-section"
import { OutcomeSection } from "@/components/outcome-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { OrbitingShapes } from "@/components/orbiting-shapes"

export default function TrickLandingPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <OrbitingShapes />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ProblemOpportunity />
          <SolutionSection />
          <ValuePillars />
          <HighlightSection />
          <OutcomeSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
