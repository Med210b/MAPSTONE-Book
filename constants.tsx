import React from 'react';
import { Building2, TrendingUp, Plane, CheckCircle2, Mail, Globe, Phone, Sun, Anchor, MapPin, Briefcase, GraduationCap, Star, Users, Trophy } from 'lucide-react';

// --- UI COMPONENTS ---
const SectionTitle = ({ title, subtitle, light }: any) => (
  <div className="mb-4">
    <h2 className={`text-xl md:text-3xl font-serif font-bold ${light ? 'text-white' : 'text-zinc-900'} mb-2`}>{title}</h2>
    <p className="text-[#C5A059] text-[10px] uppercase tracking-widest font-medium">{subtitle}</p>
  </div>
);

const MarketChart = ({ texts, dark }: any) => (
  <div className={`h-32 border rounded flex items-center justify-center text-xs italic ${dark ? 'bg-white/5 border-white/10 text-slate-500' : 'bg-white border-zinc-200 text-zinc-400'}`}>
    {texts?.title || 'Market Growth Chart'}
  </div>
);

const PaymentPlan = ({ texts }: any) => (
  <div className="p-4 bg-white/5 border border-white/10 rounded-xl mt-4">
    <h4 className="text-[#C5A059] font-bold mb-2 text-sm">{texts?.title}</h4>
    <p className="text-xs text-slate-400 leading-relaxed">{texts?.details}</p>
  </div>
);

const SecurityFeatures = ({ texts }: any) => (
  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
    <h4 className="text-[#C5A059] font-bold mb-2 text-sm">{texts?.safestTitle}</h4>
    <p className="text-xs text-slate-400 leading-relaxed">{texts?.safestDesc}</p>
  </div>
);

export const LOGO_URL = "https://i.postimg.cc/Px2Nwx9p/17.png";

export const LANGUAGES = [
  { code: 'en', name: 'English', flag: 'gb' }, { code: 'fr', name: 'Français', flag: 'fr' },
  { code: 'ar', name: 'العربية', flag: 'ae' }, { code: 'it', name: 'Italiano', flag: 'it' },
  { code: 'de', name: 'Deutsch', flag: 'de' }, { code: 'es', name: 'Español', flag: 'es' },
  { code: 'ru', name: 'Русский', flag: 'ru' }, { code: 'zh', name: '中文', flag: 'cn' },
  { code: 'tr', name: 'Türkçe', flag: 'tr' }
];

// --- QUIZ DATA ---
export const QUIZ_QUESTIONS = [
  { 
    id: 1, 
    q: { en: "Does Dubai have personal income tax?", fr: "Y a-t-il un impôt sur le revenu ?", ar: "هل توجد ضريبة دخل في دبي؟", es: "¿Hay impuesto sobre la renta?", it: "C'è imposta sul reddito?", de: "Gibt es Einkommensteuer?", ru: "Есть ли подоходный налог?", zh: "迪拜有个人所得税吗？", tr: "Gelir vergisi var mı?" }, 
    options: { en: ["No (0%)", "Yes (20%)", "Sometimes"], fr: ["Non (0%)", "Oui (20%)", "Parfois"], ar: ["لا (0%)", "نعم (20%)", "أحياناً"], es: ["No (0%)", "Sí (20%)", "A veces"], it: ["No (0%)", "Sì (20%)", "A volte"], de: ["Nein (0%)", "Ja (20%)", "Manchmal"], ru: ["Нет (0%)", "Да (20%)", "Иногда"], zh: ["没有 (0%)", "有 (20%)", "有时"], tr: ["Hayır (%0)", "Evet (%20)", "Bazen"] }, 
    correct: 0 
  },
  { 
    id: 2, 
    q: { en: "Can foreigners buy property?", fr: "Les étrangers peuvent-ils acheter ?", ar: "هل يمكن للأجانب الشراء؟", es: "¿Pueden comprar extranjeros?", it: "Gli stranieri possono comprare?", de: "Können Ausländer kaufen?", ru: "Могут ли иностранцы покупать?", zh: "外国人可以买房吗？", tr: "Yabancılar mülk alabilir mi?" }, 
    options: { en: ["Yes, 100% Freehold", "No", "Leasehold only"], fr: ["Oui, 100% Pleine Propriété", "Non", "Bail seulement"], ar: ["نعم، تملك حر 100%", "لا", "إيجار فقط"], es: ["Sí, 100% Propiedad", "No", "Solo arrendamiento"], it: ["Sì, 100% Proprietà", "No", "Solo affitto"], de: ["Ja, 100% Eigentum", "Nein", "Nur Pacht"], ru: ["Да, 100% собственность", "Нет", "Только аренда"], zh: ["是的，100% 永久产权", "不", "仅限租赁"], tr: ["Evet, %100 Mülkiyet", "Hayır", "Sadece kiralama"] },
    correct: 0 
  },
  { id: 3, q: { en: "Is Dubai safe?", fr: "Dubaï est-elle sûre ?", ar: "هل دبي آمنة؟", es: "¿Es segura Dubái?", it: "Dubai è sicura?", de: "Ist Dubai sicher?", ru: "Безопасен ли Дубай?", zh: "迪拜安全吗？", tr: "Dubai güvenli mi?" }, options: { en: ["Yes, extremely safe", "Not really", "Dangerous"], fr: ["Oui, très sûre", "Pas vraiment", "Dangereuse"], ar: ["نعم، آمنة جداً", "ليس حقاً", "خطيرة"], es: ["Sí, muy segura", "No mucho", "Peligrosa"], it: ["Sì, molto sicura", "Non molto", "Pericolosa"], de: ["Ja, sehr sicher", "Nicht wirklich", "Gefährlich"], ru: ["Да, очень безопасно", "Не очень", "Опасно"], zh: ["是的，非常安全", "不完全是", "危险"], tr: ["Evet, çok güvenli", "Pek değil", "Tehlikeli"] }, correct: 0 },
  { id: 4, q: { en: "What is the currency?", fr: "Quelle est la monnaie ?", ar: "ما هي العملة؟", es: "¿Cuál es la moneda?", it: "Qual è la valuta?", de: "Was ist die Währung?", ru: "Какая валюта?", zh: "货币是什么？", tr: "Para birimi nedir?" }, options: { en: ["Dirham (AED)", "Dollar", "Euro"], fr: ["Dirham (AED)", "Dollar", "Euro"], ar: ["الدرهم", "دولار", "يورو"], es: ["Dírham", "Dólar", "Euro"], it: ["Dirham", "Dollaro", "Euro"], de: ["Dirham", "Dollar", "Euro"], ru: ["Дирхам", "Доллар", "Евро"], zh: ["迪拉姆", "美元", "欧元"], tr: ["Dirhem", "Dolar", "Euro"] }, correct: 0 },
  { id: 5, q: { en: "Golden Visa duration?", fr: "Durée du Golden Visa ?", ar: "مدة الإقامة الذهبية؟", es: "¿Duración Golden Visa?", it: "Durata Golden Visa?", de: "Dauer Golden Visa?", ru: "Срок Золотой Визы?", zh: "黄金签证期限？", tr: "Altın Vize süresi?" }, options: { en: ["10 Years", "2 Years", "Lifetime"], fr: ["10 Ans", "2 Ans", "Vie"], ar: ["10 سنوات", "سنتين", "مدى الحياة"], es: ["10 Años", "2 Años", "De por vida"], it: ["10 Anni", "2 Anni", "A vita"], de: ["10 Jahre", "2 Jahre", "Lebenslang"], ru: ["10 Лет", "2 Года", "Пожизненно"], zh: ["10年", "2年", "终身"], tr: ["10 Yıl", "2 Yıl", "Ömür Boyu"] }, correct: 0 },
  { id: 6, q: { en: "Tallest building?", fr: "Bâtiment le plus haut ?", ar: "أطول برج؟", es: "¿Edificio más alto?", it: "Edificio più alto?", de: "Höchstes Gebäude?", ru: "Самое высокое здание?", zh: "最高的建筑？", tr: "En yüksek bina?" }, options: { en: ["Burj Khalifa", "Empire State", "Eiffel Tower"], fr: ["Burj Khalifa", "Empire State", "Tour Eiffel"], ar: ["برج خليفة", "إمباير ستيت", "برج إيفل"], es: ["Burj Khalifa", "Empire State", "Torre Eiffel"], it: ["Burj Khalifa", "Empire State", "Torre Eiffel"], de: ["Burj Khalifa", "Empire State", "Eiffelturm"], ru: ["Бурдж Халифа", "Эмпайр Стейт", "Эйфелева башня"], zh: ["哈利法塔", "帝国大厦", "埃菲尔铁塔"], tr: ["Burj Khalifa", "Empire State", "Eyfel Kulesi"] }, correct: 0 },
  { id: 7, q: { en: "Rental yields?", fr: "Rendements locatifs ?", ar: "عائدات الإيجار؟", es: "¿Rendimientos alquiler?", it: "Rendimenti affitto?", de: "Mietrenditen?", ru: "Доход от аренды?", zh: "租金收益？", tr: "Kira getirileri?" }, options: { en: ["High (6-10%)", "Low (1-2%)", "Negative"], fr: ["Élevés (6-10%)", "Faibles (1-2%)", "Négatifs"], ar: ["عالية (6-10%)", "منخفضة (1-2%)", "سلبية"], es: ["Altos (6-10%)", "Bajos (1-2%)", "Negativos"], it: ["Alti (6-10%)", "Bassi (1-2%)", "Negativi"], de: ["Hoch (6-10%)", "Niedrig (1-2%)", "Negativ"], ru: ["Высокий (6-10%)", "Низкий (1-2%)", "Отрицательный"], zh: ["高 (6-10%)", "低 (1-2%)", "负"], tr: ["Yüksek (%6-10)", "Düşük (%1-2)", "Negatif"] }, correct: 0 },
  { id: 8, q: { en: "Buy with Crypto?", fr: "Acheter en Crypto ?", ar: "شراء بالعملات الرقمية؟", es: "¿Comprar con Cripto?", it: "Comprare con Crypto?", de: "Kauf mit Krypto?", ru: "Купить за крипту?", zh: "用加密货币购买？", tr: "Kripto ile al?" }, options: { en: ["Yes", "No", "Illegal"], fr: ["Oui", "Non", "Illégal"], ar: ["نعم", "لا", "غير قانوني"], es: ["Sí", "No", "Ilegal"], it: ["Sì", "No", "Illegale"], de: ["Ja", "Nein", "Illegal"], ru: ["Да", "Нет", "Незаконно"], zh: ["是", "否", "非法"], tr: ["Evet", "Hayır", "Yasadışı"] }, correct: 0 },
  { id: 9, q: { en: "Weather?", fr: "Météo ?", ar: "الطقس؟", es: "¿Clima?", it: "Meteo?", de: "Wetter?", ru: "Погода?", zh: "天气？", tr: "Hava durumu?" }, options: { en: ["Sunny", "Snowy", "Rainy"], fr: ["Ensoleillé", "Neigeux", "Pluvieux"], ar: ["مشمس", "مثلج", "مطر"], es: ["Soleado", "Nevado", "Lluvioso"], it: ["Soleggiato", "Nevoso", "Piovoso"], de: ["Sonnig", "Schnee", "Regnerisch"], ru: ["Солнечно", "Снег", "Дождь"], zh: ["晴朗", "下雪", "多雨"], tr: ["Güneşli", "Karlı", "Yağmurlu"] }, correct: 0 },
  { id: 10, q: { en: "Visa to buy?", fr: "Visa pour acheter ?", ar: "تأشيرة للشراء؟", es: "¿Visa para comprar?", it: "Visto per comprare?", de: "Visum zum Kaufen?", ru: "Виза для покупки?", zh: "买房签证？", tr: "Satın alma vizesi?" }, options: { en: ["No needed", "Yes", "Citizens only"], fr: ["Pas nécessaire", "Oui", "Citoyens seulement"], ar: ["غير مطلوبة", "نعم", "مواطنين فقط"], es: ["No necesaria", "Sí", "Solo ciudadanos"], it: ["Non necessario", "Sì", "Solo cittadini"], de: ["Nicht nötig", "Ja", "Nur Bürger"], ru: ["Не нужно", "Да", "Только граждане"], zh: ["不需要", "是", "仅限公民"], tr: ["Gerekmez", "Evet", "Sadece vatandaşlar"] }, correct: 0 }
];

