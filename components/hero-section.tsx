"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TypingText } from "@/components/typing-text"

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-black/60 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-purple mb-8">
            <span className="size-2 rounded-full bg-accent animate-pulse glow-green" />
            <span className="text-sm font-medium text-white">Now accepting investments from RM100</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Turn Property into a{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow-purple">
              <TypingText text="Digital Asset Class" speed={80} />
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl lg:text-2xl text-white/80 mb-10 text-balance max-w-3xl mx-auto leading-relaxed">
            Invest in real estate from RM100, earn rental income and capital gains, and exit anytime.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="text-base px-8 h-12 group glow-purple bg-gradient-to-r from-primary to-secondary hover:glow-pink transition-all"
            >
              Start Investing
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-12 glass border-primary/30 bg-transparent text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="size-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Blockchain Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="size-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Regulated Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="size-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>AI-Powered Insights</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 size-72 bg-primary/30 rounded-full blur-3xl glow-purple pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 size-96 bg-secondary/30 rounded-full blur-3xl glow-pink pointer-events-none animate-pulse-slow animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-accent/20 rounded-full blur-3xl glow-green pointer-events-none" />
    </section>
  )
}
