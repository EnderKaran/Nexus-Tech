/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00f3ff",  // Mavi/Cyan
        cyber: "#f2cb05", // Sarı/Cyberpunk 2077
      },
      fontFamily: {
        tech: ["Orbitron", "sans-serif"], // Google Fonts'tan Orbitron eklemelisin
        mono: ["Share Tech Mono", "monospace"], // Google Fonts'tan Share Tech Mono
      },
      animation: {
        scan: "scan 4s linear infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
}