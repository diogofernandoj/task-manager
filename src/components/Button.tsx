import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'large'
}

const Button = ({
  children,
  variant = 'primary',
  size = 'small',
  className,
  ...rest
}: ButtonProps) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-[#00A4B5] text-white'
    }
    if (variant === 'secondary') {
      return 'bg-[#EEEEEE] text-gray-800'
    }
    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]'
    }
  }

  const getSizeClasses = () => {
    if (size === 'small') {
      return 'py-1 text-xs'
    }

    if (size === 'large') {
      return 'py-2 text-sm'
    }
  }

  return (
    <button
      {...rest}
      className={`${className} flex justify-center items-center gap-1 font-semibold px-2 rounded-md hover:opacity-75 transition ${getVariantClasses()} ${getSizeClasses()}`}
    >
      {children}
    </button>
  )
}

export default Button
