import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tailwindcss'
import App from './App.tsx'
import { FavProvider } from './contexts/favcontext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavProvider>
    <App />
    </FavProvider>
  </StrictMode>,
)
