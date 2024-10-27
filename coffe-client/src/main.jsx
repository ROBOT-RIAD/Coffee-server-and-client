import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Showcoffee from './Components/Showcoffee.jsx'
import Update from './Components/Update.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/showcoffee",
    element: <Showcoffee />,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path: "/update/:id",
    element: <Update />,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
