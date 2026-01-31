/* ============================================
   app/components/layout/footer.tsx
   FOOTER COMPONENT - GSE JOGJA
   ============================================ */

import React from "react";
import Link from "next/link";

/* ============================================
   FOOTER LINKS DATA
   ============================================ */
const FOOTER_LINKS = {
  Products: [
    { name: "GSE Class", href: "/gse-class" },
    { name: "GSE Mac", href: "/gse-mac" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

/* ============================================
   SOCIAL MEDIA LINKS
   ============================================ */
const SOCIAL_MEDIA = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
];

/* ============================================
   CURRENT YEAR HELPER
   ============================================ */
const currentYear = new Date().getFullYear();

/* ============================================
   FOOTER COMPONENT
   ============================================ */
export default function Footer() {
  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <footer className="mt-auto border-t border-gray-100 bg-white">
      {/* ============================================
          MAIN FOOTER CONTENT
          ============================================ */}
      <div className="container mx-auto px-4 py-8">
        {/* FOOTER GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ============================================
              LOGO & DESCRIPTION COLUMN
              ============================================ */}
          <div className="space-y-4">
            {/* LOGO */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-24 rounded-md bg-gradient-gse flex items-center justify-center">
                <span className="text-sm font-bold text-white">GSE JOGJA</span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-600">
              Pusat edukasi teknologi dan penjualan perangkat Apple terpercaya
              di Yogyakarta.
            </p>
          </div>

          {/* ============================================
              FOOTER LINKS COLUMNS
              ============================================ */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              {/* COLUMN HEADER */}
              <h3 className="mb-4 text-sm font-semibold text-primary-navy">
                {category}
              </h3>

              {/* LINKS LIST */}
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-primary-blue"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ============================================
            COPYRIGHT & SOCIAL MEDIA SECTION
            ============================================ */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          {/* FLEX CONTAINER */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* COPYRIGHT TEXT */}
            <p className="text-sm text-gray-500">
              © {currentYear} GSE Jogja. All rights reserved.
            </p>

            {/* SOCIAL MEDIA LINKS */}
            <div className="mt-4 md:mt-0 flex space-x-6">
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-sm text-gray-500 hover:text-primary-blue"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
