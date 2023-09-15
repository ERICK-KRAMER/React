import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/Styles/global.css'
// Rotemamento
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Paginas / Componentes
import { Home } from './Pages/Home/Home.jsx'
import { About } from './Pages/About/About.jsx'
import { NavBar } from './Components/NavBar/NavBar.jsx'
import { Posts } from './Pages/Post/Post'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Posts' element={<Posts />}/>
        <Route path='/Posts/:id' element={<Posts />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
