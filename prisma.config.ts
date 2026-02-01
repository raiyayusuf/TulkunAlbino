// prisma.config.ts - UPDATED FOR SSL
import "dotenv/config";
import { readFileSync } from "fs";
import { join } from "path";

export default {
  schema: "prisma/schema.prisma",
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // Optional: SSL configuration untuk Prisma Client
  ssl: {
    ca: readFileSync(join(process.cwd(), "supabase.crt")).toString(),
    rejectUnauthorized: true,
  },
};
