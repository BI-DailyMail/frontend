import type { SpamKeyword } from '../types'

const API_URL = import.meta.env.VITE_API_URL ?? ''

export async function fetchKeywords(): Promise<SpamKeyword[]> {
  const response = await fetch(`${API_URL}/api/keywords`)
  if (!response.ok) throw new Error(`API ${response.status}`)
  return response.json()
}

export async function addKeyword(keyword: string): Promise<SpamKeyword> {
  const response = await fetch(`${API_URL}/api/keywords`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ keyword }),
  })
  if (!response.ok) throw new Error(`API ${response.status}`)
  return response.json()
}

export async function toggleKeyword(id: number, is_active: boolean): Promise<void> {
  const response = await fetch(`${API_URL}/api/keywords/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ is_active }),
  })
  if (!response.ok) throw new Error(`API ${response.status}`)
}

export async function deleteKeyword(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/api/keywords/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) throw new Error(`API ${response.status}`)
}
