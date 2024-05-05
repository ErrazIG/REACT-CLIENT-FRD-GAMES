import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './container/header/header'
import Sidebar from './container/sidebar/sidebar'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { tokenAtom } from './atoms/token.atom.js'

function App() {

  const [token, setToken] = useRecoilState(tokenAtom);

  useEffect(() => { 
    setToken(localStorage.getItem("token"));
  }, [])



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