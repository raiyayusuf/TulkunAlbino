import { BlogCategory } from './categories';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory['id'];
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Dari Kelas Jadi Juara: Murid GSE Menang Kompetisi Robotika Nasional',
    excerpt: 'Kisah inspiratif murid GSE Jogja yang berhasil meraih juara 1 dalam kompetisi robotika tingkat nasional.',
    content: 'Lorem ipsum...',
    category: 'prestasi',
    author: 'Tim GSE',
    date: '2026-02-02',
    readTime: '5 min',
    imageUrl: '/placeholder-blog-1.jpg',
    slug: 'dari-kelas-jadi-juara',
  },
  {
    id: '2',
    title: 'Coding untuk Semua: Inklusi Teknologi di Era Digital',
    excerpt: 'Bagaimana GSE Jogja membuka akses pembelajaran coding untuk semua kalangan tanpa batas usia.',
    content: 'Lorem ipsum...',
    category: 'edukasi',
    author: 'Tim GSE',
    date: '2026-01-30',
    readTime: '4 min',
    imageUrl: '/placeholder-blog-2.jpg',
    slug: 'coding-untuk-semua',
  },
  {
    id: '3',
    title: 'Kegiatan Positif Anak Sepulang Sekolah',
    excerpt: 'Rekomendasi kegiatan produktif untuk anak-anak setelah jam sekolah berakhir.',
    content: 'Lorem ipsum...',
    category: 'edukasi',
    author: 'Tim GSE',
    date: '2026-01-02',
    readTime: '6 min',
    imageUrl: '/placeholder-blog-3.jpg',
    slug: 'kegiatan-positif-anak',
  },
  {
    id: '4',
    title: 'Workshop IoT 2024: Belajar Internet of Things dari Nol',
    excerpt: 'Laporan lengkap kegiatan workshop IoT yang diadakan GSE Jogja untuk pemula.',
    content: 'Lorem ipsum...',
    category: 'kegiatan',
    author: 'Tim GSE',
    date: '2025-12-15',
    readTime: '7 min',
    imageUrl: '/placeholder-blog-4.jpg',
    slug: 'workshop-iot-2024',
  },
  {
    id: '5',
    title: 'Tips Belajar Coding untuk Pemula yang Efektif',
    excerpt: 'Panduan lengkap memulai belajar pemrograman dengan metode yang tepat dan menyenangkan.',
    content: 'Lorem ipsum...',
    category: 'tutorial',
    author: 'Tim GSE',
    date: '2025-12-10',
    readTime: '8 min',
    imageUrl: '/placeholder-blog-5.jpg',
    slug: 'tips-belajar-coding',
  },
  {
    id: '6',
    title: 'Event Apple Day: Eksplorasi Teknologi Terbaru Apple',
    excerpt: 'Serunya acara Apple Day di GSE Jogja dengan demo produk dan workshop eksklusif.',
    content: 'Lorem ipsum...',
    category: 'event',
    author: 'Tim GSE',
    date: '2025-11-25',
    readTime: '5 min',
    imageUrl: '/placeholder-blog-6.jpg',
    slug: 'event-apple-day',
  },
  {
    id: '7',
    title: 'Testimoni Alumni: Dari GSE ke Dunia Kerja',
    excerpt: 'Pengalaman langsung alumni GSE yang sukses berkarier di industri teknologi.',
    content: 'Lorem ipsum...',
    category: 'story',
    author: 'Alumni GSE',
    date: '2025-11-20',
    readTime: '10 min',
    imageUrl: '/placeholder-blog-7.jpg',
    slug: 'testimoni-alumni',
  },
  {
    id: '8',
    title: 'Update Kurikulum: Menyesuaikan dengan Kebutuhan Industri',
    excerpt: 'Perubahan kurikulum GSE Class untuk menjawab tantangan teknologi terkini.',
    content: 'Lorem ipsum...',
    category: 'edukasi',
    author: 'Tim Akademik',
    date: '2025-11-15',
    readTime: '6 min',
    imageUrl: '/placeholder-blog-8.jpg',
    slug: 'update-kurikulum',
  },
];

// Helper functions
export const getPostsByCategory = (categoryId: string) => {
  if (categoryId === 'all') return blogPosts;
  return blogPosts.filter(post => post.category === categoryId);
};

export const searchPosts = (query: string) => {
  if (!query.trim()) return blogPosts;
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.category.includes(lowerQuery)
  );
};