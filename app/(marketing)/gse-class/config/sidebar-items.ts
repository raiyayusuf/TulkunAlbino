/* ============================================
   app/(marketing)/gse-class/config/sidebar-items.ts
   CLEAN VERSION
   ============================================ */

import { ReactNode, createElement } from "react";
import {
  Code2,
  MousePointerClick,
  Palette,
  Cpu,
  Bot,
  BookOpen,
} from "lucide-react";

/* ============================================
   HELPER FUNCTION
   ============================================ */
const createSidebarIcon = (Icon: any): ReactNode => {
  return createElement(Icon, { className: "h-5 w-5" });
};

/* ============================================
   SIDEBAR CONFIGURATION OBJECT
   ============================================ */
export const gseClassSidebarConfig = {
  items: [
    {
      id: "all",
      name: "Semua Kelas",
      icon: createSidebarIcon(BookOpen),
      href: "/gse-class",
      color: "text-primary-blue",
    },
    {
      id: "coding-python",
      name: "Coding Python",
      icon: createSidebarIcon(Code2),
      href: "/gse-class/category/coding-python",
      color: "text-blue-600",
    },
    {
      id: "coding-scratch",
      name: "Coding Scratch",
      icon: createSidebarIcon(MousePointerClick),
      href: "/gse-class/category/coding-scratch",
      color: "text-orange-600",
    },
    {
      id: "design-graphics",
      name: "Design Graphics",
      icon: createSidebarIcon(Palette),
      href: "/gse-class/category/design-graphics",
      color: "text-purple-600",
    },
    {
      id: "iot",
      name: "Internet of Things",
      icon: createSidebarIcon(Cpu),
      href: "/gse-class/category/iot",
      color: "text-green-600",
    },
    {
      id: "robot-innovation",
      name: "Robot Innovation",
      icon: createSidebarIcon(Bot),
      href: "/gse-class/category/robot-innovation",
      color: "text-red-600",
    },
  ],
  logo: {
    expanded: {
      src: "/logo/gse-class.png",
      alt: "GSE Class",
      height: "h-28",
      width: "w-40",
    },
    collapsed: {
      src: "/logo/logo-c.png",
      alt: "GSE",
      height: "h-10",
      width: "w-10",
    },
  },
  title: "GSE Class",
  subtitle: "Learning Platform",
};
