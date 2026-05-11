import type { AnalysisResult as Result, SecurityIssue, DarkDataItem, SecurityLevel } from '../../../types'
import Badge from '../../ui/Badge'

interface Props {
  result: Result
}

export default function AnalysisResult({ result }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      <SummaryCard summary={result.summary} />
      <SecurityCard level={result.security.level} issues={result.security.issues} />
      <DarkDataCard items={result.darkdata} />
    </div>
  )
}

function SummaryCard({ summary }: { summary: string }) {
  return (
    <div className="md:col-span-2 bg-white border border-slate-200 rounded-xl px-5 py-5 md:px-6 fade-in">
      <ResultCardHeader
        iconBg="bg-blue-50"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round">
            <line x1="21" y1="6" x2="3" y2="6" /><line x1="15" y1="12" x2="3" y2="12" /><line x1="21" y1="18" x2="3" y2="18" />
          </svg>
        }
        title="메일 요약"
        subtitle="Contextual Summarization"
        badge={<Badge color="blue">분석 완료</Badge>}
      />
      <p className="text-body text-slate-700 leading-[1.8] bg-field rounded-lg px-4 py-3 border border-slate-200">
        {summary}
      </p>
    </div>
  )
}

function SecurityCard({ level, issues }: { level: SecurityLevel; issues: SecurityIssue[] }) {
  const { label, color } = secBadge(level)
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-5 py-5 md:px-6 fade-in" style={{ animationDelay: '60ms' }}>
      <ResultCardHeader
        iconBg="bg-danger-muted"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        }
        title="보안 분석"
        subtitle="Phishing Detection"
        badge={<Badge color={color}>{label}</Badge>}
      />
      <div className="space-y-2">
        {issues.map((issue, i) => <SecurityIssueItem key={i} issue={issue} />)}
      </div>
    </div>
  )
}

function DarkDataCard({ items }: { items: DarkDataItem[] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-5 py-5 md:px-6 fade-in" style={{ animationDelay: '120ms' }}>
      <ResultCardHeader
        iconBg="bg-warn-muted"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        }
        title="다크 데이터"
        subtitle="Hidden Data Discovery"
        badge={<Badge color={items.length > 0 ? 'amber' : 'slate'}>{items.length > 0 ? `${items.length}개 발견` : '없음'}</Badge>}
      />
      {items.length === 0 ? (
        <p className="text-body text-slate-400 text-center py-4">발견된 다크 데이터가 없습니다</p>
      ) : (
        <div className="space-y-2">
          {items.map((item, i) => <DarkDataRow key={i} item={item} />)}
        </div>
      )}
    </div>
  )
}

function ResultCardHeader({ iconBg, icon, title, subtitle, badge }: {
  iconBg: string; icon: React.ReactNode; title: string; subtitle: string; badge: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2.5">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>{icon}</div>
        <div>
          <p className="text-body font-semibold text-dark">{title}</p>
          <p className="text-caption text-slate-400 mt-0.5 hidden sm:block">{subtitle}</p>
        </div>
      </div>
      {badge}
    </div>
  )
}

function SecurityIssueItem({ issue }: { issue: SecurityIssue }) {
  const map = {
    safe:   { bg: 'bg-safe-muted', textColor: 'text-safe', stroke: '#16a34a', check: true },
    warn:   { bg: 'bg-warn-muted', textColor: 'text-warn', stroke: '#d97706', check: false },
    danger: { bg: 'bg-danger-muted', textColor: 'text-danger', stroke: '#dc2626', check: false },
  }
  const s = map[issue.type]
  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg ${s.bg}`}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={s.stroke} strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-0.5">
        {s.check
          ? <polyline points="20 6 9 17 4 12" />
          : <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>
        }
      </svg>
      <div>
        <p className={`text-xs font-semibold ${s.textColor}`}>{issue.title}</p>
        <p className="text-caption text-slate-500 mt-0.5 leading-relaxed">{issue.desc}</p>
      </div>
    </div>
  )
}

function DarkDataRow({ item }: { item: DarkDataItem }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-warn-muted">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-0.5">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <div>
        <p className="text-xs font-semibold text-warn">{item.label}</p>
        <p className="text-caption text-slate-500 mt-0.5 leading-relaxed">{item.reason}</p>
      </div>
    </div>
  )
}

function secBadge(level: SecurityLevel): { label: string; color: 'green' | 'amber' | 'red' } {
  const map: Record<SecurityLevel, { label: string; color: 'green' | 'amber' | 'red' }> = {
    safe:   { label: '안전', color: 'green' },
    warn:   { label: '주의', color: 'amber' },
    danger: { label: '위험', color: 'red' },
  }
  return map[level]
}
