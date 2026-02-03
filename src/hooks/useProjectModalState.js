import { useState } from "react";

// Custom hook untuk mengelola project modal state

export const useProjectModalState = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return {
    selectedProject,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
