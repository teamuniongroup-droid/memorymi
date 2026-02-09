import { motion } from "framer-motion";
import { CircleCheck, Gift } from "lucide-react";
import PricingBanner from "./PricingBanner";
import bottles2 from "@/assets/brainxcell-2-bottles.png";
import bottles6 from "@/assets/brainxcell-6-bottles.png";
import bottles3 from "@/assets/brainxcell-3-bottles.png";
import bottles2Mobile from "@/assets/brainxcell-2-bottles-mobile.png";
import bottles3Mobile from "@/assets/brainxcell-3-bottles-mobile.png";
import bottles6Mobile from "@/assets/brainxcell-6-bottles-mobile.png";
import paymentCards from "@/assets/payment-cards.png";

interface PackageProps {
  title: string;
  bottles: number;
  supply: string;
  originalPrice: number;
  salePrice: number;
  perBottle: number;
  originalPerBottle: number;
  savings: string;
  discount: string;
  features: string[];
  isBestValue?: boolean;
  isGoodValue?: boolean;
  hasShipping?: boolean;
  shippingCost?: string;
  image: string;
  mobileImage: string;
  hasSurprise?: boolean;
  checkoutUrl: string;
  mobileOrder?: string;
}

const PackageCard = ({
  title,
  bottles,
  supply,
  originalPrice,
  salePrice,
  perBottle,
  originalPerBottle,
  savings,
  discount,
  features,
  isBestValue,
  isGoodValue,
  hasShipping,
  shippingCost,
  image,
  mobileImage,
  hasSurprise,
  checkoutUrl,
  mobileOrder,
}: PackageProps) => {
  
  const getCardBackground = () => {
    if (isBestValue) return "bg-gradient-radial";
    if (isGoodValue) return "bg-white";
    return "bg-white";
  };

  const getHeaderStyle = () => {
    return "bg-black text-white";
  };

  const isLight = !isBestValue;
  const textColor = isLight ? "text-gray-900" : "text-white";
  const subTextColor = isLight ? "text-gray-600" : "text-gray-200";

  const getPriceColor = () => {
    if (isBestValue) return "text-[#22c55e]";
    return "text-[#facc15]";
  };

  const getButtonStyle = () => {
    if (isBestValue) return "bg-[#22c55e] hover:bg-[#16a34a] text-white";
    return "bg-gray-200 hover:bg-gray-300 text-gray-900";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`relative ${getCardBackground()} rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all border-2 sm:border-4 border-black ${mobileOrder || ''}`}
      style={isBestValue ? { background: 'radial-gradient(circle, #135ED3 0%, #2135B8 100%)' } : {}}
    >
      {/* Header Badge */}
      <div 
        className={`${getHeaderStyle()} text-center py-1.5 sm:py-2 font-bold uppercase tracking-wider ${isBestValue ? "text-sm sm:text-base !text-[#22c55e]" : "text-xs sm:text-sm"}`}
        style={isBestValue ? { WebkitTextStroke: '1px #000', paintOrder: 'stroke fill' } : {}}
      >
        {isBestValue ? "BEST VALUE!" : title}
      </div>

      <div className="p-4 sm:p-5">
        {/* Mobile: Two Column Layout */}
        <div className="flex sm:hidden gap-2">
          {/* Left Column: Title + Image */}
          <div className="flex flex-col items-center w-2/5 flex-shrink-0">
            <p 
              className={`font-display text-2xl font-black tracking-tight text-center ${isBestValue ? "text-white" : textColor}`}
              style={isBestValue ? { 
                WebkitTextStroke: '1.5px #000', 
                paintOrder: 'stroke fill'
              } : { 
                WebkitTextStroke: '0.5px #000', 
                paintOrder: 'stroke fill'
              }}
            >
              {isBestValue ? "BUY 3 GET + 3 FREE" : `${bottles} BOTTLES`}
            </p>
            <p className={`text-xs font-normal text-center ${subTextColor}`}>{supply} Supply</p>
            <img 
              src={mobileImage} 
              alt={`${bottles} bottles`} 
              className="w-full h-auto mt-2"
            />
          </div>

          {/* Right Column: Price + Features */}
          <div className="flex flex-col flex-1 items-center">
            {/* Price */}
            <div className="text-center mb-2">
              <div className="flex items-baseline justify-center">
                <span 
                  className={`font-display text-6xl font-black inline-block ${isBestValue ? "text-[#00BF63]" : "text-[#facc15]"}`}
                  style={{ 
                    WebkitTextStroke: `3px ${isBestValue ? '#fff' : '#000'}`,
                    paintOrder: 'stroke fill',
                    ...(isBestValue ? {} : { textShadow: '3px 3px 0 rgba(0,0,0,0.3)' })
                  }}
                >
                  ${perBottle}
                </span>
                <span className={`text-sm font-black uppercase leading-tight ml-1 ${isBestValue ? "text-white" : "text-gray-900"}`}>PER<br/>BOTTLE</span>
              </div>
              <div className="relative inline-flex items-center justify-center py-1 px-3 mt-1">
                <p className={`font-extrabold ${isBestValue ? "text-white" : "text-gray-900"} relative z-10`}>
                  Total: <span className="line-through text-[#C40812] text-sm">${originalPrice}</span> <span className="text-base text-[#22c55e]">${salePrice}</span>
                </p>
                <svg 
                  className="absolute pointer-events-none" 
                  style={{ 
                    width: 'calc(100% + 12px)', 
                    height: 'calc(100% + 8px)',
                    left: '-6px',
                    top: '-4px'
                  }}
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  <ellipse 
                    cx="50" 
                    cy="20" 
                    rx="48" 
                    ry="18" 
                    fill="none" 
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeDasharray="300"
                    strokeLinecap="round"
                    className="animate-pencil-circle"
                  />
                </svg>
              </div>
            </div>

            {/* Shipping */}
            <div className="text-center mb-2">
              {hasShipping ? (
                <p className={`text-sm font-extrabold ${textColor}`}>+ ${shippingCost} SHIPPING</p>
              ) : (
                <p className={`text-sm font-extrabold ${isBestValue ? "text-white" : "text-gray-900"}`}>FREE SHIPPING</p>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-1 w-full">
              <li className="flex items-center gap-2 text-sm">
                <CircleCheck className="w-5 h-5 flex-shrink-0" fill={isBestValue ? "#facc15" : "#1E3A5F"} stroke={isBestValue ? "#000" : "white"} />
                <span 
                  className={`font-extrabold ${isBestValue ? "text-[#facc15]" : "text-[#1E3A5F]"}`}
                  style={isBestValue ? { textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' } : {}}
                >
                  YOU SAVE {savings}!
                </span>
              </li>
              <li className={`flex items-center gap-2 text-sm font-extrabold ${textColor}`}>
                <CircleCheck className="w-5 h-5 flex-shrink-0" fill={isBestValue ? "#22c55e" : "#1a1a1a"} stroke={isBestValue ? "#000" : "white"} />
                {discount} DISCOUNT
              </li>
              {features.map((feature, i) => (
                <li key={i} className={`flex items-center gap-2 text-sm font-extrabold ${textColor}`}>
                  <CircleCheck className="w-5 h-5 flex-shrink-0" fill={isBestValue ? "#22c55e" : "#1a1a1a"} stroke={isBestValue ? "#000" : "white"} />
                  {feature}
                </li>
              ))}
              <li className={`flex items-center gap-2 text-sm font-extrabold ${textColor}`}>
                <CircleCheck className="w-5 h-5 flex-shrink-0" fill={isBestValue ? "#22c55e" : "#1a1a1a"} stroke={isBestValue ? "#000" : "white"} />
                60 DAY GUARANTEE
              </li>
              {hasSurprise && (
                <li className="flex items-center gap-2 text-sm font-bold text-[#facc15]">
                  <span className="w-5 h-5 flex-shrink-0" />
                  +SURPRISE 🎁
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block">
          {/* Title */}
          <div className="text-center mb-2">
            <p 
              className={`font-display text-2xl md:text-3xl font-black tracking-tight ${isBestValue ? "text-white" : textColor}`}
              style={isBestValue ? { 
                WebkitTextStroke: '1.5px #000', 
                paintOrder: 'stroke fill'
              } : {}}
            >
              {isBestValue ? "BUY 3 GET + 3 FREE" : `${bottles} BOTTLES`}
            </p>
            <p className={`text-sm font-normal ${subTextColor}`}>{supply} Supply</p>
          </div>

          {/* Product Image */}
          <div className="flex justify-center mb-3 overflow-hidden">
            <img 
              src={image} 
              alt={`${bottles} bottles`} 
              className="w-[240px] md:w-[280px] h-auto scale-125"
            />
          </div>

          {/* Main Price */}
          <div className="text-center mb-2 overflow-visible">
            <div className="flex items-baseline justify-center gap-1 pt-2 pb-1">
              <span 
                className={`font-display text-5xl md:text-6xl font-black inline-block ${isBestValue ? "text-[#00BF63]" : "text-[#facc15]"}`}
                style={{ 
                  WebkitTextStroke: `3px ${isBestValue ? '#fff' : '#000'}`,
                  paintOrder: 'stroke fill',
                  ...(isBestValue ? {} : { textShadow: '3px 3px 0 rgba(0,0,0,0.3)' })
                }}
              >
                ${perBottle}
              </span>
              <span className={`text-sm md:text-base font-black uppercase leading-tight ${isBestValue ? "text-white" : "text-gray-900"}`}>PER<br/>BOTTLE</span>
            </div>
            <div className="relative inline-flex items-center justify-center py-3 px-2">
              <p className={`font-extrabold ${isBestValue ? "text-white" : "text-gray-900"} relative z-10`}>
                Total: <span className="line-through text-[#C40812] text-sm">${originalPrice}</span> <span className="text-base text-[#22c55e]">${salePrice}</span>
              </p>
              <svg 
                className="absolute pointer-events-none" 
                style={{ 
                  width: 'calc(100% + 16px)', 
                  height: 'calc(100% + 12px)',
                  left: '-8px',
                  top: '-6px'
                }}
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <ellipse 
                  cx="50" 
                  cy="20" 
                  rx="48" 
                  ry="18" 
                  fill="none" 
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeDasharray="300"
                  strokeLinecap="round"
                  className="animate-pencil-circle"
                />
              </svg>
              <style>{`
                @keyframes pencilCircle {
                  0% {
                    stroke-dashoffset: 300;
                    opacity: 1;
                  }
                  25% {
                    stroke-dashoffset: 0;
                    opacity: 1;
                  }
                  75% {
                    stroke-dashoffset: 0;
                    opacity: 1;
                  }
                  90% {
                    stroke-dashoffset: 0;
                    opacity: 0;
                  }
                  100% {
                    stroke-dashoffset: 300;
                    opacity: 0;
                  }
                }
                .animate-pencil-circle {
                  animation: pencilCircle 5s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>

          {/* Shipping */}
          <div className="text-center mb-1">
            {hasShipping ? (
              <p className={`text-sm font-extrabold ${textColor}`}>+ ${shippingCost} SHIPPING</p>
            ) : isBestValue ? (
              <p className="text-sm font-extrabold text-white">FREE SHIPPING</p>
            ) : (
              <p className="text-sm font-extrabold text-gray-900">FREE SHIPPING</p>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-1.5 mb-3">
            <li className="flex items-center gap-2 text-sm">
              <CircleCheck className="w-5 h-5 flex-shrink-0" fill={isBestValue ? "#facc15" : "#1E3A5F"} stroke={isBestValue ? "#000" : "white"} />
              <span 
                className={`font-extrabold ${isBestValue ? "text-[#facc15]" : "text-[#1E3A5F]"}`}
                style={isBestValue ? { textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' } : {}}
              >
                YOU SAVE {savings}!
              </span>
            </li>
            {features.map((feature, i) => (
              <li key={i} className={`flex items-center gap-2 text-sm font-extrabold ${textColor}`}>
                <CircleCheck className="w-5 h-5 flex-shrink-0" fill={isBestValue ? "#22c55e" : "#1a1a1a"} stroke={isBestValue ? "#000" : "white"} />
                {feature}
              </li>
            ))}
            <li className={`flex items-center gap-2 text-sm font-extrabold ${textColor}`}>
              <CircleCheck className="w-5 h-5 flex-shrink-0" fill={isBestValue ? "#22c55e" : "#1a1a1a"} stroke={isBestValue ? "#000" : "white"} />
              {discount} DISCOUNT
            </li>
            <li className={`flex items-center gap-2 text-sm font-extrabold ${textColor}`}>
              <CircleCheck className="w-5 h-5 flex-shrink-0" fill={isBestValue ? "#22c55e" : "#1a1a1a"} stroke={isBestValue ? "#000" : "white"} />
              60 DAYS GUARANTEE
            </li>
          </ul>

          {/* Surprise */}
          {hasSurprise && (
            <div className="text-center mb-3">
              <span className="inline-flex items-center gap-1 text-[#facc15] font-bold text-base">
                +SURPRISE 🎁
              </span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <a 
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full font-black py-2.5 sm:py-3 rounded-lg transition-colors text-base sm:text-lg md:text-xl shadow-lg uppercase tracking-wide text-white text-center block mt-2 sm:mt-0 ${!isBestValue && "!bg-gradient-to-b !from-[#1e3a5f] !to-[#152a45]"}`}
          style={isBestValue ? { background: 'linear-gradient(to bottom, #00BF63 0%, #00BF63 50%, #00a555 50%, #00a555 100%)' } : { background: 'linear-gradient(to bottom, #1e3a5f 0%, #1e3a5f 50%, #152a45 50%, #152a45 100%)' }}
        >
          BUY NOW
        </a>

        {/* Payment Icons */}
        <div className="flex justify-center mt-2 sm:mt-3">
          <img src={paymentCards} alt="Visa, Mastercard, Discover, American Express" className="h-5 sm:h-6 w-auto" />
        </div>

        {/* Order now */}
        <div className="text-center mt-2 sm:mt-3 text-xs sm:text-sm font-bold">
          <p className={textColor}>
            📦 Order now & receive by <span className="text-[#C40812] font-extrabold">{(() => {
              const d = new Date();
              d.setDate(d.getDate() + 4);
              return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            })()}</span>!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const packages: PackageProps[] = [
    {
      title: "Basic",
      bottles: 2,
      supply: "60 Day",
      originalPrice: 198,
      salePrice: 158,
      perBottle: 79,
      originalPerBottle: 217,
      savings: "$40",
      discount: "20%",
      features: [],
      hasShipping: true,
      shippingCost: "9.99",
      image: bottles2,
      mobileImage: bottles2Mobile,
      checkoutUrl: "https://shopxelite.mycartpanda.com/checkout/197776361:1?afid=RuSaUZ4RKO",
      mobileOrder: "order-3 md:order-1",
    },
    {
      title: "Best Value",
      bottles: 6,
      supply: "180 Day",
      originalPrice: 588,
      salePrice: 294,
      perBottle: 49,
      originalPerBottle: 588,
      savings: "$294",
      discount: "50%",
      features: ["3 FREE BOTTLES"],
      isBestValue: true,
      hasSurprise: true,
      image: bottles6,
      mobileImage: bottles6Mobile,
      checkoutUrl: "https://shopxelite.mycartpanda.com/checkout/197777036:1?afid=RuSaUZ4RKO",
      mobileOrder: "order-1 md:order-2",
    },
    {
      title: "Good value!",
      bottles: 3,
      supply: "90 Day",
      originalPrice: 297,
      salePrice: 207,
      perBottle: 69,
      originalPerBottle: 392,
      savings: "$90",
      discount: "30%",
      features: ["1 FREE BOTTLE"],
      isGoodValue: true,
      image: bottles3,
      mobileImage: bottles3Mobile,
      checkoutUrl: "https://shopxelite.mycartpanda.com/checkout/197776654:1?afid=RuSaUZ4RKO",
      mobileOrder: "order-2 md:order-3",
    },
  ];

  return (
    <section className="esconder pt-4 sm:pt-6 pb-2 sm:pb-4 bg-[#1a1a1a]">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Pricing Banner */}
        <PricingBanner />

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-4 max-w-5xl mx-auto items-start">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
