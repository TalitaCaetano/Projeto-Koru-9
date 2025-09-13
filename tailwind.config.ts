import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f8ff",
          100: "#e8f0ff",
          200: "#cfe0ff",
          300: "#a7c5ff",
          400: "#6c9cff",
          500: "#3a74ff",
          600: "#1d55f2",
          700: "#183fd0",
          800: "#1836a1",
          900: "#1a327f",
        },
      },
      keyframes: {
        "animate-bubble": {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
            borderRadius: "0",
          },
          "100%": {
            transform: "translateY(-1000px) rotate(720deg)",
            opacity: "0",
            borderRadius: "50%",
          },
        },
      },
      animation: {
        "animate-bubble": "animate-bubble 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
