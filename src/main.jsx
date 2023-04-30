import React from 'react'
import ReactDOM from 'react-dom/client'
//importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'

import { BrowserRouter } from 'react-router-dom'
import { Rutas } from './Routers/Rutas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rutas/>    
    </BrowserRouter>
  </React.StrictMode>,
)
