import React from 'react';
import { Building2, TrendingUp, Plane, CheckCircle2, Mail, Globe, Phone, Sun, Anchor, MapPin } from 'lucide-react';
import { SectionTitle } from './components/SectionTitle';
import { Quiz } from './Quiz'; // ENSURE FILE IS NAMED Quiz.tsx

export const LOGO_URL = "https://i.postimg.cc/Px2Nwx9p/17.png";

// ... (Keep your LANGUAGES and TRANSLATIONS here)

export const getPagesContent = (langCode: string = 'en') => {
  const t = TRANSLATIONS[langCode] || TRANSLATIONS.en;
  
  const pages = [
    // Page 1-10: Keep your existing content divs here
    <div key="p1" className="...">...</div>,
    // ...
    <div key="p10" className="...">...</div>,

    // NEW: QUIZ PAGE
    <div key="quiz-page" className="h-full w-full bg-black">
      <Quiz />
    </div>,

    // BACK COVER
    <div key="p11" className="h-full w-full bg-black text-white p-12 flex flex-col items-center justify-center text-center">
       <img src={LOGO_URL} alt="Logo" className="h-40 mb-10 mx-auto" />
       <p className="text-slate-400 text-sm mb-12">{t.back.tagline}</p>
       {/* Include your contact links here */}
    </div>
  ];

  // AUTOMATIC LAYOUT FIX: Ensures even page count for spreads
  if (pages.length % 2 !== 0) {
    pages.splice(pages.length - 1, 0, (
      <div key="blank-spacer" className="h-full w-full bg-black flex items-center justify-center">
        <img src={LOGO_URL} alt="Logo" className="h-20 w-auto opacity-10 grayscale" />
      </div>
    ));
  }

  return pages;
};