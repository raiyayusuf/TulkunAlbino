// types/admin.ts
export type AdminUser = {
  id: string;
  email: string;
  name: string;
  role: "super_admin" | "admin" | "moderator";
  permissions: string[];
  lastLogin?: Date;
  createdAt: Date;
};

export type AdminActivity = {
  id: string;
  userId: string;
  action: string;
  target: string;
  details?: Record<string, any>;
  timestamp: Date;
  ipAddress?: string;
};

export type AdminStats = {
  totalUsers: number;
  activeCourses: number;
  pendingOrders: number;
  monthlyRevenue: number;
  blogPosts: number;
  supportTickets: number;
};
