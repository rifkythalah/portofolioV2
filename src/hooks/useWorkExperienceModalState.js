import { useState } from "react";

/**
 * Custom hook for managing work experience modal state
 * Handles certificate carousel tracking and certificate array normalization
 */
const useWorkExperienceModalState = (certificate) => {
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  // Normalize certificate to array format
  const certificates = Array.isArray(certificate) ? certificate : certificate ? [certificate] : [];
  const hasCertificates = certificates.length > 0;
  const hasMultipleCertificates = certificates.length > 1;

  // Handle certificate slide change
  const handleCertificateSlideChange = (swiper) => {
    setCurrentCertificateIndex(swiper.activeIndex);
  };

  return {
    currentCertificateIndex,
    certificates,
    hasCertificates,
    hasMultipleCertificates,
    handleCertificateSlideChange,
  };
};

export default useWorkExperienceModalState;
