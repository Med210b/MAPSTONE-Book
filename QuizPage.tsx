import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Trophy, X, ChevronDown, Search } from 'lucide-react';
import { LOGO_URL, APP_TEXT, QUIZ_QUESTIONS, COUNTRY_CODES } from './constants';

interface QuizProps { onClose: () => void; lang: string; }

export default function QuizPage({ onClose, lang }: QuizProps) {
  const t = APP_TEXT[lang] || APP_TEXT['en'];
  const [step, setStep] = useState<'start' | 'quiz' | 'fail' | 'lead' | 'success' | 'funny'>('start');
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
   
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [phoneCode, setPhoneCode] = useState('+971');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const [searchCode, setSearchCode] = useState('');

  useEffect(() => {
    let timer: any;
    if (step === 'quiz' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && step === 'quiz') {
      finishQuiz(score);
    }
    return () => clearInterval(timer);
  }, [step, timeLeft, score]);

  const handleStart = () => { setStep('quiz'); setTimeLeft(60); setCurrentQ(0); setScore(0); };
  const finishQuiz = (finalScore: number) => { if (finalScore >= 7) setStep('funny'); else setStep('fail'); };

  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === QUIZ_QUESTIONS[currentQ].correctAnswer;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);
    if (currentQ < QUIZ_QUESTIONS.length - 1) setCurrentQ(c => c + 1);
    else finishQuiz(newScore);
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fullPhone = `${phoneCode} ${phoneNumber}`;
    try {
      await fetch("https://formsubmit.co/ajax/contact@mapstonegroup.com", {
        method: "POST", 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name: leadName, 
            email: leadEmail, 
            phone: fullPhone, 
            score: `${score}/10`, 
            language: lang,
            subject: `New VIP Winner - Score: ${score}/10` 
        })
      });
      setStep('success');
    } catch (e) { setStep('success'); } finally { setIsSubmitting(false); }
  };

  const filteredCodes = COUNTRY_CODES.filter(c => 
      c.country.toLowerCase().includes(searchCode.toLowerCase()) || c.code.includes(searchCode)
  );

  const currentQuestionData = QUIZ_QUESTIONS[currentQ];
  const questionText = (currentQuestionData.question as any)[lang] || (currentQuestionData.question as any)['en'];

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
        {/* Added max-h-[90vh] and overflow-y-auto to fix landscape mobile issues */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl p-4 md:p-6 relative shadow-2xl max-h-[95vh] overflow-y-auto custom-scrollbar"
        >
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white z-50"><X size={24} /></button>
            <img src={LOGO_URL} alt="Logo" className="h-8 md:h-10 mx-auto mb-4 md:mb-6 opacity-80" />
            
            {step === 'start' && (
                <div className="text-center space-y-4 md:space-y-6">
                    <h3 className="text-xl md:text-2xl font-serif text-[#C5A059]">{t.quizTitle}</h3>
                    <p className="text-slate-300 text-sm">{t.quizSubtitle}</p>
                    <button onClick={handleStart} className="w-full py-3 bg-[#C5A059] text-black font-bold rounded transition-transform active:scale-95">{t.quizBtn}</button>
                </div>
            )}

            {step === 'quiz' && (
                <div className="space-y-4 md:space-y-6">
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                          <span>{t.questionProgress} {currentQ + 1} / {QUIZ_QUESTIONS.length}</span>
                          <span className="font-mono text-[#C5A059]">{timeLeft}s</span>
                    </div>
                    <h3 className="text-base md:text-lg text-white font-medium min-h-[50px] md:min-h-[60px] flex items-center">{questionText}</h3>
                    <div className="space-y-2 md:space-y-3">
                        {currentQuestionData.options.map((opt: string, idx: number) => (
                        <button key={idx} onClick={() => handleAnswer(idx)} className="w-full text-left p-3 md:p-4 rounded bg-white/5 border border-white/10 hover:border-[#C5A059] hover:bg-white/10 text-slate-300 text-sm transition-all">{opt}</button>
                        ))}
                    </div>
                </div>
            )}

            {step === 'funny' && (
                <div className="text-center space-y-4 md:space-y-6">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} transition={{ type: "spring" }}>
                        <div className="text-5xl md:text-6xl">😎</div>
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#C5A059]">{t.funnyTitle}</h3>
                    <div className="bg-white/10 p-3 md:p-4 rounded-lg">
                        <p className="text-white text-base md:text-lg">Score: {score}/10</p>
                    </div>
                    <p className="text-lg md:text-xl font-bold text-white py-2 md:py-4">{t.funnyQ}</p>
                    <button onClick={() => setStep('lead')} className="w-full py-3 md:py-4 bg-[#C5A059] text-black font-bold rounded-lg hover:scale-105 transition-transform">{t.funnyBtn}</button>
                </div>
            )}

            {step === 'fail' && (
                <div className="text-center space-y-4 md:space-y-6">
                    <XCircle size={64} className="text-red-500 mx-auto" />
                    <h3 className="text-xl text-white">{t.resultFailTitle}</h3>
                    <p className="text-white">Score: {score}/10</p>
                    <button onClick={handleStart} className="w-full py-3 bg-white/10 text-white rounded font-bold">{t.retryBtn}</button>
                </div>
            )}

            {step === 'lead' && (
                <form onSubmit={submitLead} className="space-y-3 md:space-y-4">
                    <Trophy size={48} className="text-[#C5A059] mx-auto mb-2" />
                    <h3 className="text-lg md:text-xl text-center text-white">{t.resultPassTitle}</h3>
                     
                    <div className="space-y-3">
                        <input required placeholder={t.labelName} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white outline-none focus:border-[#C5A059] text-sm" value={leadName} onChange={e => setLeadName(e.target.value)} />
                        <input required type="email" placeholder={t.labelEmail} className="w-full bg-black/40 border border-white/10 rounded p-3 text-white outline-none focus:border-[#C5A059] text-sm" value={leadEmail} onChange={e => setLeadEmail(e.target.value)} />
                        
                        <div className="flex gap-2">
                            <div className="relative w-1/3">
                                <button type="button" onClick={() => setIsCodeOpen(!isCodeOpen)} className="w-full h-full bg-black/40 border border-white/10 rounded p-3 text-white flex items-center justify-between text-xs">
                                    <span>{phoneCode}</span><ChevronDown size={14} />
                                </button>
                                {isCodeOpen && (
                                    <div className="absolute top-full left-0 w-[200px] bg-zinc-800 border border-white/10 max-h-48 overflow-y-auto z-[100] rounded mt-1 shadow-2xl">
                                        <div className="p-2 sticky top-0 bg-zinc-800 border-b border-white/10 flex items-center gap-2">
                                            <Search size={12} className="text-slate-500" />
                                            <input autoFocus placeholder={t.searchCountry} className="w-full bg-black/20 text-white text-[10px] p-2 outline-none" value={searchCode} onChange={e => setSearchCode(e.target.value)} />
                                        </div>
                                        {filteredCodes.map(c => (
                                            <button key={c.country} type="button" onClick={() => { setPhoneCode(c.code); setIsCodeOpen(false); }} className="w-full text-left p-3 text-[10px] text-slate-300 hover:bg-white/10 flex gap-2 border-b border-white/5">
                                                <span>{c.flag}</span> <span className="flex-1">{c.country}</span> <span>{c.code}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <input required placeholder={t.labelPhone} className="w-2/3 bg-black/40 border border-white/10 rounded p-3 text-white outline-none focus:border-[#C5A059] text-sm" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                        </div>
                    </div>
                    
                    <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-[#C5A059] text-black font-bold rounded disabled:opacity-50 text-sm md:text-base">{isSubmitting ? t.sending : t.submitBtn}</button>
                </form>
            )}

            {step === 'success' && (
                <div className="text-center space-y-4 md:space-y-6">
                    <CheckCircle size={64} className="text-[#C5A059] mx-auto" />
                    <h3 className="text-xl md:text-2xl font-serif text-white">{t.successTitle}</h3>
                    <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                        <p className="text-slate-300 text-sm mb-1">{t.successScore}</p>
                        <p className="text-3xl font-bold text-[#C5A059]">{score} / 10</p>
                    </div>
                    <p className="text-slate-300 italic text-sm px-4 leading-relaxed">
                        "{t.successFunny}"
                    </p>
                    <button onClick={onClose} className="text-xs text-slate-500 hover:text-white underline mt-4">Close</button>
                </div>
            )}
        </motion.div>
    </div>
  );
}