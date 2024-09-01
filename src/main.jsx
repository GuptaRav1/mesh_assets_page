import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MarketPlace from './components/MarketPlace'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarketPlace />
  </StrictMode>
)
