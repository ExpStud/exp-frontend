import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RightArrowIcon } from "@components";

interface Props {}

const LetsWorkLink: FC<Props> = (props: Props) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Link href="/contact">
      <div
        className={`pl-5 md:pl-10 py-20 text-5xl xl:text-8xl transition-300 cursor-pointer ${
          hover ? "bg-white  bg-opacity-[0.02]" : ""
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className={`text-white transition-300 ${hover ? "" : "opacity-70"}`}>
          Let&apos;s work together.
        </p>
        <RightArrowIcon className="mt-20 w-[129px] h-[70px]" animate={hover} />
      </div>
    </Link>
  );
};

export default LetsWorkLink;
