export function HighlightSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 lg:p-20 rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 size-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
                Trick turns property into a liquid, transparent, digital asset class.
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">The future of real estate investment is here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
