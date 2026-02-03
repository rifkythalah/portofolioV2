import React from "react";

// Animated background component with floating circles
const AnimatedBackground = ({ variant = "default" }) => {
  const variants = {
    default: {
      circle1: "top-1/3 right-1/4",
      circle2: "bottom-1/3 left-1/4",
    },
    contact: {
      circle1: "top-1/3 left-1/4",
      circle2: "bottom-1/3 right-1/4",
    },
    alternate: {
      circle1: "top-1/4 left-1/3",
      circle2: "bottom-1/4 right-1/3",
    },
  };

  const positions = variants[variant] || variants.default;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute ${positions.circle1} w-96 h-96 bg-[#4BCFEC]/5 rounded-full blur-3xl animate-pulse`} />
      <div className={`absolute ${positions.circle2} w-80 h-80 bg-[#2A9CC0]/5 rounded-full blur-3xl animate-pulse`} style={{ animationDelay: "1s" }} />
    </div>
  );
};

export default AnimatedBackground;
