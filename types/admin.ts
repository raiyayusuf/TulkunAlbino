/* ============================================
   types/admin.ts
   ============================================ */

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

/* ============================================
   NEW TYPES ADDED FOR ENHANCED ADMIN FEATURES
   ============================================ */

export type AdminSettings = {
  siteTitle: string;
  siteDescription: string;
  maintenanceMode: boolean;
  registrationEnabled: boolean;
  defaultUserRole: "student" | "teacher" | "parent";
  emailNotifications: {
    newUser: boolean;
    newOrder: boolean;
    newComment: boolean;
    systemAlerts: boolean;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  updatedAt: Date;
};

export type AdminReport = {
  id: string;
  title: string;
  type: "users" | "sales" | "courses" | "traffic" | "custom";
  period: "daily" | "weekly" | "monthly" | "yearly";
  data: Record<string, any>;
  generatedAt: Date;
  generatedBy: string;
};

export type AdminNotification = {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "error" | "success";
  read: boolean;
  priority: "low" | "medium" | "high" | "urgent";
  createdAt: Date;
  action?: {
    label: string;
    url: string;
  };
};

export type AdminDashboardWidget = {
  id: string;
  title: string;
  type: "chart" | "stats" | "list" | "calendar";
  position: {
    row: number;
    col: number;
    width: number;
    height: number;
  };
  config: Record<string, any>;
  visible: boolean;
};