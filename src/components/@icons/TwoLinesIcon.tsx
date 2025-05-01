import { motion } from "framer-motion";
import { FC, HTMLAttributes, SVGProps, useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  animate?: boolean;
}

const TwoLinesIcon: FC<Props> = (props: Props) => {
  const { animate = false } = props;

  return (
    <div
      className={`stroke-white/60 hover:stroke-white transition-200 relative flex-gap-2 w-7 h-7 cursor-pointer   ${
        props.className ?? ""
      }`}
      onClick={props.onClick}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute  left-0 w-full h-full transform transition-transform duration-300 ${
          animate ? "rotate-45 top-0" : "-top-1"
        }`}
      >
        <path d="M0.75 7H13.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg
        width="28"
        height="28"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute  left-0 w-full h-full transform transition-transform duration-300 ${
          animate ? "-rotate-45 top-0" : "top-1"
        }`}
      >
        <path
          d={"M0.75 7H13.25"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* <svg
        width="28"
        height="28"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute top-1.5 left-0 w-full h-full transform transition-transform duration-300 ${
          animate ? "opacity-0" : "opacity-100"
        }`}
      >
        <path d="M0.75 10H13.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg> */}
    </div>
  );
};

export default TwoLinesIcon;
