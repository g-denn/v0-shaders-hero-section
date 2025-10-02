export async function addEmailToAirtable(email: string) {
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Signups"

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

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        Email: email,
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

    let errorMessage = "Failed to add email to Airtable"
    try {
      const errorJson = JSON.parse(errorText)
      errorMessage = errorJson.error?.message || errorJson.error || errorMessage
    } catch {
      errorMessage = errorText || errorMessage
    }

    throw new Error(errorMessage)
  }

  console.log("[v0] Email added to Airtable successfully")
  return response.json()
}
