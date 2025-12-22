import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronDown, ZoomIn, ZoomOut, Smartphone, Volume2, VolumeX, SkipForward, X, Search, CheckCircle2 } from 'lucide-react';
import { getPagesContent, LOGO_URL, LANGUAGES, TRANSLATIONS, QUIZ_QUESTIONS, COUNTRY_CODES } from './constants';

const IntroCascade = ({ onComplete }: { onComplete: () => void }) => {
  const cards = [
    { id: 1, img: "https://i.postimg.cc/NFWkXp2k/5435design.png", title: "Vision" },
    { id: 2, img: "https://i.postimg.cc/QCHHDDt1/Untitled-design14158916.png", title: "Luxury" },
    { id: 3, img: LOGO_URL, title: "Dubai", isLogo: true }
  ];

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="fixed inset-0 z-[20000] bg-[#0a0202] flex items-center justify-center overflow-hidden perspective-2000"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2a0a0a_0%,_#000000_100%)]" />
      <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] perspective-1000 flex items-center justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ y: -1200, rotateX: 45, rotateZ: -10, z: -500, opacity: 0 }}
            animate={{ y: index * 40, rotateX: 0, rotateZ: index % 2 === 0 ? -5 : 5, z: index * 50, opacity: 1 }}
            transition={{ duration: 1.2, delay: index * 0.4, type: "spring", stiffness: 60, damping: 12 }}
            className={`absolute w-64 h-96 md:w-80 md:h-[480px] rounded-2xl shadow-2xl border-2 border-[#C5A059]/30 bg-black overflow-hidden flex items-center justify-center ${card.isLogo ? 'z-30 bg-black/90 backdrop-blur-xl' : `z-${index * 10}`}`}
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)' }}
          >
            <div className="absolute inset-0 opacity-60 bg-black/20" />
            <img src={card.img} alt={card.title} className={`w-full h-full object-cover ${card.isLogo ? 'p-12 object-contain mix-blend-screen' : ''}`} />
            <motion.div initial={{ x: '-100%' }} animate={{ x: '200%' }} transition={{ repeat: Infinity, duration: 3, delay: 1 + index }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </motion.div>
        ))}
      </div>
      <motion.div onAnimationComplete={onComplete} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5, duration: 0.5 }} className="hidden" />
      <button onClick={onComplete} className="absolute top-6 right-6 text-[#C5A059] flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white transition-colors z-[20001]">Skip Intro <SkipForward size={14} /></button>
    </motion.div>
  );
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentLang, setCurrentLang] = useState('en');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // QUIZ STATES
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState<'start' | 'question' | 'result-pass' | 'result-fail' | 'form' | 'final'>('start');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [phoneCode, setPhoneCode] = useState('+971');
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const [searchCode, setSearchCode] = useState('');

  const langMenuRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isFlipping, setIsFlipping] = useState(false);
  const [flipTrigger, setFlipTrigger] = useState(false);

  const playFlipSound = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  
  const pagesContent = getPagesContent(currentLang, () => {
      setShowQuiz(true);
      setQuizStep('start');
      setScore(0);
      setCurrentQIndex(0);
  });
  
  const totalSpreads = Math.ceil(pagesContent.length / 2);
  const isLastPageSingle = pagesContent.length % 2 !== 0;
  const isAtLastSpread = currentPage === totalSpreads - 1;
  const currentLangObj = LANGUAGES.find(l => l.code === currentLang);

  const handleOpenBook = () => {
    playFlipSound();
    setShowPages(true); 
    setTimeout(() => setIsOpen(true), 100); 
    setCurrentPage(0);
  };

  const nextPage = () => {
    if (isFlipping || currentPage >= totalSpreads - 1) return;
    playFlipSound();
    setIsFlipping(true);
    setFlipTrigger(false);
    setTimeout(() => setFlipTrigger(true), 20);
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setIsFlipping(false);
    }, 800);
  };

  const prevPage = () => {
    if (isFlipping || currentPage <= 0) return;
    playFlipSound();
    setIsFlipping(true);
    setFlipTrigger(false);
    setTimeout(() => setFlipTrigger(true), 20);
    setTimeout(() => {
      setCurrentPage(prev => prev - 1);
      setIsFlipping(false);
    }, 800);
  };

  const zoomIn = () => setZoomLevel(p => Math.min(p + 0.2, 2.0));
  const zoomOut = () => setZoomLevel(p => Math.max(p - 0.2, 0.5));

  const handleAnswer = (optionIndex: number) => {
      const isCorrect = optionIndex === QUIZ_QUESTIONS[currentQIndex].correct;
      if (isCorrect) setScore(s => s + 1);
      
      if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
          setCurrentQIndex(p => p + 1);
      } else {
          const finalScore = isCorrect ? score + 1 : score;
          if (finalScore >= 7) setQuizStep('result-pass');
          else setQuizStep('result-fail');
      }
  };

  const filteredCodes = COUNTRY_CODES.filter(c => 
      c.country.toLowerCase().includes(searchCode.toLowerCase()) || c.code.includes(searchCode)
  );

  return (
    <div className="min-h-screen bg-[#150303] flex items-center justify-center p-0 relative font-sans overflow-hidden">
      
      <audio ref={audioRef} src="https://www.soundjay.com/books/sounds/book-page-turn-01.mp3" preload="auto" />

      <style>{`
        .book-wrapper-3d { perspective: 2000px; display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease-out; will-change: transform; }
        .book-container { transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); transform-style: preserve-3d; position: relative; }
        .book-shadow { box-shadow: 0 30px 60px -10px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5) inset; }
        @media (min-width: 901px) { .book-open { transform: translateX(50%) rotateY(0deg); } }
        @media (max-width: 900px) { .book-open { transform: translateX(-50%) rotateY(0deg) !important; } }
        .page-flipper { transform-style: preserve-3d; transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000); transform-origin: left; z-index: 100; position: absolute; right: 0; top: 0; width: 50%; height: 100%; }
        .flip-next { transform: rotateY(-180deg); }
        .page-sheen { position: absolute; inset: 0; background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%); transform: translateX(-100%); transition: transform 0.8s; pointer-events: none; z-index: 110; }
        .flip-next .page-sheen { transform: translateX(100%); }
        .page-face { backface-visibility: hidden; position: absolute; inset: 0; background: white; overflow: hidden; background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png"); }
        .spine-shadow-left { box-shadow: inset -20px 0 30px -10px rgba(0,0,0,0.3); }
        .spine-shadow-right { box-shadow: inset 20px 0 30px -10px rgba(0,0,0,0.3); }
        .page-back { transform: rotateY(180deg); }
      `}</style>

      <AnimatePresence>{showIntro && <IntroCascade onComplete={() => setShowIntro(false)} />}</AnimatePresence>

      <AnimatePresence>
        {showQuiz && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[50000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-zinc-900 border border-[#C5A059]/30 rounded-2xl p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
                    <button onClick={() => setShowQuiz(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white"><X /></button>
                    
                    {quizStep === 'start' && (
                        <div className="text-center space-y-6 py-4">
                            <h2 className="text-2xl font-serif text-[#C5A059]">{t.quiz.title}</h2>
                            <p className="text-slate-300">{t.quiz.subtitle}</p>
                            <button onClick={() => setQuizStep('question')} className="w-full py-3 bg-[#C5A059] text-black font-bold rounded hover:scale-105 transition-transform">{t.quiz.startBtn}</button>
                        </div>
                    )}

                    {quizStep === 'question' && (
                        <div className="space-y-6">
                             <div className="flex justify-between text-xs text-slate-500"><span>Question {currentQIndex + 1} / 10</span></div>
                            <h3 className="text-lg text-white font-bold">{ (QUIZ_QUESTIONS[currentQIndex].q as any)[currentLang] || (QUIZ_QUESTIONS[currentQIndex].q as any)['en'] }</h3>
                            <div className="space-y-3">
                                {((QUIZ_QUESTIONS[currentQIndex].options as any)[currentLang] || (QUIZ_QUESTIONS[currentQIndex].options as any)['en']).map((opt: string, idx: number) => (
                                    <button key={idx} onClick={() => handleAnswer(idx)} className="w-full text-left p-4 bg-white/5 border border-white/10 rounded hover:bg-[#C5A059] hover:text-black transition-colors text-sm text-slate-200">{opt}</button>
                                ))}
                            </div>
                        </div>
                    )}

                    {quizStep === 'result-fail' && (
                         <div className="text-center space-y-6 py-4">
                            <div className="text-4xl">😢</div>
                            <h2 className="text-2xl font-bold text-white">{t.quiz.failTitle}</h2>
                            <p className="text-slate-400">Score: {score} / 10</p>
                            <p className="text-slate-300 text-sm">{t.quiz.failMsg}</p>
                            <button onClick={() => { setScore(0); setCurrentQIndex(0); setQuizStep('question'); }} className="w-full py-3 bg-white/20 text-white font-bold rounded">{t.quiz.failTitle}</button>
                        </div>
                    )}

                    {quizStep === 'result-pass' && (
                         <div className="text-center space-y-6 py-4">
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl">😎</motion.div>
                            <h2 className="text-2xl font-bold text-[#C5A059]">{t.quiz.passTitle}</h2>
                            <div className="bg-white/10 p-4 rounded-lg inline-block w-full"><p className="text-3xl font-bold text-white">{score} / 10</p></div>
                            <button onClick={() => setQuizStep('form')} className="w-full py-3 bg-[#C5A059] text-black font-bold rounded hover:scale-105 transition-transform">{t.quiz.formTitle}</button>
                        </div>
                    )}

                    {quizStep === 'form' && (
                        <div className="space-y-4">
                            <h3 className="text-xl text-[#C5A059] text-center mb-4">{t.quiz.formTitle}</h3>
                            <input placeholder={t.quiz.name} className="w-full bg-black/40 border border-white/20 rounded p-3 text-white" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            <input placeholder={t.quiz.email} className="w-full bg-black/40 border border-white/20 rounded p-3 text-white" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                            <div className="flex gap-2 relative">
                                <div className="w-1/3 relative">
                                    <button onClick={() => setIsCodeOpen(!isCodeOpen)} className="w-full h-full bg-black/40 border border-white/20 rounded p-3 text-white text-xs flex justify-between items-center">{phoneCode} <ChevronDown size={14}/></button>
                                    {isCodeOpen && (
                                        <div className="absolute top-full left-0 w-[250px] bg-zinc-800 max-h-60 overflow-y-auto z-50 rounded shadow-xl border border-white/10 mt-1">
                                            <div className="p-2 sticky top-0 bg-zinc-800 border-b border-white/10"><input autoFocus placeholder="Search..." className="w-full bg-black/40 text-white text-xs p-2 rounded" value={searchCode} onChange={e => setSearchCode(e.target.value)} /></div>
                                            {filteredCodes.map(c => (
                                                <button key={c.country} onClick={() => { setPhoneCode(c.code); setIsCodeOpen(false); }} className="w-full text-left p-3 text-xs text-slate-300 hover:bg-white/10 border-b border-white/5 flex items-center gap-2"><span>{c.flag}</span> <span className="text-[#C5A059] font-mono">{c.code}</span> <span className="truncate">{c.country}</span></button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <input placeholder={t.quiz.phone} className="w-2/3 bg-black/40 border border-white/20 rounded p-3 text-white" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                            <button onClick={() => setQuizStep('final')} className="w-full py-3 bg-[#C5A059] text-black font-bold rounded mt-4">{t.quiz.submit}</button>
                        </div>
                    )}

                    {quizStep === 'final' && (
                        <div className="text-center space-y-6 py-8">
                             <CheckCircle2 size={64} className="text-[#C5A059] mx-auto animate-bounce" />
                             <h2 className="text-2xl md:text-3xl font-serif text-white">{t.quiz.final} <br/><span className="text-[#C5A059] font-bold mt-2 block uppercase tracking-wide">{formData.name}</span></h2>
                             <p className="text-slate-400 text-sm leading-relaxed">We will contact you shortly.</p>
                             <button onClick={() => setShowQuiz(false)} className="text-xs text-slate-500 underline mt-4">Close</button>
                        </div>
                    )}
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {showPages && (
        <>
          <button onClick={prevPage} disabled={currentPage === 0 || isFlipping} className={`fixed left-2 md:left-8 top-1/2 -translate-y-1/2 bg-black/80 p-4 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all z-[9000] border border-[#C5A059]/30 backdrop-blur-md shadow-2xl active:scale-90 ${(currentPage === 0 || isFlipping) ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}><ArrowLeft size={24}/></button>
          <button onClick={nextPage} disabled={currentPage >= totalSpreads - 1 || isFlipping} className={`fixed right-2 md:right-8 top-1/2 -translate-y-1/2 bg-black/80 p-4 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all z-[9000] border border-[#C5A059]/30 backdrop-blur-md shadow-2xl active:scale-90 ${(currentPage >= totalSpreads - 1 || isFlipping) ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}><ArrowRight size={24}/></button>
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9000] bg-black/60 px-4 py-1 rounded-full border border-white/10 text-[10px] text-[#C5A059] font-mono">{currentPage + 1} / {totalSpreads}</div>
        </>
      )}

      <div className="fixed inset-0 z-[10000] bg-[#150303] flex-col items-center justify-center text-[#C5A059] p-8 text-center hidden portrait:flex lg:portrait:hidden">
        <Smartphone size={64} className="animate-pulse mb-6 rotate-90" />
        <h2 className="text-2xl font-serif font-bold uppercase tracking-widest mb-4">Please Rotate</h2>
        <p className="text-slate-400 text-sm max-w-xs">Landscape mode required.</p>
      </div>

      <div className="fixed top-2 right-2 z-[9999] flex gap-2" ref={langMenuRef}>
        <button onClick={() => setSoundEnabled(!soundEnabled)} className="w-8 h-8 flex items-center justify-center bg-black/60 rounded-full text-[#C5A059] border border-[#C5A059]/30">{soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}</button>
        <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center gap-2 bg-black/80 backdrop-blur-xl border-2 border-[#C5A059]/40 text-white px-3 py-1.5 rounded-full shadow-lg">
          {currentLangObj && <img src={`https://flagcdn.com/w40/${currentLangObj.flag}.png`} className="w-5 h-3 rounded-sm object-cover" alt="flag" />}
          <span className="text-xs font-bold uppercase tracking-widest">{currentLang}</span><ChevronDown size={14} className={`text-[#C5A059] ${isLangMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        {isLangMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-32 bg-black/95 border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md">
            {LANGUAGES.map(lang => (
              <button key={lang.code} onClick={() => { setCurrentLang(lang.code); setIsLangMenuOpen(false); }} className={`w-full text-left px-3 py-2 text-[10px] flex items-center gap-2 border-b border-white/5 ${currentLang === lang.code ? 'bg-[#C5A059] text-black font-bold' : 'text-white'}`}>
                <img src={`https://flagcdn.com/w40/${lang.flag}.png`} className="w-4 h-3 rounded-xs" alt={lang.name} /> {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-3">
        <button onClick={zoomIn} className="w-10 h-10 bg-black/80 border border-[#C5A059] rounded-full text-[#C5A059] flex items-center justify-center shadow-2xl active:scale-90 transition-transform"><ZoomIn size={20} /></button>
        <button onClick={zoomOut} className="w-10 h-10 bg-black/80 border border-[#C5A059] rounded-full text-[#C5A059] flex items-center justify-center shadow-2xl active:scale-90 transition-transform"><ZoomOut size={20} /></button>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: showIntro ? 0 : 1 }} transition={{ duration: 1 }} className="book-wrapper-3d" style={{ transform: `scale(${zoomLevel})` }}>
        <div className={`relative h-[55vh] w-[35vh] md:h-[650px] md:w-[450px] book-container ${isOpen && !(isAtLastSpread && isLastPageSingle) ? 'book-open' : ''}`}>
            {!isOpen && (
            <div className="book-shadow absolute inset-0 w-full h-full bg-black text-white rounded-r-lg shadow-2xl flex flex-col items-center p-4 cursor-pointer border-l-4 border-zinc-900 overflow-hidden" onClick={handleOpenBook}>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
                <img src={LOGO_URL} className="h-16 md:h-48 mt-6 md:mt-12 mix-blend-screen drop-shadow-2xl" alt="Logo" />
                <h1 className="text-xl md:text-4xl font-serif text-[#C5A059] mt-4 md:mt-8 tracking-[0.2em] uppercase">Dubai</h1>
                <p className="text-slate-400 mt-4 text-center text-[10px] md:text-sm font-light tracking-wide">{t.cover.tagline}</p>
                <button className="mt-auto bg-[#C5A059] text-black px-6 py-2 md:px-10 md:py-4 text-xs md:text-base font-bold rounded-full hover:scale-105 transition-transform shadow-[0_10px_20px_rgba(197,160,89,0.3)]">{t.cover.openButton}</button>
            </div>
            )}

            {showPages && (
                <div className={`book-shadow absolute inset-0 h-full flex bg-white rounded-lg shadow-2xl overflow-hidden border border-zinc-200 ${isAtLastSpread && isLastPageSingle ? 'w-full' : 'w-[200%]'}`}>
                    <div className={`${isAtLastSpread && isLastPageSingle ? 'w-full' : 'w-1/2 border-r border-slate-200 spine-shadow-left'} h-full relative`}>
                        {pagesContent[currentPage * 2]}
                    </div>
                    {!(isAtLastSpread && isLastPageSingle) && (
                        <div className="w-1/2 h-full relative spine-shadow-right">
                            {pagesContent[currentPage * 2 + 1]}
                        </div>
                    )}
                    {isFlipping && !(isAtLastSpread && isLastPageSingle) && (
                    <div className={`page-flipper ${flipTrigger ? 'flip-next' : ''}`}>
                        <div className="page-face bg-white border-l shadow-inner spine-shadow-right"><div className="page-sheen"></div>{pagesContent[currentPage * 2 + 1]}</div>
                        <div className="page-face page-back bg-white border-r shadow-inner spine-shadow-left"><div className="page-sheen"></div>{currentPage + 1 < totalSpreads ? pagesContent[(currentPage + 1) * 2] : null}</div>
                    </div>
                    )}
                </div>
            )}
        </div>
      </motion.div>
    </div>
  );
}