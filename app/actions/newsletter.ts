"use server"

export async function submitNewsletter(email: string, phone: string) {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, error: "Invalid email format" }
    }

    // Validate phone number (basic validation)
    if (!phone || phone.trim().length < 8) {
      return { success: false, error: "Invalid phone number" }
    }

    // Get Airtable configuration
    const apiKey = process.env.AIRTABLE_API_KEY
    const baseId = process.env.AIRTABLE_BASE_ID
    const tableName = process.env.AIRTABLE_TABLE_NAME || "Newsletter"

    console.log("[v0] Airtable Config Check:", {
      hasApiKey: !!apiKey,
      hasBaseId: !!baseId,
      baseIdFormat: baseId?.substring(0, 3),
      tableName,
    })

    if (!apiKey) {
      throw new Error("AIRTABLE_API_KEY environment variable is not set")
    }

    if (!baseId) {
      throw new Error("AIRTABLE_BASE_ID environment variable is not set")
    }

    // Validate base ID format (should start with 'app')
    if (!baseId.startsWith("app")) {
      throw new Error(
        `Invalid AIRTABLE_BASE_ID format. Expected format: appXXXXXXXXXXXXXX (starts with 'app'), got: ${baseId.substring(0, 10)}...`,
      )
    }

    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`
    console.log("[v0] Airtable URL:", url)

    // Add to Airtable
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Email: email,
          Phone: phone,
          "Created At": new Date().toISOString(),
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Airtable API Error:", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      })

      let errorMessage = "Failed to add to newsletter"
      try {
        const errorJson = JSON.parse(errorText)
        errorMessage = errorJson.error?.message || errorJson.error || errorMessage
      } catch {
        errorMessage = errorText || errorMessage
      }

      throw new Error(errorMessage)
    }

    console.log("[v0] Newsletter subscription successful")
    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting newsletter:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
    }
  }
}
