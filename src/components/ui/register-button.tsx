
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface RegisterButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const RegisterButton = ({
  className,
  children = "Register now",
  onClick,
}: RegisterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-xl",
        "bg-primary/10 backdrop-blur-sm border border-white/10",
        "px-6 py-3.5 text-base font-medium text-white",
        "transition-all duration-300 ease-out",
        "hover:scale-[0.98] hover:bg-primary/15 active:scale-[0.97]",
        "focus:outline-none focus:ring-2 focus:ring-white/20",
        className
      )}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        <span className="transition-transform duration-300 group-hover:translate-x-[-4px]">
          {children}
        </span>
        <ArrowRight 
          className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 opacity-70" 
        />
      </div>
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-white/5 group-hover:opacity-100" />
      <div className="absolute inset-0 -z-10 rounded-xl shimmer opacity-0 group-hover:opacity-100" />
    </button>
  );
};

export default RegisterButton;
