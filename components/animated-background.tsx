"use client"

import Spline from "@splinetool/react-spline/next"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Spline scene="https://prod.spline.design/gxgXLmiwIASvMdmE/scene.splinecode" />
    </div>
  )
}
