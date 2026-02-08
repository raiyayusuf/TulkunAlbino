/* ============================================
   app/(marketing)/layout.tsx
   MARKETING LAYOUT - PUBLIC WEBSITE
   INCLUDE NAVBAR & FOOTER FOR ALL PUBLIC PAGES
   ============================================ */

import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

/* ============================================
   MARKETING LAYOUT COMPONENT
   ============================================ */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <>
      {/* ============================================
          NAVIGATION BAR
          ============================================ */}
      <Navbar />

      {/* ============================================
          SPACER FOR FIXED NAVBAR
          ============================================ */}
      <div className="h-16"></div>

      {/* ============================================
          MAIN CONTENT AREA
          ============================================ */}
      <main className="flex-1">{children}</main>

      {/* ============================================
          FOOTER
          ============================================ */}
      <Footer />
    </>
  );
}
