import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CoffeeAdd from './components/CoffeeAdd.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: 'addCoffee',
    element: <CoffeeAdd></CoffeeAdd>
  },
  {
    path: 'updateCoffee',
    element: <UpdateCoffee></UpdateCoffee>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>,
)
