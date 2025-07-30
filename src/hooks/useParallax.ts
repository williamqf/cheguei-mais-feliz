import { useEffect, useRef } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrolled = window.scrollY;
      const rate = scrolled * -speed;
      
      elementRef.current.style.transform = `translateY(${rate}px)`;
    };

    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScrollThrottled);
    
    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
    };
  }, [speed]);

  return elementRef;
};

export default useParallax;