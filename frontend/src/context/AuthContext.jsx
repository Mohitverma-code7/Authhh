import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import {
  login,
  logout,
  getCurrentUser,
  register,
} from "../api/auth.js";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // clear messages
  const clearMessages = useCallback(() => {
    setError(null);
    setSuccess(null);
  }, []);

  // fetch logged-in user
  const fetchCurrentUser = useCallback(async () => {
    try {
      setLoading(true);

      const res = await getCurrentUser();

      // safer parsing (handles different API shapes)
      const currentUser = res?.data?.user || res?.user || res;

      setUser(currentUser || null);
    } catch (err) {
      setUser(null);
      console.error("Fetch current user failed:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // login
  const handleLogin = async (username, password) => {
    try {
      setLoading(true);
      clearMessages();

      const res = await login(username, password);

      // if API returns user directly
      const loggedInUser = res?.data?.user || res?.user;

      if (loggedInUser) {
        setUser(loggedInUser);
      } else {
        await fetchCurrentUser();
      }

      setSuccess("Login successful!");
      return res;
    } catch (err) {
      const msg =
        err.response?.data?.message || "Login failed";
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // register
  const handleRegister = async (
    username,
    email,
    password,
    role = "USER"
  ) => {
    try {
      setLoading(true);
      clearMessages();

      const res = await register(username, email, password, role);

      setSuccess("Registration successful!");
      return res;
    } catch (err) {
      const msg =
        err.response?.data?.message || "Registration failed";
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // logout
  const handleLogout = async () => {
    try {
      clearMessages();
      await logout();
      setUser(null);
      setSuccess("Logged out successfully.");
    } catch (err) {
      setError("Logout failed");
      console.error(err);
    }
  };

  // auto load user on refresh
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