// app/(marketing)/gse-class/sidebar-navigation.tsx
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

export default function SidebarNavigation() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`h-full border-r border-gray-200 bg-white transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`} // HAPUS: overflow-y-auto
    >
      {/* Konten utama - fixed height dengan flex column */}
      <div className="flex h-full flex-col">
        {/* Bagian atas (logo + navigation) - bisa scroll kalau perlu */}
        <div className="flex-1 overflow-y-auto p-4">
          {" "}
          {/* TAMBAH: overflow-y-auto di sini */}
          {/* Logo & Toggle Button */}
          <div className={`mb-8 ${isCollapsed ? "" : "space-y-2"}`}>
            {isCollapsed ? (
              // Collapsed State
              <div className="space-y-4">
                {/* Compact Logo */}
                <div className="flex justify-center">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/logo/logo-c.png"
                      alt="GSE Class"
                      fill
                      className="object-contain"
                      sizes="60px"
                    />
                  </div>
                </div>

                {/* Toggle Button untuk Expand */}
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
              // Expanded State
              <div>
                {/* Baris 1: Logo dan Toggle Button sejajar */}
                <div className="flex items-center justify-between">
                  {/* Logo Full */}
                  <div className="relative h-28 w-40">
                    <Image
                      src="/logo/gse-class.png"
                      alt="GSE Class"
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                    aria-label="Collapse sidebar"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>

                {/* Baris 2: Learning Platform text */}
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Learning Platform</p>
                </div>
              </div>
            )}
          </div>
          {/* Navigation */}
          <nav className="space-y-1">
            {categories.map((category) => {
              const isActive =
                pathname === category.href ||
                (category.id === "all" && pathname === "/gse-class");

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
                  <div className={isActive ? "text-white" : category.color}>
                    {category.icon}
                  </div>

                  {!isCollapsed && (
                    <>
                      <span
                        className={`ml-3 font-medium ${isActive ? "text-white" : "text-gray-700"}`}
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
          {/* Info Box (hanya visible ketika expanded) */}
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
          {/* Stats */}
          <div
            className={`mt-8 border-t border-gray-200 pt-6 ${isCollapsed ? "text-center" : ""}`}
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

        {/* Bagian bawah (Home Link) - tetap di bawah */}
        <div className="border-t border-gray-200">
          {/* Home Link untuk desktop (hanya visible ketika expanded) */}
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

          {/* Mobile back button (always visible on mobile) */}
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
