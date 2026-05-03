import { AuthProvider } from './context/AuthContext.jsx'
import { AuthApp } from './components/Navbar.jsx'

function App() {
  return (
    <AuthProvider>
      <AuthApp />
    </AuthProvider>
  );
}

export default App

