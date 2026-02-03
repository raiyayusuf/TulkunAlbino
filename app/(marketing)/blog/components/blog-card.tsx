import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock } from "lucide-react";
import { BlogPost } from "../config/blog-data";
import { getCategoryById } from "../config/categories";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const category = getCategoryById(post.category);

  return (
    <Link href={`/blog/${post.id}`}>
      <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-primary-blue hover:shadow-md">
        {/* Image - Kurangi height untuk 3 kolom */}
        <div className="relative h-40 w-full overflow-hidden md:h-44">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-hero">
              <span className="text-3xl">📝</span>
            </div>
          )}

          {/* Category Badge */}
          {category && (
            <div className="absolute left-3 top-3 z-10">
              <span
                className={`rounded-full px-2 py-1 text-xs font-semibold ${category.bgColor} ${category.color}`}
              >
                {category.name}
              </span>
            </div>
          )}
        </div>

        {/* Content - Kurangi padding */}
        <div className="p-4">
          {/* Title - Kurangi font size */}
          <h3 className="mb-2 text-lg font-bold text-primary-navy group-hover:text-primary-blue transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt - Kurangi line-clamp */}
          <p className="mb-3 text-sm text-gray-600 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta Information - Perkecil text */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <div className="flex items-center">
              <User className="mr-1 h-3 w-3" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Read More */}
          <div className="mt-3">
            <span className="inline-flex items-center text-sm text-primary-blue font-medium group-hover:text-primary-green transition-colors">
              Baca selengkapnya →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
