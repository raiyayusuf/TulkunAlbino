// app/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Skip middleware untuk public routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Get token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Public routes yang tidak perlu auth
  const publicPaths = [
    "/",
    "/login",
    "/register",
    "/blog",
    "/about",
    "/contact",
    "/gse-class",
    "/gse-mac",
  ];

  const isPublicPath = publicPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (isPublicPath) {
    return NextResponse.next();
  }

  // Check authentication
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Check admin routes
  if (pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
