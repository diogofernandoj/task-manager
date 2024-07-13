import { ITask } from './Tasks'
import { FaCheck, FaSpinner } from 'react-icons/fa'

interface TaskItemProps {
  task: ITask
}

const TaskItem = ({ task }: TaskItemProps) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00ADB5] text-[#00ADB5]'
    }

    if (task.status === 'doing') {
      return 'bg-[#FFAA04] text-[#FFAA04]'
    }

    if (task.status === 'todo') {
      return 'bg-[#35383E] bg-opacity-10 text-[#2B2D42]'
    }
  }

  return (
    <div
      className={`bg-opacity-10 flex px-4 py-3 text-sm items-center gap-2 ${getStatusClasses()}`}
    >
      <label
        htmlFor={task.title}
        className={`h-5 w-5 rounded-sm flex items-center justify-center ${getStatusClasses()}`}
      >
        <input
          type="checkbox"
          checked={task.status === 'done'}
          className="hidden"
          id={task.title}
        />
        {task.status === 'done' && <FaCheck className="text-white" size={12} />}
        {task.status === 'doing' && (
          <FaSpinner className="text-white animate-spin" size={12} />
        )}
      </label>
      <p>{task.title}</p>
    </div>
  )
}

export default TaskItem
