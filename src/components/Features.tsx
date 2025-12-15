import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    id: 1,
    title: "NEURAL LINK",
    desc: "Direct brain-to-machine interface v2.0",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Cyberpunk görsel
    col: "md:col-span-2", 
  },
  {
    id: 2,
    title: "CYBER OPTICS",
    desc: "Enhanced night vision modules.",
    img: "https://images.unsplash.com/photo-1535378437327-1e5491109a05?q=80&w=2000&auto=format&fit=crop",
    col: "md:col-span-1", 
  },
  {
    id: 3,
    title: "BIO-SYNTHETICS",
    desc: "Self-healing armor plating.",
    img: "https://images.unsplash.com/photo-1614728853975-69c760c94563?q=80&w=2070&auto=format&fit=crop",
    col: "md:col-span-1",
  },
  {
    id: 4,
    title: "DATA CORE",
    desc: "Quantum processing units.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    col: "md:col-span-2",
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".feature-card");

    
    gsap.from(cards, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%", 
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-20 bg-[#0a0a0a] px-4 md:px-10 overflow-hidden">
      
      {/* Arka Plan Süsü */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-cyber/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Başlık Alanı */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-tech font-bold text-white">
            SYSTEM <span className="text-cyber">MODULES</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-md font-sans">
            Upgrade your reality with our latest cybernetic enhancements.
            Compatible with Nexus OS v4.2.
          </p>
        </div>
        
        {/* Dekoratif Puan (Referans resimdeki 4.5/5 kısmı) */}
        <div className="mt-8 md:mt-0 text-right">
          <div className="text-5xl font-tech text-cyber font-bold">99.9%</div>
          <div className="text-gray-500 text-xs tracking-widest uppercase mt-2">Uptime Guarantee</div>
        </div>
      </div>

      {/* BENTO GRID ALANI */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuresData.map((item) => (
          <div 
            key={item.id} 
            className={`feature-card group relative ${item.col} h-75 md:h-100 rounded-3xl overflow-hidden border border-white/10 bg-gray-900`}
          >
            {/* Görsel */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
              />
              {/* Noise Efekti (Texture) - Referanstaki kumlu görünüm */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            {/* İçerik Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
              
              {/* Dekoratif İkon/Numara */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono text-gray-400 group-hover:border-cyber group-hover:text-cyber transition-colors">
                0{item.id}
              </div>

              <h3 className="text-2xl font-tech font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 font-sans text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                {item.desc}
              </p>
              
              {/* Alt Çizgi Animasyonu */}
              <div className="w-0 group-hover:w-full h-0.5 bg-cyber mt-4 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Features;