import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-contrib-quality-levels";

interface CloudflareVideoPlayerProps extends React.HTMLProps<HTMLVideoElement> {
  videoId: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  quality?: 480 | 720 | 1080;
}

const CloudflareVideoPlayer = ({
  videoId,
  autoplay = false,
  muted = false,
  loop = false,
  controls = false,
  quality = 1080,
  ...videoProps
}: CloudflareVideoPlayerProps) => {
  const videoNodeRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    let animationFrameId: number;

    if (videoNodeRef.current && !playerRef.current) {
      animationFrameId = requestAnimationFrame(() => {
        const videoElement = videoNodeRef.current; // Ensure it's not null
        if (videoElement) {
          const player = videojs(videoElement, {
            autoplay,
            muted,
            loop,
            controls,
            preload: "auto",
            responsive: false,
            fluid: false,
            html5: {
              vhs: {
                overrideNative: true, // force videojs HTTP streaming for HLS
              },
            },
            sources: [
              {
                src: `https://videodelivery.net/${videoId}/manifest/video.m3u8`,
                type: "application/x-mpegURL",
              },
            ],
          });

          player.ready(() => {
            // console.log(
            //   "Quality plugin loaded?",
            //   //@ts-ignore
            //   typeof player?.qualityLevels === "function"
            // );

            //@ts-ignore
            const qualityLevels = player.qualityLevels?.();

            // console.log("Quality levels object:", qualityLevels);
            // console.log("Available quality levels:", qualityLevels.levels_);
            // console.log(
            //   "Selected quality index:",
            //   qualityLevels.selectedIndex_
            // );

            if (qualityLevels) {
              // console.log("Quality levels available:", qualityLevels);
              qualityLevels.on("addqualitylevel", () => {
                for (let i = 0; i < qualityLevels.length; i++) {
                  const level = qualityLevels[i];
                  level.enabled = false;

                  // console.log("level:", level.height);
                  if (!quality || level.height === quality) {
                    level.enabled = true;
                  }
                }
              });
            }
          });

          playerRef.current = player;
        }
      });
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.dispose();
        } catch (error) {
          console.error("Error disposing video.js player:", error);
        }
        playerRef.current = null; // Reset the reference
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [videoId, autoplay, muted, quality]);

  return (
    <video
      ref={videoNodeRef}
      className={`video-js vjs-default-skin w-full h-full aspect-video ${videoProps.className}`}
      controls
    />
  );
};

export default CloudflareVideoPlayer;
