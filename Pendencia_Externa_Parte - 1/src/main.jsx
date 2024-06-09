import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App.jsx'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"
import {  ContextInfoProvider } from './context/ContextInfo.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={1500} />
    <ContextInfoProvider>
      <RouterProvider router={router} />
    </ContextInfoProvider>
  </React.StrictMode>
)
