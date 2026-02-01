/* ============================================
   app/(marketing)/gse-mac/components/NavigationLinks.tsx
   NAVIGATION LINKS COMPONENT
   ============================================ */

import React from "react";
import Link from "next/link";

export default function NavigationLinks() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
      <Link href="/gse-class" className="text-primary-blue hover:underline">
        ← Lihat juga: GSE Class
      </Link>
      <Link href="/" className="text-primary-blue hover:underline">
        Kembali ke Beranda →
      </Link>
    </div>
  );
}
