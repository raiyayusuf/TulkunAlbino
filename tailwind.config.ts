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
        },
      },
      backgroundImage: {
        "gradient-blue-green":
          "linear-gradient(90deg, #0488d2 0%, #01d183 100%)",
        "gradient-gse": "linear-gradient(135deg, #0488d2 0%, #01d183 100%)", // tambah ini
      },
    },
  },
  plugins: [],
};

export default config;
