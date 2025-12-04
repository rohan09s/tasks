import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvide from './tasks/context/theme_context/ThemeProvide.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvide> 
        <App />
      </ThemeProvide>
  </React.StrictMode>,
)