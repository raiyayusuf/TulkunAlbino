export interface BlogCategory {
  id: string;
  name: string;
  color: string;
  bgColor: string;
}

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

export const getCategoryById = (id: string) => {
  return CATEGORIES.find((cat) => cat.id === id);
};
