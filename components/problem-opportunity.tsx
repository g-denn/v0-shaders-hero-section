"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ProblemOpportunity() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Problem */}
          <div className="space-y-6 bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20">
              <span className="text-xs font-semibold text-destructive uppercase tracking-wide">The Problem</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance leading-tight">
              Property ownership is out of reach
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Owning property is out of reach for most Malaysians and young global investors. High upfront costs, heavy
              bank loans, and complicated legal processes keep people locked out.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Even after purchase, properties are illiquid and hard to exit, trapping capital for years.
            </p>
          </div>

          {/* Opportunity */}
          <div className="space-y-6 bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
              <span className="text-xs font-semibold text-secondary uppercase tracking-wide">The Opportunity</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance leading-tight">
              A better way to invest in property
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              People want an affordable way to tap into property markets, diversify across assets, and enjoy both
              passive income and long-term growth.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              They need flexibility, transparency, and the ability to exit when they choose—without the traditional
              barriers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
