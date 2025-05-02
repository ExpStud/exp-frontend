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
  const { showView } = useViewStore();

  const productRef = useRef<HTMLHRElement>(null);
  const testRef = useRef<HTMLHRElement>(null);
  const aboutRef = useRef<HTMLHRElement>(null);
  const workRef = useRef<HTMLHRElement>(null);

  const productInView = useInView(productRef, {
    once: true,
  });
  const testInView = useInView(testRef, {
    once: true,
  });
  const aboutInView = useInView(aboutRef, {
    once: true,
  });

  return (
    <div className="relative w-full h-full">
      <BackgroundImage setAssets={setAssets} />
      <LandingScreen />
      <hr className="border-white border-opacity-10" ref={productRef} />

      {/*
        <Button title="Our work" link="/projects" className="left-margin" />> */}

      <ProductList />

      <hr
        className="border-white border-opacity-10 mt-12 lg:mt-20"
        ref={testRef}
      />
      <AnimateWrapper animate={showView && testInView}>
        <Testimonials />
      </AnimateWrapper>

      <hr
        className="border-white border-opacity-10 mt-12 lg:mt-20"
        ref={aboutRef}
      />
      <AnimateWrapper animate={showView && aboutInView}>
        <About />
      </AnimateWrapper>

      <hr
        className="border-white border-opacity-10 mt-12 lg:mt-20"
        ref={workRef}
      />
      <LetsWorkLink />
    </div>
  );
};

export default LandingView;
