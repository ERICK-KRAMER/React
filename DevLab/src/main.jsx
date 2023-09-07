import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Styles
import "../src/Styles/GStyle.css"

// Rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//paginas
import Create_Accout from './Pages/Create_Accout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';

const route = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Create_Accout",
        element: <Create_Accout />,
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
