interface Props {
  label: string
  value: number
  sub: string
  accent?: string
}

export default function StatCard({ label, value, sub, accent = '#0f172a' }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-5 py-4">
      <p className="text-caption font-medium text-slate-500 uppercase tracking-wide mb-2">{label}</p>
      <p className="text-stat font-semibold leading-none mb-1" style={{ color: accent }}>{value}</p>
      <p className="text-caption text-slate-400">{sub}</p>
    </div>
  )
}
