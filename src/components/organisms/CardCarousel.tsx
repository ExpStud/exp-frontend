import React, { useState, useRef } from 'react';
import Image from "next/image";

const CardCarousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const cards = [
    { image: '/images/slider1.svg', width: 1040, height: 600 },
    { image: '/images/slider1.svg', width: 1040, height: 600 },
    { image: '/images/slider1.svg', width: 1040, height: 600 }
  ];

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      const clientX = e.type.includes('mouse') ? (e as React.MouseEvent).pageX : (e as React.TouchEvent).touches[0].pageX;
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
    const clientX = e.type.includes('mouse') ? (e as React.MouseEvent).pageX : (e as React.TouchEvent).touches[0].pageX;
    const x = clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative mt-20 mb-500 ml-10 overflow-hidden" style={{ width: '100%' }}>
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
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style>
          {`
            ::-webkit-scrollbar {
              display: none;  // hides scrollbars in WebKit browsers
            }
          `}
        </style>
        {cards.map((card, index) => (
          <div key={index} className="flex-none pr-4 mb-20" style={{ minWidth: card.width }}>
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
  );
};

export default CardCarousel;
