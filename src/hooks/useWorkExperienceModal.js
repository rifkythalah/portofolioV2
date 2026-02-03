import { useState } from "react";

/**
 * Custom hook untuk mengelola work experience modal state
 * @returns {Object} { selectedWork, isModalOpen, handleOpenModal, handleCloseModal }
 */
export const useWorkExperienceModal = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  return {
    selectedWork,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
