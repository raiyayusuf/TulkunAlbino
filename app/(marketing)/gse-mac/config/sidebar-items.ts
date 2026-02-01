/* ============================================
   app/(marketing)/gse-mac/config/sidebar-items.ts
   SIDEBAR CONFIGURATION - GSE MAC
   ============================================ */

import { ReactNode, createElement } from "react";
import {
  Laptop,
  Smartphone,
  Tablet,
  Headphones,
  Watch,
  Cpu,
  Wrench,
} from "lucide-react";

/* ============================================
   HELPER FUNCTION
   ============================================ */
const createIcon = (Icon: any): ReactNode => {
  return createElement(Icon, { className: "h-5 w-5" });
};

/* ============================================
   SIDEBAR CONFIGURATION OBJECT
   ============================================ */
export const gseMacSidebarConfig = {
  items: [
    {
      id: "all",
      name: "Semua Produk",
      icon: createIcon(Laptop),
      href: "/gse-mac",
      color: "text-primary-blue",
    },
    {
      id: "iphone",
      name: "iPhone",
      icon: createIcon(Smartphone),
      href: "/gse-mac/category/iphone",
      color: "text-blue-600",
    },
    {
      id: "ipad",
      name: "iPad",
      icon: createIcon(Tablet),
      href: "/gse-mac/category/ipad",
      color: "text-purple-600",
    },
    {
      id: "macbook",
      name: "MacBook",
      icon: createIcon(Laptop),
      href: "/gse-mac/category/macbook",
      color: "text-gray-700",
    },
    {
      id: "imac",
      name: "iMac",
      icon: createIcon(Laptop),
      href: "/gse-mac/category/imac",
      color: "text-cyan-600",
    },
    {
      id: "watch",
      name: "Apple Watch",
      icon: createIcon(Watch),
      href: "/gse-mac/category/watch",
      color: "text-red-600",
    },
    {
      id: "airpods",
      name: "AirPods",
      icon: createIcon(Headphones),
      href: "/gse-mac/category/airpods",
      color: "text-green-600",
    },
    {
      id: "accessories",
      name: "Aksesoris",
      icon: createIcon(Cpu),
      href: "/gse-mac/category/accessories",
      color: "text-orange-600",
    },
    {
      id: "service",
      name: "Service",
      icon: createIcon(Wrench),
      href: "/gse-mac/service",
      color: "text-yellow-600",
    },
  ],
  logo: {
    expanded: {
      src: "/logo/gse-mac.png",
      alt: "GSE Mac - Apple Store",
      height: "h-28",
      width: "w-40",
    },
    collapsed: {
      src: "/logo/apple-logo.png",
      alt: "Apple",
      height: "h-10",
      width: "w-10",
    },
  },
  title: "GSE Mac",
  subtitle: "Authorized Reseller",
};
