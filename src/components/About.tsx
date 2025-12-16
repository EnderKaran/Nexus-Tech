import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".about-title", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" });
    tl.from(".cyber-card", { scale: 0.95, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5");
    tl.from(".stat-bar", { width: 0, duration: 1.5, stagger: 0.2, ease: "power2.out" }, "-=0.5");

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center border-t border-white/5 overflow-hidden py-20"
    >
      {/* Arka Plan Grid (Daha koyu ve ince) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
      
      {/* Sağ tarafa görseldeki Mor parlamayı ekleyelim */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#b92bca]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 px-4">
        <Card className="cyber-card bg-black/60 backdrop-blur-xl border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <CardContent className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            
            {/* SOL TARAF: Metin */}
            <div className="text-left space-y-6">
              {/* Badge Rengi: Görseldeki Pembe/Mor */}
              <Badge variant="outline" className="border-[#b92bca] text-[#b92bca] animate-pulse tracking-widest font-mono shadow-[0_0_10px_rgba(185,43,202,0.3)]">
                SYSTEM_DIAGNOSTIC
              </Badge>
              
              <h2 className="about-title text-4xl md:text-5xl font-tech font-bold text-white leading-tight">
                REDEFINING <br/>
                {/* Gradient: Görseldeki Neon Maviden Mora Geçiş */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-[#b92bca] to-[#b92bca]">
                  DIGITAL REALITY
                </span>
              </h2>
              
              <p className="about-title text-gray-400 text-base leading-relaxed font-sans border-l-2 border-[#b92bca]/50 pl-4">
                Nexus.Tech utilizes <span className="text-white">WebGL 2.0</span> and <span className="text-[#00f3ff]">Neural Processing</span> to deliver cinema-grade 3D experiences directly in your browser.
              </p>

              {/* BUTON DÜZELTME: Hover olunca Siyah DEĞİL, Mor oluyor */}
              <Button 
                className="about-title h-12 px-8 rounded-none border border-[#00f3ff]/50 text-[#00f3ff] bg-[#00f3ff]/5 
                hover:bg-[#b92bca] hover:text-white hover:border-[#b92bca] hover:shadow-[0_0_20px_#b92bca]
                transition-all duration-300 font-mono tracking-widest group"
              >
                [ INITIALIZE_MODULE ]
              </Button>
            </div>

            {/* SAĞ TARAF: Stats */}
            <div className="space-y-8 bg-white/5 p-8 rounded-lg border border-white/5 relative overflow-hidden">
              {/* Dekoratif Mor Işık */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#b92bca]/20 blur-xl"></div>

              <div className="flex justify-between text-gray-500 font-mono text-xs border-b border-white/10 pb-2">
                <span>CPU_LOAD</span>
                <span>OPTIMIZED</span>
              </div>

              {/* Progress 1: RENDER SPEED (Neon Mavi) */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono text-white">
                  <span>RENDER_SPEED</span>
                  <span className="text-[#00f3ff]">98%</span>
                </div>
                <Progress value={98} className="h-1 bg-gray-800" indicatorClassName="bg-[#00f3ff] shadow-[0_0_10px_#00f3ff] stat-bar" />
              </div>

              {/* Progress 2: LATENCY (Retro Mor - Görseldeki renk) */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono text-white">
                  <span>LATENCY</span>
                  <span className="text-[#b92bca]">12ms</span>
                </div>
                <Progress value={15} className="h-1 bg-gray-800" indicatorClassName="bg-[#b92bca] shadow-[0_0_10px_#b92bca] stat-bar" />
              </div>

               {/* Progress 3: IMMERSION (Gradient Mix) */}
               <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono text-white">
                  <span>IMMERSION</span>
                  <span className="text-white">MAX</span>
                </div>
                <Progress value={100} className="h-1 bg-gray-800" indicatorClassName="bg-gradient-to-r from-[#00f3ff] to-[#b92bca] stat-bar" />
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between text-xs text-gray-500 font-mono">
                <p>ID: #8492-X</p>
                <p className="animate-pulse text-[#00f3ff]">STATUS: ONLINE</p>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;