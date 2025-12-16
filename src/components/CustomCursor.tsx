import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  // Ref'lerin bir HTML Div elementine bağlanacağını belirtiyoruz
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Event parametresini 'MouseEvent' olarak tipliyoruz
    const moveCursor = (e: MouseEvent) => {
      // gsap.to null kontrolü yapabilir, ancak useEffect çalıştığında ref'ler dolmuş olur
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Ana Nokta */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-neon rounded-full z-[9999] pointer-events-none mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      {/* Takip Eden Halka */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-cyber rounded-full z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-50"
      />
    </>
  );
};

export default CustomCursor;