/* ============================================
   app/(auth)/login/page.tsx
   LOGIN PAGE - MASUK AKUN
   ============================================ */

import React from "react";
import Link from "next/link";
import Image from "next/image";

/* ============================================
   LOGO CONFIGURATION
   ============================================ */
const LOGO_CONFIG = {
  src: "/logo/gse.png",
  alt: "GSE Jogja Logo",
  height: "h-36",
  width: "w-36",
  sizes: "130px",
};

/* ============================================
   PAGE TEXT CONFIGURATION
   ============================================ */
const PAGE_TEXT = {
  title: "Masuk ke Akun",
  subtitle: "Halaman login dalam pengembangan",
  registerPrompt: "Belum punya akun?",
  registerLink: "Daftar di sini",
  backToHome: "Kembali ke Beranda",
};

/* ============================================
   LOGIN PAGE COMPONENT
   ============================================ */
export default function LoginPage() {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      {/* LOGIN CARD */}
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        {/* ============================================
            HEADER SECTION
            ============================================ */}
        <div className="mb-8 text-center">
          {/* LOGO */}
          <div className="inline-flex items-center justify-center">
            <div
              className={`relative ${LOGO_CONFIG.height} ${LOGO_CONFIG.width}`}
            >
              <Image
                src={LOGO_CONFIG.src}
                alt={LOGO_CONFIG.alt}
                fill
                className="object-contain"
                sizes={LOGO_CONFIG.sizes}
              />
            </div>
          </div>

          {/* PAGE TITLE */}
          <h1 className="text-2xl font-bold text-primary-navy">
            {PAGE_TEXT.title}
          </h1>

          {/* PAGE SUBTITLE */}
          <p className="mt-2 text-gray-600">{PAGE_TEXT.subtitle}</p>
        </div>

        {/* ============================================
            FORM PLACEHOLDERS
            ============================================ */}
        <div className="space-y-4">
          {/* INPUT FIELD PLACEHOLDERS */}
          <div className="space-y-2">
            <div className="h-10 rounded-lg bg-gray-100"></div>
            <div className="h-10 rounded-lg bg-gray-100"></div>
          </div>

          {/* SUBMIT BUTTON PLACEHOLDER */}
          <div className="h-10 rounded-lg bg-gray-200"></div>

          {/* REGISTRATION PROMPT */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              {PAGE_TEXT.registerPrompt}{" "}
              <Link
                href="/register"
                className="font-medium text-primary-blue hover:underline"
              >
                {PAGE_TEXT.registerLink}
              </Link>
            </p>
          </div>
        </div>

        {/* ============================================
            FOOTER SECTION
            ============================================ */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <Link
            href="/"
            className="flex items-center justify-center text-primary-navy hover:text-primary-blue"
          >
            ← {PAGE_TEXT.backToHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
