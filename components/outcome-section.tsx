"use client"

import { CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function OutcomeSection() {
  const { ref, isVisible } = useScrollAnimation()

  const outcomes = [
    "Access to real estate as a liquid, tradeable asset",
    "Steady passive rental income deposited directly to your account",
    "Capital gains from property appreciation over time",
    "Diversification without the burden of high costs or paperwork",
  ]

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">What You Get</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              When you invest with Trick, you unlock a new world of possibilities in real estate.
            </p>
          </div>

          <div className="grid gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 hover:border-primary/50 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="size-6 text-secondary" />
                </div>
                <p className="text-lg text-white leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
