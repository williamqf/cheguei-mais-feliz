import { useEffect, useRef } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);
  const visibleRef = useRef<boolean>(true);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Performance hint for browsers
    el.style.willChange = 'transform';

    const maxOffset = 200; // px clamp to avoid revealing gaps
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 767px)');

    const isEnabled = () => !reducedMotionQuery.matches && !mobileQuery.matches;

    // Observe visibility to pause updates when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRef.current = entry.isIntersecting;
        }
      },
      { root: null, threshold: 0 }
    );
    observer.observe(el);

    let ticking = false;
    const update = () => {
      ticking = false;
      const target = elementRef.current;
      if (!target) return;

      if (!isEnabled()) {
        // Reset transform when disabled (reduced motion or mobile)
        target.style.transform = '';
        return;
      }
      if (!visibleRef.current) return;

      const scrolled = window.scrollY;
      const offset = scrolled * -speed;
      const clamped = Math.max(-maxOffset, Math.min(offset, maxOffset));
      target.style.transform = `translate3d(0, ${clamped}px, 0)`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // React to media query changes (with cross-browser fallback)
    const onChange = () => requestAnimationFrame(update);
    const addMQListener = (mql: MediaQueryList, handler: () => void) => {
      const anyMql = mql as any;
      if (typeof anyMql.addEventListener === 'function') {
        anyMql.addEventListener('change', handler);
      } else if (typeof anyMql.addListener === 'function') {
        anyMql.addListener(handler);
      }
    };
    const removeMQListener = (mql: MediaQueryList, handler: () => void) => {
      const anyMql = mql as any;
      if (typeof anyMql.removeEventListener === 'function') {
        anyMql.removeEventListener('change', handler);
      } else if (typeof anyMql.removeListener === 'function') {
        anyMql.removeListener(handler);
      }
    };

    addMQListener(reducedMotionQuery, onChange);
    addMQListener(mobileQuery, onChange);

    // Initial position
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      removeMQListener(reducedMotionQuery, onChange);
      removeMQListener(mobileQuery, onChange);
    };
  }, [speed]);

  return elementRef;
};

export default useParallax;
