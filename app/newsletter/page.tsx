import { NewsletterForm } from "@/components/newsletter-form"
import { AnimatedBackground } from "@/components/animated-background"

export default function NewsletterPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Subscribe to Our Newsletter</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Stay updated with the latest news, insights, and exclusive offers. Join our community today.
            </p>
          </div>

          <NewsletterForm />

          <p className="text-sm text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </main>
  )
}
