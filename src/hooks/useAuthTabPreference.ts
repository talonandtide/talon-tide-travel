import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'talon-tide-auth-same-tab';

export function useAuthTabPreference() {
  const [sameTab, setSameTab] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'true';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, sameTab.toString());
  }, [sameTab]);

  const toggle = useCallback(() => {
    setSameTab(prev => !prev);
  }, []);

  return { sameTab, toggle };
}
