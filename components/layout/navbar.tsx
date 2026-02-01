// components/layout/navbar.tsx - DENGAN BLOG
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, User } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import MobileNav from "./mobile-nav";
import { usePathname } from "next/navigation";

// UPDATE NAV_ITEMS DENGAN BLOG
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  {
    name: "GSE Class",
    href: "/gse-class",
    submenu: [
      { name: "IoT", href: "/gse-class/iot" },
      { name: "Coding Python", href: "/gse-class/coding-python" },
      { name: "Coding Scratch", href: "/gse-class/coding-scratch" },
      { name: "Robot Innovation", href: "/gse-class/robot-innovation" },
      { name: "Design Graphics", href: "/gse-class/design-graphics" },
    ],
  },
  { name: "GSE Mac", href: "/gse-mac" },
  { name: "Blog", href: "/blog" }, // ← TAMBAH BLOG DI SINI
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const LOGO_CONFIG = {
  height: "h-10",
  width: "w-32",
  alt: "GSE Jogja Logo",
  src: "/logo/gse.png",
  sizes: "128px",
};

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isScrolled = useScroll(50);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const shouldBeTransparent = isHomePage && !isScrolled;

  // Helper untuk check active link termasuk nested routes
  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          shouldBeTransparent
            ? "bg-transparent text-gray-900"
            : "bg-white text-primary-navy shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* LOGO */}
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

            {/* DESKTOP NAV MENU */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.name} className="relative group">
                  <div className="relative">
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors relative ${
                        isActiveLink(item.href)
                          ? "text-primary-blue"
                          : shouldBeTransparent
                            ? "text-gray-800 hover:text-primary-blue"
                            : "text-primary-navy hover:text-primary-blue"
                      }`}
                    >
                      {item.name}

                      {/* INDICATOR STRIP - HOVER */}
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>

                      {/* INDICATOR STRIP - ACTIVE PAGE */}
                      {isActiveLink(item.href) && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-blue"></span>
                      )}
                    </Link>
                  </div>

                  {/* Dropdown for GSE Class */}
                  {item.submenu && (
                    <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-50">
                      <div className="rounded-lg bg-white shadow-lg border border-gray-200 p-2 min-w-[200px]">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm rounded transition-colors ${
                              pathname === subItem.href
                                ? "bg-primary-blue/10 text-primary-blue"
                                : "text-gray-700 hover:bg-blue-50 hover:text-primary-blue"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center space-x-4">
              {/* Desktop Login Button */}
              <Link
                href="/login"
                className={`hidden md:flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  shouldBeTransparent
                    ? "bg-transparent text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white"
                    : "bg-gradient-blue-green text-white hover:shadow-md"
                }`}
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className={`md:hidden rounded-full p-2 transition-colors ${
                  shouldBeTransparent
                    ? "text-gray-800 hover:bg-gray-100/30 hover:text-primary-blue"
                    : "text-primary-navy hover:bg-gray-100 hover:text-primary-blue"
                }`}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
