// utils/usePageReload.ts

import { useEffect, useState } from 'react';

export const usePageReload = () => {
  const [isReloaded, setIsReloaded] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsReloaded(true);
    };

    // Add the 'beforeunload' event listener to detect page reloads or navigation away
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Return the isReloaded flag to indicate whether the page has been reloaded
  return isReloaded;
};
