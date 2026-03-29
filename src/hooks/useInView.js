import { useState, useEffect, useRef } from 'react';

/**
 * Hook that observes when an element enters the viewport.
 * Returns [ref, isVisible] — mount heavy 3D canvases only when visible.
 */
export default function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '200px 0px', threshold: 0, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}
