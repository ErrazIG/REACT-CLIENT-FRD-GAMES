import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './container/header/header'
import Sidebar from './container/sidebar/sidebar'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { tokenAtom } from './atoms/token.atom.js'
import { DataAtom } from './atoms/data.atom';

function App() {

  const [token, setToken] = useRecoilState(tokenAtom);
  const [data, setData] = useRecoilState(DataAtom);

  useEffect(() => { 
    setToken(localStorage.getItem("token"));
  }, [])

  useEffect(() => { 
    setData(localStorage.getItem("data"));
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