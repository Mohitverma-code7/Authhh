import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="brutal-card space-y-4">
      <h2 className="text-2xl font-black">PROFILE 👤</h2>

      {user ? (
        <div className="space-y-2 font-bold">
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}

      <button
        onClick={logout}
        className="brutal-btn btn-red w-full"
      >
        LOGOUT 🚪
      </button>
    </div>
  );
};

export default Profile;