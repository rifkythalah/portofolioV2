import { useState, useRef } from "react";
import { Target, Globe, Palette, Zap } from "lucide-react";

// Custom hook to manage project filtering and scrolling
export const useProjectFilter = (projects) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);


  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Scroll to specific project index
    const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector(".project-card");
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = 32; // 8 * 4 = 32px (gap-8)
        container.scrollTo({
          left: (cardWidth + gap) * index,
          behavior: "smooth",
        });
      }
    }
  };

  // Navigate to next project
  const nextSlide = () => {
    if (currentIndex < filteredProjects.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  // Navigate to previous project
  const prevSlide = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  // Category icon mapping
  const categoryIcons = {
    All: Target,
    "Web Apps": Globe,
    "UI Components": Palette,
    "Full Stack": Zap,
  };

  return {
    activeCategory,
    currentIndex,
    filteredProjects,
    scrollContainerRef,
    handleCategoryChange,
    scrollToIndex,
    nextSlide,
    prevSlide,
    categoryIcons,
  };
};
