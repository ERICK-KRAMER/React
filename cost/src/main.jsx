import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Route
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//styles
import "../src/Styles/Gstyle.css"

//paginas 
import Home from './Routes/Home.jsx'
import NewProject from './Routes/NewProject.jsx'
import Contact from './Routes/Contact.jsx'
import Company from './Routes/Company.jsx'

const route = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/NewProject",
        element: <NewProject />,
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Company",
        element: <Company />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)

