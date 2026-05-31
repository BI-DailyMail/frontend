import type { AnalysisResult } from '../types'

const API_URL = import.meta.env.VITE_API_URL ?? ''

export async function analyzeMail(text: string): Promise<AnalysisResult> {
  const response = await fetch(`${API_URL}/api/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: text }),
  })

  if (!response.ok) throw new Error(`API ${response.status}`)

  return response.json() as Promise<AnalysisResult>
}
