import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = link.getAttribute('href');
        const targetId = href?.substring(1);
        
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
            
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useSmoothScroll;