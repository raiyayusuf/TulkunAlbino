"use client";

import React from "react";
import Link from "next/link";
import { Calendar, User, Clock } from "lucide-react";
import { blogCategories } from "../config/categories";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    imageUrl: string;
    slug: string;
  };
  variant?: "desktop" | "mobile";
}

export default function BlogCard({ post, variant = "desktop" }: BlogCardProps) {
  const category = blogCategories.find(c => c.id === post.category);
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Mobile layout
  if (variant === "mobile") {
    return (
      <Link href={`/blog/${post.slug}`}>
        <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-blue mb-6">
          {/* CONTENT SECTION - MOBILE FIRST */}
          <div className="p-5">
            {/* CATEGORY BADGE */}
            <div className="mb-3">
              <span className={`rounded-full px-3 py-1 text-xs font-medium text-white ${
                category?.id === 'prestasi' ? 'bg-yellow-500' :
                category?.id === 'kegiatan' ? 'bg-blue-500' :
                category?.id === 'tutorial' ? 'bg-green-500' :
                category?.id === 'event' ? 'bg-purple-500' :
                category?.id === 'edukasi' ? 'bg-indigo-500' :
                category?.id === 'story' ? 'bg-pink-500' :
                'bg-gray-500'
              }`}>
                {category?.name}
              </span>
            </div>
            
            {/* TITLE */}
            <h3 className="mb-3 text-lg font-bold text-primary-navy line-clamp-2 group-hover:text-primary-blue transition-colors">
              {post.title}
            </h3>

            {/* EXCERPT */}
            <p className="mb-4 text-gray-600 line-clamp-2 text-sm">
              {post.excerpt}
            </p>

            {/* METADATA */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <User className="mr-1 h-3 w-3" />
                <span className="truncate mr-3">{post.author}</span>
                <Calendar className="mr-1 h-3 w-3" />
                <span>{formatDate(post.date)}</span>
              </div>

              {/* READ TIME */}
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* READ MORE */}
            <div className="pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-primary-blue group-hover:underline">
                Baca selengkapnya →
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Desktop layout
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-blue h-full flex flex-col">
        {/* IMAGE SECTION */}
        <div className="relative overflow-hidden h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-green/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* CATEGORY BADGE */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`rounded-full px-3 py-1 text-xs font-medium text-white ${
              category?.id === 'prestasi' ? 'bg-yellow-500' :
              category?.id === 'kegiatan' ? 'bg-blue-500' :
              category?.id === 'tutorial' ? 'bg-green-500' :
              category?.id === 'event' ? 'bg-purple-500' :
              category?.id === 'edukasi' ? 'bg-indigo-500' :
              category?.id === 'story' ? 'bg-pink-500' :
              'bg-gray-500'
            }`}>
              {category?.name}
            </span>
          </div>
          
          {/* PLACEHOLDER IMAGE */}
          <div className="flex h-full items-center justify-center">
            <div className="text-4xl text-gray-300">📝</div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-6 flex-1 flex flex-col">
          {/* TITLE */}
          <h3 className="mb-3 text-lg font-bold text-primary-navy line-clamp-2 group-hover:text-primary-blue transition-colors">
            {post.title}
          </h3>

          {/* EXCERPT */}
          <p className="mb-4 text-gray-600 line-clamp-2 text-sm flex-1">
            {post.excerpt}
          </p>

          {/* METADATA */}
          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
            <div className="flex items-center space-x-4">
              {/* AUTHOR */}
              <div className="flex items-center">
                <User className="mr-1 h-3 w-3" />
                <span className="truncate">{post.author}</span>
              </div>

              {/* DATE */}
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>

            {/* READ TIME */}
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* READ MORE */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm font-medium text-primary-blue group-hover:underline">
              Baca selengkapnya →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}