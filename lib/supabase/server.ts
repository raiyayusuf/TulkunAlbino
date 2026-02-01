// lib/supabase/server.ts - FIXED VERSION
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = () => {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          const cookie = await cookieStore;
          return cookie.get(name)?.value;
        },
        async set(name: string, value: string, options: CookieOptions) {
          try {
            const cookie = await cookieStore;
            cookie.set(name, value, options);
          } catch (error) {
            // Handle error
          }
        },
        async remove(name: string, options: CookieOptions) {
          try {
            const cookie = await cookieStore;
            cookie.set(name, "", { ...options, maxAge: 0 });
          } catch (error) {
            // Handle error
          }
        },
      },
    },
  );
};
