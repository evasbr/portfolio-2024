import type { Config } from "tailwindcss";
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        sans: ["var(--font-outfit)", "sans-serif"], // for paragraphs, UI
        serif: ['"var(--font-dm-serif)"', "serif"], // for headings
      },
      colors: {
        foreground: "rgba(var(--foreground))",
        background: "rgba(var(--background))",
        bforeground: "rgba(var(--button-foreground))",
      },
    },
  },
  plugins: [],
} satisfies Config;
