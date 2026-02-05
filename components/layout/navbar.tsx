/* ============================================
   components/layout/navbar.tsx
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
  { name: "GSE Class", href: "/gse-class"},
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

  /* ============================================
     LOGO CONFIGURATION BASED ON PAGE TYPE
     ============================================ */
  const getLogoConfig = () => {
    if (!isSidebarPage) {
      // NON-SIDEBAR PAGES: Always use FULL logo (like sidebar expanded)
      return {
        logo: LOGO_CONFIG.full,
        widthClass: SIDEBAR_WIDTHS.expanded, // w-64
        marginClass: "ml-9" // Same as sidebar expanded
      };
    } else {
      // SIDEBAR PAGES: Follow sidebar state
      return {
        logo: isCollapsed ? LOGO_CONFIG.simple : LOGO_CONFIG.full,
        widthClass: isCollapsed ? SIDEBAR_WIDTHS.collapsed : SIDEBAR_WIDTHS.expanded,
        marginClass: isCollapsed ? "ml-1" : "ml-9"
      };
    }
  };

  const { logo, widthClass, marginClass } = getLogoConfig();

  /* ============================================
     MENU SPACING - SAME FOR ALL PAGES NOW
     ============================================ */
  const menuSpacing = "pl-4"; // Consistent spacing

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
              LEFT SECTION - LOGO (CONSISTENT LAYOUT)
              ============================================ */}
          <div 
            className={`flex-shrink-0 transition-all duration-300 ${widthClass}`}
          >
            <div className={`${marginClass} transition-all duration-300`}>
              <Link href="/" className="flex items-center">
                <div
                  className={`relative ${logo.height} ${logo.width}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes={logo.sizes}
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* ============================================
              CENTER SECTION - NAV MENU (CONSISTENT SPACING)
              ============================================ */}
          <div className={`hidden md:flex flex-1 items-center justify-start space-x-6 ${menuSpacing}`}>
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