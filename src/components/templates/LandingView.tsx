import { Dispatch, SetStateAction, FC, useContext, useRef } from "react";
import {
  Button,
  WelcomeSection,
  CardCarousel,
  LetsWorkLink,
  BackgroundImage,
  Testimonials,
  ProductList,
  About,
  AnimateWrapper
} from "@components";
import { ViewContext } from "src/contexts";
import {  useInView } from "framer-motion";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}


const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

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
  const workInView = useInView(workRef, {
    once: true,
  });

  return (
    <div className="left-padding relative w-full h-full">
      <BackgroundImage setAssets={setAssets} />

      <div className="relative">
        <AnimateWrapper animate={showView}>
          <WelcomeSection title1="Think. Design." title2="Develop. Launch." />
          <CardCarousel />
          <Button title="Our work" link="/projects" className="left-margin" />
        </AnimateWrapper>

        <hr
          className="border-white border-opacity-10 mt-12 lg:mt-20"
          ref={productRef}
        />

        <AnimateWrapper animate={productInView} >
          <ProductList />
        </AnimateWrapper>

        <hr
          className="border-white border-opacity-10 mt-12 lg:mt-20"
          ref={testRef}
        />
        <AnimateWrapper animate={testInView} >
          <Testimonials />
        </AnimateWrapper>

        <hr
          className="border-white border-opacity-10 mt-12 lg:mt-20"
          ref={aboutRef}
        />
        <AnimateWrapper animate={aboutInView} >
          <About />
        </AnimateWrapper>

        <hr
          className="border-white border-opacity-10 mt-12 lg:mt-20"
          ref={workRef}
        />
        {/* <AnimateWrapper animate={workInView} > */}
        <LetsWorkLink />
        {/* </AnimateWrapper> */}
      </div>
    </div>
  );
};

export default LandingView;
