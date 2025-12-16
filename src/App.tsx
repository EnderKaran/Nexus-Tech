
// Bileşenler
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";

import CustomCursor from "./components/CustomCursor";

function App() {
  
  // Fontları yüklemek için index.html'e Google Fonts linki eklemeyi unutma!
  // <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">

  return (
    <div className="bg-[#050505] min-h-screen text-white cursor-none selection:bg-neon selection:text-black">
      
      {/* 1. Global Efektler */}
      <CustomCursor />
      
      {/* CRT Scanline Overlay (Tüm site üstünde ince çizgi efekti) */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      
      {/* Vignette (Köşeler karartma) */}
      <div className="fixed inset-0 pointer-events-none z-[100] bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>

      {/* 2. İçerik */}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Features />
      </main>

    </div>
  );
}

export default App;