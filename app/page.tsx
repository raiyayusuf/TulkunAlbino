/* ============================================
   app/page.tsx
   HOMEPAGE COMPONENT - GSE JOGJA
   ============================================ */

import React from "react";
import Link from "next/link";

/* ============================================
   HOME PAGE COMPONENT
   ============================================ */
export default function HomePage() {
  /* ============================================
     DATA CONFIGURATION
     ============================================ */
  const services = [
    {
      title: "GSE Class",
      description: "Kelas teknologi untuk semua usia",
      color: "blue",
      href: "/gse-class",
    },
    {
      title: "GSE Mac",
      description: "Penjualan perangkat Apple",
      color: "navy",
      href: "/gse-mac",
    },
  ];

  const quickLinks = [
    { name: "GSE Class", path: "/gse-class" },
    { name: "GSE Mac", path: "/gse-mac" },
    { name: "Contact", path: "/contact" },
  ];

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="container mx-auto px-4 py-12">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="mb-16 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-primary-navy md:text-5xl">
            Selamat Datang di{" "}
            <span className="bg-gradient-gse bg-clip-text text-transparent">
              GSE Jogja
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Pusat edukasi teknologi dan penjualan perangkat Apple terpercaya di
            Yogyakarta.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-xl border border-gray-200 p-6 transition-all hover:shadow-lg ${
                service.color === "blue"
                  ? "hover:border-primary-blue"
                  : "hover:border-primary-navy"
              }`}
            >
              <h3 className="mb-3 text-xl font-semibold text-primary-navy">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <Link
                href={service.href}
                className="mt-4 inline-block text-sm font-medium text-primary-blue hover:underline"
              >
                Selengkapnya →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          COMING SOON SECTION
          ============================================ */}
      <section className="rounded-2xl bg-gradient-to-br from-primary-blue/5 to-primary-green/5 p-8 text-center">
        <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-primary-blue shadow-sm">
          🚀 Sedang dalam Pengembangan
        </div>

        <h2 className="mb-4 text-2xl font-bold text-primary-navy">
          Website Sedang Dibangun
        </h2>

        <p className="mx-auto max-w-2xl text-gray-600">
          Kami sedang bekerja keras untuk menyelesaikan website ini. Fitur-fitur
          menarik seperti kelas online dan katalog produk akan segera hadir.
        </p>
      </section>

      {/* ============================================
          QUICK LINKS SECTION
          ============================================ */}
      <section className="mt-16">
        {/* SECTION HEADER */}
        <h2 className="mb-6 text-2xl font-bold text-primary-navy text-center">
          Menu Utama
        </h2>

        {/* LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="rounded-lg border border-gray-200 p-4 text-center transition-all hover:border-primary-blue hover:bg-primary-blue/5"
            >
              <div className="text-lg font-medium text-primary-navy">
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
