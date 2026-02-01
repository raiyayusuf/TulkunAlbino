/* ============================================
   app/(marketing)/gse-mac/config/benefits.ts
   WITH REACT IMPORT AND CREATE ELEMENT
   ============================================ */

import React, { ReactElement } from "react";
import { Shield, CheckCircle, Clock } from "lucide-react";

/* ============================================
   TYPE DEFINITION
   ============================================ */
export interface BenefitType {
  icon: ReactElement;
  title: string;
  desc: string;
}

/* ============================================
   BENEFITS DATA
   ============================================ */
export const BENEFITS: BenefitType[] = [
  {
    icon: React.createElement(Shield, { className: "h-6 w-6" }),
    title: "Original & Garansi",
    desc: "Produk 100% original dengan garansi resmi",
  },
  {
    icon: React.createElement(CheckCircle, { className: "h-6 w-6" }),
    title: "Baru & Bergaransi",
    desc: "Kondisi baru dengan segel resmi",
  },
  {
    icon: React.createElement(Clock, { className: "h-6 w-6" }),
    title: "Service Support",
    desc: "Dukungan service pasca-penjualan",
  },
];
