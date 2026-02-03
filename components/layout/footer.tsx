/* ============================================
   app/components/layout/footer.tsx
   FOOTER COMPONENT - GSE JOGJA
   ============================================ */

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

/* ============================================
   FOOTER LINKS DATA
   ============================================ */
const FOOTER_LINKS = {
  Products: [
    { name: "GSE Class", href: "/gse-class" },
    { name: "GSE Mac", href: "/gse-mac" },
    { name: "GSE Service", href: "/service" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
  ],
  Resources: [
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
    { name: "Documentation", href: "/docs" },
    { name: "Learning Center", href: "/learning-center" },
  ],
};

/* ============================================
   WHATSAPP CONFIGURATION
   ============================================ */
const WHATSAPP_CONFIG = {
  phone: "082227180340", // Format tanpa +62
  formattedPhone: "+62 822-2718-0340", // Format display
  message: "Halo GSE Jogja, saya ingin bertanya tentang...", // Pesan default
  // Link WhatsApp: https://wa.me/[nomor]?text=[pesan]
  getWhatsAppLink: () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_CONFIG.message);
    return `https://wa.me/62${WHATSAPP_CONFIG.phone.slice(1)}?text=${encodedMessage}`;
  },
};

/* ============================================
   CONTACT INFO
   ============================================ */
const CONTACT_INFO = {
  address: {
    text: "Jl. Magelang Km. 6, No. 28, Sleman, Yogyakarta 55284",
    link: "https://maps.app.goo.gl/j7ovfwE8ZvATVFRx7",
    icon: <MapPin className="h-4 w-4" />,
  },
  phone: {
    text: "+62 812-1390-1390",
    link: "tel:+6281213901390",
    icon: <Phone className="h-4 w-4" />,
  },
  phone2: {
    text: WHATSAPP_CONFIG.formattedPhone,
    link: WHATSAPP_CONFIG.getWhatsAppLink(), // Menggunakan link WhatsApp
    icon: <MessageCircle className="h-4 w-4" />,
  },
  email: {
    text: "info@gsejogja.com",
    link: "mailto:info@gsejogja.com",
    icon: <Mail className="h-4 w-4" />,
  },
};

/* ============================================
   SOCIAL MEDIA LINKS
   ============================================ */
const SOCIAL_MEDIA = [
  {
    name: "GSE Class Instagram",
    href: "https://www.instagram.com/gse.class/",
    label: "@gse.class",
  },
  {
    name: "GSE Mac Instagram",
    href: "https://www.instagram.com/gse.mac/",
    label: "@gse.mac",
  },
];

/* ============================================
   LOGO CONFIGURATION
   ============================================ */
const LOGO_CONFIG = {
  src: "/logo/gse.png",
  alt: "GSE Jogja Logo",
  width: 180,
  height: 60,
  sizes: "180px",
};

/* ============================================
   BUSINESS HOURS
   ============================================ */
const BUSINESS_HOURS = [
  { day: "Senin - Jumat", hours: "09:00 - 17:00 WIB" },
  { day: "Sabtu - Minggu", hours: "Libur" },
];

/* ============================================
   LEGAL LINKS
   ============================================ */
