interface Props {
  value: string
  onChange: (v: string) => void
  onAnalyze: () => void
  loading: boolean
}

export default function MailInput({ value, onChange, onAnalyze, loading }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-5 py-5 md:px-6">
      <div className="mb-4">
        <p className="text-sm font-semibold text-dark">메일 분석</p>
        <p className="text-xs text-slate-500 mt-1">분석할 메일 내용을 붙여넣으세요</p>
      </div>

      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="여기에 메일 내용을 붙여넣으세요..."
        className="w-full min-h-[120px] px-4 py-3 text-body text-dark bg-field border border-slate-200 rounded-lg outline-none resize-y leading-relaxed transition-all duration-150 placeholder:text-slate-400 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/10"
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-3">
        <p className="text-caption text-slate-400 order-2 sm:order-1">
          Gemini AI가 요약 · 보안 위협 · 다크 데이터를 자동 분석합니다
        </p>
        <button
          onClick={onAnalyze}
          disabled={loading}
          className="order-1 sm:order-2 flex items-center justify-center gap-2 px-4 py-2 bg-dark text-white text-body font-medium rounded-lg border-none cursor-pointer transition-opacity duration-150 hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              분석 중...
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              분석 시작
            </>
          )}
        </button>
      </div>
    </div>
  )
}
