"use client";

import { FC, useRef } from "react";
import { Button, Gallery, GalleryItem } from "@components";
import { GalleryType, clients } from "@constants";
import { useViewStore } from "@contexts";
import { motion, useInView } from "framer-motion";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Stagger child animations
      delayChildren: 0.3, // Delay before starting child animations
    },
  },
};

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and slide down
  visible: {
    opacity: 1,
    y: 0, // Slide up to its original position
    transition: {
      duration: 0.6, // Duration of the animation
      ease: "easeOut", // Smooth easing
    },
  },
};

// Folio
// Somos
// Scum
// Cyber
const galleryData: GalleryType[] = [
  clients[6].gallery![0],
  clients[0].gallery![0],
  clients[0].gallery![1],
  clients[3].gallery![0],
];

const ProjectGallery: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-35% 0px" });
  const { showView } = useViewStore();

  return (
    <motion.div
      className="landing-container-left py-10 flex flex-col justify-center 2010:items-center"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView && showView ? "visible" : "hidden"}
    >
      <div className="flex flex-col items-start justify-center gap-0 h-full max-w-[1864px]">
        {/* Heading */}
        <motion.div variants={itemVariants}>
          <h2 className="mb-3">Check out</h2>
          <h2 className="text-sand">our work.</h2>
        </motion.div>
        {/* Gallery */}
        <motion.div variants={itemVariants} className="w-full">
          <Gallery itemWidth={608}>
            {galleryData.map((item, i) => (
              <GalleryItem key={i} data={item} />
            ))}
          </Gallery>
        </motion.div>

        {/* Button */}
        <motion.div variants={itemVariants}>
          <Button
            title="See more projects"
            link="/projects"
            className="!min-w-[240px] !min-h-[48px] mt-5 2xl:mt-10"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectGallery;
