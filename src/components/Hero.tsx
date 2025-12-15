import { useState, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer'; //performnans için
import LoadingScreen from './LoadingScreen';
import HeroOverlay from './HeroOverlay';
import StatusPanel from './StatusPanel';
import Scene3D from './Scene3D';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  
  // GSAP Scope Ref'i
  const containerRef = useRef<HTMLElement | null>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Observer (Görünürlük İzleyici) Ayarları
  const { ref: inViewRef, inView } = useInView({
    threshold: 0, 
    triggerOnce: false, 
    rootMargin: "0px 0px -10% 0px" 
  });

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      
      containerRef.current = node;

      inViewRef(node);
    },
    [inViewRef]
  );

  useGSAP(() => {
    // Eğer element yoksa çalışma
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: false, 
      }
    });

    // 3D Sahne Paralaks Efekti
    tl.to(sceneRef.current, {
      y: 100,
      opacity: 0, 
      ease: "none",
    }, 0);

    
    tl.to(textRef.current, {
      y: -150,
      opacity: 0,
      ease: "power1.in",
    }, 0);

  }, { scope: containerRef }); 

  return (
    <section 
      ref={setRefs} 
      id="hero" 
      className="relative w-full h-screen bg-[#050505] overflow-hidden"
    >
     
      <LoadingScreen isLoading={loading} />
      

      <div ref={textRef} className="absolute inset-0 z-20 pointer-events-none">
        <HeroOverlay />
        <StatusPanel />
      </div>
      
     
      {inView && (
        <div ref={sceneRef} className="absolute inset-0 z-10 w-full h-full">
          <Scene3D onLoad={() => setLoading(false)} />
        </div>
      )}

      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-[#050505] to-transparent z-30 pointer-events-none"></div>

    </section>
  );
};

export default Hero;