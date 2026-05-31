import type { MailRecord } from '../types'

const API_URL = import.meta.env.VITE_API_URL ?? ''

export async function fetchMails(): Promise<MailRecord[]> {
  const response = await fetch(`${API_URL}/api/mails`)
  if (!response.ok) throw new Error(`API ${response.status}`)
  return response.json()
}

export async function fetchProblematicMails(): Promise<MailRecord[]> {
  const response = await fetch(`${API_URL}/api/mails/problems`)
  if (!response.ok) throw new Error(`API ${response.status}`)
  return response.json()
}
