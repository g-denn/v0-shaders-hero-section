import { DollarSign, TrendingUp, Shield, Brain, Repeat, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ValuePillars() {
  const pillars = [
    {
      icon: DollarSign,
      title: "Affordable Entry & Diversification",
      description: "Invest from RM100, diversify across multiple properties and asset types.",
    },
    {
      icon: TrendingUp,
      title: "Passive Income & Growth",
      description: "Earn rental payouts plus long-term capital appreciation from property value increases.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Independent valuations, escrow protection, and blockchain-verified smart contracts.",
    },
    {
      icon: Brain,
      title: "Smarter Decisions",
      description: "AI-powered forecasts on property values, rental yields, and tenant risk profiles.",
    },
    {
      icon: Repeat,
      title: "Liquidity on Demand",
      description: "Exit anytime with our built-in secondary market—no more locked capital.",
    },
    {
      icon: BookOpen,
      title: "Beginner-Friendly",
      description: "Easy onboarding, auto-invest features, and clear investment calendars.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30" id="features">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Everything you need to invest smarter
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Trick combines cutting-edge technology with real estate expertise to make property investment accessible to
            everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
