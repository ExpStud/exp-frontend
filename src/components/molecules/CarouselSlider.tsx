import { motion } from "framer-motion";
import React, { useState, useRef, FC } from "react";

interface CarouselSliderProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
}

const CarouselSlider: FC<CarouselSliderProps> = ({
  sliderValue,
  setSliderValue,
}) => {
  // const [sliderPosition, setSliderValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      console.log(" ----- handle click ----- ");
      const containerRect = containerRef.current.getBoundingClientRect();
      const clickPositionX = e.clientX - containerRect.left; // Calculate click position within the container
      const containerWidth = containerRef.current.offsetWidth;
      const draggableElementWidth = 77; // Assuming a fixed width for the draggable element
      const maxPosition = containerWidth - draggableElementWidth;

      let newPosition = clickPositionX - draggableElementWidth / 2; // Center the slider on the click position
      if (newPosition < 0) newPosition = 0; // Prevent it from going beyond the left boundary
      if (newPosition > maxPosition) newPosition = maxPosition; // Prevent it from going beyond the right boundary

      setSliderValue(newPosition);
    }
  };
  // console.log("sliderValue ", sliderValue);

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative flex justify-center gap-2 mt-4 h-[4px] w-[176px] bg-white bg-opacity-20"
      style={{ cursor: "pointer" }} // Indicate the element is clickable
    >
      <motion.div
        className="absolute bg-white w-[77px] h-[4px]"
        animate={{ left: `${sliderValue}px` }} // Animate to the new position
        transition={
          {
            // type: "spring",
            // stiffness: 500,
            // damping: 30,
          }
        }
      />
    </div>
  );
};

export default CarouselSlider;
