import { supabase } from './supabase'
import type { SpamKeyword } from '../types'

export async function fetchKeywords(): Promise<SpamKeyword[]> {
  const { data, error } = await supabase
    .from('tb_spam_keywords')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as SpamKeyword[]
}

export async function addKeyword(keyword: string): Promise<SpamKeyword> {
  const { data, error } = await supabase
    .from('tb_spam_keywords')
    .insert({ keyword: keyword.trim(), is_active: true })
    .select()
    .single()

  if (error) throw error
  return data as SpamKeyword
}

export async function toggleKeyword(id: number, is_active: boolean): Promise<void> {
  const { error } = await supabase
    .from('tb_spam_keywords')
    .update({ is_active })
    .eq('id', id)

  if (error) throw error
}

export async function deleteKeyword(id: number): Promise<void> {
  const { error } = await supabase
    .from('tb_spam_keywords')
    .delete()
    .eq('id', id)

  if (error) throw error
}
