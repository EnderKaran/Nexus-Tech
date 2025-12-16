'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, Zap, Cpu, Activity } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import motherboardImg from '../assets/motherboard.png';
import robotarm from '../assets/robotarm.png';
import roboteye from '../assets/robot-eye.png';

// --- MOCK DATA (Sistem Kataloğu) ---
const systemsData = [
  {
    id: "SYS-01",
    name: "CORTEX-V",
    type: "Neural Processor",
    desc: "The world's first liquid-cooled brain implant. Increases reaction time by 400% and allows direct interfacing with local networks.",
    stats: { power: "98%", stability: "99%", heat: "Low" },
    icon: <Cpu className="w-6 h-6" />,
    image: motherboardImg // Anakart/Motherboard görseli
  },
  {
    id: "SYS-02",
    name: "MANTIS-X",
    type: "Offensive Arm",
    desc: "Titanium alloy mantis blades with thermal edging. Cuts through reinforced steel like butter. Requires Class-A Cyber-License.",
    stats: { power: "100%", stability: "85%", heat: "High" },
    icon: <Zap className="w-6 h-6" />,
    image: robotarm // Robotik Kol görseli
  },
  
  {
    id: "SYS-03",
    name: "OCULUS-R",
    type: "Optical Unit",
    desc: "Full spectrum vision spanning infrared to ultraviolet. Includes real-time threat analysis and biometric scanning.",
    stats: { power: "45%", stability: "98%", heat: "Low" },
    icon: <Activity className="w-6 h-6" />,
    image: roboteye // Robotik Göz görseli
  }
];

