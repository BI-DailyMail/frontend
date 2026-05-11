interface Props {
  label: string
  value: number
  sub: string
  accent?: string
}

const gradientMap: Record<string, { bg: string; border: string; bar: string }> = {
  '#b45309': { bg: 'linear-gradient(135deg, #fffbeb 0%, #fff 100%)', border: '#fde68a', bar: 'linear-gradient(180deg, #f59e0b, #d97706)' },
  '#b91c1c': { bg: 'linear-gradient(135deg, #fef2f2 0%, #fff 100%)', border: '#fecaca', bar: 'linear-gradient(180deg, #f87171, #dc2626)' },
}
const defaultGradient = { bg: 'linear-gradient(135deg, #eff6ff 0%, #fff 100%)', border: '#bfdbfe', bar: 'linear-gradient(180deg, #60a5fa, #2563eb)' }

export default function StatCard({ label, value, sub, accent = '#0f172a' }: Props) {
  const g = gradientMap[accent] ?? defaultGradient
  return (
    <div className="rounded-xl px-5 py-4 relative overflow-hidden border"
      style={{ background: g.bg, borderColor: g.border }}>
      {/* 왼쪽 컬러 바 */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{ background: g.bar }} />
      <p className="text-caption font-medium text-slate-500 uppercase tracking-wide mb-2">{label}</p>
      <p className="text-stat font-bold leading-none mb-1" style={{ color: accent === '#0f172a' ? '#1d4ed8' : accent }}>{value}</p>
      <p className="text-caption text-slate-400">{sub}</p>
    </div>
  )
}
