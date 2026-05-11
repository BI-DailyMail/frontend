type Color = 'blue' | 'green' | 'amber' | 'red' | 'slate'

interface Props {
  children: React.ReactNode
  color?: Color
  dot?: boolean
}

const colorClasses: Record<Color, string> = {
  blue:  'bg-blue-50 text-blue-700',
  green: 'bg-safe-muted text-safe',
  amber: 'bg-warn-muted text-warn',
  red:   'bg-danger-muted text-danger',
  slate: 'bg-surface text-slate-600',
}

const dotColors: Record<Color, string> = {
  blue:  'bg-blue-500',
  green: 'bg-green-500',
  amber: 'bg-amber-400',
  red:   'bg-red-500',
  slate: 'bg-slate-400',
}

export default function Badge({ children, color = 'slate', dot }: Props) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-caption font-medium px-2.5 py-1 rounded-full ${colorClasses[color]}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[color]}`} />}
      {children}
    </span>
  )
}