const SystemPreview = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- GSAP ANIMASYONLARI ---
  useGSAP(() => {
    // 1. Başlık Animasyonu (Her değişimde)
    gsap.fromTo('#sys-title', 
      { opacity: 0, x: -50, filter: "blur(10px)" }, 
      { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
    );

    // 2. Görsel Animasyonu (Hologram efekti: scale + opacity)
    gsap.fromTo('.holo-img', 
      { opacity: 0, scale: 1.1, filter: "grayscale(100%)" }, 
      { opacity: 1, scale: 1, filter: "grayscale(0%)", duration: 1, ease: "power2.inOut" }
    );

    // 3. Detaylar (Alttan yukarı)
    gsap.fromTo('.sys-details', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" }
    );

    // 4. İstatistik Barları (Genişleme)
    gsap.fromTo('.stat-fill',
        { width: 0 },
        { width: "100%", duration: 1, ease: "power2.out", delay: 0.2 }
    );

  }, { scope: containerRef, dependencies: [currentIndex] }); // currentIndex değişince tekrar çalışır

  // --- NAVİGASYON MANTIĞI ---
  const totalSystems = systemsData.length;

  const goToSlide = (index: number) => {
    // Döngüsel mantık (modülo)
    const newIndex = (index + totalSystems) % totalSystems;
    setCurrentIndex(newIndex);
  };

  const getSystemAt = (offset: number) => {
    return systemsData[(currentIndex + offset + totalSystems) % totalSystems];
  };

  const currentSystem = getSystemAt(0);
  const prevSystem = getSystemAt(-1);
  const nextSystem = getSystemAt(1);

  return (
    <section 
      ref={containerRef} 
      id="system-preview" 
      className="relative z-10 w-full min-h-screen bg-[#050505] py-24 px-4 flex flex-col items-center justify-center overflow-hidden"
    >
      
      {/* Dekoratif Arka Plan */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      {/* --- ÜST SEKMELER (TABS) --- */}
      <nav className="flex flex-wrap justify-center gap-4 mb-12 relative z-20">
        {systemsData.map((sys, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={sys.id}
              onClick={() => goToSlide(index)}
              className={`
                relative px-6 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 border
                ${isActive 
                  ? 'text-[#050505] bg-[#00f3ff] border-[#00f3ff] shadow-[0_0_15px_#00f3ff] font-bold' 
                  : 'text-gray-500 border-white/10 hover:border-[#00f3ff] hover:text-[#00f3ff] bg-transparent'}
              `}
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }} // Cyber buton şekli
            >
              {sys.name}
            </button>
          );
        })}
      </nav>

      {/* --- ANA İÇERİK --- */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* SOL: Navigasyon Butonları & Bilgi */}
        <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col gap-6">
            {/* Önceki */}
            <button 
                onClick={() => goToSlide(currentIndex - 1)}
                className="group flex flex-col items-start gap-2 text-left hover:bg-white/5 p-4 rounded-lg transition-colors border-l-2 border-transparent hover:border-[#b92bca]"
            >
                <div className="flex items-center gap-2 text-gray-500 group-hover:text-[#b92bca]">
                    <ChevronLeft className="w-4 h-4" />
                    <span className="text-xs font-mono">PREV_MODULE</span>
                </div>
                <span className="font-tech text-xl text-white group-hover:translate-x-2 transition-transform">{prevSystem.name}</span>
            </button>

            {/* Sonraki */}
            <button 
                onClick={() => goToSlide(currentIndex + 1)}
                className="group flex flex-col items-end gap-2 text-right hover:bg-white/5 p-4 rounded-lg transition-colors border-r-2 border-transparent hover:border-[#00f3ff]"
            >
                <div className="flex items-center gap-2 text-gray-500 group-hover:text-[#00f3ff]">
                    <span className="text-xs font-mono">NEXT_MODULE</span>
                    <ChevronRight className="w-4 h-4" />
                </div>
                <span className="font-tech text-xl text-white group-hover:-translate-x-2 transition-transform">{nextSystem.name}</span>
            </button>
        </div>

        {/* ORTA: Hologram Görseli */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative h-[400px] lg:h-[500px] border border-white/10 bg-black/50 rounded-2xl overflow-hidden group">
            {/* Köşe Süsleri */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#00f3ff]"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#00f3ff]"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#00f3ff]"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#00f3ff]"></div>

            <img 
                src={currentSystem.image} 
                alt={currentSystem.name}
                className="holo-img w-full h-full object-cover opacity-80" 
            />
            {/* Hologram Tarama Çizgisi */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,243,255,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan pointer-events-none mix-blend-screen"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
        </div>

        {/* SAĞ: Detaylar */}
        <div className="lg:col-span-4 order-3 flex flex-col justify-center h-full">
            <div className="sys-details space-y-6">
                
                {/* ID & ICON */}
                <div className="flex items-center gap-4 text-[#00f3ff]">
                    <div className="p-3 bg-[#00f3ff]/10 rounded-full border border-[#00f3ff]/30">
                        {currentSystem.icon}
                    </div>
                    <span className="font-mono text-sm tracking-widest">{currentSystem.id}</span>
                </div>

                {/* Başlık */}
                <div>
                    <h3 id="sys-title" className="text-5xl md:text-6xl font-tech font-bold text-white mb-2 leading-none">
                        {currentSystem.name}
                    </h3>
                    <Badge variant="outline" className="border-[#b92bca] text-[#b92bca] font-mono tracking-wider">
                        {currentSystem.type}
                    </Badge>
                </div>

                {/* Açıklama */}
                <p className="text-gray-400 font-sans leading-relaxed border-l-2 border-white/10 pl-4">
                    {currentSystem.desc}
                </p>

                {/* İstatistikler */}
                <div className="space-y-4 pt-4">
                    {Object.entries(currentSystem.stats).map(([key, value]) => (
                        <div key={key} className="group">
                            <div className="flex justify-between text-xs font-mono text-gray-500 mb-1 uppercase">
                                <span>{key}</span>
                                <span className="text-white">{value}</span>
                            </div>
                            <div className="w-full h-1 bg-gray-800 overflow-hidden">
                                <div className="stat-fill h-full bg-gradient-to-r from-[#00f3ff] to-[#b92bca]"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <Button className="w-full bg-[#00f3ff] text-black font-tech font-bold hover:bg-white transition-colors mt-4">
                    REQUEST ACCESS
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SystemPreview;