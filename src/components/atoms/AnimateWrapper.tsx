import { motion } from "framer-motion";
import { FC } from "react";
import { slideUp } from "src/constants";
import { BackgroundImage } from "..";

interface AnimateWrapperProps {
  animate: boolean;
  children: React.ReactNode;
  delay?: number;
}

const AnimateWrapper: FC<AnimateWrapperProps> = (
  props: AnimateWrapperProps
) => {
  const { animate, children, delay = 0 } = props;

  return (
    <motion.div {...slideUp(animate, 150, 0.9, delay)}>{children}</motion.div>
  );
};

export default AnimateWrapper;
