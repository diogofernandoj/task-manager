import { ITask } from './Tasks'
import { FaCheck, FaSpinner } from 'react-icons/fa'
import { FiTrash2 } from 'react-icons/fi'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import Button from './Button'

interface TaskItemProps {
  task: ITask
  handleCheckboxClick: (task: number) => void
  handleDeleteTaskClick: (task: number) => void
}

const TaskItem = ({
  task,
  handleCheckboxClick,
  handleDeleteTaskClick,
}: TaskItemProps) => {
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
      className={`bg-opacity-10 flex px-4 py-3 text-sm items-center ${getStatusClasses()}`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <label
            htmlFor={task.title}
            className={`h-5 w-5 rounded-sm flex items-center justify-center ${getStatusClasses()}`}
          >
            <input
              onChange={() => handleCheckboxClick(task.id)}
              type="checkbox"
              checked={task.status === 'done'}
              className="hidden"
              id={task.title}
            />
            {task.status === 'done' && (
              <FaCheck className="text-white" size={12} />
            )}
            {task.status === 'doing' && (
              <FaSpinner className="text-white animate-spin" size={12} />
            )}
          </label>
          <p>{task.title}</p>
        </div>

        <div className="flex items-center">
          <Button
            variant="ghost"
            onClick={() => handleDeleteTaskClick(task.id)}
          >
            <FiTrash2 size={14} />
          </Button>
          <a href="#" className="text-[#818181] hover:opacity-75 transition">
            <FaArrowUpRightFromSquare size={12} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
