// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#0488d2",
          green: "#01d183",
          navy: "#06112d",
          "blue-light": "#e8f4fd",
          "green-light": "#e8fcf5",
        },
      },
      backgroundImage: {
        "gradient-blue-green":
          "linear-gradient(90deg, #0488d2 0%, #01d183 100%)",
        "gradient-gse": "linear-gradient(135deg, #0488d2 0%, #01d183 100%)",
        // TAMBAH GRADIENT SOFT UNTUK HERO
        "gradient-hero":
          "linear-gradient(135deg, rgba(4, 136, 210, 0.08) 0%, rgba(1, 209, 131, 0.08) 100%)",
        "gradient-hero-strong":
          "linear-gradient(135deg, rgba(4, 136, 210, 0.15) 0%, rgba(1, 209, 131, 0.15) 100%)",
      },
      backgroundColor: {
        "hero-light": "rgba(248, 250, 252, 0.95)",
      },
    },
  },
  plugins: [],
};

export default config;
