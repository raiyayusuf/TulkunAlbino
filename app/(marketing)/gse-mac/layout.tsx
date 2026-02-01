/* ============================================
   app/(marketing)/gse-mac/layout.tsx
   GSE MAC LAYOUT COMPONENT
   ============================================ */

import React from "react";
import Sidebar from "@/components/layout/sidebar";
import { gseMacSidebarConfig } from "./config/sidebar-items";

/* ============================================
   GSE MAC LAYOUT COMPONENT
   ============================================ */
export default function GseMacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex lg:min-h-[calc(100vh-4rem)]">
        {/* SIDEBAR CONTAINER */}
        <div className="sticky top-16 z-30 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white">
          <Sidebar {...gseMacSidebarConfig} />
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-8">{children}</div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden">
        {/* MOBILE HEADER */}
        <div className="sticky top-16 z-40 border-b border-gray-200 bg-white px-4 py-3">
          <div className="text-lg font-bold text-primary-navy">
            GSE Mac - Apple Products
          </div>
          <p className="mt-1 text-sm text-gray-600">
            Authorized Apple Store in Yogyakarta
          </p>
        </div>

        {/* MOBILE CONTENT AREA */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
