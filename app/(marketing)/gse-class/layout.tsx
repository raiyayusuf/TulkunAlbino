/* ============================================
   app/(marketing)/gse-class/layout.tsx
   GSE CLASS LAYOUT COMPONENT
   ============================================ */

import React from "react";
import SidebarNavigation from "./sidebar-navigation";

/* ============================================
   LAYOUT CONFIGURATION
   ============================================ */
const LAYOUT_CONFIG = {
  desktop: {
    sidebarWidth: "w-64",
    contentPadding: "p-8",
  },
  mobile: {
    headerTitle: "GSE Class Categories",
    contentPadding: "p-4",
  },
};

/* ============================================
   GSE CLASS LAYOUT COMPONENT
   ============================================ */
export default function GseClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          DESKTOP LAYOUT
          ============================================ */}
      <div className="hidden lg:flex">
        {/* ============================================
            SIDEBAR (FIXED/STICKY)
            ============================================ */}
        <div
          className={`sticky top-0 h-screen ${LAYOUT_CONFIG.desktop.sidebarWidth} border-r border-gray-200 bg-white`}
        >
          <SidebarNavigation />
        </div>

        {/* ============================================
            MAIN CONTENT AREA
            ============================================ */}
        <div className={`flex-1 ${LAYOUT_CONFIG.desktop.contentPadding}`}>
          {children}
        </div>
      </div>

      {/* ============================================
          MOBILE LAYOUT
          ============================================ */}
      <div className="lg:hidden">
        {/* ============================================
            MOBILE HEADER
            ============================================ */}
        <div className="border-b border-gray-200 bg-white p-4">
          <div className="text-lg font-bold text-primary-navy">
            {LAYOUT_CONFIG.mobile.headerTitle}
          </div>
        </div>

        {/* ============================================
            MOBILE CONTENT AREA
            ============================================ */}
        <div className={LAYOUT_CONFIG.mobile.contentPadding}>{children}</div>
      </div>
    </div>
  );
}
