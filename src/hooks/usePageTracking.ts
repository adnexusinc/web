import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';

/**
 * Custom hook to automatically track page views on route changes
 * Place this in App.tsx or layout components
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const pageTitle = document.title;
    const pagePath = location.pathname + location.search;

    analytics.pageView(pagePath, pageTitle);

    // Scroll to top on page change (optional UX improvement)
    window.scrollTo(0, 0);
  }, [location]);
};

export default usePageTracking;
