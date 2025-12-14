import { Suspense, lazy, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative w-full h-screen bg-[#050505] overflow-hidden">
      
      {/* 1. YÜKLENİYOR EKRANI */}
      {loading && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-neon border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="font-tech text-neon animate-pulse tracking-widest">INITIALIZING SYSTEMS...</p>
          </div>
        </div>
      )}

      {/* 2. YAZI KATMANI (Modelin üstünde durması için z-20) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-7xl md:text-9xl font-tech font-bold text-white tracking-tighter leading-none">
          NEXUS<span className="text-neon drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">.TECH</span>
        </h1>
        <div className="h-[2px] w-32 bg-neon mt-4 shadow-[0_0_10px_#00f3ff]"></div>
        <p className="mt-6 text-gray-400 font-sans tracking-[0.5em] text-xs uppercase">
          Next Gen 3D Interface
        </p>
      </div>

      {/* 3. SPLINE MODELİ (Arka planda kalması için z-10) */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Suspense fallback={null}>
          <Spline 
            className="w-full h-full"
            scene="https://prod.spline.design/w-YAqwDBnvErR15I/scene.splinecode"
            onLoad={() => setLoading(false)}
          />
        </Suspense>
      </div>

      {/* 4. SİBER KÖŞE DETAYLARI (Opsiyonel: Havalı durması için) */}
      <div className="absolute bottom-10 left-10 z-30 font-tech text-[10px] text-neon/50">
        <p>CORE_STATUS: ACTIVE</p>
        <p>RENDER_ENGINE: SPLINE_3D</p>
      </div>
    </main>
  );
}

export default App;