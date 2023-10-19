import * as React from 'react';
import { useEffect, useState } from 'react';

import { loadGTM } from '../../lib/GoogleTagManager';
export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  const [isGTMLoaded, setIsGTMLoaded] = useState(false);
  useEffect(() => {
    if (!isGTMLoaded) {
      loadGTM();
      setIsGTMLoaded(true);
    }
  }, [isGTMLoaded]);
  return <>{children}</>;
}
