import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MarketPlace from './components/MarketPlace'
import '../index.css'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarketPlace />
    <Footer />
  </StrictMode>
)
