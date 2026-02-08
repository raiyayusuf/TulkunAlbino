/* ============================================
   app/middleware.ts
   ENHANCED MIDDLEWARE - SESSION VALIDATION
   HANYA ADMIN YANG BISA AKSES /admin/*
   LOGIN HANYA VIA /admin
   ============================================ */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/* ============================================
   COOKIE NAME CONFIGURATION
   ============================================ */
const ADMIN_COOKIE_NAME = "admin-token";

/* ============================================
   MIDDLEWARE FUNCTION
   ============================================ */
export function middleware(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE_NAME);
  const pathname = request.nextUrl.pathname;

  /* ============================================
     CHECK IF PATH IS ADMIN ROUTE
     ============================================ */
  const isAdminPath = pathname.startsWith("/admin");

  // Jika mau akses admin path
  if (isAdminPath) {
    // Check jika ada token (session cookie)
    if (!token) {
      // Redirect ke login page
      const url = new URL("/admin", request.url);
      return NextResponse.redirect(url);
    }

    // Jika sudah login dan mau akses /admin (login page), redirect ke dashboard
    if (pathname === "/admin") {
      const url = new URL("/admin/dashboard", request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Middleware hanya berlaku untuk routes /admin/*
  matcher: "/admin/:path*",
};
