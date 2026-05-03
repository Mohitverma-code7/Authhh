import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { login, logout, getCurrentUser, register } from '../api/auth.js';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const clearMessages = useCallback(() => {
    setError(null);
    setSuccess(null);
  }, []);

  const fetchCurrentUser = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getCurrentUser();
      setUser(data);
    } catch (err) {
      setUser(null);
      console.error('Fetch current user failed:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      setLoading(true);
      clearMessages();
      const data = await login(username, password);
      await fetchCurrentUser(); // Refetch after login
      setSuccess('Login successful!');
      return data;
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed';
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (username, email, password, role) => {
    try {
      setLoading(true);
      clearMessages();
      const data = await register(username, email, password, role);
      setSuccess('Registration successful!');
      return data;
    } catch (err) {
      const msg = err.response?.data?.message || 'Registration failed';
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      clearMessages();
      await logout();
      setUser(null);
      setSuccess('Logged out successfully.');
    } catch (err) {
      setError('Logout failed');
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const value = {
    user,
    loading,
    error,
    success,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    clearMessages,
    refetchUser: fetchCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

