import React, { useEffect, useState } from 'react';
import { ArrowUpward } from '@mui/icons-material';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Visibility Effect
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top on click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <div className="scroll-top" onClick={scrollToTop} role="button" tabIndex={0}>
      <ArrowUpward fontSize="large" />
    </div>
  ) : null;
};

export default ScrollToTop;
