import Button from './Button'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd } from 'react-icons/io'
import { WiSunrise, WiDaySunny } from 'react-icons/wi'
import { WiMoonWaningCrescent4 } from 'react-icons/wi'
import TasksSeparator from './TasksSeparator'
import { useState } from 'react'
import TaskItem from './TaskItem'

export interface ITask {
  id: number
  title: string
  description: string
  time: 'morning' | 'afternoon' | 'evening'
  status: 'todo' | 'doing' | 'done'
}

const Tasks = () => {
  const [tasks] = useState<ITask[]>([
    {
      id: 1,
      title: 'Estudar',
      description: 'lorem ipsum',
      time: 'morning',
      status: 'done',
    },
    {
      id: 2,
      title: 'Ler',
      description: 'lorem ipsum',
      time: 'morning',
      status: 'doing',
    },
    {
      id: 3,
      title: 'Trabalhar',
      description: 'lorem ipsum',
      time: 'afternoon',
      status: 'todo',
    },
    {
      id: 4,
      title: 'Jantar',
      description: 'lorem ipsum',
      time: 'evening',
      status: 'todo',
    },
  ])

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
          <Button>
            Nova tarefa <IoMdAdd />
          </Button>
        </div>
      </div>

      {/* Lista de tarefas */}
      <div className="bg-white rounded-xl p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<WiSunrise size={20} />} />
          {tasks
            .filter((task) => task.time === 'morning')
            .map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
        </div>

        <div className="space-y-3 my-6">
          <TasksSeparator title="Tarde" icon={<WiDaySunny size={20} />} />
          {tasks
            .filter((task) => task.time === 'afternoon')
            .map((task) => (
              <TaskItem key={task.id} task={task} />
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
              <TaskItem key={task.id} task={task} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
