interface Props {
  title: string
  subtitle?: string
  onMenuClick?: () => void
}

export default function Topbar({ title, subtitle, onMenuClick }: Props) {
  return (
    <header className="bg-white px-4 md:px-7 py-4 flex items-center justify-between sticky top-0 z-40"
      style={{ borderBottom: '1px solid', borderImage: 'linear-gradient(90deg, #e2e8f0, #bfdbfe 50%, #e2e8f0) 1' }}>
      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-surface transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div>
          <h1 className="text-subhead font-semibold text-dark">{title}</h1>
          {subtitle && <p className="text-xs text-slate-500 mt-0.5 hidden sm:block">{subtitle}</p>}
        </div>
      </div>
    </header>
  )
}
