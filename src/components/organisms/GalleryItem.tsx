import { Button } from "@components";
import { GalleryType } from "@constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface GalleryItemProps {
  data: GalleryType;
}

const GalleryItem: FC<GalleryItemProps> = (props: GalleryItemProps) => {
  const { data } = props;
  const router = useRouter();

  // In GalleryItem component
  const handleClick = (): void => {
    if (data.href) window.open(data.href, "_blank");
    else router.push("/projects");
  };

  return (
    <div
      className={`relative w-[608px] h-[555px] flex items-end justify-between transition-200 rounded-3xl ${data.backgroundColor}`}
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
          className={`mt-8 !min-w-[180px] !max-w-[180px] !h-[42px] !pr-1 !text-base !border-opacity-20 hover:!border-opacity-80 
            ${data.borderColor} ${data.textColor}`}
          circleClass={` ${data.fillColor}`}
          pathClass={` ${data.fillColor}`}
          svgClass="-rotate-45"
          callback={() => handleClick()}
        />
      </div>
      {/* <Image
        src={data?.srcMobile ?? data.src}
        alt={data.name}
        width={300}
        height={400}
        className=" sm:hidden absolute top-0 left-1/2 transform -translate-x-1/2"
      /> */}
      {/* <Image
          src={data.src}
          alt={data.name}
          fill
          className="object-cover overflow-hidden"
        /> */}
    </div>
  );
};

export default GalleryItem;
