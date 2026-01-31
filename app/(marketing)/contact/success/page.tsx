/* ============================================
   app/(marketing)/contact/success/page.tsx
   CONTACT SUCCESS PAGE - PESAN TERKIRIM
   ============================================ */

import React from "react";
import Link from "next/link";

/* ============================================
   SUCCESS MESSAGE CONFIGURATION
   ============================================ */
const SUCCESS_CONFIG = {
  title: "Pesan Terkirim!",
  message:
    "Terima kasih telah menghubungi GSE Jogja. Tim kami akan membalas pesan Anda dalam 1x24 jam.",
  responseTime: "1x24 jam",
};

/* ============================================
   ACTION BUTTONS CONFIGURATION
   ============================================ */
const ACTION_BUTTONS = [
  {
    text: "Kembali ke Beranda",
    href: "/",
    variant: "primary" as const,
  },
  {
    text: "Kirim Pesan Lain",
    href: "/contact",
    variant: "secondary" as const,
  },
];

/* ============================================
   CONTACT SUCCESS PAGE COMPONENT
   ============================================ */
export default function ContactSuccessPage() {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      {/* SUCCESS CARD */}
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        {/* ============================================
            SUCCESS CONTENT
            ============================================ */}
        <div className="mb-6 text-center">
          {/* SUCCESS ICON */}
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-blue-green text-white">
            ✓
          </div>

          {/* SUCCESS TITLE */}
          <h1 className="text-2xl font-bold text-primary-navy">
            {SUCCESS_CONFIG.title}
          </h1>

          {/* SUCCESS MESSAGE */}
          <p className="mt-2 text-gray-600">{SUCCESS_CONFIG.message}</p>
        </div>

        {/* ============================================
            ACTION BUTTONS
            ============================================ */}
        <div className="space-y-4">
          {ACTION_BUTTONS.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`block rounded-lg py-3 text-center font-medium ${
                button.variant === "primary"
                  ? "bg-gradient-blue-green text-white hover:shadow-md"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
