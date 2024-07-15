import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="flex gap-9">
      <Sidebar />
      <Tasks />
      <ToastContainer />
    </div>
  )
}

export default App
