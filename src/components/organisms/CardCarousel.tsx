import React, {useState} from "react";
import Image from "next/image";

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const cards = [
    {
      image: '/images/first.png'
    },
    {
      image: '/images/second.png'
    },
    {
      image: '/images/third.png'
    }
  ];
  
  return (
    <div className="relative mt-20 mb-500 ml-10">
      <div style={{ height: "600px", marginBottom: "4rem" }}>
        {cards.map((image, index) => (
          <div
            key={index}
            className={`absolute rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform ${
              index === activeIndex ? "scale-100" : "scale-95"
              }`}
            style={{
              transform: `translateX(${index * 75}px)`,
              zIndex: cards.length - index,
            }}
            onClick={() => handleCardClick(index)}
          >
            <Image
              src={image.image}
              alt="image"
              width={1040}
              height={600}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;