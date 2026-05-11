import type { NavItem } from '../../types'

interface Props {
  mainNav: NavItem[]
  analysisNav: NavItem[]
  open: boolean
  onClose: () => void
}

export default function Sidebar({ mainNav, analysisNav, open, onClose }: Props) {
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-60 bg-dark flex flex-col z-50
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="px-5 pt-6 pb-5 border-b border-white/[0.06] flex items-center justify-between">
          <div>
            <p className="font-serif text-lg font-bold text-white tracking-tight">매일메일</p>
            <p className="text-caption text-white/30 mt-1">AI 이메일 센티널</p>
          </div>
          {/* Close button — mobile only */}
          <button
            onClick={onClose}
            className="lg:hidden w-7 h-7 flex items-center justify-center rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <NavGroup label="메뉴">
            {mainNav.map((item, i) => (
              <NavLink key={item.label} item={item} active={i === 0} onClick={onClose} />
            ))}
          </NavGroup>
          <NavGroup label="분석">
            {analysisNav.map(item => (
              <NavLink key={item.label} item={item} onClick={onClose} />
            ))}
          </NavGroup>
        </nav>

        <div className="px-4 py-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand/15 flex items-center justify-center text-caption font-semibold text-brand-pale shrink-0">
              YH
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white/70 truncate">yewonhong</p>
              <p className="text-hint text-white/30">로그인됨</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

function NavGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="px-2 mb-1.5 text-hint font-semibold text-white/20 uppercase tracking-widest">{label}</p>
      <div className="space-y-0.5">{children}</div>
    </div>
  )
}

function NavLink({ item, active, onClick }: { item: NavItem; active?: boolean; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-body cursor-pointer transition-all duration-150
        ${active
          ? 'bg-brand/10 text-brand-pale'
          : 'text-white/45 hover:bg-white/5 hover:text-white/80'
        }`}
    >
      <span className="shrink-0">{item.icon}</span>
      {item.label}
    </div>
  )
}
