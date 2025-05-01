import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Stream } from "@cloudflare/stream-react";

const HeroVideo = () => {
  const [isPlaying, setPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  useEffect(() => {
    if (isPlaying && playerRef.current) {
      // Wait for the player to initialize
      playerRef.current.addEventListener("ready", () => {
        // Set the video quality to the highest available
        playerRef.current.setQuality("high"); // Options: "low", "medium", "high"
      });
    }
  }, [isPlaying]);
  return (
    <div className="relative aspect-video w-[700px] rounded-t-3xl max-w-4xl mx-auto bg-black/70">
      {/* Poster Image and Play Button */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center  z-10">
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
        <div className="w-full h-full object-cover rounded-t-3xl aspect-video max-w-[700px] ">
          <Stream
            src="e442e3bab6682d65fb5fedf1958c9879"
            autoplay
            controls
            muted={false} // Set to true if you want autoplay to work without user interaction
            streamRef={playerRef}
          />
        </div>
      )}
    </div>
  );
};

export default HeroVideo;
