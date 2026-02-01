/* ============================================
   app/(marketing)/gse-mac/components/ProductGrid.tsx
   PRODUCT GRID COMPONENT
   ============================================ */

import React from "react";
import { PRODUCT_CATEGORIES } from "../config/product";

export default function ProductGrid() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-primary-navy">
        Kategori Produk
      </h2>

      {/* CATEGORIES GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCT_CATEGORIES.map((category, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary-blue hover:shadow-lg"
          >
            {/* CATEGORY ICON */}
            <div
              className={`mb-4 inline-flex rounded-lg bg-gradient-to-r ${category.color} p-3 text-white`}
            >
              {category.icon}
            </div>

            {/* CATEGORY NAME */}
            <h3 className="mb-3 text-xl font-semibold text-primary-navy">
              {category.name}
            </h3>

            {/* CATEGORY DESCRIPTION */}
            <p className="mb-4 text-gray-600">{category.description}</p>

            {/* AVAILABLE MODELS */}
            <div className="mb-4">
              <h4 className="mb-2 text-sm font-medium text-gray-500">
                Model Tersedia:
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.models.map((model, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTON */}
            <button className="w-full rounded-lg bg-gradient-blue-green py-2 font-medium text-white transition-opacity hover:opacity-90">
              Info Harga & Stok
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
