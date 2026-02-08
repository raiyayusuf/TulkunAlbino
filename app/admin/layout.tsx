/* ============================================
   app/admin/layout.tsx
   ADMIN PANEL LAYOUT WITH AUTH
   CLEAN DESIGN - NO SIDEBAR, TOP NAVIGATION ONLY
   ============================================ */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Package,
  Settings,
  LogOut,
  Menu,
  X,
  Shield,
  Home,
} from "lucide-react";

/* ============================================
   ADMIN NAVIGATION ITEMS
   ============================================ */
const ADMIN_NAV_ITEMS = [
  {
    icon: <LayoutDashboard className="h-4 w-4" />,
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    icon: <FileText className="h-4 w-4" />,
    label: "Blog",
    href: "/admin/blog",
  },
  {
    icon: <LayoutDashboard className="h-4 w-4" />,
    label: "Courses",
    href: "/admin/courses",
  },
  {
    icon: <Package className="h-4 w-4" />,
    label: "Products",
    href: "/admin/products",
  },
  {
    icon: <Settings className="h-4 w-4" />,
    label: "Settings",
    href: "/admin/settings",
  },
];

/* ============================================
   TAGLINE FOR ADMIN PANEL
   ============================================ */
const ADMIN_TAGLINE = "Solutif, Edukatif, dan Progresif";

/* ============================================
   ADMIN LAYOUT COMPONENT
   ============================================ */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  /* ============================================
     CHECK IF CURRENT PATH IS LOGIN PAGE
     ============================================ */
  const isLoginPage = pathname === "/admin";

  /* ============================================
     HANDLE LOGOUT
     ============================================ */
  const handleLogout = () => {
    // Remove semua cookie admin
    document.cookie =
      "admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie =
      "admin-token=; path=/admin; expires=Thu, 01 Jan 1970 00:00:01 GMT;";

    // Redirect ke login page (/admin)
    router.push("/admin");
    router.refresh(); // Force refresh untuk middleware
  };

  /* ============================================
     RENDER COMPONENT
     ============================================ */

  // Jika ini login page, render children langsung tanpa layout
  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ============================================
          TOP NAVIGATION HEADER
          ============================================ */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* ============================================
                LEFT SECTION - LOGO & BRAND
                ============================================ */}
            <div className="flex items-center">
              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>

              {/* LOGO & BRAND */}
              <Link href="/admin/dashboard" className="ml-2 lg:ml-0">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-blue-green">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div className="hidden md:block">
                    <div className="text-sm font-bold text-primary-navy">
                      GSE Admin
                    </div>
                    <div className="text-xs text-gray-500">{ADMIN_TAGLINE}</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* ============================================
                CENTER SECTION - DESKTOP NAVIGATION
                ============================================ */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-1">
              {ADMIN_NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/")
                      ? "bg-primary-blue/10 text-primary-blue"
                      : "text-gray-700 hover:bg-gray-100 hover:text-primary-blue"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* ============================================
                RIGHT SECTION - ACTIONS
                ============================================ */}
            <div className="flex items-center space-x-3">
              {/* VIEW SITE BUTTON */}
              <Link
                href="/"
                target="_blank"
                className="hidden items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 sm:flex"
                title="Lihat Website"
              >
                <Home className="h-4 w-4" />
                <span className="hidden lg:inline">View Site</span>
              </Link>

              {/* LOGOUT BUTTON */}
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="flex items-center space-x-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>

          {/* ============================================
              MOBILE NAVIGATION MENU
              ============================================ */}
          {isMobileMenuOpen && (
            <div className="border-t border-gray-200 bg-white lg:hidden">
              <div className="py-2">
                {ADMIN_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium ${
                      pathname === item.href ||
                      pathname.startsWith(item.href + "/")
                        ? "bg-primary-blue/10 text-primary-blue"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ============================================
          MAIN CONTENT AREA
          ============================================ */}
      <main>
        <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </main>

      {/* ============================================
          LOGOUT CONFIRMATION MODAL
          ============================================ */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-full bg-red-100 p-2">
                <LogOut className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-navy">
                Konfirmasi Logout
              </h3>
            </div>
            <p className="mb-6 text-gray-600">
              Anda akan keluar dari admin panel. Anda harus login kembali via{" "}
              <code className="rounded bg-gray-100 px-1">/admin</code> untuk
              mengakses dashboard.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-gradient-blue-green px-4 py-2 font-medium text-white hover:shadow-lg"
              >
                Ya, Logout Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================
          ADMIN FOOTER (MINIMAL)
          ============================================ */}
      <footer className="mt-8 border-t border-gray-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <div>
            <span className="font-medium text-primary-navy">
              GSE Admin Panel
            </span>{" "}
            • v1.0 • © {new Date().getFullYear()}
          </div>
          <div className="flex items-center space-x-4">
            <span>Login hanya via /admin</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Cookie expire: 8 jam</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
