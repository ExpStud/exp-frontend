import { FC, HTMLAttributes, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  link?: string;
  disabled?: boolean;
  callback?: () => Promise<void> | void;
}

const Button: FC<Props> = (props: Props) => {
  const { title, link, disabled = false, callback, ...componentProps } = props;
  const [hover, setHover] = useState<boolean>(false);

  const router = useRouter();

  const handleClick = () => {
    if (disabled) return;
    if (callback) callback();
    else if (link) router.push(link);
  };

  return (
    <div
      className={`max-w-[220px] whitespace-nowrap ${componentProps.className}`}
      onClick={() => handleClick()}
    >
      <div
        className={`cursor-pointer inline-flex items-center text-white text-xl font-medium pl-4 p-1 pr-1 rounded-full border border-white border-opacity-20 transition-300  ${
          disabled
            ? " cursor-not-allowed opacity-40"
            : "hover:border-opacity-80"
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span
          className={`mr-10 pb-0.5 transition-300 ${
            disabled ? "opacity-80" : hover ? "opacity-100" : "opacity-80"
          }`}
        >
          {title}
        </span>
        <div className="flex items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="18"
              fill="white"
              className={`transition-300 ${
                disabled ? "opacity-10" : hover ? "opacity-30" : "opacity-10"
              }`}
            />
            <path
              d="M18.7528 24L17.9148 23.169L22.858 18.233H10.5V17.0398H22.858L17.9148 12.1037L18.7528 11.2727L25.1165 17.6364L18.7528 24Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Button;
