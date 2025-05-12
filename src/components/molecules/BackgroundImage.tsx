import { Dispatch, FC, SetStateAction, use } from "react";
import Image from "next/image";
import { handleAssetLoad } from "@utils";
import { useTimeout, useWindowSize } from "@hooks";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
  children?: React.ReactNode;
}
const BackgroundImage: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [winWidth] = useWindowSize();

  // set assets after 2 seconds
  useTimeout({
    callback: () => {
      setAssets && setAssets([true]);
    },
    delay: 2000,
  });

  return (
    <div className="absolute inset-0 h-screen w-screen -z-[1] overflow-hidden">
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/landing/landing-bg-${
          winWidth > 1024 ? "xl" : winWidth > 640 ? "md" : "sm"
        }.png`} // Default image
        alt="Background"
        fill
        className="object-cover"
        onLoad={() => setAssets && handleAssetLoad(0, setAssets)}
      />
    </div>
  );
};

export default BackgroundImage;
