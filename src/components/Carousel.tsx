"use client"
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Carousel = ({ children } : Props) => {
  const childrenArray = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (childrenArray.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % childrenArray?.length);
      }, 1000 * 5);
  
      return () => clearInterval(interval);
    }
  }, [childrenArray.length]);

  if (childrenArray.length === 0) return children;

  return (
    <div className="relative w-full h-32 overflow-hidden flex justify-center items-center">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${childrenArray.length * 100}%`,
        }}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;