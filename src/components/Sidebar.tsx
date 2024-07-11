import SidebarButton from './SidebarButton'

const Sidebar = () => {
  return (
    <div className="bg-white h-screen w-64">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-lg text-[#00ADB5] font-semibold">Task Manager</h1>
        <p>
          Um simples{' '}
          <span className="text-[#00ADB5]">organizador de tarefas.</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="unselected">Início</SidebarButton>
        <SidebarButton variant="selected">Minhas tarefas</SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar