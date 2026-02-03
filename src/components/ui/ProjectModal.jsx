import React from "react";
import { X, Github, ExternalLink, TrendingUp, FileCheck } from "lucide-react";
import { useProjectModal, useCertificateModal } from "../../hooks";

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Custom hooks for modal functionality
  useProjectModal(isOpen);
  const { showCertificate, handleOpenCertificate, handleCloseCertificate } = useCertificateModal();

  if (!isOpen || !project) return null;

  const { title, description, detailedDescription, image, technologies, metrics, demoUrl, githubUrl, category, certificate } = project;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[50000] flex items-center justify-center p-2 sm:p-4" onClick={handleOverlayClick}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Modal Container */}
      <div
        className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 sm:p-3 bg-red-600/90 hover:bg-red-500 backdrop-blur-md rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white cursor-pointer touch-manipulation shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Image Section */}
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 sm:h-64 md:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-xs sm:text-sm font-medium text-white uppercase tracking-wider">{category}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 pr-12">{title}</h2>

          {/* Detailed Description */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Overview</h3>
            <div className="text-sm sm:text-base text-white/70 leading-relaxed whitespace-pre-line">{detailedDescription || description}</div>
          </div>

          {/* Technologies */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Tools</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium bg-[#4BCFEC]/10 text-[#4BCFEC] rounded-lg border border-[#4BCFEC]/20 hover:bg-[#4BCFEC]/20 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {metrics && (
            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Key Features</h3>
              <div className="space-y-2">
                {Array.isArray(metrics) ? (
                  metrics.map((metric, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#4BCFEC] flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-white/70">{metric}</span>
                    </div>
                  ))
                ) : (
                  <div className="flex items-start gap-2 sm:gap-3">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#4BCFEC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white/70">{metrics}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[#4BCFEC] hover:bg-[#3BB5D6] text-white font-medium rounded-lg text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#4BCFEC]/20 touch-manipulation"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                View Live Demo
              </a>
            )}
            {certificate && (
              <button
                onClick={handleOpenCertificate}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#4BCFEC] to-[#2A9CC0] hover:from-[#3BB5D6] hover:to-[#1F8BAF] text-white font-medium rounded-lg text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#4BCFEC]/30 touch-manipulation"
              >
                <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                View Certificate
              </button>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg text-sm sm:text-base border border-white/20 transition-all duration-300 touch-manipulation"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                View Source
              </a>
            )}
          </div>
        </div>

        {/* Certificate Lightbox */}
        {showCertificate && certificate && (
          <div className="fixed inset-0 z-[60000] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-sm" onClick={handleCloseCertificate}>
            {/* Close Button */}
            <button
              onClick={handleCloseCertificate}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 sm:p-3 bg-red-600/90 hover:bg-red-500 backdrop-blur-md rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white cursor-pointer shadow-lg"
              aria-label="Close certificate"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Certificate Image */}
            <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <div className="w-full h-full flex items-center justify-center overflow-auto">
                <img src={certificate} alt={`${title} - Certificate`} className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl border-2 border-[#4BCFEC]/30" />
              </div>
              <p className="text-center text-white/70 text-xs sm:text-sm mt-3 sm:mt-4 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Click outside or X button to close</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
