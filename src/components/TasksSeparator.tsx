import { ReactElement } from 'react'

interface TasksSeparatorProps {
  title: string
  icon: ReactElement
}

const TasksSeparator = ({ title, icon }: TasksSeparatorProps) => {
  return (
    <div className="flex items-center pb-1 border-b border-solid border-[#F4F4F5] gap-1">
      {icon}
      <p className="text-[#9A9C9F] text-sm">{title}</p>
    </div>
  )
}

export default TasksSeparator
