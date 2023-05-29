

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      
        <button className={`w-7 h-7  outline outline-1 outline-primary outline-offset-4 rounded-full center-child fixed z-50 right-4 bottom-8  trns-1 bg-primary shadow-dots ${isVisible ? 'translate-y-0 visible' : 'translate-y-9 invisible'}`} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      
    </>
  );
};

export default ScrollToTop;

