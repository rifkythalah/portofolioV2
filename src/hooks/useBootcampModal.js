import { useState } from "react";

/**
 * Custom hook untuk mengelola bootcamp modal state
 * @returns {Object} { selectedBootcamp, isModalOpen, handleOpenModal, handleCloseModal }
 */
export const useBootcampModal = () => {
  const [selectedBootcamp, setSelectedBootcamp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (bootcamp) => {
    setSelectedBootcamp(bootcamp);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBootcamp(null);
  };

  return {
    selectedBootcamp,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
