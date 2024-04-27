import { FC } from "react";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
}

const Button: FC<Props> = (props: Props) => {
  const { title, link } = props;

  return (
    <Link href={link}>
      <div className="inline-flex items-center text-white text-xl font-medium pl-4 py-1 pr-1 rounded-full border border-gray-600">
        <span className="mr-10">{title}</span>
        <div className="flex items-center">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="white" fillOpacity="0.1"/>
            <path d="M18.7528 24L17.9148 23.169L22.858 18.233H10.5V17.0398H22.858L17.9148 12.1037L18.7528 11.2727L25.1165 17.6364L18.7528 24Z" fill="white"/>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default Button;
