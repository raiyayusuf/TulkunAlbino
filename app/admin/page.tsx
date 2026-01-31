/* ============================================
   app/admin/page.tsx
   ADMIN DASHBOARD HOMEPAGE
   ============================================ */

import React from "react";

/* ============================================
   ADMIN FEATURES DATA
   ============================================ */
const ADMIN_FEATURES = [
  { title: "User Management", description: "Kelola user, roles, permissions" },
  { title: "Course Management", description: "Buat & edit kelas, materi" },
  { title: "Inventory System", description: "Kelola stok produk Apple" },
  { title: "Service Orders", description: "Track service requests" },
  { title: "Sales Analytics", description: "Reports & business insights" },
  { title: "Content Management", description: "Update website content" },
];

/* ============================================
   SYSTEM STATISTICS DATA
   ============================================ */
const SYSTEM_STATS = [
  { label: "Total Users", value: "0" },
  { label: "Active Courses", value: "0" },
  { label: "Pending Orders", value: "0" },
  { label: "Open Tickets", value: "0" },
];

/* ============================================
   SECURITY MESSAGES
   ============================================ */
const SECURITY_MESSAGES = {
  title: "Area Terbatas - Admin Only",
  description:
    "Halaman ini hanya dapat diakses oleh administrator GSE Jogja. Fitur admin panel sedang dalam pengembangan.",
};

/* ============================================
   ADMIN PAGE COMPONENT
   ============================================ */
export default function AdminPage() {
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
          Admin Dashboard
        </h1>
        <p className="text-gray-600">Control panel management GSE Jogja</p>
      </div>

      {/* ============================================
          SECURITY NOTICE SECTION
          ============================================ */}
      <div className="mb-8 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
        <div className="flex items-start">
          {/* SECURITY ICON */}
          <div className="mr-4 mt-1 rounded-full bg-yellow-100 p-2">
            <span className="text-xl">🔒</span>
          </div>

          {/* SECURITY MESSAGE */}
          <div>
            <h2 className="text-xl font-bold text-primary-navy">
              {SECURITY_MESSAGES.title}
            </h2>
            <p className="mt-2 text-gray-700">
              {SECURITY_MESSAGES.description}
            </p>
          </div>
        </div>
      </div>

      {/* ============================================
          ADMIN FEATURES PREVIEW
          ============================================ */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {ADMIN_FEATURES.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6"
          >
            {/* FEATURE ACCENT BAR */}
            <div className="mb-2 h-2 w-12 rounded-full bg-gradient-blue-green"></div>

            {/* FEATURE TITLE */}
            <h3 className="mb-2 font-semibold text-primary-navy">
              {feature.title}
            </h3>

            {/* FEATURE DESCRIPTION */}
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* ============================================
          SYSTEM OVERVIEW SECTION
          ============================================ */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        {/* SECTION HEADER */}
        <h3 className="mb-4 text-lg font-bold text-primary-navy">
          System Overview
        </h3>

        {/* STATISTICS GRID */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SYSTEM_STATS.map((stat, index) => (
            <div key={index} className="text-center">
              {/* STAT VALUE */}
              <div className="text-2xl font-bold text-primary-navy">
                {stat.value}
              </div>

              {/* STAT LABEL */}
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
