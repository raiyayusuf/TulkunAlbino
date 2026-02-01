// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // DEMO CREDENTIALS - nanti ganti dengan database
    const ADMIN_CREDENTIALS = {
      email: "admin@gsejogja.com",
      password: "AdminGSE2024!",
    };

    if (
      email === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      const response = NextResponse.json(
        { success: true, message: "Login successful" },
        { status: 200 },
      );

      // Set cookie (in production, use HttpOnly, Secure)
      response.cookies.set("admin-token", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
