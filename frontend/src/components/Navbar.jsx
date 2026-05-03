import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Profile from './Profile';

const Navbar = () => {
  const { user, clearMessages, logout } = useAuth();
  const [view, setView] = useState('login');

  const showLogin = () => {
    clearMessages();
    setView('login');
  };

  const showRegister = () => {
    clearMessages();
    setView('register');
  };

  const showProfile = () => {
    clearMessages();
    setView('profile');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-900">FreeAPI Auth</h1>
          
          {user ? (
            <div className="flex space-x-2">
              <button
                onClick={showProfile}
                className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm font-medium"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 text-sm font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-2">
              <button
                onClick={showLogin}
                className="text-blue-600 hover:text-blue-500 font-medium text-sm"
              >
                Login
              </button>
              <span>|</span>
              <button
                onClick={showRegister}
                className="text-green-600 hover:text-green-500 font-medium text-sm"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const AuthApp = () => {
  const { user } = useAuth();
  const [view, setView] = useState('login');

  const renderView = () => {
    switch (view) {
      case 'login':
        return <LoginForm onSwitch={() => setView('register')} />;
      case 'register':
        return <RegisterForm onSwitch={() => setView('login')} />;
      case 'profile':
        return <Profile />;
      default:
        return <LoginForm onSwitch={() => setView('register')} />;
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        <div className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg p-8">
            {renderView()}
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthApp;
export { AuthApp };

