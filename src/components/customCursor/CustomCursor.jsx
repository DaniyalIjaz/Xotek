// import React, { useEffect, useRef } from 'react';
// import './CustomCursor.css';
// export const CursorContext = React.createContext("cursorContext");

// const CustomCursor = ({children}) => {
//     const coords = { x: 0, y: 0 };
//     const circlesRef = useRef([]);
    
//     useEffect(() => {
//         // Initialize each circle's position and style
//         circlesRef.current.forEach((circle) => {
//             if (circle) {
//                 circle.x = 0;
//                 circle.y = 0;
//                 circle.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
//             }
//         });

//         // Function to handle mouse movement
//         const handleMouseMove = (e) => {
//             coords.x = e.clientX;
//             coords.y = e.clientY;
//         };

//         // Function to animate circles
//         const animateCircles = () => {
//             let x = coords.x;
//             let y = coords.y;

//             circlesRef.current.forEach((circle, index) => {
//                 if (circle) {
//                     circle.style.left = `${x - 12}px`;
//                     circle.style.top = `${y - 12}px`;
//                     circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

//                     circle.x = x;
//                     circle.y = y;

//                     const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
//                     x += (nextCircle.x - x) * 0.3;
//                     y += (nextCircle.y - y) * 0.3;
//                 }
//             });
//             requestAnimationFrame(animateCircles);
//         };

//         // Start animation and add mousemove event listener
//         window.addEventListener('mousemove', handleMouseMove);
//         animateCircles();

//         // Cleanup on unmount
//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <CursorContext.Provider>
//             {Array.from({ length: 15 }).map((_, index) => (
//                 <div
//                     key={index}
//                     className="cursorCircle"
//                     ref={(el) => (circlesRef.current[index] = el)}
//                 ></div>
//             ))}
//             {children}
//         </CursorContext.Provider>
//     );
// };

// export default CustomCursor;


import React, { useEffect, useState } from "react";
import cx from "classnames";
import './CustomCursor.css'

export const CursorContext = React.createContext("cursorContext");

const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left'];

const CustomCursor = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState(false);

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  const { x, y } = mousePosition;

  const onCursor = cursorType => {
    cursorType = (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
    setCursor(cursorType);
  };

  return (
    <CursorContext.Provider value={{ onCursor }}>
      <ins
        className={cx('movable', {
          'active': !!cursor,
          [`cursor-${cursor}`]: !!cursor
        })}
        style={{
          left: `${x}px`,
          top: `${y}px`
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};

export default CustomCursor;
