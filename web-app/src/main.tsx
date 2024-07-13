import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@router'

import './index.css'
import '@styles/index.css'
import '@styles/fonts.css'
import '@styles/images.css'
import '@styles/lists.css'
import '@styles/backgrounds.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
