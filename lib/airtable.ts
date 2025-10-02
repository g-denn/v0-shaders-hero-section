export async function addEmailToAirtable(email: string) {
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Signups"

  if (!apiKey || !baseId) {
    throw new Error("Airtable configuration is missing")
  }

  const url = `https://api.airtable.com/v0/${baseId}/${tableName}`

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
    const error = await response.json()
    throw new Error(error.error?.message || "Failed to add email to Airtable")
  }

  return response.json()
}
