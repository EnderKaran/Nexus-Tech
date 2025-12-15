interface LoadingScreenProps {
    isLoading: boolean;
  }
  
  const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
    if (!isLoading) return null;
  
    return (
      <div className="absolute inset-0 z-100 flex items-center justify-center bg-black">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-neon border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="font-tech text-neon animate-pulse tracking-widest">
            INITIALIZING SYSTEMS...
          </p>
        </div>
      </div>
    );
  };
  
  export default LoadingScreen;