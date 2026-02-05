/* ============================================
   app/(marketing)/blog/config/sidebar-items.ts
   BLOG SIDEBAR CONFIGURATION
   ============================================ */

import { ReactNode, createElement } from "react";
import {
  BookOpen,
  Code,
  Trophy,
  Calendar,
  GraduationCap,
  Bookmark,
} from "lucide-react";

/* ============================================
   SIDEBAR CONFIGURATION OBJECT
   ============================================ */
export const blogSidebarConfig = {
  items: [
    {
      id: "all",
      name: "Semua Artikel",
      icon: createElement(BookOpen, { className: "h-5 w-5" }),
      href: "/blog",
      color: "text-primary-blue",
    },
    {
      id: "kegiatan",
      name: "Kegiatan",
      icon: createElement(Calendar, { className: "h-5 w-5" }),
      href: "/blog/category/kegiatan",
      color: "text-blue-600",
    },
    {
      id: "tutorial",
      name: "Tutorial",
      icon: createElement(Code, { className: "h-5 w-5" }),
      href: "/blog/category/tutorial",
      color: "text-purple-600",
    },
    {
      id: "prestasi",
      name: "Prestasi",
      icon: createElement(Trophy, { className: "h-5 w-5" }),
      href: "/blog/category/prestasi",
      color: "text-yellow-600",
    },
    {
      id: "event",
      name: "Event",
      icon: createElement(Calendar, { className: "h-5 w-5" }),
      href: "/blog/category/event",
      color: "text-red-600",
    },
    {
      id: "edukasi",
      name: "Edukasi",
      icon: createElement(GraduationCap, { className: "h-5 w-5" }),
      href: "/blog/category/edukasi",
      color: "text-green-600",
    },
    {
      id: "story",
      name: "Story",
      icon: createElement(Bookmark, { className: "h-5 w-5" }),
      href: "/blog/category/story",
      color: "text-orange-600",
    },
  ],
  logo: {
    expanded: {
      src: "/logo/gse.png",
      alt: "GSE Blog Jogja",
      height: "h-28",
      width: "w-40",
    },
    collapsed: {
      src: "/logo/logo-g.png",
      alt: "GSE Blog",
      height: "h-10",
      width: "w-10",
    },
  },
  title: "GSE Blog",
  subtitle: "Kegiatan dan Teknologi",
};