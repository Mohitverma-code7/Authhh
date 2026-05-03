import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Profile from "./Profile";

/* ================= NAVBAR ================= */

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#0077ff] border-b-4 border-black shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <h1 className="text-3xl font-black tracking-tight">
            ⚡ AUTHH
          </h1>

          {user ? (
            <div className="flex items-center gap-3">

              {/* Username */}
              <span className="bg-white border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_black]">
                {user.username}
              </span>

              {/* Logout */}
              <button
                onClick={logout}
                className="bg-red-500 text-white border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 transition"
              >
                🚪 LOGOUT
              </button>
            </div>
          ) : (
            <div className="flex gap-3">

              <a
                href="#login"
                className="bg-black text-white border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_white] hover:translate-x-1 hover:translate-y-1 transition"
              >
                🔐 LOGIN
              </a>

              <a
                href="#register"
                className="bg-green-400 text-black border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 transition"
              >
                ➕ REGISTER
              </a>

            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

/* ================= MAIN APP ================= */

const AuthApp = () => {
  const { user } = useAuth();
  const [view, setView] = useState(user ? "dashboard" : "login");

  const renderView = () => {
    switch (view) {
      case "dashboard":
        return <Dashboard />;
      case "login":
        return <LoginForm onSwitch={() => setView("register")} />;
      case "register":
        return <RegisterForm onSwitch={() => setView("login")} />;
      case "profile":
        return <Profile />;
      default:
        return user ? (
          <Dashboard />
        ) : (
          <LoginForm onSwitch={() => setView("register")} />
        );
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[linear-gradient(135deg,#fdfdfd,#f3f3f3)] flex items-center justify-center p-6">

        <div className="w-full max-w-md">

          {/* BRUTAL CARD */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_black] p-6">

            {renderView()}

          </div>

        </div>

      </main>
    </>
  );
};

export default AuthApp;
export { AuthApp };