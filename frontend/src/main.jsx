import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from '../src/context/AuthContext.jsx'
import { AuthApp } from '../src/components/Navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AuthApp />
    </AuthProvider>
  </React.StrictMode>,
)

