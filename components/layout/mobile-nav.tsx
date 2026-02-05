/* ============================================
   components/layout/mobile-nav.tsx
   MOBILE NAVIGATION COMPONENT - GSE JOGJA
   ============================================ */

"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

/* ============================================
   PROPS INTERFACE
   ============================================ */
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{
    name: string;
    href: string;
    submenu?: Array<{ name: string; href: string }>;
  }>;
}

/* ============================================
   MOBILE NAVIGATION COMPONENT
   ============================================ */
export default function MobileNav({
  isOpen,
  onClose,
  navItems,
}: MobileNavProps) {
  /* ============================================
     HOOKS & STATE
     ============================================ */
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  /* ============================================
     HELPER FUNCTIONS
     ============================================ */
  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /* ============================================
     HANDLE SUBMENU TOGGLE
     ============================================ */
  const handleSubmenuToggle = (menuName: string) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  /* ============================================
     RENDER NAVIGATION ITEMS
     ============================================ */
  const renderNavItems = () =>
    navItems.map((item) => (
      <div key={item.name} className="border-b border-gray-100 last:border-b-0">
        {item.submenu ? (
          /* ============================================
             ITEM WITH SUBMENU
             ============================================ */
          <div>
            <button
              onClick={() => handleSubmenuToggle(item.name)}
              className={`flex w-full items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
                isActiveLink(item.href)
                  ? "bg-primary-blue/10 text-primary-blue"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="font-medium">{item.name}</span>
              <svg
                className={`h-4 w-4 transition-transform ${
                  openSubmenu === item.name ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* SUBMENU CONTENT */}
            {openSubmenu === item.name && (
              <div className="ml-6 mt-1 space-y-1">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    onClick={onClose}
                    className={`block px-4 py-2 text-sm rounded transition-colors ${
                      pathname === subItem.href
                        ? "bg-primary-blue/10 text-primary-blue"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* ============================================
             SINGLE NAV ITEM
             ============================================ */
          <Link
            href={item.href}
            onClick={onClose}
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
              isActiveLink(item.href)
                ? "bg-primary-blue/10 text-primary-blue"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="font-medium">{item.name}</span>
          </Link>
        )}
      </div>
    ));

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* ============================================
          BACKDROP OVERLAY
          ============================================ */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* ============================================
          SIDEBAR CONTAINER
          ============================================ */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        {/* ============================================
            SIDEBAR HEADER
            ============================================ */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-100">
          <span className="text-lg font-semibold text-primary-navy">Menu</span>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* ============================================
            SIDEBAR CONTENT
            ============================================ */}
        <div className="overflow-y-auto h-[calc(100vh-4rem)] p-4">
          {/* NAVIGATION MENU */}
          <nav className="space-y-2">
            {renderNavItems()}
          </nav>

          {/* ============================================
              MOBILE LOGIN BUTTON
              ============================================ */}
          <div className="mt-8 px-4">
            <Link
              href="/login"
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-blue-green px-4 py-3 text-white font-medium hover:shadow-md transition-shadow"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Login / Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}