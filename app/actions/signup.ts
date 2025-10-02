"use server"

import { addEmailToAirtable } from "@/lib/airtable"

export async function submitEmail(email: string) {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, error: "Invalid email format" }
    }

    await addEmailToAirtable(email)
    return { success: true }
  } catch (error) {
    console.error("Error submitting email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to sign up. Please try again.",
    }
  }
}
