import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Component/Layout/Main.jsx'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Login/Login.jsx'
import SignUp from './Component/SignUp/SignUp.jsx'
import Start from './Component/Start/Start.jsx'
import Channels from './Component/Channels/Channels.jsx'
import Automations from './Component/Automations/Authomations.jsx'
import Conversations from './Component/Conversations/Convarsations.jsx'
import Settings from './Component/Settings/Settings.jsx'
import Statistics from './Component/Statistics/Statistics.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/start',
        element: <Start></Start>
      },
      {
        path: '/channels',
        element: <Channels></Channels>
      },
      {
        path: '/automations',
        element: <Automations></Automations>
      },
      {
        path: '/Conversations',
        element: <Conversations></Conversations>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/settings',
        element: <Settings></Settings>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '*',
        element: <h2 className='text-center text-2xl'>404! Not Found</h2>
      }
    ]

  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
