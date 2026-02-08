/* ============================================
   app/admin/dashboard/page.tsx
   ADMIN DASHBOARD PAGE - CLEAN DESIGN
   NO SIDEBAR, TOP NAVIGATION ONLY
   ============================================ */

"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  BookOpen,
  Package,
  ShoppingCart,
  MessageSquare,
  TrendingUp,
  Plus,
  Calendar,
  FileText,
  Home,
  AlertCircle,
} from "lucide-react";

/* ============================================
   SYSTEM STATISTICS DATA
   ============================================ */
const SYSTEM_STATS = [
  {
    label: "Total Users",
    value: "128",
    change: "+12%",
    icon: <Users className="h-5 w-5" />,
    color: "bg-blue-500",
    changeColor: "text-green-600",
  },
  {
    label: "Active Courses",
    value: "24",
    change: "+3",
    icon: <BookOpen className="h-5 w-5" />,
    color: "bg-green-500",
    changeColor: "text-green-600",
  },
  {
    label: "Products",
    value: "156",
    change: "+8%",
    icon: <Package className="h-5 w-5" />,
    color: "bg-orange-500",
    changeColor: "text-green-600",
  },
  {
    label: "Pending Orders",
    value: "18",
    change: "-4",
    icon: <ShoppingCart className="h-5 w-5" />,
    color: "bg-red-500",
    changeColor: "text-red-600",
  },
  {
    label: "Blog Posts",
    value: "42",
    change: "+6",
    icon: <MessageSquare className="h-5 w-5" />,
    color: "bg-purple-500",
    changeColor: "text-green-600",
  },
  {
    label: "Monthly Revenue",
    value: "Rp 25.4Jt",
    change: "+18%",
    icon: <TrendingUp className="h-5 w-5" />,
    color: "bg-cyan-500",
    changeColor: "text-green-600",
  },
];

/* ============================================
   QUICK ACTIONS
   ============================================ */
const QUICK_ACTIONS = [
  {
    label: "Tulis Blog",
    description: "Buat artikel baru",
    icon: <MessageSquare className="h-5 w-5" />,
    href: "/admin/blog/new",
    color: "bg-purple-500",
  },
  {
    label: "Tambah Kursus",
    description: "Buat kelas baru",
    icon: <Plus className="h-5 w-5" />,
    href: "/admin/courses/new",
    color: "bg-green-500",
  },
  {
    label: "Upload Produk",
    description: "Tambah produk Apple",
    icon: <Package className="h-5 w-5" />,
    href: "/admin/products/new",
    color: "bg-orange-500",
  },
  {
    label: "Jadwal Baru",
    description: "Atur jadwal kelas",
    icon: <Calendar className="h-5 w-5" />,
    href: "/admin/schedule/new",
    color: "bg-blue-500",
  },
];

/* ============================================
   ADMIN DASHBOARD COMPONENT
   ============================================ */
export default function AdminDashboardPage() {
  const currentDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-6">
      {/* ============================================
          PAGE HEADER - SIMPLE
          ============================================ */}
      <div>
        <h1 className="text-2xl font-bold text-primary-navy md:text-3xl">
          Dashboard Admin
        </h1>
        <p className="text-gray-600">
          Selamat datang kembali, Admin! • {currentDate}
        </p>
      </div>

      {/* ============================================
          STATS GRID - COMPACT
          ============================================ */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {SYSTEM_STATS.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
                <p className="mt-1 text-xl font-bold text-primary-navy">
                  {stat.value}
                </p>
                <p className={`mt-1 text-xs ${stat.changeColor}`}>
                  {stat.change} dari bulan lalu
                </p>
              </div>
              <div className={`rounded-lg p-2 ${stat.color} text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ============================================
          QUICK ACTIONS - SIMPLE GRID
          ============================================ */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-bold text-primary-navy">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_ACTIONS.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-primary-blue hover:shadow-md"
            >
              <div className="mb-3">
                <div
                  className={`inline-flex rounded-lg p-2 ${action.color} text-white group-hover:scale-105 transition-transform`}
                >
                  {action.icon}
                </div>
              </div>
              <h3 className="font-medium text-primary-navy group-hover:text-primary-blue">
                {action.label}
              </h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* ============================================
          WELCOME & ADMIN INFO
          ============================================ */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* WELCOME MESSAGE */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-bold text-primary-navy">
            Selamat Datang di Admin Panel GSE Jogja
          </h2>
          <p className="text-gray-600 mb-4">
            Dashboard ini digunakan untuk mengelola konten website GSE Jogja.
            Anda dapat membuat blog post, mengelola kursus, produk, dan melihat
            analytics.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-blue-green px-4 py-2 text-sm font-medium text-white hover:shadow-md"
            >
              <FileText className="h-4 w-4" />
              Kelola Blog
            </Link>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-blue px-4 py-2 text-sm font-medium text-primary-blue hover:bg-primary-blue/5"
            >
              <Home className="h-4 w-4" />
              Lihat Website
            </Link>
          </div>
        </div>

        {/* SECURITY REMINDER */}
        <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="mb-2 font-bold text-yellow-800">Keamanan Admin</h3>
              <ul className="space-y-1 text-sm text-yellow-700">
                <li>
                  • Login hanya via{" "}
                  <code className="bg-yellow-100 px-1 rounded">/admin</code>
                </li>
                <li>• Cookie akan expire setelah 8 jam</li>
                <li>• Jangan bagikan credential login</li>
                <li>• Selalu logout setelah selesai</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          ADMIN INFO CARD (SIMPLE)
          ============================================ */}
      <div className="rounded-xl border border-gray-200 bg-gradient-to-r from-primary-blue/5 to-primary-green/5 p-6">
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-blue-green">
            <span className="font-bold text-white">A</span>
          </div>
          <div>
            <div className="font-medium text-primary-navy">Admin GSE</div>
            <div className="text-sm text-gray-600">
              Super Admin • Last login: Today
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
