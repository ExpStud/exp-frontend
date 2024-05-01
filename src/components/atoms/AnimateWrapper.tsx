import { motion } from "framer-motion";
import { FC } from "react";
import { slideUp } from "@constants";

interface AnimateWrapperProps {
  animate: boolean;
  children: React.ReactNode;
  delay?: number;
  opacity?: boolean;
}

const AnimateWrapper: FC<AnimateWrapperProps> = (
  props: AnimateWrapperProps
) => {
  const { animate, children, delay = 0, opacity } = props;

  return (
    <motion.div {...slideUp(animate, opacity ? 0 : 150, 0.9, delay)}>
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;
