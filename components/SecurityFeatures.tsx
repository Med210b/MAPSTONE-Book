import React, { useState } from 'react';
import { ShieldCheck, Landmark } from 'lucide-react';

interface SecurityFeaturesTexts {
  safestTitle: string;
  safestDesc: string;
  safestTooltip: string;
  ownershipTitle: string;
  ownershipDesc: string;
  ownershipTooltip: string;
}

interface SecurityFeaturesProps {
  texts?: SecurityFeaturesTexts;
}

export const SecurityFeatures: React.FC<SecurityFeaturesProps> = ({
  texts = {
    safestTitle: "Safest City",
    safestDesc: "Virtually zero crime. Feel safe everywhere at any time.",
    safestTooltip: "Dubai consistently ranks among the top 3 safest cities globally (Numbeo), thanks to strict laws and effective policing.",
    ownershipTitle: "100% Freehold",
    ownershipDesc: "You are the full owner of your property, for life and inheritable.",
    ownershipTooltip: "Foreign investors enjoy full freehold ownership rights in designated zones, registered directly with the Dubai Land Department."
  }
}) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Feature 1: Safety */}
      <div className="flex gap-4">
        <div 
          className="relative"
          onMouseEnter={() => setHovered('safety')}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="cursor-help">
            <ShieldCheck 
              className={`text-[#C5A059] shrink-0 transition-transform duration-300 ${hovered === 'safety' ? 'scale-110' : ''}`} 
              size={24} 
            />
          </div>
          
          {/* Tooltip */}
          <div 
            className={`
              absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56
              bg-white text-neutral-900 p-4 rounded-lg shadow-xl text-xs z-30
              pointer-events-none transition-all duration-300 transform origin-bottom
              border border-neutral-100
              ${hovered === 'safety' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}
            `}
          >
            <div className="font-bold mb-1 text-[#C5A059] text-sm">{texts.safestTitle}</div>
            <p className="leading-relaxed text-neutral-600">
              {texts.safestTooltip}
            </p>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
          </div>
        </div>
        
        <div>
          <h4 
            className="font-bold text-[#C5A059] text-sm md:text-base cursor-help transition-colors hover:text-[#e0b96b]" 
            onMouseEnter={() => setHovered('safety')} 
            onMouseLeave={() => setHovered(null)}
          >
            {texts.safestTitle}
          </h4>
          <p className="text-xs md:text-sm text-neutral-300">{texts.safestDesc}</p>
        </div>
      </div>

      {/* Feature 2: Freehold */}
      <div className="flex gap-4">
        <div 
          className="relative"
          onMouseEnter={() => setHovered('freehold')}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="cursor-help">
            <Landmark 
              className={`text-[#C5A059] shrink-0 transition-transform duration-300 ${hovered === 'freehold' ? 'scale-110' : ''}`} 
              size={24} 
            />
          </div>
          
          {/* Tooltip */}
          <div 
            className={`
              absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56
              bg-white text-neutral-900 p-4 rounded-lg shadow-xl text-xs z-30
              pointer-events-none transition-all duration-300 transform origin-bottom
              border border-neutral-100
              ${hovered === 'freehold' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}
            `}
          >
            <div className="font-bold mb-1 text-[#C5A059] text-sm">{texts.ownershipTitle}</div>
            <p className="leading-relaxed text-neutral-600">
              {texts.ownershipTooltip}
            </p>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
          </div>
        </div>
        
        <div>
          <h4 
            className="font-bold text-[#C5A059] text-sm md:text-base cursor-help transition-colors hover:text-[#e0b96b]" 
            onMouseEnter={() => setHovered('freehold')} 
            onMouseLeave={() => setHovered(null)}
          >
            {texts.ownershipTitle}
          </h4>
          <p className="text-xs md:text-sm text-neutral-300">{texts.ownershipDesc}</p>
        </div>
      </div>
    </div>
  );
};