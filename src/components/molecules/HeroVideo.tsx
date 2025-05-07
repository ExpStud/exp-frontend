import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import { set } from "video.js/dist/types/tech/middleware";
import "video.js/dist/video-js.css";
import "videojs-contrib-quality-levels";

// Replace with your real Cloudflare Stream UID
const CLOUDFLARE_VIDEO_ID = "83963f0ba210184052a39ba1678f81ff";

const HeroVideo = () => {
  const videoNodeRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<any>(null);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && videoNodeRef.current && !playerRef.current) {
      const player = videojs(videoNodeRef.current, {
        autoplay: true,
        controls: true,
        preload: "auto",
        responsive: true,
        fluid: true,
        muted: false,
        sources: [
          {
            src: `https://videodelivery.net/${CLOUDFLARE_VIDEO_ID}/manifest/video.m3u8`,
            type: "application/x-mpegURL",
          },
        ],
      });

      // Try to set highest quality
      player.ready(() => {
        //@ts-ignore
        const qualityLevels = player.qualityLevels?.();
        if (qualityLevels) {
          qualityLevels.on("addqualitylevel", () => {
            for (let i = 0; i < qualityLevels.length; i++) {
              qualityLevels[i].enabled = false;
            }

            // Enable the highest quality level
            const max = [...qualityLevels].reduce((a, b) =>
              a.height > b.height ? a : b
            );
            max.enabled = true;
          });
        }
      });

      playerRef.current = player;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    setPlaying(false);
  }, []);

  return (
    <div
      className="relative w-screen md:w-[700px] 3xl:w-[926px] aspect-video md:rounded-t-3xl max-w-4xl mx-auto bg-black/70 overflow-hidden"
      onClick={() => {
        if (!isPlaying) setPlaying(true);
      }}
    >
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={() => setPlaying(true)}
            className="group absolute flex items-center justify-center  rounded-full"
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
      )}

      {isPlaying && (
        <video
          ref={videoNodeRef}
          className="video-js vjs-default-skin w-[700px] aspect-video md:rounded-t-3xl object-scale-down"
          controls
        />
      )}
    </div>
  );
};

export default HeroVideo;
