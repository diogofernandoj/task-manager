import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={rest.id}
          className="text-start text-xs text-gray-800 font-semibold"
        >
          {label}
        </label>
      )}
      <input
        className="border border-gray-400 border-solid py-2 px-3 rounded-md placeholder:text-sm outline-[#00ADB5] outline-1"
        {...rest}
      />
    </div>
  )
}

export default Input
