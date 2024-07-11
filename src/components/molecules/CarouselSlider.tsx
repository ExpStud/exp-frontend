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
    className="absolute top-4 bg-white w-[50px] h-[10px] lg:h-[5px] cursor-grab active:cursor-grabbing focus:outline-none"
  />
);
const Track = (props: any, state: any) => (
  <div
    {...props}
    className="relative flex justify-center gap-2 mt-4 h-[10px] lg:h-[5px] bg-white bg-opacity-20"
  />
);

export default CarouselSlider;
