import React from 'react'
import ReactDOM from 'react-dom/client'

// Rotemamento
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Paginas
import { Home } from './Pages/Home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
