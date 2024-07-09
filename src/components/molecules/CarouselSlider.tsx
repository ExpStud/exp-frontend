import { motion } from "framer-motion";
import React, { useState, useRef, FC, useEffect } from "react";
import { useWindowSize } from "src/hooks";

interface CarouselSliderProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  setFromSlider: (value: boolean) => void;
}

const CarouselSlider: FC<CarouselSliderProps> = ({
  sliderValue,
  setSliderValue,
  setFromSlider,
}) => {
  // const [sliderPosition, setSliderValue] = useState(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const [winWidth] = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPositionRef = useRef<number>(0);

  const draggableElementWidth = 77;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const clickPositionX = e.clientX - containerRect.left; // Calculate click position within the container
      const containerWidth = containerRef.current.offsetWidth;
      const maxPosition = containerWidth - draggableElementWidth;

      let newPosition = clickPositionX - draggableElementWidth / 2; // Center the slider on the click position
      if (newPosition < 0) newPosition = 0; // Prevent it from going beyond the left boundary
      if (newPosition > maxPosition) newPosition = maxPosition; // Prevent it from going beyond the right boundary

      setFromSlider(true);
      setSliderValue(newPosition);
    }
  };
  //set left position
  useEffect(() => {
    if (containerRef.current) {
      const leftPosition = containerRef.current.getBoundingClientRect().left;
      // Use the left position as needed
      leftPositionRef.current = leftPosition;
      console.log("leftPosition", leftPositionRef.current);
    }
  }, [winWidth]);

  const handleDrag = (e: MouseEvent | TouchEvent, info: any) => {
    if (containerRef.current) {
      //handle out of bounds
      if (
        info.point.x < leftPositionRef.current ||
        info.point.x + draggableElementWidth >
          leftPositionRef.current + containerRef.current.offsetWidth
      ) {
        return; // Stop the drag function
      }

      console.log(
        ((info.point.x - leftPositionRef.current) /
          (containerRef.current.offsetWidth - draggableElementWidth)) *
          100
      );
      const newSliderValue =
        ((info.point.x - leftPositionRef.current) /
          (containerRef.current.offsetWidth - draggableElementWidth)) *
        100;
      // console.log("newSliderValue", newSliderValue);
      setFromSlider(true);
      setSliderValue(newSliderValue);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setConstraints({
        left: 0,
        right: 25, //containerWidth - draggableElementWidth,
      });
    }
  }, []); // Recalculate constraints when sliderValue changes

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
        drag="x"
        dragConstraints={constraints}
        onDrag={handleDrag}
      />
    </div>
  );
};

export default CarouselSlider;
