/* ============================================
   components/layout/navbar.tsx
   UPDATED - LOGO VERTICALLY ALIGNED WITH SIDEBAR
   ============================================ */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, User } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import MobileNav from "./mobile-nav";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/sidebar-context";

/* ============================================
   NAVIGATION ITEMS
   ============================================ */
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
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

/* ============================================
   LOGO CONFIGURATION
   ============================================ */
const LOGO_CONFIG = {
  full: {
    src: "/logo/gse.png",
    alt: "GSE Jogja Logo",
    height: "h-10",
    width: "w-32",
    sizes: "128px",
  },
  simple: {
    src: "/logo/logo-g.png",
    alt: "GSE Logo",
    height: "h-8",
    width: "w-8",
    sizes: "32px",
  },
};

/* ============================================
   SIDEBAR WIDTH CONSTANTS
   ============================================ */
const SIDEBAR_WIDTHS = {
  expanded: "w-64",  // 256px
  collapsed: "w-20", // 80px
} as const;

/* ============================================
   NAVBAR COMPONENT
   ============================================ */
export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isScrolled = useScroll(50);
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();

  const isHomePage = pathname === "/";
  const shouldBeTransparent = isHomePage && !isScrolled;

  // Check if we're on a sidebar page
  const isSidebarPage = pathname.startsWith('/gse-class') || 
                       pathname.startsWith('/gse-mac') || 
                       pathname.startsWith('/blog');

  // Determine which logo to use based on sidebar state AND page
  const currentLogo = (isSidebarPage && isCollapsed) 
    ? LOGO_CONFIG.simple 
    : LOGO_CONFIG.full;

  // Calculate logo position - CENTER OF SIDEBAR WIDTH
  const getLogoPosition = () => {
    if (!isSidebarPage) return "ml-0";
    
    if (isCollapsed) {
      // Sidebar collapsed (20px = 5rem)
      // Logo simple (G) harus di tengah dari 5rem
      // w-8 (32px) di tengah w-20 (80px) = (80-32)/2 = 24px = ml-6
      return "ml-1"; // 1.5rem = 24px
    } else {
      // Sidebar expanded (64px = 16rem)
      // Logo full harus di tengah dari 16rem
      // w-32 (128px) di tengah w-64 (256px) = (256-128)/2 = 64px = ml-16
      return "ml-9"; // 4rem = 64px
    }
  };

  // Get sidebar width class for transition
  const sidebarWidthClass = isSidebarPage 
    ? (isCollapsed ? SIDEBAR_WIDTHS.collapsed : SIDEBAR_WIDTHS.expanded)
    : "";

  /* ============================================
     HELPER FUNCTIONS
     ============================================ */
  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          shouldBeTransparent
            ? "bg-transparent text-gray-900"
            : "bg-white text-primary-navy shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="flex h-16 items-center px-4 lg:px-6">
          
          {/* ============================================
              LEFT SECTION - LOGO (VERTICALLY ALIGNED WITH SIDEBAR)
              ============================================ */}
          <div 
            className={`flex-shrink-0 transition-all duration-300 ${
              isSidebarPage ? sidebarWidthClass : ""
            }`}
          >
            <div className={`${getLogoPosition()} transition-all duration-300`}>
              <Link href="/" className="flex items-center">
                <div
                  className={`relative ${currentLogo.height} ${currentLogo.width}`}
                >
                  <Image
                    src={currentLogo.src}
                    alt={currentLogo.alt}
                    fill
                    className="object-contain"
                    sizes={currentLogo.sizes}
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* ============================================
              CENTER SECTION - NAV MENU
              ============================================ */}
          <div className="hidden md:flex flex-1 items-center justify-start space-x-6 pl-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="relative group">
                <div className="relative">
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative px-1 py-2 ${
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

          {/* ============================================
              RIGHT SECTION - LOGIN & MOBILE MENU
              ============================================ */}
          <div className="flex items-center space-x-3">
            
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
      </nav>

      {/* ============================================
          MOBILE NAVIGATION
          ============================================ */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
}