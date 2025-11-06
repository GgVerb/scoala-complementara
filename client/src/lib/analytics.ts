// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Validate measurementId format (supports G-XXXXXXXXXX, UA-XXXXXXXX-X, or numeric IDs)
  const isValidGAId = !measurementId || measurementId === 'test' || 
    /^(G-[A-Z0-9]{10}|UA-\d{8}-\d{1,2}|\d+)$/.test(measurementId);
  if (!isValidGAId) {
    console.error('Invalid Google Analytics measurement ID format:', measurementId);
    return;
  }

  // Defer analytics loading until browser is idle for better initial load performance
  const loadAnalytics = () => {
    // Add Google Analytics script to the head
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize gtag - use textContent instead of innerHTML to prevent XSS
    const script2 = document.createElement('script');
    script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(script2);
  };

  // Load analytics when browser is idle or after 2 seconds
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadAnalytics, { timeout: 2000 });
  } else {
    setTimeout(loadAnalytics, 2000);
  }
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url
  });
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};