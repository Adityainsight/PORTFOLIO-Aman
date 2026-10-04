import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f4f0e6",
        black: "#111111",
        primary: "#e85d53", // red/coral
        secondary: "#6eb5c0", // light blue
        accent: "#f5d47a", // warm yellow
        pink: "#f3b3b8", // soft pink
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Impact", "sans-serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px rgba(17,17,17,1)",
        "brutal-sm": "2px 2px 0px 0px rgba(17,17,17,1)",
        "brutal-hover": "6px 6px 0px 0px rgba(17,17,17,1)",
      },
    },
  },
} satisfies Config;
