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
      <div className="inline-flex items-center text-white pl-2 pt-1 pr-1 pb-1 rounded-full border border-gray-500">
        <span className="mr-2">{title}</span>
        <div className="flex items-center">
          <div className="bg-gray-700 rounded-full px-1">
            <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Button;
