/* ============================================
   app/admin/layout.tsx
   ADMIN PANEL LAYOUT WITH AUTH
   ============================================ */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  LogOut,
  BarChart3,
  FileText,
  Shield,
  Menu,
  X,
  ShoppingCart,
  MessageSquare,
  Calendar,
} from "lucide-react";

/* ============================================
   ADMIN MENU ITEMS
   ============================================ */
const ADMIN_MENU_ITEMS = [
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    label: "Dashboard",
    href: "/admin",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: "Users",
    href: "/admin/users",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "Courses",
    href: "/admin/courses",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: <Package className="h-5 w-5" />,
    label: "Products",
    href: "/admin/products",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    label: "Orders",
    href: "/admin/orders",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    label: "Blog",
    href: "/admin/blog",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    label: "Analytics",
    href: "/admin/analytics",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    label: "Schedule",
    href: "/admin/schedule",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Settings",
    href: "/admin/settings",
    color: "text-gray-600",
    bgColor: "bg-gray-100",
  },
];

/* ============================================
   ADMIN LAYOUT COMPONENT
   ============================================ */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  /* ============================================
     HANDLE LOGOUT
     ============================================ */
  const handleLogout = () => {
    // Remove cookie
    document.cookie =
      "admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/login");
  };

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ============================================
          SIDEBAR (DESKTOP)
          ============================================ */}
      <aside className="hidden w-64 border-r border-gray-200 bg-white md:block">
        <div className="sticky top-0 h-screen overflow-y-auto">
          <div className="p-6">
            {/* ============================================
                LOGO & ADMIN BADGE
                ============================================ */}
            <div className="mb-8">
              <Link href="/admin" className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-blue-green">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-primary-navy">
                    GSE Admin
                  </div>
                  <div className="text-xs text-gray-500">
                    Administrator Panel
                  </div>
                </div>
              </Link>
            </div>

            {/* ============================================
                ADMIN NAVIGATION MENU
                ============================================ */}
            <nav className="space-y-1">
              {ADMIN_MENU_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-all hover:bg-gray-100 hover:pl-5"
                >
                  <div
                    className={`rounded-lg p-2 ${item.bgColor} ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* ============================================
                ADMIN INFO CARD
                ============================================ */}
            <div className="mt-8 rounded-xl bg-gradient-to-r from-primary-blue/5 to-primary-green/5 p-4 border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-blue-green flex items-center justify-center">
                  <span className="font-bold text-white">A</span>
                </div>
                <div>
                  <div className="font-medium text-primary-navy">Admin GSE</div>
                  <div className="text-xs text-gray-500">Super Admin</div>
                </div>
              </div>
            </div>

            {/* ============================================
                FOOTER ACTIONS
                ============================================ */}
            <div className="mt-8 space-y-2 border-t border-gray-200 pt-6">
              {/* VIEW SITE */}
              <Link
                href="/"
                target="_blank"
                className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100"
              >
                <div className="rounded-lg bg-gray-100 p-2">
                  <LayoutDashboard className="h-5 w-5" />
                </div>
                <span>View Site</span>
              </Link>

              {/* LOGOUT BUTTON */}
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-red-50 hover:text-red-600"
              >
                <div className="rounded-lg bg-red-100 p-2">
                  <LogOut className="h-5 w-5 text-red-600" />
                </div>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* ============================================
          MAIN CONTENT AREA
          ============================================ */}
      <main className="flex-1">
        {/* ============================================
            MOBILE HEADER
            ============================================ */}
        <header className="sticky top-0 z-10 border-b border-gray-200 bg-white p-4 md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-blue-green flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-primary-navy">Admin</span>
              </div>
            </div>

            {/* MOBILE LOGOUT */}
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="rounded-lg p-2 hover:bg-red-50"
            >
              <LogOut className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
              <nav className="grid grid-cols-2 gap-2">
                {ADMIN_MENU_ITEMS.slice(0, 6).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-2 rounded-lg p-3 hover:bg-gray-100"
                  >
                    <div
                      className={`rounded-lg p-2 ${item.bgColor} ${item.color}`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* ============================================
            PAGE CONTENT
            ============================================ */}
        <div className="p-4 md:p-6 lg:p-8">{children}</div>
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
              Anda akan keluar dari admin panel. Pastikan semua perubahan telah
              disimpan.
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
                Ya, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
