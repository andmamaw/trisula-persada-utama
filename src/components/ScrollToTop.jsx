import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { lenisRef } from '../hooks/useLenis';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Lenis owns the scroll position, so window.scrollTo alone would be undone
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
