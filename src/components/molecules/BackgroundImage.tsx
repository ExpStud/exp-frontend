import { FC } from "react";
import Image from "next/image";

interface Props {}

const BackgroundImage: FC<Props> = (props: Props) => {
  return (
    <div className="absolute top-0 left-0 w-full -z-[1]">
      <Image
        src="/images/bg-image.png"
        alt="quote"
        width={608}
        height={400}
        className="w-full object-cover grayscale"
      />
    </div>
  );
};

export default BackgroundImage;
