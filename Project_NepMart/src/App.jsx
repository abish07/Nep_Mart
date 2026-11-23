import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from "./components/Navbar";
function App() {
  const [email,setEmail] = useState("");
  //Email is set here instead of in Login as App is mounted all the time which will help the data stored in email not lost
  const [page,setPage] = useState("home");
  return(
    <>
      <Navbar onLogin={()=> setPage("login")} onHome={()=> setPage("home")}/>
      {page=="login" && <Login email={email} setEmail={setEmail}/>}
      {page=="home" && <Home />}
    </>
  )
}

export default App
