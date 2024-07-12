import Button from './Button'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd } from 'react-icons/io'
import { WiSunrise, WiDaySunny } from 'react-icons/wi'
import { WiMoonWaningCrescent4 } from 'react-icons/wi'
import TasksSeparator from './TasksSeparator'

const Tasks = () => {
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
          <TasksSeparator>
            <WiSunrise size={20} />
            Manhã
          </TasksSeparator>
        </div>

        <div className="space-y-3 my-6">
          <TasksSeparator>
            <WiDaySunny size={20} />
            Tarde
          </TasksSeparator>
        </div>

        <div className="space-y-3">
          <TasksSeparator>
            <WiMoonWaningCrescent4 size={20} />
            Noite
          </TasksSeparator>
        </div>
      </div>
    </div>
  )
}

export default Tasks
