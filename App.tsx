import React, { useRef, useState, useEffect, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MousePointer2, ZoomIn, ZoomOut, ChevronDown, Smartphone } from 'lucide-react';
import { getPagesContent, LOGO_URL, LANGUAGES } from './constants';

// --- REUSABLE PAGE COMPONENT ---
interface PageProps {
  children: React.ReactNode;
  number?: number; 
  className?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className={`demoPage bg-white h-full shadow-inner ${props.className || ''}`} ref={ref}>
      <div className="h-full w-full relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full"
        >
          {props.children}
        </motion.div>
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            DUBAI
          </motion.h1>
          <motion.p className="text-slate-300 tracking-widest text-xs uppercase">
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
  const [zoomLevel, setZoomLevel] = useState(1);
  
  const pagesContent = getPagesContent(currentLang);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.6));

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!book.current) return;
      if (e.deltaY > 50) book.current.pageFlip().flipNext();
      else if (e.deltaY < -50) book.current.pageFlip().flipPrev();
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="h-screen w-full bg-[#150303] flex flex-col items-center justify-center overflow-hidden relative font-sans">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3a0808_0%,_#150303_100%)] z-0"></div>

      {/* --- ZOOM CONTROLS (z-[9999] Fix) --- */}
      <div className="fixed bottom-10 right-10 z-[9999] flex flex-col gap-4 pointer-events-auto">
        <button 
          onClick={handleZoomIn}
          className="w-14 h-14 bg-[#C5A059] text-black rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-all hover:bg-white"
        >
          <ZoomIn size={28} />
        </button>
        <button 
          onClick={handleZoomOut}
          className="w-14 h-14 bg-black/80 border-2 border-[#C5A059] text-[#C5A059] rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-all hover:bg-[#C5A059] hover:text-black"
        >
          <ZoomOut size={28} />
        </button>
      </div>

      <div className="z-10 transition-transform duration-300 ease-out" style={{ transform: `scale(${zoomLevel})` }}>
        <HTMLFlipBook
          // CRITICAL: Forces reset when count changes
          key={`${currentLang}-${pagesContent.length}`} 
          width={350} 
          height={550}
          size="fixed"
          showCover={true}
          usePortrait={false} 
          ref={book}
          renderOnlyPageLengthChange={true} 
          mobileScrollSupport={false}
          className="shadow-2xl shadow-black/80"
        >
          <Cover />
          
          {pagesContent.map((content: any, index: number) => {
             // Disable numbering on the Quiz and last pages
             const isExtra = index >= 10; 
             return (
                <Page key={`page-${index}`} number={isExtra ? undefined : index + 1}>
                  {content}
                </Page>
             );
          })}
          
          <Cover />
        </HTMLFlipBook>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-[1200px] flex justify-between px-4 z-50 pointer-events-none">
        <button onClick={() => book.current.pageFlip().flipPrev()} className="p-3 rounded-full bg-black/50 text-[#C5A059] border border-[#C5A059]/30 pointer-events-auto shadow-lg backdrop-blur-sm">
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => book.current.pageFlip().flipNext()} className="p-3 rounded-full bg-black/50 text-[#C5A059] border border-[#C5A059]/30 pointer-events-auto shadow-lg backdrop-blur-sm">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}