/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          neon: "#00f3ff",  // Siber mavi
          dark: "#050505",  // Derin siyah
          glass: "rgba(255, 255, 255, 0.1)", // Cam efekti için
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          tech: ['Orbitron', 'sans-serif'], // Başlıklar için fütüristik font
        }
      },
    },
    plugins: [],
  }