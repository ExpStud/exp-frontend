import { motion } from "framer-motion";
import { FC } from "react";
import { slideUp } from "@constants";

interface AnimateWrapperProps {
  animate: boolean;
  children: React.ReactNode;
  delay?: number;
  opacity?: boolean;
  onAnimationComplete?: () => void;
}

const AnimateWrapper: FC<AnimateWrapperProps> = (
  props: AnimateWrapperProps
) => {
  const { animate, children, delay = 0, opacity, onAnimationComplete } = props;

  return (
    <motion.div
      {...slideUp(animate, opacity ? 0 : 150, 0.9, delay)}
      onAnimationComplete={() => {
        onAnimationComplete && onAnimationComplete();
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;
