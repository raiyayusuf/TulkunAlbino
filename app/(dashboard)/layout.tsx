/* ============================================
   app/(dashboard)/layout.tsx
   DASHBOARD LAYOUT COMPONENT
   ============================================ */

import React from "react";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Settings,
  LogOut,
  User,
  ShoppingBag,
  Wrench,
} from "lucide-react";

/* ============================================
   DASHBOARD MENU ITEMS
   ============================================ */
const DASHBOARD_MENU_ITEMS = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Kelas Saya",
    href: "/dashboard/courses",
  },
  {
    icon: <ShoppingBag className="h-5 w-5" />,
    label: "Pesanan",
    href: "/dashboard/orders",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    label: "Service",
    href: "/dashboard/services",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Profil",
    href: "/dashboard/profile",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Pengaturan",
    href: "/dashboard/settings",
  },
];

/* ============================================
   LOGO CONFIGURATION
   ============================================ */
const LOGO_CONFIG = {
  text: "GSE",
  label: "Dashboard",
};

/* ============================================
   DASHBOARD LAYOUT COMPONENT
   ============================================ */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ============================================
          SIDEBAR (DESKTOP)
          ============================================ */}
      <aside className="hidden w-64 border-r border-gray-200 bg-white md:block">
        <div className="sticky top-0 p-6">
          {/* LOGO SECTION */}
          <div className="mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-blue-green flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {LOGO_CONFIG.text}
                </span>
              </div>
              <span className="text-lg font-bold text-primary-navy">
                {LOGO_CONFIG.label}
              </span>
            </Link>
          </div>

          {/* NAVIGATION MENU */}
          <nav className="space-y-2">
            {DASHBOARD_MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-primary-blue/10 hover:text-primary-blue"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* LOGOUT BUTTON */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <button className="flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-red-50 hover:text-red-600">
              <LogOut className="h-5 w-5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ============================================
          MAIN CONTENT AREA
          ============================================ */}
      <main className="flex-1">
        {/* MOBILE HEADER */}
        <div className="border-b border-gray-200 bg-white p-4 md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-blue-green flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {LOGO_CONFIG.text}
                </span>
              </div>
              <span className="font-bold text-primary-navy">
                {LOGO_CONFIG.label}
              </span>
            </Link>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
