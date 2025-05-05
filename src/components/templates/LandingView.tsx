import { Dispatch, SetStateAction, FC, useRef } from "react";
import {
  LetsWorkLink,
  BackgroundImage,
  Testimonials,
  ProductList,
  About,
  AnimateWrapper,
  LandingScreen,
} from "@components";
import { useViewStore } from "src/contexts";
import { useInView } from "framer-motion";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="relative w-full h-full">
      <BackgroundImage setAssets={setAssets} />
      <LandingScreen />
      <ProductList />
      <Testimonials />

      <About />

      <LetsWorkLink />
    </div>
  );
};

export default LandingView;
