import React from "react";
import { ExternalLink, Github, TrendingUp } from "lucide-react";

const ProjectCard = ({ project, onOpenModal }) => {
  const { title, description, image, technologies, metrics, demoUrl, githubUrl, category } = project;

  return (
    <div
      className="group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 h-full flex flex-col cursor-pointer"
      onClick={() => onOpenModal(project)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 sm:h-52 md:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110" />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
          <span className="text-xs md:text-sm font-medium text-white">{category}</span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex gap-2" onClick={(e) => e.stopPropagation()}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-2.5 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
              aria-label="View GitHub Repository"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-2.5 bg-black/40 backdrop-blur-md hover:bg-black/60 text-white rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
              aria-label="View Live Demo"
            >
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 group-hover:text-[#4BCFEC] transition-colors duration-300">{title}</h3>
          <p className="text-sm md:text-base text-white/60 leading-relaxed">{description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 text-xs md:text-sm font-medium bg-[#4BCFEC]/10 text-[#4BCFEC] rounded-full border border-[#4BCFEC]/20 hover:bg-[#4BCFEC]/20 transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="mt-auto pt-4 border-t border-white/10">
            <div className="space-y-2">
              {Array.isArray(metrics) ? (
                metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#4BCFEC] flex-shrink-0" />
                    <span className="text-sm text-white/70">{metric}</span>
                  </div>
                ))
              ) : (
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#4BCFEC] flex-shrink-0" />
                  <span className="text-sm text-white/70">{metrics}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
