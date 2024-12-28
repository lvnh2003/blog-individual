import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'header': "#FAF3A0"
      },
      backgroundImage: {
        'backgroundmain': "url('/assets/images/bg.jpg')",
      },
      fontFamily:{
        'display': ['Oswald', 'system-ui'],
        'body': ['"Open Sans"', 'system-ui'],
      }
    },
  },
  plugins: [],
} satisfies Config;
