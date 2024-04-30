import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const LetsWorkLink: FC<Props> = (props: Props) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className="left-margin mt-20 mb-20 text-5xl xl:text-8xl">
      <Link href="/contact">
        <p className="text-white opacity-80">Let&apos;s work together.</p>
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
