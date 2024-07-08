import { motion } from "framer-motion";
import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const MenuIcon: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;
  return (
    <svg
      width="32"
      height="17"
      viewBox="0 0 32 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`icon-hover ${componentProps.className}`}
      onClick={componentProps.onClick}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V3H0V0Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 7H24V10H0V7Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M28 14H0V17H28V14Z" />
    </svg>
  );
};

export default MenuIcon;
