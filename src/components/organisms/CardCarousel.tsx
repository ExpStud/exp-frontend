import React, { useState, useRef, FC } from "react";
import Image from "next/image";
import { Carousel, Client, clients } from "@constants";
import { Button } from "@components";
import { useRouter } from "next/router";

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
  };

  // const navigationWidth = "6.5rem";

  return (
    <div className="my-10 lg:my-20  overflow-x-auto" style={{ width: "100%" }}>
      <div
        ref={sliderRef}
        className="flex cursor-pointer gap-2"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDrag}
        onTouchStart={startDragging}
        onTouchEnd={stopDragging}
        onTouchMove={onDrag}
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
      className={`relative h-[600px] flex items-end justify-between rounded-lg mr-4 ${
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
