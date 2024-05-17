import React, { useRef, FC } from "react";
import { motion } from "framer-motion";

interface CarouselSliderProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
}

const CarouselSlider: FC<CarouselSliderProps> = (
  props: CarouselSliderProps
) => {
  const { sliderValue, setSliderValue } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: MouseEvent | TouchEvent, info: any) => {
    if (containerRef.current) {
      const newSliderValue = Math.max(
        0,
        Math.min(
          info.point.x,
          containerRef.current.offsetWidth // Don't subtract the width of the slider
        )
      );
      console.log("newSliderValue ", newSliderValue);
      setSliderValue(newSliderValue);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center gap-2 mt-4 h-[2px] w-[176px] bg-white bg-opacity-20"
    >
      <motion.div
        className="absolute bg-white w-[60px] h-[2px]"
        initial={{ left: 0 }}
        animate={{ left: sliderValue }}
        // drag="x"
        // dragConstraints={containerRef}
        // onDrag={handleDrag}
      />
    </div>
  );
};
export default CarouselSlider;
