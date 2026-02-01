// prisma/seed.ts - SIMPLE VERSION
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

// Simple PrismaClient tanpa config
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  try {
    // 1. Seed Admin User
    const hashedPassword = await bcrypt.hash("gacorgsejogja2026$", 12);

    const admin = await prisma.user.upsert({
      where: { email: "admin2026@gsejogja.com" },
      update: {},
      create: {
        email: "admin2026@gsejogja.com",
        passwordHash: hashedPassword,
        name: "Admin GSE",
        role: "admin",
      },
    });
    console.log("✅ Admin user created:", admin.email);

    // 2. Seed Blog Categories
    const categories = [
      {
        name: "Coding",
        slug: "coding",
        description: "Tutorial programming Python, Scratch, dll",
      },
      {
        name: "Apple Tips",
        slug: "apple-tips",
        description: "Tips & trik produk Apple",
      },
      {
        name: "Edukasi",
        slug: "edukasi",
        description: "Artikel edukasi teknologi",
      },
      {
        name: "Technology",
        slug: "technology",
        description: "Update teknologi terbaru",
      },
      {
        name: "Product Updates",
        slug: "product-updates",
        description: "Info produk & layanan GSE",
      },
    ];

    for (const category of categories) {
      const created = await prisma.blogCategory.upsert({
        where: { slug: category.slug },
        update: {},
        create: category,
      });
      console.log(`✅ Category created: ${created.name}`);
    }

    console.log("🎉 Seeding completed!");
  } catch (error) {
    console.error("❌ Seeding error:", error);
    throw error;
  }
}

// Run seed
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seeding failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
