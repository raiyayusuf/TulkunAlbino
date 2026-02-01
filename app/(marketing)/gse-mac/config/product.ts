/* ============================================
   app/(marketing)/gse-mac/config/products.ts
   PRODUCTS CONFIGURATION - FIXED
   ============================================ */

import React, { ReactElement } from "react";
import {
  Laptop,
  Smartphone,
  Tablet,
  Headphones,
  Watch,
  Cpu,
} from "lucide-react";

/* ============================================
   PRODUCT CATEGORIES DATA
   ============================================ */
export const PRODUCT_CATEGORIES = [
  {
    icon: React.createElement(Laptop, { className: "h-8 w-8" }) as ReactElement,
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
    icon: React.createElement(Smartphone, {
      className: "h-8 w-8",
    }) as ReactElement,
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
    icon: React.createElement(Tablet, { className: "h-8 w-8" }) as ReactElement,
    name: "iPad",
    models: ["iPad Pro", "iPad Air", "iPad Mini", "iPad 10th Gen"],
    description: "Tablet Apple untuk kerja dan kreativitas",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: React.createElement(Watch, { className: "h-8 w-8" }) as ReactElement,
    name: "Apple Watch",
    models: ["Series 9", "Ultra 2", "SE", "Older Series"],
    description: "Smartwatch untuk kesehatan dan produktivitas",
    color: "from-red-500 to-rose-600",
  },
  {
    icon: React.createElement(Headphones, {
      className: "h-8 w-8",
    }) as ReactElement,
    name: "AirPods & Audio",
    models: ["AirPods Pro 2", "AirPods 3", "AirPods Max", "HomePod"],
    description: "Audio accessories dengan kualitas terbaik",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: React.createElement(Cpu, { className: "h-8 w-8" }) as ReactElement,
    name: "Accessories",
    models: ["Magic Keyboard", "Magic Mouse", "Trackpad", "Chargers", "Cases"],
    description: "Aksesori original untuk ekosistem Apple",
    color: "from-orange-500 to-amber-600",
  },
];

/* ============================================
   WHATSAPP CONFIGURATION
   ============================================ */
export const WHATSAPP_CONFIG = {
  number: "628xxxxxxxxxx",
  get url() {
    return `https://wa.me/${this.number}`;
  },
  text: "Request Price List via WhatsApp",
};

/* ============================================
   STORE INFORMATION
   ============================================ */
export const STORE_INFO = {
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
   TYPE FOR PRODUCT CATEGORY
   ============================================ */
export interface ProductCategory {
  icon: ReactElement;
  name: string;
  models: string[];
  description: string;
  color: string;
}
