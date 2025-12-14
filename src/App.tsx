
import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
  

  return (
    <>
      
      <main className="relative w-full h-screen bg-dark overflow-hidden">
      
      {/* Üstteki Yazı Katmanı (Overlay) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-6xl md:text-9xl font-tech font-bold text-white tracking-tighter mix-blend-difference">
          NEXUS<span className="text-neon">.TECH</span>
        </h1>
        <p className="mt-4 text-gray-400 font-sans tracking-[0.3em] text-sm md:text-base">
          FUTURE INTERFACE DESIGN
        </p>
      </div>

      {/* Spline Sahnesi (Zemin) */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/w-YAqwDBnvErR15I/scene.splinecode" />
      </div>
      
    </main>
     
    </>
  )
}

export default App
