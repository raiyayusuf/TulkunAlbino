/* ============================================
   context/sidebar-context.tsx
   SIDEBAR CONTEXT WITH AUTO-RESET ON PAGE CHANGE
   ============================================ */

"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

/* ============================================
   TYPE DEFINITIONS
   ============================================ */
interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  setIsCollapsed: (value: boolean) => void;
  resetSidebar: () => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

/* ============================================
   HELPER: Check if current page has sidebar
   ============================================ */
const hasSidebarPages = ['/gse-class', '/gse-mac', '/blog'];

function shouldShowSidebar(pathname: string): boolean {
  return hasSidebarPages.some(page => pathname.startsWith(page));
}

/* ============================================
   CREATE CONTEXT
   ============================================ */
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

/* ============================================
   CUSTOM HOOK: useSidebar
   ============================================ */
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

/* ============================================
   SIDEBAR PROVIDER COMPONENT
   ============================================ */
export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarPage, setIsSidebarPage] = useState(false);
  const pathname = usePathname();

  /* ============================================
     AUTO-RESET SIDEBAR STATE WHEN PAGE CHANGES
     ============================================ */
  useEffect(() => {
    const hasSidebar = shouldShowSidebar(pathname);
    setIsSidebarPage(hasSidebar);
    
    // Reset to expanded state when entering sidebar page
    if (hasSidebar) {
      setIsCollapsed(false);
    }
  }, [pathname]);

  const toggleSidebar = () => {
    // Only allow toggle if we're on a sidebar page
    if (isSidebarPage) {
      setIsCollapsed((prev) => !prev);
    }
  };

  const resetSidebar = () => {
    setIsCollapsed(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed: isSidebarPage ? isCollapsed : false, // Always false for non-sidebar pages
        toggleSidebar,
        setIsCollapsed: (value) => {
          if (isSidebarPage) {
            setIsCollapsed(value);
          }
        },
        resetSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}