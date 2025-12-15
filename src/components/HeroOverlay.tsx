const HeroOverlay = () => {
    return (
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-7xl md:text-9xl font-tech font-bold text-white tracking-tighter leading-none">
          NEXUS
          <span className="text-neon drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">
            .TECH
          </span>
        </h1>
        <div className="h-0.5 w-32 bg-neon mt-4 shadow-[0_0_10px_#00f3ff]"></div>
        <p className="mt-6 text-gray-400 font-sans tracking-[0.5em] text-xs uppercase">
          Next Gen 3D Interface
        </p>
      </div>
    );
  };
  
  export default HeroOverlay;