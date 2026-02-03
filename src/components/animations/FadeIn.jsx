import React from "react";
import { useFadeIn } from "../../hooks";

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
  const { elementRef, isVisible } = useFadeIn(threshold);

  return (
    <div ref={elementRef} className={isVisible ? "animate-fadeIn" : "opacity-0"} style={{ animationDelay: isVisible ? `${delay}ms` : "0ms", animationDuration: `${duration}ms`, animationFillMode: "both" }}>
      {children}
    </div>
  );
};

export default FadeIn;
