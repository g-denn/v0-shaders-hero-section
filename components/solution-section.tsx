export function SolutionSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">The Trick</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
            Fractional property investment, powered by blockchain
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A fractional property investment platform that tokenizes both residential and commercial assets. Start from
            RM100, powered by blockchain smart contracts, AI insights, and a built-in secondary market for liquidity.
          </p>

          {/* Visual representation */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="size-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Real Properties</h3>
              <p className="text-sm text-muted-foreground text-center">
                Residential and commercial assets verified and tokenized
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="size-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <svg className="size-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Blockchain Security</h3>
              <p className="text-sm text-muted-foreground text-center">
                Smart contracts ensure transparent and secure ownership
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="size-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">AI Insights</h3>
              <p className="text-sm text-muted-foreground text-center">
                Data-driven forecasts on values, yields, and tenant risk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
