// src/hooks/useSmoothScroll.js
import { useEffect } from 'react';

const useSmoothScroll = (targetId) => {
   useEffect(() => {
      const scrollToTarget = () => {
         const targetElement = document.getElementById(targetId);
         if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
         }
      };

      const handleClick = () => {
         scrollToTarget();
      };

      document.addEventListener('click', handleClick);

      return () => {
         document.removeEventListener('click', handleClick);
      };
   }, [targetId]);
};

export default useSmoothScroll;
