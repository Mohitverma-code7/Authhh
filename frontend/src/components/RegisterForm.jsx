import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const RegisterForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });

  const [submitting, setSubmitting] = useState(false);
  const { register, error, success, loading } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await register(
        formData.username,
        formData.email,
        formData.password,
        formData.role
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="brutal-card space-y-5">
      <h2 className="text-2xl font-black text-center">REGISTER 🧾</h2>

      {error && (
        <div className="brutal-card bg-red-200 font-bold">
          {error}
        </div>
      )}

      {success && (
        <div className="brutal-card bg-green-200 font-bold">
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
          name="email"
          placeholder="Email"
          value={formData.email}
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

        <select
          className="brutal-input"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <button className="brutal-btn btn-green w-full">
          CREATE ACCOUNT 🚀
        </button>
      </form>

      <button
        onClick={onSwitch}
        className="text-sm font-bold underline"
      >
        ← Back to login
      </button>
    </div>
  );
};

export default RegisterForm;