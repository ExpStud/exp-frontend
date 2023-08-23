import { Variants, motion } from "framer-motion";
import { FC, SVGProps } from "react";

const yTopVariant: Variants = {
  hidden: { opacity: 1, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
  },
};
const yBottomVariant: Variants = {
  hidden: { opacity: 1, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
  },
};
const xLeftVariant: Variants = {
  hidden: { opacity: 1, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
  },
};
const xRightVariant: Variants = {
  hidden: { opacity: 1, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
  },
};

interface Props extends SVGProps<SVGSVGElement> {}

const ExpAnimatedIcon: FC<Props> = (props: Props) => {
  const { className, ...componentProps } = props;
  return (
    <motion.svg
      width="248" // Increase the width to add more padding on the sides
      height="248" // Increase the height to add more padding on the top and bottom
      viewBox="-20 -20 248 248" // Adjust viewBox to add padding
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_201_1416)">
        {/* left rectangle */}
        <motion.path
          d="M56.1918 58.1765H26.3519C23.0394 58.1765 20.3672 60.8487 20.3672 64.1612V100.014V135.838C20.3672 139.151 23.0394 141.823 26.3519 141.823H56.1918C59.5042 141.823 62.1765 139.151 62.1765 135.838V100.014V64.189C62.1765 60.8766 59.5042 58.1765 56.1918 58.1765Z"
          fill="white"
          variants={xRightVariant}
          initial="hidden"
          animate="visible"
        />
        {/* top right square */}
        <motion.path
          d="M160.019 0H198.015C201.327 0 204 2.67223 204 5.98468V43.9805C204 47.2929 201.327 49.9652 198.015 49.9652H160.019C156.707 49.9652 154.034 47.2929 154.034 43.9805V5.98468C154.007 2.70007 156.707 0 160.019 0Z"
          fill="white"
          variants={xRightVariant}
          initial="hidden"
          animate="visible"
        />
        {/* bottom left square */}
        <motion.path
          d="M10.0122 150.007H48.008C51.3205 150.007 53.9927 152.679 53.9927 155.992V193.987C53.9927 197.3 51.3205 199.972 48.008 199.972H10.0122C6.69979 199.972 4.02756 197.3 4.02756 193.987V155.992C3.99972 152.707 6.69979 150.007 10.0122 150.007Z"
          fill="white"
          variants={xLeftVariant}
          initial="hidden"
          animate="visible"
        />
        {/* top left square */}
        <motion.path
          d="M4 44.0083V6.01252C4 2.70006 6.67223 0.027832 9.98468 0.027832H47.9805C51.2929 0.027832 53.9652 2.70006 53.9652 6.01252V44.0083C53.9652 47.3208 51.2929 49.993 47.9805 49.993H10.0125C6.70006 50.0208 4 47.3208 4 44.0083Z"
          fill="white"
          variants={yTopVariant}
          initial="hidden"
          animate="visible"
        />
        {/* top rectangle */}
        <motion.path
          d="M139.839 16.3674H104.014H68.1898C64.8773 16.3674 62.2051 19.0397 62.2051 22.3521V52.192C62.2051 55.5045 64.8773 58.1767 68.1898 58.1767H104.014H139.839C143.151 58.1767 145.824 55.5045 145.824 52.192V22.3521C145.851 19.0397 143.151 16.3674 139.839 16.3674Z"
          fill="white"
        />
        {/* bottom rectangle */}
        <motion.path
          d="M139.839 141.851H104.014H68.1898C64.8773 141.851 62.2051 144.523 62.2051 147.836V177.676C62.2051 180.988 64.8773 183.66 68.1898 183.66H104.014H139.839C143.151 183.66 145.824 180.988 145.824 177.676V147.836C145.851 144.523 143.151 141.851 139.839 141.851Z"
          fill="white"
        />
        {/* bottom right square */}
        <motion.path
          d="M154.007 194.015V156.019C154.007 152.707 156.679 150.035 159.992 150.035H197.987C201.3 150.035 203.972 152.707 203.972 156.019V194.015C203.972 197.328 201.3 200 197.987 200H160.019C156.707 200.028 154.007 197.328 154.007 194.015Z"
          fill="white"
          variants={yBottomVariant}
          initial="hidden"
          animate="visible"
        />
        {/* right rectangle */}
        <motion.path
          d="M181.675 58.1765H151.835C148.523 58.1765 145.851 60.8487 145.851 64.1612V100.014V135.838C145.851 139.151 148.523 141.823 151.835 141.823H181.675C184.988 141.823 187.66 139.151 187.66 135.838V100.014V64.189C187.66 60.8766 184.988 58.1765 181.675 58.1765Z"
          fill="white"
          variants={xLeftVariant}
          initial="hidden"
          animate="visible"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_201_1416"
          x="0"
          y="0"
          width="208"
          height="208"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_201_1416"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_201_1416"
            result="shape"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};

export default ExpAnimatedIcon;
