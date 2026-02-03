import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../config/posts";
import { blogCategories } from "../config/categories";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const category = blogCategories.find(c => c.id === post.category);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* BACK BUTTON */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-blue hover:underline"
          >
            ← Kembali ke Blog
          </Link>
        </div>

        {/* ARTICLE HEADER */}
        <div className="mb-8">
          <div className="mb-4">
            <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium text-white ${
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
          
          <h1 className="mb-4 text-3xl font-bold text-primary-navy md:text-4xl">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>👤 {post.author}</span>
            <span>📅 {formatDate(post.date)}</span>
            <span>⏱️ {post.readTime} membaca</span>
          </div>
        </div>

        {/* FEATURED IMAGE */}
        <div className="mb-8 h-64 rounded-xl bg-gradient-to-r from-primary-blue/10 to-primary-green/10 flex items-center justify-center">
          <div className="text-6xl text-gray-300">📝</div>
        </div>

        {/* ARTICLE CONTENT */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="lead text-lg text-gray-700 mb-6">
            {post.excerpt}
          </p>
          
          <div className="space-y-4">
            <p>
              Halaman detail artikel sedang dalam pengembangan. Konten lengkap akan segera tersedia.
            </p>
            <p>
              Untuk sementara, Anda bisa membaca excerpt dari artikel ini di atas atau kembali ke halaman blog untuk melihat artikel lainnya.
            </p>
          </div>
        </div>

        {/* RELATED ARTICLES SECTION */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="mb-6 text-2xl font-bold text-primary-navy">
            Artikel Lainnya
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="rounded-lg border border-gray-200 p-4 hover:border-primary-blue hover:shadow-sm transition-all"
                >
                  <h3 className="font-semibold text-primary-navy hover:text-primary-blue">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {relatedPost.excerpt.substring(0, 80)}...
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}