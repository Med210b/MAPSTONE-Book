import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, ChevronDown, X } from 'lucide-react';
import { getPagesContent, LOGO_URL, LANGUAGES, TRANSLATIONS } from './constants';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // New state to manage closing transition
  const [showPages, setShowPages] = useState(false); // Controls mounting of pages
  const [currentPage, setCurrentPage] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  
  // Language State
  const [currentLang, setCurrentLang] = useState('en');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  
  // Audio Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Timeout Ref for handling close animation race conditions
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Animation states
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const [flipTrigger, setFlipTrigger] = useState(false); // Triggers the actual CSS transition

  // Get localized content
  const pagesContent = getPagesContent(currentLang);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const totalSpreads = Math.ceil(pagesContent.length / 2);
  const isLastSpread = currentPage === totalSpreads - 1;

  // Preload audio
  useEffect(() => {
    audioRef.current = new Audio('https://assets.codepen.io/1025350/page-flip.mp3');
    audioRef.current.preload = 'auto';
    audioRef.current.load();
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const playPageFlip = () => {
    if (audioRef.current) {
      // Clone the audio node to allow overlapping sounds for rapid flipping
      const sound = audioRef.current.cloneNode() as HTMLAudioElement;
      sound.volume = 0.4; // Subtle volume
      // Slight pitch variation for realism
      sound.playbackRate = 0.95 + Math.random() * 0.1;
      sound.play().catch(() => {
        // Ignore auto-play blocking errors
      });
    }
  };

  const handleOpenBook = () => {
    // Check both isOpen (animation done) and showPages (animation starting) to prevent double clicks
    // Also prevent opening if we are currently in the middle of closing
    if (isOpen || showPages || isClosing) return;

    // Clear any pending close timeouts to prevent race conditions
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    playPageFlip();
    setShowPages(true); 
    // Small delay to ensure render before animation starts
    setTimeout(() => setIsOpen(true), 50); 
    setCurrentPage(0);
    setParallax({ x: 0, y: 0 });
  };

  const handleCloseBook = () => {
    // Clear existing timeout if any
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    playPageFlip(); // Mirror the sound effect on close
    setIsOpen(false);
    setIsClosing(true); // Mark as closing to prevent float animation from starting prematurely
    
    // Set new timeout to unmount pages after animation
    closeTimeoutRef.current = setTimeout(() => {
      setShowPages(false);
      setCurrentPage(0);
      setIsClosing(false); // Reset closing state, allowing idle animation to resume
    }, 1500); 
  };

  const nextPage = () => {
    if (isFlipping) return;
    
    playPageFlip();
    
    if (currentPage < totalSpreads - 1) {
      // Trigger Flip Animation
      setFlipDirection('next');
      setIsFlipping(true);
      setFlipTrigger(false);
      
      // Trigger the CSS transition slightly after mount
      setTimeout(() => setFlipTrigger(true), 20);
      
      // Complete the flip after animation
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
        setFlipDirection(null);
        setFlipTrigger(false);
      }, 820); // Matches CSS transition (800ms) + small buffer
    } else {
      handleCloseBook();
    }
  };

  const prevPage = () => {
    if (isFlipping) return;

    playPageFlip();
    
    if (currentPage > 0) {
      // Trigger Flip Animation
      setFlipDirection('prev');
      setIsFlipping(true);
      setFlipTrigger(false);
      
      // Trigger the CSS transition slightly after mount
      setTimeout(() => setFlipTrigger(true), 20);
      
      // Complete the flip after animation
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
        setFlipDirection(null);
        setFlipTrigger(false);
      }, 820);
    } else {
      // Close the book if on the first spread
      handleCloseBook();
    }
  };

  const handleCoverMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Freeze parallax if open OR closing to ensure stability
    if (isOpen || isClosing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x, y });
  };

  const handleCoverMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  // Helper to render content safely
  const renderContent = (index: number) => pagesContent[index] || null;

  // Calculate contents based on animation state
  let leftPageContent, rightPageContent; // Static underlying pages
  let flipperFrontContent, flipperBackContent; // Moving page contents

  if (isFlipping && flipDirection === 'next') {
    leftPageContent = renderContent(currentPage * 2); 
    rightPageContent = renderContent((currentPage + 1) * 2 + 1);
    
    flipperFrontContent = renderContent(currentPage * 2 + 1);
    flipperBackContent = renderContent((currentPage + 1) * 2);

  } else if (isFlipping && flipDirection === 'prev') {
    leftPageContent = renderContent((currentPage - 1) * 2);
    rightPageContent = renderContent(currentPage * 2 + 1);
    
    flipperFrontContent = renderContent((currentPage - 1) * 2 + 1); 
    flipperBackContent = renderContent(currentPage * 2); 
    
  } else {
    // Static State
    leftPageContent = renderContent(currentPage * 2);
    rightPageContent = renderContent(currentPage * 2 + 1);
  }

  const currentLangObj = LANGUAGES.find(l => l.code === currentLang);

  return (
    <div className="min-h-screen bg-[#1f0505] flex items-center justify-center p-4 md:p-8 perspective-2000 overflow-hidden font-sans relative">
      
      {/* --- Styles for 3D flip effect --- */}
      <style>{`
        .perspective-2000 { perspective: 2000px; }
        
        /* Float animation for closed book */
        @keyframes float-book {
          0%, 100% { transform: translateY(0) rotateY(-5deg) rotateX(2deg); }
          50% { transform: translateY(-8px) rotateY(-3deg) rotateX(4deg); }
        }

        .book-container { 
          transform-style: preserve-3d; 
          transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 1.2s ease;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          /* Initial State (Closed) with subtle angle */
          transform: rotateY(-5deg) rotateX(2deg);
        }
        
        /* Apply float only when CLOSED and NOT CLOSING and NOT HOVERED */
        /* This prevents the animation from interrupting the closing transition */
        .book-container:not(.book-open):not(.book-closing):not(:hover) {
          animation: float-book 6s ease-in-out infinite;
        }

        .book-container:not(.book-open):hover {
          transform: translateY(-5px) rotateY(-2deg) rotateX(2deg) scale(1.01);
          box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.6);
        }
        
        .book-open { 
          /* Open State: Centered reading view, slight scale for focus */
          transform: translateX(50%) rotateY(0deg) rotateX(0deg) scale(1.05) !important;
          box-shadow: 20px 20px 60px rgba(0,0,0,0.4);
          animation: none;
        }

        .book-open-last {
          transform: translateX(100%) rotateY(0deg) scale(1.05) !important;
          box-shadow: none;
        }
        
        .book-cover {
          transform-origin: left;
          transform-style: preserve-3d;
          /* UPDATED: Added delay to z-index (0.6s) to allow cover to close OVER the left page before z-index swap */
          transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s 0.6s;
          z-index: 50;
        }
        
        .book-cover.flipped { 
          transform: rotateY(-180deg); 
          z-index: 0; 
          transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0s 0.6s;
        }

        /* --- Internal Page Flipper --- */
        .page-flipper {
          transform-style: preserve-3d;
          transform-origin: left;
          z-index: 30; /* Above static pages */
          /* Smoother, realistic page turn easing using custom bezier */
          transition: transform 0.8s cubic-bezier(0.45, 0.05, 0.55, 0.95);
          will-change: transform;
        }

        /* Initial state for Next Flip: Starts at 0deg (Right), goes to -180deg (Left) */
        .flipper-next-start { transform: rotateY(0deg); }
        .flipper-next-end { transform: rotateY(-180deg); }

        /* Initial state for Prev Flip: Starts at -180deg (Left), goes to 0deg (Right) */
        .flipper-prev-start { transform: rotateY(-180deg); }
        .flipper-prev-end { transform: rotateY(0deg); }

        /* Dynamic Lighting Logic based on flip state */
        /* Sync shadow transition with transform */
        .flip-shadow-front, .flip-shadow-back {
          transition: opacity 0.8s cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }

        /* Next Flip: Right -> Left */
        /* Front Face (Original Right): Turns away. Starts bright, gets dark. */
        .flipper-next-start .flip-shadow-front { opacity: 0; }
        .flipper-next-end .flip-shadow-front { opacity: 0.5; }

        /* Back Face (New Left): Turns towards. Starts dark (facing away), gets bright. */
        .flipper-next-start .flip-shadow-back { opacity: 0.5; }
        .flipper-next-end .flip-shadow-back { opacity: 0; }

        /* Prev Flip: Left -> Right */
        /* Front Face (New Right): Turns towards. Starts dark (facing away), gets bright. */
        .flipper-prev-start .flip-shadow-front { opacity: 0.5; }
        .flipper-prev-end .flip-shadow-front { opacity: 0; }

        /* Back Face (Original Left): Turns away. Starts bright, gets dark. */
        .flipper-prev-start .flip-shadow-back { opacity: 0; }
        .flipper-prev-end .flip-shadow-back { opacity: 0.5; }


        .flipper-face {
          backface-visibility: hidden;
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: white;
          /* Improve text rendering during 3D transform */
          -webkit-font-smoothing: antialiased; 
        }

        .flipper-back {
          transform: rotateY(180deg);
        }

        .spine-shadow {
          background: linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 15%);
        }
        
        /* Inner fold shadow for right pages */
        .spine-shadow-right {
          background: linear-gradient(to left, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 15%);
        }

        /* Custom scrollbar for dropdown */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(197, 160, 89, 0.5);
          border-radius: 4px;
        }
        
        /* Fade in animation for the open button */
        @keyframes fadeInButton {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-button {
          animation: fadeInButton 0.8s ease-out forwards;
        }
      `}</style>

      {/* --- BOOK STRUCTURE --- */}
      <div className={`relative w-[350px] h-[550px] md:w-[450px] md:h-[650px] book-container ${isOpen ? (isLastSpread ? 'book-open-last' : 'book-open') : ''} ${isClosing ? 'book-closing' : ''}`}>
        
        {/* --- FRONT COVER (Rotates Open) --- */}
        <div className={`absolute inset-0 w-full h-full book-cover ${isOpen ? 'flipped' : ''}`}>
          
          {/* Front of Cover */}
          <div 
            className="absolute inset-0 w-full h-full bg-black text-white backface-hidden rounded-r-lg rounded-l-sm shadow-2xl flex flex-col items-center p-8 border-l-4 border-zinc-900 overflow-hidden cursor-pointer"
            onMouseMove={handleCoverMouseMove}
            onMouseLeave={handleCoverMouseLeave}
            onClick={() => !isOpen && handleOpenBook()}
            style={{ backgroundColor: '#000000' }}
          >
            {/* Background Texture Overlay */}
            <div 
              className="absolute inset-[-40px] opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${parallax.x * -20}px, ${parallax.y * -20}px) scale(1.1)`
              }}
            ></div>

             {/* Dynamic Gradient Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-soft-light transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${50 + parallax.x * 40}% ${50 + parallax.y * 40}%, rgba(197,160,89,0.2), transparent 70%)`,
                opacity: isOpen ? 0 : 1
              }}
            ></div>
            
            {/* Interactive Sheen */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${50 + parallax.x * 80}% ${50 + parallax.y * 80}%, rgba(255,255,255,0.8), transparent 50%)`,
                opacity: isOpen ? 0 : 0.2
              }}
            ></div>
            
            {/* Language Selector Dropdown */}
            <div className="absolute top-5 right-5 z-40" ref={langMenuRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangMenuOpen(!isLangMenuOpen);
                }}
                className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#C5A059]/50 hover:bg-black/60 text-white px-3 py-1.5 rounded-full transition-all shadow-lg group"
              >
                {currentLangObj && (
                  <img 
                    src={`https://flagcdn.com/w40/${currentLangObj.flag}.png`} 
                    alt={currentLangObj.name} 
                    className="w-4 h-3 object-cover rounded-[1px] shadow-sm opacity-90" 
                  />
                )}
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-300 group-hover:text-[#C5A059] transition-colors">
                  {currentLangObj?.code}
                </span>
                <ChevronDown size={14} className={`text-neutral-400 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180 text-[#C5A059]' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`
                  absolute right-0 top-full mt-2 w-40 
                  bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 
                  rounded-lg shadow-2xl overflow-hidden transition-all duration-300 origin-top-right z-50
                  ${isLangMenuOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                `}
              >
                <div className="py-1 max-h-48 overflow-y-auto custom-scrollbar">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentLang(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`
                        w-full flex items-center gap-3 px-3 py-2 text-sm transition-all
                        border-b border-white/5 last:border-0 hover:bg-white/10
                        ${currentLang === lang.code ? 'text-[#C5A059] bg-white/5' : 'text-neutral-300'}
                      `}
                    >
                      <img 
                        src={`https://flagcdn.com/w40/${lang.flag}.png`} 
                        alt={lang.name} 
                        className={`w-5 h-3.5 object-cover rounded-[1px] shadow-sm transition-opacity ${currentLang === lang.code ? 'opacity-100' : 'opacity-70'}`} 
                      />
                      <span className="font-medium text-xs tracking-wide">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Logo and Text Block */}
            <div 
              className="text-center z-10 flex flex-col items-center transition-transform duration-200 ease-out mb-auto -mt-16 pointer-events-none"
              style={{
                transform: `
                  translate(${parallax.x * 15}px, ${parallax.y * 15}px)
                  perspective(1000px)
                  rotateX(${parallax.y * -5}deg)
                  rotateY(${parallax.x * 5}deg)
                `
              }}
            >
              <div className="mb-0 mt-5 filter drop-shadow-2xl pt-12">
                <img src={LOGO_URL} alt="Mapstone Logo" className="h-48 md:h-64 w-auto mix-blend-screen" />
              </div>
              
              <div className="flex flex-col items-center justify-center mb-4 drop-shadow-xl relative mt-16">
                 <span className="font-serif text-2xl md:text-4xl font-bold text-[#C5A059] leading-tight z-10 tracking-wider">{t.cover.investIn}</span>
                 <span className="font-vibes text-6xl md:text-8xl text-white mt-4 relative z-10">{t.cover.dubai}</span>
                 <div className="h-1 w-20 bg-[#C5A059] rounded-full mt-6 shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
              </div>
            </div>

            <div 
               className="z-10 relative transition-transform duration-200 ease-out mb-8 text-center pointer-events-none"
               style={{
                transform: `translate(${parallax.x * 10}px, ${parallax.y * 10}px)`
              }}
            >
              <p className="text-slate-300 font-light max-w-xs mx-auto drop-shadow-md text-sm md:text-base tracking-wide">
                {t.cover.tagline}
              </p>
            </div>

            {/* Replaced button with a visual spacer/indicator on the cover to maintain layout, but actual interaction is handled by the cover click or the bottom fixed button */}
             <div 
               className="z-10 relative transition-transform duration-200 ease-out mt-auto pointer-events-none opacity-60"
               style={{
                transform: `translate(${parallax.x * 5}px, ${parallax.y * 5}px)`
              }}
            >
               {/* Visual indicator that this is clickable */}
            </div>

          </div>

          <div className="absolute inset-0 w-full h-full bg-zinc-900 rounded-l-lg shadow-xl transform rotate-y-180 backface-hidden border-r border-zinc-700"></div>
        </div>

        {/* --- INSIDE PAGES CONTAINER --- */}
        <div className="absolute inset-0 w-full h-full rounded-r-lg z-0 flex overflow-hidden">
           {/* Static backing */}
        </div>

        {showPages && (
          <div className={`absolute top-0 right-0 h-full w-[200%] flex transition-opacity duration-500 z-10 opacity-100`}>
            
            {/* --- STATIC LEFT PAGE (Bottom Layer) --- */}
            <div className={`w-1/2 h-full bg-white rounded-l-lg shadow-2xl overflow-hidden relative border-r border-slate-200 ${!leftPageContent ? 'invisible' : ''}`}>
               {/* Removed animate-fade-in to prevent visual jump during page turn */}
               <div className="h-full w-full text-slate-800">
                 {leftPageContent}
               </div>
               <div className="absolute top-0 right-0 bottom-0 w-12 pointer-events-none spine-shadow z-20 opacity-50"></div>
               {leftPageContent && !isFlipping && (
                 <div className="absolute bottom-4 left-6 text-xs text-[#C5A059] font-mono font-bold">
                   {currentPage * 2 + 1}
                 </div>
               )}
            </div>

            {/* --- STATIC RIGHT PAGE (Bottom Layer) --- */}
            <div className={`w-1/2 h-full rounded-r-lg overflow-hidden relative ${rightPageContent ? 'bg-white shadow-2xl' : 'bg-transparent'}`}>
               {/* Removed animate-fade-in to prevent visual jump during page turn */}
               <div className="h-full w-full text-slate-800">
                 {rightPageContent}
               </div>
               {rightPageContent && !isFlipping && (
                 <div className="absolute bottom-4 right-6 text-xs text-[#C5A059] font-mono font-bold">
                   {currentPage * 2 + 2}
                 </div>
               )}
            </div>

            {/* --- FLIPPER PAGE (Animating Layer) --- */}
            {isFlipping && (
              <div className={`absolute right-0 top-0 w-1/2 h-full page-flipper ${
                flipDirection === 'next' 
                  ? (flipTrigger ? 'flipper-next-end' : 'flipper-next-start') 
                  : (flipTrigger ? 'flipper-prev-end' : 'flipper-prev-start')
              }`}>
                {/* Front Face (0deg) */}
                <div className="flipper-face bg-white rounded-r-lg border-l border-slate-100 shadow-md">
                   <div className="h-full w-full text-slate-800">
                     {flipperFrontContent}
                   </div>
                   {flipperFrontContent && (
                     <div className="absolute bottom-4 right-6 text-xs text-[#C5A059] font-mono font-bold">
                       {/* If going Next, this is current Right (2*i + 2). If Prev, this is landing Right (2*(i-1) + 2) */}
                       {flipDirection === 'next' ? (currentPage * 2 + 2) : ((currentPage - 1) * 2 + 2)}
                     </div>
                   )}
                   {/* Dynamic Shadow for Front Face */}
                   <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent pointer-events-none flip-shadow-front"></div>
                </div>

                {/* Back Face (180deg) */}
                <div className="flipper-face flipper-back bg-white rounded-l-lg border-r border-slate-200 shadow-md">
                   <div className="h-full w-full text-slate-800">
                     {flipperBackContent}
                   </div>
                   <div className="absolute top-0 right-0 bottom-0 w-12 pointer-events-none spine-shadow z-20 opacity-50"></div>
                   {flipperBackContent && (
                     <div className="absolute bottom-4 left-6 text-xs text-[#C5A059] font-mono font-bold">
                       {/* If going Next, this is landing Left (2*(i+1) + 1). If Prev, this is leaving Left (2*i + 1) */}
                       {flipDirection === 'next' ? ((currentPage + 1) * 2 + 1) : (currentPage * 2 + 1)}
                     </div>
                   )}
                   {/* Dynamic Shadow for Back Face */}
                   <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none flip-shadow-back"></div>
                </div>
              </div>
            )}

            {/* --- NAVIGATION CONTROLS --- */}
            {/* Moved to vertical center as requested and made smaller */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full px-2 md:px-3 flex justify-between z-50 pointer-events-none">
                 <button 
                   onClick={prevPage} 
                   disabled={isFlipping}
                   className={`w-6 h-6 rounded-full border border-[#1f0505] bg-[#1f0505] text-[#C5A059] hover:bg-[#380e0e] hover:shadow-lg flex items-center justify-center transition-all shadow-md pointer-events-auto ${
                     isFlipping ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                   }`}
                 >
                   <ArrowLeft size={14} />
                 </button>

                 <button 
                   onClick={nextPage}
                   disabled={isFlipping}
                   className={`w-6 h-6 rounded-full border border-[#1f0505] bg-[#1f0505] text-[#C5A059] hover:bg-[#380e0e] hover:shadow-lg flex items-center justify-center transition-all shadow-md pointer-events-auto ${isFlipping ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
                 >
                   {currentPage === totalSpreads - 1 ? (
                     <X size={14} />
                   ) : (
                     <ArrowRight size={14} />
                   )}
                 </button>
            </div>
          </div>
        )}

      </div>

      {/* Only show the open button if the book is fully closed AND not in the process of closing */}
      {!isOpen && !isClosing && (
        <div className="absolute bottom-8 z-[100] w-full max-w-xs px-4 animate-fade-in-button">
          <button 
            onClick={handleOpenBook}
            className="w-full group bg-[#C5A059] hover:bg-[#a38446] text-white font-bold py-4 rounded-lg transition-all shadow-xl shadow-[#C5A059]/20 flex items-center justify-center gap-3 relative overflow-hidden cursor-pointer"
          >
             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
             <span>{t.cover.openButton}</span>
             <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      )}

    </div>
  );
}