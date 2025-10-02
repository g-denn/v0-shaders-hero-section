"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 animate-gradient-colors bg-gradient-mesh" />
    </div>
  )
}
