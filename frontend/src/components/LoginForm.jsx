import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const { login, error, success, loading } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await login(formData.username, formData.password);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="brutal-card space-y-5">
      <h2 className="text-2xl font-black text-center">LOGIN 🔐</h2>

      {error && (
        <div className="brutal-card bg-red-200 text-black font-bold">
          {error}
        </div>
      )}

      {success && (
        <div className="brutal-card bg-green-200 text-black font-bold">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="brutal-input"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          className="brutal-input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          className="brutal-btn btn-blue w-full"
          disabled={submitting || loading}
        >
          {submitting ? "Logging in..." : "LOGIN 🚀"}
        </button>
      </form>

      <button
        onClick={onSwitch}
        className="text-sm font-bold underline"
      >
        Need account? Register →
      </button>
    </div>
  );
};

export default LoginForm;