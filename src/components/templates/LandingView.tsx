import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext, slideUp } from "@constants";
import { TwitterIcon } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <motion.div {...slideUp(showView)}>
        <h2 className=" text-xl md:text-6xl px-5 text-center">
          expstud.io coming soon
        </h2>
      </motion.div>
      <motion.div className="absolute left-1/2 transform -translate-x-1/2 bottom-10">
        <TwitterIcon />
      </motion.div>
    </div>
  );
};

export default LandingView;
