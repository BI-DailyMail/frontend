import type { SpamKeyword } from '../types'

const STORAGE_KEY = 'mailmail_keywords'

const DEFAULT_KEYWORDS: SpamKeyword[] = [
  { id: 1, keyword: '무료 수령',       is_active: true,  created_at: '2026-05-20T10:00:00.000Z' },
  { id: 2, keyword: '긴급 처리',       is_active: true,  created_at: '2026-05-20T10:01:00.000Z' },
  { id: 3, keyword: '계좌 정지',       is_active: true,  created_at: '2026-05-20T10:02:00.000Z' },
  { id: 4, keyword: '본인인증',        is_active: true,  created_at: '2026-05-20T10:03:00.000Z' },
  { id: 5, keyword: '당첨',            is_active: true,  created_at: '2026-05-20T10:04:00.000Z' },
  { id: 6, keyword: '무심사 대출',     is_active: true,  created_at: '2026-05-20T10:05:00.000Z' },
  { id: 7, keyword: '비밀번호 재설정', is_active: false, created_at: '2026-05-20T10:06:00.000Z' },
  { id: 8, keyword: '배송비 결제',     is_active: false, created_at: '2026-05-20T10:07:00.000Z' },
]

function load(): SpamKeyword[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as SpamKeyword[]
  } catch {}
  return DEFAULT_KEYWORDS
}

function save(keywords: SpamKeyword[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(keywords))
}

function nextId(keywords: SpamKeyword[]): number {
  return keywords.length > 0 ? Math.max(...keywords.map(k => k.id)) + 1 : 1
}

export async function fetchKeywords(): Promise<SpamKeyword[]> {
  return load()
}

export async function addKeyword(keyword: string): Promise<SpamKeyword> {
  const keywords = load()
  const newKeyword: SpamKeyword = {
    id: nextId(keywords),
    keyword,
    is_active: true,
    created_at: new Date().toISOString(),
  }
  const updated = [newKeyword, ...keywords]
  save(updated)
  return newKeyword
}

export async function toggleKeyword(id: number, is_active: boolean): Promise<void> {
  const updated = load().map(k => k.id === id ? { ...k, is_active } : k)
  save(updated)
}

export async function deleteKeyword(id: number): Promise<void> {
  const updated = load().filter(k => k.id !== id)
  save(updated)
}
