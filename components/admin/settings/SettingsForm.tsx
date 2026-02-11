/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSave,
  FaCheckCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import type { User } from "@supabase/supabase-js";

type SettingsFormProps = {
  user: User | null;
};

export function SettingsForm({ user }: SettingsFormProps) {
  // Profile state
  const [profileData, setProfileData] = useState({
    email: user?.email || "",
  });

  // Password state
  const [passwordData, setPasswordData] = useState({
    new_password: "",
    confirm_password: "",
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Loading & feedback states
  const [profileLoading, setProfileLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [profileError, setProfileError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUpdateEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileLoading(true);
    setProfileError("");
    setProfileSuccess("");

    const supabase = createClient();

    try {
      const { error } = await supabase.auth.updateUser({
        email: profileData.email,
      });

      if (error) throw error;

      setProfileSuccess("Email updated! Check your inbox to confirm.");
    } catch (err: any) {
      setProfileError(err.message || "Failed to update email");
    } finally {
      setProfileLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    // Validate
    if (passwordData.new_password.length < 8) {
      setPasswordError("Password minimal 8 karakter");
      return;
    }

    if (passwordData.new_password !== passwordData.confirm_password) {
      setPasswordError("Password tidak cocok");
      return;
    }

    setPasswordLoading(true);

    const supabase = createClient();

    try {
      const { error } = await supabase.auth.updateUser({
        password: passwordData.new_password,
      });

      if (error) throw error;

      setPasswordSuccess("Password berhasil diubah!");
      setPasswordData({ new_password: "", confirm_password: "" });
    } catch (err: any) {
      setPasswordError(err.message || "Failed to update password");
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/auth/login";
  };

  return (
    <div className="space-y-6">
      {/* Account Info */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <FaUser className="w-5 h-5 text-blue-400" />
          </div>
          <h2 className="text-lg font-semibold text-white">Account Info</h2>
        </div>

        {/* Avatar placeholder */}
        <div className="flex items-center gap-4 mb-6 p-4 bg-slate-700/50 rounded-xl">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-white">
              {user?.email?.charAt(0).toUpperCase() || "A"}
            </span>
          </div>
          <div>
            <p className="font-semibold text-white">Admin</p>
            <p className="text-sm text-slate-400">{user?.email}</p>
            <p className="text-xs text-slate-500 mt-1">
              Last sign in:{" "}
              {user?.last_sign_in_at
                ? new Date(user.last_sign_in_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "-"}
            </p>
          </div>
        </div>

        {/* Update Email */}
        <form onSubmit={handleUpdateEmail} className="space-y-4">
          {profileError && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{profileError}</p>
            </div>
          )}

          {profileSuccess && (
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-2">
              <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <p className="text-green-400 text-sm">{profileSuccess}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({ email: e.target.value })}
              disabled={profileLoading}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={profileLoading || profileData.email === user?.email}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 text-white text-sm font-medium rounded-lg transition-colors disabled:cursor-not-allowed"
          >
            <FaSave className="w-4 h-4" />
            <span>{profileLoading ? "Saving..." : "Update Email"}</span>
          </button>
        </form>
      </div>

      {/* Change Password */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <FaLock className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-lg font-semibold text-white">Change Password</h2>
        </div>

        <form onSubmit={handleUpdatePassword} className="space-y-4">
          {passwordError && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{passwordError}</p>
            </div>
          )}

          {passwordSuccess && (
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-2">
              <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <p className="text-green-400 text-sm">{passwordSuccess}</p>
            </div>
          )}

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={passwordData.new_password}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    new_password: e.target.value,
                  })
                }
                disabled={passwordLoading}
                className="w-full px-4 py-3 pr-12 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="Min. 8 karakter"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showNewPassword ? (
                  <FaEyeSlash className="w-4 h-4" />
                ) : (
                  <FaEye className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Password Strength */}
            {passwordData.new_password && (
              <div className="mt-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((level) => {
                    const strength = getPasswordStrength(
                      passwordData.new_password,
                    );
                    return (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          level <= strength
                            ? strength <= 1
                              ? "bg-red-500"
                              : strength <= 2
                                ? "bg-yellow-500"
                                : strength <= 3
                                  ? "bg-blue-500"
                                  : "bg-green-500"
                            : "bg-slate-600"
                        }`}
                      />
                    );
                  })}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {getPasswordStrengthLabel(
                    getPasswordStrength(passwordData.new_password),
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={passwordData.confirm_password}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirm_password: e.target.value,
                  })
                }
                disabled={passwordLoading}
                className="w-full px-4 py-3 pr-12 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                placeholder="Ulangi password baru"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="w-4 h-4" />
                ) : (
                  <FaEye className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Match indicator */}
            {passwordData.confirm_password && (
              <p
                className={`text-xs mt-1 ${
                  passwordData.new_password === passwordData.confirm_password
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {passwordData.new_password === passwordData.confirm_password
                  ? "✓ Password cocok"
                  : "✗ Password tidak cocok"}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={
              passwordLoading ||
              !passwordData.new_password ||
              !passwordData.confirm_password
            }
            className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/40 text-white text-sm font-medium rounded-lg transition-colors disabled:cursor-not-allowed"
          >
            <FaLock className="w-4 h-4" />
            <span>{passwordLoading ? "Updating..." : "Update Password"}</span>
          </button>
        </form>
      </div>

      {/* Danger Zone */}
      <div className="bg-slate-800 border border-red-500/20 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-2">Danger Zone</h2>
        <p className="text-slate-400 text-sm mb-6">
          Tindakan berikut bersifat permanen dan tidak dapat dibatalkan.
        </p>

        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 hover:border-red-600/50 text-red-400 hover:text-red-300 text-sm font-medium rounded-lg transition-all"
        >
          <FaSignOutAlt className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}

// Helper functions
function getPasswordStrength(password: string): number {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength;
}

function getPasswordStrengthLabel(strength: number): string {
  switch (strength) {
    case 0:
    case 1:
      return "Weak - too easy to guess";
    case 2:
      return "Fair - could be stronger";
    case 3:
      return "Good - almost there";
    case 4:
      return "Strong - great password!";
    default:
      return "";
  }
}
