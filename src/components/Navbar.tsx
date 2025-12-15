const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center mix-blend-difference text-white">
        {/* Logo Alanı */}
        <div className="font-tech text-2xl tracking-tighter">
          NEXUS<span className="text-neon">.OS</span>
        </div>
  
        {/* Menü Linkleri */}
        <ul className="hidden md:flex gap-8 font-mono text-sm tracking-widest text-gray-400">
          <li className="hover:text-neon cursor-pointer transition-colors">[ SYSTEM ]</li>
          <li className="hover:text-neon cursor-pointer transition-colors">[ MISSION ]</li>
          <li className="hover:text-neon cursor-pointer transition-colors">[ MODULES ]</li>
        </ul>
  
        {/* Sağ Köşe Buton */}
        <button className="border border-neon/30 px-6 py-2 rounded-full font-tech text-xs text-neon hover:bg-neon hover:text-black transition-all duration-300">
          LOGIN_
        </button>
      </nav>
    );
  };
  
  export default Navbar;