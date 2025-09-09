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
    },
  },
  plugins: [],
};

export default config;
