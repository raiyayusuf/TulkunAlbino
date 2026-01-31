// app/(marketing)/gse-class/category-card.tsx
import React from "react";
import Link from "next/link";

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

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/gse-class/category/${category.id}`}>
      <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-primary-blue hover:shadow-lg">
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${category.color} p-6`}>
          <div className="flex items-center justify-between">
            <div className="text-3xl">{category.icon}</div>
            <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
              {category.duration}
            </div>
          </div>
          <h3 className="mt-4 text-xl font-bold text-white">
            {category.title}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="mb-4 text-gray-600">{category.description}</p>

          <div className="mb-4 flex items-center text-sm text-gray-500">
            <span className="rounded-full bg-gray-100 px-3 py-1">
              📊 {category.level}
            </span>
          </div>

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
