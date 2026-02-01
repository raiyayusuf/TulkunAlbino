/* ============================================
   app/admin/page.tsx
   ENHANCED ADMIN DASHBOARD HOMEPAGE
   ============================================ */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  BookOpen,
  Package,
  ShoppingCart,
  MessageSquare,
  TrendingUp,
  Calendar,
  AlertCircle,
  Plus,
  Eye,
  Download,
  Filter,
  Search,
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
  },
  {
    label: "Active Courses",
    value: "24",
    change: "+3",
    icon: <BookOpen className="h-5 w-5" />,
    color: "bg-green-500",
  },
  {
    label: "Products",
    value: "156",
    change: "+8%",
    icon: <Package className="h-5 w-5" />,
    color: "bg-orange-500",
  },
  {
    label: "Pending Orders",
    value: "18",
    change: "-4",
    icon: <ShoppingCart className="h-5 w-5" />,
    color: "bg-red-500",
  },
  {
    label: "Blog Posts",
    value: "42",
    change: "+6",
    icon: <MessageSquare className="h-5 w-5" />,
    color: "bg-purple-500",
  },
  {
    label: "Monthly Revenue",
    value: "Rp 25.4Jt",
    change: "+18%",
    icon: <TrendingUp className="h-5 w-5" />,
    color: "bg-cyan-500",
  },
];

/* ============================================
   RECENT ACTIVITIES
   ============================================ */
const RECENT_ACTIVITIES = [
  {
    id: 1,
    user: "Admin",
    action: "menambahkan kursus baru",
    target: "Python Advanced",
    time: "10 menit lalu",
    icon: "🎓",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    user: "Budi (Staff)",
    action: "memproses order",
    target: "#ORD-2024-0012",
    time: "45 menit lalu",
    icon: "📦",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    user: "Sistem",
    action: "user baru terdaftar",
    target: "andi@email.com",
    time: "2 jam lalu",
    icon: "👤",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    user: "Admin",
    action: "mengupdate produk",
    target: "MacBook Air M2",
    time: "5 jam lalu",
    icon: "💻",
    color: "bg-orange-100 text-orange-600",
  },
];

/* ============================================
   QUICK ACTIONS
   ============================================ */
const QUICK_ACTIONS = [
  {
    label: "Tambah Kursus",
    description: "Buat kelas baru",
    icon: <Plus className="h-5 w-5" />,
    href: "/admin/courses/new",
    color: "bg-blue-500",
  },
  {
    label: "Upload Produk",
    description: "Tambah produk Apple",
    icon: <Package className="h-5 w-5" />,
    href: "/admin/products/new",
    color: "bg-green-500",
  },
  {
    label: "Tulis Blog",
    description: "Buat artikel baru",
    icon: <MessageSquare className="h-5 w-5" />,
    href: "/admin/blog/new",
    color: "bg-purple-500",
  },
  {
    label: "Jadwal Baru",
    description: "Atur jadwal kelas",
    icon: <Calendar className="h-5 w-5" />,
    href: "/admin/schedule/new",
    color: "bg-orange-500",
  },
];

/* ============================================
   ADMIN DASHBOARD COMPONENT
   ============================================ */
export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState("");

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="space-y-6">
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-primary-navy md:text-3xl">
            Dashboard Admin
          </h1>
          <p className="text-gray-600">
            Selamat datang kembali, Admin!{" "}
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* SEARCH AND ACTIONS */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari di dashboard..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 sm:w-64"
            />
          </div>
          <button className="flex items-center justify-center gap-2 rounded-lg bg-gradient-blue-green px-4 py-2 font-medium text-white hover:shadow-lg">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* ============================================
          STATS GRID
          ============================================ */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {SYSTEM_STATS.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-primary-navy">
                  {stat.value}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
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
          QUICK ACTIONS
          ============================================ */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-primary-navy">Quick Actions</h2>
          <button className="flex items-center gap-2 text-sm text-primary-blue hover:underline">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_ACTIONS.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-primary-blue hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <div
                  className={`rounded-lg p-2 ${action.color} text-white group-hover:scale-110 transition-transform`}
                >
                  {action.icon}
                </div>
                <Eye className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-medium text-primary-navy group-hover:text-primary-blue">
                {action.label}
              </h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* ============================================
            RECENT ACTIVITIES
            ============================================ */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary-navy">
              Recent Activities
            </h2>
            <Link
              href="/admin/activities"
              className="text-sm text-primary-blue hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {RECENT_ACTIVITIES.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${activity.color}`}
                >
                  <span className="text-lg">{activity.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-primary-navy">
                        <span className="text-gray-900">{activity.user}</span>{" "}
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-600">{activity.target}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================
            SYSTEM ALERTS
            ============================================ */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary-navy">
              System Alerts
            </h2>
            <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
              3 Pending
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
              <div className="flex items-start">
                <AlertCircle className="mr-3 h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-yellow-800">
                    Database Backup Required
                  </p>
                  <p className="mt-1 text-sm text-yellow-700">
                    Last backup: 5 days ago. Schedule next backup.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div className="flex items-start">
                <AlertCircle className="mr-3 h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-800">18 Pending Orders</p>
                  <p className="mt-1 text-sm text-blue-700">
                    Need to be processed within 24 hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <div className="flex items-start">
                <AlertCircle className="mr-3 h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">
                    System Update Available
                  </p>
                  <p className="mt-1 text-sm text-green-700">
                    Version 1.2.0 ready to install.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          BOTTOM INFO SECTION
          ============================================ */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-medium text-primary-navy">
              System Status
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Services</span>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database</span>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                  Healthy
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Storage</span>
                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-600">
                  78% Used
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-primary-navy">
              Support Contacts
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> support@gsejogja.com
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Emergency:</span> +62
                812-3456-7890
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Hours:</span> 08:00 - 17:00 WIB
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-primary-navy">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/admin/settings"
                className="block text-sm text-primary-blue hover:underline"
              >
                System Settings
              </Link>
              <Link
                href="/admin/users"
                className="block text-sm text-primary-blue hover:underline"
              >
                User Management
              </Link>
              <Link
                href="/admin/analytics"
                className="block text-sm text-primary-blue hover:underline"
              >
                View Analytics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
