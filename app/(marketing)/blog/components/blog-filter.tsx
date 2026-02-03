"use client";

import React from "react";
import { blogCategories } from "../config/categories";

interface BlogFilterProps {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
  variant?: "desktop" | "mobile";
}

export default function BlogFilter({
  selectedCategory,
  onCategorySelect,
  variant = "mobile",
}: BlogFilterProps) {
  // Desktop: Vertical list
  if (variant === "desktop") {
    return (
      <div className="space-y-1">
        {blogCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`flex w-full items-center rounded-lg px-3 py-2 text-left text-sm transition-colors ${
              selectedCategory === category.id
                ? "bg-gradient-blue-green text-white font-medium"
                : "text-gray-600 hover:bg-gray-100 hover:text-primary-navy"
            }`}
          >
            <span>{category.name}</span>
            {selectedCategory === category.id && (
              <span className="ml-auto">→</span>
            )}
          </button>
        ))}
      </div>
    );
  }

  // Mobile: Horizontal tabs
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        {blogCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? "bg-gradient-blue-green text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}