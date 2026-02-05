// app/page.tsx - FINAL VERSION
"use client";

import React from "react";
import HeroSection from "@/components/layout/hero-section";
import LogoSlider from "@/components/ui/logo-slider";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      title: "GSE Class",
      description:
        "Kelas teknologi untuk semua usia. Mulai dari Coding, Robotik, IoT, hingga Design Graphics.",
      color: "blue",
      href: "/gse-class",
      icon: "👨‍💻",
      features: [
        "Python",
        "Scratch",
        "Robotics",
        "IoT",
        "Design Graphics",
      ],
    },
    {
      title: "GSE Mac",
      description:
        "Penjualan & service perangkat Apple resmi. MacBook, iPad, iPhone, dan aksesoris.",
      color: "navy",
      href: "/gse-mac",
      icon: "🍎",
      features: ["MacBook", "iPad", "iPhone", "Service", "Aksesoris"],
    },
  ];

  const quickLinks = [
    {
      name: "GSE Class",
      path: "/gse-class",
      description: "Lihat kelas teknologi kami",
      icon: "🎓",
    },
    {
      name: "GSE Mac",
      path: "/gse-mac",
      description: "Produk & service Apple",
      icon: "💻",
    },
    {
      name: "Contact",
      path: "/contact",
      description: "Hubungi tim kami",
      icon: "📞",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <HeroSection />

      {/* SCHOOL PARTNER SECTION dengan Marquee Advanced */}
      <LogoSlider
        title="School Partner"
        subtitle="Trusted by Partnered School"
        showStats={true}
      />

      {/* SERVICES SECTION */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-blue-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Layanan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Menyediakan berbagai layanan teknologi untuk kebutuhan edukasi dan
              bisnis di Yogyakarta
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  service.color === "blue"
                    ? "hover:border-primary-blue hover:shadow-primary-blue/20"
                    : "hover:border-primary-navy hover:shadow-primary-navy/20"
                }`}
              >
                {/* Icon */}
                <div className="text-4xl mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="mb-4 text-2xl md:text-3xl font-bold text-primary-navy">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium ${
                          service.color === "blue"
                            ? "bg-primary-blue/10 text-primary-blue"
                            : "bg-primary-navy/10 text-primary-navy"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA - 1 PANAH SAJA & NO UNDERLINE */}
                <div className="inline-flex items-center gap-2">
                  <span
                    className={`font-semibold text-lg ${
                      service.color === "blue"
                        ? "text-primary-blue"
                        : "text-primary-navy"
                    }`}
                  >
                    Jelajahi Layanan
                  </span>
                  <span
                    className={`transition-transform duration-300 group-hover:translate-x-1 text-2xl font-bold${
                      service.color === "blue"
                        ? "text-primary-blue"
                        : "text-primary-navy"
                    }`}
                  >
                    →
                  </span>
                </div>

                {/* Background Effect */}
                <div
                  className={`absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${
                    service.color === "blue"
                      ? "bg-primary-blue"
                      : "bg-primary-navy"
                  }`}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GSE SECTION */}
      <section className="py-16 bg-primary-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Memilih GSE Jogja?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Keunggulan yang membuat kami berbeda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Expert Trainer",
                desc: "Pengajar profesional & berpengalaman",
                icon: "👨‍🏫",
              },
              {
                title: "Kurikulum Terbaru",
                desc: "Materi sesuai perkembangan teknologi",
                icon: "📚",
              },
              {
                title: "Fasilitas Lengkap",
                desc: "Perangkat & tools terbaik",
                icon: "⚙️",
              },
              {
                title: "Sertifikat Resmi",
                desc: "Diakui oleh institusi pendidikan",
                icon: "🏆",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-blue/50 transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-gradient-gse p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-white"></div>
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-medium text-primary-blue shadow-lg mb-6">
                <span className="h-2 w-2 rounded-full bg-primary-green animate-pulse mr-2"></span>
                🚀 Sedang dalam Pengembangan
              </div>

              <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
                Website Sedang Diperbarui
              </h2>

              <p className="mx-auto max-w-2xl text-white/90 mb-8 text-lg">
                Kami sedang bekerja keras untuk menyelesaikan website ini.
                Fitur-fitur menarik seperti kelas online, katalog produk, dan
                sistem booking akan segera hadir.
              </p>

              <div className="inline-flex items-center justify-center space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>
                  <div
                    className="h-3 w-3 rounded-full bg-green-400 animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-3 w-3 rounded-full bg-green-400 animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <span className="text-white font-medium">
                  Update terbaru akan segera diumumkan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-4">
              ⚡ Akses Cepat
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Menu Utama
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi semua layanan dan informasi yang kami sediakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-primary-blue"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>

                {/* Title */}
                <div className="text-2xl font-bold text-primary-navy mb-3 group-hover:text-primary-blue transition-colors">
                  {link.name}
                </div>

                {/* Description */}
                <div className="text-gray-500 mb-6">{link.description}</div>

                {/* Arrow */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue/10 group-hover:bg-primary-blue/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-primary-blue transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>

                {/* Background Effect */}
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary-blue/5 group-hover:bg-primary-blue/10 transition-all duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              Siap Mulai Perjalanan Teknologi Anda?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Bergabung dengan ratusan siswa dan institusi yang telah
              mempercayakan edukasi teknologi mereka kepada GSE Jogja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-blue-green px-8 py-4 text-lg font-semibold text-white hover:shadow-lg hover:shadow-primary-blue/30 transition-all duration-300"
              >
                📞 Hubungi Kami Sekarang
              </Link>
              <Link
                href="/gse-class"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary-blue px-8 py-4 text-lg font-semibold text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                🎓 Lihat Kelas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
