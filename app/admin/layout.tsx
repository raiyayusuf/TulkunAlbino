/* ============================================
   app/admin/layout.tsx
   ADMIN PANEL LAYOUT WITH SESSION-BASED AUTH
   CLEAN DESIGN - NO SIDEBAR, TOP NAVIGATION ONLY
   ============================================ */

"use client";

import React, { useState, useEffect } from "react";
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
  AlertCircle,
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
   SESSION CONFIGURATION
   ============================================ */
const SESSION_CONFIG = {
  sessionStorageKey: "admin-session",
  activityKey: "admin-last-activity",
  inactivityTimeout: 30 * 60 * 1000, // 30 menit
  cookieName: "admin-token",
};

/* ============================================
   TAGLINE FOR ADMIN PANEL
   ============================================ */
const ADMIN_TAGLINE = "Solutif, Edukatif, dan Progresif";

/* ============================================
   ADMIN LAYOUT COMPONENT - WITH SESSION VALIDATION
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
  const [sessionValid, setSessionValid] = useState<boolean | null>(null);

  /* ============================================
     CHECK IF CURRENT PATH IS LOGIN PAGE
     ============================================ */
  const isLoginPage = pathname === "/admin";

  /* ============================================
     CLIENT-SIDE SESSION VALIDATION
     ============================================ */
  useEffect(() => {
    // Hanya jalan di client side
    if (typeof window === "undefined") return;

    const validateSession = () => {
      const hasSession = sessionStorage.getItem(
        SESSION_CONFIG.sessionStorageKey,
      );
      const lastActivity = sessionStorage.getItem(SESSION_CONFIG.activityKey);

      // SCENARIO 1: Tidak ada session sama sekali
      if (!hasSession) {
        setSessionValid(false);

        // Jika bukan di login page, redirect ke login
        if (!isLoginPage) {
          // Hapus cookie untuk konsistensi
          document.cookie = `${SESSION_CONFIG.cookieName}=; path=/admin; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
          router.push("/admin");
        }
        return;
      }

      // SCENARIO 2: Check inactivity timeout
      if (lastActivity) {
        const inactiveTime = Date.now() - parseInt(lastActivity);
        if (inactiveTime > SESSION_CONFIG.inactivityTimeout) {
          // Session expired karena inactive
          handleAutoLogout();
          return;
        }
      }

      // SCENARIO 3: Session valid
      setSessionValid(true);

      // Jika session valid DAN di login page, redirect ke dashboard
      if (isLoginPage) {
        router.push("/admin/dashboard");
      }
    };

    validateSession();

    // Update activity timestamp on user interaction
    const updateActivity = () => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(
          SESSION_CONFIG.activityKey,
          Date.now().toString(),
        );
      }
    };

    // Add event listeners for activity tracking
    const events = ["mousemove", "keypress", "click", "scroll"];
    events.forEach((event) => {
      window.addEventListener(event, updateActivity);
    });

    // Check session periodically (every minute)
    const sessionCheckInterval = setInterval(validateSession, 60000);

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, updateActivity);
      });
      clearInterval(sessionCheckInterval);
    };
  }, [pathname, router, isLoginPage]);

  /* ============================================
     HANDLE AUTO LOGOUT (INACTIVITY)
     ============================================ */
  const handleAutoLogout = () => {
    // Hapus semua session data
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(SESSION_CONFIG.sessionStorageKey);
      sessionStorage.removeItem(SESSION_CONFIG.activityKey);
    }

    // Hapus cookie
    document.cookie = `${SESSION_CONFIG.cookieName}=; path=/admin; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;

    // Redirect ke login dengan pesan
    const url = new URL("/admin", window.location.origin);
    url.searchParams.set("error", "session_expired");
    window.location.href = url.toString();
  };

  /* ============================================
     HANDLE MANUAL LOGOUT
     ============================================ */
  const handleLogout = () => {
    // Hapus semua session data
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(SESSION_CONFIG.sessionStorageKey);
      sessionStorage.removeItem(SESSION_CONFIG.activityKey);
    }

    // Hapus cookie
    document.cookie = `${SESSION_CONFIG.cookieName}=; path=/admin; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    document.cookie = `${SESSION_CONFIG.cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;

    // Redirect ke login page
    router.push("/admin");
    router.refresh();
  };

  /* ============================================
     RENDER COMPONENT
     ============================================ */

  // Jika ini login page, render children langsung tanpa layout
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Show loading while checking session
  if (sessionValid === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Memvalidasi session...</p>
        </div>
      </div>
    );
  }

  // Show error if session invalid
  if (sessionValid === false && !isLoginPage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-primary-navy mb-2">
            Session Tidak Valid
          </h2>
          <p className="text-gray-600 mb-4">
            Anda perlu login untuk mengakses halaman ini.
          </p>
          <button
            onClick={() => router.push("/admin")}
            className="rounded-lg bg-gradient-blue-green px-6 py-2 font-medium text-white hover:shadow-lg"
          >
            Ke Halaman Login
          </button>
        </div>
      </div>
    );
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
              Anda akan keluar dari admin panel. Session browser ini akan
              dihapus dan Anda harus login kembali untuk mengakses dashboard.
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
            <span className="font-medium text-primary-navy">GSE Admin</span> • ©{" "}
            {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}
