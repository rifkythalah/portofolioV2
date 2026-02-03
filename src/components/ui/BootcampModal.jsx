import React, { useState } from "react";
import { X, Award, CheckCircle2, MapPin, Calendar, FileCheck } from "lucide-react";
import { useProjectModal } from "../../hooks";

const BootcampModal = ({ bootcamp, isOpen, onClose }) => {
  const [showCertificate, setShowCertificate] = useState(false);

  // Use custom hook for modal functionality (scroll lock)
  useProjectModal(isOpen);

  if (!isOpen || !bootcamp) return null;

  const { title, company, location, year, image, description, detailedDescription, technologies, achievements, certificate } = bootcamp;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[50000] flex items-center justify-center p-2 sm:p-4" onClick={handleOverlayClick}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Modal Container - Larger Size */}
      <div
        className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10"
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

        {/* Header Section with Image */}
        <div className="relative">
          <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Bootcamp Badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-4 py-2 bg-[#4BCFEC]/20 backdrop-blur-md rounded-full border border-[#4BCFEC]/40">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#4BCFEC]" />
                <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">Bootcamp</span>
              </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 pr-12">{title}</h2>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#4BCFEC]" />
                  <span className="text-sm sm:text-base font-medium">{company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#4BCFEC]" />
                  <span className="text-sm sm:text-base">{location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#4BCFEC]" />
                  <span className="text-sm sm:text-base">{year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 md:p-8 lg:p-10">
          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#4BCFEC] rounded-full"></span>
              Program Overview
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">{description}</p>
          </div>

          {/* Detailed Description */}
          {detailedDescription && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#4BCFEC] rounded-full"></span>
                Learning Details
              </h3>
              <div className="text-sm sm:text-base text-white/70 leading-relaxed whitespace-pre-line bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">{detailedDescription}</div>
            </div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#4BCFEC] rounded-full"></span>
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium bg-[#4BCFEC]/10 text-[#4BCFEC] rounded-lg border border-[#4BCFEC]/30 hover:bg-[#4BCFEC]/20 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#4BCFEC] rounded-full"></span>
                Key Achievements
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10 hover:border-[#4BCFEC]/30 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#4BCFEC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white/80 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificate Section */}
          {certificate && (
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
              <button
                onClick={() => setShowCertificate(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#4BCFEC] to-[#2A9CC0] hover:from-[#3BB5D6] hover:to-[#1F8BAF] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#4BCFEC]/30 hover:shadow-[#4BCFEC]/50 hover:scale-105"
              >
                <FileCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">View Certificate</span>
              </button>
            </div>
          )}
        </div>

        {/* Certificate Lightbox */}
        {showCertificate && certificate && (
          <div className="fixed inset-0 z-[60000] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-sm" onClick={() => setShowCertificate(false)}>
            {/* Close Button */}
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 sm:p-3 bg-red-600/90 hover:bg-red-500 backdrop-blur-md rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white cursor-pointer shadow-lg"
              aria-label="Close certificate"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Certificate Image - Adjusted Size */}
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

export default BootcampModal;
