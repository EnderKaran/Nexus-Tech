import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Images
import neuralLink from '../assets/neural-link.png';
import cyberoptics from '../assets/cyber-optics.png';
import biosyntheics from '../assets/bio-synthetics.png';
import datacore from '../assets/data-core.png';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    id: 1,
    title: "NEURAL LINK",
    desc: "Direct brain-to-machine interface v2.0",
    img: neuralLink,
    col: "md:col-span-2", 
  },
  {
    id: 2,
    title: "CYBER OPTICS",
    desc: "Enhanced night vision modules.",
    img: cyberoptics,
    col: "md:col-span-1", 
  },
  {
    id: 3,
    title: "BIO-SYNTHETICS",
    desc: "Self-healing armor plating.",
    img: biosyntheics,
    col: "md:col-span-1", 
  },
  {
    id: 4,
    title: "DATA CORE",
    desc: "Quantum processing units.",
    img: datacore,
    col: "md:col-span-2", 
  },
];

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray(".feature-card");

    gsap.fromTo(cards, 
      { 
        y: 60, 
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.15, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", 
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="modules" 
      className="relative w-full py-24 bg-[#050505] px-4 md:px-10 overflow-hidden"
    >
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f3ff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end pb-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-[#b92bca] text-[#b92bca] shadow-[0_0_10px_rgba(185,43,202,0.3)] tracking-[0.2em] animate-pulse">
              SYSTEM_MODULES
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-tech font-bold text-white">
              SYSTEM <span className="text-[#00f3ff] drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">UPGRADES</span>
            </h2>
            <p className="text-gray-400 max-w-md font-sans">
              Upgrade your reality with our latest cybernetic enhancements.
              Compatible with Nexus OS v4.2.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0 text-right">
            <div className="text-5xl font-tech text-[#00f3ff] font-bold">99.9%</div>
            <div className="text-gray-500 text-xs tracking-widest uppercase mt-2">Uptime Guarantee</div>
          </div>
        </div>
        
        <Separator className="bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuresData.map((item) => (
          <Card 
            key={item.id} 
            className={`feature-card group relative ${item.col} h-[300px] md:h-[400px] 
            bg-black/60 overflow-hidden rounded-3xl backdrop-blur-sm
            border border-white/10 
            hover:border-[#00f3ff]/60 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] 
            transition-all duration-500 ease-out`}
          >
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>

            <CardContent className="absolute inset-0 p-8 flex flex-col justify-end">
              
              <div className="absolute top-6 right-6">
                <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border border-white/20 text-white 
                group-hover:border-[#00f3ff] group-hover:text-[#00f3ff] group-hover:shadow-[0_0_10px_#00f3ff]
                transition-all duration-300 font-mono">
                  0{item.id}
                </Badge>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-tech font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-sans text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {item.desc}
                </p>
                
                <div className="w-0 group-hover:w-full h-0.5 bg-[#00f3ff] mt-4 shadow-[0_0_10px_#00f3ff] transition-all duration-500"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    </section>
  );
};

export default Features;