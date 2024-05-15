import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  animate?: boolean;
}

const ArrowIcon: FC<Props> = (props: Props) => {
  const { animate = false } = props;

  const arrowVariants = {
    start: {
      rotate: 0,
      transition: {
        duration: 0.3,
      },
    },
    end: {
      rotate: -180,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <motion.svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={animate ? "end" : "start"}
      variants={arrowVariants}
    >
      <path
        d="M4.30975 5.0654C4.11832 5.0654 3.92688 4.99488 3.77575 4.84375L0.21914 1.28713C-0.0730466 0.994945 -0.0730466 0.511326 0.21914 0.21914C0.511326 -0.0730466 0.994945 -0.0730466 1.28713 0.21914L4.30975 3.24176L7.33237 0.21914C7.62455 -0.0730466 8.10817 -0.0730466 8.40036 0.21914C8.69255 0.511326 8.69255 0.994945 8.40036 1.28713L4.84375 4.84375C4.69261 4.99488 4.50118 5.0654 4.30975 5.0654Z"
        fill="#7A7A7A"
      />
    </motion.svg>
  );
};

export default ArrowIcon;
