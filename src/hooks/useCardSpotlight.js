import { useRef } from "react";

// Custom hook to add spotlight effect on cards based on mouse movement
export const useCardSpotlight = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.setProperty("--mouse-x", `0px`);
    card.style.setProperty("--mouse-y", `0px`);
  };

  return { cardRefs, handleMouseMove, handleMouseLeave };
};
