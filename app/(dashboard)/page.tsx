/* ============================================
   app/(dashboard)/page.tsx
   DASHBOARD HOMEPAGE - AREA MEMBER
   ============================================ */

import React from "react";
import Link from "next/link";

/* ============================================
   STATISTICS DATA
   ============================================ */
const DASHBOARD_STATS = [
  { label: "Kelas Aktif", value: "0", color: "bg-blue-500" },
  { label: "Pesanan", value: "0", color: "bg-green-500" },
  { label: "Service Aktif", value: "0", color: "bg-purple-500" },
  { label: "Poin", value: "0", color: "bg-orange-500" },
];

/* ============================================
   QUICK LINKS DATA
   ============================================ */
const QUICK_LINKS = [
  {
    label: "Lihat Kelas Tersedia",
    href: "/gse-class",
    description: "Daftar kelas teknologi",
  },
  {
    label: "Booking Service",
    href: "/gse-service",
    description: "Service Apple device",
  },
  {
    label: "Beli Produk Apple",
    href: "/gse-mac",
    description: "Produk Apple original",
  },
  {
    label: "Hubungi Admin",
    href: "/contact",
    description: "Konsultasi & bantuan",
  },
];

/* ============================================
   DEVELOPMENT FEATURES LIST
   ============================================ */
const UPCOMING_FEATURES = [
  "Tracking kelas yang diikuti",
  "History service & booking",
  "Order produk & invoice",
  "Sertifikat kelulusan kelas",
  "Poin reward & diskon",
];

/* ============================================
   DASHBOARD PAGE COMPONENT
   ============================================ */
export default function DashboardPage() {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div>
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary-navy">
          Dashboard Member
        </h1>
        <p className="text-gray-600">
          Area member GSE Jogja - dalam pengembangan
        </p>
      </div>

      {/* ============================================
          DEVELOPMENT NOTICE SECTION
          ============================================ */}
      <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
        <div className="flex items-start">
          {/* NOTIFICATION ICON */}
          <div className="mr-4 mt-1 rounded-full bg-blue-100 p-2">
            <span className="text-xl">🚀</span>
          </div>

          {/* NOTIFICATION CONTENT */}
          <div>
            <h2 className="text-xl font-bold text-primary-navy">
              Dashboard dalam Pengembangan
            </h2>
            <p className="mt-2 text-gray-700">
              Fitur member area sedang dikembangkan. Segera akan hadir:
            </p>

            {/* FEATURES LIST */}
            <ul className="mt-2 list-inside list-disc text-gray-600">
              {UPCOMING_FEATURES.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ============================================
          STATISTICS SECTION
          ============================================ */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {DASHBOARD_STATS.map((stat, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6"
          >
            {/* STAT LABEL WITH COLOR INDICATOR */}
            <div className="mb-2 flex items-center">
              <div className={`mr-2 h-3 w-3 rounded-full ${stat.color}`}></div>
              <div className="text-sm font-medium text-gray-500">
                {stat.label}
              </div>
            </div>

            {/* STAT VALUE */}
            <div className="text-2xl font-bold text-primary-navy">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* ============================================
          QUICK LINKS SECTION
          ============================================ */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        {/* SECTION HEADER */}
        <h3 className="mb-4 text-lg font-bold text-primary-navy">
          Akses Cepat
        </h3>

        {/* LINKS GRID */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-blue hover:bg-blue-50"
            >
              <div className="font-medium text-primary-navy">{link.label}</div>
              <div className="text-sm text-gray-600">{link.description}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* ============================================
          BACK TO MAIN SITE LINK
          ============================================ */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center text-primary-blue hover:underline"
        >
          ← Kembali ke Website Utama
        </Link>
      </div>
    </div>
  );
}
