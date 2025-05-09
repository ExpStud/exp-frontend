import { useEffect, useState } from "react";
import { CloudflareVideoPlayer } from "@components";

// Replace with your real Cloudflare Stream UID
const CLOUDFLARE_VIDEO_ID = "106166d3a21dc8e4bd59958653f32f80";

const HeroVideo = () => {
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
  }, []);

  return (
    <div
      className="relative w-screen md:w-[700px] 3xl:w-[926px] aspect-video md:rounded-t-3xl bg-black/70 overflow-hidden"
      onClick={() => {
        if (!isPlaying) setPlaying(true);
      }}
    >
      {!isPlaying ? (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={() => setPlaying(true)}
            className="group absolute flex items-center justify-center rounded-full"
            aria-label="Play Video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
            >
              <path
                d="M57 37.5359C59.6667 39.0755 59.6667 42.9245 57 44.4641L36 56.5885C33.3333 58.1281 30 56.2036 30 53.1244L30 28.8756C30 25.7964 33.3333 23.8719 36 25.4115L57 37.5359Z"
                className="transition-300 fill-[#D9D9D9]/80 group-hover:fill-white"
              />
              <circle
                cx="40.5"
                cy="40.5"
                r="40"
                className="transition-300 stroke-[#474747] group-hover:stroke-white/60"
              />
            </svg>
          </button>
        </div>
      ) : (
        <CloudflareVideoPlayer
          videoId="dd20e765bdeb6307d8b0c1a1399c8b83"
          autoplay={true}
          muted={false}
          quality={1080}
          className="!rounded-t-3xl object-scale-down"
        />
        // <video
        //   ref={videoNodeRef}
        //   className="video-js vjs-default-skin w-screen md:w-[700px] md:h-[394px] 3xl:w-[926px] 3xl:h-[522px] rounded-t-3xl"
        //   controls
        // />
      )}
    </div>
  );
};

export default HeroVideo;
