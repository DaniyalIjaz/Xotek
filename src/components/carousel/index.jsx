import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'; 
import Slide1 from '/Images/carouselSlide/slide-1.webp';
import Slide2 from '/Images/carouselSlide/slide-2.webp';
import Slide3 from '/Images/carouselSlide/slide-3.webp';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "0",
        padding: "0px",
        right: "80px", // Position to the right
        width: "0px", // Increase size
        height: "50px",
        zIndex: 1, // Ensure it's above the image
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "0",
        padding: "0px",
        left: "45px", 
        width: "0px", 
        height: "50px",
        zIndex: 1, 
      }}
      onClick={onClick}
    />
  );
};

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={Slide1} alt="Slide 1" className="carousel-image" />
        </div>
        <div>
          <img src={Slide2} alt="Slide 2" className="carousel-image" />
        </div>
        <div>
          <img src={Slide3} alt="Slide 3" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
