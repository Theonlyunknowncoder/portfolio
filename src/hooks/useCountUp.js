import { useState, useEffect, useRef, useCallback } from 'react';
import useInView from './useInView';

/**
 * Hook that animates a number counting up from 0 to `end` when the element is visible.
 * Returns [ref, displayValue].
 */
export default function useCountUp(end, duration = 2000, suffix = '') {
  const [inViewRef, isVisible] = useInView({ threshold: 0.5 });
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const numericEnd = parseInt(end, 10) || 0;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericEnd);
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return [inViewRef, `${value}${suffix}`];
}
