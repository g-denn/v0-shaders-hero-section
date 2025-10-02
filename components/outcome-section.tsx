import { CheckCircle2 } from "lucide-react"

export function OutcomeSection() {
  const outcomes = [
    "Access to real estate as a liquid, tradeable asset",
    "Steady passive rental income deposited directly to your account",
    "Capital gains from property appreciation over time",
    "Diversification without the burden of high costs or paperwork",
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">What You Get</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              When you invest with Trick, you unlock a new world of possibilities in real estate.
            </p>
          </div>

          <div className="grid gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="size-6 text-secondary" />
                </div>
                <p className="text-lg text-foreground leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