const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Sitemap", href: "/sitemap" },
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
     WHATSAPP LINK HANDLER
     ============================================ */
  const handleWhatsAppClick = () => {
    // Buka WhatsApp dengan pesan default
    window.open(WHATSAPP_CONFIG.getWhatsAppLink(), "_blank");
  };

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <footer className="mt-auto bg-primary-navy text-white">
      {/* ============================================
          MAIN FOOTER CONTENT
          ============================================ */}
      <div className="container mx-auto px-4 py-12">
        {/* ============================================
            TOP SECTION: GSE JOGJA LOGO & DESCRIPTION
            ============================================ */}
        <div className="mb-16">
          {/* VERTICAL LAYOUT: LOGO + DESCRIPTION */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            {/* LOGO CENTER/MD:LEFT */}
            <div className="relative h-20 w-64">
              <Image
                src={LOGO_CONFIG.src}
                alt={LOGO_CONFIG.alt}
                width={256}
                height={80}
                className="object-contain brightness-0 invert"
                sizes="256px"
                priority
              />
            </div>

            {/* DESCRIPTION */}
            <div className="max-w-lg">
              <p className="text-gray-300 leading-relaxed text-sm text-center md:text-left">
                Pusat edukasi teknologi dan penjualan perangkat Apple terpercaya
                di Yogyakarta. Menyediakan kursus teknologi berkualitas, service
                profesional, dan produk Apple original.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================
            MIDDLE SECTION: 5-COLUMN GRID
            ============================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* ============================================
              COLUMN 1: PRODUCTS
              ============================================ */}
          <div className="space-y-6">
            {/* PERUBAHAN: text-lg → text-base */}
            <h3 className="text-base font-semibold text-white border-l-4 border-primary-blue pl-3">
              Products
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.Products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {/* PERBAIKAN: SELALU TAMPIL BULLET POINT */}
                    <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============================================
              COLUMN 2: COMPANY
              ============================================ */}
          <div className="space-y-6">
            {/* PERUBAHAN: text-lg → text-base */}
            <h3 className="text-base font-semibold text-white border-l-4 border-primary-blue pl-3">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.Company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {/* PERBAIKAN: SELALU TAMPIL BULLET POINT */}
                    <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============================================
              COLUMN 3: RESOURCES
              ============================================ */}
          <div className="space-y-6">
            {/* PERUBAHAN: text-lg → text-base */}
            <h3 className="text-base font-semibold text-white border-l-4 border-primary-blue pl-3">
              Resources
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.Resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {/* PERBAIKAN: SELALU TAMPIL BULLET POINT */}
                    <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============================================
              COLUMN 4: CONTACT & HOURS
              ============================================ */}
          <div className="space-y-6">
            {/* PERUBAHAN: text-lg → text-base */}
            <h3 className="text-base font-semibold text-white border-l-4 border-primary-blue pl-3">
              Contact & Hours
            </h3>

            {/* CONTACT INFO */}
            <div className="space-y-4">
              {/* ADDRESS */}
              <a
                href={CONTACT_INFO.address.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-sm text-gray-300 hover:text-white transition-colors group"
              >
                <span className="mt-0.5 text-primary-blue">
                  {CONTACT_INFO.address.icon}
                </span>
                <span className="leading-relaxed">
                  {CONTACT_INFO.address.text}
                </span>
              </a>

              {/* PHONE 1 */}
              <a
                href={CONTACT_INFO.phone.link}
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-primary-blue">
                  {CONTACT_INFO.phone.icon}
                </span>
                <span>{CONTACT_INFO.phone.text}</span>
              </a>

              {/* PHONE 2 (WHATSAPP) */}
              <a
                href={CONTACT_INFO.phone2.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-primary-blue">
                  {CONTACT_INFO.phone2.icon}
                </span>
                <span>{CONTACT_INFO.phone2.text}</span>
              </a>

              {/* EMAIL */}
              <a
                href={CONTACT_INFO.email.link}
                className="flex items-center space-x-3 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-primary-blue">
                  {CONTACT_INFO.email.icon}
                </span>
                <span>{CONTACT_INFO.email.text}</span>
              </a>
            </div>

            {/* BUSINESS HOURS - FIXED: JANGAN SAMPAI BREAK */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white mb-3">
                Jam Operasional
              </h4>
              <ul className="space-y-2">
                {BUSINESS_HOURS.map((schedule) => (
                  <li
                    key={schedule.day}
                    className="flex items-start text-sm text-gray-300"
                  >
                    {/* KOLOM HARI - FIX WIDTH */}
                    <span className="w-28 flex-shrink-0">{schedule.day}</span>
                    
                    {/* KOLOM JAM */}
                    <span
                      className={
                        schedule.hours === "Libur"
                          ? "text-red-400"
                          : "text-green-400"
                      }
                    >
                      {schedule.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ============================================
              COLUMN 5: SOCIAL MEDIA
              ============================================ */}
          <div className="space-y-6">
            {/* PERUBAHAN: text-lg → text-base */}
            <h3 className="text-base font-semibold text-white border-l-4 border-primary-blue pl-3">
              Social Media
            </h3>

            {/* INSTAGRAM LOGO WITH LINKS */}
            <div className="space-y-4">
              {/* INSTAGRAM ICON */}
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Instagram className="h-5 w-5 text-primary-blue" />
                <span className="font-medium">Instagram</span>
              </div>

              {/* INSTAGRAM LINKS */}
              <ul className="space-y-3 pl-8">
                {SOCIAL_MEDIA.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      {/* PERBAIKAN: SELALU TAMPIL BULLET POINT */}
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                      <span>{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ============================================
                WHATSAPP SECTION - CLICKABLE
                ============================================ */}
            <div className="pt-4 border-t border-white/10">
              {/* CLICKABLE WHATSAPP ICON + TEXT */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center space-x-3 text-sm text-gray-300 mb-3 group cursor-pointer hover:text-white transition-colors"
                aria-label="Hubungi kami via WhatsApp"
              >
                {/* PERUBAHAN: HAPUS LINGKARAN BACKGROUND */}
                <MessageCircle className="h-5 w-5 text-green-400" />
                <span className="font-medium">WhatsApp</span>
              </button>

              {/* WHATSAPP DESCRIPTION */}
              <p className="text-sm text-gray-300 pl-8 cursor-pointer hover:text-white transition-colors">
                <button
                  onClick={handleWhatsAppClick}
                  className="text-left hover:underline"
                >
                  Hubungi kami via WhatsApp untuk informasi cepat
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* ============================================
            DIVIDER LINE
            ============================================ */}
        <div className="mb-8 border-t border-white/20"></div>

        {/* ============================================
            BOTTOM SECTION
            ============================================ */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* ============================================
              COPYRIGHT SECTION
              ============================================ */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-400">
              © {currentYear} GSE Jogja. All rights reserved.
            </p>
          </div>

          {/* ============================================
              LEGAL LINKS
              ============================================ */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ============================================
              GOOGLE MAPS BUTTON
              ============================================ */}
          <a
            href={CONTACT_INFO.address.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-blue hover:bg-blue-600 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Lihat di Google Maps</span>
          </a>
        </div>
      </div>
    </footer>
  );
}