import { useEffect, useRef } from 'react';

export default function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold }
    );

    const el = ref.current;
    if (el) {
      const revealElements = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
