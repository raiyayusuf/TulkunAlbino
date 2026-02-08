/* ============================================
   app/middleware.ts
   MIDDLEWARE UNTUK AUTHENTIKASI ADMIN
   HANYA ADMIN YANG BISA AKSES /admin/*
   LOGIN HANYA VIA /admin
   ============================================ */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("admin-token");
  const pathname = request.nextUrl.pathname;

  /* ============================================
     SEMUA ROUTES ADMIN MEMBUTUHKAN LOGIN
     ============================================ */
  const isAdminPath = pathname.startsWith("/admin");

  // Jika mau akses admin tapi belum login, redirect ke /admin (login page)
  if (isAdminPath && !token) {
    // Jika sedang mencoba akses /admin/dashboard langsung, tetap redirect ke /admin
    const url = new URL("/admin", request.url);
    return NextResponse.redirect(url);
  }

  // Jika sudah login dan mau akses /admin (login page), redirect ke /admin/dashboard
  if (pathname === "/admin" && token) {
    const url = new URL("/admin/dashboard", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Middleware hanya berlaku untuk routes /admin/*
  matcher: "/admin/:path*",
};
