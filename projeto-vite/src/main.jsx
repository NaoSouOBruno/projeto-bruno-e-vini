import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

import Home from "./routes/home"
import NewPost from "./routes/NewPost"
import Login from "./routes/login"

import './index.css'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/new",
        element: <NewPost/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>
)
