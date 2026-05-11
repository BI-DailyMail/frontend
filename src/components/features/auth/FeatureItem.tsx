interface Props {
  icon: React.ReactNode
  title: string
  desc: string
}

export default function FeatureItem({ icon, title, desc }: Props) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-white/85">{title}</p>
        <p className="text-caption text-white/35 mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
