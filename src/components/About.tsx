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
  const containerRef = useRef(null);

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
      className="relative w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center border-t border-white/5 overflow-hidden py-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="container relative z-10 px-4">
        <Card className="cyber-card bg-black/40 backdrop-blur-md border-white/10 overflow-hidden">
          <CardContent className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            
            {/* SOL TARA: Metin */}
            <div className="text-left space-y-6">
              <Badge variant="outline" className="border-primary text-primary animate-pulse tracking-widest font-mono">
                SYSTEM_DIAGNOSTIC
              </Badge>
              
              <h2 className="about-title text-4xl md:text-5xl font-tech font-bold text-white leading-tight">
                REDEFINING <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">DIGITAL REALITY</span>
              </h2>
              
              <p className="about-title text-muted-foreground text-base leading-relaxed font-sans border-l-2 border-primary/20 pl-4">
                Nexus.Tech utilizes <span className="text-white">WebGL 2.0</span> and <span className="text-white">Neural Processing</span> to deliver cinema-grade 3D experiences directly in your browser.
              </p>

              <Button className="about-title rounded-none border border-primary/50 text-primary bg-primary/10 hover:bg-primary hover:text-black font-mono tracking-widest">
                [ INITIALIZE_MODULE ]
              </Button>
            </div>

            <div className="space-y-8 bg-white/5 p-8 rounded-lg border border-white/5">
              <div className="flex justify-between text-muted-foreground font-mono text-xs border-b border-white/10 pb-2">
                <span>CPU_LOAD</span>
                <span>OPTIMIZED</span>
              </div>

              {/* Progress 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono text-white">
                  <span>RENDER_SPEED</span>
                  <span className="text-primary">98%</span>
                </div>
                {/* Shadcn Progress bileşeni + Custom Style */}
                <Progress value={98} className="h-1 bg-gray-800" indicatorClassName="bg-primary shadow-[0_0_10px_#00f3ff] stat-bar" />
              </div>

              {/* Progress 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono text-white">
                  <span>LATENCY</span>
                  <span className="text-primary">12ms</span>
                </div>
                <Progress value={15} className="h-1 bg-gray-800" indicatorClassName="bg-purple-500 shadow-[0_0_10px_purple] stat-bar" />
              </div>

               {/* Progress 3 */}
               <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono text-white">
                  <span>IMMERSION</span>
                  <span className="text-primary">MAX</span>
                </div>
                <Progress value={100} className="h-1 bg-gray-800" indicatorClassName="bg-linear-to-r from-primary to-purple-500 stat-bar" />
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between text-xs text-gray-600 font-mono">
                <p>ID: #8492-X</p>
                <p className="animate-pulse text-green-500">STATUS: ONLINE</p>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;