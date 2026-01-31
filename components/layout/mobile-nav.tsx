"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "GSE Class",
    href: "/gse-class",
    submenu: [
      { name: "IoT", href: "/gse-class/iot" },
      { name: "Coding Python", href: "/gse-class/coding-python" },
      { name: "Coding Scratch", href: "/gse-class/coding-scratch" },
      { name: "Robot Innovation", href: "/gse-class/robot-innovation" },
      { name: "Design Graphics", href: "/gse-class/design-graphics" },
    ],
  },
  // ... sama seperti di navbar
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl animate-in slide-in-from-right duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-primary-navy">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {navItems.map((item) => (
              <div key={item.name} className="mb-2">
                <div className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-primary-blue"
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.submenu && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenDropdown(
                            openDropdown === item.name ? null : item.name,
                          );
                        }}
                      />
                    )}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && openDropdown === item.name && (
                    <div className="pl-6 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={onClose}
                          className="block px-4 py-2 text-sm rounded-lg hover:bg-blue-50 text-gray-600 hover:text-primary-blue"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <Link
              href="/login"
              onClick={onClose}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary-blue to-primary-green text-white font-medium hover:opacity-90"
            >
              <span>Login / Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
