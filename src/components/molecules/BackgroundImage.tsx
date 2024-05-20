import { Dispatch, FC, SetStateAction, use } from "react";
import Image from "next/image";
import { handleAssetLoad } from "@utils";
import { useTimeout } from "@hooks";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}
const BackgroundImage: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  // set assets after 2 seconds
  useTimeout({
    callback: () => {
      setAssets && setAssets([true]);
    },
    delay: 2000,
  });

  return (
    <div className="absolute top-0 left-0 w-full -z-[1] overflow-hidden">
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/bg-image-sm.png`}
        alt="quote"
        width={608}
        height={400}
        className="w-full object-cover grayscale"
        onLoad={() => setAssets && handleAssetLoad(0, setAssets)}
      />
    </div>
  );
};

export default BackgroundImage;
