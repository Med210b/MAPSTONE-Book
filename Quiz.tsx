import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Send, RefreshCw, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const QUIZ_QUESTIONS = [
  { id: 1, q: "What is the income tax rate for individuals in Dubai?", options: ["0%", "15%", "25%"], correct: "0%" },
  { id: 2, q: "Which visa is granted for a 10-year period to investors?", options: ["Tourist Visa", "Golden Visa", "Work Permit"], correct: "Golden Visa" },
  { id: 3, q: "What is the typical net rental yield for long-term leases?", options: ["2-4%", "6-10%", "15-20%"], correct: "6-10%" },
  { id: 4, q: "Is there a capital gains tax when you sell your property?", options: ["Yes", "No", "Only for foreigners"], correct: "No" },
  { id: 5, q: "What is the primary currency of Dubai?", options: ["Riyal", "Dirham (AED)", "Dinar"], correct: "Dirham (AED)" },
  { id: 6, q: "Dubai Vision 2040 aims to increase beach length by...", options: ["50%", "100%", "400%"], correct: "400%" },
  { id: 7, q: "Can foreigners own 100% freehold property in Dubai?", options: ["Yes", "No", "Only with a partner"], correct: "Yes" },
  { id: 8, q: "Where does Dubai rank in global safety?", options: ["Top 3", "Top 50", "Top 100"], correct: "Top 3" },
  { id: 9, q: "What is the typical down payment to secure a unit?", options: ["10-20%", "50%", "5%"], correct: "10-20%" },
  { id: 10, q: "Is the UAE Dirham pegged to the US Dollar?", options: ["Yes", "No", "Floating"], correct: "Yes" }
];

export const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAnswer = (option: string) => {
    const isCorrect = option === QUIZ_QUESTIONS[currentStep].correct;
    const newScore = isCorrect ? score + 1 : score;
    
    if (isCorrect) setScore(newScore);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      setIsFinished(true);
      if (newScore >= 7) {
        triggerConfetti();
      }
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#ffffff', '#500000']
    });
  };

  if (isFinished) {
    const passed = score >= 7;
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center bg-black">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <Trophy size={60} className={`${passed ? 'text-[#C5A059]' : 'text-zinc-600'} mb-4 mx-auto`} />
          <h2 className="text-3xl font-serif text-white mb-2">Quiz Complete</h2>
          <p className="text-xl text-[#C5A059] mb-8">You scored: {score} / 10</p>

          {passed ? (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <div className="bg-[#C5A059]/20 border border-[#C5A059] p-4 rounded-lg mb-8">
                <h3 className="text-[#C5A059] font-bold text-xl uppercase tracking-tighter">🎉 Congratulations! 🎉</h3>
                <p className="text-zinc-300 text-xs mt-1">You have expert knowledge of the Dubai market.</p>
              </div>

              {!formSubmitted ? (
                <form className="space-y-3 max-w-xs mx-auto" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                  <input type="text" placeholder="Your Full Name" required className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded text-white outline-none focus:border-[#C5A059]" />
                  <input type="email" placeholder="Email Address" required className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded text-white outline-none focus:border-[#C5A059]" />
                  <button type="submit" className="w-full bg-[#C5A059] text-black font-bold py-3 rounded flex items-center justify-center gap-2 hover:bg-white transition-all">
                    <Send size={16} /> Get Investment Guide
                  </button>
                </form>
              ) : (
                <div className="text-[#C5A059] flex items-center justify-center gap-2">
                  <CheckCircle2 size={20} /> Result Saved Successfully
                </div>
              )}
            </motion.div>
          ) : (
            <button onClick={() => window.location.reload()} className="flex items-center gap-2 text-zinc-400 hover:text-white mx-auto">
              <RefreshCw size={18} /> Try Again to Pass
            </button>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-full p-8 flex flex-col justify-center bg-black">
      <div className="mb-10">
        <div className="text-[#C5A059] text-xs uppercase tracking-[0.2em] mb-2">Question {currentStep + 1} / 10</div>
        <div className="h-1 w-full bg-zinc-800 rounded-full">
          <motion.div 
            className="h-full bg-[#C5A059]" 
            initial={{ width: 0 }} 
            animate={{ width: `${((currentStep + 1) / 10) * 100}%` }} 
          />
        </div>
      </div>
      <h3 className="text-2xl font-serif text-white mb-8">{QUIZ_QUESTIONS[currentStep].q}</h3>
      <div className="space-y-4">
        {QUIZ_QUESTIONS[currentStep].options.map((opt) => (
          <button 
            key={opt} 
            onClick={() => handleAnswer(opt)} 
            className="w-full text-left p-4 rounded border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-[#C5A059] hover:text-white transition-all"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};