import Button from './Button'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd } from 'react-icons/io'

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
    </div>
  )
}

export default Tasks
