import { createPortal } from 'react-dom'
import Input from './Input'
import Button from './Button'

const AddTaskDialog = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean
  handleClose: () => void
}) => {
  if (!isOpen) return null

  const handleDialogClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (event.target instanceof HTMLElement && event.target.id === 'dialog') {
      handleClose()
    }
  }

  return createPortal(
    <div
      id="dialog"
      onClick={(e) => handleDialogClick(e)}
      className="fixed inset-0 flex justify-center items-center backdrop-blur-sm"
    >
      <div className="bg-white rounded-lg p-5 text-center w-11/12 max-w-[350px] shadow">
        <h2 className="font-semibold text-xl text-[#35383E]">Nova tarefa</h2>
        <p className="text-sm text-[#9A9C9F] mb-4 mt-1">
          Insira as informações abaixo
        </p>

        <div className="flex flex-col space-y-4">
          <Input
            id="title"
            label="Título"
            placeholder="Insira o título da tarefa"
          />
          <Input
            id="description"
            label="Descrição"
            placeholder="Descreva a tarefa"
          />
          <Input id="time" label="Período" placeholder="Selecione um período" />

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="large"
              className="w-full"
              onClick={() => handleClose()}
            >
              Cancelar
            </Button>
            <Button size="large" className="w-full">
              Adicionar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default AddTaskDialog
