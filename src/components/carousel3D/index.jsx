import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./ParallaxZoom.css";

const ParallaxZoom = () => {
  const containerRef = useRef(null);

  // Array of background image paths
  const backgroundImages = [
    "Images/projects/p1.avif",
    "Images/projects/p2.avif",
    "Images/projects/p3.avif",
    "Images/projects/p4.avif",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const sections = container.querySelectorAll(".parallax-section");
      const scrollY = window.scrollY;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const distance = scrollY - sectionTop;

        const depth = index * 50;
        const scale = 1 + Math.min(distance / 1000, 0.5);
        const translateZ = Math.max(-depth, distance / 2);

        section.style.transform = `translateZ(${translateZ}px) scale(${scale})`;
        section.style.opacity = Math.max(0.5, 1 - Math.abs(distance) / 2000);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container" ref={containerRef}>
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="parallax-section"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="section-content">
            <h1>Project {index + 1}</h1>
            <NavLink to={`/section${index + 1}`} className="nav-button">
              View Project {index + 1}
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxZoom;
