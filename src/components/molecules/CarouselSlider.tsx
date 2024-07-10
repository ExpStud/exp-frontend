import { motion } from "framer-motion";
import React, { useState, useRef, FC, useEffect } from "react";
import { useWindowSize } from "@hooks";
import ReactSlider from "react-slider";

interface CarouselSliderProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  fromSlider: boolean;
  setFromSlider: (value: boolean) => void;
}

const CarouselSlider: FC<CarouselSliderProps> = ({
  sliderValue,
  setSliderValue,
  fromSlider,
  setFromSlider,
}) => {
  // const [sliderPosition, setSliderValue] = useState(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const [winWidth] = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<HTMLDivElement>(null);
  const leftPositionRef = useRef<number>(0);

  const draggableElementWidth = 77;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setFromSlider(false);
      const containerRect = containerRef.current.getBoundingClientRect();
      const clickPositionX = e.clientX - containerRect.left; // Calculate click position within the container
      const containerWidth = containerRef.current.offsetWidth;
      const maxPosition = containerWidth - draggableElementWidth;

      let newPosition = clickPositionX - draggableElementWidth / 2; // Center the slider on the click position
      if (newPosition < 0) newPosition = 0; // Prevent it from going beyond the left boundary
      if (newPosition > maxPosition) newPosition = maxPosition; // Prevent it from going beyond the right boundary

      setSliderValue(newPosition);
    }
  };
  //set left position
  useEffect(() => {
    if (containerRef.current) {
      const leftPosition = containerRef.current.getBoundingClientRect().left;
      // Use the left position as needed
      leftPositionRef.current = leftPosition;
    }
  }, [winWidth]);

  const handleDrag = (e: MouseEvent | TouchEvent, info: any) => {
    setFromSlider(true);
    if (containerRef.current) {
      //handle out of bounds
      if (
        info.point.x < leftPositionRef.current ||
        info.point.x + draggableElementWidth >
          leftPositionRef.current + containerRef.current.offsetWidth
      ) {
        return; // Stop the drag function
      }

      const newSliderValue =
        ((info.point.x - leftPositionRef.current) /
          (containerRef.current.offsetWidth - draggableElementWidth)) *
        100;
      setSliderValue(newSliderValue);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      // const containerWidth = containerRef.current.offsetWidth;
      setConstraints({
        left: 0,
        right: 25, //containerWidth - draggableElementWidth,
      });
    }
  }, [sliderValue]);

  useEffect(() => {
    if (draggableRef.current) {
      // Access the style.transform property
      const transformStyle = draggableRef.current.style.transform;

      // Extract the translateX value using a regular expression
      const match = /translateX\(([^)]+)\)/.exec(transformStyle);
      const translateX = match ? match[1] : "0px"; // Default to '0px' if not found

      console.log("translateX:", translateX);
    }
  }, [sliderValue]);

  // return (
  //   <div
  //     ref={containerRef}
  //     onClick={handleClick}
  //     className="relative flex justify-center gap-2 mt-4 h-[4px] w-[176px] bg-white bg-opacity-20"
  //     style={{ cursor: "pointer" }} // Indicate the element is clickable
  //   >
  //     <motion.div
  //       className="absolute bg-white w-[77px] h-[4px]"
  //       initial={{ left: 0 }}
  //       // animate={{ translateX: `${sliderValue}px` }}
  //       {...(!fromSlider && {
  //         animate: { translateX: `${Math.round(sliderValue)}px` },
  //       })}
  //       // initial={{ translateX: "-50px" }}
  //       // animate={{ translateX: `${sliderValue}px` }}
  //       // {...(!fromSlider && { animate: { left: `${sliderValue}px` } })} // Only pass animate prop if fromSlider is false
  //       // drag="x"
  //       // dragConstraints={containerRef}
  //       // onDrag={handleDrag}
  //       ref={draggableRef}
  //     />

  //     {/* {true ? (
  //       <motion.div
  //         className="absolute bg-white w-[77px] h-[4px]"
  //         drag="x"
  //         dragConstraints={containerRef}
  //         onDrag={handleDrag}
  //       />
  //     ) : (
  //       <motion.div
  //         className="absolute bg-white w-[77px] h-[4px]"
  //         animate={{ left: `${sliderValue}px` }}
  //         onClick={() => setFromSlider(true)}
  //         onMouseDown={() => setFromSlider(true)}
  //       />
  //     )} */}
  //   </div>
  // );

  return (
    <ReactSlider
      defaultValue={0}
      renderTrack={Track}
      renderThumb={Thumb}
      className={" w-[176px]"}
      onChange={(value: number) => {
        setFromSlider(true);
        setSliderValue(value);
      }}
      value={fromSlider ? undefined : sliderValue}
    />
  );
};

const Thumb = (props: any, state: any) => (
  <div
    {...props}
    className="absolute top-4 bg-white w-[50px] h-[5px] cursor-grab active:cursor-grabbing focus:outline-none"
  />
);
const Track = (props: any, state: any) => (
  <div
    {...props}
    className="relative flex justify-center gap-2 mt-4 h-[5px] bg-white bg-opacity-20"
  />
);

export default CarouselSlider;
