import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Inertial scrolling: the page glides toward where you scroll instead of
// stepping there. A low lerp keeps the glide long and even; touch keeps the
// device's own native scrolling. Off entirely under reduced motion.
export function useSmoothScroll(disabled) {
  useEffect(() => {
    if (disabled) return undefined;
    const head = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--head')) || 52;
    const lenis = new Lenis({
      lerp: 0.07,
      wheelMultiplier: 0.9,
      autoRaf: true,
      anchors: { offset: -(head + 8) },
    });
    return () => lenis.destroy();
  }, [disabled]);
}
