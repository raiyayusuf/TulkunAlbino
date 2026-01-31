/* ============================================
   app/(marketing)/gse-class/sidebar-navigation.tsx
   SIDEBAR NAVIGATION COMPONENT - GSE CLASS
   ============================================ */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Code2,
  MousePointerClick,
  Palette,
  Cpu,
  Bot,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Home,
} from "lucide-react";

/* ============================================
   NAVIGATION CATEGORIES DATA
   ============================================ */
const categories = [
  {
    id: "all",
    name: "Semua Kelas",
    icon: <BookOpen className="h-5 w-5" />,
    href: "/gse-class",
    color: "text-primary-blue",
  },
  {
    id: "coding-python",
    name: "Coding Python",
    icon: <Code2 className="h-5 w-5" />,
    href: "/gse-class/category/coding-python",
    color: "text-blue-600",
  },
  {
    id: "coding-scratch",
    name: "Coding Scratch",
    icon: <MousePointerClick className="h-5 w-5" />,
    href: "/gse-class/category/coding-scratch",
    color: "text-orange-600",
  },
  {
    id: "design-graphics",
    name: "Design Graphics",
    icon: <Palette className="h-5 w-5" />,
    href: "/gse-class/category/design-graphics",
    color: "text-purple-600",
  },
  {
    id: "iot",
    name: "Internet of Things",
    icon: <Cpu className="h-5 w-5" />,
    href: "/gse-class/category/iot",
    color: "text-green-600",
  },
  {
    id: "robot-innovation",
    name: "Robot Innovation",
    icon: <Bot className="h-5 w-5" />,
    href: "/gse-class/category/robot-innovation",
    color: "text-red-600",
  },
];

/* ============================================
   LOGO DIMENSIONS CONFIGURATION
   ============================================ */
const LOGO_CONFIG = {
  expanded: {
    height: "h-28",
    width: "w-40",
    sizes: "128px",
  },
  collapsed: {
    height: "h-10",
    width: "w-10",
    sizes: "60px",
  },
};

/* ============================================
   SIDEBAR NAVIGATION COMPONENT
   ============================================ */
export default function SidebarNavigation() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  /* ============================================
     HELPER FUNCTIONS
     ============================================ */
  const isActiveCategory = (categoryHref: string, categoryId: string) => {
    return (
      pathname === categoryHref ||
      (categoryId === "all" && pathname === "/gse-class")
    );
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
        {/* ============================================
            MAIN CONTENT AREA (SCROLLABLE)
            ============================================ */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* ============================================
              LOGO & TOGGLE SECTION
              ============================================ */}
          <div className={`mb-8 ${isCollapsed ? "" : "space-y-2"}`}>
            {/* COLLAPSED STATE */}
            {isCollapsed ? (
              <div className="space-y-4">
                {/* COMPACT LOGO */}
                <div className="flex justify-center">
                  <div
                    className={`relative ${LOGO_CONFIG.collapsed.height} ${LOGO_CONFIG.collapsed.width}`}
                  >
                    <Image
                      src="/logo/logo-c.png"
                      alt="GSE Class"
                      fill
                      className="object-contain"
                      sizes={LOGO_CONFIG.collapsed.sizes}
                    />
                  </div>
                </div>

                {/* EXPAND TOGGLE BUTTON */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setIsCollapsed(false)}
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
                    className={`relative ${LOGO_CONFIG.expanded.height} ${LOGO_CONFIG.expanded.width}`}
                  >
                    <Image
                      src="/logo/gse-class.png"
                      alt="GSE Class"
                      fill
                      className="object-contain"
                      sizes={LOGO_CONFIG.expanded.sizes}
                    />
                  </div>

                  {/* COLLAPSE TOGGLE BUTTON */}
                  <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                    aria-label="Collapse sidebar"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>

                {/* SUBTITLE */}
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Learning Platform</p>
                </div>
              </div>
            )}
          </div>

          {/* ============================================
              NAVIGATION MENU
              ============================================ */}
          <nav className="space-y-1">
            {categories.map((category) => {
              const isActive = isActiveCategory(category.href, category.id);

              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className={`flex items-center rounded-lg px-3 py-3 transition-colors ${
                    isActive
                      ? "bg-gradient-blue-green text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } ${isCollapsed ? "justify-center" : "justify-start"}`}
                  title={isCollapsed ? category.name : undefined}
                >
                  {/* CATEGORY ICON */}
                  <div className={isActive ? "text-white" : category.color}>
                    {category.icon}
                  </div>

                  {/* CATEGORY NAME (VISIBLE WHEN EXPANDED) */}
                  {!isCollapsed && (
                    <>
                      <span
                        className={`ml-3 font-medium ${
                          isActive ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {category.name}
                      </span>
                      {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                    </>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ============================================
              INFO BOX (VISIBLE WHEN EXPANDED)
              ============================================ */}
          {!isCollapsed && (
            <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <h3 className="text-sm font-semibold text-primary-navy">
                💡 Info
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Pilih kategori untuk melihat detail kelas.
              </p>
            </div>
          )}

          {/* ============================================
              STATISTICS SECTION
              ============================================ */}
          <div
            className={`mt-8 border-t border-gray-200 pt-6 ${
              isCollapsed ? "text-center" : ""
            }`}
          >
            {isCollapsed ? (
              <div className="text-primary-navy">
                <div className="text-lg font-bold">5+</div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-navy">5+</div>
                <div className="text-sm text-gray-600">Kategori Kelas</div>
              </div>
            )}
          </div>
        </div>

        {/* ============================================
            FOOTER AREA (FIXED AT BOTTOM)
            ============================================ */}
        <div className="border-t border-gray-200">
          {/* DESKTOP HOME LINK (VISIBLE WHEN EXPANDED) */}
          {!isCollapsed && (
            <div className="hidden p-4 lg:block">
              <Link
                href="/"
                className="flex items-center rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                <Home className="h-4 w-4" />
                <span className="ml-3">Kembali ke Home</span>
              </Link>
            </div>
          )}

          {/* MOBILE HOME LINK (ALWAYS VISIBLE) */}
          <div className="p-4 lg:hidden">
            <Link
              href="/"
              className="flex items-center text-sm text-gray-600 hover:text-primary-blue"
            >
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
