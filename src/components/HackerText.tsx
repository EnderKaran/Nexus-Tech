import { useState } from "react";


interface HackerTextProps {
  text: string;
  className?: string; 
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

const HackerText = ({ text, className = "" }: HackerTextProps) => {
  const [displayText, setDisplayText] = useState<string>(text);

  const handleMouseOver = () => {
    let iterations = 0;
    
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((_, index) => { 
           
            if (index < iterations) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3; // Animasyon hızı
    }, 30);
  };

  return (
    <span 
      className={`font-mono cursor-default hover:text-neon transition-colors ${className}`} 
      onMouseEnter={handleMouseOver}
    >
      {displayText}
    </span>
  );
};

export default HackerText;