import React from "react";
import { Code } from "lucide-react";
import { useLoadingProgress } from "../../hooks";


const Loading = ({ onLoadingComplete }) => {
  const { progress } = useLoadingProgress(onLoadingComplete);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Spinner */}
        <div className="relative w-20 h-20">
          {/* Background Circle */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="4" fill="none" />
            {/* Progress Circle */}
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="#4BCFEC"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 32}`}
              strokeDashoffset={`${2 * Math.PI * 32 * (1 - progress / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
          </svg>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Code className="w-8 h-8 text-[#4BCFEC] animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white text-xl font-mono">&lt;</span>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4BCFEC] via-[#3BB5D6] to-[#2A9CC0] bg-clip-text text-transparent">Portofolio</h2>
            <span className="text-white text-xl font-mono">/&gt;</span>
          </div>
          <p className="text-white/60 text-sm animate-pulse">Loading...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#4BCFEC] to-[#2A9CC0] transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
