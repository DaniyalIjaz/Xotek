import React, { useState } from 'react';
import './index.css'; // Import CSS for the 3D effect

export function ThreeDCardDemo(props) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { offsetX: x, offsetY: y } = e.nativeEvent;

    const rotateX = ((y / height) - 0.5) * 20; // Rotation for up and down movement
    const rotateY = ((x / width) - 0.5) * -20; // Rotation for left and right movement

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="card-container">

      <div
        className="card-body"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className='cardHeadings'>        
              <div className="card-item title">{props.p1}</div>

              <div className="card-item description">
                {props.p2}
              </div>  
        </div>

      </div>
    </div>
  );
}
