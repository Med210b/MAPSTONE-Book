import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

// Prepare data with split for historical vs projected
// Overlapping at 2024 to ensure continuous line
const data = [
  { year: '2019', history: 100 },
  { year: '2020', history: 98 },
  { year: '2021', history: 115 },
  { year: '2022', history: 135 },
  { year: '2023', history: 158 },
  { year: '2024', history: 175, projection: 175 },
  { year: '2025', projection: 195, isProjection: true },
  { year: '2026', projection: 215, isProjection: true },
];

interface MarketChartProps {
  dark?: boolean;
  texts?: {
    title: string;
    subtitle: string;
    since: string;
    projected: string;
    index: string;
  };
}

const CustomTooltip = ({ active, payload, label, texts }: any) => {
  if (active && payload && payload.length) {
    // Determine which value to show (prefer projection if both exist at the join point to show label, or history)
    // Actually payload contains all active areas.
    const dataPoint = payload[0].payload;
    const value = dataPoint.isProjection ? dataPoint.projection : (dataPoint.history || dataPoint.projection);
    const isProj = dataPoint.isProjection;

    return (
      <div className="bg-white p-3 border border-slate-100 shadow-xl rounded-lg z-50 min-w-[100px]">
        <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1 font-semibold">{label}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-[#C5A059] font-bold text-xl">
            {value}
          </span>
          <span className="text-[10px] font-normal text-slate-400">{texts?.index || 'Index'}</span>
        </div>
        {isProj && (
          <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 bg-amber-50 text-[#C5A059] text-[9px] font-medium uppercase tracking-wide rounded-full border border-amber-100/50">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></div>
            {texts?.projected || 'Projected'}
          </div>
        )}
      </div>
    );
  }
  return null;
};

export const MarketChart: React.FC<MarketChartProps> = ({ 
  dark = false,
  texts = {
    title: "Market Growth",
    subtitle: "Price Index (Base 100 in 2019)",
    since: "Since 2019",
    projected: "Projected",
    index: "Index"
  }
}) => {
  return (
    <div className={`w-full rounded-xl p-4 border mt-2 relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-[#C5A059]/10 ${dark ? 'bg-white/5 border-white/10 backdrop-blur-sm' : 'bg-slate-50 border-slate-100'}`}>
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10"></div>
      
      <div className="flex justify-between items-end mb-4 relative z-10">
        <div>
          <h3 className={`font-serif font-bold text-lg ${dark ? 'text-white' : 'text-slate-800'}`}>{texts.title}</h3>
          <p className={`text-xs ${dark ? 'text-neutral-400' : 'text-slate-500'}`}>{texts.subtitle}</p>
        </div>
        <div className="text-right">
            <div className="flex items-center gap-1 justify-end text-[#C5A059]">
              <span className="font-bold text-xl">+115%</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className={`text-[10px] uppercase tracking-wide ${dark ? 'text-neutral-500' : 'text-slate-400'}`}>{texts.since}</p>
        </div>
      </div>
      
      <div className="h-40 w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorHistory" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C5A059" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#C5A059" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorProjection" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C5A059" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#C5A059" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke={dark ? "rgba(255,255,255,0.05)" : "#e2e8f0"} 
            />
            <XAxis 
              dataKey="year" 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 10, fill: dark ? '#6b7280' : '#94a3b8', fontWeight: 500}}
              dy={10}
            />
            <YAxis 
              hide 
              domain={['dataMin - 10', 'auto']} 
            />
            <Tooltip 
              content={<CustomTooltip texts={texts} />} 
              cursor={{ stroke: '#C5A059', strokeWidth: 1, strokeDasharray: '4 4', opacity: 0.5 }} 
            />
            
            <ReferenceLine x="2024" stroke="#C5A059" strokeDasharray="3 3" strokeOpacity={0.3} />

            {/* Historical Data Area */}
            <Area 
              type="monotone" 
              dataKey="history" 
              stroke="#C5A059" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorHistory)" 
              activeDot={{ r: 6, strokeWidth: 0, fill: '#C5A059' }}
              animationDuration={1500}
            />

            {/* Projected Data Area (Dashed) */}
            <Area 
              type="monotone" 
              dataKey="projection" 
              stroke="#C5A059" 
              strokeWidth={2}
              strokeDasharray="5 5"
              fillOpacity={1} 
              fill="url(#colorProjection)" 
              activeDot={{ r: 6, strokeWidth: 0, fill: '#C5A059' }}
              animationDuration={1500}
              animationBegin={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};