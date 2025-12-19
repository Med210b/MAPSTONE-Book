import React from 'react';
import { Building2, TrendingUp, Plane, CheckCircle2, Mail, Globe, Phone, Sun, Anchor, MapPin } from 'lucide-react';
import { SectionTitle } from './components/SectionTitle';
import { MarketChart } from './components/MarketChart';
import { PaymentPlan } from './components/PaymentPlan';
import { SecurityFeatures } from './components/SecurityFeatures';

export const LOGO_URL = "https://i.postimg.cc/Px2Nwx9p/17.png";

export const LANGUAGES = [
  { code: 'en', name: 'English', flag: 'gb' },
  { code: 'fr', name: 'Français', flag: 'fr' },
  { code: 'ar', name: 'العربية', flag: 'ae' },
  { code: 'it', name: 'Italiano', flag: 'it' },
  { code: 'de', name: 'Deutsch', flag: 'de' },
  { code: 'es', name: 'Español', flag: 'es' },
  { code: 'ru', name: 'Русский', flag: 'ru' },
  { code: 'zh', name: '中文', flag: 'cn' },
  { code: 'tr', name: 'Türkçe', flag: 'tr' },
];

const BASE_TRANSLATIONS: any = {
  en: {
    cover: { investIn: "Invest in", dubai: "Dubai", tagline: "0% Tax • High Yields • Total Security", openButton: "Open the Book" },
    p1: { intro: "Introduction", title: "More than just a trend.", text1: "Dubai is today one of the most powerful economic and real estate ecosystems in the world.", text2: "This dossier aims to clearly and strategically present all the real advantages of investing in Dubai real estate compared to Europe.", stat1Label: "Tourists / year", stat2Label: "Expat Population" },
    p2: { quote: "\"Innovation at the service of your wealth.\"", subquote: "Where visionary architecture meets unparalleled investment security." },
    p3: { title: "0% Taxation", subtitle: "In Dubai, what you earn truly belongs to you.", income: "Income Tax", incomeSub: "Vs up to 45% in Europe", rental: "Rental Income Tax", rentalSub: "Vs 19-45% in France", capital: "Capital Gains Tax", capitalSub: "Resale is 100% tax-free.", property: "Property Tax", propertySub: "No annual holding tax." },
    p4: { title: "Rental Yields", subtitle: "Net performance impossible to find in Europe.", longTerm: "Long Term", longTermDesc: "6% to 10% net per year. Renewable leases.", shortTerm: "Short Term (Airbnb)", shortTermDesc: "10% to 12% net per year. Massive tourism.", chart: { title: "Market Growth", subtitle: "Price Index (Base 100)", since: "Since 2019", projected: "Projected", index: "Index" } },
    p5: { title: "Security & Payment", subtitle: "A protective and flexible legal framework.", security: { safestTitle: "Safest City", safestDesc: "Virtually zero crime.", safestTooltip: "Dubai ranks among top 3 safest cities.", ownershipTitle: "100% Freehold", ownershipDesc: "You are the full owner.", ownershipTooltip: "Full freehold rights for foreigners." }, payment: { title: "Payment Plan", downPayment: "Down Payment", construction: "Construction", handover: "Handover", immediate: "Immediate payment to secure unit.", installments: "Interest-free monthly installments.", balance: "Final settlement on handover." } },
    p6: { title: "Visa & Residency", subtitle: "Your gateway to geographical freedom.", list: ["2-year investor visa", "10-year Golden Visa", "Family sponsorship", "Bank account opening", "World-class healthcare"], quote: "\"Become a resident of a stable, neutral, and connected country.\"" },
    p7: { title: "Connectivity", subtitle: "The center of the world.", text1: "Dubai connects East and West with 1/3 of the world's population within a 4-hour flight.", stat1: "DXB #1", stat1Desc: "Busiest Airport", stat2: "Logistics", stat2Desc: "Jebel Ali Port" },
    p8: { title: "Lifestyle", subtitle: "Unmatched quality of life.", quote: "\"Sun, safety, and luxury.\"", features: ["World-class Malls", "Pristine Beaches", "Michelin Dining"] },
    p9: { title: "Economic Stability", subtitle: "A fortress for your capital.", point1: "Currency Peg", point1Desc: "AED pegged to USD.", point2: "Diversification", point2Desc: "70% Non-Oil Economy.", point3: "Growth", point3Desc: "Consistent GDP Surplus." },
    p10: { title: "Vision 2040", subtitle: "The future roadmap.", list: ["Population target: 5.8M", "Doubling green spaces", "Sustainable urban development", "+400% beach extension"], tagline: "Investing in the future." },
    back: { tagline: "Your trusted partner for prestige real estate investment.", copyright: "Mapstone Real Estate. All rights reserved." }
  },
  fr: {
    cover: { investIn: "Investir à", dubai: "Dubaï", tagline: "0% Impôt • Rendements Élevés • Sécurité Totale", openButton: "Ouvrir le Dossier" },
    p1: { intro: "Introduction", title: "Plus qu'une simple tendance.", text1: "Dubaï est l'un des écosystèmes les plus puissants au monde.", text2: "Ce dossier présente les avantages réels d'investir à Dubaï par rapport à l'Europe.", stat1Label: "Touristes / an", stat2Label: "Population Expatriée" },
    p2: { quote: "\"L'innovation au service de votre patrimoine.\"", subquote: "Où l'architecture visionnaire rencontre une sécurité inégalée." },
    p3: { title: "Fiscalité 0%", subtitle: "Ce que vous gagnez vous appartient vraiment.", income: "Impôt sur le Revenu", incomeSub: "Contre 45% en Europe", rental: "Impôt Locatif", rentalSub: "Contre 19-45% en France", capital: "Plus-value", capitalSub: "100% défiscalisée.", property: "Taxe Foncière", propertySub: "Aucune taxe annuelle." },
    p4: { title: "Rendements", subtitle: "Performance nette introuvable en Europe.", longTerm: "Long Terme", longTermDesc: "6% à 10% net/an.", shortTerm: "Court Terme", shortTermDesc: "10% à 12% net/an.", chart: { title: "Croissance", subtitle: "Indice des Prix", since: "Depuis 2019", projected: "Projeté", index: "Indice" } },
    p5: { title: "Sécurité & Paiement", subtitle: "Cadre juridique protecteur.", security: { safestTitle: "Ville Sûre", safestDesc: "Criminalité quasi nulle.", safestTooltip: "Top 3 mondial.", ownershipTitle: "100% Pleine Propriété", ownershipDesc: "Vous êtes propriétaire à vie.", ownershipTooltip: "Droits enregistrés au DLD." }, payment: { title: "Plan de Paiement", downPayment: "Apport", construction: "Construction", handover: "Remise des Clés", immediate: "Paiement immédiat.", installments: "Mensualités sans intérêt.", balance: "Solde final." } },
    p6: { title: "Visa & Résidence", subtitle: "Liberté géographique.", list: ["Visa investisseur 2 ans", "Golden Visa 10 ans", "Parrainage familial", "Compte bancaire", "Soins de santé"], quote: "\"Résident d'un pays stable et neutre.\"" },
    p7: { title: "Connectivité", subtitle: "Le centre du monde.", text1: "Dubaï relie l'Est et l'Ouest.", stat1: "DXB #1", stat1Desc: "Aéroport le plus fréquenté", stat2: "Logistique", stat2Desc: "Port Jebel Ali" },
    p8: { title: "Style de Vie", subtitle: "Qualité de vie inégalée.", quote: "\"Soleil, sécurité, luxe.\"", features: ["Centres Commerciaux", "Plages", "Restaurants"] },
    p9: { title: "Stabilité", subtitle: "Forteresse pour votre capital.", point1: "Ancrage Monétaire", point1Desc: "AED lié au USD.", point2: "Diversification", point2Desc: "70% Non-Pétrolier.", point3: "Croissance", point3Desc: "Excédent PIB." },
    p10: { title: "Vision 2040", subtitle: "La feuille de route.", list: ["Population: 5.8M", "Espaces verts doublés", "Développement durable", "+400% plages"], tagline: "Investir dans l'avenir." },
    back: { tagline: "Votre partenaire de confiance.", copyright: "Mapstone Real Estate. Tous droits réservés." }
  },
  ar: {
    cover: { investIn: "استثمر في", dubai: "دبي", tagline: "0٪ ضرائب • عوائد مرتفعة • أمان تام", openButton: "افتح الملف" },
    p1: { intro: "مقدمة", title: "أكثر من مجرد اتجاه.", text1: "دبي اليوم هي واحدة من أقوى النظم البيئية في العالم.", text2: "يقدم هذا الملف المزايا الحقيقية للاستثمار في دبي.", stat1Label: "سياح / سنة", stat2Label: "سكان وافدون" },
    p2: { quote: "\"الابتكار في خدمة ثروتك.\"", subquote: "هندسة معمارية وأمان استثماري." },
    p3: { title: "0٪ ضرائب", subtitle: "ما تكسبه ينتمي إليك.", income: "ضريبة الدخل", incomeSub: "0٪", rental: "ضريبة الإيجار", rentalSub: "0٪", capital: "أرباح رأس المال", capitalSub: "0٪", property: "ضريبة الأملاك", propertySub: "لا توجد ضريبة سنوية." },
    p4: { title: "العوائد", subtitle: "أداء صافٍ ممتاز.", longTerm: "طويل الأجل", longTermDesc: "6٪ - 10٪ سنويًا.", shortTerm: "قصير الأجل", shortTermDesc: "10٪ - 12٪ سنويًا.", chart: { title: "نمو السوق", subtitle: "مؤشر الأسعار", since: "منذ 2019", projected: "متوقع", index: "مؤشر" } },
    p5: { title: "الأمان والدفع", subtitle: "إطار قانوني مرن.", security: { safestTitle: "أمان تام", safestDesc: "جريمة شبه معدومة.", safestTooltip: "الأكثر أمانًا عالميًا.", ownershipTitle: "تملك حر 100٪", ownershipDesc: "ملكية كاملة.", ownershipTooltip: "مسجلة في الدائرة." }, payment: { title: "خطة الدفع", downPayment: "الدفعة الأولى", construction: "بناء", handover: "التسليم", immediate: "دفع فوري.", installments: "أقساط ميسرة.", balance: "التسوية النهائية." } },
    p6: { title: "التأشيرة", subtitle: "بوابتك للحرية.", list: ["تأشيرة سنتين", "تأشيرة ذهبية 10 سنوات", "كفالة الأسرة", "حساب بنكي", "رعاية صحية"], quote: "\"كن مقيمًا في بلد مستقر.\"" },
    p7: { title: "الاتصال", subtitle: "مركز العالم.", text1: "دبي تربط الشرق والغرب.", stat1: "DXB #1", stat1Desc: "مطار مزدحم", stat2: "لوجستيات", stat2Desc: "ميناء جبل علي" },
    p8: { title: "نمط الحياة", subtitle: "جودة حياة.", quote: "\"شمس وأمان.\"", features: ["تسوق", "شواطئ", "مطاعم"] },
    p9: { title: "الاستقرار", subtitle: "حصن لرأسمالك.", point1: "العملة", point1Desc: "الدرهم مرتبط بالدولار.", point2: "التنوع", point2Desc: "اقتصاد غير نفطي.", point3: "النمو", point3Desc: "فائض مستمر." },
    p10: { title: "رؤية 2040", subtitle: "المستقبل.", list: ["5.8 مليون نسمة", "مساحات خضراء", "تطوير مستدام", "شواطئ"], tagline: "استثمار المستقبل." },
    back: { tagline: "شريكك الموثوق.", copyright: "Mapstone Real Estate. جميع الحقوق محفوظة." }
  }
};

