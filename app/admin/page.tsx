// app/admin/page.tsx
import React from "react";

export default function AdminPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary-navy">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">Control panel management GSE Jogja</p>
      </div>

      {/* Security Notice */}
      <div className="mb-8 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
        <div className="flex items-start">
          <div className="mr-4 mt-1 rounded-full bg-yellow-100 p-2">
            <span className="text-xl">🔒</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary-navy">
              Area Terbatas - Admin Only
            </h2>
            <p className="mt-2 text-gray-700">
              Halaman ini hanya dapat diakses oleh administrator GSE Jogja.
              Fitur admin panel sedang dalam pengembangan.
            </p>
          </div>
        </div>
      </div>

      {/* Admin Features Preview */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          { title: "User Management", desc: "Kelola user, roles, permissions" },
          { title: "Course Management", desc: "Buat & edit kelas, materi" },
          { title: "Inventory System", desc: "Kelola stok produk Apple" },
          { title: "Service Orders", desc: "Track service requests" },
          { title: "Sales Analytics", desc: "Reports & business insights" },
          { title: "Content Management", desc: "Update website content" },
        ].map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6"
          >
            <div className="mb-2 h-2 w-12 rounded-full bg-gradient-blue-green"></div>
            <h3 className="mb-2 font-semibold text-primary-navy">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Quick Stats Placeholder */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-bold text-primary-navy">
          System Overview
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Total Users", value: "0" },
            { label: "Active Courses", value: "0" },
            { label: "Pending Orders", value: "0" },
            { label: "Open Tickets", value: "0" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary-navy">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
