import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { BLOG_POSTS, getPostsByCategory } from "../config/blog-data";
import { getCategoryById } from "../config/categories";
import BlogCard from "../components/blog-card";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  const category = getCategoryById(post.category);
  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.id !== id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button Mobile */}
      <div className="sticky top-16 z-40 border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
        <Link
          href="/blog"
          className="flex items-center text-primary-blue hover:text-primary-green"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Blog
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Button Desktop */}
        <div className="mb-6 hidden lg:block">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-blue hover:text-primary-green"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Semua Artikel
          </Link>
        </div>

        {/* Article Content */}
        <article className="mx-auto max-w-4xl">
          {/* Article Header */}
          <div className="mb-8">
            {category && (
              <span
                className={`mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold ${category.bgColor} ${category.color}`}
              >
                {category.name}
              </span>
            )}

            <h1 className="mb-4 text-3xl font-bold text-primary-navy md:text-4xl">
              {post.title}
            </h1>

            <div className="mb-6 flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{post.readTime} membaca</span>
              </div>
              <button className="ml-auto flex items-center text-gray-500 hover:text-primary-blue">
                <Share2 className="mr-1 h-4 w-4" />
                <span className="text-sm">Bagikan</span>
              </button>
            </div>
          </div>

          {/* Article Image */}
          {post.image && (
            <div className="mb-8 overflow-hidden rounded-2xl">
              <div className="relative h-64 w-full md:h-96">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 rounded-xl bg-gradient-hero p-6">
              <p className="text-lg font-medium text-primary-navy">
                {post.excerpt}
              </p>
            </div>

            <div className="mb-8 space-y-4">
              <h2 className="text-2xl font-bold text-primary-navy">
                Pengantar
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Konten artikel ini masih dalam pengembangan. Silakan kembali
                lagi nanti untuk membaca artikel lengkapnya.
              </p>
            </div>
          </div>

          {/* Author Box */}
          <div className="my-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-primary-navy">
              Tentang Penulis
            </h3>
            <div className="flex items-start">
              <div className="mr-4 h-12 w-12 rounded-full bg-gradient-blue-green"></div>
              <div>
                <h4 className="font-semibold text-gray-800">{post.author}</h4>
                <p className="mt-1 text-gray-600">
                  Tim GSE Jogja berdedikasi untuk memberikan edukasi teknologi
                  terbaik dan update terbaru seputar dunia teknologi dan
                  pendidikan.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="mb-6 text-xl font-bold text-primary-navy">
              Artikel Lainnya di Kategori {category?.name}
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <Link
            href="/blog"
            className="text-primary-blue hover:text-primary-green hover:underline"
          >
            ← Lihat semua artikel
          </Link>
          <Link
            href="/"
            className="text-primary-blue hover:text-primary-green hover:underline"
          >
            Kembali ke Beranda →
          </Link>
        </div>
      </div>
    </div>
  );
}
