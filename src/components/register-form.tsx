
import React, { useState } from 'react';
import { toast } from 'sonner';
import RegisterButton from './ui/register-button';

const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleRegister = () => {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }
    
    toast.success("Registration successful", {
      description: "We'll be in touch with more details soon.",
      duration: 5000,
    });
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div 
        className={`
          glass-card rounded-2xl p-1 overflow-hidden transition-all duration-500 ease-out
          ${isOpen ? 'h-auto opacity-100' : 'h-auto opacity-100'}
        `}
      >
        <div className="p-6 flex flex-col items-center">
          {isOpen ? (
            <div className="w-full space-y-4 animate-fade-in">
              <h3 className="text-lg font-medium text-center mb-6">Complete Registration</h3>
              
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>
              
              <div className="pt-4">
                <RegisterButton onClick={handleRegister}>
                  Complete Registration
                </RegisterButton>
              </div>
            </div>
          ) : (
            <RegisterButton 
              onClick={handleRegister}
              className="w-full py-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
