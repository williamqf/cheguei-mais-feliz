import { useRef, useEffect } from 'react';

interface TiltOptions {
  max?: number;
  scale?: number;
  speed?: number;
}

export const useTilt = (options: TiltOptions | number = 10) => {
  // Support both old number API and new options API
  const settings = typeof options === 'number' 
    ? { max: options, scale: 1.02, speed: 300 }
    : { max: 10, scale: 1.02, speed: 300, ...options };
    
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      const rotateX = deltaY * settings.max;
      const rotateY = deltaX * settings.max;
      
      element.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`;
      element.style.transition = `transform ${settings.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      element.style.transition = `transform ${settings.speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [settings.max, settings.scale, settings.speed]);

  return ref;
};

export default useTilt;