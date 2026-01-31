// app/page.tsx
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "GSE Class",
              desc: "Kelas teknologi untuk semua usia",
              color: "blue",
            },
            {
              title: "GSE Mac",
              desc: "Penjualan perangkat Apple",
              color: "navy",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border border-gray-200 p-6 transition-all hover:shadow-lg ${
                item.color === "blue"
                  ? "hover:border-primary-blue"
                  : "hover:border-primary-navy"
              }`}
            >
              <h3 className="mb-3 text-xl font-semibold text-primary-navy">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
              <Link
                href={`/${item.title.toLowerCase().replace(" ", "-")}`}
                className="mt-4 inline-block text-sm font-medium text-primary-blue hover:underline"
              >
                Selengkapnya →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
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

      {/* Quick Links */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-primary-navy text-center">
          Menu Utama
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "GSE Class", path: "/gse-class" },
            { name: "GSE Mac", path: "/gse-mac" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="rounded-lg border border-gray-200 p-4 text-center transition-all hover:border-primary-blue hover:bg-primary-blue/5"
            >
              <div className="text-lg font-medium text-primary-navy">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
