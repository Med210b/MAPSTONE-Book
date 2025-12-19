import React, { useRef, useState, useEffect, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MousePointer2, ZoomIn, ZoomOut, ChevronDown, Smartphone } from 'lucide-react';
import { getPagesContent, LOGO_URL, LANGUAGES } from './constants';
// 1. IMPORT THE QUIZ PAGE
import QuizPage from './QuizPage';

// --- PROPS FOR THE REUSABLE PAGE COMPONENT ---
interface PageProps {
  children: React.ReactNode;
  number?: number;
  className?: string;
}

// --- REUSABLE PAGE COMPONENT ---
const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className={`demoPage bg-white h-full shadow-inner ${props.className || ''}`} ref={ref}>
      <div className="h-full w-full relative overflow-hidden">
        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full"
        >
          {props.children}
        </motion.div>
        
        {/* Page Number (Hidden if undefined) */}
        {props.number && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-mono pointer-events-none">
            - {props.number} -
          </div>
        )}
      </div>
    </div>
  );
});

// --- COVER COMPONENT ---
const Cover = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <div className="demoPage bg-[#0a0a0a] text-white h-full shadow-2xl border-l-4 border-zinc-800" ref={ref} data-density="hard">
      <div className="h-full w-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f0505] via-black to-[#1f0505] opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        
        <div className="relative z-10 text-center">
          <motion.img 
            src={LOGO_URL} 
            alt="Logo" 
            className="h-48 w-auto mb-8 mx-auto" 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1 
            className="text-5xl font-serif text-[#C5A059] mb-4"
            style={{ fontFamily: "'Tex Gyre Termes', 'Times New Roman', serif" }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            DUBAI
          </motion.h1>
          <motion.p 
            className="text-slate-300 tracking-widest text-xs uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The Future of Real Estate
          </motion.p>
        </div>
      </div>
    </div>
  );
});

export default function App() {
  const book = useRef<any>(null);
  const [currentLang, setCurrentLang] = useState('en');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
   
  const pagesContent = getPagesContent(currentLang);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const currentLangObj = LANGUAGES.find(l => l.code === currentLang);

  // --- SCROLL TO FLIP ---
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!book.current) return;
      if (e.deltaY > 50) {
        book.current.pageFlip().flipNext();
      } else if (e.deltaY < -50) {
        book.current.pageFlip().flipPrev();
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // --- CLICK OUTSIDE MENU ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- ZOOM HANDLERS ---
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.6));

  return (
    <div className="h-screen w-full bg-[#150303] flex flex-col items-center justify-center overflow-hidden relative font-sans">
      
      {/* --- CSS FOR LANDSCAPE LOCK & ANIMATIONS --- */}
      <style>{`
        .landscape-blocker { display: none; }
        @media (orientation: portrait) and (max-width: 1024px) {
          .landscape-blocker { display: flex !important; }
        }
        @keyframes rotate-phone {
          0%, 10% { transform: rotate(0deg); }
          40%, 60% { transform: rotate(90deg); }
          90%, 100% { transform: rotate(90deg); }
        }
        .animate-rotate-phone { animation: rotate-phone 2s infinite ease-in-out; }
      `}</style>

      {/* --- LANDSCAPE BLOCKER --- */}
      <div className="landscape-blocker fixed inset-0 z-[10000] bg-[#150303] flex-col items-center justify-center text-center p-8">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3a0808_0%,_#150303_100%)] z-0"></div>
         <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 mb-8 text-[#C5A059] animate-rotate-phone">
               <Smartphone size={80} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-serif text-[#C5A059] mb-4">Please Rotate Your Device</h2>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              For the best experience, please view this dossier in <strong>landscape mode</strong>.
            </p>
         </div>
      </div>

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3a0808_0%,_#150303_100%)] z-0"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] bg-[#C5A059] rounded-full blur-[120px] opacity-[0.15] animate-pulse z-0 pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[100vw] h-[100vw] max-w-[900px] max-h-[900px] bg-[#500000] rounded-full blur-[150px] opacity-40 z-0 pointer-events-none mix-blend-color-dodge"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- LANGUAGE SELECTOR --- */}
      <div className="fixed top-5 right-5 z-[200]" ref={langMenuRef}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLangMenuOpen(!isLangMenuOpen);
          }}
          className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#C5A059]/50 hover:bg-black/60 text-white px-3 py-1.5 rounded-full transition-all shadow-lg group cursor-pointer"
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

        {isLangMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-40 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden transition-all z-50">
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
        )}
      </div>

      {/* --- ZOOM CONTROLS --- */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-auto">
        <button 
          onClick={handleZoomIn}
          className="w-12 h-12 bg-black/80 backdrop-blur-md border border-white/20 rounded-full text-[#C5A059] flex items-center justify-center shadow-xl active:scale-95 transition-all hover:bg-black hover:border-[#C5A059]"
        >
          <ZoomIn size={22} />
        </button>
        <button 
          onClick={handleZoomOut}
          className="w-12 h-12 bg-black/80 backdrop-blur-md border border-white/20 rounded-full text-[#C5A059] flex items-center justify-center shadow-xl active:scale-95 transition-all hover:bg-black hover:border-[#C5A059]"
        >
          <ZoomOut size={22} />
        </button>
      </div>

      {/* --- INSTRUCTIONS --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C5A059]/50 text-xs flex flex-col items-center gap-2 animate-pulse z-20 pointer-events-none"
      >
        <MousePointer2 size={16} />
        <span>Scroll or Click Arrows to Flip</span>
      </motion.div>

      {/* --- 3D BOOK ENGINE --- */}
      <div className="z-10 transition-transform duration-300 ease-out" style={{ transform: `scale(${zoomLevel})` }}>
        <HTMLFlipBook
          key={currentLang} 
          width={350} 
          height={550}
          size="fixed" // Forces strict dimensions
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1500}
          showCover={true}
          mobileScrollSupport={false} // Disable to prevent conflicts with 2-page view
          className="shadow-2xl shadow-black/80"
          ref={book}
          style={{}} 
          startPage={0} 
          drawShadow={true} 
          flippingTime={1000} 
          // CRITICAL FIX: Forces double-page spread
          usePortrait={false} 
          startZIndex={0} 
          autoSize={true} 
          clickEventForward={true} 
          useMouseEvents={true} 
          swipeDistance={30} 
          showPageCorners={true} 
          disableFlipByClick={false}
        >
          <Cover />
          
          {/* MAP PAGES: Hide number on the last page */}
          {pagesContent.map((content: any, index: number) => {
             const isLastPage = index === pagesContent.length - 1;
             return (
                <Page key={index} number={index + 1}>
                  {content}
                </Page>
             );
          })}
          
          {/* 2. INSERT QUIZ PAGE HERE */}
          <Page number={pagesContent.length + 1}>
            <QuizPage />
          </Page>

          <Cover />
        </HTMLFlipBook>
      </div>

      {/* --- NAVIGATION ARROWS --- */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-[1200px] flex justify-between px-4 z-50 pointer-events-none">
        <button 
          onClick={() => book.current.pageFlip().flipPrev()}
          className="p-3 rounded-full bg-black/50 text-[#C5A059] border border-[#C5A059]/30 hover:bg-[#C5A059] hover:text-black transition-all pointer-events-auto shadow-lg backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => book.current.pageFlip().flipNext()}
          className="p-3 rounded-full bg-black/50 text-[#C5A059] border border-[#C5A059]/30 hover:bg-[#C5A059] hover:text-black transition-all pointer-events-auto shadow-lg backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

    </div>
  );
}