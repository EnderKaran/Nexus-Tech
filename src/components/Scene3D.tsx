import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface Scene3DProps {
  onLoad: () => void;
}

const Scene3D = ({ onLoad }: Scene3DProps) => {
  return (
    <div className="absolute inset-0 z-10 w-full h-full">
      <Suspense fallback={null}>
        <Spline 
          className="w-full h-full"
          scene="https://prod.spline.design/B7s5MI3oKAHc1igj/scene.splinecode"
          onLoad={onLoad}
        />
        
      </Suspense>
    </div>
  );
};

export default Scene3D;