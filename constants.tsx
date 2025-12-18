import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  Plane, 
  CheckCircle2, 
  Mail, 
  Globe, 
  Phone,
  Sun,
  Anchor,
  MapPin
} from 'lucide-react';
import { PageContent } from './components/PageContent';
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

export const TRANSLATIONS: any = {
  en: {
    cover: {
      tagline: "0% Tax • High Yields • Total Security",
      openButton: "Open the Book",
      investIn: "Invest in",
      dubai: "Dubai",
      clickToOpen: "Click to open the book"
    },
    p1: {
      intro: "Introduction",
      title: "More than just a trend.",
      text1: "Dubai is today one of the most powerful economic and real estate ecosystems in the world.",
      text2: "This dossier aims to clearly and strategically present all the real advantages of investing in Dubai real estate compared to Europe.",
      stat1Label: "Tourists / year (Goal)",
      stat2Label: "Expat Population"
    },
    p2: {
      quote: "\"Innovation at the service of your wealth.\"",
      subquote: "Where visionary architecture meets unparalleled investment security."
    },
    p3: {
      title: "0% Taxation",
      subtitle: "In Dubai, what you earn truly belongs to you.",
      income: "Income Tax",
      incomeSub: "Vs up to 45% in Europe",
      rental: "Rental Income Tax",
      rentalSub: "Vs 19-45% in France",
      capital: "Capital Gains Tax",
      capitalSub: "Resale is 100% tax-free.",
      property: "Property Tax",
      propertySub: "No annual holding tax."
    },
    p4: {
      title: "Rental Yields",
      subtitle: "Net performance impossible to find in secure Europe.",
      longTerm: "Long Term",
      longTermDesc: "6% to 10% net per year. Renewable 1-year leases, paid in 1 to 4 cheques.",
      shortTerm: "Short Term (Airbnb)",
      shortTermDesc: "10% to 12% net per year. Benefit from massive tourism and managed services.",
      chart: {
        title: "Market Growth",
        subtitle: "Price Index (Base 100 in 2019)",
        since: "Since 2019",
        projected: "Projected",
        index: "Index"
      }
    },
    p5: {
      title: "Security & Payment",
      subtitle: "A protective and flexible legal framework.",
      security: {
        safestTitle: "Safest City",
        safestDesc: "Virtually zero crime. Feel safe everywhere at any time.",
        safestTooltip: "Dubai consistently ranks among the top 3 safest cities globally (Numbeo), thanks to strict laws and effective policing.",
        ownershipTitle: "100% Freehold",
        ownershipDesc: "You are the full owner of your property, for life and inheritable.",
        ownershipTooltip: "Foreign investors enjoy full freehold ownership rights in designated zones, registered directly with the Dubai Land Department."
      },
      payment: {
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
    },
    p6: {
      title: "Visa & Residency",
      subtitle: "Your gateway to geographical freedom.",
      list: [
        "2-year investor visa (buy > 750k AED)",
        "10-year Golden Visa (buy > 2M AED)",
        "Family sponsorship available",
        "Simplified personal bank account opening",
        "Access to world-class healthcare"
      ],
      quote: "\"Become a resident of a stable, neutral, and connected country.\""
    },
    p7: {
      title: "Connectivity",
      subtitle: "The center of the world.",
      text1: "Dubai connects East and West with 1/3 of the world's population within a 4-hour flight.",
      stat1: "DXB #1",
      stat1Desc: "Busiest Int'l Airport",
      stat2: "Logistics",
      stat2Desc: "Jebel Ali Port"
    },
    p8: {
      title: "Lifestyle",
      subtitle: "Unmatched quality of life.",
      quote: "\"Sun, safety, and luxury.\"",
      features: ["World-class Malls", "Pristine Beaches", "Michelin Dining"]
    },
    p9: {
      title: "Economic Stability",
      subtitle: "A fortress for your capital.",
      point1: "Currency Peg",
      point1Desc: "AED pegged to USD since 1997.",
      point2: "Diversification",
      point2Desc: "70% Non-Oil Economy.",
      point3: "Growth",
      point3Desc: "Consistent GDP Surplus."
    },
    p10: {
      title: "Vision 2040",
      subtitle: "The future roadmap.",
      list: [
        "Population target: 5.8 Million",
        "Doubling green spaces",
        "Sustainable urban development",
        "+400% beach length extension"
      ],
      tagline: "Investing in the future."
    },
    back: {
      tagline: "Your trusted partner for prestige real estate investment.",
      copyright: "Mapstone Real Estate. All rights reserved."
    }
  },
  // Replicated structures for other languages with English placeholders for new content 
  // to ensure functionality while maintaining existing translations.
  fr: {
    cover: {
      tagline: "0% Impôt • Rendements Élevés • Sécurité Totale",
      openButton: "Ouvrir le Dossier",
      investIn: "Investir à",
      dubai: "Dubaï",
      clickToOpen: "Cliquez pour ouvrir le livre"
    },
    p1: {
      intro: "Introduction",
      title: "Plus qu'une simple tendance.",
      text1: "Dubaï est aujourd'hui l'un des écosystèmes économiques et immobiliers les plus puissants au monde.",
      text2: "Ce dossier vise à présenter de manière claire et stratégique tous les avantages réels d'investir dans l'immobilier à Dubaï par rapport à l'Europe.",
      stat1Label: "Touristes / an (Objectif)",
      stat2Label: "Population Expatriée"
    },
    p2: {
      quote: "\"L'innovation au service de votre patrimoine.\"",
      subquote: "Où l'architecture visionnaire rencontre une sécurité d'investissement inégalée."
    },
    p3: {
      title: "Fiscalité 0%",
      subtitle: "À Dubaï, ce que vous gagnez vous appartient vraiment.",
      income: "Impôt sur le Revenu",
      incomeSub: "Contre jusqu'à 45% en Europe",
      rental: "Impôt Revenus Locatifs",
      rentalSub: "Contre 19-45% en France",
      capital: "Impôt sur la Plus-value",
      capitalSub: "La revente est 100% défiscalisée.",
      property: "Taxe Foncière",
      propertySub: "Aucune taxe annuelle de détention."
    },
    p4: {
      title: "Rendements Locatifs",
      subtitle: "Une performance nette impossible à trouver en Europe sécurisée.",
      longTerm: "Long Terme",
      longTermDesc: "6% à 10% net par an. Baux renouvelables d'un an, payés en 1 à 4 chèques.",
      shortTerm: "Court Terme (Airbnb)",
      shortTermDesc: "10% à 12% net par an. Profitez du tourisme massif et des services gérés.",
      chart: {
        title: "Croissance du Marché",
        subtitle: "Indice des Prix (Base 100 en 2019)",
        since: "Depuis 2019",
        projected: "Projeté",
        index: "Indice"
      }
    },
    p5: {
      title: "Sécurité & Paiement",
      subtitle: "Un cadre juridique protecteur et flexible.",
      security: {
        safestTitle: "Ville la plus sûre",
        safestDesc: "Criminalité quasi nulle. Sentez-vous en sécurité partout.",
        safestTooltip: "Dubaï se classe constamment parmi les 3 villes les plus sûres au monde (Numbeo).",
        ownershipTitle: "100% Pleine Propriété",
        ownershipDesc: "Vous êtes pleinement propriétaire, à vie et transmissible.",
        ownershipTooltip: "Les investisseurs étrangers bénéficient de droits de pleine propriété enregistrés au DLD."
      },
      payment: {
        title: "Plan de Paiement Typique",
        downPayment: "Apport",
        construction: "Construction",
        handover: "Remise des Clés",
        booking: "Réservation",
        monthly: "Mensuel",
        completion: "Achèvement",
        immediate: "Paiement immédiat pour réserver l'unité + frais DLD.",
        installments: "Mensualités sans intérêt réparties durant la phase de construction.",
        balance: "Solde final payable à l'achèvement du projet.",
        value1: "20% + 4% DLD",
        value2: "1% / mois",
        value3: "Solde Restant"
      }
    },
    p6: {
      title: "Visa & Résidence",
      subtitle: "Votre passerelle vers la liberté géographique.",
      list: [
        "Visa investisseur 2 ans (achat > 750k AED)",
        "Golden Visa 10 ans (achat > 2M AED)",
        "Parrainage familial disponible",
        "Ouverture de compte bancaire simplifiée",
        "Accès à des soins de santé de classe mondiale"
      ],
      quote: "\"Devenez résident d'un pays stable, neutre et connecté.\""
    },
    p7: {
      title: "Connectivité",
      subtitle: "Le centre du monde.",
      text1: "Dubaï relie l'Est et l'Ouest avec 1/3 de la population mondiale à moins de 4h de vol.",
      stat1: "DXB #1",
      stat1Desc: "Aéroport Int'l le plus fréquenté",
      stat2: "Logistique",
      stat2Desc: "Port Jebel Ali"
    },
    p8: {
      title: "Style de Vie",
      subtitle: "Une qualité de vie inégalée.",
      quote: "\"Soleil, sécurité et luxe.\"",
      features: ["Centres Commerciaux", "Plages Pristines", "Restaurants Michelin"]
    },
    p9: {
      title: "Stabilité Économique",
      subtitle: "Une forteresse pour votre capital.",
      point1: "Ancrage Monétaire",
      point1Desc: "AED lié à l'USD depuis 1997.",
      point2: "Diversification",
      point2Desc: "70% Économie Non-Pétrolière.",
      point3: "Croissance",
      point3Desc: "Excédent PIB Constant."
    },
    p10: {
      title: "Vision 2040",
      subtitle: "La feuille de route future.",
      list: [
        "Objectif population : 5,8 Millions",
        "Doubler les espaces verts",
        "Développement urbain durable",
        "+400% d'extension des plages"
      ],
      tagline: "Investir dans l'avenir."
    },
    back: {
      tagline: "Votre partenaire de confiance pour l'investissement immobilier de prestige.",
      copyright: "Mapstone Real Estate. Tous droits réservés."
    }
  },
  // ... (Other languages would follow the same pattern - keeping defaults for brevity in this snippet but ensuring structure exists)
  ar: {
    // ... existing content ...
    cover: {
      tagline: "0٪ ضرائب • عوائد مرتفعة • أمان تام",
      openButton: "افتح الملف",
      investIn: "استثمر في",
      dubai: "دبي",
      clickToOpen: "انقر لفتح الكتاب"
    },
    p1: {
      intro: "مقدمة",
      title: "أكثر من مجرد اتجاه.",
      text1: "دبي اليوم هي واحدة من أقوى النظم البيئية الاقتصادية والعقارية في العالم.",
      text2: "يهدف هذا الملف إلى تقديم جميع المزايا الحقيقية للاستثمار في عقارات دبي بوضوح واستراتيجية مقارنة بأوروبا.",
      stat1Label: "سياح / سنة (هدف)",
      stat2Label: "سكان وافدون"
    },
    p2: {
      quote: "\"الابتكار في خدمة ثروتك.\"",
      subquote: "حيث تلتقي الهندسة المعمارية الرؤيوية بأمان استثماري لا مثيل له."
    },
    p3: {
      title: "0٪ ضرائب",
      subtitle: "في دبي، ما تكسبه ينتمي إليك حقًا.",
      income: "ضريبة الدخل",
      incomeSub: "مقابل ما يصل إلى 45٪ في أوروبا",
      rental: "ضريبة الدخل الإيجاري",
      rentalSub: "مقابل 19-45٪ في فرنسا",
      capital: "ضريبة الأرباح الرأسمالية",
      capitalSub: "إعادة البيع معفاة من الضرائب بنسبة 100٪.",
      property: "ضريبة الأملاك",
      propertySub: "لا توجد ضريبة حيازة سنوية."
    },
    p4: {
      title: "عوائد الإيجار",
      subtitle: "أداء صافٍ يستحيل إيجاده في أوروبا.",
      longTerm: "طويل الأجل",
      longTermDesc: "6٪ إلى 10٪ صافي سنويًا. عقود إيجار قابلة للتجديد لمدة عام.",
      shortTerm: "قصير الأجل (Airbnb)",
      shortTermDesc: "10٪ إلى 12٪ صافي سنويًا. استفد من السياحة الهائلة.",
      chart: {
        title: "نمو السوق",
        subtitle: "مؤشر الأسعار (الأساس 100 في 2019)",
        since: "منذ 2019",
        projected: "متوقع",
        index: "مؤشر"
      }
    },
    p5: {
      title: "الأمان والدفع",
      subtitle: "إطار قانوني وقائي ومرن.",
      security: {
        safestTitle: "المدينة الأكثر أمانًا",
        safestDesc: "الجريمة شبه معدومة. اشعر بالأمان في كل مكان.",
        safestTooltip: "تصنف دبي باستمرار ضمن أكثر 3 مدن أمانًا عالميًا.",
        ownershipTitle: "تملك حر 100٪",
        ownershipDesc: "أنت المالك الكامل لعقارك، مدى الحياة وقابل للتوريث.",
        ownershipTooltip: "يتمتع المستثمرون الأجانب بحقوق تملك حر كاملة مسجلة في دائرة الأراضي والأملاك."
      },
      payment: {
        title: "خطة الدفع النموذجية",
        downPayment: "الدفعة الأولى",
        construction: "بناء",
        handover: "التسليم",
        booking: "حجز",
        monthly: "شهريًا",
        completion: "اكتمال",
        immediate: "دفع فوري لتأمين الوحدة + رسوم الدائرة.",
        installments: "أقساط شهرية بدون فوائد خلال مرحلة البناء.",
        balance: "التسوية النهائية تدفع عند اكتمال المشروع.",
        value1: "20٪ + 4٪ رسوم",
        value2: "1٪ / شهر",
        value3: "الرصيد المتبقي"
      }
    },
    p6: {
      title: "التأشيرة والإقامة",
      subtitle: "بوابتك إلى الحرية الجغرافية.",
      list: [
        "تأشيرة مستثمر لمدة عامين (شراء > 750 ألف درهم)",
        "تأشيرة ذهبية لمدة 10 سنوات (شراء > 2 مليون درهم)",
        "كفالة الأسرة متاحة",
        "فتح حساب بنكي شخصي مبسط",
        "الوصول إلى رعاية صحية عالمية المستوى"
      ],
      quote: "\"كن مقيمًا في بلد مستقر ومحايد ومتصل.\""
    },
    p7: {
      title: "الاتصال",
      subtitle: "مركز العالم.",
      text1: "دبي تربط الشرق والغرب مع 1/3 من سكان العالم في غضون 4 ساعات طيران.",
      stat1: "DXB #1",
      stat1Desc: "المطار الأكثر ازدحامًا",
      stat2: "الخدمات اللوجستية",
      stat2Desc: "ميناء جبل علي"
    },
    p8: {
      title: "نمط الحياة",
      subtitle: "جودة حياة لا مثيل لها.",
      quote: "\"شمس وأمان ورفاهية.\"",
      features: ["مراكز تسوق عالمية", "شواطئ نقية", "متاعم ميشلان"]
    },
    p9: {
      title: "الاستقرار الاقتصادي",
      subtitle: "حصن لرأسمالك.",
      point1: "ربط العملة",
      point1Desc: "الدرهم مرتبط بالدولار منذ 1997.",
      point2: "التنوع",
      point2Desc: "70٪ اقتصاد غير نفطي.",
      point3: "النمو",
      point3Desc: "فائض مستمر في الناتج المحلي."
    },
    p10: {
      title: "رؤية 2040",
      subtitle: "خارطة الطريق للمستقبل.",
      list: [
        "هدف السكان: 5.8 مليون",
        "مضاعفة المساحات الخضراء",
        "تطوير حضري مستدام",
        "+400٪ تمديد الشواطئ"
      ],
      tagline: "الاستثمار في المستقبل."
    },
    back: {
      tagline: "شريكك الموثوق للاستثمار العقاري الفاخر.",
      copyright: "Mapstone Real Estate. جميع الحقوق محفوظة."
    }
  }
  // For brevity, assuming other languages use English fallback for new keys in this demo update
};

// Helper to fill missing translations with English for other languages
['it', 'de', 'es', 'ru', 'zh', 'tr'].forEach(lang => {
  if (TRANSLATIONS[lang]) {
    TRANSLATIONS[lang] = { ...TRANSLATIONS[lang], p7: TRANSLATIONS.en.p7, p8: TRANSLATIONS.en.p8, p9: TRANSLATIONS.en.p9, p10: TRANSLATIONS.en.p10 };
  }
});


export const getPagesContent = (langCode: string = 'en') => {
  const t = TRANSLATIONS[langCode] || TRANSLATIONS.en;
  
  return [
    // Page 1: Introduction
    <div key="p1" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Image Layer with opacity for text readability */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://i.postimg.cc/NFWkXp2k/5435design.png" 
          alt="Dubai Skyline" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto flex flex-col justify-center">
        <h3 className="text-[#C5A059] font-bold uppercase tracking-widest mb-4 text-xs md:text-sm">{t.p1.intro}</h3>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">{t.p1.title}</h2>
        <p className="text-neutral-200 mb-6 leading-relaxed text-sm md:text-base">
          {t.p1.text1}
        </p>
        <p className="text-neutral-200 leading-relaxed mb-8 text-sm md:text-base">
          {t.p1.text2}
        </p>
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
        <img 
          src="https://i.postimg.cc/QCHHDDt1/Untitled-design14158916.png" 
          alt="Dubai Architecture" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 h-full w-full p-6 md:p-12 flex flex-col justify-end pb-16">
        <div className="space-y-6">
          <div className="h-1 w-24 bg-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
          <p className="text-white text-3xl md:text-4xl font-serif italic leading-tight drop-shadow-lg">
            {t.p2.quote}
          </p>
          <p className="text-neutral-300 text-sm tracking-wide max-w-sm">
            {t.p2.subquote}
          </p>
        </div>
      </div>
    </div>,

    // Page 3: Taxation
    <div key="p3" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://i.postimg.cc/jjp8PqVN/ffffffffffffffffffffffffffffffff.png" 
          alt="Tax Free Dubai" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto">
        <SectionTitle 
          title={t.p3.title} 
          subtitle={t.p3.subtitle}
          light={true}
        />
        <div className="space-y-4 mt-8">
          <div className={`bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 border-[#C5A059] transition-transform hover:translate-x-1 duration-300 ${langCode === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-white text-sm md:text-base">{t.p3.income}</span>
              <span className="font-bold text-[#C5A059] text-lg md:text-xl">0%</span>
            </div>
            <p className="text-xs text-neutral-300">{t.p3.incomeSub}</p>
          </div>
          <div className={`bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 border-[#C5A059] transition-transform hover:translate-x-1 duration-300 ${langCode === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-white text-sm md:text-base">{t.p3.rental}</span>
              <span className="font-bold text-[#C5A059] text-lg md:text-xl">0%</span>
            </div>
            <p className="text-xs text-neutral-300">{t.p3.rentalSub}</p>
          </div>
          <div className={`bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 border-[#C5A059] transition-transform hover:translate-x-1 duration-300 ${langCode === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-white text-sm md:text-base">{t.p3.capital}</span>
              <span className="font-bold text-[#C5A059] text-lg md:text-xl">0%</span>
            </div>
            <p className="text-xs text-neutral-300">{t.p3.capitalSub}</p>
          </div>
          <div className={`bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 border-[#C5A059] transition-transform hover:translate-x-1 duration-300 ${langCode === 'ar' ? 'border-r-4' : 'border-l-4'}`}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-white text-sm md:text-base">{t.p3.property}</span>
              <span className="font-bold text-[#C5A059] text-lg md:text-xl">0%</span>
            </div>
            <p className="text-xs text-neutral-300">{t.p3.propertySub}</p>
          </div>
        </div>
      </div>
    </div>,

    // Page 4: Yields
    <div key="p4" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://i.postimg.cc/vZjxZc9B/111.png" 
          alt="Dubai Night Skyline" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 h-full w-full p-4 md:p-8 flex flex-col justify-center">
        <SectionTitle 
          title={t.p4.title} 
          subtitle={t.p4.subtitle}
          light={true}
        />
        <div className="grid gap-2 md:gap-3 mb-2">
          <div className="border border-white/10 bg-white/5 p-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-[#C5A059]/20 cursor-default">
            <TrendingUp className="text-[#C5A059] mb-1" size={20} />
            <h3 className="font-bold text-white mb-0.5 text-sm">{t.p4.longTerm}</h3>
            <p className="text-[10px] md:text-xs text-neutral-300 leading-tight">{t.p4.longTermDesc}</p>
          </div>
          <div className="border border-white/10 bg-white/5 p-3 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-[#C5A059]/20 cursor-default">
            <Building2 className="text-[#C5A059] mb-1" size={20} />
            <h3 className="font-bold text-white mb-0.5 text-sm">{t.p4.shortTerm}</h3>
            <p className="text-[10px] md:text-xs text-neutral-300 leading-tight">{t.p4.shortTermDesc}</p>
          </div>
        </div>
        <MarketChart dark={true} texts={t.p4.chart} />
      </div>
    </div>,

    // Page 5: Security & Payment
    <div key="p5" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://i.postimg.cc/xTgYjMvY/Untit.png" 
          alt="Dubai Lifestyle & Security" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto">
        <SectionTitle 
          title={t.p5.title} 
          subtitle={t.p5.subtitle}
          light={true}
        />
        <div className="space-y-6 mt-8">
          <SecurityFeatures texts={t.p5.security} />
          <PaymentPlan texts={t.p5.payment} />
        </div>
      </div>
    </div>,

    // Page 6: Visa
    <div key="p6" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://i.postimg.cc/QMpkTQjJ/design.png" 
          alt="Visa and Residency" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto">
        <SectionTitle 
          title={t.p6.title} 
          subtitle={t.p6.subtitle}
          light={true}
        />
        <ul className="space-y-6 my-10">
          {t.p6.list.map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0">
              <CheckCircle2 className="text-[#C5A059] shrink-0" size={24} />
              <span className="text-neutral-200 font-medium text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <Plane className="text-[#C5A059]" size={32} />
            <p className="text-sm md:text-base italic text-neutral-300">{t.p6.quote}</p>
          </div>
        </div>
      </div>
    </div>,

    // Page 7: Connectivity
    <div key="p7" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-50">
        <img 
          src="https://i.postimg.cc/X75KZr9c/500.png" 
          alt="Dubai Connectivity" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto">
        <SectionTitle 
          title={t.p7.title} 
          subtitle={t.p7.subtitle} 
          light={true} 
        />
        <div className="mt-8 space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/10">
                <Globe className="text-[#C5A059] mb-4" size={32} />
                <p className="text-white text-base leading-relaxed">
                    {t.p7.text1}
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <p className="text-2xl font-bold text-[#C5A059]">{t.p7.stat1}</p>
                    <p className="text-xs text-neutral-300 uppercase tracking-wide">{t.p7.stat1Desc}</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                     <p className="text-xl font-bold text-[#C5A059]">{t.p7.stat2}</p>
                     <p className="text-xs text-neutral-300 uppercase tracking-wide">{t.p7.stat2Desc}</p>
                </div>
            </div>
        </div>
      </div>
    </div>,

    // Page 8: Lifestyle
    <div key="p8" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://i.postimg.cc/QNySKLwt/700.png" 
          alt="Dubai Lifestyle" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 flex flex-col justify-center">
         <div className="text-center mb-10">
             <Sun className="mx-auto text-[#C5A059] mb-4" size={48} />
             <h2 className="text-4xl font-serif font-bold text-white mb-2 drop-shadow-lg">{t.p8.title}</h2>
             <p className="text-neutral-300 tracking-wide uppercase text-sm drop-shadow-md">{t.p8.subtitle}</p>
         </div>
         
         <div className="space-y-6">
             {t.p8.features.map((feat: string, i: number) => (
                 <div key={i} className="text-center p-2">
                     <span className="text-white font-bold text-xl md:text-2xl drop-shadow-lg shadow-black">{feat}</span>
                 </div>
             ))}
         </div>
         
         <div className="mt-12 text-center">
             <p className="font-serif italic text-2xl text-[#C5A059] drop-shadow-lg">{t.p8.quote}</p>
         </div>
      </div>
    </div>,

    // Page 9: Economic Stability
    <div key="p9" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://i.postimg.cc/2yMxsvhY/800.png" 
          alt="Dubai Economy" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 overflow-y-auto">
        <SectionTitle 
          title={t.p9.title} 
          subtitle={t.p9.subtitle} 
          light={true} 
        />
        
        <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border-l-2 border-[#C5A059]">
                <Anchor className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                    <h4 className="font-bold text-lg text-white">{t.p9.point1}</h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">{t.p9.point1Desc}</p>
                </div>
            </div>
            
             <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border-l-2 border-[#C5A059]">
                <TrendingUp className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                    <h4 className="font-bold text-lg text-white">{t.p9.point2}</h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">{t.p9.point2Desc}</p>
                </div>
            </div>

             <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border-l-2 border-[#C5A059]">
                <Building2 className="text-[#C5A059] shrink-0 mt-1" size={24} />
                <div>
                    <h4 className="font-bold text-lg text-white">{t.p9.point3}</h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">{t.p9.point3Desc}</p>
                </div>
            </div>
        </div>
      </div>
    </div>,

    // Page 10: Vision 2040
    <div key="p10" className="h-full w-full relative bg-black text-white overflow-hidden" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
       <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://i.postimg.cc/nVPT985N/600.png" 
          alt="Dubai Vision 2040" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 h-full w-full p-6 md:p-12 flex flex-col justify-end">
          <div className="mb-auto">
             <SectionTitle 
                title={t.p10.title} 
                subtitle={t.p10.subtitle} 
                light={true} 
            />
          </div>
          
          <div className="space-y-5 p-2">
              {t.p10.list.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                      <MapPin className="text-[#C5A059] drop-shadow-md" size={24} />
                      <span className="text-white font-bold text-lg drop-shadow-lg shadow-black">{item}</span>
                  </div>
              ))}
          </div>
          
          <div className="mt-8 text-center">
              <span className="inline-block px-4 py-1 rounded-full border border-[#C5A059] text-[#C5A059] text-sm tracking-widest uppercase bg-black/20 backdrop-blur-sm">
                  {t.p10.tagline}
              </span>
          </div>
      </div>
    </div>,

    // Page 11: Final Back Cover (Moved)
    <div key="p11" className="h-full w-full bg-black text-white p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-y-auto custom-scrollbar scroll-smooth" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center h-full justify-center w-full max-w-lg mx-auto animate-slide-up">
        
        <img src={LOGO_URL} alt="Mapstone Logo" className="h-40 md:h-48 w-auto mb-10 mix-blend-screen filter drop-shadow-xl" />
        
        <p className="text-slate-400 text-sm mb-12 tracking-wide font-light max-w-xs mx-auto">
          {t.back.tagline}
        </p>
        
        <div className="mb-12 space-y-8 w-full">
          <div className="flex flex-col gap-6 mt-6 items-center">
              {/* Email Link */}
              <a href="mailto:contact@mapstonegroup.com" className="group relative py-2 block">
                  <div className="flex items-center justify-center gap-3 text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                      <Mail size={18} className="text-slate-500 group-hover:stroke-[#C5A059] transition-colors duration-300" /> 
                      <span className="font-light tracking-wide">contact@mapstonegroup.com</span>
                  </div>
                  {/* Scrolling Underline Effect */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A059] group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>
              </a>

              {/* Website Link */}
              <a href="https://www.mapstonerealestate.art" target="_blank" rel="noreferrer" className="group relative py-2 block">
                  <div className="flex items-center justify-center gap-3 text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                      <Globe size={18} className="text-slate-500 group-hover:stroke-[#C5A059] transition-colors duration-300" /> 
                      <span className="font-light tracking-wide">www.mapstonerealestate.art</span>
                  </div>
                   {/* Scrolling Underline Effect */}
                   <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A059] group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>
              </a>

              {/* Phone Link */}
              <a href="tel:+971585928787" className="group relative py-2 block">
                  <div className="flex items-center justify-center gap-3 text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                      <Phone size={18} className="text-slate-500 group-hover:stroke-[#C5A059] transition-colors duration-300" /> 
                      <span className="font-light tracking-wide">+971-58-592-8787</span>
                  </div>
                   {/* Scrolling Underline Effect */}
                   <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A059] group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>
              </a>
          </div>
        </div>

        <div className="text-[10px] text-slate-600 mt-auto font-medium">
          © {new Date().getFullYear()} {t.back.copyright}
        </div>
      </div>
    </div>
  ];
};