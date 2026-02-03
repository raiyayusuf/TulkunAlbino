// app\(marketing)\blog\category\edukasi\page.tsx
import React from "react";
import BlogCard from "../../components/blog-card";
import { getPostsByCategory } from "../../config/blog-data";
import { getCategoryById } from "../../config/categories";

export default function EdukasiCategoryPage() {
  const category = getCategoryById("edukasi");
  const posts = getPostsByCategory("edukasi");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-8 md:py-12">
        <div className="container mx-auto">
          {category && (
            <span
              className={`mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold ${category.bgColor} ${category.color}`}
            >
              {category.name}
            </span>
          )}
          <h1 className="text-2xl font-bold text-primary-navy md:text-3xl">
            Kategori: Edukasi
          </h1>
          <p className="mt-2 text-gray-600">
            Artikel tentang edukasi teknologi, parenting, dan pengembangan diri
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {posts.length} artikel tersedia
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center text-primary-blue hover:text-primary-green"
          >
            ← Kembali ke semua artikel
          </a>
        </div>
      </div>
    </div>
  );
}
