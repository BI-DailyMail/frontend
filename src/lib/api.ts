import type { AnalysisResult } from '../types'

const buildPrompt = (text: string) => `아래 이메일을 분석해서 반드시 JSON만 반환하세요. 다른 텍스트나 마크다운 없이 JSON만.

{
  "summary": "메일 전체 내용을 2-3문장으로 요약",
  "security": {
    "level": "safe/warn/danger",
    "issues": [
      { "type": "warn/danger/safe", "title": "항목명", "desc": "왜 수상한지 구체적 이유" }
    ]
  },
  "darkdata": [
    { "label": "발견된 항목 이름", "reason": "이 항목이 다크 데이터로 분류된 구체적 이유" }
  ]
}

이메일:
${text}`

export async function analyzeMail(text: string): Promise<AnalysisResult> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{ role: 'user', content: buildPrompt(text) }],
    }),
  })

  if (!response.ok) throw new Error(`API ${response.status}`)

  const data = await response.json()
  const raw = data.content[0].text.replace(/```json|```/g, '').trim()
  return JSON.parse(raw) as AnalysisResult
}
