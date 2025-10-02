"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitNewsletter } from "@/app/actions/newsletter"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const result = await submitNewsletter(email, phone)

    if (result.success) {
      setMessage({ type: "success", text: "Successfully subscribed to newsletter!" })
      setEmail("")
      setPhone("")
    } else {
      setMessage({ type: "error", text: result.error || "Something went wrong" })
    }

    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-black/50 border-border"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+60 12-345 6789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full bg-black/50 border-border"
            />
          </div>
        </div>

        {message && (
          <div
            className={`p-4 rounded-lg text-sm ${
              message.type === "success"
                ? "bg-green-500/10 text-green-500 border border-green-500/20"
                : "bg-red-500/10 text-red-500 border border-red-500/20"
            }`}
          >
            {message.text}
          </div>
        )}

        <Button type="submit" disabled={isLoading} className="w-full" size="lg">
          {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
        </Button>
      </form>
    </div>
  )
}
