/* ============================================
   app/components/layout/navbar.tsx
   NAVBAR COMPONENT - GSE JOGJA
   ============================================ */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";

/* ============================================
   NAVIGATION ITEMS DATA
   ============================================ */
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "GSE Class", href: "/gse-class" },
  { name: "GSE Mac", href: "/gse-mac" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

/* ============================================
   LOGO CONFIGURATION
   ============================================ */
const LOGO_CONFIG = {
  height: "h-10",
  width: "w-32",
  alt: "GSE Jogja Logo",
  src: "/logo/gse.png",
  sizes: "128px",
};

/* ============================================
   NAVBAR COMPONENT
   ============================================ */
export default function Navbar() {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      {/* NAVBAR CONTAINER */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* ============================================
              LOGO SECTION
              ============================================ */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className={`relative ${LOGO_CONFIG.height} ${LOGO_CONFIG.width}`}
            >
              <Image
                src={LOGO_CONFIG.src}
                alt={LOGO_CONFIG.alt}
                fill
                className="object-contain"
                sizes={LOGO_CONFIG.sizes}
              />
            </div>
          </Link>

          {/* ============================================
              DESKTOP NAVIGATION MENU
              ============================================ */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-primary-navy transition-colors hover:text-primary-blue"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ============================================
              LOGIN/USER BUTTONS
              ============================================ */}
          <div className="flex items-center space-x-4">
            {/* DESKTOP LOGIN BUTTON */}
            <Link
              href="/login"
              className="hidden md:flex items-center space-x-2 rounded-lg bg-gradient-blue-green px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-md"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>

            {/* MOBILE LOGIN ICON */}
            <Link
              href="/login"
              className="md:hidden rounded-full p-2 text-primary-navy hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
