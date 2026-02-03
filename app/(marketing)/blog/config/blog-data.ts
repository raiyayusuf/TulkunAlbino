export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
}

// DATA: Total 35 artikel (kegiatan 5, tutorial 8, prestasi 5, event 6, edukasi 6, story 5)
export const BLOG_POSTS: BlogPost[] = [
  // ==================== KEGIATAN (5) ====================
  {
    id: "workshop-iot-2024",
    title: "Workshop IoT 2024: Belajar Internet of Things dari Nol",
    excerpt:
      "Laporan lengkap kegiatan workshop IoT yang diadakan GSE Jogja untuk pemula.",
    content: "",
    category: "kegiatan",
    author: "Tim GSE",
    date: "15 Desember 2025",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
  },
  {
    id: "coding-bootcamp-siswa",
    title: "Coding Bootcamp untuk Siswa SMA se-Jogja",
    excerpt: "Program intensif belajar pemrograman selama 1 minggu penuh.",
    content: "",
    category: "kegiatan",
    author: "Tim GSE",
    date: "10 Januari 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
  },
  {
    id: "robotic-class-kids",
    title: "Kelas Robotika untuk Anak SD: Bermain sambil Belajar",
    excerpt:
      "Program belajar robotika dasar yang menyenangkan untuk anak usia 7-12 tahun.",
    content: "",
    category: "kegiatan",
    author: "Tim GSE",
    date: "5 Februari 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
  },
  {
    id: "webinar-digital-marketing",
    title: "Webinar Digital Marketing untuk UMKM Jogja",
    excerpt:
      "Pelatihan online tentang strategi pemasaran digital untuk pelaku UMKM.",
    content: "",
    category: "kegiatan",
    author: "Tim GSE",
    date: "20 Januari 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
  },
  {
    id: "company-visit-tech-startup",
    title: "Company Visit: Kunjungan ke Startup Teknologi Lokal",
    excerpt:
      "Siswa GSE mengunjungi startup teknologi untuk belajar langsung dari praktisi.",
    content: "",
    category: "kegiatan",
    author: "Tim GSE",
    date: "12 Februari 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },

  // ==================== TUTORIAL (8) ====================
  {
    id: "belajar-coding-pemula",
    title: "Tips Belajar Coding untuk Pemula yang Efektif",
    excerpt:
      "Panduan lengkap memulai belajar pemrograman dengan metode yang tepat dan menyenangkan.",
    content: "",
    category: "tutorial",
    author: "Tim GSE",
    date: "10 Desember 2025",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
  },
  {
    id: "tutorial-web-design",
    title: "Tutorial Web Design Modern untuk Pemula",
    excerpt: "Panduan lengkap membuat website modern dengan tools terbaru.",
    content: "",
    category: "tutorial",
    author: "Tim GSE",
    date: "5 Januari 2026",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    id: "flutter-mobile-app",
    title: "Membuat Aplikasi Mobile dengan Flutter",
    excerpt:
      "Step-by-step membuat aplikasi mobile cross-platform pertama Anda.",
    content: "",
    category: "tutorial",
    author: "Tim GSE",
    date: "20 Januari 2026",
    readTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: "database-mysql-dasar",
    title: "Belajar Database MySQL dari Dasar",
    excerpt:
      "Pengenalan database untuk pemula yang ingin memahami konsep penyimpanan data.",
    content: "",
    category: "tutorial",
    author: "Tim GSE",
    date: "28 Januari 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
  },
  {
    id: "api-restful-nodejs",
    title: "Membuat RESTful API dengan Node.js dan Express",
    excerpt:
      "Tutorial membuat API backend sederhana untuk aplikasi web atau mobile.",
    content: "",
    category: "tutorial",
    author: "Tim GSE",
    date: "15 Februari 2026",
    readTime: "11 min",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    id: "responsive-design-css",
    title: "Responsive Web Design dengan CSS Grid & Flexbox",
    excerpt: "Teknik membuat website yang responsive di berbagai ukuran layar.",
    content: "",
    category: "tutorial",
    author: "Tim GSE",
    date: "8 Februari 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=600&h=400&fit=crop",
  },
  {
    id: "git-github-pemula",
    title: "Tutorial Git & GitHub untuk Pemula",
    excerpt:
      "Belajar version control dan kolaborasi coding dengan Git dan GitHub.",
    content: "",
    category: "tutorial",
    author: "Tim GSE",
    date: "3 Maret 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: "python-data-analysis",
    title: "Analisis Data dengan Python dan Pandas",
    excerpt:
      "Panduan analisis data sederhana menggunakan library Pandas di Python.",
    content: "",
    category: "tutorial",
    author: "Tim GSE",
    date: "25 Februari 2026",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },

  // ==================== PRESTASI (5) ====================
  {
    id: "juara-robotika-nasional",
    title:
      "Dari Kelas Jadi Juara: Murid GSE Menang Kompetisi Robotika Nasional",
    excerpt:
      "Kisah inspiratif murid GSE Jogja yang berhasil meraih juara 1 dalam kompetisi robotika tingkat nasional.",
    content: "",
    category: "prestasi",
    author: "Tim GSE",
    date: "2 Februari 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
  },
  {
    id: "olimpiade-komputer-provinsi",
    title: "Siswa GSE Raih Medali Emas Olimpiade Komputer",
    excerpt:
      "Prestasi membanggakan siswa GSE dalam Olimpiade Komputer Tingkat Provinsi.",
    content: "",
    category: "prestasi",
    author: "Tim GSE",
    date: "15 Januari 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
  },
  {
    id: "hackathon-juara-1",
    title: "Tim GSE Juara 1 Hackathon Nasional 2025",
    excerpt:
      "Kemenangan spektakuler tim GSE dalam kompetisi hackathon tingkat nasional.",
    content: "",
    category: "prestasi",
    author: "Tim GSE",
    date: "10 November 2025",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop",
  },
  {
    id: "beasiswa-kuliah-jepang",
    title: "Alumni GSE Dapat Beasiswa Kuliah S2 di Jepang",
    excerpt:
      "Kesuksesan alumni GSE mendapatkan beasiswa penuh untuk studi di Jepang.",
    content: "",
    category: "prestasi",
    author: "Tim GSE",
    date: "5 Desember 2025",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
  },
  {
    id: "mobile-app-award",
    title: "Aplikasi Mobile Karya Siswa GSE Raih Penghargaan",
    excerpt:
      "Aplikasi mobile edukasi karya siswa GSE mendapatkan penghargaan inovasi.",
    content: "",
    category: "prestasi",
    author: "Tim GSE",
    date: "20 Februari 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },

  // ==================== EVENT (6) ====================
  {
    id: "event-apple-day",
    title: "Event Apple Day: Eksplorasi Teknologi Terbaru Apple",
    excerpt:
      "Serunya acara Apple Day di GSE Jogja dengan demo produk dan workshop eksklusif.",
    content: "",
    category: "event",
    author: "Tim GSE",
    date: "25 November 2025",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    id: "tech-talk-ai",
    title: "Tech Talk: Artificial Intelligence untuk Pendidikan",
    excerpt:
      "Diskusi seru tentang implementasi AI dalam dunia pendidikan modern.",
    content: "",
    category: "event",
    author: "Tim GSE",
    date: "5 Februari 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    id: "hackathon-mahasiswa",
    title: "Hackathon Mahasiswa 2025: Inovasi Digital untuk Pendidikan",
    excerpt:
      "Kompetisi hackathon yang diikuti oleh mahasiswa dari berbagai universitas.",
    content: "",
    category: "event",
    author: "Tim GSE",
    date: "20 Desember 2025",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "graduation-ceremony-2025",
    title: "Wisuda Angkatan 2025: Perjalanan Menuju Masa Depan Digital",
    excerpt:
      "Momen spesial wisuda siswa GSE angkatan 2025 dengan berbagai prestasi.",
    content: "",
    category: "event",
    author: "Tim GSE",
    date: "30 Juni 2025",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
  },
  {
    id: "open-house-gse-2025",
    title: "Open House GSE 2025: Kenalan dengan Teknologi Terbaru",
    excerpt:
      "Acara tahunan open house yang memamerkan berbagai teknologi terkini.",
    content: "",
    category: "event",
    author: "Tim GSE",
    date: "15 Agustus 2025",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
  },
  {
    id: "tech-career-fair",
    title: "Tech Career Fair 2026: Peluang Karir di Dunia Teknologi",
    excerpt:
      "Pameran karir khusus untuk industri teknologi dengan berbagai perusahaan ternama.",
    content: "",
    category: "event",
    author: "Tim GSE",
    date: "10 Maret 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
  },

  // ==================== EDUKASI (6) ====================
  {
    id: "kegiatan-positif-anak",
    title: "Kegiatan Positif Anak Sepulang Sekolah",
    excerpt:
      "Rekomendasi kegiatan produktif untuk anak-anak setelah jam sekolah berakhir.",
    content: "",
    category: "edukasi",
    author: "Tim GSE",
    date: "2 Januari 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  },
  {
    id: "coding-untuk-semua",
    title: "Coding untuk Semua: Inklusi Teknologi di Era Digital",
    excerpt:
      "Bagaimana GSE Jogja membuka akses pembelajaran coding untuk semua kalangan tanpa batas usia.",
    content: "",
    category: "edukasi",
    author: "Tim GSE",
    date: "30 Januari 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop",
  },
  {
    id: "parenting-digital-age",
    title: "Parenting di Era Digital: Bijak Memanfaatkan Teknologi",
    excerpt: "Tips untuk orang tua dalam mendampingi anak belajar teknologi.",
    content: "",
    category: "edukasi",
    author: "Tim GSE",
    date: "12 Februari 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop",
  },
  {
    id: "edukasi-stem-anak",
    title: "Pentingnya Pendidikan STEM untuk Anak Usia Dini",
    excerpt:
      "Mengenalkan sains, teknologi, engineering, dan matematika sejak dini.",
    content: "",
    category: "edukasi",
    author: "Tim GSE",
    date: "8 Februari 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  },
  {
    id: "cyber-safety-anak",
    title: "Keamanan Digital untuk Anak: Panduan Orang Tua",
    excerpt:
      "Cara melindungi anak dari risiko dunia digital dan mengajarkan cyber safety.",
    content: "",
    category: "edukasi",
    author: "Tim GSE",
    date: "25 Februari 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "teknologi-pendidikan-khusus",
    title: "Teknologi untuk Pendidikan Anak Berkebutuhan Khusus",
    excerpt: "Pemanfaatan teknologi dalam mendukung pembelajaran inklusif.",
    content: "",
    category: "edukasi",
    author: "Tim GSE",
    date: "18 Maret 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
  },

  // ==================== STORY (5) ====================
  {
    id: "story-perjalanan-gse",
    title: "Perjalanan GSE Jogja: Dari Garage Startup ke Pusat Teknologi",
    excerpt:
      "Cerita perjalanan GSE Jogja dari awal berdiri hingga menjadi pusat teknologi terpercaya.",
    content: "",
    category: "story",
    author: "Tim GSE",
    date: "20 Januari 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: "alumni-sukses-tech",
    title: "Kisah Alumni GSE yang Sukses di Dunia Teknologi",
    excerpt:
      "Inspirasi dari alumni yang telah berkarir di perusahaan teknologi ternama.",
    content: "",
    category: "story",
    author: "Tim GSE",
    date: "25 Januari 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
  },
  {
    id: "komunitas-tech-jogja",
    title: "Membangun Komunitas Teknologi yang Inklusif di Jogja",
    excerpt:
      "Pengalaman membangun dan mengembangkan komunitas teknologi di Yogyakarta.",
    content: "",
    category: "story",
    author: "Tim GSE",
    date: "3 Februari 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
  },
  {
    id: "siswa-autodidak-jadi-mentor",
    title: "Dari Siswa Autodidak Jadi Mentor: Kisah Transformasi",
    excerpt:
      "Perjalanan seorang siswa GSE yang belajar otodidak hingga menjadi mentor untuk siswa lain.",
    content: "",
    category: "story",
    author: "Tim GSE",
    date: "14 Februari 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: "kolaborasi-guru-siswa-tech",
    title: "Kolaborasi Guru dan Siswa dalam Inovasi Teknologi",
    excerpt:
      "Cerita tentang kerja sama yang menghasilkan proyek teknologi inovatif.",
    content: "",
    category: "story",
    author: "Tim GSE",
    date: "28 Februari 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
];

// Helper functions
export const getPostsByCategory = (category: string) => {
  if (category === "all") return BLOG_POSTS;
  return BLOG_POSTS.filter((post) => post.category === category);
};

export const getCategoriesWithCount = () => {
  const categories = [
    { id: "kegiatan", name: "Kegiatan", count: 0 },
    { id: "tutorial", name: "Tutorial", count: 0 },
    { id: "prestasi", name: "Prestasi", count: 0 },
    { id: "event", name: "Event", count: 0 },
    { id: "edukasi", name: "Edukasi", count: 0 },
    { id: "story", name: "Story", count: 0 },
  ];

  categories.forEach((cat) => {
    cat.count = BLOG_POSTS.filter((post) => post.category === cat.id).length;
  });

  return categories;
};
