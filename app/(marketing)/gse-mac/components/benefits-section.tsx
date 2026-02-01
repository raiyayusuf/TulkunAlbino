/* ============================================
   app/(marketing)/gse-mac/components/BenefitsSection.tsx
   BUAT ICONS DI COMPONENT LANGSUNG
   ============================================ */

import React from "react";
import { Shield, CheckCircle, Clock } from "lucide-react";

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

export default function BenefitsSection() {
  return (
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
  );
}
