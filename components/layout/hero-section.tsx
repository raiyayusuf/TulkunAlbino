// components/layout/hero-section.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import ImageSlider from "@/components/ui/image-slider";

export default function HeroSection() {
  const stats = [
    "Guru Berpengalaman",
    "Service Apple Resmi",
    "Kelas Interaktif",
    "Harga Terjangkau",
  ];

  return (
    // PERBAIKI PADDING TOP UNTUK TURUNIN KONTEN
    <section className="relative overflow-hidden bg-gradient-hero -mt-16 pt-32 pb-12 md:pt-40 md:pb-24 min-h-screen">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-blue/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-green/10 blur-3xl"></div>

      <div className="container relative mx-auto px-4 z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* LEFT COLUMN - Text Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight">
              Selamat Datang di{" "}
              <span className="bg-gradient-gse bg-clip-text text-transparent">
                GSE Jogja
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Pusat edukasi teknologi dan penjualan perangkat Apple terpercaya
              di Yogyakarta. Belajar robotik, coding, dan teknologi dengan
              metode menyenangkan.
            </p>

            {/* Stats/Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat}
                  className="flex items-center space-x-3 text-gray-800"
                >
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-primary-green" />
                  </div>
                  <span className="font-medium text-sm md:text-base">{stat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 md:pt-4">
              <Link
                href="/gse-class"
                className="rounded-lg bg-gradient-gse px-5 py-2.5 md:px-6 md:py-3 text-center font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 text-sm md:text-base"
              >
                Lihat Kelas
              </Link>

              <Link
                href="/gse-mac"
                className="rounded-lg border-2 border-primary-blue bg-white px-5 py-2.5 md:px-6 md:py-3 text-center font-medium text-primary-blue transition-all hover:bg-primary-blue/5 hover:border-primary-blue/80 text-sm md:text-base"
              >
                GSE Mac
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 md:px-6 md:py-3 text-center font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 text-sm md:text-base"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN - Image Slider */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageSlider />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary-blue/20 to-primary-green/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}