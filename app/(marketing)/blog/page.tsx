"use client";

import React, { useState, useMemo, useEffect } from "react";
import BlogLayout from "./layout";
import BlogCard from "./components/blog-card";
import BlogFilter from "./components/blog-filter";
import SearchBar from "./components/search-bar";
import { blogPosts, searchPosts, getPostsByCategory } from "./config/posts";
import { blogCategories } from "./config/categories";
import { useSearchParams } from "next/navigation";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get('category') || 'all';
  
  // State
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync URL with state
  useEffect(() => {
    setSelectedCategory(urlCategory);
  }, [urlCategory]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = getPostsByCategory(selectedCategory);
    }
    
    // Filter by search
    if (searchQuery.trim()) {
      filtered = searchPosts(searchQuery);
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const currentCategory = blogCategories.find(c => c.id === selectedCategory);

  return (
    <BlogLayout>
      {/* ============================================
          MOBILE LAYOUT
          ============================================ */}
      <div className="lg:hidden">
        {/* MOBILE HEADER */}
        <div className="mb-6 px-4 pt-4">
          <h1 className="text-xl font-bold text-primary-navy">Blog GSE Jogja</h1>
          <p className="mt-1 text-sm text-gray-600">
            Update kegiatan & tips teknologi
          </p>
        </div>

        {/* MOBILE SEARCH BAR */}
        <div className="mb-4 px-4">
          <SearchBar 
            onSearch={handleSearch} 
            placeholder="Cari artikel..." 
          />
        </div>

        {/* MOBILE FILTER TABS */}
        <div className="mb-6 px-4">
          <BlogFilter
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            variant="mobile"
          />
        </div>

        {/* MOBILE PAGE INFO */}
        <div className="mb-6 px-4">
          <h2 className="text-lg font-bold text-primary-navy">
            {currentCategory?.id === 'all' 
              ? 'Semua Artikel' 
              : currentCategory?.name}
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            {searchQuery 
              ? `Hasil pencarian untuk "${searchQuery}"` 
              : `Temukan artikel menarik`}
          </p>
        </div>

        {/* MOBILE POSTS COUNT */}
        <div className="mb-4 px-4">
          <p className="text-sm text-gray-500">
            Menampilkan {filteredPosts.length} artikel
          </p>
        </div>

        {/* MOBILE BLOG GRID */}
        <div className="px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  variant="mobile"
                />
              ))}
            </div>
          ) : (
            /* EMPTY STATE - MOBILE */
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                Artikel tidak ditemukan
              </h3>
              <p className="text-gray-500 text-sm">
                {searchQuery 
                  ? `Tidak ada artikel yang cocok dengan pencarian "${searchQuery}"` 
                  : `Belum ada artikel dalam kategori ini`}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 inline-block rounded-lg bg-gradient-blue-green px-5 py-2 text-sm font-medium text-white hover:shadow-md"
              >
                Lihat Semua Artikel
              </button>
            </div>
          )}
        </div>

        {/* MOBILE PAGINATION INFO */}
        {filteredPosts.length > 0 && (
          <div className="mt-8 px-4 border-t border-gray-200 pt-6">
            <p className="text-center text-xs text-gray-500">
              Menampilkan {filteredPosts.length} dari {blogPosts.length} artikel
            </p>
          </div>
        )}
      </div>

      {/* ============================================
          DESKTOP LAYOUT
          ============================================ */}
      <div className="hidden lg:block">
        {/* DESKTOP PAGE HEADER */}
        <div className="mb-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-primary-navy">
              {currentCategory?.id === 'all' 
                ? 'Semua Artikel' 
                : `Artikel: ${currentCategory?.name}`}
            </h1>
            <p className="mt-1 text-gray-600">
              {searchQuery 
                ? `Hasil pencarian untuk "${searchQuery}"` 
                : `Temukan artikel menarik seputar teknologi dan kegiatan GSE Jogja`}
            </p>
          </div>
          
          {/* DESKTOP SEARCH BAR */}
          <div className="mb-6 w-full max-w-md">
            <SearchBar 
              onSearch={handleSearch} 
              placeholder="Cari artikel..." 
            />
          </div>
        </div>

        {/* DESKTOP POSTS COUNT */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Menampilkan {filteredPosts.length} artikel
          </p>
        </div>

        {/* DESKTOP BLOG GRID */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                variant="desktop"
              />
            ))}
          </div>
        ) : (
          /* EMPTY STATE - DESKTOP */
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-700">
              Artikel tidak ditemukan
            </h3>
            <p className="text-gray-500">
              {searchQuery 
                ? `Tidak ada artikel yang cocok dengan pencarian "${searchQuery}"` 
                : `Belum ada artikel dalam kategori ini`}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 inline-block rounded-lg bg-gradient-blue-green px-6 py-2 text-sm font-medium text-white hover:shadow-md"
            >
              Lihat Semua Artikel
            </button>
          </div>
        )}

        {/* DESKTOP PAGINATION INFO */}
        {filteredPosts.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">
              Menampilkan {filteredPosts.length} dari {blogPosts.length} artikel
            </p>
          </div>
        )}
      </div>
    </BlogLayout>
  );
}