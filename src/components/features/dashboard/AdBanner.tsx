import { useState } from 'react'
import { MOCK_ADS, type AdItem } from '../../../lib/mockData'

export default function AdBanner() {
  const [dismissed, setDismissed] = useState<number[]>([])
  const visible = MOCK_ADS.filter(ad => !dismissed.includes(ad.id))

  if (visible.length === 0) return null

  return (
    <section>
      <div className="flex items-center gap-2 mb-2.5">
        <span className="text-hint text-slate-400 uppercase tracking-widest font-semibold">스폰서</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visible.map(ad => (
          <AdCard key={ad.id} ad={ad} onDismiss={() => setDismissed(prev => [...prev, ad.id])} />
        ))}
      </div>
    </section>
  )
}

function AdCard({ ad, onDismiss }: { ad: AdItem; onDismiss: () => void }) {
  return (
    <div className="relative bg-white border border-slate-200 rounded-xl px-4 py-4 flex flex-col gap-3 hover:border-slate-300 hover:shadow-sm transition-all duration-150">
      {/* 광고 뱃지 + 닫기 */}
      <div className="flex items-center justify-between">
        <span className="text-hint font-semibold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-400">광고</span>
        <button
          onClick={onDismiss}
          className="w-5 h-5 flex items-center justify-center rounded text-slate-300 hover:text-slate-500 transition-colors"
          aria-label="광고 닫기"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* 브랜드 */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: ad.iconBg }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ad.iconColor} strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div>
          <p className="text-body font-semibold text-dark leading-tight">{ad.brand}</p>
          <p className="text-hint text-slate-400 mt-0.5">{ad.tagline}</p>
        </div>
      </div>

      {/* 설명 */}
      <p className="text-caption text-slate-500 leading-relaxed">{ad.desc}</p>

      {/* CTA */}
      <button
        className="w-full py-2 rounded-lg text-body font-medium transition-colors duration-150 border border-slate-200 text-slate-600 hover:bg-slate-50"
        style={{ borderColor: ad.iconColor + '40', color: ad.iconColor }}
      >
        {ad.cta} →
      </button>
    </div>
  )
}
