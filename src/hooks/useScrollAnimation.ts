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
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
          
          if (entry.isIntersecting) {
            // Apply progressive animations based on scroll progress
            if (element.classList.contains('parallax-element')) {
              const translateY = (1 - progress) * 50;
              element.style.transform = `translateY(${translateY}px)`;
            }
            
            if (element.classList.contains('fade-scale')) {
              const scale = 0.8 + (progress * 0.2);
              const opacity = progress;
              element.style.transform = `scale(${scale})`;
              element.style.opacity = opacity.toString();
            }
            
            if (element.classList.contains('slide-reveal')) {
              const translateX = (1 - progress) * 100;
              element.style.transform = `translateX(${translateX}px)`;
              element.style.opacity = progress.toString();
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