// app/admin/layout.tsx
import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  LogOut,
  BarChart3,
  FileText,
  Shield,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adminMenu = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
      href: "/admin",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Users",
      href: "/admin/users",
    },
    {
      icon: <Package className="h-5 w-5" />,
      label: "Products",
      href: "/admin/products",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: "Courses",
      href: "/admin/courses",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      label: "Analytics",
      href: "/admin/analytics",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
      href: "/admin/settings",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r border-gray-200 bg-white md:block">
        <div className="sticky top-0 p-6">
          {/* Logo & Admin Badge */}
          <div className="mb-8">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-blue-green flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-primary-navy">
                  Admin Panel
                </div>
                <div className="text-xs text-gray-500">
                  GSE Jogja Management
                </div>
              </div>
            </div>
          </div>

          {/* Admin Menu */}
          <nav className="space-y-2">
            {adminMenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-primary-blue/10 hover:text-primary-blue"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Logout & Switch */}
          <div className="mt-8 space-y-4 border-t border-gray-200 pt-6">
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Switch to User</span>
            </Link>
            <button className="flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-red-50 hover:text-red-600">
              <LogOut className="h-5 w-5" />
              <span>Logout Admin</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Mobile Header */}
        <div className="border-b border-gray-200 bg-white p-4 md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-blue-green flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-primary-navy">Admin</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
