import { useState } from 'react'

interface AdItem {
  id: number
  brand: string
  tagline: string
  desc: string
  cta: string
  banner: React.ReactNode
}

const ADS: AdItem[] = [
  {
    id: 1,
    brand: 'SecureVault Pro',
    tagline: '기업 메일 암호화 솔루션',
    desc: '피싱·스팸으로부터 조직의 이메일을 완벽하게 보호하세요. 무료 14일 체험 제공.',
    cta: '무료 체험 시작',
    banner: (
      <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-lg">
        <defs>
          <linearGradient id="g1a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
          <linearGradient id="g1b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="320" height="120" rx="10" fill="url(#g1a)" />
        {/* 배경 장식 원 */}
        <circle cx="260" cy="20" r="60" fill="url(#g1b)" />
        <circle cx="290" cy="100" r="40" fill="#0ea5e9" fillOpacity="0.08" />
        {/* 방패 아이콘 */}
        <g transform="translate(24, 28)">
          <path d="M32 0L0 12v20c0 18.5 13.7 35.8 32 40 18.3-4.2 32-21.5 32-40V12L32 0z" fill="#0ea5e9" fillOpacity="0.2" />
          <path d="M32 4L4 14.4v17.2c0 15.9 11.7 30.8 28 34.4 16.3-3.6 28-18.5 28-34.4V14.4L32 4z" fill="none" stroke="#38bdf8" strokeWidth="2" />
          <polyline points="20,32 28,40 44,24" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {/* 텍스트 */}
        <text x="96" y="46" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="white">SecureVault Pro</text>
        <text x="96" y="64" fontFamily="sans-serif" fontSize="11" fill="#94a3b8">기업 메일 암호화 솔루션</text>
        {/* 태그들 */}
        <rect x="96" y="76" width="52" height="18" rx="9" fill="#0ea5e9" fillOpacity="0.2" />
        <text x="122" y="89" fontFamily="sans-serif" fontSize="10" fill="#38bdf8" textAnchor="middle">암호화</text>
        <rect x="154" y="76" width="52" height="18" rx="9" fill="#0ea5e9" fillOpacity="0.2" />
        <text x="180" y="89" fontFamily="sans-serif" fontSize="10" fill="#38bdf8" textAnchor="middle">피싱 차단</text>
        <rect x="212" y="76" width="52" height="18" rx="9" fill="#0ea5e9" fillOpacity="0.2" />
        <text x="238" y="89" fontFamily="sans-serif" fontSize="10" fill="#38bdf8" textAnchor="middle">14일 무료</text>
        {/* 하단 구분선 */}
        <line x1="24" y1="106" x2="296" y2="106" stroke="#1e40af" strokeOpacity="0.4" strokeWidth="1" />
        <text x="24" y="116" fontFamily="sans-serif" fontSize="9" fill="#475569">AD · 스폰서 광고</text>
      </svg>
    ),
  },
  {
    id: 2,
    brand: 'DataShield 기업보험',
    tagline: '개인정보 유출 사고 대비',
    desc: '다크데이터·개인정보 유출 시 법적 비용·배상금을 보장합니다. 중소기업 특화 플랜.',
    cta: '보험료 견적 받기',
    banner: (
      <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-lg">
        <defs>
          <linearGradient id="g2a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#052e16" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
          <linearGradient id="g2b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="320" height="120" rx="10" fill="url(#g2a)" />
        <circle cx="270" cy="15" r="65" fill="url(#g2b)" />
        <circle cx="40" cy="100" r="35" fill="#16a34a" fillOpacity="0.1" />
        {/* 우산 아이콘 */}
        <g transform="translate(22, 25)">
          <path d="M36 8 C20 8 8 20 8 36 L64 36 C64 20 52 8 36 8z" fill="#16a34a" fillOpacity="0.3" />
          <path d="M36 8 C20 8 8 20 8 36 L64 36 C64 20 52 8 36 8z" fill="none" stroke="#4ade80" strokeWidth="2" />
          <line x1="36" y1="36" x2="36" y2="56" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 56 Q30 62 36 62 Q42 62 42 56" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="36" x2="64" y2="36" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.5" />
        </g>
        <text x="96" y="46" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="white">DataShield 기업보험</text>
        <text x="96" y="64" fontFamily="sans-serif" fontSize="11" fill="#86efac">개인정보 유출 사고 대비</text>
        {/* 수치 강조 */}
        <rect x="96" y="74" width="180" height="22" rx="6" fill="#15803d" fillOpacity="0.3" />
        <text x="106" y="89" fontFamily="sans-serif" fontSize="11" fill="#4ade80" fontWeight="600">최대 5억원 보장</text>
        <text x="220" y="89" fontFamily="sans-serif" fontSize="10" fill="#86efac">· 중소기업 특화</text>
        <line x1="24" y1="106" x2="296" y2="106" stroke="#166534" strokeOpacity="0.5" strokeWidth="1" />
        <text x="24" y="116" fontFamily="sans-serif" fontSize="9" fill="#475569">AD · 스폰서 광고</text>
      </svg>
    ),
  },
  {
    id: 3,
    brand: 'ComplianceAI',
    tagline: '개인정보보호법 자동 점검',
    desc: '메일·문서 내 민감정보를 AI가 실시간 탐지하고 컴플라이언스 리포트를 자동 생성합니다.',
    cta: '데모 신청',
    banner: (
      <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-lg">
        <defs>
          <linearGradient id="g3a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1c0a00" />
            <stop offset="100%" stopColor="#431407" />
          </linearGradient>
          <linearGradient id="g3b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="320" height="120" rx="10" fill="url(#g3a)" />
        <circle cx="265" cy="18" r="62" fill="url(#g3b)" />
        <circle cx="30" cy="95" r="40" fill="#ea580c" fillOpacity="0.08" />
        {/* AI 탐색 아이콘 */}
        <g transform="translate(20, 24)">
          <circle cx="30" cy="30" r="22" fill="none" stroke="#fb923c" strokeWidth="2" />
          <circle cx="30" cy="30" r="14" fill="#ea580c" fillOpacity="0.2" />
          <circle cx="30" cy="30" r="5" fill="#fb923c" />
          {/* 스캔 라인 */}
          <line x1="30" y1="8" x2="30" y2="16" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="44" x2="30" y2="52" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="30" x2="16" y2="30" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
          <line x1="44" y1="30" x2="52" y2="30" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
          <line x1="48" y1="48" x2="58" y2="58" stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <text x="96" y="46" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="white">ComplianceAI</text>
        <text x="96" y="64" fontFamily="sans-serif" fontSize="11" fill="#fdba74">개인정보보호법 자동 점검</text>
        {/* 퍼센트 */}
        <text x="96" y="86" fontFamily="sans-serif" fontSize="20" fontWeight="800" fill="#fb923c">99.2%</text>
        <text x="136" y="86" fontFamily="sans-serif" fontSize="11" fill="#fdba74"> 탐지 정확도</text>
        <line x1="24" y1="106" x2="296" y2="106" stroke="#7c2d12" strokeOpacity="0.5" strokeWidth="1" />
        <text x="24" y="116" fontFamily="sans-serif" fontSize="9" fill="#475569">AD · 스폰서 광고</text>
      </svg>
    ),
  },
]

export default function AdBanner() {
  const [dismissed, setDismissed] = useState<number[]>([])
  const visible = ADS.filter(ad => !dismissed.includes(ad.id))

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
    <div className="relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-sm transition-all duration-150 flex flex-col">
      {/* 닫기 버튼 */}
      <button
        onClick={onDismiss}
        className="absolute top-2 right-2 z-10 w-5 h-5 flex items-center justify-center rounded bg-black/30 text-white/70 hover:bg-black/50 hover:text-white transition-colors"
        aria-label="광고 닫기"
      >
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* SVG 배너 이미지 */}
      {ad.banner}

      {/* 하단 정보 */}
      <div className="px-4 py-3 flex flex-col gap-2 flex-1">
        <p className="text-caption text-slate-500 leading-relaxed">{ad.desc}</p>
        <button className="w-full py-1.5 rounded-lg text-body font-medium bg-slate-900 text-white hover:bg-slate-700 transition-colors duration-150 mt-auto">
          {ad.cta} →
        </button>
      </div>
    </div>
  )
}
