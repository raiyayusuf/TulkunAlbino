/* ============================================
   app/(marketing)/gse-mac/components/PriceListCTA.tsx
   PRICE LIST CTA SECTION
   ============================================ */

import React from "react";
import Link from "next/link";
import { WHATSAPP_CONFIG } from "../config/product";

export default function PriceListCTA() {
  return (
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
  );
}