// AUTO-FILL MISSING TRANSLATIONS (Fallback to English for es, it, de, ru, tr, zh)
// This ensures the site doesn't crash when switching to these languages
export const TRANSLATIONS = { ...BASE_TRANSLATIONS };
['es', 'it', 'de', 'ru', 'tr', 'zh'].forEach(lang => {
  if (!TRANSLATIONS[lang]) {
    TRANSLATIONS[lang] = JSON.parse(JSON.stringify(TRANSLATIONS.en)); // Deep copy English
    // Customize cover titles for visual feedback
    if(lang === 'es') TRANSLATIONS[lang].cover.investIn = "Invierte en";
    if(lang === 'it') TRANSLATIONS[lang].cover.investIn = "Investi a";
    if(lang === 'de') TRANSLATIONS[lang].cover.investIn = "Investieren in";
    if(lang === 'ru') { TRANSLATIONS[lang].cover.investIn = "Инвестируйте в"; TRANSLATIONS[lang].cover.dubai = "ДУБАЙ"; }
    if(lang === 'tr') { TRANSLATIONS[lang].cover.investIn = "Yatırım Yapın"; TRANSLATIONS[lang].cover.dubai = "DUBAİ"; }
    if(lang === 'zh') { TRANSLATIONS[lang].cover.investIn = "投资"; TRANSLATIONS[lang].cover.dubai = "迪拜"; }
  }
});

