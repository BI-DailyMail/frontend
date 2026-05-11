import { type ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
}

const variants: Record<Variant, string> = {
  primary: 'bg-dark text-white hover:bg-slate-800 border-transparent',
  secondary: 'bg-white text-dark hover:bg-field border-slate-200',
  ghost: 'bg-transparent text-slate-500 hover:bg-surface border-transparent',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-md gap-1.5',
  md: 'px-4 py-2 text-body rounded-lg gap-2',
  lg: 'px-5 py-2.5 text-sm rounded-lg gap-2.5',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading,
  children,
  className = '',
  ...props
}: Props) {
  return (
    <button
      disabled={props.disabled || loading}
      className={`inline-flex items-center justify-center font-medium border transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading && <SpinIcon />}
      {children}
    </button>
  )
}

function SpinIcon() {
  return (
    <svg className="animate-spin w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}
