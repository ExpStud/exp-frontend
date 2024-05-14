import React, { useState, useRef, FC } from "react";
import Image from "next/image";
import { Carousel, Client, clients } from "@constants";
import { Button } from "@components";
import { useRouter } from "next/router";
import { PanInfo, motion } from "framer-motion";

// interface Card {
//   name: string;
// }
// const cards = [
//   { image: "/images/slider1.svg", width: 1040, height: 600 },
//   { image: "/images/slider1.svg", width: 1040, height: 600 },
//   { image: "/images/slider1.svg", width: 1040, height: 600 },
// ];

interface Props {
  sliderValue: number;
  setSliderValue: (value: number) => void;
}

const CardCarousel: FC<Props> = (props: Props) => {
  const { sliderValue, setSliderValue } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const data: (Carousel | undefined)[] = [
    clients[0]?.carousel?.[1],
    clients[1]?.carousel?.[0],
    clients[0]?.carousel?.[0],
  ].filter(Boolean);

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      const clientX = e.type.includes("mouse")
        ? (e as React.MouseEvent).pageX
        : (e as React.TouchEvent).touches[0].pageX;
      setStartX(clientX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const stopDragging = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const clientX = e.type.includes("mouse")
      ? (e as React.MouseEvent).pageX
      : (e as React.TouchEvent).touches[0].pageX;
    const x = clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const fullWidth = sliderRef.current.scrollWidth;
      const scrollPercentage = (scrollPosition / fullWidth) * 100;
      const scrollPercentSlider = scrollPercentage * 0.01 * 155; //~width of slider
      setSliderValue(scrollPercentSlider);
    }
  };

  return (
    <div
      className="relative py-10 lg:py-20 flex flex-col items-center overflow-x-auto "
      ref={sliderRef}
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={onDrag}
      onTouchStart={startDragging}
      onTouchEnd={stopDragging}
      onTouchMove={onDrag}
      onScroll={handleScroll}
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div
        className="flex gap-2 items-end  cursor-pointer "
        style={{ width: "100%" }}
      >
        <style>
          {`
              ::-webkit-scrollbar {
                display: none;
              }
            `}
        </style>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            index={index}
            //@ts-ignore
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

interface CarouselItemProps {
  data: Carousel;
  index: number;
}

const CarouselItem: FC<CarouselItemProps> = (props: CarouselItemProps) => {
  const { data, index } = props;
  const router = useRouter();

  const handleClick = (): void => {
    if (data.href) window.open(data.href, "_blank");
    else router.push("/projects");
  };

  return (
    <div
      className={`relative h-[600px]  flex items-end justify-between   rounded-lg ${
        data.backgroundColor
      } ${index === 0 ? "ml-4 md:ml-10" : "ml-4"}`}
      style={{ minWidth: 1040 }}
    >
      <div
        className={`flex flex-col gap-1 justify-center p-10 max-w-[380px] ${data.textColor}`}
      >
        <p className="text-opacity-75 text-xl pl-0.5">{data.name}</p>
        <h3 className="text-5xl">{data.title}</h3>
        <Button
          title={data.href ? "Visit Website" : "Coming Soon"}
          // link={data.href}
          className={`mt-8 !min-w-[180px] !max-w-[180px] !h-[42px] !pr-1 !text-base !border-opacity-20 hover:!border-opacity-80 
            ${data.borderColor} ${data.textColor}`}
          circleClass={` ${data.fillColor}`}
          pathClass={` ${data.fillColor}`}
          svgClass="-rotate-45"
          callback={() => handleClick()}
        />
      </div>
      <div className="absolute -bottom-[24px] -right-[20px] overflow-hidden z-10 w-[608px] h-[560px]">
        <Image
          src={data.src}
          alt={`Slide ${index}`}
          fill
          className="object-cover overflow-hidden"
        />
      </div>
    </div>
  );
};

export default CardCarousel;
