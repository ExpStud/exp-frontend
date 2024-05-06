import { HTMLMotionProps, motion } from "framer-motion";
import { FC } from "react";
import { slideUp } from "@constants";

interface AnimateWrapperProps extends HTMLMotionProps<"div"> {
  animate: boolean;
  delay?: number;
  opacity?: boolean;
  onAnimationComplete?: () => void;
}
const AnimateWrapper: FC<AnimateWrapperProps> = (
  props: AnimateWrapperProps
) => {
  const {
    animate,
    children,
    delay = 0,
    opacity,
    onAnimationComplete,
    ...componentProps
  } = props;

  return (
    <motion.div
      {...slideUp(animate, opacity ? 0 : 150, 0.9, delay)}
      onAnimationComplete={() => {
        onAnimationComplete && onAnimationComplete();
      }}
      className={componentProps.className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;
