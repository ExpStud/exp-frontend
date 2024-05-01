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
} from "@components";
import { ViewContext } from "src/contexts";
import { motion, useInView } from "framer-motion";
import { slideUp } from "src/constants";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}
interface AnimateWrapperProps {
  animate: boolean;
  children: React.ReactNode;
  delay?: number;
}

const AnimateWrapper: FC<AnimateWrapperProps> = (
  props: AnimateWrapperProps
) => {
  const { animate, children, delay = 0 } = props;

  return (
    <motion.div {...slideUp(animate, 150, 0.9, delay)}>{children}</motion.div>
  );
};

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

        <AnimateWrapper animate={productInView} delay={1.2}>
          <ProductList />
        </AnimateWrapper>

        <hr
          className="border-white border-opacity-10 mt-12 lg:mt-20"
          ref={testRef}
        />
        <AnimateWrapper animate={testInView} delay={1.2}>
          <Testimonials />
        </AnimateWrapper>

        <hr
          className="border-white border-opacity-10 mt-12 lg:mt-20"
          ref={aboutRef}
        />
        <AnimateWrapper animate={aboutInView} delay={1.2}>
          <About />
        </AnimateWrapper>

        <hr
          className="border-white border-opacity-10 mt-12 lg:mt-20"
          ref={workRef}
        />
        {/* <AnimateWrapper animate={workInView} delay={1.2}> */}
        <LetsWorkLink />
        {/* </AnimateWrapper> */}
      </div>
    </div>
  );
};

export default LandingView;
