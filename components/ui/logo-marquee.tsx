// components/ui/logo-marquee.tsx - WITH GDA2 ADDED
"use client";

import React from "react";
import Image from "next/image";

// SCHOOL LOGOS DATA - Dinamis dan terstruktur
const SCHOOL_LOGOS = [
  {
    src: "/school/cairo-logo.jpg",
    alt: "Cairo Islamic School",
    name: "Cairo Islamic School",
  },
  {
    src: "/school/depok3-logo.jpeg",
    alt: "SD Negeri Depok 3",
    name: "SD Negeri Depok 3",
  },
  {
    src: "/school/gda2-logo.png",
    alt: "GDA School 2 Yogyakarta",
    name: "GDA School 2",
  },
  {
    src: "/school/gis-logo.webp",
    alt: "GIS - Global Islamic School",
    name: "Global Islamic School",
  },
  {
    src: "/school/gistrav-logo.png",
    alt: "GISTRAV School",
    name: "GISTRAV School",
  },
  {
    src: "/school/intis-logo.png",
    alt: "INTIS School Yogyakarta",
    name: "INTIS School",
  },
  {
    src: "/school/kinderstation-logo.png",
    alt: "Kinderstation Preschool",
    name: "Kinderstation",
  },
  {
    src: "/school/pakem4-logo.png",
    alt: "SD Negeri Pakem 4",
    name: "SD Pakem 4",
  },
  {
    src: "/school/sahabatqu-logo.jpeg",
    alt: "SahabatQu Islamic School",
    name: "SahabatQu",
  },
  {
    src: "/school/salman-logo.png",
    alt: "Salman Al-Farisi School",
    name: "Salman Al-Farisi",
  },
];

interface LogoMarqueeProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
  speed?: "slow" | "normal" | "fast";
}

export default function LogoMarquee({
  title = "School Partner",
  subtitle = "Trusted by Partnered School",
  showStats = true,
  speed = "normal",
}: LogoMarqueeProps) {
  // Speed mapping
  const speedClass = {
    slow: "marquee-perfect-slow",
    normal: "marquee-perfect",
    fast: "marquee-perfect-fast",
  }[speed];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center rounded-full bg-gradient-blue-green px-4 py-1.5 text-sm font-medium text-white mb-4">
            🤝 {title}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-3">
            {subtitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kolaborasi dengan institusi pendidikan terpercaya di Yogyakarta
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* MARQUEE dengan 3 SET untuk NO GAP */}
          <div className={`flex ${speedClass}`}>
            {/* SET 1 */}
            <div className="flex flex-shrink-0">
              {SCHOOL_LOGOS.map((logo, index) => (
                <LogoItem key={`set1-${index}`} logo={logo} index={index} />
              ))}
            </div>

            {/* SET 2 - TANPA JEDA */}
            <div className="flex flex-shrink-0">
              {SCHOOL_LOGOS.map((logo, index) => (
                <LogoItem key={`set2-${index}`} logo={logo} index={index} />
              ))}
            </div>

            {/* SET 3 - EXTRA BUFFER */}
            <div className="flex flex-shrink-0">
              {SCHOOL_LOGOS.map((logo, index) => (
                <LogoItem key={`set3-${index}`} logo={logo} index={index} />
              ))}
            </div>
          </div>

          {/* NO GRADIENT EDGES */}
        </div>

        {/* Stats Section - UPDATE ANGKA JIKA PERLU */}
        {showStats && (
          <div className="mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { value: "11+", label: "Sekolah Partner", color: "blue" }, // ← UPDATE jadi 11+
                { value: "50+", label: "Program Kolaborasi", color: "green" },
                { value: "1000+", label: "Siswa Terlibat", color: "navy" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`text-4xl md:text-5xl font-bold mb-3 ${
                      stat.color === "blue"
                        ? "text-primary-blue"
                        : stat.color === "green"
                          ? "text-primary-green"
                          : "text-primary-navy"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Logo Item Component
interface LogoItemProps {
  logo: {
    src: string;
    alt: string;
    name: string;
  };
  index: number;
}

function LogoItem({ logo, index }: LogoItemProps) {
  return (
    <div
      className="mx-3 md:mx-4 lg:mx-5 flex-shrink-0 group"
      style={{ width: "150px", height: "95px" }}
      data-index={index}
    >
      <div className="relative h-full w-full transition-all duration-300 opacity-100 group-hover:scale-110 group-hover:z-10">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          className="object-contain"
          sizes="150px"
        />
        {/* Tooltip dengan nama sekolah yang lebih informatif */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20">
          <div className="rounded-md bg-primary-navy px-3 py-1.5 text-xs text-white shadow-lg">
            {logo.name}
          </div>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-primary-navy"></div>
        </div>
      </div>
    </div>
  );
}
