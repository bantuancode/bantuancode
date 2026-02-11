"use client";
import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { FaLock, FaEnvelope } from "react-icons/fa";

export default function AuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();

    console.log("🔐 Attempting login...");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log("📊 Response:", {
        session: !!data.session,
        user: data.user?.email,
        error: error?.message,
      });

      if (error) {
        console.error("❌ Login error:", error);
        setError(error.message);
        setLoading(false);
        return;
      }

      if (data.session) {
        console.log("✅ Session created, cookies should be set");
        console.log("🍪 Redirecting to /admin...");

        // Wait a bit for cookies to be set
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Hard redirect
        window.location.href = "/admin";
      } else {
        setError("Login failed - no session created");
        setLoading(false);
      }
    } catch (err) {
      console.error("❌ Unexpected error:", err);
      setError("An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Bantuancode</h1>
          <p className="text-slate-400">Admin Dashboard Login</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-8"
        >
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-slate-400 text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                autoComplete="email"
                className="w-full pl-12 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-slate-400 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                autoComplete="current-password"
                className="w-full pl-12 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
