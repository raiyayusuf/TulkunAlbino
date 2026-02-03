// app\(marketing)\blog\components\blog-sidebar.tsx
import React from "react";
import Link from "next/link";
import { CATEGORIES } from "../config/categories";

export default function BlogSidebar() {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-primary-navy">
          Kategori
        </h3>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/blog/category/${category.id}`}
              className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:${category.bgColor} hover:${category.color}`}
            >
              <span className="font-medium">{category.name}</span>
              <span className={`text-xs font-semibold ${category.color}`}>
                {Math.floor(Math.random() * 5) + 1}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-primary-navy">
          Artikel Terbaru
        </h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Link
              key={i}
              href="#"
              className="block rounded-lg p-3 transition-colors hover:bg-gray-50"
            >
              <h4 className="font-medium text-gray-800 line-clamp-2">
                Judul artikel terbaru {i} yang menarik untuk dibaca
              </h4>
              <p className="mt-1 text-sm text-gray-500">2 hari lalu</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="rounded-xl bg-gradient-hero p-4">
        <h3 className="mb-2 text-lg font-semibold text-primary-navy">
          📩 Newsletter
        </h3>
        <p className="mb-3 text-sm text-gray-600">
          Dapatkan update artikel terbaru langsung ke email Anda.
        </p>
        <input
          type="email"
          placeholder="Email Anda"
          className="mb-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
        <button className="w-full rounded-lg bg-gradient-blue-green py-2 text-sm font-medium text-white">
          Berlangganan
        </button>
      </div>
    </div>
  );
}
