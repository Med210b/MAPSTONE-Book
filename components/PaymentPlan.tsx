import React, { useState } from 'react';

interface PaymentPlanTexts {
  title: string;
  downPayment: string;
  construction: string;
  handover: string;
  booking: string;
  monthly: string;
  completion: string;
  immediate: string;
  installments: string;
  balance: string;
  value1: string;
  value2: string;
  value3: string;
}

interface PaymentPlanProps {
  texts?: PaymentPlanTexts;
}

export const PaymentPlan: React.FC<PaymentPlanProps> = ({
  texts = {
    title: "Typical Payment Plan",
    downPayment: "Down Payment",
    construction: "Construction",
    handover: "Handover",
    booking: "Booking",
    monthly: "Monthly",
    completion: "Completion",
    immediate: "Immediate payment to secure unit + Dubai Land Department fees.",
    installments: "Interest-free monthly installments spread during the construction phase.",
    balance: "Final settlement payable upon project completion and key handover.",
    value1: "20% + 4% DLD",
    value2: "1% / month",
    value3: "Remaining Balance"
  }
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const STAGES = [
    {
      label: texts.downPayment,
      subLabel: texts.booking,
      value: texts.value1,
      width: "24%",
      percentage: "24%",
      details: texts.immediate
    },
    {
      label: texts.construction,
      subLabel: texts.monthly,
      value: texts.value2,
      width: "46%",
      percentage: "46%",
      details: texts.installments
    },
    {
      label: texts.handover,
      subLabel: texts.completion,
      value: texts.value3,
      width: "30%",
      percentage: "30%",
      details: texts.balance
    }
  ];

  return (
    <div className="mt-8 pt-8 border-t border-neutral-700">
      <h4 className="font-bold text-lg md:text-xl mb-8 font-serif text-[#C5A059]">{texts.title}</h4>
      <div className="space-y-8">
        {STAGES.map((stage, index) => (
          <div 
            key={index}
            className="group relative cursor-help"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Label Row */}
            <div className={`flex justify-between items-end text-sm mb-3 transition-all duration-300 ${hoveredIndex === index ? 'translate-x-2' : ''}`}>
              <div className="flex items-center gap-3">
                 <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${hoveredIndex === index ? 'bg-[#C5A059] shadow-[0_0_8px_#C5A059]' : 'bg-neutral-600'}`}></div>
                 <div>
                    <span className={`block font-medium text-base transition-colors ${hoveredIndex === index ? 'text-white' : 'text-neutral-300'}`}>
                        {stage.label}
                    </span>
                    {stage.subLabel && <span className="text-neutral-500 text-xs uppercase tracking-wider block mt-0.5">{stage.subLabel}</span>}
                 </div>
              </div>
              <span className={`font-bold font-mono text-sm transition-colors duration-300 ${hoveredIndex === index ? 'text-[#C5A059]' : 'text-neutral-500'}`}>
                {stage.value}
              </span>
            </div>

            {/* Bar Track */}
            <div className="w-full bg-neutral-800/50 h-3 rounded-full overflow-visible relative border border-white/5">
              {/* Filled Bar */}
              <div 
                className={`h-full rounded-full relative transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${hoveredIndex === index ? 'bg-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.5)] scale-y-125' : 'bg-neutral-600'}`}
                style={{ width: stage.width }}
              >
                
                {/* Tooltip */}
                <div 
                  className={`
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-5 w-60
                    bg-[#1a1a1a] border border-[#C5A059]/30 text-white p-4 rounded-xl shadow-2xl z-50
                    pointer-events-none transition-all duration-300 transform origin-bottom
                    ${hoveredIndex === index ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-2'}
                  `}
                >
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 rounded-xl"></div>
                  
                  <div className="relative z-10">
                      <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10">
                        <span className="font-bold text-[#C5A059] text-sm uppercase tracking-wider">{stage.label}</span>
                        <span className="text-xs bg-[#C5A059]/10 text-[#C5A059] px-2 py-0.5 rounded border border-[#C5A059]/20 font-mono">
                            ~{stage.percentage}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                            <p className="text-[10px] text-neutral-500 uppercase tracking-wide mb-0.5">Terms</p>
                            <p className="font-medium text-white text-sm">{stage.value}</p>
                        </div>
                        <div>
                             <p className="text-[10px] text-neutral-500 uppercase tracking-wide mb-0.5">Details</p>
                             <p className="text-neutral-400 text-xs leading-relaxed">{stage.details}</p>
                        </div>
                      </div>
                  </div>

                  {/* Arrow Tip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#C5A059]/30"></div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-8 border-transparent border-t-[#1a1a1a]"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};