/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6E6E73", 
          DEFAULT: "#D9D9D9", 
        },
        secondary: {
          100: "#FCFCFC",
          200: "#F8FAFC",
          300: "#FFFFFF",
        },
        textColor: {
          light: "#1D1D1F", 
          dark: "#D9D9D9", 
        },
      },
      fontFamily: {
        body: ["SF Pro Display", "Arial", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
