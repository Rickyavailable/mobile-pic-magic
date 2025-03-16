
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TitleSectionProps {
  className?: string;
}

const TitleSection = ({ className }: TitleSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.animate-item');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.animate-item');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className={cn("flex flex-col items-center text-center", className)}>
      <h2 
        className="animate-item opacity-0 delay-100 font-mono text-sm tracking-wider uppercase text-white/60 mb-2 px-4"
      >
        MVSR CSIT's
      </h2>
      
      <div className="relative flex flex-col items-center">
        <h1 
          className="animate-item opacity-0 delay-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-glow gradient-text my-2"
        >
          ASTRA
        </h1>
        
        <h1 
          className="animate-item opacity-0 delay-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight pb-2 text-glow"
        >
          SYNCTECH
        </h1>
        
        <div 
          className="animate-item opacity-0 delay-700 h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent my-6"
        ></div>
        
        <p 
          className="animate-item opacity-0 delay-800 font-mono text-base sm:text-lg tracking-wide text-white/80 px-4"
        >
          AI & WEB EXPO
        </p>
      </div>
    </div>
  );
};

export default TitleSection;
