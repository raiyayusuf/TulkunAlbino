/* ============================================
   app/(marketing)/blog/layout.tsx
   BLOG LAYOUT WITH SIDEBAR
   ============================================ */

import React from "react";
import Sidebar from "@/components/layout/sidebar";
import { blogSidebarConfig } from "./config/sidebar-items";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="sticky top-16 z-30 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white">
          <Sidebar {...blogSidebarConfig} />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-[calc(100vh-4rem)]">{children}</div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="min-h-[calc(100vh-4rem)]">{children}</div>
      </div>
    </div>
  );
}