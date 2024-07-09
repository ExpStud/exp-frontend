import React, { useState, useRef, FC, useEffect } from "react";
import Image from "next/image";
import { Carousel, clients } from "@constants";
import { Button } from "@components";
import { useRouter } from "next/router";
import { useWindowSize } from "src/hooks";

interface Props {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  fromSlider: boolean;
  setFromSlider: (value: boolean) => void;
}

const carouselData: (Carousel | undefined)[] = [
  clients[0]?.carousel?.[1],
  clients[0]?.carousel?.[0],
  clients[1]?.carousel?.[0],
].filter(Boolean);

const CardCarousel: FC<Props> = (props: Props) => {
  const { setSliderValue, sliderValue, fromSlider, setFromSlider } = props;

  const sliderRef = useRef<HTMLDivElement>(null);

  const [winWidth] = useWindowSize();
  const isMobileSize = winWidth < 640;

  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  const handleScroll = () => {
    if (sliderRef.current && !fromSlider) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const fullWidth = sliderRef.current.scrollWidth;
      const visibleWidth = sliderRef.current.clientWidth;
      const scrollPercentage = scrollPosition / (fullWidth - visibleWidth);
      console.log("setSliderValue");
      setFromSlider(false);
      setSliderValue(scrollPercentage * 100);
    }
  };

  const scrollToCard = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = isMobileSize ? 330 : 930; //card width 330 vs 930
      sliderRef.current.scrollLeft = cardWidth * index;
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      // console.log("carouselValue", carouselValue);
      const fullWidth =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const newScrollLeft = Math.round((sliderValue / 100) * fullWidth); // Round to nearest whole number

      // Check if the new scroll position is significantly different to avoid feedback loop
      if (Math.abs(sliderRef.current.scrollLeft - newScrollLeft) > 1) {
        sliderRef.current.scrollLeft = newScrollLeft;
      }
    }
  }, [sliderValue]);

  return (
    <div
      className="relative my-10 lg:my-20 flex flex-col items-center overflow-x-auto h-[630px]"
      ref={sliderRef}
      onScroll={handleScroll}
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="flex gap-2 items-end w-full">
        <style>
          {`
              ::-webkit-scrollbar {
                display: none;
              }
            `}
        </style>
        {carouselData.map((item, index) => (
          <CarouselItem
            key={index}
            index={index}
            //@ts-ignore
            data={item}
            scrollToCard={scrollToCard}
            scrollLeft={sliderRef?.current?.scrollLeft ?? 0}
            scrollPercentage={
              (sliderRef?.current?.scrollLeft ?? 0) /
              ((sliderRef?.current?.scrollWidth ?? 0) -
                (sliderRef?.current?.clientWidth ?? 0))
            }
          />
        ))}
      </div>
    </div>
  );
};

interface CarouselItemProps {
  data: Carousel;
  index: number;
  scrollToCard: (index: number) => void;
  scrollLeft: number;
  scrollPercentage: number;
}

const CarouselItem: FC<CarouselItemProps> = (props: CarouselItemProps) => {
  const { data, index, scrollLeft, scrollPercentage } = props;
  const router = useRouter();

  // In CarouselItem component
  const handleClick = (): void => {
    if (data.href) window.open(data.href, "_blank");
    else router.push("/projects");
  };
  // In CarouselItem component
  const handleParentClick = (): void => {
    props.scrollToCard(index);
  };

  // console.log(scrollPercentage, index, carouselData.length - 1);

  return (
    <div
      className={`bg-gray-700  relative min-w-[330px] sm:min-w-[940px] md:min-w-[1040px] h-[600px] rounded-lg  ${
        index === 0 ? "ml-4 md:ml-10" : "ml-1 sm:ml-4 "
      }`}
    >
      <div
        className={`relative h-full w-full flex items-end justify-between transition-200 rounded-lg ${
          data.backgroundColor
        } ${
          (scrollPercentage === 0 && index === 0) ||
          (scrollPercentage === 1 && index === carouselData.length - 1)
            ? "cursor-default"
            : "cursor-pointer"
        } ${scrollPercentage === 1 && index === carouselData.length - 1}`}
        onClick={handleParentClick}
      >
        <div
          className={`flex flex-col gap-1 justify-center p-10 max-w-[380px] ${data.textColor}`}
        >
          <p className="text-opacity-75 text-xl pl-0.5">{data.name}</p>
          <h3 className="text-4xl sm:text-5xl whitespace-nowrap ">
            {data.title}
          </h3>
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
        <Image
          src={data?.srcMobile ?? data.src}
          alt={`Slide ${index}`}
          // fill
          width={300}
          height={400}
          className=" sm:hidden absolute top-0 left-1/2 transform -translate-x-1/2"
        />
        <div
          className={`hidden sm:flex absolute overflow-hidden z-10 w-[608px] h-[560px] ${
            data.name === "Scum"
              ? " -bottom-[23px] -right-[19px] "
              : "-bottom-[24px] -right-[20px] "
          }`}
        >
          <Image
            src={data.src}
            alt={`Slide ${index}`}
            fill
            className="object-cover overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
