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

const CardCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

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

    // console.log(sliderRef.current.scrollLeft); // Logs the scroll position
  };

  // const navigationWidth = "6.5rem";

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const fullWidth = sliderRef.current.scrollWidth;
      const scrollPercentage = (scrollPosition / fullWidth) * 100;
      const scrollPercentSlider = scrollPercentage * 0.01 * 145;
      console.log(scrollPercentSlider); // Logs the scroll position as a percentage of the full width
      setSliderValue(scrollPercentSlider);
    }
  };

  return (
    <div
      className="my-10 lg:my-20 flex flex-col items-center"
      // style={{ width: `calc(100vw - ${navigationWidth})` }}
    >
      <div className="" style={{ width: "100%" }}>
        <div
          ref={sliderRef}
          className="flex cursor-pointer gap-2 overflow-x-auto"
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
          <style>
            {`
              ::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {clients.map((client) => (
            <>
              {client.carousel?.map((item, index) => (
                <CarouselItem
                  key={index}
                  index={index}
                  client={client}
                  carousel={item}
                />
              ))}
            </>
          ))}
        </div>
      </div>
      <CarouselSlider
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
      />
    </div>
  );
};

interface CarouselSliderProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
}
const CarouselSlider: FC<CarouselSliderProps> = (
  props: CarouselSliderProps
) => {
  const { sliderValue, setSliderValue } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  // const handleDrag = (e: MouseEvent | TouchEvent, info: PanInfo) => {
  //   if (containerRef.current) {
  //     const newSliderValue = Math.max(
  //       0,
  //       Math.min(
  //         info.point.x,
  //         containerRef.current.offsetWidth - 60 // Subtract the width of the slider
  //       )
  //     );
  //     console.log("newSliderValue ", newSliderValue);
  //     setSliderValue(newSliderValue);
  //   }
  // };

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center gap-2 mt-6 h-[1px] w-[176px] bg-white bg-opacity-20"
    >
      <motion.div
        className="absolute bg-white w-[60px] h-[1px] cursor-pointer"
        initial={{ left: 0 }}
        animate={{ left: sliderValue }}
        // drag="x"
        // dragConstraints={containerRef}
        // onDrag={handleDrag}
      />
    </div>
  );
};

interface CarouselItemProps {
  client: Client;
  carousel: Carousel;
  index: number;
}

const CarouselItem: FC<CarouselItemProps> = (props: CarouselItemProps) => {
  const { client, carousel, index } = props;
  const router = useRouter();

  const handleClick = (): void => {
    if (carousel.href) window.open(carousel.href, "_blank");
    else router.push("/projects");
  };

  return (
    <div
      className={`relative h-[600px] flex items-end justify-between rounded-lg ${
        carousel.backgroundColor
      } ${index === 0 ? "ml-4 md:ml-10" : "ml-4"}`}
      style={{ minWidth: 1040 }}
    >
      <div
        className={`flex flex-col gap-1 justify-center p-10 max-w-[380px] ${carousel.textColor}`}
      >
        <p className="text-opacity-75 text-xl pl-0.5">{client.name}</p>
        <h3 className="text-5xl">{carousel.title}</h3>
        <Button
          title={carousel.href ? "Visit Website" : "Coming Soon"}
          // link={carousel.href}
          className={`mt-8 !min-w-[180px] !max-w-[180px] !h-[42px] !pr-1 !text-base hover:!border-opacity-80 ${carousel.borderColor} ${carousel.textColor}`}
          circleClass={` ${carousel.fillColor}`}
          pathClass={` ${carousel.arrowColor}`}
          svgClass="-rotate-45"
          callback={() => handleClick()}
        />
      </div>
      <div className="absolute -bottom-[28.5px] -right-[19px] overflow-visible z-10">
        <Image
          src={carousel.src}
          alt={`Slide ${index}`}
          width={608}
          height={560}
        />
      </div>
    </div>
  );
};

export default CardCarousel;
