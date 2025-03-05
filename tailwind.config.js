/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D9D9D9',
        secondary: {
          100: '#FCFCFC',
          200: '#F8FAFC',
          300: '#FFFFFF'
        }
      },
      fontFamily: {
        body: ['SF Pro Display', 'Arial', 'sans-serif'],
         noto: ["Noto Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

