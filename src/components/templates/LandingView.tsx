import { Dispatch, SetStateAction, FC, useRef } from "react";
import {
  LetsWorkLink,
  BackgroundImage,
  Testimonials,
  ProductList,
  About,
  ProjectGallery,
  LandingScreen,
} from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="relative w-full h-full">
      <BackgroundImage setAssets={setAssets} />
      <LandingScreen />
      <ProjectGallery />
      <ProductList />
      <Testimonials />
      <About />

      <LetsWorkLink />
    </div>
  );
};

export default LandingView;
