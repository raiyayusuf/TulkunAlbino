export const blogCategories = [
  { id: 'all', name: 'Tampilkan Semua', slug: 'all' },
  { id: 'kegiatan', name: 'Kegiatan', slug: 'kegiatan' },
  { id: 'tutorial', name: 'Tutorial', slug: 'tutorial' },
  { id: 'prestasi', name: 'Prestasi', slug: 'prestasi' },
  { id: 'event', name: 'Event', slug: 'event' },
  { id: 'edukasi', name: 'Edukasi', slug: 'edukasi' },
  { id: 'story', name: 'Story', slug: 'story' },
] as const;

export type BlogCategory = typeof blogCategories[number];