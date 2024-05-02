import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './container/header/header'
import Sidebar from './container/sidebar/sidebar'

function App() {

  return (
    <>
      <Sidebar />
      <main>
        <Header />
        <div className="mainContent">
          <Outlet />
        </div>
      </main>
    </>
  )
}
export default App;