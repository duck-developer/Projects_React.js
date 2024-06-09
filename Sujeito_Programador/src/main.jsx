import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {router} from './App'
import {RouterProvider} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={1500}/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
