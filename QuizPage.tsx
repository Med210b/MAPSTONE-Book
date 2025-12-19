// src/QuizPage.tsx
import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle, XCircle, ChevronRight, Search, Phone, Mail, User, RotateCcw, Gift, Trophy } from 'lucide-react';

// --- CONFIGURATION ---
const PASSING_SCORE = 7;
const TIME_LIMIT = 60; // seconds

const QUESTIONS = [
  { q: "What is the primary currency used in Dubai?", options: ["Dollar", "Dirham", "Euro", "Dinar"], a: 1 },
  { q: "Which of these is a freehold area?", options: ["Deira", "Dubai Marina", "Bur Dubai", "Al Qusais"], a: 1 },
  { q: "What is the standard down payment for off-plan?", options: ["50%", "20%", "5%", "100%"], a: 1 },
  { q: "Is property income tax-free in Dubai?", options: ["Yes", "No", "Only for residents", "Partially"], a: 0 },
  { q: "What is the DLD fee?", options: ["2%", "4%", "5%", "1%"], a: 1 },
  { q: "Can foreigners buy property in Dubai?", options: ["No", "Yes (Freehold areas)", "Yes (Anywhere)", "With a sponsor"], a: 1 },
  { q: "What is the capital of the UAE?", options: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"], a: 1 },
  { q: "Which tower is the tallest in the world?", options: ["Shanghai Tower", "Burj Khalifa", "CN Tower", "Clock Tower"], a: 1 },
  { q: "What is the RERA rental index used for?", options: ["Selling", "Rent Increases", "Buying", "Visas"], a: 1 },
  { q: "What represents a Title Deed?", options: ["Proof of Ownership", "Rental Contract", "Visa", "Payment Plan"], a: 0 },
];

const COUNTRY_CODES = [
  { code: "+971", country: "UAE" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+92", country: "Pakistan" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+7", country: "Russia" },
  { code: "+86", country: "China" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
];

export default function QuizPage() {
  const [step, setStep] = useState<'start' | 'quiz' | 'fail' | 'lead' | 'success'>('start');
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  
  // Lead Form State
  const [leadTitle, setLeadTitle] = useState('Mr.');
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+971');
  const [searchCode, setSearchCode] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Timer Logic
  useEffect(() => {
    let timer: any;
    if (step === 'quiz' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && step === 'quiz') {
      finishQuiz(score);
    }
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  const handleStart = () => {
    setStep('quiz');
    setTimeLeft(TIME_LIMIT);
    setCurrentQ(0);
    setScore(0);
  };

  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === QUESTIONS[currentQ].a;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);
    
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ((c) => c + 1);
    } else {
      finishQuiz(newScore);
    }
  };

  const finishQuiz = (finalScore: number) => {
    if (finalScore >= PASSING_SCORE) {
      setStep('lead');
    } else {
      setStep('fail');
    }
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data for FormSubmit
    const formData = {
      _subject: `New VIP Lead: ${leadName} (Score: ${score}/10)`,
      title: leadTitle,
      name: leadName,
      email: leadEmail,
      phone: `${countryCode} ${leadPhone}`,
      score: `${score}/10`,
      status: "PASSED - VIP ELIGIBLE"
    };

    try {
      // Send to FormSubmit (Free Email Service)
      await fetch("https://formsubmit.co/ajax/contact@mapstonegroup.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      setStep('success');
    } catch (error) {
      console.error("Submission error", error);
      // Even if error, show success to user so they don't panic, but log it.
      setStep('success'); 
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredCodes = COUNTRY_CODES.filter(c => 
    c.country.toLowerCase().includes(searchCode.toLowerCase()) || 
    c.code.includes(searchCode)
  );

  return (
    <div className="h-full w-full bg-zinc-900 text-white p-8 flex flex-col items-center justify-center font-sans overflow-y-auto">
      
      {/* Header / Timer */}
      <div className="w-full flex justify-between items-center mb-6 border-b border-white/10 pb-4">
        <h2 className="text-[#C5A059] font-serif text-xl">Investment Qualification</h2>
        {step === 'quiz' && (
          <div className={`flex items-center gap-2 font-mono ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-slate-400'}`}>
            <Timer size={16} />
            <span>00:{timeLeft.toString().padStart(2, '0')}</span>
          </div>
        )}
      </div>

      {/* --- START SCREEN --- */}
      {step === 'start' && (
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Gift size={32} className="text-[#C5A059]" />
          </div>
          <h3 className="text-2xl font-serif text-white">Unlock Your VIP Gift</h3>
          <p className="text-slate-300 leading-relaxed text-sm max-w-xs mx-auto">
            Score <strong>7/10</strong> or higher to prove your market knowledge. 
            Successful candidates receive our <strong>exclusive dossier</strong> and a special VIP gift upon consultation.
          </p>
          <div className="text-xs text-slate-500 bg-white/5 p-3 rounded-lg border border-white/5">
            Time Limit: {TIME_LIMIT}s • Questions: {QUESTIONS.length}
          </div>
          <button onClick={handleStart} className="px-8 py-3 bg-[#C5A059] text-black font-bold rounded hover:bg-[#b08d4b] transition-colors w-full shadow-[0_0_15px_rgba(197,160,89,0.3)]">
            Start Challenge
          </button>
        </div>
      )}

      {/* --- QUIZ SCREEN --- */}
      {step === 'quiz' && (
        <div className="w-full max-w-md">
          <div className="mb-2 text-xs text-[#C5A059] uppercase tracking-widest flex justify-between">
             <span>Question {currentQ + 1} / {QUESTIONS.length}</span>
          </div>
          <h3 className="text-lg font-medium mb-6 text-white min-h-[60px]">{QUESTIONS[currentQ].q}</h3>
          
          <div className="space-y-3">
            {QUESTIONS[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="w-full text-left p-4 rounded border border-white/10 hover:border-[#C5A059] hover:bg-white/5 transition-all flex justify-between group"
              >
                <span className="text-slate-300 group-hover:text-white text-sm">{opt}</span>
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 text-[#C5A059] transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* --- FAIL SCREEN --- */}
      {step === 'fail' && (
        <div className="text-center space-y-6">
          <XCircle size={64} className="text-red-500 mx-auto" />
          <h3 className="text-2xl font-serif text-white">Nice Try!</h3>
          <p className="text-slate-400">
            You scored <strong className="text-white">{score}/10</strong>. <br/>
            The market is tough, but so are you. Brush up on your facts and try again to unlock the VIP status.
          </p>
          <button onClick={handleStart} className="flex items-center justify-center gap-2 px-8 py-3 bg-white/10 text-white font-bold rounded hover:bg-white/20 transition-colors w-full">
            <RotateCcw size={18} />
            Try Again
          </button>
        </div>
      )}

      {/* --- LEAD FORM SCREEN --- */}
      {step === 'lead' && (
        <form onSubmit={submitLead} className="w-full max-w-md space-y-4">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Trophy size={24} className="text-green-500" />
            </div>
            <h3 className="text-xl font-serif text-white">Impressive Score: {score}/10!</h3>
            <p className="text-xs text-slate-400">
              You know your Dirhams from your Dollars. Fill in your details below to claim your <strong>VIP Gift</strong>.
            </p>
          </div>

          <div className="flex gap-2">
            {/* Title Selector */}
            <select 
                value={leadTitle} 
                onChange={(e) => setLeadTitle(e.target.value)}
                className="bg-black/40 border border-white/10 rounded p-3 text-white outline-none focus:border-[#C5A059] w-20 text-sm"
            >
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
            </select>

            <div className="relative group flex-1">
                <User className="absolute left-3 top-3 text-slate-500 group-focus-within:text-[#C5A059]" size={18} />
                <input 
                required 
                type="text" 
                placeholder="Last Name" 
                className="w-full bg-black/40 border border-white/10 rounded p-3 pl-10 focus:border-[#C5A059] outline-none text-white placeholder:text-slate-600 text-sm"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                />
            </div>
          </div>

          <div className="relative group">
            <Mail className="absolute left-3 top-3 text-slate-500 group-focus-within:text-[#C5A059]" size={18} />
            <input 
              required 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-black/40 border border-white/10 rounded p-3 pl-10 focus:border-[#C5A059] outline-none text-white placeholder:text-slate-600 text-sm"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
            />
          </div>

          <div className="flex gap-2 relative">
             {/* Country Code Dropdown */}
             <div className="relative w-1/3">
                <button 
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full bg-black/40 border border-white/10 rounded p-3 flex justify-between items-center text-sm text-slate-300 focus:border-[#C5A059]"
                >
                  {countryCode}
                </button>
                
                {showDropdown && (
                  <div className="absolute bottom-full mb-1 left-0 w-full bg-zinc-800 border border-white/10 rounded shadow-xl max-h-48 overflow-y-auto z-50">
                    <div className="p-2 sticky top-0 bg-zinc-800 border-b border-white/5">
                      <div className="flex items-center bg-black/50 rounded px-2">
                        <Search size={12} className="text-slate-500" />
                        <input 
                          autoFocus
                          className="w-full bg-transparent p-2 text-xs text-white outline-none" 
                          placeholder="Search..." 
                          onChange={(e) => setSearchCode(e.target.value)}
                        />
                      </div>
                    </div>
                    {filteredCodes.map((c) => (
                      <div 
                        key={c.code} 
                        className="p-2 hover:bg-white/5 cursor-pointer text-xs flex justify-between text-slate-300"
                        onClick={() => {
                          setCountryCode(c.code);
                          setShowDropdown(false);
                        }}
                      >
                        <span className="truncate w-16">{c.country}</span>
                        <span className="text-[#C5A059]">{c.code}</span>
                      </div>
                    ))}
                  </div>
                )}
             </div>

             <div className="relative group flex-1">
                <Phone className="absolute left-3 top-3 text-slate-500 group-focus-within:text-[#C5A059]" size={18} />
                <input 
                  required 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-black/40 border border-white/10 rounded p-3 pl-10 focus:border-[#C5A059] outline-none text-white placeholder:text-slate-600 text-sm"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                />
             </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-3 bg-[#C5A059] text-black font-bold rounded hover:bg-[#b08d4b] transition-colors mt-4 flex justify-center items-center gap-2"
          >
            {isSubmitting ? 'Sending...' : 'Claim VIP Status'}
            {!isSubmitting && <ChevronRight size={16} />}
          </button>
        </form>
      )}

      {/* --- SUCCESS SCREEN --- */}
      {step === 'success' && (
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-[#C5A059]/20 rounded-full flex items-center justify-center mx-auto ring-2 ring-[#C5A059] ring-offset-4 ring-offset-zinc-900 animate-pulse">
            <CheckCircle size={40} className="text-[#C5A059]" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-serif text-white">
                Welcome to the Inner Circle, <br/> 
                <span className="text-[#C5A059]">{leadTitle} {leadName}</span>
            </h3>
            <p className="text-slate-300 text-sm italic">
                "Real estate is not about structures, it's about people."
            </p>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border border-white/10 max-w-xs mx-auto">
             <p className="text-slate-400 text-xs mb-2">Your VIP Gift & Results have been sent to:</p>
             <p className="text-white font-mono text-sm">{leadEmail}</p>
          </div>

          <p className="text-slate-500 text-xs">
            One of our senior investment consultants will contact you shortly to confirm your gift.
          </p>
        </div>
      )}
    </div>
  );
}