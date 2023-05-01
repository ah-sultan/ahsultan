import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 50;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 5);
  };

 useEffect(() => {
    window.addEventListener('scroll', handleScroll);
 })

  return (
    <>
       <button className={`w-7 h-7  outline outline-1 outline-primary outline-offset-4 rounded-full center-child fixed z-50 right-4 bottom-8  trns-1 bg-primary shadow-dots ${showButton ? 'translate-y-0 visible' : 'translate-y-9 invisible'}`} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
    </>
  );
};

export default ScrollToTopButton;
