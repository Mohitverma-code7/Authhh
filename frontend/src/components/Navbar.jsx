import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Dashboard from '../pages/Dashboard';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Profile from './Profile';

const Navbar = () => {
  const { user, clearMessages, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="modern-nav">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <h1 className="modern-heading text-3xl">AUTHH</h1>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="glass px-6 py-3 font-bold text-lg border-b-4 border-blue-600">
                {user.username}
              </span>
              <a href="#dashboard" className="modern-button text-sm">🚀 Dashboard</a>
              <button
                onClick={handleLogout}
                className="modern-button-danger text-sm"
              >
                🚪 Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <a href="#login" className="modern-button text-sm">🔐 Login</a>
              <a href="#register" className="modern-button-secondary text-sm">➕ Register</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const AuthApp = () => {
  const { user } = useAuth();
  const [view, setView] = useState(user ? 'dashboard' : 'login');

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard />;
      case 'login':
        return <LoginForm onSwitch={() => setView('register')} />;
      case 'register':
        return <RegisterForm onSwitch={() => setView('login')} />;
      case 'profile':
        return <Profile />;
      default:
        return user ? <Dashboard /> : <LoginForm onSwitch={() => setView('register')} />;
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="modern-card">
            {renderView()}
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthApp;
export { AuthApp };


