import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoomProvider from './context/roomContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <RoomProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </RoomProvider>
)
