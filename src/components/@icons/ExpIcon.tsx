import { motion } from "framer-motion";
import Link from "next/link";
import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const ExpIcon: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;

  return (
    <Link href="/">
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-500 hover:rotate-90 ${componentProps.className}`}
      >
        <rect
          y="23.8571"
          width="8.14283"
          height="8.14283"
          rx="2"
          fill="white"
        />
        <rect
          x="23.8574"
          y="23.8571"
          width="8.14283"
          height="8.14283"
          rx="2"
          fill="white"
        />
        <rect
          x="23.8574"
          width="8.14283"
          height="8.14283"
          rx="2"
          fill="white"
        />
        <rect width="8.14283" height="8.14283" rx="2" fill="white" />
        <rect
          x="9.28613"
          y="2.42859"
          width="13.4285"
          height="6.85712"
          rx="2"
          fill="white"
        />
        <rect
          x="9.28613"
          y="22.7142"
          width="13.4285"
          height="6.85712"
          rx="2"
          fill="white"
        />
        <rect
          x="2.42773"
          y="22.7142"
          width="13.4285"
          height="6.85712"
          rx="2"
          transform="rotate(-90 2.42773 22.7142)"
          fill="white"
        />
        <rect
          x="22.7139"
          y="22.7142"
          width="13.4285"
          height="6.85712"
          rx="2"
          transform="rotate(-90 22.7139 22.7142)"
          fill="white"
        />
      </motion.svg>
    </Link>
  );
};

export default ExpIcon;