// --- PAGE GENERATOR ---
export const getPagesContent = (langCode: string = 'en') => {
  const t = TRANSLATIONS[langCode] || TRANSLATIONS.en;
  
  return [
    // Page 1: Introduction
    <div key="p1" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://i.postimg.cc/NFWkXp2k/5435design.png" alt="Dubai Skyline" className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto flex flex-col justify-center">
        <h3 className="text-[#C5A059] font-bold uppercase tracking-widest mb-4 text-xs md:text-sm">{t.p1.intro}</h3>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">{t.p1.title}</h2>
        <p className="text-neutral-200 mb-6 leading-relaxed text-sm md:text-base">{t.p1.text1}</p>
        <p className="text-neutral-200 leading-relaxed mb-8 text-sm md:text-base">{t.p1.text2}</p>
        <div className="grid grid-cols-2 gap-4 md:gap-6 mt-auto">
          <div className={`border-[#C5A059] ${langCode === 'ar' ? 'border-r-4 pr-4' : 'border-l-4 pl-4'}`}>
            <p className="text-2xl md:text-3xl font-bold text-white">40M</p>
            <p className="text-[10px] md:text-xs uppercase text-neutral-400">{t.p1.stat1Label}</p>
          </div>
          <div className={`border-[#C5A059] ${langCode === 'ar' ? 'border-r-4 pr-4' : 'border-l-4 pl-4'}`}>
            <p className="text-2xl md:text-3xl font-bold text-white">3.5M+</p>
            <p className="text-[10px] md:text-xs uppercase text-neutral-400">{t.p1.stat2Label}</p>
          </div>
        </div>
      </div>
    </div>,

    // Page 2: Visual
    <div key="p2" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://i.postimg.cc/QCHHDDt1/Untitled-design14158916.png" alt="Dubai Architecture" className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 flex flex-col justify-end pb-16">
        <div className="space-y-6">
          <div className="h-1 w-24 bg-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
          <p className="text-white text-3xl md:text-4xl font-serif italic leading-tight drop-shadow-lg">{t.p2.quote}</p>
          <p className="text-neutral-300 text-sm tracking-wide max-w-sm">{t.p2.subquote}</p>
        </div>
      </div>
    </div>,

    // Page 3: Taxation
    <div key="p3" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://i.postimg.cc/jjp8PqVN/ffffffffffffffffffffffffffffffff.png" alt="Tax Free Dubai" className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto">
        <SectionTitle title={t.p3.title} subtitle={t.p3.subtitle} light={true} />
        <div className="space-y-4 mt-8">
          <div className={`bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 border-[#C5A059] hover:translate-x-1 duration-300 ${langCode === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
            <div className="flex justify-between items-center mb-1"><span className="font-bold text-white text-sm md:text-base">{t.p3.income}</span><span className="font-bold text-[#C5A059] text-lg md:text-xl">0%</span></div><p className="text-xs text-neutral-300">{t.p3.incomeSub}</p>
          </div>
          <div className={`bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 border-[#C5A059] hover:translate-x-1 duration-300 ${langCode === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
            <div className="flex justify-between items-center mb-1"><span className="font-bold text-white text-sm md:text-base">{t.p3.rental}</span><span className="font-bold text-[#C5A059] text-lg md:text-xl">0%</span></div><p className="text-xs text-neutral-300">{t.p3.rentalSub}</p>
          </div>
          <div className={`bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 border-[#C5A059] hover:translate-x-1 duration-300 ${langCode === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
            <div className="flex justify-between items-center mb-1"><span className="font-bold text-white text-sm md:text-base">{t.p3.capital}</span><span className="font-bold text-[#C5A059] text-lg md:text-xl">0%</span></div><p className="text-xs text-neutral-300">{t.p3.capitalSub}</p>
          </div>
          <div className={`bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 border-[#C5A059] hover:translate-x-1 duration-300 ${langCode === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
            <div className="flex justify-between items-center mb-1"><span className="font-bold text-white text-sm md:text-base">{t.p3.property}</span><span className="font-bold text-[#C5A059] text-lg md:text-xl">0%</span></div><p className="text-xs text-neutral-300">{t.p3.propertySub}</p>
          </div>
        </div>
      </div>
    </div>,

    // Page 4: Yields
    <div key="p4" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://i.postimg.cc/vZjxZc9B/111.png" alt="Dubai Night Skyline" className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 h-full w-full p-4 md:p-8 flex flex-col justify-center">
        <SectionTitle title={t.p4.title} subtitle={t.p4.subtitle} light={true} />
        <div className="grid gap-2 md:gap-3 mb-2">
          <div className="border border-white/10 bg-white/5 p-3 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:shadow-[#C5A059]/20 cursor-default">
            <TrendingUp className="text-[#C5A059] mb-1" size={20} /><h3 className="font-bold text-white mb-0.5 text-sm">{t.p4.longTerm}</h3><p className="text-[10px] md:text-xs text-neutral-300 leading-tight">{t.p4.longTermDesc}</p>
          </div>
          <div className="border border-white/10 bg-white/5 p-3 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:shadow-[#C5A059]/20 cursor-default">
            <Building2 className="text-[#C5A059] mb-1" size={20} /><h3 className="font-bold text-white mb-0.5 text-sm">{t.p4.shortTerm}</h3><p className="text-[10px] md:text-xs text-neutral-300 leading-tight">{t.p4.shortTermDesc}</p>
          </div>
        </div>
        <MarketChart dark={true} texts={t.p4.chart} />
      </div>
    </div>,

    // Page 5: Security & Payment
    <div key="p5" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://i.postimg.cc/xTgYjMvY/Untit.png" alt="Dubai Lifestyle" className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto">
        <SectionTitle title={t.p5.title} subtitle={t.p5.subtitle} light={true} />
        <div className="space-y-6 mt-8">
          <SecurityFeatures texts={t.p5.security} />
          <PaymentPlan texts={t.p5.payment} />
        </div>
      </div>
    </div>,

    // Page 6: Visa
    <div key="p6" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://i.postimg.cc/QMpkTQjJ/design.png" alt="Visa and Residency" className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto">
        <SectionTitle title={t.p6.title} subtitle={t.p6.subtitle} light={true} />
        <ul className="space-y-6 my-10">
          {t.p6.list.map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0">
              <CheckCircle2 className="text-[#C5A059] shrink-0" size={24} />
              <span className="text-neutral-200 font-medium text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6 flex flex-col items-center justify-center text-center space-y-3">
            <Plane className="text-[#C5A059]" size={32} />
            <p className="text-sm md:text-base italic text-neutral-300">{t.p6.quote}</p>
        </div>
      </div>
    </div>,

    // Page 7: Connectivity
    <div key="p7" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-50">
        <img src="https://i.postimg.cc/X75KZr9c/500.png" alt="Dubai Connectivity" className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto">
        <SectionTitle title={t.p7.title} subtitle={t.p7.subtitle} light={true} />
        <div className="mt-8 space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <Globe className="text-[#C5A059] mb-4" size={32} />
                <p className="text-white text-base leading-relaxed">{t.p7.text1}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10"><p className="text-2xl font-bold text-[#C5A059]">{t.p7.stat1}</p><p className="text-xs text-neutral-300 uppercase">{t.p7.stat1Desc}</p></div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10"><p className="text-xl font-bold text-[#C5A059]">{t.p7.stat2}</p><p className="text-xs text-neutral-300 uppercase">{t.p7.stat2Desc}</p></div>
            </div>
        </div>
      </div>
    </div>,

    // Page 8: Lifestyle
    <div key="p8" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://i.postimg.cc/QNySKLwt/700.png" alt="Dubai Lifestyle" className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 flex flex-col justify-center">
         <div className="text-center mb-10">
             <Sun className="mx-auto text-[#C5A059] mb-4" size={48} />
             <h2 className="text-4xl font-serif font-bold text-white mb-2 drop-shadow-lg">{t.p8.title}</h2>
             <p className="text-neutral-300 tracking-wide uppercase text-sm drop-shadow-md">{t.p8.subtitle}</p>
         </div>
         <div className="space-y-6">
             {t.p8.features.map((feat: string, i: number) => (
                 <div key={i} className="text-center p-2"><span className="text-white font-bold text-xl md:text-2xl drop-shadow-lg shadow-black">{feat}</span></div>
             ))}
         </div>
         <div className="mt-12 text-center"><p className="font-serif italic text-2xl text-[#C5A059] drop-shadow-lg">{t.p8.quote}</p></div>
      </div>
    </div>,

    // Page 9: Economic Stability
    <div key="p9" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://i.postimg.cc/2yMxsvhY/800.png" alt="Dubai Economy" className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto">
        <SectionTitle title={t.p9.title} subtitle={t.p9.subtitle} light={true} />
        <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border-l-2 border-[#C5A059]"><Anchor className="text-[#C5A059] mt-1" size={24} /><div><h4 className="font-bold text-lg text-white">{t.p9.point1}</h4><p className="text-sm text-neutral-300">{t.p9.point1Desc}</p></div></div>
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border-l-2 border-[#C5A059]"><TrendingUp className="text-[#C5A059] mt-1" size={24} /><div><h4 className="font-bold text-lg text-white">{t.p9.point2}</h4><p className="text-sm text-neutral-300">{t.p9.point2Desc}</p></div></div>
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border-l-2 border-[#C5A059]"><Building2 className="text-[#C5A059] mt-1" size={24} /><div><h4 className="font-bold text-lg text-white">{t.p9.point3}</h4><p className="text-sm text-neutral-300">{t.p9.point3Desc}</p></div></div>
        </div>
      </div>
    </div>,

    // Page 10: Vision 2040
    <div key="p10" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
       <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://i.postimg.cc/nVPT985N/600.png" alt="Dubai Vision 2040" className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 flex flex-col justify-end">
          <div className="mb-auto"><SectionTitle title={t.p10.title} subtitle={t.p10.subtitle} light={true} /></div>
          <div className="space-y-5 p-2">
              {t.p10.list.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3"><MapPin className="text-[#C5A059]" size={24} /><span className="text-white font-bold text-lg drop-shadow-lg">{item}</span></div>
              ))}
          </div>
          <div className="mt-8 text-center"><span className="inline-block px-4 py-1 rounded-full border border-[#C5A059] text-[#C5A059] text-sm tracking-widest uppercase bg-black/20 backdrop-blur-sm">{t.p10.tagline}</span></div>
      </div>
    </div>,

    // Page 11: Final Back Cover
    <div key="p11" className="h-full w-full bg-black text-white p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-y-auto" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center h-full justify-center w-full max-w-lg mx-auto">
        <img src={LOGO_URL} alt="Mapstone Logo" className="h-40 md:h-48 w-auto mb-10 mix-blend-screen filter drop-shadow-xl" />
        <p className="text-slate-400 text-sm mb-12 tracking-wide font-light max-w-xs mx-auto">{t.back.tagline}</p>
        <div className="mb-12 space-y-8 w-full">
          <div className="flex flex-col gap-6 mt-6 items-center">
              <a href="mailto:contact@mapstonegroup.com" className="group relative py-2 block">
                  <div className="flex items-center justify-center gap-3 text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                      <Mail size={18} className="text-slate-500 group-hover:stroke-[#C5A059]" /> <span className="font-light tracking-wide">contact@mapstonegroup.com</span>
                  </div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A059] group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>
              </a>
              <a href="https://www.mapstonerealestate.art" target="_blank" rel="noreferrer" className="group relative py-2 block">
                  <div className="flex items-center justify-center gap-3 text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                      <Globe size={18} className="text-slate-500 group-hover:stroke-[#C5A059]" /> <span className="font-light tracking-wide">www.mapstonerealestate.art</span>
                  </div>
                   <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A059] group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>
              </a>
              <a href="tel:+971585928787" className="group relative py-2 block">
                  <div className="flex items-center justify-center gap-3 text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                      <Phone size={18} className="text-slate-500 group-hover:stroke-[#C5A059]" /> <span className="font-light tracking-wide">+971-58-592-8787</span>
                  </div>
                   <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A059] group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>
              </a>
          </div>
        </div>
        <div className="text-[10px] text-slate-600 mt-auto font-medium">© {new Date().getFullYear()} {t.back.copyright}</div>
      </div>
    </div>
  ];
};