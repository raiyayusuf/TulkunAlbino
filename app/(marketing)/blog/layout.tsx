import React from "react";
import Sidebar from "@/components/layout/sidebar";
import { blogSidebarConfig } from "./config/sidebar-items";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({
  children,
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* DESKTOP LAYOUT - HANYA 2 KOLOM */}
      <div className="hidden lg:flex lg:min-h-[calc(100vh-4rem)]">
        {/* SIDEBAR KIRI - LOGO & KATEGORI */}
        <div className="sticky top-16 z-30 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white">
          <Sidebar {...blogSidebarConfig} />
        </div>

        {/* MAIN CONTENT AREA - TANPA SIDEBAR TENGAH */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden">
        {children}
      </div>
    </div>
  );
}