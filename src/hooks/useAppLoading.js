import { useState } from "react";

// Custom hook to manage application loading state
export const useAppLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    handleLoadingComplete,
  };
};
