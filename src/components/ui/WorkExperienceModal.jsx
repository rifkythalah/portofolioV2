import React from "react";
import { X, Briefcase, CheckCircle2, MapPin, Calendar, FileCheck } from "lucide-react";
import { useProjectModal, useCertificateModal, useWorkExperienceModalState } from "../../hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const WorkExperienceModal = ({ work, isOpen, onClose }) => {
  // Custom hooks for state management and functionality
  useProjectModal(isOpen);
  const { showCertificate, handleOpenCertificate, handleCloseCertificate } = useCertificateModal();
  const { currentCertificateIndex, certificates, hasCertificates, hasMultipleCertificates, handleCertificateSlideChange } = useWorkExperienceModalState(work?.certificate);

  if (!isOpen || !work) return null;

  const { title, company, location, year, images, magazineImages, description, companyOverview, projects, detailedDescription, technologies, achievements } = work;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[50000] flex items-center justify-center p-2 sm:p-4" onClick={handleOverlayClick}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* Modal Container - Large Size */}
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

        {/* Header Section with Images - Grid or Carousel */}
        {images && images.length > 0 && (
          <div className="relative">
            <div className="p-4 sm:p-6 bg-gradient-to-b from-[#0a0a0a] to-transparent">
              {images.length === 2 ? (
                /* Grid Layout for 2 Images */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {images.map((img, index) => (
                    <div key={index} className="relative overflow-hidden rounded-xl aspect-square">
                      <img src={img} alt={`${title} - ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Carousel for More Than 2 Images */
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[EffectCoverflow, Pagination]}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 3,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 15,
                    },
                  }}
                  className="mySwiper"
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={index} style={{ width: "auto" }}>
                      <div className="relative overflow-hidden rounded-xl aspect-square w-48 sm:w-64">
                        <img src={img} alt={`${title} - ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            {/* Work Badge */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 px-4 py-2 bg-[#4BCFEC]/20 backdrop-blur-md rounded-full border border-[#4BCFEC]/40 z-10">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#4BCFEC]" />
                <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">Work Experience</span>
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-5 sm:p-6 md:p-8 lg:p-10">
          {/* Title and Info */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">{title}</h2>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#4BCFEC]" />
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

          {/* Description / Company Overview */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#4BCFEC] rounded-full"></span>
              Overview
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">{companyOverview || description}</p>
          </div>

          {/* Projects Section - Only for work with projects array */}
          {projects && projects.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#4BCFEC] rounded-full"></span>
                Projects
              </h3>
              <div className="space-y-8 sm:space-y-10">
                {projects.map((project, index) => (
                  <div key={project.id} className="bg-white/5 rounded-2xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-[#4BCFEC]/30 transition-colors duration-300">
                    {/* Project Title */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4BCFEC]/20 text-[#4BCFEC] font-bold text-sm">{index + 1}</span>
                        <h4 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h4>
                      </div>
                      {/* Project Technologies */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 text-xs sm:text-sm font-medium bg-[#4BCFEC]/10 text-[#4BCFEC] rounded-md border border-[#4BCFEC]/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Project Description */}
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6 whitespace-pre-line">{project.description}</p>

                    {/* Project Images */}
                    {project.images && project.images.length > 0 && (
                      <div className="mt-6">
                        {project.images.length === 2 ? (
                          /* Grid for 2 images */
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.images.map((img, imgIndex) => (
                              <div key={imgIndex} className="relative overflow-hidden rounded-xl aspect-video">
                                <img src={img} alt={`${project.title} - ${imgIndex + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* Carousel for 3+ images */
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={5}
                            grabCursor={true}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            breakpoints={{
                              640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                              },
                              1024: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                              },
                            }}
                            className="projectSwiper"
                          >
                            {project.images.map((img, imgIndex) => (
                              <SwiperSlide key={imgIndex}>
                                <div className="relative overflow-hidden rounded-xl aspect-video">
                                  <img src={img} alt={`${project.title} - ${imgIndex + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Description */}
          {detailedDescription && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#4BCFEC] rounded-full"></span>
                Details
              </h3>
              <div className="text-sm sm:text-base text-white/70 leading-relaxed whitespace-pre-line bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10" dangerouslySetInnerHTML={{ __html: detailedDescription }}></div>
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

          {/* Achievements/Tasks */}
          {achievements && achievements.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#4BCFEC] rounded-full"></span>
                Key Responsibilities
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

          {/* Magazine Images Carousel */}
          {magazineImages && magazineImages.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#4BCFEC] rounded-full"></span>
                Magazine Publications
              </h3>
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={4}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                className="magazineSwiper"
              >
                {magazineImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-[#4BCFEC]/30 transition-colors duration-300">
                      <img src={img} alt={`Magazine ${index + 1}`} className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* Certificate Section */}
          {hasCertificates && (
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
              <button
                onClick={handleOpenCertificate}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#4BCFEC] to-[#2A9CC0] hover:from-[#3BB5D6] hover:to-[#1F8BAF] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#4BCFEC]/30 hover:shadow-[#4BCFEC]/50 hover:scale-105"
              >
                <FileCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">
                  View Certificate{hasMultipleCertificates ? "s" : ""} {hasMultipleCertificates && `(${certificates.length})`}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Certificate Lightbox with Carousel */}
        {showCertificate && hasCertificates && (
          <div className="fixed inset-0 z-[60000] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-sm" onClick={handleCloseCertificate}>
            {/* Close Button */}
            <button
              onClick={handleCloseCertificate}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2.5 sm:p-3 bg-red-600/90 hover:bg-red-500 backdrop-blur-md rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white cursor-pointer shadow-lg"
              aria-label="Close certificate"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Certificate Carousel */}
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              {hasMultipleCertificates ? (
                <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }} navigation={true} modules={[Pagination, Navigation]} className="certificateSwiper w-full" onSlideChange={handleCertificateSlideChange}>
                  {certificates.map((cert, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <img src={cert} alt={`${title} - Certificate ${index + 1}`} className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl border-2 border-[#4BCFEC]/30" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="w-full h-full flex items-center justify-center overflow-auto">
                  <img src={certificates[0]} alt={`${title} - Certificate`} className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl border-2 border-[#4BCFEC]/30" />
                </div>
              )}
              <p className="text-center text-white/70 text-xs sm:text-sm mt-3 sm:mt-4 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                {hasMultipleCertificates ? `Certificate ${currentCertificateIndex + 1} of ${certificates.length} - ` : ""}Click outside or X button to close
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceModal;
