import { ITask } from './Tasks'

interface TaskItemProps {
  task: ITask
}

const TaskItem = ({ task }: TaskItemProps) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00ADB5] bg-opacity-10 text-[#00ADB5]'
    }

    if (task.status === 'doing') {
      return 'bg-[#FFAA04] bg-opacity-10 text-[#FFAA04]'
    }

    if (task.status === 'todo') {
      return 'bg-[#35383E] bg-opacity-10 text-[#2B2D42]'
    }
  }

  return (
    <div
      className={`flex px-4 py-3 text-sm items-center gap-2 ${getStatusClasses()}`}
    >
      <input type="checkbox" />
      <p>{task.title}</p>
    </div>
  )
}

export default TaskItem