export const COUNTRY_CODES = [
  { code: "+971", country: "UAE", flag: "ae" }, { code: "+1", country: "USA", flag: "us" }, { code: "+44", country: "UK", flag: "gb" },
  { code: "+33", country: "France", flag: "fr" }, { code: "+49", country: "Germany", flag: "de" }, { code: "+39", country: "Italy", flag: "it" },
  { code: "+34", country: "Spain", flag: "es" }, { code: "+7", country: "Russia", flag: "ru" }, { code: "+86", country: "China", flag: "cn" },
  { code: "+91", country: "India", flag: "in" }, { code: "+966", country: "KSA", flag: "sa" }, { code: "+90", country: "Turkey", flag: "tr" },
  { code: "+92", country: "Pakistan", flag: "pk" }, { code: "+20", country: "Egypt", flag: "eg" }, { code: "+965", country: "Kuwait", flag: "kw" },
  { code: "+974", country: "Qatar", flag: "qa" }, { code: "+968", country: "Oman", flag: "om" }, { code: "+973", country: "Bahrain", flag: "bh" }
];

// --- TRANSLATION DATA ---
export const TRANSLATIONS: any = {
  en: {
    cover: { tagline: "0% Tax • High Yields • Total Security", openButton: "Open the Book", investIn: "Invest in", dubai: "Dubai" },
    p1: { intro: "The Global Hub", title: "A World of Opportunity", text1: "Dubai is not just a city; it is a global ecosystem designed for success. Strategically located between East and West, it serves as a gateway to 3 billion people within a 4-hour flight. With state-of-the-art infrastructure and a visionary government, Dubai offers an unmatched environment for growth, stability, and wealth creation.", stat1Label: "Annual Visitors", stat2Label: "Expat Residents" },
    p2: { quote: "\"We do not wait for things to happen, we make them happen.\"", subquote: "– H.H. Sheikh Mohammed bin Rashid Al Maktoum" },
    p3: { title: "0% Taxation", subtitle: "Keep 100% of Your Profits.", text: "Dubai offers one of the most attractive fiscal environments in the world. Investors enjoy 0% income tax, 0% capital gains tax, and 0% property tax. Whether you are generating rental income or flipping properties for profit, every single dollar you make belongs to you.", income: "Income Tax", rental: "Rental Tax", capital: "Capital Gains", property: "Property Tax" },
    p4: { title: "High Rental Yields", subtitle: "Outperforming Global Markets.", text: "Dubai's real estate market consistently offers some of the highest rental yields globally, averaging between 6% to 10% annually. In prime locations, short-term rentals (holiday homes) can generate returns upwards of 12-15%, far surpassing markets like London, New York, or Paris.", longTerm: "Long Term Yields", longTermDesc: "Stable 6-8% NET returns annually.", shortTerm: "Short Term Yields", shortTermDesc: "Lucrative 10-12%+ via holiday homes.", chart: { title: "Market Value Growth" } },
    p5: { title: "Unmatched Security", subtitle: "Peace of Mind for Investors.", text: "Dubai is consistently ranked as one of the safest cities in the world. For investors, the Dubai Land Department (DLD) ensures total transparency. Your money is held in government-regulated Escrow accounts and is only released to developers as construction milestones are met.", security: { safestTitle: "Safety Index", safestDesc: "Ranked top 5 globally for personal safety." }, payment: { title: "Investor Protection", details: "Funds are protected in Escrow accounts until handover." } },
    p6: { title: "Golden Visa", subtitle: "Your Gateway to Residency.", text: "Investing in Dubai property grants you more than just an asset; it grants you a future. Property investors are eligible for the 2-Year Investor Visa or the prestigious 10-Year Golden Visa, allowing you to live, work, and sponsor your family in the UAE.", list: ["10-Year Renewable Residency", "Sponsor Spouse & Children", "100% Business Ownership"], quote: "\"A home that gives you the world.\"" },
    p7: { title: "Global Connectivity", subtitle: "The Center of the World.", text: "Dubai International Airport (DXB) is the busiest international airport in the world, connecting you to over 240 destinations. Whether for business or leisure, the world is at your doorstep. Dubai's ports and logistics hubs also make it a central node in global trade.", stat1: "DXB Airport", stat1Desc: "#1 Busiest Int'l Airport", stat2: "Logistics", stat2Desc: "Global Trade Hub" },
    p8: { title: "Luxury Lifestyle", subtitle: "Beyond Imagination.", text: "Dubai defines modern luxury. From world-class dining and high-end fashion to pristine beaches and championship golf courses, the lifestyle here is second to none. Residents enjoy access to amenities that are considered 5-star privileges elsewhere in the world.", quote: "\"Sun, Sea, and Safety.\"", features: ["Michelin Star Dining", "Pristine Private Beaches", "World-Class Shopping"] },
    p9: { title: "Economic Stability", subtitle: "A Safe Haven.", text: "The UAE Dirham (AED) has been pegged to the US Dollar since 1997, ensuring zero currency risk for international investors. The economy is diverse, robust, and rapidly growing, driven by non-oil sectors like tourism, tech, and finance.", point1: "Currency Peg", point1Desc: "Fixed rate: $1 = AED 3.67", point2: "GDP Growth", point2Desc: "Consistent post-pandemic surplus.", point3: "Diversification", point3Desc: "Thriving non-oil economy." },
    p10: { title: "Vision 2040", subtitle: "The Future Roadmap.", text: "The Dubai 2040 Urban Master Plan aims to make Dubai the best city in the world to live in. The plan includes doubling green spaces, increasing population to 5.8 million, and expanding sustainable transport. Investing now means buying into this future growth.", list: ["Population Growth to 5.8M", "60% Nature Reserves", "Sustainable Urbanism"], tagline: "Investing in tomorrow, today." },
    p11_new: { title: "Tourism Capital", subtitle: "A Magnet for the World.", text: "Dubai is one of the most visited cities globally, welcoming over 16 million tourists annually. This constant influx drives immense demand for short-term rental properties, ensuring high occupancy rates year-round for investors.", stat1: "17M+", stat1Label: "Annual Visitors", stat2: "85%+", stat2Label: "Avg Hotel Occupancy" },
    p12_new: { title: "Business Hub", subtitle: "Global Headquarters.", text: "With over 40 free zones offering 100% foreign ownership and 0% corporate tax for many sectors, Dubai attracts global corporations and startups alike. It is the regional HQ for Fortune 500 companies, driving demand for premium commercial and residential real estate.", list: ["100% Foreign Ownership", "Global Free Zones", "Tech & Finance Hub"], quote: "\"Where business meets innovation.\"" },
    p13_new: { title: "World-Class Infrastructure", subtitle: "Built for Excellence.", text: "Dubai boasts an infrastructure that rivals the best in the world. From top-tier international schools and universities to JCI-accredited hospitals and advanced medical tourism, the city offers everything a family needs to thrive.", point1: "Education", point1Desc: "Branches of global universities.", point2: "Healthcare", point2Desc: "Advanced medical facilities." },
    p14_new: { title: "Ultimate Luxury", subtitle: "A Life Without Compromise.", text: "Living in Dubai means waking up to skyline views, spending weekends on private yachts, and enjoying service that anticipates your every need. Our properties offer infinity pools, private beach access, home cinemas, and concierge services.", text2: "Experience the pinnacle of comfort." },
    back: { title: "Contact Us", websiteValue: "www.mapstonerealestate.com", emailValue: "contact@mapstonegroup.com", phoneValue: "+971-58-592-8787", copyright: "Mapstone Real Estate.", quizCta: "Don't miss your VIP Gift!", quizBtn: "Take the Challenge" },
    quiz: { title: "Dubai Real Estate Challenge", subtitle: "Score 7/10 to unlock your exclusive VIP Gift.", startBtn: "Start Quiz", passTitle: "You are Strong! 😎", failTitle: "Good Try!", failMsg: "You need 7/10 to win the VIP Gift.", formTitle: "Claim Your VIP Gift", name: "Full Name", email: "Email Address", phone: "Phone Number", searchCode: "Search country code...", submit: "Join Elite League", final: "Welcome to the Elite League," }
  },
  fr: {
    cover: { tagline: "0% Impôt • Rendements Élevés • Sécurité Totale", openButton: "Ouvrir le Livre", investIn: "Investir à", dubai: "Dubaï" },
    p1: { intro: "Le Hub Mondial", title: "Un Monde d'Opportunités", text1: "Dubaï n'est pas seulement une ville, c'est un écosystème conçu pour le succès. Située stratégiquement entre l'Est et l'Ouest, elle dessert 3 milliards de personnes à moins de 4 heures de vol. Avec des infrastructures de pointe et un gouvernement visionnaire, Dubaï offre un environnement inégalé pour la croissance et la richesse.", stat1Label: "Visiteurs Annuels", stat2Label: "Expatriés" },
    p2: { quote: "\"Nous n'attendons pas que les choses arrivent, nous les faisons arriver.\"", subquote: "– S.A. Cheikh Mohammed bin Rashid Al Maktoum" },
    p3: { title: "Fiscalité 0%", subtitle: "Gardez 100% de vos profits.", text: "Dubaï offre l'un des environnements fiscaux les plus attractifs au monde. Les investisseurs bénéficient de 0% d'impôt sur le revenu, 0% sur les plus-values et 0% de taxe foncière. Que vous génériez des revenus locatifs ou revendiez, chaque centime est à vous.", income: "Impôt Revenu", rental: "Impôt Locatif", capital: "Plus-values", property: "Taxe Foncière" },
    p4: { title: "Rendements Élevés", subtitle: "Surperformance Mondiale.", text: "Le marché immobilier de Dubaï offre des rendements locatifs parmi les plus élevés, moyennant 6% à 10% par an. Dans les zones prisées, la location courte durée peut générer plus de 12-15%, surpassant Londres, New York ou Paris.", longTerm: "Long Terme", longTermDesc: "6-8% NET stable par an.", shortTerm: "Court Terme", shortTermDesc: "10-12%+ via location saisonnière.", chart: { title: "Croissance du Marché" } },
    p5: { title: "Sécurité Inégalée", subtitle: "Tranquillité d'Esprit.", text: "Dubaï est classée parmi les villes les plus sûres au monde. Pour les investisseurs, le Dubai Land Department (DLD) assure une transparence totale. Vos fonds sont protégés sur des comptes Escrow régulés et ne sont débloqués qu'en fonction de l'avancement des travaux.", security: { safestTitle: "Indice de Sécurité", safestDesc: "Top 5 mondial pour la sécurité." }, payment: { title: "Protection", details: "Fonds protégés sur comptes Escrow." } },
    p6: { title: "Golden Visa", subtitle: "Votre Porte vers la Résidence.", text: "Investir à Dubaï vous offre plus qu'un actif : un avenir. Les investisseurs sont éligibles au visa de 2 ans ou au prestigieux Golden Visa de 10 ans, vous permettant de vivre, travailler et sponsoriser votre famille aux EAU.", list: ["Résidence 10 ans renouvelable", "Sponsoriser famille", "100% Propriété commerciale"], quote: "\"Un foyer qui vous offre le monde.\"" },
    p7: { title: "Connectivité Mondiale", subtitle: "Le Centre du Monde.", text: "L'aéroport international de Dubaï (DXB) est le plus fréquenté au monde, vous reliant à plus de 240 destinations. Que ce soit pour les affaires ou les loisirs, le monde est à votre porte. Les ports de Dubaï sont également des nœuds centraux du commerce mondial.", stat1: "Aéroport DXB", stat1Desc: "#1 Mondial", stat2: "Logistique", stat2Desc: "Hub Commercial" },
    p8: { title: "Style de Vie", subtitle: "Au-delà de l'Imagination.", text: "Dubaï définit le luxe moderne. Des restaurants étoilés à la mode haute couture, en passant par des plages immaculées et des golfs de championnat, le style de vie est sans égal. Les résidents profitent de services considérés comme des privilèges 5 étoiles ailleurs.", quote: "\"Soleil, Mer et Sécurité.\"", features: ["Restaurants Étoilés", "Plages Privées", "Shopping de Luxe"] },
    p9: { title: "Stabilité Économique", subtitle: "Un Havre de Paix.", text: "Le Dirham EAU (AED) est lié au Dollar US depuis 1997, garantissant un risque de change nul. L'économie est diversifiée, robuste et en croissance rapide, portée par le tourisme, la technologie et la finance.", point1: "Ancrage Monétaire", point1Desc: "Taux fixe: 1$ = 3.67 AED", point2: "Croissance PIB", point2Desc: "Excédent constant.", point3: "Diversification", point3Desc: "Économie hors pétrole." },
    p10: { title: "Vision 2040", subtitle: "La Feuille de Route.", text: "Le plan directeur urbain Dubaï 2040 vise à faire de Dubaï la meilleure ville où vivre. Le plan inclut le doublement des espaces verts et l'augmentation de la population à 5,8 millions. Investir maintenant, c'est miser sur cette croissance future.", list: ["Population vers 5.8M", "60% Espaces Verts", "Urbanisme Durable"], tagline: "Investir dans demain, aujourd'hui." },
    p11_new: { title: "Capitale du Tourisme", subtitle: "Un Aimant Mondial.", text: "Dubaï est l'une des villes les plus visitées, accueillant plus de 16 millions de touristes par an. Cet afflux constant alimente une immense demande pour la location courte durée, assurant des taux d'occupation élevés.", stat1: "17M+", stat1Label: "Visiteurs Annuels", stat2: "85%+", stat2Label: "Occupation Hôtelière" },
    p12_new: { title: "Hub d'Affaires", subtitle: "Quartier Général Mondial.", text: "Avec plus de 40 zones franches offrant 100% de propriété étrangère et 0% d'impôt sur les sociétés, Dubaï attire start-ups et multinationales. C'est le QG régional des entreprises Fortune 500.", list: ["100% Propriété Étrangère", "Zones Franches", "Tech & Finance"], quote: "\"Où le business rencontre l'innovation.\"" },
    p13_new: { title: "Infrastructure", subtitle: "Excellence Bâtie.", text: "Dubaï possède une infrastructure rivalisant avec les meilleures. Des écoles et universités internationales de premier plan aux hôpitaux accrédités JCI, la ville offre tout ce dont une famille a besoin pour s'épanouir.", point1: "Éducation", point1Desc: "Universités mondiales.", point2: "Santé", point2Desc: "Installations médicales avancées." },
    p14_new: { title: "Luxe Ultime", subtitle: "Une Vie sans Compromis.", text: "Vivre à Dubaï, c'est se réveiller avec vue sur la skyline, passer ses week-ends sur des yachts privés et profiter d'un service anticipant vos besoins. Nos propriétés offrent piscines à débordement, cinémas privés et conciergerie.", text2: "Vivez le sommet du confort." },
    back: { title: "Contactez-nous", websiteValue: "www.mapstonerealestate.com", emailValue: "contact@mapstonegroup.com", phoneValue: "+971-58-592-8787", copyright: "Mapstone Real Estate.", quizCta: "Gagnez votre cadeau VIP !", quizBtn: "Commencer le Quiz" },
    quiz: { title: "Défi Immobilier Dubaï", subtitle: "Score 7/10 pour débloquer votre cadeau VIP.", startBtn: "Démarrer", passTitle: "Vous êtes Fort ! 😎", failTitle: "Bien essayé !", failMsg: "Il faut 7/10 pour gagner.", formTitle: "Recevoir votre Cadeau", name: "Nom Complet", email: "Adresse Email", phone: "Numéro de Tél", searchCode: "Code pays...", submit: "Rejoindre l'Élite", final: "Bienvenue dans l'Élite," }
  },
  ar: {
    cover: { tagline: "0% ضرائب • عوائد عالية • أمان تام", openButton: "افتح الكتاب", investIn: "استثمر في", dubai: "دبي" },
    p1: { intro: "المركز العالمي", title: "عالم من الفرص", text1: "دبي ليست مجرد مدينة؛ إنها نظام بيئي عالمي مصمم للنجاح. بموقعها الاستراتيجي بين الشرق والغرب، تخدم 3 مليارات نسمة على بعد 4 ساعات طيران. مع بنية تحتية متطورة وقيادة ذات رؤية، توفر دبي بيئة لا مثيل لها للنمو والثراء.", stat1Label: "زوار سنوياً", stat2Label: "سكان وافدين" },
    p2: { quote: "\"نحن لا ننتظر الأحداث لتقع، بل نصنعها.\"", subquote: "– سمو الشيخ محمد بن راشد آل مكتوم" },
    p3: { title: "0% ضرائب", subtitle: "احتفظ بـ 100% من أرباحك.", text: "توفر دبي واحدة من أكثر البيئات المالية جاذبية في العالم. يتمتع المستثمرون بـ 0% ضريبة دخل، 0% ضريبة أرباح رأس المال، و 0% ضريبة أملاك. كل درهم تكسبه هو ملك لك بالكامل.", income: "ضريبة الدخل", rental: "ضريبة الإيجار", capital: "أرباح رأس المال", property: "ضريبة الأملاك" },
    p4: { title: "عوائد إيجارية عالية", subtitle: "تتفوق على الأسواق العالمية.", text: "يقدم سوق دبي العقاري باستمرار أعلى العوائد الإيجارية عالمياً، بمتوسط 6% إلى 10% سنوياً. في المناطق المميزة، يمكن للإيجارات قصيرة الأجل تحقيق عوائد تفوق 12-15%، متجاوزة لندن ونيويورك.", longTerm: "عائد طويل الأمد", longTermDesc: "6-8% صافي ومستقر.", shortTerm: "عائد قصير الأمد", shortTermDesc: "10-12% منازل عطلات.", chart: { title: "نمو القيمة السوقية" } },
    p5: { title: "أمان لا يضاهى", subtitle: "راحة بال للمستثمرين.", text: "تصنف دبي باستمرار كواحدة من أكثر المدن أماناً في العالم. بالنسبة للمستثمرين، تضمن دائرة الأراضي والأملاك الشفافية التامة. أموالك محفوظة في حسابات الضمان ولا تصرف للمطور إلا مع إنجاز البناء.", security: { safestTitle: "مؤشر الأمان", safestDesc: "من الخمسة الأوائل عالمياً." }, payment: { title: "حماية المستثمر", details: "الأموال محمية في حسابات الضمان." } },
    p6: { title: "الإقامة الذهبية", subtitle: "بوابتك للاستقرار.", text: "الاستثمار في عقارات دبي يمنحك مستقبلاً. المستثمرون مؤهلون للحصول على تأشيرة مستثمر لمدة عامين أو الإقامة الذهبية المرموقة لمدة 10 سنوات، مما يتيح لك العيش والعمل وكفالة عائلتك.", list: ["إقامة 10 سنوات متجددة", "كفالة الزوجة والأبناء", "تملك تجاري 100%"], quote: "\"وطن يمنحك العالم.\"" },
    p7: { title: "اتصال عالمي", subtitle: "مركز العالم.", text: "مطار دبي الدولي (DXB) هو الأكثر ازدحاماً في العالم، يربطك بأكثر من 240 وجهة. سواء للعمل أو الترفيه، العالم عند عتبة دارك. موانئ دبي تجعلها عقدة مركزية في التجارة العالمية.", stat1: "مطار دبي", stat1Desc: "الأول عالمياً", stat2: "لوجستيات", stat2Desc: "مركز تجاري عالمي" },
    p8: { title: "أسلوب حياة فاخر", subtitle: "فوق الخيال.", text: "دبي تعرف الفخامة الحديثة. من المطاعم العالمية والأزياء الراقية إلى الشواطئ البكر وملاعب الجولف، أسلوب الحياة هنا لا يضاهى. يتمتع السكان بخدمات تعتبر امتيازات 5 نجوم في أماكن أخرى.", quote: "\"شمس، بحر، وأمان.\"", features: ["مطاعم ميشلان", "شواطئ خاصة", "تسوق عالمي"] },
    p9: { title: "استقرار اقتصادي", subtitle: "ملاذ آمن.", text: "يرتبط الدرهم الإماراتي بالدولار الأمريكي منذ 1997، مما يضمن انعدام مخاطر العملة. الاقتصاد متنوع وقوي وسريع النمو، مدفوعاً بقطاعات غير نفطية مثل السياحة والتكنولوجيا.", point1: "ربط العملة", point1Desc: "سعر ثابت: 1$ = 3.67 د.إ", point2: "نمو الناتج المحلي", point2Desc: "فائض مستمر.", point3: "تنوع", point3Desc: "اقتصاد مزدهر غير نفطي." },
    p10: { title: "رؤية 2040", subtitle: "خارطة المستقبل.", text: "تهدف خطة دبي الحضرية 2040 لجعل دبي أفضل مدينة للعيش. تشمل الخطة مضاعفة المساحات الخضراء وزيادة السكان إلى 5.8 مليون. الاستثمار الآن يعني الشراء في هذا النمو المستقبلي.", list: ["نمو سكاني لـ 5.8 مليون", "60% محميات طبيعية", "تحضر مستدام"], tagline: "استثمار في الغد، اليوم." },
    p11_new: { title: "السياحة العالمية", subtitle: "مغناطيس للعالم.", text: "تستقطب دبي الملايين سنوياً، مما يرفع الطلب على الإيجارات.", stat1: "17M+", stat1Label: "زوار سنوياً", stat2: "85%+", stat2Label: "إشغال الفنادق" },
    p12_new: { title: "مركز الأعمال", subtitle: "مقر عالمي.", text: "مع أكثر من 40 منطقة حرة توفر ملكية أجنبية 100% و0% ضرائب شركات، تجذب دبي الشركات العالمية والناشئة. إنها المقر الإقليمي لشركات فورتشن 500.", list: ["ملكية أجنبية 100%", "مناطق حرة", "تكنولوجيا وتمويل"], quote: "\"حيث يلتقي العمل بالابتكار.\"" },
    p13_new: { title: "بنية تحتية عالمية", subtitle: "بنيت للتميز.", text: "تمتلك دبي بنية تحتية تنافس الأفضل عالمياً. من المدارس والجامعات الدولية إلى المستشفيات المعتمدة والسياحة العلاجية، توفر المدينة كل ما تحتاجه العائلة للازدهار.", point1: "التعليم", point1Desc: "جامعات عالمية.", point2: "الصحة", point2Desc: "مرافق طبية متطورة." },
    p14_new: { title: "فخامة مطلقة", subtitle: "حياة بلا مساومات.", text: "العيش في دبي يعني الاستيقاظ على مناظر الأفق، وقضاء عطلات نهاية الأسبوع على اليخوت، والتمتع بخدمة تسبق احتياجاتك. عقاراتنا توفر مسابح لامتناهية وشواطئ خاصة.", text2: "اختبر قمة الراحة." },
    back: { title: "اتصل بنا", websiteValue: "www.mapstonerealestate.com", emailValue: "contact@mapstonegroup.com", phoneValue: "+971-58-592-8787", copyright: "مابستون العقارية.", quizCta: "لا تفوت هديتك الـ VIP!", quizBtn: "ابدأ التحدي" },
    quiz: { title: "تحدي عقارات دبي", subtitle: "سجل 7/10 لفتح هديتك الـ VIP.", startBtn: "ابدأ الاختبار", passTitle: "أنت قوي! 😎", failTitle: "حاول مرة أخرى!", failMsg: "تحتاج 7/10 للفوز.", formTitle: "استلم هديتك", name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف", searchCode: "بحث عن الكود...", submit: "انضم للنخبة", final: "أهلاً بك في النخبة،" }
  },
  es: {
    cover: { tagline: "0% Impuestos • Alto Rendimiento • Seguridad Total", openButton: "Abrir el Libro", investIn: "Invertir en", dubai: "Dubái" },
    p1: { intro: "El Hub Global", title: "Un Mundo de Oportunidades", text1: "Dubái no es solo una ciudad; es un ecosistema diseñado para el éxito. Ubicada estratégicamente, sirve a 3 mil millones de personas a menos de 4 horas de vuelo. Con infraestructura de punta y un gobierno visionario, ofrece un entorno inigualable para el crecimiento y la riqueza.", stat1Label: "Visitantes Anuales", stat2Label: "Expatriados" },
    p2: { quote: "\"No esperamos que las cosas sucedan, hacemos que sucedan.\"", subquote: "– S.A. Sheikh Mohammed bin Rashid Al Maktoum" },
    p3: { title: "Impuestos 0%", subtitle: "Conserve el 100% de sus ganancias.", text: "Dubái ofrece uno de los entornos fiscales más atractivos. Los inversores disfrutan de 0% impuesto sobre la renta, 0% sobre ganancias de capital y 0% impuesto a la propiedad. Cada dólar que gana es suyo.", income: "Impuesto Renta", rental: "Impuesto Alquiler", capital: "Plusvalía", property: "Impuesto Propiedad" },
    p4: { title: "Altos Rendimientos", subtitle: "Superando Mercados Globales.", text: "El mercado inmobiliario de Dubái ofrece rendimientos de alquiler consistentemente altos, promediando 6-10% anual. En ubicaciones premium, los alquileres a corto plazo pueden generar más del 12-15%, superando a Londres o Nueva York.", longTerm: "Largo Plazo", longTermDesc: "6-8% NETO estable anual.", shortTerm: "Corto Plazo", shortTermDesc: "10-12%+ vía vacacional.", chart: { title: "Crecimiento del Mercado" } },
    p5: { title: "Seguridad Inigualable", subtitle: "Tranquilidad para Inversores.", text: "Dubái es una de las ciudades más seguras del mundo. El Departamento de Tierras (DLD) garantiza transparencia total. Sus fondos se protegen en cuentas Escrow reguladas y solo se liberan según el avance de la obra.", security: { safestTitle: "Índice de Seguridad", safestDesc: "Top 5 global en seguridad." }, payment: { title: "Protección", details: "Fondos protegidos en Escrow." } },
    p6: { title: "Golden Visa", subtitle: "Su Puerta a la Residencia.", text: "Invertir en Dubái le otorga un futuro. Los inversores son elegibles para la Visa de 2 años o la prestigiosa Golden Visa de 10 años, permitiéndole vivir, trabajar y patrocinar a su familia.", list: ["Residencia 10 años renovable", "Patrocinar familia", "100% Propiedad comercial"], quote: "\"Un hogar que le da el mundo.\"" },
    p7: { title: "Conectividad Global", subtitle: "El Centro del Mundo.", text: "El Aeropuerto Internacional de Dubái (DXB) es el más transitado del mundo, conectando con más de 240 destinos. Ya sea por negocios o placer, el mundo está en su puerta.", stat1: "Aeropuerto DXB", stat1Desc: "#1 Mundial", stat2: "Logística", stat2Desc: "Hub de Comercio" },
    p8: { title: "Estilo de Vida", subtitle: "Más allá de la Imaginación.", text: "Dubái define el lujo moderno. Desde cenas con estrellas Michelin hasta playas vírgenes y golf de campeonato. Los residentes disfrutan de servicios que son privilegios de 5 estrellas en otros lugares.", quote: "\"Sol, Mar y Seguridad.\"", features: ["Cenas Michelin", "Playas Privadas", "Compras de Lujo"] },
    p9: { title: "Estabilidad Económica", subtitle: "Un Refugio Seguro.", text: "El Dirham (AED) está vinculado al Dólar desde 1997, asegurando cero riesgo cambiario. La economía es diversa y robusta, impulsada por turismo, tecnología y finanzas.", point1: "Vinculación", point1Desc: "Tasa fija: $1 = AED 3.67", point2: "Crecimiento PIB", point2Desc: "Superávit constante.", point3: "Diversificación", point3Desc: "Economía no petrolera." },
    p10: { title: "Visión 2040", subtitle: "Hoja de Ruta.", text: "El Plan Urbano Dubái 2040 busca hacer de Dubái la mejor ciudad para vivir. Incluye duplicar espacios verdes y aumentar la población a 5.8 millones. Invertir ahora es comprar en este crecimiento futuro.", list: ["Población a 5.8M", "60% Reservas Naturales", "Urbanismo Sostenible"], tagline: "Invertir en el mañana, hoy." },
    p11_new: { title: "Capital del Turismo", subtitle: "Un Imán Mundial.", text: "Dubái recibe más de 16 millones de turistas al año. Esta afluencia impulsa una inmensa demanda de alquileres a corto plazo, asegurando alta ocupación.", stat1: "17M+", stat1Label: "Visitantes Anuales", stat2: "85%+", stat2Label: "Ocupación Hotelera" },
    p12_new: { title: "Centro de Negocios", subtitle: "Sede Global.", text: "Con más de 40 zonas francas con 100% propiedad extranjera y 0% impuestos, Dubái atrae corporaciones globales. Es la sede regional de empresas Fortune 500.", list: ["100% Propiedad Extranjera", "Zonas Francas", "Tecnología y Finanzas"], quote: "\"Donde el negocio encuentra innovación.\"" },
    p13_new: { title: "Infraestructura", subtitle: "Excelencia Construida.", text: "Dubái tiene una infraestructura de clase mundial. Desde escuelas internacionales hasta hospitales acreditados, la ciudad ofrece todo para que una familia prospere.", point1: "Educación", point1Desc: "Universidades globales.", point2: "Salud", point2Desc: "Atención Avanzada." },
    p14_new: { title: "Lujo Supremo", subtitle: "Vida sin Compromisos.", text: "Vivir en Dubái es despertar con vistas al skyline y disfrutar de un servicio anticipado. Nuestras propiedades ofrecen piscinas infinitas y cines privados.", text2: "Experimente la cima del confort." },
    back: { title: "Contáctenos", websiteValue: "www.mapstonerealestate.com", emailValue: "contact@mapstonegroup.com", phoneValue: "+971-58-592-8787", copyright: "Mapstone Real Estate.", quizCta: "¡No pierda su regalo VIP!", quizBtn: "Tomar el Reto" },
    quiz: { title: "Desafío Inmobiliario", subtitle: "Obtenga 7/10 para su regalo VIP.", startBtn: "Iniciar Quiz", passTitle: "¡Eres Fuerte! 😎", failTitle: "Buen Intento", failMsg: "Necesitas 7/10 para ganar.", formTitle: "Reclamar Regalo", name: "Nombre Completo", email: "Correo", phone: "Teléfono", searchCode: "Buscar código...", submit: "Unirse a la Élite", final: "Bienvenido a la Élite," }
  },
  it: {
    cover: { tagline: "0% Tasse • Alti Rendimenti • Sicurezza Totale", openButton: "Apri il Libro", investIn: "Investire a", dubai: "Dubai" },
    p1: { intro: "L'Hub Globale", title: "Un Mondo di Opportunità", text1: "Dubai non è solo una città; è un ecosistema globale progettato per il successo. Situata strategicamente tra Oriente e Occidente, serve 3 miliardi di persone entro 4 ore di volo. Con infrastrutture all'avanguardia e un governo visionario, Dubai offre un ambiente ineguagliabile per crescita, stabilità e creazione di ricchezza.", stat1Label: "Visitatori Annuali", stat2Label: "Espatriati" },
    p2: { quote: "\"Non aspettiamo che le cose accadano, le facciamo accadere.\"", subquote: "– S.A. Sceicco Mohammed bin Rashid Al Maktoum" },
    p3: { title: "Tassazione 0%", subtitle: "Tieni il 100% dei tuoi profitti.", text: "Dubai offre uno degli ambienti fiscali più attraenti al mondo. Gli investitori godono di 0% imposte sul reddito, 0% sulle plusvalenze e 0% imposte sulla proprietà. Che tu stia generando reddito da locazione o vendendo proprietà, ogni centesimo è tuo.", income: "Imposta Reddito", rental: "Imposta Affitto", capital: "Plusvalenze", property: "Imposta Proprietà" },
    p4: { title: "Alti Rendimenti", subtitle: "Superando i Mercati Globali.", text: "Il mercato immobiliare di Dubai offre costantemente rendimenti da locazione tra i più alti a livello globale, mediamente tra il 6% e il 10% annuo. In posizioni privilegiate, gli affitti a breve termine possono generare oltre il 12-15%, superando Londra o New York.", longTerm: "Lungo Termine", longTermDesc: "6-8% NETTO stabile annuo.", shortTerm: "Breve Termine", shortTermDesc: "10-12%+ via case vacanze.", chart: { title: "Crescita del Mercato" } },
    p5: { title: "Sicurezza Ineguagliabile", subtitle: "Tranquillità per gli Investitori.", text: "Dubai è costantemente classificata come una delle città più sicure al mondo. Per gli investitori, il Dubai Land Department (DLD) garantisce trasparenza totale. I tuoi fondi sono protetti in conti Escrow regolamentati e rilasciati solo in base ai progressi della costruzione.", security: { safestTitle: "Indice di Sicurezza", safestDesc: "Top 5 globale per sicurezza." }, payment: { title: "Protezione", details: "Fondi protetti in conti Escrow." } },
    p6: { title: "Golden Visa", subtitle: "La Tua Porta per la Residenza.", text: "Investire in proprietà a Dubai ti garantisce più di un asset; ti garantisce un futuro. Gli investitori immobiliari sono idonei per il Visto di 2 anni o il prestigioso Golden Visa di 10 anni, permettendoti di vivere, lavorare e sponsorizzare la tua famiglia.", list: ["Residenza 10 anni rinnovabile", "Sponsorizzare famiglia", "100% Proprietà commerciale"], quote: "\"Una casa che ti dà il mondo.\"" },
    p7: { title: "Connettività Globale", subtitle: "Il Centro del Mondo.", text: "L'Aeroporto Internazionale di Dubai (DXB) è il più trafficato al mondo, collegandoti a oltre 240 destinazioni. Che sia per affari o piacere, il mondo è a portata di mano. I porti di Dubai sono anche nodi centrali nel commercio globale.", stat1: "Aeroporto DXB", stat1Desc: "#1 Mondiale", stat2: "Logistica", stat2Desc: "Hub Commerciale" },
    p8: { title: "Stile di Vita", subtitle: "Oltre l'Immaginazione.", text: "Dubai definisce il lusso moderno. Da cene stellate Michelin e alta moda a spiagge incontaminate e campi da golf da campionato, lo stile di vita qui non ha eguali. I residenti godono di servizi considerati privilegi a 5 stelle altrove.", quote: "\"Sole, Mare e Sicurezza.\"", features: ["Cene Michelin", "Spiagge Private", "Shopping di Lusso"] },
    p9: { title: "Stabilità Economica", subtitle: "Un Porto Sicuro.", text: "Il Dirham EAU (AED) è ancorato al Dollaro USA dal 1997, garantendo zero rischio di cambio. L'economia è diversificata, robusta e in rapida crescita, guidata da settori non petroliferi come turismo, tecnologia e finanza.", point1: "Ancoraggio Valutario", point1Desc: "Tasso fisso: $1 = 3.67 AED", point2: "Crescita PIL", point2Desc: "Surplus costante.", point3: "Diversificazione", point3Desc: "Economia non petrolifera." },
    p10: { title: "Visione 2040", subtitle: "La Tabella di Marcia.", text: "Il Master Plan Urbano Dubai 2040 mira a rendere Dubai la migliore città in cui vivere. Il piano include il raddoppio degli spazi verdi e l'aumento della popolazione a 5,8 milioni. Investire ora significa comprare in questa crescita futura.", list: ["Popolazione a 5.8M", "60% Riserve Naturali", "Urbanistica Sostenibile"], tagline: "Investire nel domani, oggi." },
    p11_new: { title: "Capitale del Turismo", subtitle: "Un Magnete per il Mondo.", text: "Dubai è una delle città più visitate al mondo, accogliendo oltre 16 milioni di turisti all'anno. Questo afflusso costante guida un'immensa domanda di affitti a breve termine, garantendo alti tassi di occupazione.", stat1: "17M+", stat1Label: "Visitatori Annuali", stat2: "85%+", stat2Label: "Occupazione Hotel" },
    p12_new: { title: "Hub d'Affari", subtitle: "Quartier Generale Globale.", text: "Con oltre 40 zone franche che offrono il 100% di proprietà straniera e 0% di imposte societarie, Dubai attrae startup e multinazionali. È il quartier generale regionale per le aziende Fortune 500.", list: ["100% Proprietà Straniera", "Zone Franche", "Tech & Finanza"], quote: "\"Dove il business incontra l'innovazione.\"" },
    p13_new: { title: "Infrastruttura", subtitle: "Eccellenza Costruita.", text: "Dubai vanta un'infrastruttura che rivaleggia con le migliori al mondo. Dalle migliori scuole e università internazionali agli ospedali accreditati JCI, la città offre tutto ciò di cui una famiglia ha bisogno per prosperare.", point1: "Istruzione", point1Desc: "Università globali.", point2: "Sanità", point2Desc: "Strutture mediche avanzate." },
    p14_new: { title: "Lusso Supremo", subtitle: "Una Vita Senza Compromessi.", text: "Vivere a Dubai significa svegliarsi con vista sullo skyline, passare i fine settimana su yacht privati e godere di un servizio che anticipa ogni tua esigenza. Le nostre proprietà offrono piscine a sfioro, cinema privati e concierge.", text2: "Vivi l'apice del comfort." },
    back: { title: "Contattaci", websiteValue: "www.mapstonerealestate.com", emailValue: "contact@mapstonegroup.com", phoneValue: "+971-58-592-8787", copyright: "Mapstone Real Estate.", quizCta: "Non perdere il regalo VIP!", quizBtn: "Inizia Sfida" },
    quiz: { title: "Sfida Immobiliare Dubai", subtitle: "Punteggio 7/10 per sbloccare il regalo VIP.", startBtn: "Inizia Quiz", passTitle: "Sei Forte! 😎", failTitle: "Riprova!", failMsg: "Serve 7/10 per vincere.", formTitle: "Riscatta il Tuo Regalo", name: "Nome Completo", email: "Indirizzo Email", phone: "Numero di Telefono", searchCode: "Cerca codice paese...", submit: "Unisciti all'Elite", final: "Benvenuto nell'Elite," }
  },
  de: {
    cover: { tagline: "0% Steuer • Hohe Renditen • Totale Sicherheit", openButton: "Buch Öffnen", investIn: "Investieren in", dubai: "Dubai" },
    p1: { intro: "Das Globale Zentrum", title: "Eine Welt voller Möglichkeiten", text1: "Dubai ist nicht nur eine Stadt; es ist ein globales Ökosystem, das auf Erfolg ausgelegt ist. Strategisch zwischen Ost und West gelegen, dient es als Tor zu 3 Milliarden Menschen innerhalb von 4 Flugstunden. Mit modernster Infrastruktur und einer visionären Regierung bietet Dubai ein unvergleichliches Umfeld für Wachstum und Wohlstand.", stat1Label: "Jährliche Besucher", stat2Label: "Expat-Bewohner" },
    p2: { quote: "\"Wir warten nicht darauf, dass Dinge geschehen, wir lassen sie geschehen.\"", subquote: "– S.H. Scheich Mohammed bin Rashid Al Maktoum" },
    p3: { title: "0% Besteuerung", subtitle: "Behalten Sie 100% Ihrer Gewinne.", text: "Dubai bietet eines der attraktivsten steuerlichen Umfelder der Welt. Investoren genießen 0% Einkommensteuer, 0% Kapitalertragssteuer und 0% Grundsteuer. Egal, ob Sie Mieteinnahmen generieren oder Immobilien gewinnbringend verkaufen, jeder Cent gehört Ihnen.", income: "Einkommensteuer", rental: "Mietsteuer", capital: "Kapitalertrag", property: "Grundsteuer" },
    p4: { title: "Hohe Mietrenditen", subtitle: "Übertrifft Globale Märkte.", text: "Der Immobilienmarkt in Dubai bietet konstant einige der höchsten Mietrenditen weltweit, durchschnittlich 6% bis 10% jährlich. In erstklassigen Lagen können Kurzzeitvermietungen (Ferienwohnungen) Renditen von über 12-15% erzielen und übertreffen damit Märkte wie London oder New York.", longTerm: "Langfristige Rendite", longTermDesc: "Stabile 6-8% NETTO jährlich.", shortTerm: "Kurzfristige Rendite", shortTermDesc: "Lukrative 10-12%+ via Ferienwohnungen.", chart: { title: "Marktwertwachstum" } },
    p5: { title: "Unübertroffene Sicherheit", subtitle: "Sorgenfreiheit für Investoren.", text: "Dubai wird konsequent als eine der sichersten Städte der Welt eingestuft. Für Investoren gewährleistet das Dubai Land Department (DLD) absolute Transparenz. Ihr Geld wird auf staatlich regulierten Treuhandkonten gehalten und nur nach Baufortschritt freigegeben.", security: { safestTitle: "Sicherheitsindex", safestDesc: "Top 5 weltweit für Sicherheit." }, payment: { title: "Investorenschutz", details: "Gelder bis zur Übergabe geschützt." } },
    p6: { title: "Golden Visa", subtitle: "Ihr Tor zur Residenz.", text: "Eine Investition in Dubai-Immobilien gewährt Ihnen mehr als nur einen Vermögenswert; sie gewährt Ihnen eine Zukunft. Immobilieninvestoren haben Anspruch auf das 2-Jahres-Visum oder das prestigeträchtige 10-Jahres-Golden-Visa.", list: ["10 Jahre erneuerbare Residenz", "Familie sponsern", "100% Geschäftseigentum"], quote: "\"Ein Zuhause, das Ihnen die Welt gibt.\"" },
    p7: { title: "Globale Konnektivität", subtitle: "Das Zentrum der Welt.", text: "Der Dubai International Airport (DXB) ist der verkehrsreichste internationale Flughafen der Welt und verbindet Sie mit über 240 Zielen. Ob geschäftlich oder privat, die Welt liegt vor Ihrer Haustür. Dubais Häfen sind zudem zentrale Knotenpunkte im Welthandel.", stat1: "Flughafen DXB", stat1Desc: "#1 Weltweit", stat2: "Logistik", stat2Desc: "Globaler Handelsknoten" },
    p8: { title: "Luxus-Lifestyle", subtitle: "Jenseits der Vorstellungskraft.", text: "Dubai definiert modernen Luxus. Von Michelin-Stern-Restaurants und High-End-Mode bis hin zu unberührten Stränden und Meisterschaftsgolfplätzen ist der Lebensstil hier unübertroffen. Bewohner genießen Annehmlichkeiten, die anderswo als 5-Sterne-Privilegien gelten.", quote: "\"Sonne, Meer und Sicherheit.\"", features: ["Michelin-Dining", "Privatstrände", "Luxus-Shopping"] },
    p9: { title: "Wirtschaftliche Stabilität", subtitle: "Ein Sicherer Hafen.", text: "Der VAE-Dirham (AED) ist seit 1997 an den US-Dollar gekoppelt, was null Währungsrisiko für internationale Investoren garantiert. Die Wirtschaft ist diversifiziert, robust und wächst schnell, angetrieben von Nicht-Öl-Sektoren wie Tourismus und Tech.", point1: "Währungsbindung", point1Desc: "Fester Kurs: $1 = 3.67 AED", point2: "BIP-Wachstum", point2Desc: "Konstanter Überschuss.", point3: "Diversifikation", point3Desc: "Blühende Nicht-Öl-Wirtschaft." },
    p10: { title: "Vision 2040", subtitle: "Der Zukunftsplan.", text: "Der Dubai 2040 Urban Master Plan zielt darauf ab, Dubai zur lebenswertesten Stadt der Welt zu machen. Der Plan umfasst die Verdoppelung von Grünflächen und das Bevölkerungswachstum auf 5,8 Millionen. Jetzt zu investieren bedeutet, in dieses zukünftige Wachstum einzukaufen.", list: ["Bevölkerung auf 5.8M", "60% Naturschutzgebiete", "Nachhaltiger Städtebau"], tagline: "Heute in morgen investieren." },
    p11_new: { title: "Tourismus-Hauptstadt", subtitle: "Ein Magnet für die Welt.", text: "Dubai ist eine der meistbesuchten Städte weltweit und begrüßt jährlich über 16 Millionen Touristen. Dieser konstante Zustrom treibt eine immense Nachfrage nach Kurzzeitvermietungen an und sichert hohe Belegungsraten.", stat1: "17M+", stat1Label: "Jährliche Besucher", stat2: "85%+", stat2Label: "Hotelbelegung" },
    p12_new: { title: "Geschäftszentrum", subtitle: "Globales Hauptquartier.", text: "Mit über 40 Freihandelszonen, die 100% ausländisches Eigentum und 0% Körperschaftsteuer bieten, zieht Dubai Startups und Konzerne an. Es ist das regionale HQ für Fortune-500-Unternehmen.", list: ["100% Auslandsbesitz", "Freihandelszonen", "Tech & Finanzen"], quote: "\"Wo Geschäft auf Innovation trifft.\"" },
    p13_new: { title: "Weltklasse-Infrastruktur", subtitle: "Gebaut für Exzellenz.", text: "Dubai verfügt über eine Infrastruktur, die mit den besten der Welt konkurriert. Von internationalen Top-Schulen und Universitäten bis hin zu JCI-akkreditierten Krankenhäusern bietet die Stadt alles, was eine Familie braucht.", point1: "Bildung", point1Desc: "Globale Universitäten.", point2: "Gesundheit", point2Desc: "Fortschrittliche Medizin." },
    p14_new: { title: "Ultimativer Luxus", subtitle: "Ein Leben ohne Kompromisse.", text: "In Dubai zu leben bedeutet, mit Blick auf die Skyline aufzuwachen, Wochenenden auf privaten Yachten zu verbringen und Service zu genießen, der jeden Wunsch vorwegnimmt. Unsere Immobilien bieten Infinity-Pools und Privatkinos.", text2: "Erleben Sie den Gipfel des Komforts." },
    back: { title: "Kontaktieren Sie uns", websiteValue: "www.mapstonerealestate.com", emailValue: "contact@mapstonegroup.com", phoneValue: "+971-58-592-8787", copyright: "Mapstone Real Estate.", quizCta: "Verpassen Sie nicht Ihr VIP-Geschenk!", quizBtn: "Quiz Starten" },
    quiz: { title: "Dubai Immobilien-Challenge", subtitle: "Erzielen Sie 7/10 für Ihr VIP-Geschenk.", startBtn: "Quiz Starten", passTitle: "Sie sind Stark! 😎", failTitle: "Guter Versuch!", failMsg: "Sie brauchen 7/10 für den Sieg.", formTitle: "Geschenk Anfordern", name: "Vollständiger Name", email: "E-Mail-Adresse", phone: "Telefonnummer", searchCode: "Ländercode suchen...", submit: "Elite-Liga beitreten", final: "Willkommen in der Elite-Liga," }
  },
  ru: {
    cover: { tagline: "0% Налог • Высокий Доход • Полная Безопасность", openButton: "Открыть Книгу", investIn: "Инвестировать в", dubai: "Дубай" },
    p1: { intro: "Глобальный Хаб", title: "Мир Возможностей", text1: "Дубай — это не просто город; это глобальная экосистема, созданная для успеха. Стратегически расположенный между Востоком и Западом, он служит воротами для 3 миллиардов человек в пределах 4 часов полета. С передовой инфраструктурой и дальновидным правительством, Дубай предлагает непревзойденные условия для роста и богатства.", stat1Label: "Посетителей/Год", stat2Label: "Экспаты" },
    p2: { quote: "\"Мы не ждем, пока что-то произойдет, мы заставляем это происходить.\"", subquote: "– Шейх Мохаммед ибн Рашид Аль Мактум" },
    p3: { title: "Налогообложение 0%", subtitle: "Сохраните 100% прибыли.", text: "Дубай предлагает одну из самых привлекательных налоговых сред в мире. Инвесторы наслаждаются 0% налога на доход, 0% на прирост капитала и 0% налога на недвижимость. Каждый заработанный доллар принадлежит вам.", income: "Налог на Доход", rental: "Налог на Аренду", capital: "Прирост Капитала", property: "Налог на Недвижимость" },
    p4: { title: "Высокая Доходность", subtitle: "Опережая Глобальные Рынке.", text: "Рынок недвижимости Дубая стабильно предлагает одну из самых высоких арендных доходностей в мире, в среднем 6-10% годовых. В престижных районах краткосрочная аренда может приносить более 12-15%, превосходя Лондон или Нью-Йорк.", longTerm: "Долгосрочный Доход", longTermDesc: "Стабильные 6-8% НЕТТО/год.", shortTerm: "Краткосрочный Доход", shortTermDesc: "Выгодные 10-12%+ на аренде.", chart: { title: "Рост Рыночной Стоимости" } },
    p5: { title: "Непревзойденная Безопасность", subtitle: "Спокойствие для Инвесторов.", text: "Дубай неизменно входит в число самых безопасных городов мира. Для инвесторов Земельный департамент Дубая (DLD) гарантирует полную прозрачность. Ваши деньги хранятся на регулируемых счетах эскроу и выплачиваются только по мере строительства.", security: { safestTitle: "Индекс Безопасности", safestDesc: "Топ-5 в мире по безопасности." }, payment: { title: "Защита Инвестора", details: "Средства защищены на эскроу-счетах." } },
    p6: { title: "Золотая Виза", subtitle: "Ваш Путь к Резидентству.", text: "Инвестиции в недвижимость Дубая дают больше, чем просто актив; они дают будущее. Инвесторы имеют право на 2-летнюю визу или престижную 10-летнюю Золотую Визу, позволяющую жить, работать и спонсировать семью.", list: ["10-летнее резидентство", "Спонсорство семьи", "100% Владение бизнесом"], quote: "\"Дом, который дает вам мир.\"" },
    p7: { title: "Глобальная Связность", subtitle: "Центр Мира.", text: "Международный аэропорт Дубая (DXB) — самый загруженный в мире, соединяющий вас с более чем 240 направлениями. Будь то бизнес или отдых, мир у вашего порога. Порты Дубая также являются центральными узлами мировой торговли.", stat1: "Аэропорт DXB", stat1Desc: "№1 в мире", stat2: "Логистика", stat2Desc: "Глобальный Торговый Хаб" },
    p8: { title: "Роскошный Образ Жизни", subtitle: "За Гранью Воображения.", text: "Дубай определяет современную роскошь. От ресторанов Мишлен и высокой моды до нетронутых пляжей и чемпионских полей для гольфа. Жители наслаждаются удобствами, которые считаются привилегиями 5 звезд в других местах.", quote: "\"Солнце, Море и Безопасность.\"", features: ["Рестораны Мишлен", "Частные Пляжи", "Роскошный Шопинг"] },
    p9: { title: "Экономическая Стабильность", subtitle: "Безопасная Гавань.", text: "Дирхам ОАЭ (AED) привязан к доллару США с 1997 года, гарантируя нулевой валютный риск. Экономика разнообразна, надежна и быстро растет благодаря ненефтяным секторам, таким как туризм и технологии.", point1: "Привязка Валюты", point1Desc: "Фикс. курс: $1 = 3.67 AED", point2: "Рост ВВП", point2Desc: "Стабильный профицит.", point3: "Диверсификация", point3Desc: "Процветающая экономика." },
    p10: { title: "Видение 2040", subtitle: "Дорожная Карта Будущего.", text: "Генеральный план Дубая 2040 направлен на то, чтобы сделать Дубай лучшим городом для жизни. План включает удвоение зеленых зон и рост населения до 5,8 млн. Инвестировать сейчас — значит покупать этот будущий рост.", list: ["Рост населения до 5.8М", "60% Природные Заповедники", "Устойчивый Урбанизм"], tagline: "Инвестиции в завтра, сегодня." },
    p11_new: { title: "Столица Туризма", subtitle: "Магнит для Мира.", text: "Дубай — один из самых посещаемых городов мира, принимающий более 16 млн туристов ежегодно. Этот постоянный приток создает огромный спрос на краткосрочную аренду, обеспечивая высокую заполняемость.", stat1: "17М+", stat1Label: "Посетителей/Год", stat2: "85%+", stat2Label: "Заполняемость Отелей" },
    p12_new: { title: "Бизнес-Хаб", subtitle: "Глобальная Штаб-квартира.", text: "С более чем 40 свободными зонами (100% иностр. владение, 0% налогов), Дубай привлекает корпорации. Это региональная штаб-квартира для компаний из списка Fortune 500.", list: ["100% Иностр. Владение", "Свободные Зоны", "Технологии и Финансы"], quote: "\"Где бизнес встречает инновации.\"" },
    p13_new: { title: "Инфраструктура Мирового Класса", subtitle: "Построено для Совершенства.", text: "Дубай может похвастаться инфраструктурой, соперничающей с лучшими в мире. От ведущих международных школ до больниц с аккредитацией JCI, город предлагает все для процветания семьи.", point1: "Образование", point1Desc: "Глобальные университеты.", point2: "Здравоохранение", point2Desc: "Передовая медицина." },
    p14_new: { title: "Абсолютная Роскошь", subtitle: "Жизнь Без Компромиссов.", text: "Жить в Дубае — значит просыпаться с видом на горизонт, проводить выходные на яхтах и наслаждаться сервисом, предугадывающим желания. Наши объекты предлагают пейзажные бассейны и частные кинотеатры.", text2: "Испытайте вершину комфорта." },
    back: { title: "Свяжитесь с нами", websiteValue: "www.mapstonerealestate.com", emailValue: "contact@mapstonegroup.com", phoneValue: "+971-58-592-8787", copyright: "Mapstone Real Estate.", quizCta: "Не упустите свой VIP подарок!", quizBtn: "Принять Вызов" },
    quiz: { title: "Вызов Недвижимости Дубая", subtitle: "Наберите 7/10, чтобы открыть VIP подарок.", startBtn: "Начать Викторину", passTitle: "Вы Сильны! 😎", failTitle: "Хорошая Попытка!", failMsg: "Нужно 7/10 для победы.", formTitle: "Забрать Подарок", name: "Полное Имя", email: "Email Адрес", phone: "Номер Телефона", searchCode: "Поиск кода...", submit: "Вступить в Элиту", final: "Добро пожаловать в Элиту," }
  },
  zh: {
    cover: { tagline: "0% 税收 • 高收益 • 完全安全", openButton: "打开书本", investIn: "投资于", dubai: "迪拜" },
    p1: { intro: "全球中心", title: "充满机遇的世界", text1: "迪拜不仅仅是一个城市；它是一个为成功而设计的全球生态系统。战略性地位于东西方之间，它是4小时飞行圈内30亿人口的门户。凭借最先进的基础设施和有远见的政府，迪拜提供了无与伦比的增长、稳定和财富创造环境。", stat1Label: "年度访客", stat2Label: "外籍居民" },
    p2: { quote: "\"我们不等待事情发生，我们让事情发生。\"", subquote: "– 穆罕默德·本·拉希德·阿勒马克图姆殿下" },
    p3: { title: "0% 税收", subtitle: "保留您 100% 的利润。", text: "迪拜提供世界上最具吸引力的财政环境之一。投资者享受 0% 所得税、0% 资本利得税和 0% 房产税。无论您是产生租金收入还是通过房产获利，您赚的每一分钱都属于您。", income: "所得税", rental: "租赁税", capital: "资本利得", property: "房产税" },
    p4: { title: "高租金收益", subtitle: "跑赢全球市场。", text: "迪拜房地产市场持续提供全球最高的租金收益率，平均每年 6% 到 10%。在黄金地段，短期租赁（度假屋）可以产生超过 12-15% 的回报，远超伦敦、纽约或巴黎。", longTerm: "长期收益", longTermDesc: "每年稳定 6-8% 净回报。", shortTerm: "短期收益", shortTermDesc: "通过度假屋获利 10-12%+。", chart: { title: "市场价值增长" } },
    p5: { title: "无与伦比的安全", subtitle: "投资者的安心。", text: "迪拜一直被评为世界上最安全的城市之一。对于投资者来说，迪拜土地局 (DLD) 确保完全透明。您的资金存放在政府监管的托管账户中，只有在达到建设里程碑时才会发放给开发商。", security: { safestTitle: "安全指数", safestDesc: "人身安全全球排名前 5。" }, payment: { title: "投资者保护", details: "资金在移交前受托管账户保护。" } },
    p6: { title: "黄金签证", subtitle: "通往居留权的门户。", text: "投资迪拜房产不仅仅是获得资产；更是获得未来。房产投资者有资格获得 2 年投资者签证或著名的 10 年黄金签证，允许您在阿联酋生活、工作并担保您的家人。", list: ["10年可续签居留权", "担保配偶和子女", "100% 商业所有权"], quote: "\"一个给您世界的家。\"" },
    p7: { title: "全球连通性", subtitle: "世界的中心。", text: "迪拜国际机场 (DXB) 是世界上最繁忙的国际机场，连接超过 240 个目的地。无论是商务还是休闲，世界就在您家门口。迪拜的港口和物流中心也使其成为全球贸易的中心节点。", stat1: "DXB 机场", stat1Desc: "全球最繁忙", stat2: "物流", stat2Desc: "全球贸易中心" },
    p8: { title: "奢华生活方式", subtitle: "超乎想象。", text: "迪拜定义了现代奢华。从世界级餐饮和高端时尚到原始海滩和锦标赛高尔夫球场，这里的生活方式首屈一指。居民享受着在世界其他地方被视为五星级特权的设施。", quote: "\"阳光、大海和安全。\"", features: ["米其林星级餐饮", "原始私人海滩", "世界级购物"] },
    p9: { title: "经济稳定", subtitle: "避风港。", text: "自 1997 年以来，阿联酋迪拉姆 (AED) 一直与美元挂钩，确保国际投资者的零货币风险。在旅游、科技和金融等非石油行业的推动下，经济多元化、强劲且快速增长。", point1: "货币挂钩", point1Desc: "固定汇率：$1 = AED 3.67", point2: "GDP 增长", point2Desc: "疫情后持续盈余。", point3: "多元化", point3Desc: "繁荣的非石油经济。" },
    p10: { title: "2040 愿景", subtitle: "未来路线图。", text: "迪拜 2040 城市总体规划旨在使迪拜成为世界上最宜居的城市。该计划包括将绿地增加一倍，将人口增加到 580 万，并扩大可持续交通。现在投资意味着买入这一未来的增长。", list: ["人口增长至 580 万", "60% 自然保护区", "可持续城市化"], tagline: "投资明天，就在今天。" },
    p11_new: { title: "旅游之都", subtitle: "世界的磁石。", text: "迪拜是全球访问量最大的城市之一，每年接待超过 1600 万游客。这种持续的涌入推动了对短期租赁物业的巨大需求，确保持续的高入住率。", stat1: "1700万+", stat1Label: "年度访客", stat2: "85%+", stat2Label: "平均酒店入住率" },
    p12_new: { title: "商业中心", subtitle: "全球总部。", text: "拥有超过 40 个自由区，提供 100% 外资所有权和 0% 企业税，迪拜吸引了全球企业和初创公司。它是财富 500 强企业的区域总部，推动了对优质房地产的需求。", list: ["100% 外资所有权", "全球自由区", "科技与金融中心"], quote: "\"商业遇见创新的地方。\"" },
    p13_new: { title: "世界级基础设施", subtitle: "为卓越而建。", text: "迪拜拥有可与世界最佳相媲美的基础设施。从顶尖的国际学校和大学到 JCI 认证的医院和先进的医疗旅游，这座城市提供了家庭繁荣所需的一切。", point1: "教育", point1Desc: "全球大学分校。", point2: "医疗保健", point2Desc: "先进医疗设施。" },
    p14_new: { title: "极致奢华", subtitle: "不妥协的生活。", text: "在迪拜生活意味着在天际线景观中醒来，在私人游艇上度过周末，享受预见您每一个需求的服务。我们的物业提供无边泳池、私人海滩通道、家庭影院和礼宾服务。", text2: "体验舒适的巅峰。" },
    back: { title: "联系我们", websiteValue: "www.mapstonerealestate.com", emailValue: "contact@mapstonegroup.com", phoneValue: "+971-58-592-8787", copyright: "Mapstone Real Estate.", quizCta: "不要错过您的 VIP 礼品！", quizBtn: "接受挑战" },
    quiz: { title: "迪拜房地产挑战", subtitle: "获得 7/10 分以解锁您的独家 VIP 礼品。", startBtn: "开始测验", passTitle: "您很强！😎", failTitle: "很好的尝试！", failMsg: "您需要 7/10 才能赢取 VIP 礼品。", formTitle: "领取您的 VIP 礼品", name: "全名", email: "电子邮件地址", phone: "电话号码", searchCode: "搜索国家代码...", submit: "加入精英联盟", final: "欢迎加入精英联盟，" }
  },
  tr: {
    cover: { tagline: "%0 Vergi • Yüksek Getiri • Tam Güvenlik", openButton: "Kitabı Aç", investIn: "Yatırım Yap", dubai: "Dubai" },
    p1: { intro: "Küresel Merkez", title: "Fırsatlar Dünyası", text1: "Dubai sadece bir şehir değil; başarı için tasarlanmış küresel bir ekosistemdir. Doğu ve Batı arasında stratejik bir konuma sahip olup, 4 saatlik uçuş mesafesinde 3 milyar insana açılan bir kapıdır. Son teknoloji altyapısı ve vizyoner hükümeti ile Dubai, büyüme ve servet yaratma için eşsiz bir ortam sunar.", stat1Label: "Yıllık Ziyaretçi", stat2Label: "Gurbetçi Sakinler" },
    p2: { quote: "\"Şeylerin olmasını beklemiyoruz, onları biz olduruyoruz.\"", subquote: "– Şeyh Muhammed bin Raşid El Maktum" },
    p3: { title: "%0 Vergilendirme", subtitle: "Kârınızın %100'ünü Saklayın.", text: "Dubai, dünyanın en çekici mali ortamlarından birini sunar. Yatırımcılar %0 gelir vergisi, %0 sermaye kazancı vergisi ve %0 emlak vergisinden yararlanır. Kira geliri elde ediyor veya mülk satıyor olun, kazandığınız her kuruş sizindir.", income: "Gelir Vergisi", rental: "Kira Vergisi", capital: "Sermaye Kazancı", property: "Emlak Vergisi" },
    p4: { title: "Yüksek Kira Getirileri", subtitle: "Küresel Pazarları Geride Bırakıyor.", text: "Dubai emlak piyasası, yıllık ortalama %6 ila %10 ile küresel olarak en yüksek kira getirilerinden bazılarını sunar. Seçkin konumlarda, kısa vadeli kiralamalar (tatil evleri) %12-15'in üzerinde getiri sağlayarak Londra veya New York'u geride bırakabilir.", longTerm: "Uzun Vadeli Getiri", longTermDesc: "Yıllık %6-8 NET istikrarlı getiri.", shortTerm: "Kısa Vadeli Getiri", shortTermDesc: "Tatil evleri ile %10-12+ kazanç.", chart: { title: "Piyasa Değeri Büyümesi" } },
    p5: { title: "Eşsiz Güvenlik", subtitle: "Yatırımcılar İçin Gönül Rahatlığı.", text: "Dubai sürekli olarak dünyanın en güvenli şehirlerinden biri olarak derecelendirilmektedir. Yatırımcılar için Dubai Arazi Departmanı (DLD) tam şeffaflık sağlar. Paranız devlet tarafından düzenlenen emanet hesaplarında tutulur ve inşaat tamamlandıkça serbest bırakılır.", security: { safestTitle: "Güvenlik Endeksi", safestDesc: "Kişisel güvenlikte dünyada ilk 5'te." }, payment: { title: "Yatırımcı Koruması", details: "Fonlar teslimata kadar Emanet hesaplarında korunur." } },
    p6: { title: "Altın Vize", subtitle: "Oturum İznine Açılan Kapınız.", text: "Dubai mülküne yatırım yapmak size sadece bir varlık değil, bir gelecek de kazandırır. Mülk yatırımcıları, BAE'de yaşamanıza, çalışmanıza ve ailenize sponsor olmanıza olanak tanıyan 2 Yıllık Yatırımcı Vizesi veya prestijli 10 Yıllık Altın Vize için uygundur.", list: ["10 Yıllık Yenilenebilir Oturum", "Eş ve Çocuklara Sponsorluk", "%100 İşletme Sahipliği"], quote: "\"Size dünyayı veren bir ev.\"" },
    p7: { title: "Küresel Bağlantı", subtitle: "Dünyanın Merkezi.", text: "Dubai Uluslararası Havalimanı (DXB), sizi 240'tan fazla destinasyona bağlayan dünyanın en yoğun uluslararası havalimanıdır. İster iş ister eğlence için olsun, dünya kapınızın önündedir. Dubai'nin limanları da onu küresel ticarette merkezi bir düğüm noktası yapar.", stat1: "DXB Havalimanı", stat1Desc: "Dünyanın En Yoğun 1. Havalimanı", stat2: "Lojistik", stat2Desc: "Küresel Ticaret Merkezi" },
    p8: { title: "Lüks Yaşam Tarzı", subtitle: "Hayal Gücünün Ötesinde.", text: "Dubai modern lüksü tanımlar. Birinci sınıf yemeklerden lüks modaya, el değmemiş plajlardan şampiyona golf sahalarına kadar buradaki yaşam tarzı eşsizdir. Sakinler, dünyanın başka yerlerinde 5 yıldızlı ayrıcalıklar olarak kabul edilen olanaklara erişimin keyfini çıkarır.", quote: "\"Güneş, Deniz ve Güvenlik.\"", features: ["Michelin Yıldızlı Yemek", "Özel Plajlar", "Dünya Klasmanında Alışveriş"] },
    p9: { title: "Ekonomik İstikrar", subtitle: "Güvenli Bir Liman.", text: "BAE Dirhemi (AED) 1997'den beri ABD Dolarına sabitlenmiştir ve uluslararası yatırımcılar için sıfır kur riski sağlar. Ekonomi çeşitlendirilmiş, sağlam ve turizm, teknoloji ve finans gibi petrol dışı sektörlerin etkisiyle hızla büyümektedir.", point1: "Para Birimi Sabiti", point1Desc: "Sabit kur: $1 = 3.67 AED", point2: "GSYİH Büyümesi", point2Desc: "Pandemi sonrası tutarlı fazla.", point3: "Çeşitlendirme", point3Desc: "Gelişen petrol dışı ekonomi." },
    p10: { title: "2040 Vizyonu", subtitle: "Gelecek Yol Haritası.", text: "Dubai 2040 Kentsel Master Planı, Dubai'yi yaşamak için dünyanın en iyi şehri yapmayı amaçlamaktadır. Plan, yeşil alanların iki katına çıkarılmasını, nüfusun 5,8 milyona çıkarılmasını içerir. Şimdi yatırım yapmak, bu gelecekteki büyümeye ortak olmak demektir.", list: ["Nüfus 5.8 Milyona", "%60 Doğa Rezervleri", "Sürdürülebilir Şehircilik"], tagline: "Yarına bugünden yatırım yapın." },
    p11_new: { title: "Turizm Başkenti", subtitle: "Dünya İçin Bir Mıknatıs.", text: "Dubai, yılda 16 milyondan fazla turisti ağırlayarak dünyanın en çok ziyaret edilen şehirlerinden biridir. Bu sürekli akış, kısa vadeli kiralık mülkler için muazzam bir talep yaratarak yatırımcılar için yıl boyunca yüksek doluluk oranları sağlar.", stat1: "17M+", stat1Label: "Yıllık Ziyaretçi", stat2: "%85+", stat2Label: "Ort. Otel Doluluğu" },
    p12_new: { title: "İş Merkezi", subtitle: "Küresel Genel Merkez.", text: "Birçok sektör için %100 yabancı mülkiyeti ve %0 kurumlar vergisi sunan 40'tan fazla serbest bölge ile Dubai, hem küresel şirketleri hem de start-up'ları cezbetmektedir. Fortune 500 şirketlerinin bölgesel merkezidir.", list: ["%100 Yabancı Mülkiyet", "Küresel Serbest Bölgeler", "Teknoloji ve Finans Merkezi"], quote: "\"İş dünyasının inovasyonla buluştuğu yer.\"" },
    p13_new: { title: "Dünya Klasmanında Altyapı", subtitle: "Mükemmellik İçin İnşa Edildi.", text: "Dubai, dünyanın en iyileriyle rekabet eden bir altyapıya sahiptir. Üst düzey uluslararası okullardan ve üniversitelerden JCI onaylı hastanelere kadar şehir, bir ailenin gelişmesi için gereken her şeyi sunar.", point1: "Eğitim", point1Desc: "Küresel üniversitelerin şubeleri.", point2: "Sağlık", point2Desc: "Gelişmiş tıbbi tesisler." },
    p14_new: { title: "Nihai Lüks", subtitle: "Tavizsiz Bir Hayat.", text: "Dubai'de yaşamak, gökyüzü manzaralarına uyanmak, hafta sonlarını özel yatlarda geçirmek ve her ihtiyacınızı önceden tahmin eden hizmetin tadını çıkarmak demektir. Mülklerimiz sonsuzluk havuzları, özel plaj erişimi ve sinemalar sunar.", text2: "Konforun zirvesini deneyimleyin." },
    back: { title: "Bize Ulaşın", websiteValue: "www.mapstonerealestate.com", emailValue: "contact@mapstonegroup.com", phoneValue: "+971-58-592-8787", copyright: "Mapstone Real Estate.", quizCta: "VIP Hediyenizi kaçırmayın!", quizBtn: "Mücadeleyi Kabul Et" },
    quiz: { title: "Dubai Emlak Meydan Okuması", subtitle: "Özel VIP Hediyenizin kilidini açmak için 7/10 yapın.", startBtn: "Teste Başla", passTitle: "Güçlüsün! 😎", failTitle: "İyi Deneme!", failMsg: "VIP Hediyeyi kazanmak için 7/10'a ihtiyacınız var.", formTitle: "VIP Hediyenizi Talep Edin", name: "Tam İsim", email: "E-posta Adresi", phone: "Telefon Numarası", searchCode: "Ülke kodu ara...", submit: "Elit Lige Katıl", final: "Elit Lige Hoş Geldiniz," }
  }
};

export const getPagesContent = (langCode: string = 'en', onStartQuiz?: () => void) => {
  const t = TRANSLATIONS[langCode] || TRANSLATIONS.en;
  
  const c = "h-full w-full bg-black text-white relative overflow-hidden";
  const i = "relative z-10 p-6 md:p-12 flex flex-col h-full overflow-y-auto custom-scrollbar";

  return [
    // P1: Intro
    <div key="p1" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40"><img src="https://i.postimg.cc/NFWkXp2k/5435design.png" alt="Skyline" className="w-full h-full object-cover" /></div>
      <div className={`${i} justify-center`}>
        <h3 className="text-[#C5A059] font-bold uppercase tracking-widest mb-2 md:mb-4 text-[10px] md:text-xs">{t.p1.intro}</h3>
        <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 md:mb-6">{t.p1.title}</h2>
        <p className="text-neutral-200 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">{t.p1.text1}</p>
        <div className="grid grid-cols-2 gap-4 mt-auto">
          <div className="border-l-4 border-[#C5A059] pl-3 md:pl-4"><p className="text-lg md:text-xl font-bold">17M+</p><p className="text-[10px] md:text-xs text-neutral-400">{t.p1.stat1Label}</p></div>
          <div className="border-l-4 border-[#C5A059] pl-3 md:pl-4"><p className="text-lg md:text-xl font-bold">3.5M+</p><p className="text-[10px] md:text-xs text-neutral-400">{t.p1.stat2Label}</p></div>
        </div>
      </div>
    </div>,

    // P2: Quote
    <div key="p2" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40"><img src="https://i.postimg.cc/QCHHDDt1/Untitled-design14158916.png" alt="Arch" className="w-full h-full object-cover" /></div>
      <div className={`${i} justify-end pb-12 md:pb-16`}>
        <p className="text-xl md:text-3xl font-serif italic mb-2 md:mb-4 leading-tight">{t.p2.quote}</p>
        <p className="text-neutral-300 text-xs md:text-sm">{t.p2.subquote}</p>
      </div>
    </div>,

    // P3: Tax
    <div key="p3" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40"><img src="https://i.postimg.cc/jjp8PqVN/ffffffffffffffffffffffffffffffff.png" alt="Tax Free" className="w-full h-full object-cover" /></div>
      <div className={i}>
        <SectionTitle title={t.p3.title} subtitle={t.p3.subtitle} light />
        <p className="text-neutral-300 text-xs mb-4 leading-relaxed">{t.p3.text}</p>
        <div className="space-y-2 md:space-y-4">
          {[t.p3.income, t.p3.rental, t.p3.capital, t.p3.property].map((label, k) => (
            <div key={k} className="bg-white/5 p-3 md:p-4 rounded border border-white/10 flex justify-between items-center">
              <span className="font-bold text-xs md:text-base">{label}</span><span className="text-[#C5A059] font-bold text-lg md:text-xl">0%</span>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // P4: Yields
    <div key="p4" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40"><img src="https://i.postimg.cc/vZjxZc9B/111.png" alt="Night" className="w-full h-full object-cover" /></div>
      <div className={`${i} justify-center`}>
        <SectionTitle title={t.p4.title} subtitle={t.p4.subtitle} light />
        <p className="text-neutral-300 text-xs mb-4 leading-relaxed">{t.p4.text}</p>
        <div className="my-4 space-y-2">
            <div><p className="text-[#C5A059] text-xs font-bold">{t.p4.longTerm}</p><p className="text-xs">{t.p4.longTermDesc}</p></div>
            <div><p className="text-[#C5A059] text-xs font-bold">{t.p4.shortTerm}</p><p className="text-xs">{t.p4.shortTermDesc}</p></div>
        </div>
        <MarketChart dark texts={t.p4.chart} />
      </div>
    </div>,

    // P5: Security
    <div key="p5" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40"><img src="https://i.postimg.cc/xTgYjMvY/Untit.png" alt="Security" className="w-full h-full object-cover" /></div>
      <div className={i}>
        <SectionTitle title={t.p5.title} subtitle={t.p5.subtitle} light />
        <p className="text-neutral-300 text-xs mb-4 leading-relaxed">{t.p5.text}</p>
        <SecurityFeatures texts={t.p5.security} />
        <PaymentPlan texts={t.p5.payment} />
      </div>
    </div>,

    // P6: Visa
    <div key="p6" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40"><img src="https://i.postimg.cc/QMpkTQjJ/design.png" alt="Visa" className="w-full h-full object-cover" /></div>
      <div className={i}>
        <SectionTitle title={t.p6.title} subtitle={t.p6.subtitle} light />
        <p className="text-neutral-300 text-xs mb-4 leading-relaxed">{t.p6.text}</p>
        <ul className="space-y-3 md:space-y-4 my-4 md:my-8">
            {t.p6.list.map((item: string, k: number) => (
                <li key={k} className="flex gap-3 text-xs md:text-sm text-neutral-300"><CheckCircle2 className="text-[#C5A059] shrink-0" size={16}/>{item}</li>
            ))}
        </ul>
        <p className="text-white italic text-xs mt-4">{t.p6.quote}</p>
      </div>
    </div>,

    // P7: Connectivity
    <div key="p7" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-50"><img src="https://i.postimg.cc/X75KZr9c/500.png" alt="Connectivity" className="w-full h-full object-cover" /></div>
      <div className={i}>
        <SectionTitle title={t.p7.title} subtitle={t.p7.subtitle} light />
        <p className="text-neutral-300 text-xs mb-4 leading-relaxed">{t.p7.text}</p>
        <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white/10 p-3 rounded backdrop-blur-md border border-white/5">
                <Plane className="text-[#C5A059] mb-2" size={20} />
                <p className="font-bold text-white text-sm">{t.p7.stat1}</p>
                <p className="text-[10px] text-slate-300">{t.p7.stat1Desc}</p>
            </div>
            <div className="bg-white/10 p-3 rounded backdrop-blur-md border border-white/5">
                <Anchor className="text-[#C5A059] mb-2" size={20} />
                <p className="font-bold text-white text-sm">{t.p7.stat2}</p>
                <p className="text-[10px] text-slate-300">{t.p7.stat2Desc}</p>
            </div>
        </div>
      </div>
    </div>,

    // P8: Lifestyle
    <div key="p8" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 z-0 opacity-40"><img src="https://i.postimg.cc/QNySKLwt/700.png" alt="Lifestyle" className="w-full h-full object-cover" /></div>
      <div className={`${i} justify-center text-center`}>
        <h2 className="text-2xl md:text-3xl font-serif text-white mb-2">{t.p8.title}</h2>
        <p className="text-neutral-200 text-xs mb-6 px-4 leading-relaxed">{t.p8.text}</p>
        <div className="flex justify-center gap-4 flex-wrap">
            {t.p8.features.map((f: string, k: number) => (
                <span key={k} className="bg-[#C5A059]/20 text-[#C5A059] px-3 py-1 rounded-full text-[10px] font-bold border border-[#C5A059]/30">{f}</span>
            ))}
        </div>
        <p className="text-[#C5A059] italic mt-8 text-lg">{t.p8.quote}</p>
      </div>
    </div>,

    // P9: Stability
    <div key="p9" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
       <div className="absolute inset-0 z-0 opacity-40"><img src="https://i.postimg.cc/2yMxsvhY/800.png" alt="Stability" className="w-full h-full object-cover" /></div>
       <div className={i}>
          <SectionTitle title={t.p9.title} subtitle={t.p9.subtitle} light />
          <p className="text-neutral-300 text-xs mb-4 leading-relaxed">{t.p9.text}</p>
          <div className="space-y-3 mt-4">
            <div className="p-3 bg-white/5 border-l-2 border-[#C5A059] backdrop-blur-sm">
                <h4 className="font-bold text-white text-xs md:text-sm">{t.p9.point1}</h4>
                <p className="text-[10px] md:text-xs text-neutral-300">{t.p9.point1Desc}</p>
            </div>
            <div className="p-3 bg-white/5 border-l-2 border-[#C5A059] backdrop-blur-sm">
                <h4 className="font-bold text-white text-xs md:text-sm">{t.p9.point2}</h4>
                <p className="text-[10px] md:text-xs text-neutral-300">{t.p9.point2Desc}</p>
            </div>
            <div className="p-3 bg-white/5 border-l-2 border-[#C5A059] backdrop-blur-sm">
                <h4 className="font-bold text-white text-xs md:text-sm">{t.p9.point3}</h4>
                <p className="text-[10px] md:text-xs text-neutral-300">{t.p9.point3Desc}</p>
            </div>
          </div>
       </div>
    </div>,

    // P10: Vision
    <div key="p10" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
       <div className="absolute inset-0 z-0 opacity-40"><img src="https://i.postimg.cc/nVPT985N/600.png" alt="Vision" className="w-full h-full object-cover" /></div>
       <div className={`${i} justify-end`}>
          <SectionTitle title={t.p10.title} subtitle={t.p10.subtitle} light />
          <p className="text-neutral-300 text-xs mb-4 leading-relaxed">{t.p10.text}</p>
          <div className="space-y-2 md:space-y-3 mb-4">
            {t.p10.list.map((item: string, k: number) => (
                <div key={k} className="flex gap-2 text-xs md:text-sm font-bold text-white"><MapPin size={16} className="text-[#C5A059] shrink-0"/>{item}</div>
            ))}
          </div>
          <p className="text-[#C5A059] text-xs font-bold uppercase tracking-widest">{t.p10.tagline}</p>
       </div>
    </div>,

    // P11 NEW: Global Tourism
    <div key="p11_new" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
       <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=800&auto=format&fit=crop" alt="Tourism" className="w-full h-full object-cover" />
       </div>
       <div className={`${i} justify-center`}>
          <SectionTitle title={t.p11_new.title} subtitle={t.p11_new.subtitle} light />
          <p className="text-neutral-200 text-sm mb-6 leading-relaxed">{t.p11_new.text}</p>
          <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-3 rounded backdrop-blur-md text-center">
                  <p className="text-[#C5A059] text-xl font-bold">{t.p11_new.stat1}</p>
                  <p className="text-[10px] uppercase text-white">{t.p11_new.stat1Label}</p>
              </div>
              <div className="bg-white/10 p-3 rounded backdrop-blur-md text-center">
                  <p className="text-[#C5A059] text-xl font-bold">{t.p11_new.stat2}</p>
                  <p className="text-[10px] uppercase text-white">{t.p11_new.stat2Label}</p>
              </div>
          </div>
       </div>
    </div>,

    // P12 NEW: Business Hub
    <div key="p12_new" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
       <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Business" className="w-full h-full object-cover" />
       </div>
       <div className={`${i} justify-end`}>
          <SectionTitle title={t.p12_new.title} subtitle={t.p12_new.subtitle} light />
          <p className="text-neutral-200 text-xs mb-4 leading-relaxed">{t.p12_new.text}</p>
          <ul className="space-y-3 my-4">
              {t.p12_new.list.map((item: string, k: number) => (
                  <li key={k} className="flex gap-3 text-xs md:text-sm text-neutral-300 backdrop-blur-sm bg-black/20 p-2 rounded">
                      <Briefcase className="text-[#C5A059] shrink-0" size={16}/>{item}
                  </li>
              ))}
          </ul>
          <p className="text-white italic text-xs">{t.p12_new.quote}</p>
       </div>
    </div>,

    // P13 NEW: Infrastructure (Edu/Health)
    <div key="p13_new" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
       <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="Health" className="w-full h-full object-cover" />
       </div>
       <div className={i}>
          <SectionTitle title={t.p13_new.title} subtitle={t.p13_new.subtitle} light />
          <p className="text-neutral-200 text-xs mb-4 leading-relaxed">{t.p13_new.text}</p>
          <div className="space-y-4 mt-4">
             <div className="flex gap-4 items-center bg-white/5 p-3 rounded border-l-2 border-[#C5A059]">
                 <GraduationCap className="text-white" size={24} />
                 <div>
                     <h4 className="text-white font-bold text-sm">{t.p13_new.point1}</h4>
                     <p className="text-slate-400 text-xs">{t.p13_new.point1Desc}</p>
                 </div>
             </div>
             <div className="flex gap-4 items-center bg-white/5 p-3 rounded border-l-2 border-[#C5A059]">
                 <Users className="text-white" size={24} />
                 <div>
                     <h4 className="text-white font-bold text-sm">{t.p13_new.point2}</h4>
                     <p className="text-slate-400 text-xs">{t.p13_new.point2Desc}</p>
                 </div>
             </div>
          </div>
       </div>
    </div>,

    // P14 NEW: Luxury Living
    <div key="p14_new" className={c} dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
       <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=800&auto=format&fit=crop" alt="Luxury" className="w-full h-full object-cover" />
       </div>
       <div className={`${i} justify-center text-center`}>
          <div className="mx-auto mb-4 bg-[#C5A059]/20 p-3 rounded-full inline-block">
              <Star className="text-[#C5A059]" size={32} />
          </div>
          <SectionTitle title={t.p14_new.title} subtitle={t.p14_new.subtitle} light />
          <p className="text-neutral-200 text-sm mt-4 px-4 leading-relaxed backdrop-blur-sm p-2 rounded border border-white/10">{t.p14_new.text}</p>
          <p className="text-[#C5A059] text-xs mt-4 font-serif italic">{t.p14_new.text2}</p>
       </div>
    </div>,

    // P15: Back Cover (UPDATED WITH CONTACT & QUIZ)
    <div key="p15_back" className="h-full w-full bg-black p-6 md:p-12 flex flex-col items-center justify-center text-center" dir={langCode === 'ar' ? 'rtl' : 'ltr'}>
      <img src={LOGO_URL} alt="Logo" className="h-16 md:h-24 mb-6 md:mb-8 opacity-80" />

      {/* CONTACT SECTION */}
      <h3 className="text-xl md:text-2xl font-serif text-[#C5A059] mb-6 uppercase tracking-widest">{t.back.title}</h3>

      <div className="space-y-4 text-sm md:text-base mb-8">
          <div className="flex flex-col items-center">
              <Globe size={18} className="text-[#C5A059] mb-1" />
              <a href={`https://${t.back.websiteValue}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C5A059] transition-colors">{t.back.websiteValue}</a>
          </div>
          <div className="flex flex-col items-center">
              <Mail size={18} className="text-[#C5A059] mb-1" />
              <a href={`mailto:${t.back.emailValue}`} className="text-white hover:text-[#C5A059] transition-colors">{t.back.emailValue}</a>
          </div>
           <div className="flex flex-col items-center">
              <Phone size={18} className="text-[#C5A059] mb-1" />
              <a href={`tel:${t.back.phoneValue.replace(/-/g, '')}`} className="text-white hover:text-[#C5A059] transition-colors">{t.back.phoneValue}</a>
          </div>
      </div>

      {/* QUIZ CTA */}
      <div className="w-full max-w-xs bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-lg p-3 animate-pulse cursor-pointer hover:bg-[#C5A059]/20 transition-colors" onClick={onStartQuiz}>
        <div className="flex items-center justify-center gap-2 text-[#C5A059] mb-2">
            <Trophy size={18} />
            <span className="text-sm font-bold uppercase">{t.back.quizCta}</span>
        </div>
        <button className="bg-[#C5A059] text-black w-full py-3 rounded font-bold text-sm hover:scale-105 transition-transform">
            {t.back.quizBtn}
        </button>
      </div>

      <div className="text-[10px] text-slate-600 mt-auto pt-8">© {new Date().getFullYear()} {t.back.copyright}</div>
    </div>
  ];
};