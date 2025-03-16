
import React, { useEffect, useState } from 'react';
import TitleSection from '@/components/title-section';
import RegisterForm from '@/components/register-form';
import Background from '@/components/background';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for animation purposes
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      <Background />
      
      <main className={`
        w-full max-w-3xl mx-auto transition-opacity duration-1000 ease-out
        ${loaded ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="glass-card border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-6 py-16 md:py-20 flex flex-col items-center justify-center space-y-12 md:space-y-16">
            <TitleSection />
            
            <div className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <RegisterForm />
          </div>
        </div>
        
        <footer className="mt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} MVSR CSIT. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
