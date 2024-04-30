import { motion } from "framer-motion";
import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const CloseIcon: FC<Props> = (props: Props) => {
  const { ...componentProps } = props;
  return (
    <svg
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`icon-hover ${componentProps.className}`}
      onClick={componentProps.onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8791 12.3745L0.626204 22.6274L2.74752 24.7487L13.0005 14.4958L23.2534 24.7487L25.3747 22.6274L15.1218 12.3745L25.3749 2.12132L23.2536 0L13.0005 10.2532L2.7473 5.72205e-06L0.625977 2.12133L10.8791 12.3745Z"
      />
    </svg>
  );
};

export default CloseIcon;
