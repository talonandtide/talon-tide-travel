import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'talon-tide-auth-same-tab';

export function useAuthTabPreference() {
  const [sameTab, setSameTab] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem(STORAGE_KEY);
    // Default to same-tab for a seamless transition into the PWA.
    return stored === null ? true : stored === 'true';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, sameTab.toString());
  }, [sameTab]);

  const toggle = useCallback(() => {
    setSameTab(prev => !prev);
  }, []);

  return { sameTab, toggle };
}
