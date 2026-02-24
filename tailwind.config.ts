import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': "#000000",
        'background-light': "#f9f7f1",
        'background-dark': "#1a1a1a",
      },
      fontFamily: {
        "display": ["'Patrick Hand'", "cursive"]
      },
    },
  },
  plugins: [],
} satisfies Config;
