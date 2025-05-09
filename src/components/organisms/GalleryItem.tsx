import { ArrowButtonIcon } from "@components";
import { GalleryType } from "@constants";
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
      className={`relative w-[608px] h-[555px] flex flex-col items-end justify-between transition-200 rounded-3xl  p-10 ${data.backgroundColor}`}
    >
      {/* add video */}
      <div className="w-[560px] h-[356px] bg-white/40 rounded-3xl overflow-hidden">
        <iframe
          src="https://iframe.videodelivery.net/cec7ccf4f3a6b358eb229be0409b64af?autoplay=true&muted=true"
          allow="autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          className="w-full h-full rounded-3xl"
        />
      </div>

      <div className="flex w-full justify-between items-end">
        <div
          className={`flex flex-col gap-1 justify-center max-w-[380px] ${data.textColor}`}
        >
          <p className="text-opacity-75 text-lg md:text-xl pl-0.5">
            {data.name}
          </p>
          <h3 className="text-3xl md:text-4xl whitespace-nowrap ">
            {data.title}
          </h3>
        </div>

        <ArrowButtonIcon
          className={`!border-opacity-20 hover:!border-opacity-80 ${data.borderColor} ${data.textColor}`}
          fill={data.fillColor}
          onClick={() => handleClick()}
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
