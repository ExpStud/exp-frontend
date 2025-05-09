import { FC } from "react";

interface ArrowButtonIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right";
  disabled?: boolean;
}

const ArrowButtonIcon: FC<ArrowButtonIconProps> = ({
  direction = "right",
  disabled = false,
  ...svgProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      {...svgProps}
      className={`group min-w-[36px] ${
        disabled ? "opacity-50 cursor-not-allowed" : " cursor-pointer"
      }`}
    >
      <circle
        cx="18"
        cy="18"
        r="18"
        className="transition-300 fill-sand group-hover:opacity-20 opacity-10"
      />

      {direction === "left" ? (
        <path
          d="M17.2472 24L18.0852 23.169L13.142 18.233H25.5V17.0398H13.142L18.0852 12.1037L17.2472 11.2727L10.8835 17.6364L17.2472 24Z"
          fill={svgProps.fill ?? "#FFF1B4"}
        />
      ) : (
        <path
          d="M18.7528 24L17.9148 23.169L22.858 18.233H10.5V17.0398H22.858L17.9148 12.1037L18.7528 11.2727L25.1165 17.6364L18.7528 24Z"
          fill={svgProps.fill ?? "#FFF1B4"}
        />
      )}
    </svg>
  );
};

export default ArrowButtonIcon;
