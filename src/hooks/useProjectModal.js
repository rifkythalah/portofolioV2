import { useEffect } from "react";

/**
 * Custom hook for project modal functionality
 * Handles body scroll lock when modal is open
 * @param {boolean} isOpen - Modal open state
 */
export const useProjectModal = (isOpen) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save original overflow style
      const originalOverflow = document.body.style.overflow;
      // Lock body scroll
      document.body.style.overflow = "hidden";

      // Cleanup: restore original overflow when modal closes
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return null;
};
