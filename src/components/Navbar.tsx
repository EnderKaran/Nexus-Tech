import { useState, useEffect } from "react";
import HackerText from './HackerText';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SYSTEM", href: "#system" },
    { name: "MISSION", href: "#mission" },
    { name: "MODULES", href: "#modules" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        
        {/* --- SOL: LOGO & STATUS --- */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="flex gap-0.5 h-4 items-end">
            <span className="w-0.5 bg-cyber h-full animate-[pulse_0.5s_infinite]"></span>
            <span className="w-0.5 bg-cyber h-1/2 animate-[pulse_0.7s_infinite]"></span>
            <span className="w-0.5 bg-cyber h-3/4 animate-[pulse_0.6s_infinite]"></span>
          </div>

          <div className="font-tech text-2xl tracking-tighter text-white">
            NEXUS
            <span className="text-cyber drop-shadow-[0_0_10px_rgba(242,203,5,0.8)] group-hover:text-white transition-colors">
              .OS
            </span>
          </div>
        </div>

        <ul className="hidden md:flex gap-10 font-mono text-xs tracking-[0.2em] text-gray-400">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a href={link.href} className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                {/* Sol Bracket */}
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyber">
                  [
                </span>
                
                <HackerText text={link.name} />
                
                {/* Sağ Bracket */}
                <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyber">
                  ]
                </span>
              </a>
              {/* Alt Çizgi Glitch */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyber group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button 
            className="relative px-6 py-2 bg-transparent text-cyber font-tech text-xs tracking-widest border border-cyber/30 hover:bg-cyber hover:text-black transition-all duration-300 group"
            style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
          >
            {/* Buton içindeki dekoratif çizgiler */}
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber opacity-50 group-hover:border-black"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber opacity-50 group-hover:border-black"></span>
            
            LOGIN_INIT
          </button>

          <div className="md:hidden flex flex-col gap-1.5 cursor-pointer group">
            <span className="w-8 h-0.5 bg-white group-hover:bg-cyber transition-colors"></span>
            <span className="w-5 h-0.5 bg-white group-hover:bg-cyber group-hover:w-8 transition-all duration-300 ml-auto"></span>
            <span className="w-8 h-0.5 bg-white group-hover:bg-cyber transition-colors"></span>
          </div>
        </div>

      </div>
      
      {/* Navbar Altı Dekoratif Çizgi (Sadece scroll olunca veya her zaman) */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyber/20 to-transparent"></div>
    </nav>
  );
};

export default Navbar;