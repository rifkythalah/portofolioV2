import React from "react";
import { projects, categories } from "../../data/projects";
import { Briefcase, ChevronLeft, ChevronRight, Target } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import FadeIn from "../animations/FadeIn";
import { useProjectFilter, useProjectModalState } from "../../hooks";

const Project = () => {
  const { activeCategory, currentIndex, filteredProjects, scrollContainerRef, handleCategoryChange, scrollToIndex, nextSlide, prevSlide, categoryIcons } = useProjectFilter(projects);
  const { selectedProject, isModalOpen, handleOpenModal, handleCloseModal } = useProjectModalState();

  return (
    <section id="projects" className="relative py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <FadeIn delay={0}>
            {/* My Work Badge */}
            <div className="inline-flex items-center gap-2 px-8 py-2 bg-linear-to-r border  border-primary/30 bg-primary/10 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-[#4BCFEC]" />
              <span className="text-sm text-white font-medium">My Work</span>
            </div>
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">Featured Projects</h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base lg:text-lg text-white/50 max-w-2xl mx-auto">Projects I’ve built through learning, collaboration, and internship experience</p>
          </FadeIn>
        </div>

        {/* Category Filters */}
        <FadeIn delay={200}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || Target;
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full border text-sm md:text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-[#4BCFEC]/20 to-[#2A9CC0]/20 border-[#4BCFEC]/50 text-white shadow-lg shadow-[#4BCFEC]/20"
                      : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Carousel - All Screen Sizes */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-scroll scroll-smooth gap-6 md:gap-8 snap-x snap-mandatory pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {filteredProjects.map((project, index) => (
                <div key={index} className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] snap-center project-card">
                  <ProjectCard project={project} onOpenModal={handleOpenModal} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          {filteredProjects.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 disabled:opacity-0 disabled:pointer-events-none text-white rounded-full p-3 md:p-4 transition-all duration-300 backdrop-blur-md border border-white/20 shadow-xl"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= filteredProjects.length - 1}
                className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 disabled:opacity-0 disabled:pointer-events-none text-white rounded-full p-3 md:p-4 transition-all duration-300 backdrop-blur-md border border-white/20 shadow-xl"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-[#4BCFEC]" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default Project;
