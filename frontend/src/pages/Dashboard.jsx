import React from 'react';
import { useAuth } from '../context/AuthContext';
import Profile from '../components/Profile';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 overflow-hidden relative">
      {/* Smooth animated background blobs */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/60 to-blue-500/60 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-400/60 to-rose-500/60 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-400/60 to-orange-500/60 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Modern header */}
        <div className="modern-card p-12 mb-12 text-center">
          <h1 className="modern-heading mb-8">AUTH HUB</h1>
          <p className="text-2xl font-bold text-white/90 mb-8 drop-shadow-lg">Advanced Authentication Dashboard</p>
          {user && (
            <div className="inline-flex space-x-4">
              <span className="glass px-8 py-4 font-bold text-lg">Welcome, {user.username}!</span>
            </div>
          )}
        </div>

        {/* Modern grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* User Profile Card */}
          <div className="modern-card">
            <h2 className="modern-heading text-3xl mb-8">👤 Profile</h2>
            <Profile />
          </div>

          {/* Quick Stats */}
          <div className="modern-card">
            <h2 className="modern-heading text-3xl mb-8">📊 Stats</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-8 text-center rounded-2xl">
                <div className="text-4xl font-black text-blue-400 mb-2 drop-shadow-lg">VIP</div>
                <div className="text-sm font-bold uppercase tracking-wider text-white/90">Status</div>
              </div>
              <div className="glass p-8 text-center rounded-2xl">
                <div className="text-4xl font-black text-emerald-400 mb-2 drop-shadow-lg">{user?.role || 'USER'}</div>
                <div className="text-sm font-bold uppercase tracking-wider text-white/90">Role</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern action buttons */}
        <div className="text-center">
          <div className="inline-flex space-x-6 flex-wrap gap-4 justify-center">
            <a href="#login" className="modern-button">🔐 Auth Tools</a>
            <a href="#settings" className="modern-button-secondary">⚙️ Settings</a>
            <a href="#analytics" className="modern-button bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">📈 Analytics</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default Dashboard;


