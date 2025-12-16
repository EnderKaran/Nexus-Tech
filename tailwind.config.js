/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // shadcn için gerekli (karanlık mod desteği)
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // --- SHADCN STANDARD RENKLERİ (index.css'teki değişkenlere bağlanır) ---
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))", // Senin Neon Mavisi (#00f3ff) buraya bağlandı
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Senin Cyber Sarısı (#f2cb05) buraya bağlandı
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // --- SENİN ÖZEL RENKLERİN (Eski kodların bozulmaması için) ---
        neon: "#00f3ff",  
        cyber: "#f2cb05", 
        "retro-purple": "#b92bca", // Text Selection rengi
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        tech: ["Orbitron", "sans-serif"], 
        mono: ["Share Tech Mono", "monospace"],
        sans: ["Inter", "sans-serif"], // Shadcn varsayılanı için iyi bir yedek
      },
      // --- ANİMASYONLAR ---
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // Shadcn için
        "accordion-up": "accordion-up 0.2s ease-out",     // Shadcn için
        scan: "scan 4s linear infinite",                  // Senin Scanner çizgin
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  // Shadcn animasyonları için gerekli eklenti
  plugins: [require("tailwindcss-animate")],
}