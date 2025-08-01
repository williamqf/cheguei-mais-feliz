import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Stagger animation delay based on element position
            const delay = index * 100;
            setTimeout(() => {
              entry.target.classList.add('animate-in');
              entry.target.classList.remove('animate-out');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Enhanced scroll effects observer
    const advancedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const rect = entry.boundingClientRect;
          
          // Improved progress calculation that handles initial state properly
          let progress;
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // Element is visible - calculate proper progress
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;
            const visibleTop = Math.max(0, windowHeight - rect.top);
            const visibleHeight = Math.min(elementHeight, visibleTop, rect.bottom);
            progress = Math.max(0, Math.min(1, visibleHeight / Math.min(elementHeight, windowHeight)));
          } else {
            // Element is not visible
            progress = 0;
          }
          
          if (entry.isIntersecting) {
            // Apply progressive animations based on scroll progress
            if (element.classList.contains('parallax-element')) {
              const translateY = (1 - progress) * 50;
              element.style.transform = `translateY(${translateY}px)`;
            }
            
            if (element.classList.contains('fade-scale')) {
              const scale = 0.8 + (progress * 0.2);
              const opacity = progress > 0.1 ? Math.max(0.8, progress) : 1;
              element.style.transform = `scale(${scale})`;
              element.style.opacity = opacity.toString();
            }
            
            if (element.classList.contains('slide-reveal')) {
              // For elements initially visible, don't apply displacement
              if (rect.top < window.innerHeight * 0.8) {
                element.style.transform = `translateX(0px)`;
                element.style.opacity = '1';
              } else {
                const translateX = (1 - progress) * 100;
                const opacity = Math.max(0.8, progress);
                element.style.transform = `translateX(${translateX}px)`;
                element.style.opacity = opacity.toString();
              }
            }
          } else {
            // Reset styles when not intersecting
            if (element.classList.contains('slide-reveal') || element.classList.contains('fade-scale')) {
              element.style.transform = '';
              element.style.opacity = '';
            }
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px'
      }
    );

    // Observe elements with different animation classes
    const animateElements = document.querySelectorAll('.scroll-animate');
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const fadeScaleElements = document.querySelectorAll('.fade-scale');
    const slideRevealElements = document.querySelectorAll('.slide-reveal');
    
    animateElements.forEach((el) => observerRef.current?.observe(el));
    parallaxElements.forEach((el) => advancedObserver.observe(el));
    fadeScaleElements.forEach((el) => advancedObserver.observe(el));
    slideRevealElements.forEach((el) => advancedObserver.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      advancedObserver.disconnect();
    };
  }, []);

  return observerRef;
};

export default useScrollAnimation;