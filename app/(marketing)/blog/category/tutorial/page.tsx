/* ============================================
   app/(marketing)/blog/category/tutorial/page.tsx
   TUTORIAL CATEGORY PAGE - GSE JOGJA
   ============================================ */

import React from "react";
import BlogCard from "../../components/blog-card";
import { getPostsByCategory } from "../../config/blog-data";
import { getCategoryById } from "../../config/categories";

/* ============================================
   TUTORIAL CATEGORY PAGE COMPONENT
   ============================================ */
export default function TutorialCategoryPage() {
  /* ============================================
     DATA FETCHING
     ============================================ */
  const category = getCategoryById("tutorial");
  const posts = getPostsByCategory("tutorial");

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          PAGE HEADER SECTION
          ============================================ */}
      <div className="border-b border-gray-200 px-4 py-8 md:py-12">
        <div className="container mx-auto">
          {/* ============================================
              CATEGORY BADGE
              ============================================ */}
          {category && (
            <span
              className={`mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold ${category.bgColor} ${category.color}`}
            >
              {category.name}
            </span>
          )}

          {/* ============================================
              PAGE TITLE
              ============================================ */}
          <h1 className="text-2xl font-bold text-primary-navy md:text-3xl">
            Kategori: Tutorial
          </h1>

          {/* ============================================
              PAGE DESCRIPTION
              ============================================ */}
          <p className="mt-2 text-gray-600">
            Panduan lengkap belajar teknologi, coding, dan tools terbaru
          </p>

          {/* ============================================
              POST COUNT
              ============================================ */}
          <div className="mt-4 text-sm text-gray-500">
            {posts.length} artikel tersedia
          </div>
        </div>
      </div>

      {/* ============================================
          MAIN CONTENT SECTION
          ============================================ */}
      <div className="container mx-auto px-4 py-8">
        {/* ============================================
            BLOG POSTS GRID
            ============================================ */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* ============================================
            BACK TO BLOG LINK
            ============================================ */}
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