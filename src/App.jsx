import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './container/header/header'
import Sidebar from './container/sidebar/sidebar'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { tokenAtom } from './atoms/token.atom.js'
import { jwtDecode } from 'jwt-decode'

function App() {

  const [token, setToken] = useRecoilState(tokenAtom);

  useEffect(() => { 
    const token = localStorage.getItem("token");
    const decodeToken = token ? jwtDecode(token) : null;
    setToken(decodeToken);
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