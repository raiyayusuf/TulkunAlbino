/* ============================================
   app/(auth)/login/page.tsx
   ENHANCED LOGIN PAGE WITH NEXTAUTH
   ============================================ */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Eye, EyeOff, Mail, Lock, AlertCircle, Loader2 } from "lucide-react";

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
   LOGIN PAGE COMPONENT
   ============================================ */
export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  /* ============================================
     HANDLE FORM SUBMIT WITH NEXTAUTH
     ============================================ */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      setError("Email dan password harus diisi");
      setIsLoading(false);
      return;
    }

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email atau password salah");
        setIsLoading(false);
        return;
      }

      if (result?.ok) {
        // Check if admin email untuk redirect ke admin
        if (formData.email.includes("@gsejogja.com")) {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
        router.refresh();
      }
    } catch (error) {
      setError("Terjadi kesalahan, coba lagi");
      setIsLoading(false);
    }
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
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue-light/20 via-white to-primary-green-light/20 flex items-center justify-center p-4">
      {/* LOGIN CARD */}
      <div className="w-full max-w-md">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div
              className={`relative ${LOGO_CONFIG.height} ${LOGO_CONFIG.width}`}
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
          </div>
          <h1 className="text-3xl font-bold text-primary-navy mb-2">
            Masuk ke Akun
          </h1>
          <p className="text-gray-600">
            Gunakan email dan password untuk login
          </p>
        </div>

        {/* LOGIN FORM */}
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
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-gray-900 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20"
                  placeholder="email@example.com"
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
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary-blue hover:underline"
                >
                  Lupa password?
                </Link>
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
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Ingat saya
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
                "Masuk"
              )}
            </button>
          </form>

          {/* REGISTER LINK */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="font-medium text-primary-blue hover:underline"
              >
                Daftar di sini
              </Link>
            </p>
          </div>

          {/* SECURITY NOTE */}
          <div className="mt-6 rounded-lg bg-blue-50 p-4 border border-blue-100">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm text-blue-700">
                Admin login: gunakan email @gsejogja.com
              </p>
            </div>
          </div>
        </div>

        {/* BACK TO HOME */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-primary-blue"
          >
            ← Kembali ke Beranda
          </Link>
        </div>

        {/* VERSION INFO */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>GSE Jogja v1.0 • © {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}
