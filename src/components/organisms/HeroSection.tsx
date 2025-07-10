import { HeroVideo, Logo } from "@components";
import { FC } from "react";
import { motion } from "framer-motion";
import { useViewStore } from "@contexts";
import { introContainerVariants, introItemVariants } from "@constants";

const LandingScreen: FC = () => {
  const { showView } = useViewStore(); // Access `showView` from the store

  return (
    // <motion.div
    //   className="min-h-[100svh] w-screen flex flex-row items-center justify-end gap-8 md:gap-10 border-b border-white border-opacity-10 px-5 lg:px-0"
    //   variants={introContainerVariants}
    //   initial="hidden"
    //   animate={showView ? "show" : "hidden"}
    // >
    <motion.div
      className="min-h-[100svh] col-centered max-w-screen overflow-hidden border-b border-white border-opacity-10 px-5 lg:px-0 pt-[64px]"
      variants={introContainerVariants}
      initial="hidden"
      animate={showView ? "show" : "hidden"}
    >
      <motion.div className="flex flex-col xl:flex-row gap-16 xl:gap-32 max-w-[1256px]">
        <div className="flex flex-col gap-10 xl:gap-14 max-w-[671px] py-12">
          {/* Subtitle */}
          <motion.h1 variants={introItemVariants}>
            You&apos;re website doesn&apos;t need to be basic.{" "}
            <span className="text-sand font-medium">
              Sandbox, can help with that.
            </span>
          </motion.h1>
        </div>
        {/* Hero Video */}
        <motion.div
          variants={introItemVariants}
          className="xl:-mr-[400px] object-cover scale-95 z-0"
        >
          <HeroVideo />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingScreen;
