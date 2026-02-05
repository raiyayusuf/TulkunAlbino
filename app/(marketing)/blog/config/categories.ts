/* ============================================
   app/(marketing)/blog/config/categories.ts
   BLOG CATEGORIES CONFIGURATION - GSE JOGJA
   ============================================ */

/* ============================================
   CATEGORY INTERFACE
   ============================================ */
export interface BlogCategory {
  id: string;
  name: string;
  color: string;
  bgColor: string;
}

/* ============================================
   CATEGORIES DATA
   ============================================ */
export const CATEGORIES: BlogCategory[] = [
  {
    id: "kegiatan",
    name: "Kegiatan",
    color: "text-blue-700",
    bgColor: "bg-blue-100",
  },
  {
    id: "tutorial",
    name: "Tutorial",
    color: "text-purple-700",
    bgColor: "bg-purple-100",
  },
  {
    id: "prestasi",
    name: "Prestasi",
    color: "text-yellow-700",
    bgColor: "bg-yellow-100",
  },
  {
    id: "event",
    name: "Event",
    color: "text-red-700",
    bgColor: "bg-red-100",
  },
  {
    id: "edukasi",
    name: "Edukasi",
    color: "text-green-700",
    bgColor: "bg-green-100",
  },
  {
    id: "story",
    name: "Story",
    color: "text-orange-700",
    bgColor: "bg-orange-100",
  },
];

/* ============================================
   HELPER FUNCTIONS
   ============================================ */

/**
 * Get category by ID
 */
export const getCategoryById = (id: string): BlogCategory | undefined => {
  return CATEGORIES.find((cat) => cat.id === id);
};

/**
 * Get all category IDs
 */
export const getAllCategoryIds = (): string[] => {
  return CATEGORIES.map((cat) => cat.id);
};