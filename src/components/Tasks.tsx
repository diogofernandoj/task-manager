import Button from './Button'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd } from 'react-icons/io'
import { WiSunrise, WiDaySunny } from 'react-icons/wi'
import { WiMoonWaningCrescent4 } from 'react-icons/wi'
import TasksSeparator from './TasksSeparator'
import { useState } from 'react'
import TaskItem from './TaskItem'
import { TASKS } from '../constants/tasks'
import { toast } from 'react-toastify'
import AddTaskDialog from './AddTaskDialog'

export interface ITask {
  id: number
  title: string
  description: string
  time: 'morning' | 'afternoon' | 'evening'
  status: 'todo' | 'doing' | 'done'
}

const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>(TASKS)
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState<boolean>(false)

  const handleCheckboxClick = (taskId: number) => {
    const newTasks: ITask[] = tasks.map((task) => {
      if (task.id !== taskId) {
        return task
      }

      if (task.status === 'todo') {
        return { ...task, status: 'doing' }
      } else if (task.status === 'doing') {
        return { ...task, status: 'done' }
      } else {
        return { ...task, status: 'todo' }
      }
    })

    setTasks(newTasks)
  }

  const handleDeleteTaskClick = (taskId: number) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
    toast('Tarefa deletada com sucesso!')
  }

  return (
    <div className="py-16 px-8 w-full">
      <div className="flex justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="font-semibold text-xl">Minhas tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefa <FiTrash2 />
          </Button>
          <Button onClick={() => setAddTaskDialogIsOpen(true)}>
            Nova tarefa <IoMdAdd />
          </Button>

          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={() => setAddTaskDialogIsOpen(false)}
          />
        </div>
      </div>

      {/* Lista de tarefas */}
      <div className="bg-white rounded-xl p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<WiSunrise size={20} />} />
          {tasks
            .filter((task) => task.time === 'morning')
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                handleCheckboxClick={handleCheckboxClick}
                handleDeleteTaskClick={handleDeleteTaskClick}
              />
            ))}
        </div>

        <div className="space-y-3 my-6">
          <TasksSeparator title="Tarde" icon={<WiDaySunny size={20} />} />
          {tasks
            .filter((task) => task.time === 'afternoon')
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                handleCheckboxClick={handleCheckboxClick}
                handleDeleteTaskClick={handleDeleteTaskClick}
              />
            ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator
            title="Noite"
            icon={<WiMoonWaningCrescent4 size={20} />}
          />
          {tasks
            .filter((task) => task.time === 'evening')
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                handleCheckboxClick={handleCheckboxClick}
                handleDeleteTaskClick={handleDeleteTaskClick}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
