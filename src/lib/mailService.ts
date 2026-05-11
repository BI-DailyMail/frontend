import { supabase } from './supabase'
import type { MailRecord, AnalysisResult } from '../types'

export async function fetchMails(): Promise<MailRecord[]> {
  const { data, error } = await supabase
    .from('tb_mail')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as MailRecord[]
}

export async function fetchProblematicMails(): Promise<MailRecord[]> {
  const { data, error } = await supabase
    .from('tb_mail')
    .select('*')
    .or('security_level.neq.safe,is_dark.eq.true')
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as MailRecord[]
}

export async function saveMail(content: string, result: AnalysisResult): Promise<MailRecord> {
  const { data, error } = await supabase
    .from('tb_mail')
    .insert({
      content,
      is_dark: result.darkdata.length > 0,
      dark_reason: buildDarkReason(result) || null,
      security_level: result.security.level,
    })
    .select()
    .single()

  if (error) throw error
  return data as MailRecord
}

function buildDarkReason(result: AnalysisResult): string {
  const parts: string[] = []
  result.security.issues
    .filter(i => i.type !== 'safe')
    .forEach(i => parts.push(`${i.title}: ${i.desc}`))
  result.darkdata
    .forEach(d => parts.push(`${d.label}: ${d.reason}`))
  return parts.join('\n')
}
