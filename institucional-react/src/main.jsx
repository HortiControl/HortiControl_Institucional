import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Institucional.jsx'
import Institucional from './Institucional.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Institucional />
  </StrictMode>,
)
