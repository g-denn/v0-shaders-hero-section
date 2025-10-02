import { SignupForm } from "@/components/signup-form"
import { AnimatedBackground } from "@/components/animated-background"
import { OrbitingShapes } from "@/components/orbiting-shapes"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <OrbitingShapes />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Back button */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Sign up content */}
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-glow-purple">Join the Waitlist</h1>
            <p className="text-lg text-muted-foreground">
              Be the first to know when we launch. Enter your email below to get early access.
            </p>
          </div>

          <SignupForm />
        </div>
      </div>
    </div>
  )
}
