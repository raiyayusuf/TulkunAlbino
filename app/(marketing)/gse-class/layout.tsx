// app/(marketing)/gse-class/layout.tsx
import React from "react";
import SidebarNavigation from "./sidebar-navigation"; // ← INI YANG BENAR! (DOT SLASH)

export default function GseClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Desktop: Sidebar + Content */}
      <div className="hidden lg:flex">
        {/* Sidebar - Fixed/Sticky */}
        <div className="sticky top-0 h-screen w-64 border-r border-gray-200 bg-white">
          <SidebarNavigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">{children}</div>
      </div>

      {/* Mobile: Content only (sidebar jadi dropdown) */}
      <div className="lg:hidden">
        <div className="border-b border-gray-200 bg-white p-4">
          <div className="text-lg font-bold text-primary-navy">
            GSE Class Categories
          </div>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
