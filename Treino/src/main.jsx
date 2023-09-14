import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Route
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from './Routes/Home.jsx';

const route = createBrowserRouter([
  {
    element : <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
    ],
  },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider route={route} />
    <App />
  </React.StrictMode>,
)
