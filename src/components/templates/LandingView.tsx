import { Dispatch, SetStateAction, FC } from "react";
import {
  Button,
  WelcomeSection,
  CardCarousel,
  LetsWorkLink,
  BackgroundImage,
  Testimonials,
  ProductList,
  About,
} from "@components";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="left-padding relative w-screen h-full items-center justify-center">
      <BackgroundImage />

      <div className="relative">
        <WelcomeSection
          title1="Think. Design."
          title2="Develop. Launch."
          className="left-margin"
        />
        <CardCarousel />
        <Button title="Our work" link="/projects" className="left-margin" />

        <hr className="border-white border-opacity-10 mt-12 lg:mt-20"></hr>
        <ProductList />

        <hr className="border-white border-opacity-10 mt-12 lg:mt-20"></hr>
        <Testimonials />

        <hr className="border-white border-opacity-10 mt-12 lg:mt-20"></hr>
        <About />

        <hr className="border-white border-opacity-10 mt-12 lg:mt-20"></hr>
        <LetsWorkLink />
      </div>
    </div>
  );
};

export default LandingView;
