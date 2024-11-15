import React, { useRef, useState } from 'react';
import './CarouselCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

function CarouselCard() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: window.innerWidth <= 950 ? 1 : 1, // Show fewer slides on smaller screens
    slidesToScroll: 1,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };
  

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const slideLeft = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const slideRight = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings} >
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            className="CarouselCardWrapper"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="CarouselCardMain">
              {/* Left Section */}
              <motion.div
                className="CarouselCard"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeIn('up', 0.1)}
              >
                <div className="eventbtnn">
                  <motion.h4
                    className="eventbtnnh4"
                    variants={fadeIn('up', 0.2)}
                  >
                    TESTIMONIALS
                  </motion.h4>
                  <motion.h2
                    className="eventbtnnh2"
                    variants={fadeIn('up', 0.3)}
                  >
                    What They Are Talking
                  </motion.h2>
                  <motion.h2
                    className="eventbtnnh22"
                    variants={fadeIn('up', 0.4)}
                  >
                    About Xotek
                  </motion.h2>
                </div>

                {/* Carousel Buttons */}
                <motion.div
                  className="carouselButtons"
                  variants={fadeIn('up', 0.5)}
                >
                  {currentSlide > 0 && (
                    <button className="button" onClick={slideLeft}>
                      <div className="button-box">
                        <span className="button-elem">
                          <svg
                            viewBox="0 0 46 40"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  )}
                  {currentSlide < 2 && (
                    <button
                      className="button"
                      style={{ transform: 'scaleX(-1)' }}
                      onClick={slideRight}
                    >
                      <div className="button-box">
                        <span className="button-elem">
                          <svg
                            viewBox="0 0 46 40"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  )}
                </motion.div>
              </motion.div>

              {/* Right Section */}
              <motion.div
                className="carouselDetails"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                variants={fadeIn('up', 0.7)}
              >
                <div className="carouselDetailsImg">
                  <motion.img
                    src="/Images/carouselCard/Carousel.jpg"
                    alt=""
                    variants={fadeIn('up', 0.7)}
                  />
                  <motion.img
                    className="carouselPositionImg"
                    src="/Images/Svgs/Commas.svg"
                    alt=""
                    variants={fadeIn('up', 0.8)}
                  />
                </div>

                <motion.img
                  className="bracketsCarousel"
                  src="/Images/carouselCard/Bracket.png"
                  alt=""
                  variants={fadeIn('up', 0.1)}
                />

                <div className="carouselRightSection">
                  <motion.div className="starSvgs" variants={fadeIn('up', 1.1)}>
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src="/Images/Svgs/star.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                    ))}
                  </motion.div>
                  <motion.h4 variants={fadeIn('up', 0.2)}>
                    Meat shops typically offer a variety of meats, including
                    beef, pork, chicken, lamb, and sometimes specialty meats
                    like game or exotic meats.
                  </motion.h4>
                  <motion.h3 variants={fadeIn('up', 0.3)}>JHON SURIA</motion.h3>
                  <motion.h5 variants={fadeIn('up', 0.4)}>
                    Marketing Manager
                  </motion.h5>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </>
  );
}

export default CarouselCard;



