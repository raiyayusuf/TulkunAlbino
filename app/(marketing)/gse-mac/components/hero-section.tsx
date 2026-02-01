/* ============================================
   app/(marketing)/gse-mac/components/HeroSection.tsx
   HERO SECTION COMPONENT
   ============================================ */

import React from "react";

export default function HeroSection() {
  return (
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
  );
}
