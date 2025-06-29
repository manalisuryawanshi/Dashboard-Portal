import { useState, useCallback } from 'react';
import { APP_CONFIG } from '../config/appConfig';

// Custom hook for navigation management
export const useNavigation = (initialPage = APP_CONFIG.defaultPage) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const goHome = useCallback(() => {
    setCurrentPage(APP_CONFIG.defaultPage);
  }, []);

  const goBack = useCallback(() => {
    // Simple back functionality - could be enhanced with history stack
    setCurrentPage(APP_CONFIG.defaultPage);
  }, []);

  return {
    currentPage,
    navigateTo,
    goHome,
    goBack,
    setCurrentPage // Keep for backward compatibility
  };
};