import { type InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export default function Input({ label, id, className = '', ...props }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-3 py-2 text-sm text-dark bg-field border border-slate-200 rounded-lg outline-none transition-all duration-150 placeholder:text-slate-400 focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/10 ${className}`}
        {...props}
      />
    </div>
  )
}
