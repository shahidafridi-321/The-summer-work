import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ItemsList } from './ItemsList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemsList />
  </StrictMode>,
)
