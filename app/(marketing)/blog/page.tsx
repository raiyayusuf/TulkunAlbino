/* ============================================
   app/(marketing)/blog/page.tsx
   BLOG MAIN PAGE - GSE JOGJA
   ============================================ */

import React from "react";
import BlogCard from "./components/blog-card";
import { BLOG_POSTS, getCategoriesWithCount } from "./config/blog-data";

/* ============================================
   BLOG MAIN PAGE COMPONENT
   ============================================ */
export default function BlogPage() {
  /* ============================================
     DATA PREPARATION
     ============================================ */
  const categoriesWithCount = getCategoriesWithCount();
  const totalPosts = BLOG_POSTS.length;

  /* ============================================
     RENDER BLOG POSTS GRID
     ============================================ */
  const renderBlogPosts = () => (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
      {BLOG_POSTS.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );

  /* ============================================
     RENDER BLOG STATISTICS
     ============================================ */
  const renderBlogStatistics = () => (
    <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h3 className="mb-4 text-xl font-bold text-primary-navy">
        📊 Statistik Blog
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categoriesWithCount.map((category) => (
          <div key={category.id} className="text-center">
            <div className="mb-1 text-2xl font-bold text-primary-blue">
              {category.count}
            </div>
            <div className="text-sm font-medium text-gray-600">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ============================================
     RENDER CTA SECTION
     ============================================ */
  const renderCTASection = () => (
    <div className="mt-8 rounded-xl bg-gradient-blue-green p-8 text-center text-white">
      <h3 className="mb-3 text-xl font-bold">
        Ingin kontribusi menulis artikel?
      </h3>
      <p className="mb-6 opacity-90">
        Bergabunglah dengan komunitas penulis GSE Jogja dan bagikan
        pengetahuanmu.
      </p>
      <a
        href="/login"
        className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-primary-blue transition-all hover:bg-gray-100"
      >
        Login untuk Mulai Menulis
      </a>
    </div>
  );

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          HEADER SECTION
          ============================================ */}
      <div className="px-4 py-8 md:py-12">
        <div className="container mx-auto">
          <h1 className="mb-2 text-2xl font-bold text-primary-navy md:text-3xl">
            Semua Artikel
          </h1>
          <p className="mb-6 text-gray-600">
            Temukan artikel menarik seputar teknologi dan kegiatan GSE Jogja
          </p>

          <div className="text-sm text-gray-500">
            Menampilkan {totalPosts} artikel
          </div>
        </div>
      </div>

      {/* ============================================
          MAIN CONTENT SECTION
          ============================================ */}
      <div className="container mx-auto px-4 py-8">
        {/* BLOG POSTS GRID */}
        {renderBlogPosts()}

        {/* LOAD MORE BUTTON */}
        <div className="mt-12 text-center">
          <button className="rounded-lg border border-gray-300 bg-white px-8 py-3 font-medium text-gray-700 transition-all hover:border-primary-blue hover:bg-primary-blue/5 hover:text-primary-blue">
            Muat Lebih Banyak
          </button>
        </div>

        {/* BLOG STATISTICS */}
        {renderBlogStatistics()}

        {/* CTA SECTION */}
        {renderCTASection()}
      </div>
    </div>
  );
}