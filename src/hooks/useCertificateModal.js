import { useState } from "react";

/**
 * Custom hook untuk mengelola certificate modal state
 * @returns {Object} { showCertificate, handleOpenCertificate, handleCloseCertificate }
 */
export const useCertificateModal = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const handleOpenCertificate = () => {
    setShowCertificate(true);
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
  };

  return {
    showCertificate,
    handleOpenCertificate,
    handleCloseCertificate,
  };
};
