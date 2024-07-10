import {
  Dispatch,
  SetStateAction,
  FC,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  Button,
  WelcomeSection,
  CardCarousel,
  LetsWorkLink,
  BackgroundImage,
  Testimonials,
  ProductList,
  About,
  AnimateWrapper,
} from "@components";
import { ViewContext } from "src/contexts";
import { useInView } from "framer-motion";
import CarouselSlider from "../molecules/CarouselSlider";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  const [sliderValue, setSliderValue] = useState(0);
  const [fromSlider, setFromSlider] = useState(false);

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

  // console.log("fromSlider ", fromSlider);
  console.log("sliderValue ", fromSlider, Math.round(sliderValue));

  return (
    <div className="relative w-full h-full">
      <BackgroundImage setAssets={setAssets} />

      <AnimateWrapper animate={showView} className="relative">
        <WelcomeSection
          title1="Timeless designs. "
          title2="Seamless
          solutions."
        />
        <CardCarousel
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
          fromSlider={fromSlider}
          setFromSlider={setFromSlider}
        />
        <div className="flex w-full lg:justify-center -mt-10 lg:-mt-14 mb-14 pl-5 lg:pl-0">
          <CarouselSlider
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
            setFromSlider={setFromSlider}
            fromSlider={fromSlider}
          />
        </div>
        <Button title="Our work" link="/projects" className="left-margin" />
      </AnimateWrapper>

      <hr
        className="border-white border-opacity-10 mt-12 lg:mt-20"
        ref={productRef}
      />

      <AnimateWrapper animate={showView && productInView}>
        <ProductList />
      </AnimateWrapper>

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
      {/* <AnimateWrapper animate={workInView} > */}
      <LetsWorkLink />
      {/* </AnimateWrapper> */}
    </div>
  );
};

export default LandingView;
