import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Create_Accout from "./Pages/Create_Accout"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Create_Accout" element={<Create_Accout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
