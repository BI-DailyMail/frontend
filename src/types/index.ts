export type Page = 'login' | 'dashboard' | 'inbox' | 'security' | 'darkdata' | 'smartfilter'
export type SecurityLevel = 'safe' | 'warn' | 'danger'

export interface SecurityIssue {
  type: SecurityLevel
  title: string
  desc: string
}

export interface DarkDataItem {
  label: string
  reason: string
}

export interface AnalysisResult {
  subject: string
  summary: string
  security: { level: SecurityLevel; issues: SecurityIssue[] }
  darkdata: DarkDataItem[]
}

export interface MailRecord {
  id: number
  subject: string | null
  content: string
  is_dark: boolean
  dark_reason: string | null
  security_level: SecurityLevel
  user_id: number | null
  created_at: string
}

export interface SpamKeyword {
  id: number
  keyword: string
  is_active: boolean
  created_at: string
}

export interface NavItem {
  label: string
  icon: React.ReactNode
  page?: Page
}
