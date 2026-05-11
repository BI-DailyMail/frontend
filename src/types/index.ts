export type Page = 'login' | 'dashboard'
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
  summary: string
  security: { level: SecurityLevel; issues: SecurityIssue[] }
  darkdata: DarkDataItem[]
}

export interface NavItem {
  label: string
  icon: React.ReactNode
}
