import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

import cyberpunkCity from '../assets/cyberpunk.png';

gsap.registerPlugin(ScrollTrigger);

const obsoleteTech = [
  "High Latency Rendering",
  "Plugin Dependencies",
  "Low Resolution Textures",
  "Static Interfaces"
];

const nexusTech = [
  "Zero-Latency Neural Link",
  "Native WebGL 2.0 Core",
  "8K Hyper-Reality",
  "Adaptive AI Environment"
];

const Mission = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    if (!containerRef.current) return;
    const start = isMobile ? "top 15%" : "top top";
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: start,
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onLeave: () => ScrollTrigger.refresh(),
      }
    });
    tl.to(".will-fade", { opacity: 0, scale: 0.9, duration: 0.5 });
    
    tl.to(".masked-visual", { 
      clipPath: "circle(200% at 50% 50%)", 
      scale: 1, 
      duration: 1.5,
      ease: "power2.inOut"
    }, "-=0.3");
    tl.to("#masked-content", { 
      opacity: 1, 
      y: 0, 
      duration: 1
    }, "-=0.5");
  }, { scope: containerRef });

  return (
    <section id="mission" ref={containerRef} className="relative w-full h-screen bg-transparent overflow-hidden flex flex-col justify-center items-center z-0">
      
      {/* İLK İÇERİK */}
      <div className="will-fade absolute inset-0 w-full h-full container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10 pointer-events-none">
        
        <div className="hidden md:flex flex-col gap-4 text-right items-end w-1/3">
          <h3 className="text-gray-500 font-tech text-xl mb-4">LEGACY_SYSTEMS</h3>
          {obsoleteTech.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-600 font-mono text-sm">
              <span>{item}</span>
              <X className="w-4 h-4 text-red-900" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Badge variant="outline" className="border-primary/50 text-primary mb-4">THE MISSION</Badge>
          <h2 className="text-5xl md:text-7xl font-tech font-bold text-white">
            BRIDGE THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#b92bca]">GAP</span>
          </h2>
        </div>

        <div className="hidden md:flex flex-col gap-4 text-left items-start w-1/3">
          <h3 className="text-primary font-tech text-xl mb-4">NEXUS_PROTOCOL</h3>
          {nexusTech.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-white font-mono text-sm">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-shadow-neon">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MASKE ALANI */}
      <div 
        className="masked-visual absolute z-0 w-full h-full flex items-center justify-center bg-black"
        style={{ clipPath: "circle(10% at 50% 50%)", transform: "scale(1.2)" }}
      >
        <div className="relative w-full h-full">
            <img src={cyberpunkCity} className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-[50px] animate-pulse"></div>
      </div>

      {/* SON İÇERİK */}
      <div id="masked-content" className="absolute z-20 text-center opacity-0 translate-y-10 px-4">
        <h2 className="text-5xl md:text-8xl font-tech font-bold text-white mb-6 drop-shadow-[0_0_30px_rgba(0,243,255,0.3)]">
          THE SINGULARITY
        </h2>
      </div>
    </section>
  );
};

export default Mission;