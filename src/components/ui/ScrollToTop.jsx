import React from "react";
import { ArrowUp } from "lucide-react";
import { useScrollToTop } from "../../hooks";


const ScrollToTop = () => {
  const { isVisible, scrollToTop, circleProps } = useScrollToTop(300);
  const { radius, circumference, offset } = circleProps;

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center group" aria-label="Scroll to top">
          {/* SVG Circle Progress */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
            {/* Background Circle */}
            <circle cx="24" cy="24" r={radius} stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" fill="none" />
            {/* Progress Circle */}
            <circle cx="24" cy="24" r={radius} stroke="#4BCFEC" strokeWidth="2" fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-150 ease-out" />
          </svg>

          {/* Button Background */}
          <div className="absolute inset-1 bg-black/80 backdrop-blur-sm rounded-full border border-white/10 group-hover:bg-[#4BCFEC]/10 group-hover:border-[#4BCFEC]/30 transition-all duration-300"></div>

          {/* Arrow Icon */}
          <ArrowUp className="relative z-10 w-5 h-5 text-white group-hover:text-[#4BCFEC] group-hover:-translate-y-0.5 transition-all duration-300" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
