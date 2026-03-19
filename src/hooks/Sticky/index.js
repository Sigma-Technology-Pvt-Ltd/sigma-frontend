import { useState, useEffect } from 'react';

const useSticky = () => {
   const [isSticky, setIsSticky] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.pageYOffset;
         setIsSticky(scrollTop > 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return isSticky;
};

export default useSticky;
