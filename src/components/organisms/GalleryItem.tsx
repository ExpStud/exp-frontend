import { ArrowButtonIcon, CloudflareVideoPlayer } from "@components";
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
      className={`relative w-[320px] md:w-[608px] h-auto md:h-[555px] flex flex-col gap-10 items-end justify-between transition-200 rounded-3xl p-5 ${data.backgroundColor}`}
    >
      <div className="w-full md:w-[560px] h-full aspect-video md:h-[378.5px] bg-white/40 rounded-3xl overflow-hidden">
        <CloudflareVideoPlayer
          videoId={data.videoId}
          quality={480}
          autoplay={true}
          muted
          loop
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
    </div>
  );
};

export default GalleryItem;
