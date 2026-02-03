import { useEffect, useRef, useState } from "react";


// Custom hook to manage timeline line height based on scroll position
export const useTimeline = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      const timelineHeight = timelineRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Menghitung progress scroll relatif terhadap timeline
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - timelineTop) / (timelineHeight + windowHeight)));

      setLineHeight(scrollProgress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { lineHeight, timelineRef };
};
