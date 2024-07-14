import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'ghost'
}

const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-[#00A4B5] text-white'
    } else if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]'
    }
  }

  return (
    <button
      {...rest}
      className={`flex items-center gap-1 font-semibold py-1 px-2 rounded-md text-xs hover:opacity-75 transition ${getVariantClasses()}`}
    >
      {children}
    </button>
  )
}

export default Button
