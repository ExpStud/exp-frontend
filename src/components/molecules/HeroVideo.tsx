import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-contrib-quality-levels";

// Replace with your real Cloudflare Stream UID
const CLOUDFLARE_VIDEO_ID = "e442e3bab6682d65fb5fedf1958c9879";

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

  return (
    <div className="relative w-screen md:w-[700px] h-[475px] rounded-t-3xl max-w-4xl mx-auto bg-black/70 overflow-hidden">
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={() => setPlaying(true)}
            className="absolute flex items-center justify-center bg-black/70 text-white text-xl px-6 py-3 rounded-full hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Play Video"
          >
            ▶ Play
          </button>
        </div>
      )}

      {isPlaying && (
        <video
          ref={videoNodeRef}
          className="video-js vjs-default-skin w-[700px] h-[475px] rounded-t-3xl object-scale-down"
          controls
        />
      )}
    </div>
  );
};

export default HeroVideo;
