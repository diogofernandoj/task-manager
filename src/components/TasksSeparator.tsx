import { ReactNode } from 'react'

const TasksSeparator = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center pb-1 border-b border-solid border-[#F4F4F5] gap-1 text-[#9A9C9F]">
      {children}
    </div>
  )
}

export default TasksSeparator
