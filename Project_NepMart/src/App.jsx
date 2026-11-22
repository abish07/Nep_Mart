import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from "./components/Navbar";
function App() {
  const [page,setPage] = useState("Home");
  return(
    <>
      <Navbar onLogin={()=> setPage("Login")} onHome={()=> setPage("Home")}/>
      {page=="Login" && <Login />}
      {page=="Home" && <Home />}
    </>
  )
}

export default App
