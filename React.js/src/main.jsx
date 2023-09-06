import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "../src/Styles/StyleG.css";

import { createBrowserRouter, RouterProvider, Router} from "react-router-dom";

//  PAGINAS 
import Home from "../src/Pages/Home.jsx";
import StyledComponents from "../src/Pages/StyledComponents.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/StyledComponents",
        element: <StyledComponents />,
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
