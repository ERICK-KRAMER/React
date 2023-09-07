import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Create_Accout from "./Pages/Create_Accout"
import { Outlet } from "react-router-dom"

function App() {
  
  return (
    <Outlet />
  )
}

export default App;
