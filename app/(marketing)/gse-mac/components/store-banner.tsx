/* ============================================
   app/(marketing)/gse-mac/components/StoreBanner.tsx
   STORE STATUS BANNER
   ============================================ */

import React from "react";

export default function StoreBanner() {
  return (
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
            Semua produk dijual dalam kondisi baru, segel resmi, dan bergaransi
            international.
            <br />
            <span className="font-semibold">
              Kunjungi store kami untuk melihat produk langsung!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
