import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => (
  <div className="mb-4">
    <h2 className={`text-2xl md:text-3xl font-serif font-bold mb-2 ${light ? 'text-white' : 'text-neutral-900'}`}>
      {title}
    </h2>
    <div className="h-1 w-16 bg-[#C5A059] mb-3"></div>
    {subtitle && (
      <p className={`text-sm md:text-base leading-relaxed ${light ? 'text-neutral-300' : 'text-neutral-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);