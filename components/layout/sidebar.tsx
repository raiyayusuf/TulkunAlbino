/* ============================================
   components/layout/sidebar.tsx
   MINIMAL SIDEBAR - NO INFO, NO STATS, NO HOME LINK
   ============================================ */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronLeft, Menu } from "lucide-react";

/* ============================================
   TYPE DEFINITIONS
   ============================================ */
export interface SidebarItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  href: string;
  color?: string;
}

export interface SidebarLogo {
  expanded: {
    src: string;
    alt: string;
    height: string;
    width: string;
  };
  collapsed: {
    src: string;
    alt: string;
    height: string;
    width: string;
  };
}

export interface SidebarProps {
  items: SidebarItem[];
  logo: SidebarLogo;
  title?: string;
  subtitle?: string;
}

/* ============================================
   SIDEBAR COMPONENT
   ============================================ */
export default function Sidebar({
  items,
  logo,
  title,
  subtitle,
}: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  /* ============================================
     HELPER FUNCTIONS
     ============================================ */
  const isActiveItem = (itemHref: string) => {
    return pathname === itemHref || pathname.startsWith(itemHref + "/");
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div
      className={`h-full border-r border-gray-200 bg-white transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* LAYOUT CONTAINER */}
      <div className="flex h-full flex-col">
        {/* MAIN CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* LOGO & TOGGLE SECTION */}
          <div className={`mb-8 ${isCollapsed ? "" : "space-y-2"}`}>
            {/* COLLAPSED STATE */}
            {isCollapsed ? (
              <div className="space-y-6">
                {/* COMPACT LOGO */}
                <div className="flex justify-center">
                  <div
                    className={`relative ${logo.collapsed.height} ${logo.collapsed.width}`}
                  >
                    <Image
                      src={logo.collapsed.src}
                      alt={logo.collapsed.alt}
                      fill
                      className="object-contain"
                      sizes="60px"
                      priority
                    />
                  </div>
                </div>

                {/* EXPAND TOGGLE BUTTON */}
                <div className="flex justify-center">
                  <button
                    onClick={toggleSidebar}
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                    aria-label="Expand sidebar"
                    title="Expand sidebar"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* EXPANDED STATE */
              <div>
                {/* LOGO AND TOGGLE ROW */}
                <div className="flex items-center justify-between">
                  {/* FULL LOGO */}
                  <div
                    className={`relative ${logo.expanded.height} ${logo.expanded.width}`}
                  >
                    <Image
                      src={logo.expanded.src}
                      alt={logo.expanded.alt}
                      fill
                      className="object-contain"
                      sizes="128px"
                      priority
                    />
                  </div>

                  {/* COLLAPSE TOGGLE BUTTON */}
                  <button
                    onClick={toggleSidebar}
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                    aria-label="Collapse sidebar"
                    title="Collapse sidebar"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>

                {/* TITLE & SUBTITLE */}
                {title && (
                  <div className="mt-2">
                    <h2 className="text-lg font-bold text-primary-navy">
                      {title}
                    </h2>
                    {subtitle && (
                      <p className="text-sm text-gray-600">{subtitle}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* NAVIGATION MENU */}
          <nav className="space-y-1">
            {items.map((item) => {
              const isActive = isActiveItem(item.href);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center rounded-lg px-3 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-blue-green text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100 hover:shadow-sm"
                  } ${isCollapsed ? "justify-center px-2" : "justify-start"}`}
                  title={isCollapsed ? item.name : undefined}
                >
                  {/* ITEM ICON */}
                  <div
                    className={
                      isActive ? "text-white" : item.color || "text-gray-600"
                    }
                  >
                    {item.icon}
                  </div>

                  {/* ITEM NAME (VISIBLE WHEN EXPANDED) */}
                  {!isCollapsed && (
                    <>
                      <span
                        className={`ml-3 font-medium ${
                          isActive ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {item.name}
                      </span>
                      {isActive && (
                        <ChevronRight className="ml-auto h-4 w-4 text-white/80" />
                      )}
                    </>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* MOBILE TOGGLE ONLY */}
        <div className="border-t border-gray-200 p-4 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="flex w-full items-center justify-center rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            <Menu className="mr-2 h-4 w-4" />
            {isCollapsed ? "Tampilkan Menu" : "Sembunyikan Menu"}
          </button>
        </div>
      </div>
    </div>
  );
}
