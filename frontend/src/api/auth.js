import axios from 'axios';

const API_BASE = 'https://authhh-paju.onrender.com';

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

// Register new user
export const register = async (username, email, password, role = 'USER') => {
  const response = await api.post('/users/register', {
    username,
    email,
    password,
    role,
  });
  return response.data;
};

// Login user
export const login = async (username, password) => {
  const response = await api.post('/users/login', {
    username,
    password,
  });
  return response.data;
};

// Logout user
export const logout = async () => {
  const response = await api.post('/users/logout');
  return response.data;
};

// Get current user
export const getCurrentUser = async () => {
  const response = await api.get('/users/current-user');
  return response.data;
};

export default api;

