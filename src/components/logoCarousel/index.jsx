import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

// Import logo images here (replace with your own paths)
import logo1 from '/Images/logoCarousel/logo-1.png';
import logo2 from '/Images/logoCarousel/logo-2.png';
import logo3 from '/Images/logoCarousel/logo-3.png';
import logo4 from '/Images/logoCarousel/logo-4.png';
import logo5 from '/Images/logoCarousel/logo-5.png';
import logo6 from '/Images/logoCarousel/logo-6.png';
import logo7 from '/Images/logoCarousel/logo-7.png';
import logo8 from '/Images/logoCarousel/logo-8.png';
import logo9 from '/Images/logoCarousel/logo-9.png';
import logo10 from '/Images/logoCarousel/logo-10.png';
import logo11 from '/Images/logoCarousel/logo-11.png';
import logo12 from '/Images/logoCarousel/logo-12.png';

// Array of logo images in the desired display order
const logosRow1 = [logo1, logo3, logo2];
const logosRow2 = [logo4, logo5, logo6];
const logosRow3 = [logo7, logo8, logo9];
const logosRow4 = [logo10, logo11, logo12];

const LogoCarousel = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    // Cycle through logos in each row at different intervals
    const interval1 = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logosRow1.length);
    }, 2000);
    const interval2 = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logosRow2.length);
    }, 2000);
    const interval3 = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logosRow3.length);
    }, 2000);
    const interval4 = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logosRow4.length);
    }, 2000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  return (
    <div className="logo-carousel-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentLogoIndex}
          src={logosRow1[currentLogoIndex]}
          alt="Logo 1"
          className="logo-item"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentLogoIndex + 10} // Add offset key to ensure unique keys
          src={logosRow2[currentLogoIndex]}
          alt="Logo 2"
          className="logo-item"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentLogoIndex + 20}
          src={logosRow3[currentLogoIndex]}
          alt="Logo 3"
          className="logo-item"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentLogoIndex + 30}
          src={logosRow4[currentLogoIndex]}
          alt="Logo 4"
          className="logo-item"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default LogoCarousel;
