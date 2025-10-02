"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitEmail } from "@/app/actions/signup"

export function SignupForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const result = await submitEmail(email)

      if (result.success) {
        setSuccess(true)
        setEmail("")
      } else {
        setError(result.error || "Failed to sign up. Please try again.")
      }
    } catch (err) {
      console.error("Error submitting email:", err)
      setError("Failed to sign up. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full glass-strong text-foreground placeholder:text-muted-foreground"
            disabled={loading}
          />
        </div>

        <Button type="submit" className="w-full glow-purple" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </Button>

        {success && (
          <div className="p-4 rounded-lg bg-accent/10 border border-accent text-accent text-sm text-center">
            Successfully signed up! We'll be in touch soon.
          </div>
        )}

        {error && (
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive text-destructive text-sm text-center">
            {error}
          </div>
        )}
      </form>
    </div>
  )
}
