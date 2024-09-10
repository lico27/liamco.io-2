import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import '/src/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
)
