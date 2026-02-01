// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("admin-token");
  const isAdminPath = request.nextUrl.pathname.startsWith("/admin");
  const isAuthPath = request.nextUrl.pathname.startsWith("/auth");

  // Jika mau akses admin tapi belum login, redirect ke login
  if (isAdminPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Jika sudah login tapi mau akses login page, redirect ke admin
  if (isAuthPath && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/register"],
};
