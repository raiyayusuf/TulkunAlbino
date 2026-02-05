/* ============================================
   components/layout/hero-section.tsx
   HERO SECTION COMPONENT - GSE JOGJA
   ============================================ */

"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import ImageSlider from "@/components/ui/image-slider";

/* ============================================
   STATS/BULLET POINTS DATA
   ============================================ */
const STATS = [
  "Guru Berpengalaman",
  "Service Apple Resmi", 
  "Kelas Interaktif",
  "Harga Terjangkau",
];

/* ============================================
   CTA BUTTONS CONFIGURATION
   ============================================ */
const CTA_BUTTONS = [
  {
    text: "Lihat Kelas",
    href: "/gse-class",
    variant: "primary" as const,
    className: "rounded-lg bg-gradient-gse px-5 py-2.5 md:px-6 md:py-3 text-center font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 text-sm md:text-base",
  },
  {
    text: "GSE Mac", 
    href: "/gse-mac",
    variant: "secondary" as const,
    className: "rounded-lg border-2 border-primary-blue bg-white px-5 py-2.5 md:px-6 md:py-3 text-center font-medium text-primary-blue transition-all hover:bg-primary-blue/5 hover:border-primary-blue/80 text-sm md:text-base",
  },
  {
    text: "Hubungi Kami",
    href: "/contact", 
    variant: "outline" as const,
    className: "rounded-lg border border-gray-300 bg-white px-5 py-2.5 md:px-6 md:py-3 text-center font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 text-sm md:text-base",
  },
];

/* ============================================
   HERO GRADIENT CONFIGURATION
   ============================================ */
const HERO_GRADIENTS = {
  background: "bg-gradient-hero",
  decorative: {
    topRight: "bg-primary-blue/10",
    bottomLeft: "bg-primary-green/10",
  },
};

/* ============================================
   HERO CONTENT TEXT
   ============================================ */
const HERO_CONTENT = {
  title: {
    part1: "Selamat Datang di",
    part2: "GSE Jogja",
  },
  description: "Pusat edukasi teknologi dan penjualan perangkat Apple terpercaya di Yogyakarta. Belajar robotik, coding, dan teknologi dengan metode menyenangkan.",
};

/* ============================================
   HERO SECTION COMPONENT
   ============================================ */
export default function HeroSection() {
  /* ============================================
     RENDER STATS/BULLET POINTS
     ============================================ */
  const renderStats = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
      {STATS.map((stat) => (
        <div
          key={stat}
          className="flex items-center space-x-3 text-gray-800"
        >
          {/* CHECK ICON */}
          <div className="flex-shrink-0">
            <Check className="h-5 w-5 text-primary-green" />
          </div>
          
          {/* STAT TEXT */}
          <span className="font-medium text-sm md:text-base">{stat}</span>
        </div>
      ))}
    </div>
  );

  /* ============================================
     RENDER CTA BUTTONS
     ============================================ */
  const renderCTAButtons = () => (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-3 md:pt-4">
      {CTA_BUTTONS.map((button) => (
        <Link
          key={button.text}
          href={button.href}
          className={button.className}
        >
          {button.text}
        </Link>
      ))}
    </div>
  );

  /* ============================================
     RENDER DECORATIVE ELEMENTS
     ============================================ */
  const renderDecorativeElements = () => (
    <>
      {/* TOP RIGHT BLUR CIRCLE */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-blue/10 blur-3xl"></div>
      
      {/* BOTTOM LEFT BLUR CIRCLE */}
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-green/10 blur-3xl"></div>
    </>
  );

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <section className="relative overflow-hidden bg-gradient-hero -mt-16 pt-32 pb-12 md:pt-40 md:pb-24 min-h-screen">
      {/* ============================================
          DECORATIVE BACKGROUND ELEMENTS
          ============================================ */}
      {renderDecorativeElements()}

      {/* ============================================
          MAIN CONTENT CONTAINER
          ============================================ */}
      <div className="container relative mx-auto px-4 z-10 h-full flex items-center">
        {/* ============================================
            TWO-COLUMN GRID LAYOUT
            ============================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          
          {/* ============================================
              LEFT COLUMN - TEXT CONTENT
              ============================================ */}
          <div className="space-y-6 md:space-y-8">
            
            {/* MAIN HEADING */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight">
              {HERO_CONTENT.title.part1}{" "}
              <span className="bg-gradient-gse bg-clip-text text-transparent">
                {HERO_CONTENT.title.part2}
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              {HERO_CONTENT.description}
            </p>

            {/* STATS/BULLET POINTS */}
            {renderStats()}

            {/* CTA BUTTONS */}
            {renderCTAButtons()}
          </div>

          {/* ============================================
              RIGHT COLUMN - IMAGE SLIDER
              ============================================ */}
          <div className="relative">
            
            {/* IMAGE SLIDER CONTAINER */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageSlider />
            </div>

            {/* SLIDER DECORATIVE BACKGROUND */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary-blue/20 to-primary-green/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}