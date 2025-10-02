"use client"

export function OrbitingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orbiting hexagons */}
      <div className="absolute top-1/4 left-1/4 animate-spin-slow">
        <div className="relative size-32">
          <div className="absolute inset-0 rotate-0">
            <div
              className="size-full border-2 border-primary/30 glow-purple"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />
          </div>
        </div>
      </div>

      {/* Floating sphere with gradient */}
      <div className="absolute top-1/3 right-1/4 animate-float">
        <div className="size-48 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 glow-pink blur-xl" />
      </div>

      {/* Geometric cube outline */}
      <div className="absolute bottom-1/4 left-1/3 animate-pulse-slow">
        <div className="size-40 border border-accent/40 glow-green rotate-45" />
      </div>

      {/* Orbiting small spheres */}
      <div className="absolute top-1/2 right-1/3 animate-orbit">
        <div className="size-16 rounded-full bg-gradient-to-r from-secondary to-primary glow-purple" />
      </div>

      {/* Abstract polygon */}
      <div className="absolute bottom-1/3 right-1/4 animate-spin-reverse">
        <div
          className="size-36 border-2 border-secondary/30 glow-pink"
          style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-2/3 left-1/4 size-64 rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/4 right-1/3 size-96 rounded-full bg-gradient-to-tl from-secondary/10 via-primary/10 to-accent/10 blur-3xl animate-pulse-slow animation-delay-2000" />
    </div>
  )
}
