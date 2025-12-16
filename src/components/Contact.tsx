import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Phone, Github, Linkedin, ArrowUpRight, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { name: "GITHUB_REPO", icon: <Github />, url: "#" },
  { name: "CORP_LINK", icon: <Linkedin />, url: "#" },
];

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    // Buton Animasyonu (Artık container içinde olduğu için sorunsuz çalışacak)
    tl.from(".scroll-top-btn", {
      y: -20, 
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    tl.from(".footer-word", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.3");

    tl.from(".footer-col", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.4");

    tl.from(".footer-separator", {
      scaleX: 0,
      opacity: 0,
      duration: 1,
      ease: "expo.out"
    }, "-=0.2");

    tl.from(".footer-bottom", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.8");

  }, { scope: containerRef });

  return (
    <footer ref={containerRef} id="contact" className="relative bg-[#020202] border-t border-white/10 pt-20 pb-10 overflow-hidden">
      
      {/* Arka Plan Efektleri */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00f3ff]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#b92bca]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- YUKARI ÇIK BUTONU --- */}
        <button 
          onClick={scrollToTop}
          className="scroll-top-btn absolute -top-10 right-6 md:right-0 z-50
          flex items-center gap-2 px-4 py-2 bg-[#020202] border border-[#00f3ff]/30 
          text-[#00f3ff] font-mono text-xs tracking-widest uppercase cursor-pointer
          hover:bg-[#00f3ff] hover:text-black hover:shadow-[0_0_20px_#00f3ff]
          transition-all duration-300 group rounded-sm"
        >
          <span>RETURN_TO_ROOT</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* BAŞLIK ALANI */}
        <div className="mb-16">
            <h2 className="text-5xl md:text-8xl font-tech font-bold text-white leading-tight">
                <span className="footer-word inline-block mr-4">INITIATE</span>
                <span className="footer-word inline-block text-[#00f3ff]">CONNECTION</span>
            </h2>
        </div>

        {/* GRID İÇERİK */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* KOLON 1 */}
            <div className="footer-col space-y-4">
                <h3 className="text-white font-tech text-lg border-l-2 border-[#b92bca] pl-3">LOCATE_US</h3>
                <div className="flex gap-3 text-gray-400 font-mono text-sm group cursor-pointer hover:text-white transition-colors">
                    <MapPin className="w-5 h-5 text-[#b92bca] group-hover:animate-bounce" />
                    <p>
                        Sector 7, Neo-Tokyo<br/>
                        Arasaka Tower, Level 42<br/>
                        JP-2077
                    </p>
                </div>
            </div>

            {/* KOLON 2 */}
            <div className="footer-col space-y-4">
                <h3 className="text-white font-tech text-lg border-l-2 border-[#00f3ff] pl-3">CONTACT_CORE</h3>
                <div className="space-y-3 font-mono text-sm text-gray-400">
                    <a href="mailto:root@nexus.tech" className="flex items-center gap-3 hover:text-[#00f3ff] transition-colors">
                        <Mail className="w-4 h-4" />
                        root@nexus.tech
                    </a>
                    <a href="tel:+15550001337" className="flex items-center gap-3 hover:text-[#00f3ff] transition-colors">
                        <Phone className="w-4 h-4" />
                        (555) 000-1337
                    </a>
                </div>
            </div>

            {/* KOLON 3 */}
            <div className="footer-col space-y-4">
                <h3 className="text-white font-tech text-lg border-l-2 border-white/50 pl-3">SERVER_UPTIME</h3>
                <div className="space-y-2 font-mono text-sm text-gray-400">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                        <span>MON - FRI</span>
                        <span className="text-[#00f3ff]">24 HOURS</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                        <span>WEEKEND</span>
                        <span className="text-[#b92bca]">MAINTENANCE</span>
                    </div>
                </div>
            </div>

            {/* KOLON 4 */}
            <div className="footer-col space-y-4">
                <h3 className="text-white font-tech text-lg border-l-2 border-[#00f3ff] pl-3">SIGNAL_CHANNELS</h3>
                <div className="flex gap-4">
                    {socials.map((social) => (
                        <a 
                            key={social.name} 
                            href={social.url}
                            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full 
                            text-gray-400 hover:text-black hover:bg-[#00f3ff] hover:border-[#00f3ff] 
                            transition-all duration-300 group"
                            aria-label={social.name}
                        >
                            <span className="group-hover:scale-110 transition-transform">
                                {social.icon}
                            </span>
                        </a>
                    ))}
                </div>
                <div className="mt-6 relative">
                    <input 
                        type="email" 
                        placeholder="SUBSCRIBE_NEWSLETTER" 
                        className="w-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-mono text-white focus:border-[#00f3ff] focus:outline-none transition-colors"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#00f3ff] hover:text-white">
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

        </div>

        <Separator className="footer-separator bg-white/10 mb-8" />

        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-mono text-green-500 tracking-widest">SYSTEM STATUS: ONLINE</span>
            </div>
            
            <p className="text-xs font-mono text-gray-600">
                © 2077 NEXUS SYSTEMS INC. ALL RIGHTS RESERVED.
            </p>

            <div className="flex gap-6 text-xs font-mono text-gray-500">
                <a href="#" className="hover:text-[#00f3ff] transition-colors">PRIVACY_PROTOCOL</a>
                <a href="#" className="hover:text-[#00f3ff] transition-colors">TERMS_OF_SERVICE</a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;