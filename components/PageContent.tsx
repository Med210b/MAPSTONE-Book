import React from 'react';

interface PageContentProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContent: React.FC<PageContentProps> = ({ children, className = "" }) => (
  <div className={`h-full w-full p-6 md:p-12 overflow-y-auto bg-white text-slate-800 ${className}`}>
    {children}
  </div>
);