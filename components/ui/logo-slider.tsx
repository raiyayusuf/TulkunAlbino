// components/ui/logo-slider.tsx

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

/* ============================================
   SCHOOL LOGOS DATA dengan WEBSITE
   ============================================ */
const SCHOOL_LOGOS = [
  {
    src: "/school/cairo-logo.jpg",
    alt: "Cairo Islamic School",
    name: "Cairo Islamic School",
    website: "https://alazharcairoyogyakarta.sch.id/",
  },
  {
    src: "/school/depok3-logo.jpeg",
    alt: "SD Negeri Depok 3",
    name: "SD Negeri Depok 3",
    website: "https://smpn3depoksleman.sch.id/",
  },
  {
    src: "/school/gda2-logo.png",
    alt: "GDA School 2 Yogyakarta",
    name: "GDA School 2",
    website: "https://admission.gda.sch.id/ro-index/pratar",
  },
  {
    src: "/school/gis-logo.webp",
    alt: "GIS - Global Islamic School",
    name: "Global Islamic School",
    website: "https://gisjogja.sch.id/",
  },
  {
    src: "/school/gistrav-logo.png",
    alt: "GISTRAV School",
    name: "GISTRAV School",
    website: "https://jogja.gis.sch.id/",
  },
  {
    src: "/school/intis-logo.png",
    alt: "INTIS School Yogyakarta",
    name: "INTIS School",
    website: "https://www.intisschoolyogyakarta.sch.id/",
  },
  {
    src: "/school/kinderstation-logo.png",
    alt: "Kinderstation Preschool",
    name: "Kinderstation",
    website: "https://kinderstationschool.sch.id/",
  },
  {
    src: "/school/pakem4-logo.png",
    alt: "SD Negeri Pakem 4",
    name: "SD Pakem 4",
    website: "https://smpn4pakem.sch.id/",
  },
  {
    src: "/school/sahabatqu-logo.jpeg",
    alt: "SahabatQu Islamic School",
    name: "SahabatQu",
    website: "https://smasahabatqu.sch.id/",
  },
  {
    src: "/school/salman-logo.png",
    alt: "Salman Al-Farisi School",
    name: "Salman Al-Farisi",
    website: "https://safjogja.org/",
  },
];

/* ============================================
   INTERFACE PROPS
   ============================================ */
interface LogoSliderProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
  speed?: "slow" | "normal" | "fast";
}

/* ============================================
   MAIN LOGO SLIDER COMPONENT
   ============================================ */
export default function LogoSlider({
  title = "School Partner",
  subtitle = "Trusted by Partnered School",
  showStats = true,
  speed = "normal",
}: LogoSliderProps) {
  /* ============================================
     ANIMATED COUNTER STATE
     ============================================ */
  const [counters, setCounters] = useState({
    schools: 0,
    programs: 0,
    students: 0,
  });

  /* ============================================
     TARGET VALUES (PLUS DI KIRI)
     ============================================ */
  const targetValues = {
    schools: 11,
    programs: 50,
    students: 500, // DIUBAH DARI 1000 JADI 500
  };

  /* ============================================
     ANIMATE COUNTERS EFFECT
     ============================================ */
  useEffect(() => {
    if (!showStats) return;

    const duration = 2000; // 2 detik
    const interval = 50; // update tiap 50ms
    const steps = duration / interval;
    
    const schoolStep = targetValues.schools / steps;
    const programStep = targetValues.programs / steps;
    const studentStep = targetValues.students / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      
      setCounters({
        schools: Math.min(Math.floor(schoolStep * currentStep), targetValues.schools),
        programs: Math.min(Math.floor(programStep * currentStep), targetValues.programs),
        students: Math.min(Math.floor(studentStep * currentStep), targetValues.students),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [showStats]);

  /* ============================================
     SPEED MAPPING UNTUK MARQUEE
     ============================================ */
  const speedClass = {
    slow: "marquee-perfect-slow",
    normal: "marquee-perfect",
    fast: "marquee-perfect-fast",
  }[speed];

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* ============================================
            HEADER SECTION
            ============================================ */}
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

        {/* ============================================
            MARQUEE CONTAINER
            ============================================ */}
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
        </div>

        {/* ============================================
            STATS SECTION DENGAN ANIMASI COUNTER
            ============================================ */}
        {showStats && (
          <div className="mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {/* ============================================
                  SEKOLAH PARTNER (11)
                  ============================================ */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-3 text-primary-blue flex items-center justify-center">
                  <span className="text-3xl md:text-4xl"></span>
                  <span className="tabular-nums">
                    {counters.schools}
                  </span>
                </div>
                <div className="text-gray-600 font-medium">
                  Sekolah Partner
                </div>
              </div>

              {/* ============================================
                  PROGRAM KOLABORASI (50)
                  ============================================ */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-3 text-primary-green flex items-center justify-center">
                  <span className="text-3xl md:text-4xl"></span>
                  <span className="tabular-nums">
                    {counters.programs}
                  </span>
                </div>
                <div className="text-gray-600 font-medium">
                  Program Kolaborasi
                </div>
              </div>

              {/* ============================================
                  SISWA TERLIBAT (+500) - DIUBAH DARI 1000
                  ============================================ */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-3 text-primary-navy flex items-center justify-center">
                  <span className="text-3xl md:text-4xl">+</span>
                  <span className="tabular-nums">
                    {counters.students}
                  </span>
                </div>
                <div className="text-gray-600 font-medium">
                  Siswa Terlibat
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================
   LOGO ITEM COMPONENT
   ============================================ */
interface LogoItemProps {
  logo: {
    src: string;
    alt: string;
    name: string;
    website: string;
  };
  index: number;
}

/* ============================================
   LOGO ITEM RENDER
   ============================================ */
function LogoItem({ logo, index }: LogoItemProps) {
  /* ============================================
     HANDLE CLICK UNTUK BUKA WEBSITE
     ============================================ */
  const handleClick = () => {
    if (logo.website) {
      window.open(logo.website, "_blank", "noopener,noreferrer");
    }
  };

  /* ============================================
     RENDER LOGO ITEM
     ============================================ */
  return (
    <div
      className="mx-3 md:mx-4 lg:mx-5 flex-shrink-0 group cursor-pointer"
      style={{ width: "150px", height: "95px" }}
      data-index={index}
      onClick={handleClick}
      title={`Kunjungi website ${logo.name}`}
    >
      <div className="relative h-full w-full transition-all duration-300 opacity-100 group-hover:scale-110 group-hover:z-10">
        {/* ============================================
            LOGO IMAGE
            ============================================ */}
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          className="object-contain hover:brightness-110 transition-all duration-300"
          sizes="150px"
        />

        {/* ============================================
            OVERLAY HOVER EFFECT
            ============================================ */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-primary-blue/5 rounded-lg transition-all duration-300" />

        {/* ============================================
            TOOLTIP UNTUK INFO KLIK
            ============================================ */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20">
          <div className="rounded-md bg-primary-navy px-3 py-1.5 text-xs text-white shadow-lg">
            Klik untuk kunjungi website
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-primary-navy"></div>
          </div>
        </div>
      </div>
    </div>
  );
}