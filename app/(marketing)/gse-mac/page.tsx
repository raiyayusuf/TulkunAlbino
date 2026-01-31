/* ============================================
   app/(marketing)/gse-mac/page.tsx
   GSE MAC PAGE - APPLE PRODUCTS STORE
   ============================================ */

import React from "react";
import Link from "next/link";
import {
  Laptop,
  Smartphone,
  Tablet,
  Headphones,
  Watch,
  Cpu,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

/* ============================================
   WHATSAPP CONFIGURATION
   ============================================ */
const WHATSAPP_CONFIG = {
  number: "628xxxxxxxxxx",
  get url() {
    return `https://wa.me/${this.number}`;
  },
  text: "Request Price List via WhatsApp",
};

/* ============================================
   PRODUCT CATEGORIES DATA
   ============================================ */
const PRODUCT_CATEGORIES = [
  {
    icon: <Laptop className="h-8 w-8" />,
    name: "MacBook",
    models: [
      "MacBook Air",
      "MacBook Pro M1/M2/M3",
      "iMac",
      "Mac mini",
      "Mac Studio",
    ],
    description: "Laptop & desktop Apple untuk produktivitas maksimal",
    color: "from-gray-700 to-gray-900",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    name: "iPhone",
    models: [
      "iPhone 15 Series",
      "iPhone 14 Series",
      "iPhone SE",
      "Older Models",
    ],
    description: "Smartphone Apple terbaru dengan performa terbaik",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Tablet className="h-8 w-8" />,
    name: "iPad",
    models: ["iPad Pro", "iPad Air", "iPad Mini", "iPad 10th Gen"],
    description: "Tablet Apple untuk kerja dan kreativitas",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: <Watch className="h-8 w-8" />,
    name: "Apple Watch",
    models: ["Series 9", "Ultra 2", "SE", "Older Series"],
    description: "Smartwatch untuk kesehatan dan produktivitas",
    color: "from-red-500 to-rose-600",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    name: "AirPods & Audio",
    models: ["AirPods Pro 2", "AirPods 3", "AirPods Max", "HomePod"],
    description: "Audio accessories dengan kualitas terbaik",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    name: "Accessories",
    models: ["Magic Keyboard", "Magic Mouse", "Trackpad", "Chargers", "Cases"],
    description: "Aksesori original untuk ekosistem Apple",
    color: "from-orange-500 to-amber-600",
  },
];

/* ============================================
   BENEFITS DATA
   ============================================ */
const BENEFITS = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Original & Garansi",
    desc: "Produk 100% original dengan garansi resmi",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Baru & Bergaransi",
    desc: "Kondisi baru dengan segel resmi",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Service Support",
    desc: "Dukungan service pasca-penjualan",
  },
];

/* ============================================
   STORE INFORMATION
   ============================================ */
const STORE_INFO = {
  location: {
    title: "Lokasi Store:",
    details: `Jl. Contoh No. 123, Yogyakarta
              (Dekat Universitas Gadjah Mada)`,
  },
  hours: {
    title: "Jam Operasional:",
    details: `Senin - Sabtu: 09:00 - 20:00 WIB
              Minggu: 10:00 - 18:00 WIB`,
  },
};

/* ============================================
   GSE MAC PAGE COMPONENT
   ============================================ */
export default function GseMacPage() {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <div className="bg-gradient-blue-green py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            GSE Mac - Apple Authorized Store
          </h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            Penjualan resmi perangkat Apple di Yogyakarta. Original, bergaransi,
            dengan harga terbaik.
          </p>
        </div>
      </div>

      {/* ============================================
          MAIN CONTENT AREA
          ============================================ */}
      <div className="container mx-auto px-4 py-12">
        {/* ============================================
            STORE STATUS BANNER
            ============================================ */}
        <div className="mb-12 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <div className="flex items-start">
            <div className="mr-4 mt-1 rounded-full bg-blue-100 p-2">
              <span className="text-xl">🍎</span>
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold text-primary-navy">
                Official Apple Products Store
              </h2>
              <p className="text-gray-700">
                GSE Jogja merupakan authorized seller untuk produk-produk Apple.
                Semua produk dijual dalam kondisi baru, segel resmi, dan
                bergaransi international.
                <br />
                <span className="font-semibold">
                  Kunjungi store kami untuk melihat produk langsung!
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ============================================
            BENEFITS SECTION
            ============================================ */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 inline-flex rounded-lg bg-gradient-blue-green p-3 text-white">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-navy">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* ============================================
            PRODUCT CATEGORIES SECTION
            ============================================ */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary-navy">
            Kategori Produk
          </h2>

          {/* CATEGORIES GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary-blue hover:shadow-lg"
              >
                {/* CATEGORY ICON */}
                <div
                  className={`mb-4 inline-flex rounded-lg bg-gradient-to-r ${category.color} p-3 text-white`}
                >
                  {category.icon}
                </div>

                {/* CATEGORY NAME */}
                <h3 className="mb-3 text-xl font-semibold text-primary-navy">
                  {category.name}
                </h3>

                {/* CATEGORY DESCRIPTION */}
                <p className="mb-4 text-gray-600">{category.description}</p>

                {/* AVAILABLE MODELS */}
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-gray-500">
                    Model Tersedia:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.models.map((model, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ACTION BUTTON */}
                <button className="w-full rounded-lg bg-gradient-blue-green py-2 font-medium text-white transition-opacity hover:opacity-90">
                  Info Harga & Stok
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================
            PRICE LIST CTA SECTION
            ============================================ */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-primary-blue/10 to-primary-green/10 p-8">
          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-primary-navy">
              Mau Lihat Price List?
            </h3>
            <p className="mb-6 text-gray-600">
              Dapatkan daftar harga terupdate untuk semua produk Apple. Kami
              menyediakan harga competitive dengan garansi resmi.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href={WHATSAPP_CONFIG.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gradient-blue-green px-6 py-3 font-medium text-white transition-all hover:shadow-md"
              >
                {WHATSAPP_CONFIG.text}
              </a>
              <Link
                href="/contact"
                className="rounded-lg border border-primary-blue bg-white px-6 py-3 font-medium text-primary-blue transition-all hover:bg-primary-blue/5"
              >
                Kunjungi Store Kami
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================
            STORE INFORMATION SECTION
            ============================================ */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="mb-4 text-xl font-bold text-primary-navy">
            📍 Informasi Store
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* LOCATION */}
            <div>
              <h4 className="mb-2 font-semibold text-gray-700">
                {STORE_INFO.location.title}
              </h4>
              <p className="text-gray-600 whitespace-pre-line">
                {STORE_INFO.location.details}
              </p>
            </div>

            {/* OPERATIONAL HOURS */}
            <div>
              <h4 className="mb-2 font-semibold text-gray-700">
                {STORE_INFO.hours.title}
              </h4>
              <p className="text-gray-600 whitespace-pre-line">
                {STORE_INFO.hours.details}
              </p>
            </div>
          </div>
        </div>

        {/* ============================================
            NAVIGATION LINKS
            ============================================ */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Link href="/gse-class" className="text-primary-blue hover:underline">
            ← Lihat juga: GSE Class
          </Link>
          <Link href="/" className="text-primary-blue hover:underline">
            Kembali ke Beranda →
          </Link>
        </div>
      </div>
    </div>
  );
}
