import { ReactNode } from 'react'

interface SidebarButtonProps {
  children: ReactNode
  variant: 'selected' | 'unselected'
}

const SidebarButton = ({ children, variant }: SidebarButtonProps) => {
  const getVariantClass = () => {
    if (variant === 'unselected') {
      return 'text-black'
    } else if (variant === 'selected') {
      return 'text-[#00ADB5] bg-[#E6F7F8]'
    }
  }

  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg px-6 py-4 ${getVariantClass()}`}
    >
      {children}
    </a>
  )
}

export default SidebarButton
