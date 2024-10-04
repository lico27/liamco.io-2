import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import * as bootstrap from 'bootstrap'
import './assets/css/bootstrap.css'
import './assets/css/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
