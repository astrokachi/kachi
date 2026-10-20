import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Inertial scrolling: the page glides toward where you scroll instead of
// stepping there. Each wheel move eases out over a fixed 1.6s on Lenis's
// exponential curve, so most of the travel happens at once and the rest
// settles quietly, at the same pace on 60Hz and 120Hz screens. Touch keeps
// the device's own native scrolling. Off entirely under reduced motion.
export function useSmoothScroll(disabled) {
  useEffect(() => {
    if (disabled) return undefined;
    const head = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--head')) || 52;
    const lenis = new Lenis({
      duration: 1.6,
      autoRaf: true,
      anchors: { offset: -(head + 8) },
    });
    return () => lenis.destroy();
  }, [disabled]);
}
