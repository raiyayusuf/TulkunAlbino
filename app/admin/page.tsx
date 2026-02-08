/* ============================================
   app/admin/page.tsx
   ADMIN LOGIN PAGE - AKSES VIA /admin
   LOGIN PAGE TANPA SIDEBAR - CLEAN DESIGN
   ============================================ */

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  AlertCircle,
  Loader2,
  Shield,
} from "lucide-react";
import Link from "next/link";

/* ============================================
   LOGO CONFIGURATION
   ============================================ */
const LOGO_CONFIG = {
  src: "/logo/gse.png",
  alt: "GSE Jogja Logo",
  height: "h-32",
  width: "w-32",
  sizes: "128px",
};

/* ============================================
   ADMIN CREDENTIALS (TEMP - nanti ganti dengan API)
   ============================================ */
const ADMIN_CREDENTIALS = {
  email: "admin@gsejogja.com",
  password: "AdminGSE2026$", // INI HANYA DEMO - nanti pakai database
};

/* ============================================
   ADMIN LOGIN PAGE COMPONENT - TANPA SIDEBAR
   ============================================ */
export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);

  /* ============================================
     CHECK IF ALREADY LOGGED IN
     ============================================ */
  useEffect(() => {
    setIsClient(true);
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("admin-token="));

    // Jika sudah login, redirect ke dashboard
    if (token) {
      router.push("/admin/dashboard");
    }
  }, [router]);

  /* ============================================
     HANDLE FORM SUBMIT
     ============================================ */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simple validation
    if (!formData.email || !formData.password) {
      setError("Email dan password harus diisi");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      if (
        formData.email === ADMIN_CREDENTIALS.email &&
        formData.password === ADMIN_CREDENTIALS.password
      ) {
        // Set secure cookie dengan expiration (8 jam)
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + 8 * 60 * 60 * 1000);

        document.cookie = `admin-token=authenticated; path=/; expires=${expirationDate.toUTCString()}; SameSite=Strict`;

        // Redirect ke dashboard
        router.push("/admin/dashboard");
        router.refresh(); // Refresh untuk update middleware
      } else {
        setError("Email atau password salah");
      }
      setIsLoading(false);
    }, 1000);
  };

  /* ============================================
     HANDLE INPUT CHANGE
     ============================================ */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ============================================
     RENDER COMPONENT - TANPA SIDEBAR
     ============================================ */
  if (!isClient) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue-light/20 via-white to-primary-green-light/20">
      {/* ============================================
          HEADER SECTION (MINIMAL)
          ============================================ */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-blue-green flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-primary-navy">GSE Admin</span>
            </Link>
            <div className="text-sm text-gray-500">Login via /admin</div>
          </div>
        </div>
      </header>

      {/* ============================================
          MAIN LOGIN CONTENT
          ============================================ */}
      <main className="flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md">
          {/* ============================================
              HEADER SECTION
              ============================================ */}
          <div className="mb-8 text-center">
            {/* LOGO & ADMIN BADGE */}
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div
                  className={`relative ${LOGO_CONFIG.height} ${LOGO_CONFIG.width} mx-auto`}
                >
                  <Image
                    src={LOGO_CONFIG.src}
                    alt={LOGO_CONFIG.alt}
                    fill
                    className="object-contain"
                    sizes={LOGO_CONFIG.sizes}
                    priority
                  />
                </div>
                <div className="absolute -top-2 -right-2 rounded-full bg-gradient-blue-green p-2">
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            {/* PAGE TITLE */}
            <h1 className="text-3xl font-bold text-primary-navy mb-2">
              Admin Login
            </h1>
            <p className="text-gray-600">
              Masuk ke dashboard administrator GSE Jogja
            </p>
          </div>

          {/* ============================================
              LOGIN FORM
              ============================================ */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            {error && (
              <div className="mb-6 rounded-lg bg-red-50 p-4 border border-red-200">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* EMAIL INPUT */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Admin
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-gray-900 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20"
                    placeholder="admin@gsejogja.com"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* PASSWORD INPUT */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-sm text-primary-blue hover:underline"
                    onClick={() =>
                      setError("Hubungi super admin untuk reset password")
                    }
                  >
                    Lupa password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-12 text-gray-900 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20"
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
                  disabled={isLoading}
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-700"
                >
                  Ingat saya (8 jam)
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-lg bg-gradient-blue-green py-3 font-semibold text-white transition-all hover:shadow-lg disabled:opacity-70"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Memproses...
                  </div>
                ) : (
                  "Masuk ke Dashboard Admin"
                )}
              </button>
            </form>

            {/* ============================================
                SECURITY NOTE
                ============================================ */}
            <div className="mt-6 rounded-lg bg-blue-50 p-4 border border-blue-100">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  <strong>Keamanan Admin:</strong> Akses hanya untuk staf GSE
                  Jogja. Login via{" "}
                  <code className="bg-blue-100 px-1 rounded">/admin</code> saja.
                </p>
              </div>
            </div>

            {/* ============================================
                FOOTER LINKS
                ============================================ */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Butuh bantuan?{" "}
                <a
                  href="mailto:support@gsejogja.com"
                  className="font-medium text-primary-blue hover:underline"
                >
                  Hubungi super admin
                </a>
              </p>
            </div>
          </div>

          {/* ============================================
              BACK TO HOME
              ============================================ */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-primary-blue"
            >
              ← Kembali ke Website Utama
            </Link>
          </div>

          {/* ============================================
              VERSION INFO
              ============================================ */}
          <div className="mt-8 text-center text-xs text-gray-400">
            <p>GSE Jogja Admin Panel v1.0 • © {new Date().getFullYear()}</p>
            <p className="mt-1">Akses hanya via /admin</p>
          </div>
        </div>
      </main>
    </div>
  );
}
