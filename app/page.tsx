// app/page.tsx
"use client";

import React from "react";
import HeroSection from "@/components/layout/hero-section";
import Link from "next/link";

export default function HomePage() {
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

  return (
    <div>
      {/* HERO SECTION */}
      <HeroSection />

      {/* REST OF THE PAGE */}
      <div className="container mx-auto px-4 py-12">
        {/* SERVICES SECTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">
              Layanan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Menyediakan berbagai layanan teknologi untuk kebutuhan edukasi dan
              bisnis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`rounded-xl border border-gray-200 p-8 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  service.color === "blue"
                    ? "hover:border-primary-blue"
                    : "hover:border-primary-navy"
                }`}
              >
                <h3 className="mb-4 text-2xl font-bold text-primary-navy">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-primary-blue font-medium hover:underline">
                  Jelajahi Layanan →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* COMING SOON SECTION */}
        <section className="rounded-2xl bg-gradient-to-br from-primary-blue/5 to-primary-green/5 p-8 md:p-12 text-center mb-16">
          <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-primary-blue shadow-sm">
            🚀 Sedang dalam Pengembangan
          </div>

          <h2 className="mb-4 text-2xl md:text-3xl font-bold text-primary-navy">
            Website Sedang Dibangun
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600 mb-6">
            Kami sedang bekerja keras untuk menyelesaikan website ini.
            Fitur-fitur menarik seperti kelas online dan katalog produk akan
            segera hadir.
          </p>

          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <div className="h-2 w-2 rounded-full bg-primary-green animate-pulse"></div>
            <span>Update terbaru akan segera diumumkan</span>
          </div>
        </section>

        {/* QUICK LINKS SECTION */}
        <section>
          <h2 className="mb-8 text-2xl font-bold text-primary-navy text-center">
            Menu Utama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="group rounded-xl border-2 border-gray-200 bg-white p-6 text-center transition-all hover:border-primary-blue hover:shadow-lg"
              >
                <div className="text-lg font-semibold text-primary-navy group-hover:text-primary-blue transition-colors">
                  {link.name}
                </div>
                <div className="mt-2 text-sm text-gray-500 group-hover:text-primary-blue/70">
                  Klik untuk menjelajahi →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
