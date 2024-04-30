import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const LetsWorkLink: FC<Props> = (props: Props) => {
  return (
    <div className="ml-10 mt-20 mb-20 text-5xl xl:text-8xl">
      <Link href="/contact">
        <p>Let&apos;s work together.</p>
        <Image
          src="/images/arrow.svg"
          alt="arrow"
          width={129}
          height={70}
          className="mt-20"
        />
      </Link>
    </div>
  );
};

export default LetsWorkLink;
