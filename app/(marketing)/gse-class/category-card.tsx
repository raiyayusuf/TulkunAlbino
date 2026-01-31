/* ============================================
   app/(marketing)/gse-class/category-card.tsx
   CATEGORY CARD COMPONENT - GSE CLASS
   ============================================ */

import React from "react";
import Link from "next/link";

/* ============================================
   TYPE DEFINITIONS
   ============================================ */
interface CategoryCardProps {
  category: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    duration: string;
    level: string;
  };
}

/* ============================================
   CATEGORY CARD COMPONENT
   ============================================ */
export default function CategoryCard({ category }: CategoryCardProps) {
  /* ============================================
     DESTRUCTURE CATEGORY PROPS
     ============================================ */
  const { id, title, description, icon, color, duration, level } = category;

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <Link href={`/gse-class/category/${id}`}>
      {/* CARD CONTAINER */}
      <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-primary-blue hover:shadow-lg">
        {/* ============================================
            CARD HEADER WITH GRADIENT
            ============================================ */}
        <div className={`bg-gradient-to-r ${color} p-6`}>
          {/* HEADER CONTENT */}
          <div className="flex items-center justify-between">
            {/* CATEGORY ICON */}
            <div className="text-3xl">{icon}</div>

            {/* DURATION BADGE */}
            <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
              {duration}
            </div>
          </div>

          {/* CATEGORY TITLE */}
          <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
        </div>

        {/* ============================================
            CARD CONTENT AREA
            ============================================ */}
        <div className="p-6">
          {/* CATEGORY DESCRIPTION */}
          <p className="mb-4 text-gray-600">{description}</p>

          {/* LEVEL BADGE */}
          <div className="mb-4 flex items-center text-sm text-gray-500">
            <span className="rounded-full bg-gray-100 px-3 py-1">
              📊 {level}
            </span>
          </div>

          {/* ACTION LINK */}
          <div className="flex items-center text-sm font-medium text-primary-blue">
            <span>Lihat detail kelas</span>
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
