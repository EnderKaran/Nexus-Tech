const About = () => {
    return (
      <section id="about" className="relative w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center border-t border-neon/10">
        
        {/* Arka plan ızgarası (Grid) efekti */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]  opacity-20"></div>
  
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h2 className="text-4xl md:text-6xl font-tech font-bold text-white mb-8">
            SYSTEM <span className="text-neon">OVERVIEW</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-sans">
            Welcome to the next generation of digital interfaces. 
            We blend high-performance 3D rendering with seamless user experience.
            Scroll down to explore the core modules.
          </p>
        </div>
      </section>
    );
  };
  
  export default About;