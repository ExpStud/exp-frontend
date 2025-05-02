import { HeroVideo, Logo } from "@components";
import { FC } from "react";
import { motion } from "framer-motion";
import { useViewStore } from "@contexts";
import { introContainerVariants, introItemVariants } from "@constants";

const LandingScreen: FC = () => {
  const { showView } = useViewStore(); // Access `showView` from the store

  return (
    <motion.div
      className="min-h-[100svh] w-screen flex flex-col items-center justify-end gap-5 lg:gap-10 border-b border-white border-opacity-10 px-5 lg:px-0"
      variants={introContainerVariants}
      initial="hidden" // Start in the "hidden" state
      animate={showView ? "show" : "hidden"} // Animate to "show" only when `showView` is true
    >
      {/* Logo */}
      <motion.div variants={introItemVariants}>
        <Logo />
      </motion.div>

      {/* Tagline */}
      <motion.div
        variants={introItemVariants}
        className="col-centered uppercase w-[350px] h-[49px] lg:text-lg text-sand-300 bg-sand/10 border border-exp-gray-100 font-bold rounded-3xl"
      >
        Design & Development Studio
      </motion.div>

      {/* Subtitle */}
      <motion.p
        variants={introItemVariants}
        className="text-3xl lg:text-4xl text-center md:text-start"
      >
        proof is in the pudding, click play below
      </motion.p>

      {/* Hero Video */}
      <motion.div variants={introItemVariants}>
        <HeroVideo />
      </motion.div>
    </motion.div>
  );
};

export default LandingScreen;
