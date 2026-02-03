import { ReactNode, createElement } from "react";
import {
  Newspaper,
  Calendar,
  BookOpen,
  Trophy,
  GraduationCap,
  Users,
  Home,
} from "lucide-react";

const createSidebarIcon = (Icon: any): ReactNode => {
  return createElement(Icon, { className: "h-5 w-5" });
};

export const blogSidebarConfig = {
  items: [
    {
      id: "all",
      name: "Tampilkan Semua",
      icon: createSidebarIcon(Newspaper),
      href: "/blog",
      color: "text-primary-blue",
    },
    {
      id: "kegiatan",
      name: "Kegiatan",
      icon: createSidebarIcon(Calendar),
      href: "/blog?category=kegiatan",
      color: "text-blue-600",
    },
    {
      id: "tutorial",
      name: "Tutorial",
      icon: createSidebarIcon(BookOpen),
      href: "/blog?category=tutorial",
      color: "text-green-600",
    },
    {
      id: "prestasi",
      name: "Prestasi",
      icon: createSidebarIcon(Trophy),
      href: "/blog?category=prestasi",
      color: "text-yellow-600",
    },
    {
      id: "event",
      name: "Event",
      icon: createSidebarIcon(Calendar),
      href: "/blog?category=event",
      color: "text-purple-600",
    },
    {
      id: "edukasi",
      name: "Edukasi",
      icon: createSidebarIcon(GraduationCap),
      href: "/blog?category=edukasi",
      color: "text-indigo-600",
    },
    {
      id: "story",
      name: "Story",
      icon: createSidebarIcon(Users),
      href: "/blog?category=story",
      color: "text-pink-600",
    },
  ],
  logo: {
    expanded: {
      src: "/logo/gse.png",
      alt: "GSE Jogja Blog",
      height: "h-24",
      width: "w-32",
    },
    collapsed: {
      src: "/logo/logo-c.png",
      alt: "GSE",
      height: "h-10",
      width: "w-10",
    },
  },
  title: "Blog GSE Jogja",
  subtitle: "Update kegiatan & tips teknologi",
};