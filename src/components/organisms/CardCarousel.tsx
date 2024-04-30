import React, { useState, useRef } from "react";
import Image from "next/image";

const CardCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const cards = [
    { image: "/images/slider1.svg", width: 1040, height: 600 },
    { image: "/images/slider1.svg", width: 1040, height: 600 },
    { image: "/images/slider1.svg", width: 1040, height: 600 },
  ];

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
    <div
      className="my-10 lg:my-20"
      // style={{ width: `calc(100vw - ${navigationWidth})` }}
    >
      <div className="overflow-auto justify-end" style={{ width: "100%" }}>
        <div
          ref={sliderRef}
          className="flex cursor-pointer overflow-auto"
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
          {cards.map((card, index) => (
            <div
              key={index}
              className={`pr-4 ${index === 0 ? "pl-4 md:pl-10" : "pl-4"}`}
              style={{ minWidth: card.width }}
            >
              <Image
                src={card.image}
                alt={`Slide ${index}`}
                width={card.width}
                height={card.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
