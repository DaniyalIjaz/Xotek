import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a, .hover-target").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, .hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${hovered ? "hovered" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {children}
    </>
  );
};

export default CustomCursor;
