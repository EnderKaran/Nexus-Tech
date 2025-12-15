import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Ekranın %80'ine gelince başla
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    // Başlık Animasyonu
    tl.from(".about-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Kart Animasyonu
    tl.from(".cyber-card", {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    }, "-=0.5");

    // İlerleme Çubukları Animasyonu
    tl.from(".progress-bar", {
      width: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5");

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="relative w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center border-t border-neon/10 overflow-hidden"
    >
      
      {/* 1. GELİŞMİŞ ARKA PLAN */}
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      
      {/* Hareketli Tarama Çizgisi (Scanner Line) */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(transparent_0%,rgba(0,243,255,0.05)_50%,transparent_100%)] z-0 animate-scan pointer-events-none"></div>

      {/* Dekoratif Yanıp Sönen Işıklar */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#00f3ff]"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red] delay-75"></div>

      {/* ANA İÇERİK KUTUSU (Cyber Card) */}
      <div className="cyber-card relative z-10 max-w-5xl w-full mx-4 p-8 md:p-12 border border-white/10 bg-black/40 backdrop-blur-md rounded-xl overflow-hidden group">
        
        {/* Köşe Süslemeleri (Corner Brackets) */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon opacity-50 group-hover:opacity-100 transition-opacity"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* SOL TARA: Metin */}
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-neon animate-ping"></span>
              <span className="font-mono text-xs text-neon tracking-widest">SYSTEM_DIAGNOSTIC</span>
            </div>
            
            <h2 className="about-title text-4xl md:text-5xl font-tech font-bold text-white mb-6 leading-tight">
              REDEFINING <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-neon to-cyber">DIGITAL REALITY</span>
            </h2>
            
            <p className="about-title text-gray-400 text-base leading-relaxed font-sans mb-6 border-l-2 border-white/10 pl-4">
              Nexus.Tech is not just a platform; it's a quantum leap in web rendering. 
              We utilize <span className="text-white">WebGL 2.0</span> and <span className="text-white">Neural Processing</span> to deliver 
              cinema-grade 3D experiences directly in your browser. No plugins. No latency.
            </p>

            <button className="about-title px-6 py-3 border border-neon/30 hover:bg-neon/10 text-neon font-mono text-sm tracking-widest transition-all duration-300 group">
              [ INITIALIZE_MODULE ]
            </button>
          </div>

          {/* SAĞ TARAF: Teknik Stats (Statik Görselleştirme) */}
          <div className="relative p-6 bg-white/5 rounded-lg border border-white/5 font-mono text-xs">
            {/* Dekoratif Başlık */}
            <div className="flex justify-between text-gray-500 mb-6 border-b border-white/10 pb-2">
              <span>CPU_LOAD</span>
              <span>OPTIMIZED</span>
            </div>

            {/* Stat Barları */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>RENDER_SPEED</span>
                  <span className="text-neon">98%</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="progress-bar w-[98%] h-full bg-neon shadow-[0_0_10px_#00f3ff]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>LATENCY</span>
                  <span className="text-neon">12ms</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="progress-bar w-[15%] h-full bg-purple-500 shadow-[0_0_10px_purple]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>IMMERSION</span>
                  <span className="text-neon">MAX</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="progress-bar w-full h-full bg-linear-to-r from-neon to-purple-500"></div>
                </div>
              </div>
            </div>

            {/* Alt Bilgi */}
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-between text-gray-600">
              <p>ID: #8492-X</p>
              <p className="animate-pulse">STATUS: ONLINE</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;